import React from "react";

import pervez from "../../../public/pervez.png";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <div>
        <Image src={pervez} height={500} width={500} alt="Pervez"></Image>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
