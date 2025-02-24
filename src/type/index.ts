export type MENULINK = {
  title: string;
  link: string;
};

export type HEADER_BUTTON = {
  key: number;
  title: string;
  link: string;
  icon: any;
};

export type PRICE_BUTTON = {
  title: string;
};

export type CURSOR_POSITION = {
  left: number;
  width: number;
  opacity: number;
};

export type IMAGE = {
  image: any;
  srcSet?: string;
  alt?: string;
};

export type TAB = {
  key: number;
  title: string;
};

export type RECT_CURSOR = {
  top: number;
  left: number;
  width: number;
};

export type POINTER = {
  top: number;
  left: number;
};

export type MEMBER = {
  avatar: any;
  pos: string;
  name: string;
};

export type REVIEW = {
  person: MEMBER;
  comment: string;
};

export type QA = {
  qu: string;
  an: string;
};

export type STAR = {
  id: number;
  angle: number;
  distance: number;
  duration: number;
};

export type SOCIALMEDIA = {
  title: string;
  link: string;
  icon?: any;
};
