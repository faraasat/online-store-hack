export interface INavigationData {
  name: string;
  url: string;
  Icon?: any;
  showIcon?: boolean;
}

export interface INavigationWithDropDown extends INavigationData {
  dropdown?: boolean;
  dropdownItems?: Array<INavigationData>;
}
