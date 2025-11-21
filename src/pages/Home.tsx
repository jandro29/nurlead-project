import Header from "@/components/layout/Header";
import Banner from "@/components/layout/Banner"
import Footer from "@/components/layout/Footer";
import Categories from "@/components/home/Categories";
import Advantages from "@/components/home/Advantages";
import Stats from "@/components/home/Stats";
import PopularClasses from "@/components/home/PopularClasses";
import Community from "@/components/home/Community";
import Teachers from "@/components/home/Teachers";
import Testimonials from "@/components/home/Testimonials";
import Teams from "@/components/home/Teams";
import FAQ from "@/components/home/FAQ";
import { Fragment } from "react/jsx-runtime";


export default function Home() {
  return (
    <Fragment>
      <Header />
      <Banner/>

      <Categories />
      <Advantages />
      <Stats />
      <PopularClasses />
      <Community />
      <Teachers />
      <Testimonials />
      <Teams />
      <FAQ />

      <Footer />
    </Fragment>
  );
}