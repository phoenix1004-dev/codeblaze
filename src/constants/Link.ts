import { arrowRight } from "../assets/image";
import { HEADER_BUTTON, MenuLink } from "../type";

export const NAV_MENU: MenuLink[] = [
  { title: "services", link: "./#services" },
  { title: "process", link: "./#process" },
  { title: "team", link: "./#team" },
  { title: "pricing", link: "./#pricing" },
  { title: "FAQ", link: "./#faq" },
  { title: "contact", link: "./#contact" },
];

export const HEADER_BUTTON_LIST: HEADER_BUTTON[] = [
  { title: "our services", link: "./#services", icon: null },
  {
    title: "contact us",
    link: "./#contact",
    icon: arrowRight,
  },
];
