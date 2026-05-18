// Source of truth for the org plan. Edit values here without touching render code.
// Match reference-v9.html exactly. Numbers tied to TUB $100M Org Plan markdown.

const PHASES = [
  {
    id: 'today',
    label: 'Today',
    sub: '$20-30M',
    stats: { revenue: '$20-30M', coreFT: 6, totalHC: 16, cost: '~$1.26M', pctRev: '~5%', depts: 2 },
    changes: [],
    leader: { name: 'CJ', title: 'VP of Product & Experience (doing 3 jobs)' },
    departments: [
      {
        num: '01', title: 'Curriculum & IP', leader: 'Elliot (pending)',
        badge: null,
        mission: 'Elliot and CJ are the only people who can author curriculum. The 10 bridge coaches live here because they are delivery experts, not ops people. No production pipeline, no design support. Elliot pending Minneapolis relocation.',
        roles: [
          { name: 'Elliot', detail: 'Curriculum + TUB Connect', status: 'filled', comp: '$60K (current)' }
        ],
        subs: [
          {
            title: 'AI Advisors / Coach Pool (under Curriculum)',
            roles: [
              { name: '10 Bridge AI Advisors', detail: '3-month contracts, 5 convert to FT ($150K+/yr)', status: 'converting', comp: '$480K/yr' }
            ]
          }
        ]
      },
      {
        num: '02', title: 'Student Success + Program Delivery', leader: 'Abby Master',
        badge: null,
        mission: 'Abby holds student success, program production (scheduling, events, cohort ops), community, and onboarding. Broadest scope she will ever have. No dedicated staff for production yet.',
        roles: [
          { name: 'Abby Master', detail: 'DSS (SS + PD production)', status: 'filled', comp: '$190K' },
          { name: 'Irene', detail: 'SS Lead (overseas)', status: 'filled', comp: '$36K' },
          { name: 'Ali', detail: 'SS Assistant (overseas)', status: 'filled', comp: '$30K' },
          { name: 'Lett', detail: 'SS Assistant (overseas)', status: 'filled', comp: '$30K' }
        ],
        subs: []
      }
    ]
  },
  {
    id: 'at30m',
    label: '$30M',
    sub: '6-12 months',
    stats: { revenue: '$30M', coreFT: '~20', totalHC: '~52', cost: '~$5.21M', pctRev: '~17%', depts: 2 },
    changes: [
      { icon: '🔄', text: '<strong>5 bridge advisors convert to FT AI Advisors ($150K+/yr each)</strong> under Curriculum & IP. AI-native operators who drive what to teach and how to teach it. Remaining 5 join 1099 roster or roll off.' },
      { icon: '📐', text: '<strong>Innovation/R&D seed</strong> lives under Curriculum & IP. Elliot owns the AI Builder alongside curriculum.' },
      { icon: '👤', text: '<strong>Program Ops Manager, Lead Faculty, Community & Events Manager</strong> all report to Abby. Her team gets real.' },
      { icon: '💼', text: '<strong>3 Team Transformation AEs</strong> hired under Student Success (Abby). B2B track begins at scale.' },
      { icon: '📊', text: '<strong>Data Analyst</strong> hired as shared resource under CJ.' }
    ],
    leader: { name: 'CJ', title: 'VP of Product & Experience (2 direct reports + Data Analyst)' },
    departments: [
      {
        num: '01', title: 'Curriculum & IP', leader: 'Elliot (Head of Curriculum)',
        badge: { text: 'INNOVATION NESTED', cls: 'nested' },
        mission: 'Learning design, content authorship, IP creation, the entire coach pool, and the Innovation/R&D seed. Elliot runs curriculum and the delivery experts who bring it to life.',
        roles: [
          { name: 'Elliot', detail: 'Head of Curriculum (pending MN)', status: 'filled', comp: '$160K' },
          { name: 'Lead Curriculum Designer', detail: 'Production pipeline owner', status: 'new', comp: '$85-110K' },
          { name: 'AI Builder / Engineer', detail: 'Innovation/R&D seed', status: 'new', comp: '$140-180K' }
        ],
        subs: [
          {
            title: 'AI Advisors / Coach Pool (under Curriculum)',
            roles: [
              { name: '5 FT AI Advisors', detail: 'Converted from bridge. $150K+/yr each.', status: 'converting', comp: '~$750K total' },
              { name: 'W-2 Senior Coaches (6-10)', detail: 'Quality spine', status: 'new', comp: '~$540-900K' },
              { name: '1099 Practitioners (15-25)', detail: 'Elastic capacity', status: 'new', comp: '~$450-750K/yr' },
              { name: 'AI Coaching Layer', detail: '70% routine automated', status: 'filled', comp: '$50-100K platform' }
            ]
          }
        ]
      },
      {
        num: '02', title: 'Student Success + Program Delivery', leader: 'Abby Master',
        badge: null,
        mission: 'Abby still owns both functions, but now has real staff. Program Ops Manager handles logistics. Lead Faculty is the second face for delivery. Team Transformation AE opens the B2B track.',
        roles: [
          { name: 'Abby Master', detail: 'DSS (SS + PD production)', status: 'filled', comp: '$190K' },
          { name: 'Irene', detail: 'SS Lead (overseas)', status: 'filled', comp: '$36K' },
          { name: 'Ali', detail: 'SS Assistant', status: 'filled', comp: '$30K' },
          { name: 'Lett', detail: 'SS Assistant', status: 'filled', comp: '$30K' },
          { name: 'Program Ops Manager', detail: 'Scheduling, Thinkific, cohort logistics', status: 'new', comp: '$55-75K' },
          { name: 'Lead Faculty / Master Instructor', detail: 'Second face for delivery', status: 'new', comp: '$110-140K' },
          { name: 'Community & Events Manager', detail: 'Slack, events, engagement', status: 'new', comp: '$65-85K' },
          { name: '3 Team Transformation AEs', detail: 'B2B sales + account management', status: 'new', comp: '$80-110K + comm. each' }
        ],
        subs: []
      }
    ]
  },
  {
    id: 'at60m',
    label: '$60M',
    sub: '2-3 years',
    stats: { revenue: '$60M', coreFT: '~30', totalHC: '~62', cost: '~$10.21M', pctRev: '~15%', depts: 4 },
    changes: [
      { icon: '🔀', text: '<strong>Program Delivery splits</strong> from Student Success into its own department with a dedicated Director.' },
      { icon: '🔀', text: '<strong>Innovation/R&D splits</strong> from Curriculum into its own department with a dedicated Director.' },
      { icon: '⬆️', text: '<strong>PD Director on VP track.</strong> Largest ops department. Earns VP by $80M.' },
      { icon: '📊', text: '<strong>Program Pod Model</strong> tested: dedicated PM + coach team per program.' },
      { icon: '👥', text: '<strong>Coach pool scales</strong> to 30-40 (still under Curriculum & IP).' }
    ],
    leader: { name: 'CJ', title: 'VP of Product & Experience (4 direct reports)' },
    departments: [
      {
        num: '01', title: 'Curriculum & IP', leader: 'Elliot (Director)',
        badge: null,
        mission: 'Pure curriculum plus the entire coach pool. Learning design, methodology, IP creation. Innovation has split out. Elliot runs 15-20 people.',
        roles: [
          { name: 'Elliot', detail: 'Director of Curriculum & IP', status: 'filled', comp: '$180K+' },
          { name: 'Lead Curriculum Designer', detail: 'Production pipeline', status: 'filled', comp: '$100K' },
          { name: '1-2 Curriculum Designers', detail: 'Program-specific content', status: 'new', comp: '$70-90K each' }
        ],
        subs: [
          {
            title: 'AI Advisors / Coach Pool (under Curriculum)',
            roles: [
              { name: '5 FT AI Advisors', detail: '$150K+/yr each', status: 'filled', comp: '~$800K' },
              { name: 'W-2 Senior Coaches (8-12)', detail: 'Quality spine', status: 'filled', comp: '~$720K-1.1M' },
              { name: '1099 Practitioners (20-30)', detail: 'Elastic', status: 'filled', comp: '~$600K-900K/yr' },
              { name: 'AI Coaching Layer', detail: 'Scaled', status: 'filled', comp: '$80-120K platform' }
            ]
          }
        ]
      },
      {
        num: '02', title: 'Program Delivery', leader: 'Director of PD (new)',
        badge: { text: 'SPLIT FROM SS', cls: 'split' },
        mission: 'Production. Every cohort, every schedule, every live session, every event. Splits from Abby with the ops and faculty team. Director is on VP track.',
        roles: [
          { name: 'Director of Program Delivery', detail: 'Full department ownership', status: 'new', comp: '$130-160K' },
          { name: 'Lead Faculty / Master Instructor', detail: 'Second face', status: 'filled', comp: '$130K' },
          { name: '2-3 Program Managers', detail: 'One per major program', status: 'new', comp: '$75-95K each' },
          { name: 'Program Ops Manager', detail: 'Logistics + LMS', status: 'filled', comp: '$70K' }
        ],
        subs: []
      },
      {
        num: '03', title: 'Student Success', leader: 'Abby Master',
        badge: null,
        mission: 'Pure student success, retention, NPS, onboarding, outcome guarantees. Plus Team Transformation (B2B) and community oversight. Focused scope after PD split.',
        roles: [
          { name: 'Abby Master', detail: 'Director of Student Success', status: 'filled', comp: '$210K+' },
          { name: 'Irene', detail: 'SS Lead (expanded team)', status: 'filled', comp: '$50K' },
          { name: 'SS Team (4-6)', detail: 'Specialists + assistants', status: 'filled', comp: '~$200K' },
          { name: 'Community & Events Manager', detail: 'Full events team', status: 'filled', comp: '$80K' },
          { name: '3+ Team Transformation AEs', detail: 'B2B, scaling', status: 'filled', comp: '$100K+ each' }
        ],
        subs: []
      },
      {
        num: '04', title: 'Innovation / R&D', leader: 'Director of Innovation (new)',
        badge: { text: 'SPLIT FROM CURRICULUM', cls: 'split' },
        mission: 'Dedicated department. AI-embedded learning, new program pipeline, product strategy. Split from Curriculum because the AI roadmap diverged from content work.',
        roles: [
          { name: 'Director of Innovation', detail: 'Dedicated leader', status: 'new', comp: '$130-160K' },
          { name: 'AI Builder / Engineer', detail: 'Student-facing AI', status: 'filled', comp: '$160K' },
          { name: '1-2 AI Engineers', detail: 'Platform + tools', status: 'new', comp: '$120-150K each' }
        ],
        subs: []
      }
    ]
  },
  {
    id: 'at100m',
    label: '$100M',
    sub: '4-5 years',
    stats: { revenue: '$100M', coreFT: '~32', totalHC: '~72', cost: '~$13.21M', pctRev: '~13%', depts: 4 },
    changes: [
      { icon: '⬆️', text: '<strong>VP of Program Delivery</strong> earned. Largest ops department by headcount.' },
      { icon: '📐', text: '<strong>Program Pod Model</strong> fully deployed: each major program has a dedicated PM + coach team.' },
      { icon: '🎓', text: '<strong>Instructional Design team</strong> under Curriculum scales to 2-3 methodology specialists.' },
      { icon: '📊', text: '<strong>Full data infrastructure</strong>: dedicated analyst, student outcome dashboards, coach QA automation.' },
      { icon: '💼', text: '<strong>Team Transformation</strong> scales to 3+ AEs under Student Success.' }
    ],
    leader: { name: 'CJ', title: 'VP of Product & Experience (4 department heads)' },
    departments: [
      {
        num: '01', title: 'Curriculum & IP', leader: 'Elliot (Sr. Director)',
        badge: null,
        mission: '20-25 people including the full coach pool. Curriculum production, methodology, IP library, and every AI-certified coach.',
        roles: [
          { name: 'Elliot', detail: 'Sr. Director of Curriculum', status: 'filled', comp: '$200K+' },
          { name: 'Lead Curriculum Designer', detail: 'Pipeline owner', status: 'filled', comp: '$110K' },
          { name: '2-3 Instructional Designers', detail: 'Methodology specialists', status: 'filled', comp: '$170-240K' },
          { name: '1-2 Curriculum Designers', detail: 'Program content', status: 'filled', comp: '$80-90K each' }
        ],
        subs: [
          {
            title: 'AI Advisors / Coach Pool (under Curriculum)',
            roles: [
              { name: '5-7 FT AI Advisors', detail: '$150K+/yr each, domain specialists', status: 'filled', comp: '~$800K-1.05M' },
              { name: 'W-2 Senior Coaches (10-15)', detail: 'Quality spine', status: 'filled', comp: '~$900K-1.35M' },
              { name: '1099 Practitioners (30-40)', detail: 'Elastic capacity', status: 'filled', comp: '~$900K-1.2M/yr' },
              { name: 'AI Coaching Layer', detail: 'Full scale', status: 'filled', comp: '$100-150K platform' }
            ]
          }
        ]
      },
      {
        num: '02', title: 'Program Delivery', leader: 'VP of Program Delivery',
        badge: { text: 'VP EARNED', cls: 'vp' },
        mission: 'Production at scale. Every cohort, session, and event across all programs. 10-15 people. Pod model fully deployed.',
        roles: [
          { name: 'VP of Program Delivery', detail: 'Department head', status: 'filled', comp: '$200K+' },
          { name: 'Lead Faculty / Master Instructor', detail: 'Second face', status: 'filled', comp: '$150K' },
          { name: '3-5 Program Managers', detail: 'Pod leaders', status: 'filled', comp: '$85-95K each' },
          { name: 'Cohort Ops Team (3-5)', detail: 'Logistics + LMS', status: 'filled', comp: '~$300K' },
          { name: 'Event Ops (2-3)', detail: 'In-person + virtual', status: 'filled', comp: '~$150K' }
        ],
        subs: []
      },
      {
        num: '03', title: 'Student Success', leader: 'Abby (or successor)',
        badge: null,
        mission: '10-12 people. Retention, NPS, outcome guarantees, Team Transformation (B2B), community. Clean scope, strong team.',
        roles: [
          { name: 'Director of Student Success', detail: 'Department head', status: 'filled', comp: '$220K+' },
          { name: 'SS Leads (2-3)', detail: 'Regional/program specialists', status: 'filled', comp: '~$150K' },
          { name: 'SS Team (5-7)', detail: 'Specialists + assistants', status: 'filled', comp: '~$300K' },
          { name: 'Team Transformation AEs (3+)', detail: 'B2B scaled', status: 'filled', comp: '~$300K+' },
          { name: 'Community & Events (2-3)', detail: 'Full events team', status: 'filled', comp: '~$200K' }
        ],
        subs: []
      },
      {
        num: '04', title: 'Innovation / R&D', leader: 'Director of Innovation',
        badge: null,
        mission: '5-7 people. AI-embedded learning, new products, platform strategy. The reason TUB stays impossible to copy.',
        roles: [
          { name: 'Director of Innovation', detail: 'Department head', status: 'filled', comp: '$170K+' },
          { name: 'AI Engineers (2-3)', detail: 'Student-facing AI products', status: 'filled', comp: '~$400K' },
          { name: 'Product Designer', detail: 'UX for AI experiences', status: 'filled', comp: '$100-120K' }
        ],
        subs: []
      }
    ]
  }
];

const MISSION = {
  mission: 'Every person who pays TUB money gets a transformation they can measure. This division owns every second of that experience: the curriculum, the coaching, the community, the events, and the proof that it worked.',
  situation: [
    'TUB hit $17.5M on A2A alone. Target was $4.5M. 4x the goal with zero org structure change. 5,000 students across all programs. 6 full-time people running it. CJ is doing 3 jobs: curriculum creator, program ops manager, and VP of Product & Experience. Only one of those is what he was hired for.',
    '10 coaches run on 3-month bridge contracts. No delivery leadership. No program ops. No data infrastructure. No second face for teaching.',
    'That worked at $4.5M. It breaks at $30M.'
  ],
  model: [
    'Two departments today. Two departments at $30M (just bigger and better staffed). Four departments at $60M when the business can\'t run without dedicated Program Delivery and Innovation leadership.',
    'Elliot owns Curriculum & IP. That includes the entire coach pool, because coaches are AI-certified delivery experts, not ops people. The coach pool lives under Curriculum at every phase.',
    'Abby owns Student Success and Program Delivery (production). Scheduling, events, cohort ops, community, retention, Team Transformation. At $60M, Program Delivery splits into its own department with a dedicated director. Abby keeps pure Student Success.',
    '5 of the 10 bridge advisors convert to full-time AI Advisors ($150K+/yr each) under Curriculum & IP. AI-native operators who drive what to teach and how to teach it. The remaining 5 either join the 1099 practitioner roster or roll off. We call them "AI Advisors" formally, "coaches" informally.',
    'Cost target: 15-20% of revenue. AI handles 70% of routine coaching. Humans handle the 30% that changes lives.'
  ],
  decisions: [
    '1. Approve the 15-20% of revenue investment target.',
    '2. Decide on Elliot\'s Minneapolis relocation ($160K, manager track) or keep him overseas (IC track, hire external Head of Curriculum).',
    '3. Align on converting 5 bridge advisors to FT AI Advisors ($150K+/yr each) under Curriculum & IP.',
    '4. Green light the B2B Team Transformation track under Student Success.'
  ]
};

const ABBY_TIMELINE = {
  intro: [
    'Abby was hired as Director of Student Success. In practice, she also owns Program Delivery (production) until that function splits into its own department at $60M. Coaches are NOT under Abby. They live under Curriculum & IP (Elliot) at every phase.',
    'The conversation with Abby: "You own Student Success and Program Production. That means retention, community, events, scheduling, cohort ops, and Team Transformation. Coaches report to Elliot. At $60M, Program Delivery gets its own director, and your scope narrows to pure Student Success."'
  ],
  phases: [
    {
      dot: 'today',
      trigger: 'TODAY',
      label: 'Student Success + Program Delivery',
      detail: 'Abby holds student success, program production (scheduling, events, cohort ops), community, and onboarding. She manages Irene (who manages Ali and Lett). Coaches are under Elliot/Curriculum.',
      tags: [
        { cls: 'perm', text: 'Student Success' },
        { cls: 'perm', text: 'Onboarding' },
        { cls: 'perm', text: 'SS Team (Irene, Ali, Lett)' },
        { cls: 'temp', text: 'Program Delivery (production)' },
        { cls: 'temp', text: 'Community' }
      ]
    },
    {
      dot: 'next',
      trigger: '$30M',
      label: 'Same Scope, Real Staff',
      detail: 'Abby still owns SS + PD, but now has a Program Ops Manager, Lead Faculty, Community & Events Manager, and 3 Team Transformation AEs reporting in. She goes from managing 3 people to managing 9-10. Her scope stays the same, her team gets real.',
      tags: [
        { cls: 'perm', text: 'Student Success' },
        { cls: 'perm', text: 'Onboarding' },
        { cls: 'perm', text: 'SS Team' },
        { cls: 'temp', text: 'Program Delivery (production)' },
        { cls: 'perm', text: 'Team Transformation AE' },
        { cls: 'perm', text: 'Community & Events Manager' }
      ]
    },
    {
      dot: 'future',
      trigger: '$60M — THE SPLIT',
      label: 'Program Delivery Gets Its Own Director',
      detail: 'Program Delivery splits into its own department. Program Ops Manager, Lead Faculty, and PMs move to the new director. Abby keeps Student Success, Team Transformation, Community, and onboarding. Her scope narrows and sharpens.',
      tags: [
        { cls: 'perm', text: 'Student Success' },
        { cls: 'perm', text: 'Onboarding' },
        { cls: 'perm', text: 'SS Team (expanded)' },
        { cls: 'perm', text: 'Team Transformation' },
        { cls: 'perm', text: 'Community' },
        { cls: 'transfer', text: 'Program Ops → PD Director' },
        { cls: 'transfer', text: 'Lead Faculty → PD Director' }
      ]
    },
    {
      dot: 'final',
      trigger: '$100M',
      label: 'Clean Scope, Full Team',
      detail: 'Abby (or successor) leads 10-12 people. Pure student success, retention, NPS, outcome guarantees, Team Transformation (B2B), community oversight. No borrowed functions.',
      tags: [
        { cls: 'perm', text: 'Student Success' },
        { cls: 'perm', text: 'Onboarding' },
        { cls: 'perm', text: 'Team Transformation (3+ AEs)' },
        { cls: 'perm', text: 'Community & Events' },
        { cls: 'perm', text: 'Outcome Guarantees' }
      ]
    }
  ]
};

const PRIORITIES = {
  intro: 'Five things that need to happen before anything else on this plan matters.',
  items: [
    {
      title: 'Onboard Abby. Set expectations on scope.',
      body: 'She owns Student Success AND Program Delivery (production). Coaches are under Elliot, not her. She needs KPIs for both functions on day 1 and should meet every team member in the first 2 weeks.'
    },
    {
      title: 'Hire the Program Operations Manager ($55-75K).',
      body: 'Reports to Abby. Gives CJ back 15-20 hours a week on scheduling, Thinkific, cohort logistics, and comms. Without this, CJ stays buried in production work.'
    },
    {
      title: 'Force the Elliot decision.',
      body: 'Minneapolis relocation at $160K (manager track, Head of Curriculum) or stays overseas (IC track, external Head of Curriculum hire). This changes the entire Curriculum & IP pillar. We need the answer.'
    },
    {
      title: 'Evaluate bridge advisors for FT AI Advisor conversion ($150K+/yr each).',
      body: 'Elliot leads the evaluation with CJ. 5 of the 10 convert to full-time AI Advisors under Curriculum & IP. The bar: AI-native, can drive curriculum direction AND coach students. The other 5 move to 1099 roster or roll off.'
    },
    {
      title: 'Define program-level KPIs.',
      body: 'Every program (A2A, Bootcamp, Masterclass, UCL, Uncommon Founders, Team Transformation) needs a one-page definition: what it is, who it serves, what success looks like, what we track. Abby, Elliot, and CJ own this together in month 1.'
    }
  ]
};

const COST_MODEL = {
  intro: 'The original model showed 5-10%. That underestimated coach pool costs. 15-20% reflects market reality for education companies running live fulfillment. TUB\'s hybrid AI model keeps us at the low end of the 15-25% industry benchmark.',
  summary: [
    { phase: 'Today', revenue: '$20-30M', cost: '~$1.26M', pct: '~5%', coreFT: '6', totalHC: '16', depts: '2 (Curriculum, SS+PD)', highlight: true },
    { phase: '$30M', revenue: '$30M', cost: '~$5.21M', pct: '~17%', coreFT: '~20', totalHC: '~52', depts: '2 (scaled up)' },
    { phase: '$60M', revenue: '$60M', cost: '~$10.21M', pct: '~15%', coreFT: '~30', totalHC: '~62', depts: '4 (the split)' },
    { phase: '$100M', revenue: '$100M', cost: '~$13.21M', pct: '~13%', coreFT: '~32', totalHC: '~72', depts: '4 + VP earned' }
  ],
  summaryNote: '$30M is the most expensive phase as a percentage because we\'re building the foundation: converting 5 advisors to FT at $150K+/yr each, hiring 3 Team Transformation AEs, staffing Abby\'s department, and building the 1099 roster. The AI Advisor comp is higher than originally modeled because these are AI-native operators who can command $300/hr in the open market. Trends down as AI coaching scales at zero marginal cost and fixed salaries spread across more revenue.',
  breakdown: [
    { item: 'FT Leadership & Staff (CJ, Abby, Elliot, + 8-10 new hires incl. 3 AEs)', cost: '~$2.2M' },
    { item: '5 FT AI Advisors ($150K+/yr each, under Curriculum)', cost: '~$750K' },
    { item: '1099 Coach Roster (30+ practitioners, under Curriculum)', cost: '~$1.5M' },
    { item: 'PT/Contract Staff (support)', cost: '~$360K' },
    { item: 'Events, Tools, Overhead', cost: '~$400K' },
    { item: '<strong>Total</strong>', cost: '<strong>~$5.21M (~17% of revenue)</strong>', highlight: true }
  ]
};
