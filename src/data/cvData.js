// Structured CV data for interactive and social features

const cvData = [
  {
    id: 'header',
    title: 'Jordan Example',
    contact: {
      location: 'Metro City, US',
      phone: '+1 555-123-4567',
      email: 'jordan.example@email.com',
      linkedin: 'https://www.linkedin.com/in/jordan-example/'
    },
    bullets: []
  },
  {
    id: 'professional-summary',
    title: 'Professional Summary',
    bullets: [
      {
        id: 'summary-main',
        text: `Results-driven HR and Customer Success professional with 6+ years of experience across educational institutions and technology companies. Strong track record in client onboarding, relationship management, and process optimization. Consistently exceeds targets with demonstrable achievements in building corporate partnerships, exceeding sales quotas, and enhancing student/client career outcomes. Combines traditional business acumen with technical aptitude to deliver innovative solutions that drive organizational growth. Adept at building relationships across organizational levels and implementing strategies that align with business objectives.`,
        mindMapOptions: [
          { id: 'summary-1', label: 'What is your main strength?', answer: 'Draft: My main strength is combining business acumen with technical aptitude to deliver innovative solutions.' },
          { id: 'summary-2', label: 'What sets you apart?', answer: 'Draft: I consistently exceed targets and build strong partnerships.' }
        ]
      }
    ]
  },
  {
    id: 'key-skills',
    title: 'Key Skills & Technical Proficiency',
    bullets: [
      { id: 'skills-technical', text: '**Technical:** AI Development (Cursor/Windsurf IDEs), Cloud Services (AWS), API Integration, AI Systems (Prompt Engineering)', mindMapOptions: [
        { id: 'skills-tech-1', label: 'Which technical skill is most valuable?', answer: 'Draft: AI Development is currently the most valuable.' }
      ] },
      { id: 'skills-business', text: '**Business:** Client Relationship Management, Process Optimization, Data Visualization, Strategic Planning', mindMapOptions: [
        { id: 'skills-biz-1', label: 'How do you use business skills?', answer: 'Draft: I use business skills to optimize processes and build client relationships.' }
      ] }
    ]
  },
  {
    id: 'professional-experience',
    title: 'Professional Experience',
    bullets: [
      {
        id: 'acme-consulting',
        text: 'Acme Consulting Group | *Remote* | *Oct 2024 - Present*',
        jobTitle: 'HR Manager (Generalist) - a FlexTalent collaboration (Contract)',
        points: [
          {
            id: 'acme-1',
            text: 'Implemented a new HRIS platform, improving onboarding speed and data accuracy across the company',
            mindMapOptions: [
              { id: 'acme-1a', label: 'What HRIS platform did you implement?', answer: 'We selected a cloud-based HRIS after a thorough vendor review.' },
              { id: 'acme-1b', label: 'How did onboarding improve?', answer: 'Onboarding time was reduced by 30% and data errors dropped significantly.' }
            ]
          },
          {
            id: 'acme-2',
            text: 'Developed and tracked key HR metrics to support leadership decision-making',
            mindMapOptions: [
              { id: 'acme-2a', label: 'Which HR metrics did you focus on?', answer: 'We tracked turnover, time-to-hire, and employee engagement.' },
              { id: 'acme-2b', label: 'How did metrics help leadership?', answer: 'The data enabled more informed workforce planning and resource allocation.' }
            ]
          },
          {
            id: 'acme-3',
            text: 'Launched a remote interview process, reducing hiring time by 40%',
            mindMapOptions: [
              { id: 'acme-3a', label: 'What tools did you use for remote interviews?', answer: 'We used video conferencing and online assessment platforms.' },
              { id: 'acme-3b', label: 'What was the biggest challenge?', answer: 'Ensuring a positive candidate experience remotely was key.' }
            ]
          },
          {
            id: 'acme-4',
            text: 'Grew the company\'s online employer brand, increasing LinkedIn followers by 500+',
            mindMapOptions: [
              { id: 'acme-4a', label: 'What strategies did you use for employer branding?', answer: 'We shared employee stories and industry insights regularly.' },
              { id: 'acme-4b', label: 'How did you measure success?', answer: 'Follower growth and engagement rates were our main KPIs.' }
            ]
          }
        ]
      },
      {
        id: 'nova-university',
        text: 'Nova University | *Metro City, US* | *Apr 2023 - Present*',
        jobTitle: 'Business Liaison, Career Services & Alumni Relations Officer',
        points: [
          { id: 'nova-1', text: 'Built partnerships with over 80 local businesses for student internships and events', mindMapOptions: [ { id: 'nova-1a', label: 'How did you approach local businesses?', answer: 'We reached out via networking events and direct outreach.' } ] },
          { id: 'nova-2', text: 'Organized and led workshops on digital skills, resume writing, and interview techniques', mindMapOptions: [ { id: 'nova-2a', label: 'Which workshop was most popular?', answer: 'The digital skills workshop had the highest attendance.' } ] },
          { id: 'nova-3', text: 'Provided career coaching to students and alumni, focusing on job search strategies and graduate applications', mindMapOptions: [ { id: 'nova-3a', label: 'What was a common coaching topic?', answer: 'Most students wanted help with job search strategies.' } ] },
          { id: 'nova-4', text: 'Coordinated alumni networking events and maintained engagement through newsletters', mindMapOptions: [ { id: 'nova-4a', label: 'How did you keep alumni engaged?', answer: 'We sent monthly newsletters and hosted virtual meetups.' } ] },
          { id: 'nova-5', text: 'Analyzed feedback from student surveys to improve career services offerings', mindMapOptions: [ { id: 'nova-5a', label: 'What feedback led to changes?', answer: 'Students requested more employer panels and mock interviews.' } ] }
        ]
      },
      {
        id: 'remotely',
        text: 'Remotely | *Remote* | *Jul 2022 - Present*',
        jobTitle: 'HR and Career Consultant - Owner',
        points: [
          { id: 'remotely-1', text: 'Advised clients on transitioning to remote work and adapting to virtual team environments', mindMapOptions: [ { id: 'remotely-1a', label: 'What was the biggest challenge for clients?', answer: 'Adapting to remote communication and collaboration tools.' } ] },
          { id: 'remotely-2', text: 'Helped professionals optimize their resumes and LinkedIn profiles for remote job searches', mindMapOptions: [ { id: 'remotely-2a', label: 'What was your top resume tip?', answer: 'Highlight remote work skills and digital communication experience.' } ] },
          { id: 'remotely-3', text: 'Implemented CRM tools and workflow automations for client management', mindMapOptions: [ { id: 'remotely-3a', label: 'Which CRM tool did you use?', answer: 'We used a cloud-based CRM with automation features.' } ] },
          { id: 'remotely-4', text: 'Provided personalized career guidance to clients in multiple regions', mindMapOptions: [ { id: 'remotely-4a', label: 'How did you tailor your advice?', answer: 'Advice was customized based on each client\'s industry and goals.' } ] },
          { id: 'remotely-5', text: 'Established new business partnerships with consulting firms and tech startups', mindMapOptions: [ { id: 'remotely-5a', label: 'How did you build new partnerships?', answer: 'By attending industry events and leveraging professional networks.' } ] }
        ]
      },
      {
        id: 'insight-global',
        text: 'Insight Global | *Metro City, US (Remote)* | *Jan 2019 - Jul 2020*',
        jobTitle: 'Sourcing Associate - Consulting/Finance clients (fully Remote since March 2020)',
        points: [
          { id: 'insight-1', text: 'Built a network of 700+ industry experts through targeted outreach and referrals', mindMapOptions: [ { id: 'insight-1a', label: 'How did you find experts?', answer: 'We used LinkedIn, referrals, and industry databases.' } ] },
          { id: 'insight-2', text: 'Improved candidate response rates by refining outreach messaging and follow-up processes', mindMapOptions: [ { id: 'insight-2a', label: 'What messaging changes worked best?', answer: 'Shorter, more personalized messages increased responses.' } ] },
          { id: 'insight-3', text: 'Collaborated with cross-functional teams in multiple time zones to deliver client projects', mindMapOptions: [ { id: 'insight-3a', label: 'How did you manage time zones?', answer: 'We used shared calendars and flexible meeting times.' } ] }
        ]
      },
      {
        id: 'zenith-tech',
        text: 'Zenith Tech | *Metro City, US* | *Jan 2018 - Jan 2019*',
        jobTitle: 'Account Manager (SaaS Sales)',
        points: [
          { id: 'zenith-1', text: 'Managed onboarding for 30+ new clients per month, maintaining high customer satisfaction', mindMapOptions: [ { id: 'zenith-1a', label: 'How did you ensure client satisfaction?', answer: 'We provided dedicated onboarding support and regular check-ins.' } ] },
          { id: 'zenith-2', text: 'Identified upsell opportunities and managed contract renewals for SaaS clients', mindMapOptions: [ { id: 'zenith-2a', label: 'How did you find upsell opportunities?', answer: 'By analyzing usage data and client feedback.' } ] },
          { id: 'zenith-3', text: 'Consistently exceeded sales targets and received recognition for top performance', mindMapOptions: [ { id: 'zenith-3a', label: 'What contributed to your sales success?', answer: 'Strong client relationships and proactive outreach.' } ] },
          { id: 'zenith-4', text: 'Trained and mentored new team members on client support best practices', mindMapOptions: [ { id: 'zenith-4a', label: 'What was your training approach?', answer: 'Hands-on shadowing and regular feedback sessions.' } ] }
        ]
      }
    ]
  },
  {
    id: 'education',
    title: 'Education',
    bullets: [
      { id: 'eiu', text: '**European International University - Paris** - Executive Diploma Digital & Social Media Marketing (2020-2021) *Remote*', mindMapOptions: [ { id: 'edu-1', label: 'What was your focus?', answer: 'Draft: Digital marketing strategies and social media analytics.' } ] },
      { id: 'northampton', text: '**University of Northampton** - Bachelor of Arts in Business Management, Grade: 2.1 - Second Class Upper Division', mindMapOptions: [ { id: 'edu-2', label: 'What did you enjoy most?', answer: 'Draft: Business strategy and management courses.' } ] }
    ]
  },
  {
    id: 'skills-languages',
    title: 'Skills & Languages',
    bullets: [
      { id: 'tech-skills', text: '**Technical Skills:**', expansions: [
        { id: 'ai-dev', text: 'AI Development: Cursor IDE, Windsurf IDE (built full-stack web applications with authentication)', mindMapOptions: [ { id: 'skill-ai', label: 'What projects used these skills?', answer: 'Draft: Built authentication systems for web apps.' } ] },
        { id: 'cloud', text: 'Cloud Services: AWS S3 bucket configuration, server setup, and deployment procedures', mindMapOptions: [ { id: 'skill-cloud', label: 'What did you deploy?', answer: 'Draft: Deployed static sites and backend services.' } ] },
        { id: 'api', text: 'API & Connections: REST API integration, MCP connections (e.g., Cursor-Supabase), database management', mindMapOptions: [ { id: 'skill-api', label: 'What APIs did you integrate?', answer: 'Draft: Integrated REST APIs for data sync.' } ] },
        { id: 'ai-systems', text: 'AI Systems: Claude, ChatGPT, Gemini, DeepSeek, Grok; prompt engineering, data reporting', mindMapOptions: [ { id: 'skill-aisys', label: 'How do you use these systems?', answer: 'Draft: For prompt engineering and reporting.' } ] },
        { id: 'business-tools', text: 'Business Tools: Zendesk, Meta Platform, Hubspot CRM, Google Workspace, MS Office, Notion, NotebookLM', mindMapOptions: [ { id: 'skill-biztools', label: 'Which tool is most useful?', answer: 'Draft: Notion for workflow management.' } ] },
        { id: 'automation', text: 'Automation: n8n, make.com, Zapier, Mazaal AI workflow automation', mindMapOptions: [ { id: 'skill-auto', label: 'What did you automate?', answer: 'Draft: Automated reporting and notifications.' } ] },
        { id: 'data-analysis', text: 'Data Analysis: Excel advanced functions, dashboard creation, data visualization, metrics tracking', mindMapOptions: [ { id: 'skill-data', label: 'What dashboards did you build?', answer: 'Draft: Built dashboards for HR and sales metrics.' } ] }
      ] },
      { id: 'business-skills', text: '**Business Skills:**', expansions: [
        { id: 'process', text: 'Process Documentation & Optimization, Training Development, Cross-functional Collaboration', mindMapOptions: [ { id: 'skill-process', label: 'How do you optimize processes?', answer: 'Draft: By mapping workflows and removing bottlenecks.' } ] },
        { id: 'crm', text: 'Client Relationship Management, Team Mentoring, Strategic Planning', mindMapOptions: [ { id: 'skill-crm', label: 'How do you mentor teams?', answer: 'Draft: Through regular feedback and coaching.' } ] },
        { id: 'excel', text: 'Excel Data Analysis, Performance Metrics & Reporting, Data Visualization', mindMapOptions: [ { id: 'skill-excel', label: 'What metrics do you track?', answer: 'Draft: Performance and engagement metrics.' } ] },
        { id: 'presentation', text: 'Presentation Development, Stakeholder Communication, Needs Assessment', mindMapOptions: [ { id: 'skill-presentation', label: 'How do you develop presentations?', answer: 'Draft: By focusing on clarity and audience needs.' } ] },
        { id: 'project', text: 'Project Coordination, Resource Allocation, Timeline Management', mindMapOptions: [ { id: 'skill-project', label: 'How do you manage timelines?', answer: 'Draft: With Gantt charts and regular check-ins.' } ] }
      ] },
      { id: 'languages', text: '**Languages:** Greek (Native), English (C2)', mindMapOptions: [ { id: 'skill-lang', label: 'How do you use your language skills?', answer: 'Draft: For international communication and collaboration.' } ] }
    ]
  },
  {
    id: 'interests',
    title: 'Interests',
    bullets: [
      { id: 'interests-main', text: 'AI Ethics & Philosophy, Emerging Technologies (Neurotech, Biotech), Automation Systems, Entrepreneurship, Digital Transformation', mindMapOptions: [ { id: 'interest-1', label: 'Which interest is most exciting?', answer: 'Draft: Emerging technologies like neurotech and AI.' } ] }
    ]
  }
];

// For each bullet and expansion, ensure mindMapOptions exists
function addMockMindMapOptions(obj, prefix = '') {
  if (Array.isArray(obj)) {
    obj.forEach((item, idx) => addMockMindMapOptions(item, prefix + idx + '-'));
  } else if (typeof obj === 'object' && obj !== null) {
    if ('text' in obj && !('mindMapOptions' in obj)) {
      obj.mindMapOptions = [
        { id: `${prefix}mock-1`, label: 'Mock question?', answer: 'Mock answer for this bullet.' }
      ];
    }
    // Recursively check for expansions or points
    if (obj.expansions) addMockMindMapOptions(obj.expansions, prefix + 'exp-');
    if (obj.points) addMockMindMapOptions(obj.points, prefix + 'pt-');
    if (obj.bullets) addMockMindMapOptions(obj.bullets, prefix + 'b-');
  }
}
addMockMindMapOptions(cvData);

export default cvData; 
