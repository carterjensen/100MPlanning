// Pure render functions. Each one reads from data and writes HTML to a container.

const State = { currentPhase: 0 };

function renderEvolution() {
  const container = document.getElementById('view-evolution');
  const phase = PHASES[State.currentPhase];

  let h = '<div class="slider-container">';
  h += '<div class="slider-track"><div class="slider-line"></div>';
  h += `<div class="slider-fill" style="width:${State.currentPhase * 33.33}%"></div>`;

  PHASES.forEach((p, i) => {
    const cls = i === State.currentPhase ? 'active' : (i < State.currentPhase ? 'passed' : '');
    h += `<div class="slider-dot ${cls}" data-phase="${i}">`;
    h += `<span class="slider-label">${p.label}</span>`;
    h += `<span class="slider-sublabel">${p.sub}</span>`;
    h += '</div>';
  });
  h += '</div>';

  h += '<div class="phase-stats">';
  h += `<div class="phase-stat"><div class="val">${phase.stats.coreFT}</div><div class="lbl">Core FT</div></div>`;
  h += `<div class="phase-stat"><div class="val">${phase.stats.totalHC}</div><div class="lbl">Total HC</div></div>`;
  h += `<div class="phase-stat"><div class="val">${phase.stats.cost}</div><div class="lbl">Annual Cost</div></div>`;
  h += `<div class="phase-stat"><div class="val">${phase.stats.depts}</div><div class="lbl">Departments</div></div>`;
  h += '</div></div>';

  if (phase.changes.length > 0) {
    h += `<div class="phase-changes"><h3>What Changes at ${phase.label}</h3>`;
    phase.changes.forEach(c => {
      h += `<div class="change-item"><span class="change-icon">${c.icon}</span><span class="change-text">${c.text}</span></div>`;
    });
    h += '</div>';
  }

  h += '<div class="org-chart">';
  h += `<div class="org-leader"><div class="org-leader-name">${phase.leader.name}</div><div class="org-leader-title">${phase.leader.title}</div></div>`;

  const cols = phase.departments.length <= 2 ? 'cols-2' : 'cols-4';
  h += `<div class="dept-grid ${cols}">`;

  phase.departments.forEach(dept => {
    const cardCls = dept.badge && (dept.badge.cls === 'new' || dept.badge.cls === 'split')
      ? 'dept-card new-dept'
      : 'dept-card';
    h += `<div class="${cardCls}"><div class="dept-head">`;
    h += `<div class="dept-num">PILLAR ${dept.num}</div>`;
    h += `<div class="dept-title">${dept.title}</div>`;
    h += `<div class="dept-leader">Led by <strong>${dept.leader}</strong></div>`;
    if (dept.badge) h += `<span class="dept-badge ${dept.badge.cls}">${dept.badge.text}</span>`;
    h += '</div><div class="dept-body">';
    h += `<div class="dept-mission">${dept.mission}</div>`;
    h += renderRoles(dept.roles);

    if (dept.subs && dept.subs.length > 0) {
      dept.subs.forEach(sub => {
        h += '<div class="dept-sub">';
        h += `<div class="dept-sub-title">${sub.title}</div>`;
        h += renderRoles(sub.roles);
        h += '</div>';
      });
    }

    h += '</div></div>';
  });

  h += '</div></div>';
  container.innerHTML = h;

  document.querySelectorAll('.slider-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      State.currentPhase = parseInt(dot.dataset.phase);
      renderEvolution();
    });
  });
}

function renderRoles(roles) {
  let h = '<ul class="role-list">';
  roles.forEach(r => {
    h += `<li class="role-item"><span class="role-dot ${r.status}"></span><span class="role-name">${r.name}</span>`;
    if (r.detail) h += `<span class="role-detail">${r.detail}</span>`;
    h += `<span class="role-comp">${r.comp}</span></li>`;
  });
  h += '</ul>';
  return h;
}

function renderMission() {
  const container = document.getElementById('view-overview');
  let h = '';

  h += '<div class="overview-section"><h2>The Mission</h2>';
  h += `<p class="overview-text">${MISSION.mission}</p></div>`;

  h += '<div class="overview-section"><h2>The Situation</h2>';
  MISSION.situation.forEach(p => h += `<p class="overview-text">${p}</p>`);
  h += '</div>';

  h += '<div class="overview-section"><h2>The Model</h2>';
  MISSION.model.forEach(p => h += `<p class="overview-text">${p}</p>`);
  h += '</div>';

  h += '<div class="overview-section"><h2>Key Decisions Needed from Leadership</h2>';
  MISSION.decisions.forEach(p => h += `<p class="overview-text">${p}</p>`);
  h += '</div>';

  container.innerHTML = h;
}

function renderAbby() {
  const container = document.getElementById('view-abby');
  let h = '';

  h += '<div class="overview-section" style="margin-bottom:16px;"><h2>Abby\'s Scope Evolution</h2>';
  ABBY_TIMELINE.intro.forEach(p => h += `<p class="overview-text">${p}</p>`);
  h += '</div>';

  ABBY_TIMELINE.phases.forEach(phase => {
    h += '<div class="tl-phase">';
    h += `<div class="tl-phase-head"><div class="tl-dot ${phase.dot}"></div>`;
    h += `<div><div class="tl-trigger">${phase.trigger}</div><div class="tl-label">${phase.label}</div></div></div>`;
    h += `<div class="tl-detail">${phase.detail}</div>`;
    h += '<div class="tl-tags">';
    phase.tags.forEach(t => h += `<span class="tl-tag ${t.cls}">${t.text}</span>`);
    h += '</div></div>';
  });

  container.innerHTML = h;
}

function renderPriorities() {
  const container = document.getElementById('view-priorities');
  let h = '<div class="overview-section"><h2>Immediate Priorities (Next 90 Days)</h2>';
  h += `<p class="overview-text" style="margin-bottom:16px;">${PRIORITIES.intro}</p>`;

  PRIORITIES.items.forEach((item, i) => {
    h += '<div class="priority">';
    h += `<div class="priority-num">${i + 1}</div>`;
    h += '<div class="priority-body">';
    h += `<h4>${item.title}</h4><p>${item.body}</p>`;
    h += '</div></div>';
  });

  h += '</div>';
  container.innerHTML = h;
}

function renderCost() {
  const container = document.getElementById('view-cost');
  let h = '<div class="overview-section"><h2>Cost Model: 15-20% of Revenue</h2>';
  h += `<p class="overview-text">${COST_MODEL.intro}</p>`;

  h += '<table class="cost-table">';
  h += '<tr><th>Phase</th><th>Revenue</th><th>Division Cost</th><th>% of Rev</th><th>Core FT</th><th>Total HC</th><th>Departments</th></tr>';
  COST_MODEL.summary.forEach(row => {
    const cls = row.highlight ? ' class="highlight"' : '';
    const phaseCell = row.highlight ? `<strong>${row.phase}</strong>` : row.phase;
    h += `<tr${cls}><td>${phaseCell}</td><td>${row.revenue}</td><td>${row.cost}</td><td>${row.pct}</td><td>${row.coreFT}</td><td>${row.totalHC}</td><td>${row.depts}</td></tr>`;
  });
  h += '</table>';

  h += `<p class="overview-text" style="margin-top:16px;">${COST_MODEL.summaryNote}</p>`;
  h += '</div>';

  h += '<div class="overview-section"><h2>$30M Cost Breakdown</h2>';
  h += '<table class="cost-table"><tr><th>Line Item</th><th>Annual Cost</th></tr>';
  COST_MODEL.breakdown.forEach(row => {
    const cls = row.highlight ? ' class="highlight"' : '';
    h += `<tr${cls}><td>${row.item}</td><td>${row.cost}</td></tr>`;
  });
  h += '</table></div>';

  container.innerHTML = h;
}

function renderAll() {
  renderEvolution();
  renderMission();
  renderAbby();
  renderPriorities();
  renderCost();
}
