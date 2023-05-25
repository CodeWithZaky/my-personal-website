import { Metadata } from "next";
// import Image from "next/image";
// import profilIMG from "@/assets/profil2.jpg";

export const metadata: Metadata = {
  title: "About - Portfolio",
};

const About = () => {
  return (
    <div className="w-[80%] m-auto pb-10 px-10 font-mono border flex justify-between items-start">
      <div className="w-2/3 border space-y-10">
        <p className="text-5xl font-bold border">About Me</p>
        <div className="space-y-4 pr-5">
          <p>
            My name is Ahmad Zaky Ubaidillah, but you can call me Zaky or Ubed.
          </p>
          <p>
            For over 2 years developing and programming interfaces with Next js,
            Tailwind css and Typescript.
          </p>
          <p>
            study of Systems Analysis and Development from Informatics
            Engineering.
          </p>
          <p>
            Interest in Front-end development with Next js, Tailwind css, and
            Typescript.
          </p>
          <p>Trying to be a little better than yesterday every day.</p>
        </div>
      </div>
      <div className="w-1/3 border h-full flex justify-end items-start">
        {/* <Image
          alt="image"
          src={profilIMG}
          className="bg-no-repeat object-cover"
        /> */}
      </div>
    </div>
  );
};

export default About;