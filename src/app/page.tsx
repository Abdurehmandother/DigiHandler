import Navbar from "../app/components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Services />
      <Footer />
    </>
  );
}
