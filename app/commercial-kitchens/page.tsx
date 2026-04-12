import CommercialKitchensPage from "../../components/CommercialKitchensPage";
import { site } from "../../lib/site";

const title = `Commercial Kitchen Fabrication & Installation | ${site.name}`;
const description =
  "Commercial kitchen fabrication, kitchen hood systems, walk-in cooler and freezer installation, stainless protective metalwork, repairs, and replacements. Oregon & Washington.";

export const metadata = {
  title,
  description,
  keywords: [
    "commercial kitchen fabrication",
    "kitchen hood installation",
    "walk-in cooler stainless",
    "commercial kitchen stainless Oregon",
    "stainless steel kitchen Washington",
  ],
  openGraph: {
    title,
    description,
    url: `https://www.${site.domain}/commercial-kitchens`,
    siteName: site.name,
    type: "website",
  },
};

export default function CommercialKitchensRoute() {
  return <CommercialKitchensPage />;
}
