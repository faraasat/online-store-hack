import Navbar from "./navbar";
import Footer from "./footer";
import { CustomButton, CustomButtonUnstyled } from "./button";
import LinkButton from "./link-button";
import TopHeader from "./top-header";
import TextInput from "./text-input";
import TextArea from "./text-input-box";
import SelectInput from "./select-input";
import Item from "./item";
import CartItem from "./cart-item";

import {
  ICustomButton,
  ICustomButtonUnstyled,
  ILinkButton,
  ITopHeader,
} from "./index.d";

export {
  Navbar as NavbarComponent,
  Footer as FooterComponent,
  CustomButton as CustomButtonComponent,
  CustomButtonUnstyled as CustomButtonUnstyledComponent,
  LinkButton as LinkButtonComponent,
  TopHeader as TopHeaderComponent,
  TextInput as TextInputComponent,
  SelectInput as SelectInputComponent,
  TextArea as TextAreaComponent,
  Item as ItemComponent,
  CartItem as CartItemComponent,
};

export type { ICustomButton, ICustomButtonUnstyled, ILinkButton, ITopHeader };
