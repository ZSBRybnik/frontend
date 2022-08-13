export type Theme = {
  background: string;
  color: string;
  loader: string;
  accent: string;
  hover: string;
  active: string;
};

type Themes = {
  [key: string]: Theme;
};

export default Themes;
