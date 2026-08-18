import subprocess
import os

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Ashok Pasala — Executive Resume</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

  @page {
    size: letter portrait;
    margin: 0.34in 0.38in;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #111827;
    background: #ffffff;
    font-size: 8.2pt;
    line-height: 1.28;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  a {
    color: #0f172a;
    text-decoration: none;
    font-weight: 500;
  }

  .header {
    border-bottom: 1.5pt solid #0f172a;
    padding-bottom: 5px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .name-block h1 {
    font-size: 18.5pt;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #0f172a;
    line-height: 1;
  }

  .name-block .title {
    font-size: 8.5pt;
    font-weight: 600;
    color: #334155;
    margin-top: 3px;
    letter-spacing: -0.01em;
  }

  .contact-block {
    text-align: right;
    font-family: 'JetBrains Mono', monospace;
    font-size: 7.1pt;
    color: #475569;
    line-height: 1.35;
  }

  .contact-block a {
    color: #0f172a;
  }

  .section {
    margin-bottom: 5px;
  }

  .section-title {
    font-size: 8.3pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #0f172a;
    border-bottom: 0.75pt solid #cbd5e1;
    padding-bottom: 1.5px;
    margin-bottom: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .summary-text {
    font-size: 7.85pt;
    color: #334155;
    line-height: 1.26;
    text-align: justify;
  }

  .item {
    margin-bottom: 3.5px;
  }

  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .item-title {
    font-size: 8.4pt;
    font-weight: 700;
    color: #0f172a;
  }

  .item-subtitle {
    font-size: 7.9pt;
    font-weight: 600;
    color: #475569;
  }

  .item-date {
    font-family: 'JetBrains Mono', monospace;
    font-size: 7.1pt;
    color: #64748b;
    font-weight: 500;
  }

  ul.bullets {
    list-style-type: disc;
    padding-left: 12px;
    margin-top: 1.5px;
  }

  ul.bullets li {
    font-size: 7.75pt;
    color: #334155;
    margin-bottom: 1.2px;
    line-height: 1.24;
  }

  ul.bullets li strong {
    color: #0f172a;
    font-weight: 600;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: 105px 1fr;
    row-gap: 1.8px;
    font-size: 7.65pt;
    line-height: 1.22;
  }

  .skill-cat {
    font-weight: 700;
    color: #0f172a;
    text-transform: uppercase;
    font-size: 7pt;
    letter-spacing: 0.03em;
  }

  .skill-val {
    color: #334155;
  }

  .edu-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .highlight-badge {
    display: inline-block;
    background: #f1f5f9;
    color: #0f172a;
    font-family: 'JetBrains Mono', monospace;
    font-size: 6.7pt;
    padding: 0.5px 3.5px;
    border-radius: 2px;
    font-weight: 500;
  }
</style>
</head>
<body>

  <!-- Header -->
  <header class="header">
    <div class="name-block">
      <h1>ASHOK PASALA</h1>
      <div class="title">Founder & CEO (Varellen Technologies) • Founder & Systems Architect (Norveth, OSPRED, QROS)</div>
    </div>
    <div class="contact-block">
      <div><a href="https://ashokpasala.vercel.app">ashokpasala.vercel.app</a> • Andhra Pradesh, India</div>
      <div><a href="mailto:ashokashishms@gmail.com">ashokashishms@gmail.com</a> • <a href="mailto:founder@norveth.app">founder@norveth.app</a></div>
      <div><a href="https://devpost.com/ashokashishms/">devpost.com/ashokashishms</a> • <a href="https://github.com/ashokwebs">github.com/ashokwebs</a> • <a href="https://linkedin.com/in/ashok-raj-p-1b8539317">LinkedIn</a></div>
    </div>
  </header>

  <!-- Executive Summary -->
  <section class="section">
    <div class="section-title">Executive Summary</div>
    <p class="summary-text">
      <strong>Founder, AI Systems Architect, and Deep Tech Engineer</strong> engineering autonomous multi-agent orchestration frameworks, quantitative ML trading systems, MCP discovery search engines, and high-concurrency distributed backends. Founder & CEO of <strong>Varellen Technologies</strong>, Architect of <strong>Norveth</strong> (<a href="https://norveth.app">norveth.app</a>), <strong>OSPRED</strong>, and <strong>QROS</strong>. Builder of <strong>40+ shipped software systems across 50+ global hackathons</strong> (Google Cloud Rapid Agent, Bank of India & IIT Hyderabad, SanDisk, Qwen Global). Computer Science & Distributed Systems at <strong>VIT-AP University</strong> (2024–2028).
    </p>
  </section>

  <!-- Venture & Leadership Experience -->
  <section class="section">
    <div class="section-title">Venture Leadership &amp; Systems Engineering</div>

    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">Varellen Technologies</span>
          <span class="item-subtitle">— Founder &amp; Chief Executive Officer</span>
        </div>
        <span class="item-date">2024 – PRESENT | ENTERPRISE &amp; SYSTEMS</span>
      </div>
      <ul class="bullets">
        <li>Guiding venture roadmap and system design for enterprise digital platforms, closed-loop AI automation pipelines, and high-throughput cloud infrastructure.</li>
        <li>Architected fault-tolerant microservice meshes with sub-millisecond API dispatch, zero-trust security postures, and automated Docker/K8s CI/CD pipelines.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">Norveth</span>
          <span class="item-subtitle">— Founder &amp; Systems Architect (<a href="https://norveth.app">norveth.app</a>)</span>
        </div>
        <span class="item-date">2024 – PRESENT | ENGINEERING INTELLIGENCE</span>
      </div>
      <ul class="bullets">
        <li>Architected full-lifecycle website engineering intelligence platform utilizing <strong>Playwright dynamic headless crawling</strong> with exponential backoff &amp; LLM failover, <strong>Model Context Protocol (MCP)</strong> tooling, and automated OWASP Top 10 security/performance diagnostics.</li>
        <li>Engineered Engineering Knowledge Graph reasoning layer mapping findings into interactive architecture diagrams and deterministic code fixes.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">OSPRED &amp; Yaltan</span>
          <span class="item-subtitle">— Creator &amp; Systems Architect</span>
        </div>
        <span class="item-date">2024 – PRESENT | AI CAPABILITY SEARCH</span>
      </div>
      <ul class="bullets">
        <li>Engineered autonomous discovery and indexing engine for Model Context Protocol (MCP) servers, reusable AI skills, and plugins using the Yaltan scraping pipeline.</li>
        <li>Designed Canonical Capability Schema and automated tool verification engine with SSRF/prompt-injection safety metadata scoring.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">QROS Quantitative Research</span>
          <span class="item-subtitle">— Quantitative Systems Architect</span>
        </div>
        <span class="item-date">2024 – PRESENT | QUANT ML TRADING</span>
      </div>
      <ul class="bullets">
        <li>Built high-frequency trading platform targeting <strong>Polymarket BTC 5-minute prediction markets</strong> using Binance 1-second streaming tick feeds.</li>
        <li>Trained LightGBM Scale/Shape ML models predicting strike settlement probabilities ($p_{up} = P(S_T > K)$) and volatility alongside an MM-1 market-making engine.</li>
      </ul>
    </div>
  </section>

  <!-- Selected Flagship Systems & Architectures -->
  <section class="section">
    <div class="section-title">Flagship Architectures &amp; Hackathon Systems (50+ Hackathons)</div>

    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">SlackMind Agent Command Center</span>
          <span class="highlight-badge">Google Cloud Rapid Agent</span>
        </div>
        <span class="item-date">Gemini, Vertex AI Data Store, MCP, Slack Bolt, Python</span>
      </div>
      <ul class="bullets">
        <li>Autonomous AI agent orchestration kernel coordinating intelligent agent swarms directly inside Slack with Gemini models, Vertex AI Search Data Store, and MCP tool routing.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">The Vector / Vector AI Command Center</span>
          <span class="highlight-badge">Autonomous C-Suite</span>
        </div>
        <span class="item-date">Multi-Agent Swarms, Python, LangChain, FastAPI, Next.js</span>
      </div>
      <ul class="bullets">
        <li>Autonomous multi-agent executive council (CEO, CTO, CMO) that transforms startup concepts into complete business plans, distributed tech architectures, and financial models with cross-agent consensus in seconds.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">Mule Account Detection System</span>
          <span class="highlight-badge">Bank of India &amp; IIT Hyderabad</span>
        </div>
        <span class="item-date">Graph ML, Anomaly Detection, Python, FastAPI, FinTech</span>
      </div>
      <ul class="bullets">
        <li>High-frequency financial crime and suspicious transaction detection system identifying illicit mule account networks in real-time.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">IWCIS Storage Architecture &amp; Qwen Chaos</span>
          <span class="highlight-badge">SanDisk &amp; Qwen Global</span>
        </div>
        <span class="item-date">exFAT Internals, Container Architecture, Qwen LLM, Vector Memory</span>
      </div>
      <ul class="bullets">
        <li>Containerized exFAT file-system storage optimization (SanDisk) paired with a self-persistent neural MemoryAgent with cross-session state recall (Qwen Global).</li>
      </ul>
    </div>
  </section>

  <!-- Technical Competencies -->
  <section class="section">
    <div class="section-title">Technical Arsenal &amp; Domain Mastery</div>
    <div class="skills-grid">
      <div class="skill-cat">Autonomous AI &amp; Quant:</div>
      <div class="skill-val">Multi-Agent Swarms, Model Context Protocol (MCP), LightGBM, Quantitative Volatility, LangChain, RAG Pipelines, Vector DBs (ChromaDB, Pinecone).</div>

      <div class="skill-cat">Languages:</div>
      <div class="skill-val">Python, TypeScript, JavaScript, Go, Rust, Java, C/C++, SQL, Bash/Shell, Solidity.</div>

      <div class="skill-cat">Backend &amp; Infra:</div>
      <div class="skill-val">FastAPI, Node.js, Express, Next.js 16 (App Router), React 19, PostgreSQL, Redis Streams, Docker, Kubernetes, Playwright, Cloudflare Tunnels.</div>

      <div class="skill-cat">Security &amp; Web3:</div>
      <div class="skill-val">OWASP Top 10 Hardening, SSRF Protection, Zero-Trust Architecture, EVM Smart Contracts, Cryptographic Protocols, Graph Anomaly Detection.</div>
    </div>
  </section>

  <!-- Education & Hackathons -->
  <section class="section">
    <div class="section-title">Education &amp; 50+ Hackathons Track Record</div>
    <div class="edu-row">
      <div>
        <span class="item-title">VIT-AP University</span>
        <span class="item-subtitle">— B.Tech in Computer Science &amp; Engineering</span>
      </div>
      <span class="item-date">2024 – 2028 | ANDHRA PRADESH, INDIA</span>
    </div>
    <div style="font-size: 7.6pt; color: #475569; margin-top: 1px;">
      <strong>Core Focus:</strong> Distributed Systems, Operating Systems Internals, Advanced Algorithms, Computer Networks, Database Architecture, Machine Learning.
    </div>
    <div style="font-size: 7.6pt; color: #475569; margin-top: 1px;">
      <strong>50+ Global Hackathons &amp; Challenges:</strong> Google Cloud Rapid Agent, Bank of India &amp; IIT Hyderabad, SanDisk Storage, Qwen Global, Slack AI, Google Devpost/XPRIZE.
    </div>
  </section>

</body>
</html>
"""

with open('/tmp/resume.html', 'w') as f:
    f.write(html_content)

print('Wrote /tmp/resume.html')
cmd = [
    'chromium',
    '--headless',
    '--disable-gpu',
    '--no-sandbox',
    '--no-pdf-header-footer',
    '--print-to-pdf=/home/charizard/ashok/public/resume.pdf',
    '/tmp/resume.html'
]
res = subprocess.run(cmd, capture_output=True, text=True)
print('Chromium exit code:', res.returncode)
print('STDOUT:', res.stdout)
print('STDERR:', res.stderr)
