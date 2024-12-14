import { contactFormData } from "@/types/contact-form";

export function sendEmail(data: contactFormData) {
  return fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
