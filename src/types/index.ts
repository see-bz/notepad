export interface IConfig {
  [key: string]: string | number | boolean | IConfig;
}

export interface IPage {
  path: string;
  title: string;
  description: string;
}
