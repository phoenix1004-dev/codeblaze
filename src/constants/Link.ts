import { arrowRight, instagram, linkedin, tiktok, xcom } from "../assets/image";
import { MENULINK, HEADER_BUTTON, PRICE_BUTTON, SOCIALMEDIA } from "../type";

export const NAV_MENU: MENULINK[] = [
  { title: "services", link: "./#services" },
  { title: "process", link: "./#process" },
  { title: "team", link: "./#team" },
  { title: "pricing", link: "./#pricing" },
  { title: "FAQ", link: "./#faq" },
  { title: "contact", link: "./#contact" },
];

export const HEADER_BUTTON_LIST: HEADER_BUTTON[] = [
  { key: 0, title: "Get started", link: "./#services", icon: null },
  {
    key: 1,
    title: "Learn more",
    link: "./#process",
    icon: arrowRight,
  },
];

export const PRICE_BUTTON_LIST: PRICE_BUTTON[] = [
  { title: "Monthly pay as you use" },
  { title: "Annually" },
];

export const SOCIALMEDIA_LINK_LIST: SOCIALMEDIA[] = [
  { title: "x.com", link: "https://x.com/codeblazeai", icon: xcom },
  {
    title: "tiktok",
    link: "https://www.tiktok.com/@codeblaze.ai",
    icon: tiktok,
  },
  {
    title: "instagram",
    link: "https://www.instagram.com/codeblaze.ai",
    icon: instagram,
  },
  { title: "linkedin", link: "https://www.linkedin.com/", icon: linkedin },
];
