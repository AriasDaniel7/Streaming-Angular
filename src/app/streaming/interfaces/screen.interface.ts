export interface Screen {
  id:            string;
  name:          string;
  price:         number;
  pricePrevious: number;
  description:   string;
  image:         string;
  stock:         number;
  discount:      number;
  screenTypes:   ScreenType[];
  screenSent:    ScreenSent[];
}

export interface ScreenSent {
  id:   string;
  name: string;
}

export interface ScreenType {
  id:          string;
  name:        string;
  description: string;
}
