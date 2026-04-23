import { permanentRedirect } from "next/navigation";

// This page existed in the financial coaching version of the site.
// Redirect permanently to the programs section.
export default function HowItWorksPage() {
  permanentRedirect("/programs/service-dog");
}
