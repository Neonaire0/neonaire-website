(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      toggle.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    }));
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const open = item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });
  });
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 }) : null;
  document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));

  document.querySelectorAll('[data-contact-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const status = form.querySelector('[data-form-status]');
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = encodeURIComponent('Neonaire website enquiry: ' + (data.get('topic') || 'General enquiry'));
      const body = encodeURIComponent(
        'Name: ' + data.get('name') + '\nEmail: ' + data.get('email') +
        '\nOrganisation: ' + (data.get('company') || 'Not provided') +
        '\nTopic: ' + (data.get('topic') || 'General enquiry') +
        '\n\nMessage:\n' + data.get('message') +
        '\n\nConsent: ' + (data.get('consent') ? 'Yes' : 'No')
      );
      if (status) { status.hidden = false; status.textContent = 'Your message is ready in your email app. Review it and press Send. For direct website delivery, connect a secure form endpoint before launch.'; }
      const recipient = form.dataset.recipient || 'hello@neonaire.example';
      window.location.href = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;
    });
  });
})();
