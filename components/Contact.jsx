import Section from "./Section";

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Start the job"
      title="Request a quote"
      subtitle="Send project scope, schedule, and rough dimensions. We’ll respond with next steps and a quote path."
    >
      <div className="contactWrap">
        <div className="contactPanel">
          <div className="contactIntro">
            <div className="contactBadge">Fast response</div>

            <h3 className="contactHeadline">
              Commercial stainless projects, handled cleanly from first message
              to final install.
            </h3>

            <p className="contactText">
              Include material, finish, rough dimensions, site location, access
              notes, and your target timeline. The more detail you send, the
              faster we can line up the right next step.
            </p>
          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contactForm"
          >
            <input
              type="hidden"
              name="access_key"
              value="d29d42cd-dd90-499d-83da-67410b1a2f7b"
            />
            <input
              type="hidden"
              name="subject"
              value="New All Stainless Quote Request"
            />
            <input
              type="hidden"
              name="from_name"
              value="All Stainless Website"
            />
            <input
              type="checkbox"
              name="botcheck"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="contactGrid">
              <label className="field">
                <span>Name</span>
                <input type="text" name="name" required />
              </label>

              <label className="field">
                <span>Email</span>
                <input type="email" name="email" required />
              </label>

              <label className="field">
                <span>Phone</span>
                <input type="tel" name="phone" />
              </label>

              <label className="field">
                <span>Company</span>
                <input type="text" name="company" />
              </label>

              <label className="field fieldFull">
                <span>Project details</span>
                <textarea name="message" required />
              </label>
            </div>

            <div className="contactFormFooter">

              <button type="submit" className="btn btnPrimary">
                Send request
              </button>
            </div>
          </form>
        </div>

        <aside className="contactInfoCard">
          <p className="contactInfoEyebrow">Direct contact</p>

          <div className="contactInfoBlock">
            <span className="contactInfoLabel">Email</span>
            <a href="mailto:allstainls@gmail.com">allstainls@gmail.com</a>
          </div>

          <div className="contactInfoBlock">
            <span className="contactInfoLabel">Phone</span>
            <a href="tel:13607729079">(360) 772-9079</a>
          </div>

          <div className="contactInfoBlock">
            <span className="contactInfoLabel">Service area</span>
            <p>Serving commercial clients in Oregon and Washington</p>
          </div>

          <div className="contactInfoBlock">
            <span className="contactInfoLabel">Hours</span>
            <p>Mon – Fri · 8am – 5pm</p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
