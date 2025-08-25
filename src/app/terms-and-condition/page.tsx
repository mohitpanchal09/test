import TermsAndConditionsContent from "@/components/custom/TermsAndConditionsContent/TermsAndConditionsContent";
import { termsData } from "@/lib/termsAndConditionsData";


export default function page() {
  return <TermsAndConditionsContent sections={termsData} />;
}