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
