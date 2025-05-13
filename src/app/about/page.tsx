import Footer from "@/components/footer";
import { DATA } from "@/data/resume";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Section1Bg1 from "../../../public/assets/section-1-bg1.jpg";

const AboutPage = () => {
  const page_sections = [
    <HeaderSection key="header_section" />,
    <AboutSection key="about_section" />,
    <Footer key={"footer_sections"} />,
  ];
  return (
    <div>
      {page_sections.map((item, index) => {
        return (
          <Fragment key={String(index) + "page_sections"}>
            <section
              className={clsx("w-full", index % 2 ? "bg-background/70" : "")}
            >
              {item}
            </section>
          </Fragment>
        );
      })}
    </div>
  );
};

export default AboutPage;

const HeaderSection = () => {
  return (
    <div className="flex justify-center items-center mx-auto py-24 w-[85%] large-sentences">
      <div className="flex flex-col justify-center items-center gap-3 w-fit">
        <h1>About Me</h1>
        <span className="bg-primary mx-auto w-[50%] h-[2px]" />
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="flex flex-col space-y-14 mx-auto py-24 w-[85%]">
      <div className="gap-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex justify-center items-center w-full">
          <div className="border-image rounded-md">
            <Image
              src={Section1Bg1}
              alt="Section 1 Background"
              className="rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl md:text-3xl lg:text-5xl">
            Developing with Passion and Curiosity
          </h1>
          <span className="bg-primary w-[100px] h-[2px]" />
          <p className="normal-sentences">
            I’m a full-stack developer with over two years of experience,
            creating dynamic and responsive web applications. My expertise lies
            in React.js and Next.js for front-end development, enhanced by
            Tailwind CSS and various component libraries to achieve sleek,
            modern designs. I also leverage the T3 stack to build scalable,
            efficient applications while staying up-to-date with the latest
            industry trends.
          </p>
          <div className="flex flex-col gap-2 normal-sentences">
            <p>{"Let's Connect."}</p>
            <p>{DATA.contact.email}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:col-span-2 lg:col-span-1 w-full">
          <h1 className="text-xl md:text-3xl lg:text-5xl">
            Balancing Academics with Real-World Projects
          </h1>
          <span className="bg-primary w-[100px] h-[2px]" />
          <p className="normal-sentences">
            Currently a 5th-semester student at Universitas Islam Lamongan,
            class of 2022, I balance my academic pursuits with real-world
            projects. My university experience is enriched by hands-on projects
            and collaborative work, which further enhances my skills and
            practical knowledge.
          </p>
          <p className="normal-sentences">
            I am dedicated to delivering web solutions that exceed client
            expectations and ensure exceptional user experiences. My aim is to
            make a significant impact in the digital space through high-quality,
            user-centric applications.
          </p>
          <div className="flex gap-3 md:gap-5 mt-3">
            {DATA.contact.social.map((contact_data, index) => (
              <Fragment key={index}>
                <Link href={contact_data.url} target="_blank">
                  {contact_data.icon}
                </Link>
              </Fragment>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-xl md:text-3xl lg:text-5xl">
            Crafting Solutions for Real-World Challenges
          </h1>
          <span className="bg-primary w-[100px] h-[2px]" />
          <p className="normal-sentences">
            My passion is creating solutions that tackle real-world challenges.
            I focus on understanding the underlying issues and developing
            innovative strategies to address them, leveraging technology to
            create intuitive, user-friendly products that make a positive
            impact.
          </p>
          {/* <Button className="w-fit">Download CV</Button> */}
        </div>

        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-3 lg:w-[75%]">
            {DATA.profile.skills.map((skill) => (
              <p
                key={skill}
                className="bg-primary px-4 py-2 rounded-md w-fit text-background dark:text-foreground"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
