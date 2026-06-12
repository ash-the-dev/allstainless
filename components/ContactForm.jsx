"use client";

import { wipTrackContactClick } from "../lib/wipTrack";
import {
  WEB3FORMS_ACCESS_KEY,
  WEB3FORMS_FROM_NAME,
  WEB3FORMS_SUBJECT,
} from "../lib/contactForm";

export default function ContactForm() {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="contactForm"
      onSubmit={() => wipTrackContactClick("contact_form_send_request")}
    >
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input type="hidden" name="subject" value={WEB3FORMS_SUBJECT} />
      <input type="hidden" name="from_name" value={WEB3FORMS_FROM_NAME} />
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
          <span>Project type</span>
          <select name="project_type" defaultValue="">
            <option value="">Select a category</option>
            <option value="Commercial kitchens">Commercial kitchens</option>
            <option value="Restaurant / food service">Restaurant / food service</option>
            <option value="Industrial / other">Industrial / other</option>
          </select>
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
  );
}
