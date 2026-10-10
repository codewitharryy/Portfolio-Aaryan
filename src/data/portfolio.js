/* ------------------------------------------------------------------
   ALL CONTENT LIVES HERE — edit this file, not the components.
------------------------------------------------------------------ */

export const profile = {
  name: 'Aaryan Awasthi',
  initials: 'AA',
  role: 'Software Engineer · AI Engineer',
  location: 'Bhopal, India',
  email: 'aaryanawasthi444@gmail.com',
  phone: '+91 72472 19355',

  // Hero headline — split into 3 animated lines
  headline: {
    line1: "Hi, I'm",
    line2: 'Aaryan Awasthi',
    line3: 'I engineer software with AI.',
  },

  heroText:
    'Software Engineer with a strong foundation in computer science, full-stack development, and AI. I build scalable software systems and leverage AI, LLMs, and modern AI engineering techniques to solve real-world problems effectively.',

  // Files in /public — ALWAYS use absolute paths starting with "/"
  image: '/profile.jpg',
  resumeUrl: '/resume_epam.pdf',
  resumeFileName: 'Aaryan-Awasthi-Resume.pdf',

  // Inline SVG fallback if profile.jpg is missing
  imageFallback:
    'data:image/svg+xml;charset=utf-8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" role="img" aria-label="Aaryan Awasthi initials"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7c5cff"/><stop offset="1" stop-color="#22d3ee"/></linearGradient></defs><rect width="600" height="600" fill="#12121c"/><text x="50%" y="53%" font-family="Sora, sans-serif" font-size="190" font-weight="700" fill="url(#g)" text-anchor="middle" dominant-baseline="middle">AA</text></svg>`
    ),
}

export const about = {
  paragraphs: [
    'I’m a Software Engineer with a strong foundation in computer science and full-stack development, focused on building reliable, scalable software systems and solving complex engineering problems.',
    'I leverage AI, LLMs, RAG, and modern AI engineering techniques to make software smarter, more efficient, and more capable — combining strong software engineering fundamentals with practical AI applications.',
  ],
  facts: [
    { label: 'Experience', value: '1+ years' },
    { label: 'Location', value: 'Bhopal, India' },
    { label: 'Availability', value: 'Open to full-time' },
    { label: 'Focus', value: 'Software Engineering · AI · RAG' },
  ],
  stats: [
    { value: '350+', label: 'DSA Problems Solved' },
    { value: '4+', label: 'Major Projects' },
    { value: '3', label: 'Internships / Roles' },
  ],
}

/* ---------- Technical skills ---------- */
export const skillGroups = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Redux Toolkit', 'GSAP', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'MSSQL', 'Socket.IO'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Docker', 'AWS', 'GitHub Actions', 'Vite', 'Git', 'Postman'],
  },
  {
    category: 'Core CS',
    items: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Problem Solving', 'System Design'],
  },
]

// Scrolling marquee row
export const marqueeItems = [
  'React',
  'TypeScript',
  'Node.js',
  'Next.js',
  'MongoDB',
  'MSSQL',
  'Docker',
  'AWS',
  'Socket.IO',
  'Tailwind',
  'C++',
  'AI',
]

/* ---------- Work experience ---------- */
export const experience = [
  {
    role: 'Software Engineer Intern',
    company: 'EPAM Systems',
    period: 'Upcoming',
    location: 'India',
    points: [
      'Selected for the Software Engineer role at EPAM Systems.',
      'Will work on software engineering projects involving problem solving, development, and modern engineering practices.',
      'Preparing to contribute across application development, software design, and emerging AI-driven technologies.',
    ],
    stack: ['C++', 'JavaScript', 'Software Engineering', 'Artificial Intelligence'],
  },
  {
    role: 'SDE Intern',
    company: 'MPSEDC — State IT Centre',
    period: 'Present',
    location: 'Bhopal · On-site',
    points: [
      'Working as an SDE Intern at the State IT Centre under Madhya Pradesh State Electronics Development Corporation (MPSEDC).',
      'Contributing to full-stack software development and enterprise application workflows.',
      'Working with modern web technologies, backend integration, databases, and production-oriented development practices.',
    ],
    stack: ['React', 'Node.js', 'JavaScript', 'MSSQL'],
  },
  {
    role: 'Web Developer',
    company: 'Oasis Infobyte',
    period: '6 months',
    location: 'India · Remote',
    points: [
      'Worked as a Web Developer, building and improving web applications using modern frontend and backend technologies.',
      'Implemented responsive interfaces and integrated application functionality across the development stack.',
      'Gained practical experience with real-world web development workflows, debugging, and project delivery.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
  },
]

/* ---------- Projects ---------- */
export const projects = [
  {
    title: 'Enterprise RAG Knowledge Platform',
    description:
      'AI-powered enterprise knowledge platform built around Retrieval-Augmented Generation (RAG), enabling users to retrieve relevant contextual information and interact with organizational knowledge through an intelligent interface.',
    tags: ['AI', 'RAG', 'LLM', 'Vector Search', 'React', 'Node.js'],
    link: 'https://github.com/codewitharryy/NEXUS.AI',
    live: '',
  },
  {
    title: 'Predictive Pulse Analyzer',
    description:
      'Machine learning-based health analytics project designed to analyze blood pressure and related health parameters to generate predictive insights and support data-driven health monitoring.',
    tags: ['Python', 'Machine Learning', 'Data Analysis', 'AI'],
    link: 'https://github.com/codewitharryy/Predictive-Pulse-Harnessing-for-Blood-Pressure-Analysis',
    live: '',
  },
   {
    title: 'SubZero — AI Subscription Negotiator',
    description:
      'An agentic AI system that autonomously finds, negotiates, and cancels forgotten subscriptions. Built with multi-agent orchestration (LangGraph), strict financial guardrails, PII masking, prompt injection defense, and human-in-the-loop escalation for high-risk actions.',
    tags: ['Python', 'LangGraph', 'OpenAI', 'FastAPI', 'MCP', 'Streamlit', 'SQLite'],
    link: 'https://github.com/codewitharryy/subzero-agent',
    live: '',
  },
]

/* ---------- Education & certifications ---------- */
export const education = [
  {
    title: 'B.Tech, Computer Science & Engineering',
    org: 'LNCT Group of Colleges, Bhopal',
    period: '2023 — 2027',
    detail: 'CGPA 7.97 / 10',
  },
  {
    title: 'Senior Secondary (Class XII)',
    org: 'St. Xavier’s School, Bhopal',
    period: '2023',
    detail: '83%',
  },
  {
    title: 'Secondary (Class X)',
    org: 'St. Xavier’s School, Bhopal',
    period: '2021',
    detail: '85%',
  },
]

/* ---------- Contact & socials ---------- */
export const socials = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aaryanawasthi',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/codewitharryy',
    icon: 'github',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/aaryanawasthii', // ← update this
    icon: 'instagram',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/917247219355',
    icon: 'whatsapp',
  },
  {
    name: 'X',
    url: 'https://x.com/aaryanawasthi', // ← update this
    icon: 'x',
  },
  {
    name: 'Email',
    url: 'mailto:aaryanawasthi444@gmail.com',
    icon: 'mail',
  },
]