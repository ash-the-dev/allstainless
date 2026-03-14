"use client";

// components/ComingSoonHero.jsx
import { site } from "../lib/site";
import FlagBackdrop from "./FlagBackdrop";

export default function ComingSoonHero() {
  return (
    <section className="hero" id="top">
      <FlagBackdrop />
      <div className="grain" aria-hidden="true" />
      <div className="sparks" aria-hidden="true" />

      <div className="container heroInner">
        <div className="grid">
          <div>
            <div className="skeletonLine" style={{ display: "inline-flex", gap: 10, alignItems: "center" }}>
              <span style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 1.2, opacity: 0.9 }}>
                Commercial Stainless • Welding • Fabrication
              </span>
            </div>

            <h1 className="h1" style={{ marginTop: 18 }}>
              Clean welds. Sharp lines.
              <br />
              Built for commercial work.
            </h1>

            <p className="sub">
              {site.name} is launching a new site. In the meantime, send your scope and timeline and we’ll respond fast.
              <br />
              <span style={{ opacity: 0.9 }}>
                Note: Commercial projects only. No grease ducts or hood work.
              </span>
            </p>

            <div className="badges">
              <span className="badge">Stainless installs</span>
              <span className="badge">Field weld + shop fab</span>
              <span className="badge">Precision fit-up</span>
              <span className="badge">Commercial compliance minded</span>
            </div>
          </div>

          <div className="panel">
            <div className="panelTitle">
              <div className="kicker">Coming soon</div>
              <div className="small">Quote request</div>
            </div>
            <div className="small">
              Tell us what you’re building, where it’s going, and when you need it installed.
            </div>

            <div className="hr" />

            <QuickQuote />
            <div className="hr" />

            <div className="small">
              Or email: <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              Call: <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>{site.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickQuote() {
  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    const payload = {
      name: form.name.value.trim(),
      company: form.company.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      message: form.message.value.trim(),
    };

    form.querySelector("button[type=submit]").disabled = true;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Request failed");

      form.reset();
      alert("Received. We’ll reach out shortly.");
    } catch (err) {
      alert(err.message || "Something went wrong.");
    } finally {
      form.querySelector("button[type=submit]").disabled = false;
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input className="input" name="name" placeholder="Name" required />
      <input className="input" name="company" placeholder="Company" />
      <input className="input" name="email" placeholder="Email" type="email" required />
      <input className="input" name="phone" placeholder="Phone" />
      <textarea
        className="textarea"
        name="message"
        placeholder="Scope: material, dimensions, location, schedule, drawings (describe for now)."
        required
      />
      <div className="btnRow">
        <button className="button buttonPrimary" type="submit">
          Send request
        </button>
        <a className="button" href="#contact">
          Full contact
        </a>
      </div>
      <div className="small">
        Commercial projects only. No grease ducts or hood work.
      </div>
    </form>
  );
}