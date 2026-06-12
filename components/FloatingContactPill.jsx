"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { site } from "../lib/site";
import {
  WEB3FORMS_ACCESS_KEY,
  WEB3FORMS_ENDPOINT,
  WEB3FORMS_FROM_NAME,
  WEB3FORMS_SUBJECT,
} from "../lib/contactForm";
import { wipTrackContactClick } from "../lib/wipTrack";

export default function FloatingContactPill() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle");
  const panelRef = useRef(null);
  const triggerRef = useRef(null);
  const titleId = useId();

  const close = useCallback(() => {
    setOpen(false);
    setStatus("idle");
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => {
      panelRef.current?.querySelector("input[name=name]")?.focus();
    }, 50);
    return () => window.clearTimeout(t);
  }, [open]);

  async function onSubmit(e) {
    e.preventDefault();
    wipTrackContactClick("floating_pill_send_request");
    const form = e.currentTarget;
    setStatus("sending");
    const fd = new FormData(form);
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: WEB3FORMS_SUBJECT,
      from_name: WEB3FORMS_FROM_NAME,
      name: fd.get("name")?.toString() ?? "",
      email: fd.get("email")?.toString() ?? "",
      phone: fd.get("phone")?.toString() ?? "",
      company: fd.get("company")?.toString() ?? "",
      project_type: fd.get("project_type")?.toString() ?? "",
      message: fd.get("message")?.toString() ?? "",
    };

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const avatarSrc = site.contactPillAvatarSrc?.trim();

  return (
    <div className="floatingPillRoot">
      <button
        type="button"
        ref={triggerRef}
        className="floatingPillTrigger"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls={open ? "floating-contact-panel" : undefined}
        onClick={() => {
          if (!open) wipTrackContactClick("floating_pill_open");
          setOpen((v) => !v);
        }}
      >
        <span className="floatingPillAvatar" aria-hidden>
          {avatarSrc ? (
            <Image
              src={avatarSrc}
              alt=""
              width={44}
              height={44}
              className="floatingPillAvatarImg"
            />
          ) : (
            <span className="floatingPillAvatarPlaceholder" title="Add your photo in lib/site.js">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path
                  d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.42 0-8 1.79-8 4v1h16v-1c0-2.21-3.58-4-8-4Z"
                  fill="currentColor"
                  opacity="0.45"
                />
              </svg>
            </span>
          )}
        </span>
        <span className="floatingPillLabel">Message us</span>
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="floatingPillBackdrop"
            aria-label="Close contact form"
            onClick={close}
          />
          <div
            ref={panelRef}
            id="floating-contact-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="floatingPillPanel"
          >
            <div className="floatingPillPanelHead">
              <div>
                <p className="floatingPillPanelEyebrow">{site.name}</p>
                <h2 id={titleId} className="floatingPillPanelTitle">
                  Request a quote
                </h2>
              </div>
              <button type="button" className="floatingPillClose" onClick={close} aria-label="Close">
                ×
              </button>
            </div>

            <form className="contactForm floatingPillForm" onSubmit={onSubmit} noValidate>
              <div className="contactGrid">
                <label className="field">
                  <span>Name</span>
                  <input type="text" name="name" required autoComplete="name" />
                </label>

                <label className="field">
                  <span>Email</span>
                  <input type="email" name="email" required autoComplete="email" />
                </label>

                <label className="field">
                  <span>Phone</span>
                  <input type="tel" name="phone" autoComplete="tel" />
                </label>

                <label className="field">
                  <span>Company</span>
                  <input type="text" name="company" autoComplete="organization" />
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

              <div className="contactFormFooter floatingPillFormFooter">
                {status === "success" ? (
                  <p className="floatingPillStatus floatingPillStatusOk" role="status">
                    Thanks — we&apos;ll be in touch shortly.
                  </p>
                ) : status === "error" ? (
                  <p className="floatingPillStatus floatingPillStatusErr" role="alert">
                    Something went wrong. Please try again or email {site.email}.
                  </p>
                ) : null}
                <button
                  type="submit"
                  className="btn btnPrimary"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send request"}
                </button>
              </div>
            </form>
          </div>
        </>
      ) : null}
    </div>
  );
}
