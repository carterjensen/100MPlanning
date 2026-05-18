// Password gate. SHA-256 hash compare so the password isn't in plaintext source.
// Note: data files are still readable on the public repo. This protects against
// casual viewing of the rendered page, not determined inspection.

const EXPECTED_HASH = 'cf2a63375a57a64d79cc85ecb25f6da63e8700487d99eb7ee41cecad7882ebb2';
const STORAGE_KEY = 'tub-org-plan-unlocked';

async function sha256(text) {
  const buf = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest('SHA-256', buf);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

function unlock() {
  document.getElementById('auth-gate').style.display = 'none';
  const app = document.getElementById('app');
  app.hidden = false;
  if (typeof renderAll === 'function') renderAll();
  if (typeof initApp === 'function') initApp();
}

function showAuthGate() {
  const form = document.getElementById('auth-form');
  const input = document.getElementById('auth-input');
  const error = document.getElementById('auth-error');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const guess = input.value;
    if (!guess) return;
    const hash = await sha256(guess);
    if (hash === EXPECTED_HASH) {
      sessionStorage.setItem(STORAGE_KEY, '1');
      unlock();
    } else {
      error.textContent = 'Incorrect password.';
      input.value = '';
      input.focus();
    }
  });

  setTimeout(() => document.getElementById('auth-input').focus(), 50);
}

(function bootstrap() {
  if (sessionStorage.getItem(STORAGE_KEY) === '1') {
    unlock();
  } else {
    showAuthGate();
  }
})();
