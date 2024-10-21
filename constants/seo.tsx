import type { NextSeoProps } from "next-seo";

const BASE_URL = "https://cjvs.dev";
const DEFAULT_TITLE = `Cristhian Valadez 🧑🏻‍💻 | Software Engineer 💻`;
const DEFAULT_DESCRIPTION =
  "Software Engineer with 5 years of experience specialized in building user-centric products that deliver real value by leveraging a wide range of technologies and skills, including (but not limited to) Javascript/Typescript, React Native, React, Next.js, SQL/No-SQL, and more.";

/**
 * Default SEO settings. These are the fallbacks if a `NextSeo` component is not
 * found on the page. For all options, @see https://github.com/garmeeh/next-seo
 */
export const DEFAULT_SEO: NextSeoProps = {
  titleTemplate: DEFAULT_TITLE,
  defaultTitle: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    url: BASE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en-US",
    images: [
      {
        // OG image paths must include the host in the URL
        url: `${BASE_URL}/images/default-share.jpg`,
        width: 1920,
        height: 1080,
        alt: "Cristhian Valadez",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: "@cris7hian30",
    site: "@cris7hian30",
    cardType: "summary_large_image",
  },
};
