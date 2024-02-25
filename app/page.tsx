import Image from "next/image";
import Navbar from "./Components/Navbar";
import Billboard from "./Components/Billboard";
import Awards from "./Components/Awards";
import Collections from "./Components/Collections";
import WhyUs from "./Components/WhyUs";
import Parents from "./Components/Parents";
import Options from "./Components/Options";

export default function Home() {
  return (
    <div className=" cursor-default">

      <Billboard />
      <br />
      <Options />
      <Awards />
      <br />
      <Collections />
      <br />
      <WhyUs />
      <Parents />
    </div>
  )
}
