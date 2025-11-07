import AboutSection from "@/components/About";
import CoOrganizationLogos from "@/components/Co-OrganiztionLogo";
import CTASection from "@/components/Cta";
import Dates from "@/components/Dates";
import { DownloadPopup } from "@/components/download-popup";
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
   <DownloadPopup/>
   <CoOrganizationLogos/>
   <AboutSection/>
   <ConferenceObjectives/>
   <DownloadButtons/>
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
