import { useEffect, useRef, useState } from "react";
import { config } from "./data/config";

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384Z" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg viewBox="0 0 496 512" fill="currentColor" width="16" height="16">
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" width="16" height="16">
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  );
}

function IconArrowUp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = section.querySelectorAll(".contact-reveal");
            items.forEach((el, i) => {
              setTimeout(() => {
                el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 110);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = section.querySelectorAll(".contact-reveal");
    items.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
    });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${config.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section className="section contact-section" id="contact" ref={sectionRef}>
      <p className="section-label contact-reveal">Get In Touch</p>
      <h2 className="contact-heading contact-reveal">Let's connect!</h2>
      <p className="contact-sub contact-reveal">
        I'm always open to discussing new opportunities, interesting projects, or just having a
        chat about technology and development.
      </p>

      <div className="contact-grid">
        <div className="contact-reveal">
          <div className="contact-info-block">
            <span className="contact-info-icon"><IconMail /></span>
            <div>
              <div className="contact-col-label">Email</div>
              <a href={`mailto:${config.contact.email}`} className="contact-col-value contact-col-link">
                {config.contact.email}
              </a>
            </div>
          </div>

          <div className="contact-info-block">
            <span className="contact-info-icon"><IconPhone /></span>
            <div>
              <div className="contact-col-label">Phone</div>
              <a href={`tel:${config.contact.phone}`} className="contact-col-value contact-col-link">
                {config.contact.phone}
              </a>
            </div>
          </div>

          <div className="contact-info-block">
            <span className="contact-info-icon"><IconPin /></span>
            <div>
              <div className="contact-col-label">Location</div>
              <div className="contact-col-value">{config.social.location}</div>
            </div>
          </div>

          <div className="contact-social-row">
            <a href={config.contact.github} target="_blank" rel="noopener noreferrer" className="contact-social-icon" title="GitHub">
              <IconGithub />
            </a>
            <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social-icon" title="LinkedIn">
              <IconLinkedin />
            </a>
            <a href={`mailto:${config.contact.email}`} className="contact-social-icon" title="Email">
              <IconMail />
            </a>
          </div>
        </div>

        <form className="contact-form contact-reveal" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <input
              className="contact-input"
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className="contact-input"
              type="email"
              name="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            className="contact-input"
            type="text"
            name="subject"
            placeholder="What's this about?"
            value={form.subject}
            onChange={handleChange}
          />
          <textarea
            className="contact-textarea"
            name="message"
            placeholder="Tell me about your project or idea..."
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="contact-submit">
            {sent ? "Opening your email app…" : "Send Message"}
            <span className="contact-submit-arrow"><IconArrowUp /></span>
          </button>
        </form>
      </div>

      <div className="contact-footer-row contact-reveal">
        <span className="contact-footer-copy">
          &copy; {new Date().getFullYear()} {config.developer.fullName}
        </span>
        <span className="contact-footer-tagline">
          Designed &amp; Developed by {config.developer.name}
        </span>
      </div>
    </section>
  );
}