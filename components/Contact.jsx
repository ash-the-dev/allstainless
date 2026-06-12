import Section from "./Section";
import ContactForm from "./ContactForm";
import TrackableAnchor from "./TrackableAnchor";

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
              Projects for commercial kitchens, handled cleanly from first message
              to final install.
            </h3>

            <p className="contactText">
              Include material, finish, rough dimensions, site location, access
              notes, and your target timeline. The more detail you send, the
              faster we can line up the right next step.
            </p>
          </div>

          <ContactForm />
        </div>

        <aside className="contactInfoCard">
          <p className="contactInfoEyebrow">Direct contact</p>

          <div className="contactInfoBlock">
            <span className="contactInfoLabel">Email</span>
            <TrackableAnchor
              href="mailto:allstainls@gmail.com"
              trackEvent="contact_click"
              trackSource="contact_section_email"
              category="conversion"
              isConversion
            >
              allstainls@gmail.com
            </TrackableAnchor>
          </div>

          <div className="contactInfoBlock">
            <span className="contactInfoLabel">Phone</span>
            <TrackableAnchor
              href="tel:13607729079"
              trackEvent="contact_click"
              trackSource="contact_section_phone"
              category="conversion"
              isConversion
            >
              (360) 772-9079
            </TrackableAnchor>
          </div>

          <div className="contactInfoBlock">
            <span className="contactInfoLabel">Service area</span>
            <p>Serving commercial kitchens across Oregon and Washington</p>
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
