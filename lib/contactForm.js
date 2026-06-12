/**
 * Web3Forms — shared by the contact section and the floating pill.
 * Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to match your other sites (e.g. ashthedev.com)
 * so every form posts to the same inbox.
 */
export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
  "d29d42cd-dd90-499d-83da-67410b1a2f7b";

export const WEB3FORMS_SUBJECT = "New All Stainless Quote Request";

export const WEB3FORMS_FROM_NAME = "All Stainless Website";

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
