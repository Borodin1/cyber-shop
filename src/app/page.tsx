import Banner from "~/components/Banner";
import Hero from "~/components/Hero";
import Sale from "~/components/Sale";
import SwiperIcons from "~/components/SwiperIcons";
import Tehnology from "~/components/Tehnology";
import Wrapper from "~/components/Wrapper";

export default function Home() {
  return (
    <>
      <Hero />
      <Tehnology />
      <SwiperIcons />
      <Wrapper />
      <Banner />
      <Wrapper isValidTab={false} isValidDiscount />
      <Sale/>
    </>
  );
}
