import React from "react";

import image from "../../../public/pervez.png";
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="grid grid-cols-2 gap-24 items-center">
      <div>
        <Image
          src={image}
          width={500}
          height={500}
          alt="pervez"
          className="rounded-full"
        ></Image>
      </div>
      <div>
        <h2 className="text-4xl font-semibold mb-5">About MySelf</h2>
        <p className="text-[16px] leading-[28px] mb-5">
          Hello I am Md. Pervez Hossain , a full time Full Stack Web developer I
          have a well-rounded skill set, and a passion for bringing innovative
          ideas to fruition. I have creative idea about designing And
          Development that I would like to share with you.
        </p>
        <div className="flex items-center gap-5">
          <FaFacebook className="text-[20px] hover:text-orange-500 duration-700 cursor-pointer"></FaFacebook>
          <FaLinkedin className="text-[20px] hover:text-orange-500 duration-700 cursor-pointer"></FaLinkedin>
          <FaGithub className="text-[20px] hover:text-orange-500 duration-700 cursor-pointer"></FaGithub>
        </div>
      </div>
    </div>
  );
};

export default About;
