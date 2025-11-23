import Header from "@/components/Header";
import Banner from "@/components/Banner"
import Footer from "@/components/Footer";
import Categories from "@/components/Categories";
import Advantages from "@/components/Advantages";
import Stats from "@/components/Stats";
import PopularClasses from "@/components/PopularClasses";
import Community from "@/components/Community";
import Teachers from "@/components/Teachers";
import Testimonials from "@/components/Testimonials";
import Teams from "@/components/Teams";
import FAQ from "@/components/FAQ";
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