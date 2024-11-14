import Navbar from "../app/components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import 'bootstrap/dist/css/bootstrap.min.css';

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
