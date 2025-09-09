import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(1),
  revenue: z.string().min(1),
  timing: z.string().min(1),
});

export async function POST(request: Request){
  const body = await request.json();
  const parsed = schema.safeParse(body);
  if(!parsed.success){
    return NextResponse.json({ ok:false, error:'invalid' }, { status: 400 });
  }
  const WEBHOOK_URL = process.env.WEBHOOK_URL;
  if(!WEBHOOK_URL){
    return NextResponse.json({ ok:false, error:'Missing WEBHOOK_URL' }, { status: 500 });
  }
  const res = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ source: 'dealready-io-landing', ...parsed.data })
  });
  if(!res.ok){
    return NextResponse.json({ ok:false, error:'upstream', detail: await res.text() }, { status: 502 });
  }
  return NextResponse.json({ ok:true });
}
