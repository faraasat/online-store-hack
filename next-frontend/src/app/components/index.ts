import Navbar from "./navbar";
import { CustomButton, CustomButtonUnstyled } from "./button";
import LinkButton from "./link-button";
import TopHeader from "./top-header";

import {
  ICustomButton,
  ICustomButtonUnstyled,
  ILinkButton,
  ITopHeader,
} from "./index.d";

export {
  Navbar as NavbarComponent,
  CustomButton as CustomButtonComponent,
  CustomButtonUnstyled as CustomButtonUnstyledComponent,
  LinkButton as LinkButtonComponent,
  TopHeader as TopHeaderComponent,
};

export type { ICustomButton, ICustomButtonUnstyled, ILinkButton, ITopHeader };
