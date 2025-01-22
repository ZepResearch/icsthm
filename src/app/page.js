import AboutSection from "@/components/About";
import CoOrganizationLogos from "@/components/Co-OrganiztionLogo";
import CTASection from "@/components/Cta";
import Dates from "@/components/Dates";
import DownloadButtons from "@/components/Downloadbuttons";
import Hero from "@/components/Hero";
import ConferenceHighlightSection from "@/components/Hightlight";
import ConferenceObjectives from "@/components/Objective";
import SDGSection from "@/components/SDGS";
import SpeakerSection from "@/components/Speakers";
import Testimonial from "@/components/Testomonial";
import TicketCTA from "@/components/TicketCTA";
import VenueWithFAQ from "@/components/VenueWithFAQ";

export default function Home() {
  return (
   <>
   <Hero/>
   <CoOrganizationLogos/>
   <AboutSection/>
   <DownloadButtons/>
   <ConferenceObjectives/>
   <SpeakerSection/>
   <SDGSection/>
   {/* <ConferenceHighlightSection/> */}
   <CTASection/>
   <Dates/>
   <TicketCTA/>
   <Testimonial/>
   <VenueWithFAQ/>
   </>
  );
}
