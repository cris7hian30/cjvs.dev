import { PortfolioItemProps } from "@/components/common/PortfolioItem";
import { skills as sk } from "./skills";

export const portfolioItems: PortfolioItemProps[] = [
  {
    title: "Renga",
    videoUrl: "/videos/renga.mp4",
    imageUrl: "/videos/renga.webp",
    description:
      "Front End, Animations and Blockchain (Smart contracts) interaction. Built while working with Yuga Labs.",
    link: "https://renga.art/",
    stack: [sk.jsts, sk.react, sk.next],
  },
];
