import CreateEvent from "@/components/ui/CreateEvent";
import Explore from "@/components/ui/Explore";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import Newsletter from "@/components/ui/Newsletter";
import OnlineEvent from "@/components/ui/OnlineEvent";
import PopularEvent from "@/components/ui/PopularEvent";
import SpecialEvent from "@/components/ui/SpecialEvent";
import TrendingEvent from "@/components/ui/TrendingEvent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Explore />
      <PopularEvent />
      <OnlineEvent />
      <SpecialEvent />
      <TrendingEvent />
      <CreateEvent />
      <Newsletter />
      <Footer />
    </main>
  );
}
