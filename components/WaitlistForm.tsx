'use client';
import React, { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(1),
  revenue: z.string().min(1),
  timing: z.string().min(1),
});

export default function WaitlistForm() {
  const [status, setStatus] = useState<'idle' | 'ok' | 'error' | 'loading'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      alert('Please fill all fields with valid information.');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error('Bad response');
      setStatus('ok');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'ok') {
    return (
      <div className="card" style={{ background: '#E6F4EA', color: '#14532D' }}>
        Thanks! You’re on the list — check your inbox for a confirmation.
      </div>
    );
  }
  if (status === 'error') {
    return (
      <div className="card" style={{ background: '#FEF3C7', color: '#92400E' }}>
        Something went wrong. Please book a call instead.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} id="waitlist-form">
      <label>Full Name<br/><input name="name" required style={{width:'100%', padding:'12px', border:'1px solid #e5e7eb', borderRadius:8, margin:'6px 0 12px'}}/></label>
      <label>Work Email<br/><input type="email" name="email" required style={{width:'100%', padding:'12px', border:'1px solid #e5e7eb', borderRadius:8, margin:'6px 0 12px'}}/></label>
      <label>Company Name<br/><input name="company" required style={{width:'100%', padding:'12px', border:'1px solid #e5e7eb', borderRadius:8, margin:'6px 0 12px'}}/></label>
      <label>Revenue Range<br/>
        <select name="revenue" required style={{width:'100%', padding:'12px', border:'1px solid #e5e7eb', borderRadius:8, margin:'6px 0 12px'}}>
          <option value="$5–10M">$5–10M</option>
          <option value="$10–20M">$10–20M</option>
          <option value="$20–50M">$20–50M</option>
          <option value="$50M+">$50M+</option>
        </select>
      </label>
      <label>Target Timing<br/>
        <select name="timing" required style={{width:'100%', padding:'12px', border:'1px solid #e5e7eb', borderRadius:8, margin:'6px 0 12px'}}>
          <option value="0–3 months">0–3 months</option>
          <option value="3–6 months">3–6 months</option>
          <option value="6–12 months">6–12 months+</option>
        </select>
      </label>
      <button className="btn primary" type="submit" style={{width:'100%'}} disabled={status==='loading'}>
        {status === 'loading' ? 'Submitting…' : 'Join Waitlist'}
      </button>
      <p className="small" style={{marginTop:8}}>
        We’ll never share your info. <a href="/privacy">Privacy</a>
      </p>
    </form>
  );
}
