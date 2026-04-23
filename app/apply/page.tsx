import { permanentRedirect } from "next/navigation";

// This page existed in the financial coaching version of the site.
// Redirect permanently to the dog training consult booking page.
export default function ApplyPage() {
  permanentRedirect("/book-a-consult");
}
