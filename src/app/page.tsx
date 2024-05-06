import Image from "next/image";
import Hero from "~/components/Hero";
import SwiperIcons from '~/components/SwiperIcons';
import Tehnology from "~/components/Tehnology";

export default function Home() {
  return (
    <>
      <Hero />
      <Tehnology/>
      <SwiperIcons/>
    </>
  );
}
