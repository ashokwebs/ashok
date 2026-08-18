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
    margin: 0.36in 0.40in;
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
    font-size: 8.3pt;
    line-height: 1.29;
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
    padding-bottom: 6px;
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .name-block h1 {
    font-size: 19pt;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #0f172a;
    line-height: 1;
  }

  .name-block .title {
    font-size: 8.6pt;
    font-weight: 600;
    color: #334155;
    margin-top: 3px;
    letter-spacing: -0.01em;
  }

  .contact-block {
    text-align: right;
    font-family: 'JetBrains Mono', monospace;
    font-size: 7.2pt;
    color: #475569;
    line-height: 1.35;
  }

  .contact-block a {
    color: #0f172a;
  }

  .section {
    margin-bottom: 5.5px;
  }

  .section-title {
    font-size: 8.4pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #0f172a;
    border-bottom: 0.75pt solid #cbd5e1;
    padding-bottom: 1.5px;
    margin-bottom: 3.5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .summary-text {
    font-size: 7.9pt;
    color: #334155;
    line-height: 1.28;
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
    font-size: 8.5pt;
    font-weight: 700;
    color: #0f172a;
  }

  .item-subtitle {
    font-size: 8pt;
    font-weight: 600;
    color: #475569;
  }

  .item-date {
    font-family: 'JetBrains Mono', monospace;
    font-size: 7.2pt;
    color: #64748b;
    font-weight: 500;
  }

  ul.bullets {
    list-style-type: disc;
    padding-left: 13px;
    margin-top: 1.5px;
  }

  ul.bullets li {
    font-size: 7.8pt;
    color: #334155;
    margin-bottom: 1.5px;
    line-height: 1.26;
  }

  ul.bullets li strong {
    color: #0f172a;
    font-weight: 600;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: 105px 1fr;
    row-gap: 2px;
    font-size: 7.75pt;
    line-height: 1.24;
  }

  .skill-cat {
    font-weight: 700;
    color: #0f172a;
    text-transform: uppercase;
    font-size: 7.1pt;
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
    font-size: 6.8pt;
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
      <div class="title">Founder & CEO (Varellen Technologies) • Founder & Systems Architect (Norveth) • AI Systems Architect</div>
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
      <strong>Founder, AI Systems Architect, and Deep Tech Engineer</strong> building sovereign AI infrastructure, autonomous multi-agent swarms, and high-concurrency distributed backend systems from first principles. Founder & CEO of <strong>Varellen Technologies</strong> and <strong>Norveth</strong> (<a href="https://norveth.app">norveth.app</a>). Track record of shipping <strong>22+ production-grade AI platforms across 31 global hackathons</strong> on Devpost. Computer Science & Distributed Systems background at <strong>VIT-AP University</strong> (2024–2028).
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
        <li>Guiding venture roadmap and system design for enterprise digital platforms, autonomous AI workflow automation pipelines, and high-throughput cloud infrastructure.</li>
        <li>Architected fault-tolerant microservice meshes with sub-millisecond API dispatch, zero-trust security postures, and automated Docker/K8s CI/CD pipelines.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">Norveth</span>
          <span class="item-subtitle">— Founder &amp; Systems Architect (<a href="https://norveth.app">norveth.app</a>)</span>
        </div>
        <span class="item-date">2024 – PRESENT | AI INTELLIGENCE PLATFORM</span>
      </div>
      <ul class="bullets">
        <li>Architected full-lifecycle website intelligence platform utilizing <strong>real Chromium headless rendering</strong>, <strong>Model Context Protocol (MCP)</strong> server integration, and automated OWASP Top 10 security/performance diagnostics.</li>
        <li>Engineered distributed scan workers, deterministic AI code remediation pipelines, and developer CLI tools for code-level diagnostics.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">Independent Systems Engineering &amp; Strategic Advisory</span>
          <span class="item-subtitle">— Principal Technical Consultant</span>
        </div>
        <span class="item-date">2024 – PRESENT | GLOBAL REMOTE</span>
      </div>
      <ul class="bullets">
        <li>Delivering high-concurrency backend APIs, custom multi-agent orchestration frameworks, and mission-critical database designs for international founders.</li>
        <li>Conducted empirical research in agent convergence, vector embedding spaces, and proactive cyber attack surface mapping (OSPRED framework).</li>
      </ul>
    </div>
  </section>

  <!-- Selected Flagship Systems & Architectures -->
  <section class="section">
    <div class="section-title">Flagship Architectures &amp; Shipped Systems (22+ Projects)</div>

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
          <span class="item-title">CompanyBrain_AI &amp; Qwen Chaos MemoryAgent</span>
          <span class="highlight-badge">Enterprise &amp; Neural AI</span>
        </div>
        <span class="item-date">Python, Vector Search, FastAPI, Qwen LLM, PostgreSQL</span>
      </div>
      <ul class="bullets">
        <li>Autonomous enterprise AI executive fusing contracts, financials, and roadmaps alongside a self-persistent MemoryAgent with cross-session state recall engineered for the Qwen Global Hackathon.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">ResQNet Disaster Response Grid &amp; LaunchLens</span>
          <span class="highlight-badge">Crisis AI &amp; Due Diligence</span>
        </div>
        <span class="item-date">Next.js 16, Node.js, WebSockets, Geospatial AI, Python</span>
      </div>
      <ul class="bullets">
        <li>Real-time crisis orchestration grid for incident severity triage and life-saving resource dispatch paired with a multi-model market validation engine for VC due diligence.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div>
          <span class="item-title">OSPRED Autonomous Security Engine &amp; ShadowForge</span>
          <span class="highlight-badge">Security &amp; Web3</span>
        </div>
        <span class="item-date">Python, FastAPI, Docker, Linux Hardening, Solidity, Web3.js</span>
      </div>
      <ul class="bullets">
        <li>Proactive cybersecurity surface discovery, automated threat intelligence synthesis, and zero-trust Linux hardening combined with EVM on-chain intelligence auditing.</li>
      </ul>
    </div>
  </section>

  <!-- Technical Competencies -->
  <section class="section">
    <div class="section-title">Technical Arsenal &amp; Domain Mastery</div>
    <div class="skills-grid">
      <div class="skill-cat">Autonomous AI:</div>
      <div class="skill-val">Multi-Agent Swarms, Model Context Protocol (MCP), LangChain, LlamaIndex, RAG Pipelines, Vector DBs (ChromaDB, Pinecone), Prompt Engineering.</div>

      <div class="skill-cat">Languages:</div>
      <div class="skill-val">Python, TypeScript, JavaScript, Go, Rust, Java, C/C++, SQL, Bash/Shell, Solidity.</div>

      <div class="skill-cat">Backend & Infra:</div>
      <div class="skill-val">FastAPI, Node.js, Express, Next.js 16 (App Router), React 19, PostgreSQL, Redis Streams, MongoDB, Docker, Kubernetes, AWS, Nginx, CI/CD.</div>

      <div class="skill-cat">Security & Web3:</div>
      <div class="skill-val">OWASP Top 10 Hardening, Attack-Surface Mapping, Zero-Trust Architecture, EVM Smart Contracts, Cryptographic Protocols, Network Triage.</div>
    </div>
  </section>

  <!-- Education & Hackathons -->
  <section class="section">
    <div class="section-title">Education &amp; 31 Hackathons Track Record</div>
    <div class="edu-row">
      <div>
        <span class="item-title">VIT-AP University</span>
        <span class="item-subtitle">— B.Tech in Computer Science &amp; Engineering</span>
      </div>
      <span class="item-date">2024 – 2028 | ANDHRA PRADESH, INDIA</span>
    </div>
    <div style="font-size: 7.7pt; color: #475569; margin-top: 1px;">
      <strong>Core Focus:</strong> Distributed Systems, Operating Systems Internals, Advanced Algorithms, Computer Networks, Database Architecture, Machine Learning.
    </div>
    <div style="font-size: 7.7pt; color: #475569; margin-top: 1px;">
      <strong>31 Global Hackathons (22 Projects):</strong> Google Agentic AI Hackathon, Qwen Global Hackathon, Slack AI Hackathon, Global Disaster Tech, Bank of India National Hackathon.
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
