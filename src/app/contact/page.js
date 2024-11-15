import FooterWeb from "@/components/FooterWeb";
import HeaderContactSection from "@/components/HeaderContactSection";
import Location from "@/components/Location";
import NewsLetter from "@/components/NewsLetter";

export default function Contact() {
  return (
    <>
      <HeaderContactSection />;
      <NewsLetter />
      <Location />
      <FooterWeb />
    </>
  );
}
