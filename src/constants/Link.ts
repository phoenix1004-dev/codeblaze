import { arrowRight } from "../assets/image";
import { MENULINK, HEADER_BUTTON, PRICE_BUTTON } from "../type";

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
    title: "Load more",
    link: "./#contact",
    icon: arrowRight,
  },
];

export const PRICE_BUTTON_LIST: PRICE_BUTTON[] = [
  { title: "Monthly pay as you use" },
  { title: "Annually" },
];
