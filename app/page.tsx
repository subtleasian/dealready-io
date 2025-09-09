import Image from 'next/image';
import Button from '@/components/Button';
import WaitlistForm from '@/components/WaitlistForm';
import Link from 'next/link';

const calendly = process.env.CALENDLY_URL || 'https://calendly.com/dson21/30min';

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="container nav">
          <div className="brand">
            <Image src="/assets/logo.svg" alt="DealReady.io logo" width={100} height={20} />
            <span>DealReady.io</span>
          </div>
          <nav>
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <Link className="btn primary" href="#cta">Join Waitlist</Link>
          </nav>
        </div>
      </header>

      <section className="section hero">
        <div className="container hero-grid">
          <div>
            <div className="kicker">Sell your business smarter</div>
            <h1>Banker-quality prep <br/>in a weekend, not 6 months.</h1>
            <p className="lead">Generate a CIM, valuation benchmark, and deal-readiness checklist tailored to your company — without paying 2–5% success fees.</p>
            <div style={{marginTop:20}}>
              <Link href="#cta" className="btn primary">Join Waitlist</Link>
              <a className="btn outline" style={{marginLeft:8}} href={calendly} target="_blank" rel="noreferrer">Book Intro Call</a>
            </div>
            <p className="trustline">Built by ex-IB analysts • Designed for founders with $5M–$50M revenue</p>
          </div>
          <div>
            <div className="card">
              <div className="badge">Preview</div>
              <h2 style={{marginTop:8}}>CIM-Lite Overview</h2>
              <ul className="list">
                <li><img className="icon" src="/assets/icons/document.svg" alt="document"/> Executive Summary — <span className="small">Tell your story the way bankers do.</span></li>
                <li><img className="icon" src="/assets/icons/chart.svg" alt="chart"/> Valuation Benchmarks — <span className="small">Comparable ranges with confidence bands.</span></li>
                <li><img className="icon" src="/assets/icons/checklist.svg" alt="checklist"/> Readiness Checklist — <span className="small">Fix red flags before buyers see them.</span></li>
                <li><img className="icon" src="/assets/icons/chat.svg" alt="chat"/> AI Banker Chat — <span className="small">Plain-English answers to sell-side questions.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="section">
        <div className="container grid-2">
          <div>
            <h2>Selling is overwhelming.</h2>
            <p className="lead">Most founders sell once. Bankers take months. Marketplaces don’t prepare you. Accountants and lawyers give pieces, not the whole picture.</p>
          </div>
          <div className="card">
            <ul className="list">
              <li>Don’t know where to start or what buyers want to see</li>
              <li>Bankers charge 2–5% of your deal</li>
              <li>Marketplaces just list you — they don’t prepare you</li>
              <li>Confusion over CIM, IOI, LOI, diligence, working capital</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="features" className="section" style={{background:'#ffffff'}}>
        <div className="container">
          <h2>Meet your AI-assisted banker</h2>
          <div className="grid-3" style={{marginTop:16}}>
            <div className="card">
              <img className="icon" src="/assets/icons/document.svg" alt="document"/>
              <h3>CIM-Lite in hours</h3>
              <p>Generate banker-style marketing materials through a guided wizard.</p>
            </div>
            <div className="card">
              <img className="icon" src="/assets/icons/chart.svg" alt="chart"/>
              <h3>Valuation benchmarking</h3>
              <p>See what companies like yours sell for and where you fit.</p>
            </div>
            <div className="card">
              <img className="icon" src="/assets/icons/checklist.svg" alt="checklist"/>
              <h3>Readiness score</h3>
              <p>Identify red flags before buyers do, and fix them fast.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="section">
        <div className="container">
          <h2>How it works</h2>
          <div className="grid-3" style={{marginTop:16}}>
            <div className="card"><strong>1. Intake</strong><p>Answer a few structured questions about your company.</p></div>
            <div className="card"><strong>2. Draft</strong><p>Our AI builds your CIM-Lite and valuation range.</p></div>
            <div className="card"><strong>3. Ready</strong><p>Get a readiness checklist & next steps to increase value.</p></div>
          </div>
        </div>
      </section>

      <section id="cta" className="section">
        <div className="container grid-2">
          <div>
            <h2>Be first to try DealReady.io</h2>
            <p className="lead">Join the waitlist or book a 30-minute intro call.</p>
            <div style={{marginTop:12}}>
              <a className="btn outline" href={calendly} target="_blank" rel="noreferrer">Book Intro Call</a>
            </div>
          </div>
          <div className="card">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <footer className="section compact footer">
        <div className="container small">
          © {new Date().getFullYear()} DealReady.io. All rights reserved. — <Link href="/privacy" style={{color:'var(--color-secondary)', textDecoration:'none'}}>Privacy</Link>
        </div>
      </footer>
    </main>
  );
}
