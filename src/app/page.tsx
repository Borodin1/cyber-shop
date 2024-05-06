import Hero from "~/components/Hero";
import SwiperIcons from '~/components/SwiperIcons';
import Tehnology from "~/components/Tehnology";
import Wrapper from "~/components/Wrapper";

export default function Home() {
  return (
    <>
      <Hero />
      <Tehnology/>
      <SwiperIcons/>
      <Wrapper/>
      <Wrapper isValidTab={false} isValidDiscount/>
    </>
  );
}
