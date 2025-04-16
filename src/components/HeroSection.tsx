import { FC } from "react";
import projectlogo from "../assets/projectlogo.png";

const HeroSection: FC = () => (
  <section className="w-full py-4" role="banner" aria-label="Hero section">
    <div className="flex flex-col gap-4 items-center justify-center px-4">
      <h1 className="text-foreground text-4xl font-bold tracking-tight font-sg">
        The
      </h1>
      <img
        src={projectlogo}
        alt="Rick and Morty Project Logo"
        className="w-[600px] h-auto max-w-full"
        loading="eager"
        priority="high"
      />
      <h1 className="text-foreground text-4xl font-bold tracking-tight font-sg">
        API Project
      </h1>
      <p
        className="text-foreground text-lg text-center max-w-2xl font-sg"
        role="doc-subtitle"
      >
        The Rick and Morty Project is a project that allows you to search for
        characters, episodes, and locations from the Rick and Morty series.
      </p>
    </div>
  </section>
);

export default HeroSection;
