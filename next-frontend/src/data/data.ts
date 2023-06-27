import { FaCompass, FaHome, FaInfoCircle } from "react-icons/fa";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";
import { SiProducthunt } from "react-icons/si";

import { INavigationData, INavigationWithDropDown } from "@/data";
import { TbMoodKid } from "react-icons/tb";

export const navigationData: Array<INavigationWithDropDown> = [
  { name: "Home", url: "/", Icon: FaHome },
  {
    name: "About",
    url: "/about",
    Icon: FaInfoCircle,
  },
  {
    name: "Discover",
    url: "/",
    Icon: FaCompass,
    dropdown: true,
    dropdownItems: [
      {
        name: "Men",
        url: "/products/men",
        Icon: BiMaleSign,
      },
      {
        name: "Women",
        url: "/products/women",
        Icon: BiFemaleSign,
      },
      {
        name: "Kids",
        url: "/products/kids",
        Icon: TbMoodKid,
      },
      {
        name: "All Products",
        url: "/products",
        Icon: SiProducthunt,
      },
    ],
  },
];

export const smallNavigationData: Array<INavigationData> = [
  { name: "Home", url: "/", Icon: FaHome, showIcon: true },
  {
    name: "About",
    url: "/about",
    Icon: FaInfoCircle,
    showIcon: true,
  },
  {
    name: "Men",
    url: "/products/men",
    Icon: BiMaleSign,
    showIcon: true,
  },
  {
    name: "Women",
    url: "/products/women",
    Icon: BiFemaleSign,
    showIcon: true,
  },
  {
    name: "Kids",
    url: "/products/kids",
    Icon: TbMoodKid,
    showIcon: true,
  },
  {
    name: "All Products",
    url: "/products",
    Icon: SiProducthunt,
    showIcon: true,
  },
];

export const aboutData: Array<string> = [
  "Welcome to Xenrir, the ultimate fashion destination for trendsetters who want to redefine their style and unlock incredible rewards along the way! Our cutting-edge platform revolutionizes the fashion industry, empowering customers to discover unique pieces and establish their fashion prowess with verifiable authenticity. Step into a world where self-expression meets innovation, where every wardrobe choice is a statement waiting to be made.",
  "At Xenrir, we believe in more than just fashion – we believe in a community that thrives on individuality. With our innovative tokenization technology, you can now take ownership of your favorite fashion items and showcase your personal style like never before. Say goodbye to impersonal transactions and hello to a world where your fashion choices are celebrated and rewarded.",
  "But that's not all – with Xenrir, fashionistas can also earn rewards by lending, borrowing, and staking their tokens, creating a dynamic ecosystem that rewards both creativity and investment. Unlock a world of possibilities and be part of the fashion revolution that transcends boundaries.",
  "Don't settle for ordinary fashion experiences or generic styles. Join Xenrir today and let your wardrobe reflect your true essence. It's time to level up your fashion game and embrace the limitless possibilities of style.",
];

export const countryList: Array<string> = [
  "Afghanistan",
  "Åland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "United States Minor Outlying Islands",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cabo Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo (Democratic Republic of the)",
  "Cook Islands",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands (Malvinas)",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Côte d'Ivoire",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Macedonia (the former Yugoslav Republic of)",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia (Federated States of)",
  "Moldova (Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Korea (Democratic People's Republic of)",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of Kosovo",
  "Réunion",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "Korea (Republic of)",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom of Great Britain and Northern Ireland",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export const categoryList: Array<string> = ["men", "women", "kids"];

export const sizesList: Array<string> = [
  "2xs",
  "xs",
  "sm",
  "lg",
  "xl",
  "2xl",
  "3xl",
];

export const countryToCodeData = new Map([
  ["Afghanistan", "AF"],
  ["Åland Islands", "AX"],
  ["Albania", "AL"],
  ["Algeria", "DZ"],
  ["American Samoa", "AS"],
  ["AndorrA", "AD"],
  ["Angola", "AO"],
  ["Anguilla", "AI"],
  ["Antarctica", "AQ"],
  ["Antigua and Barbuda", "AG"],
  ["Argentina", "AR"],
  ["Armenia", "AM"],
  ["Aruba", "AW"],
  ["Australia", "AU"],
  ["Austria", "AT"],
  ["Azerbaijan", "AZ"],
  ["Bahamas", "BS"],
  ["Bahrain", "BH"],
  ["Bangladesh", "BD"],
  ["Barbados", "BB"],
  ["Belarus", "BY"],
  ["Belgium", "BE"],
  ["Belize", "BZ"],
  ["Benin", "BJ"],
  ["Bermuda", "BM"],
  ["Bhutan", "BT"],
  ["Bolivia", "BO"],
  ["Bosnia and Herzegovina", "BA"],
  ["Botswana", "BW"],
  ["Bouvet Island", "BV"],
  ["Brazil", "BR"],
  ["British Indian Ocean Territory", "IO"],
  ["Brunei Darussalam", "BN"],
  ["Bulgaria", "BG"],
  ["Burkina Faso", "BF"],
  ["Burundi", "BI"],
  ["Cambodia", "KH"],
  ["Cameroon", "CM"],
  ["Canada", "CA"],
  ["Cape Verde", "CV"],
  ["Cayman Islands", "KY"],
  ["Central African Republic", "CF"],
  ["Chad", "TD"],
  ["Chile", "CL"],
  ["China", "CN"],
  ["Christmas Island", "CX"],
  ["Cocos (Keeling) Islands", "CC"],
  ["Colombia", "CO"],
  ["Comoros", "KM"],
  ["Congo", "CG"],
  ["Congo, The Democratic Republic of the", "CD"],
  ["Cook Islands", "CK"],
  ["Costa Rica", "CR"],
  ['Cote D"Ivoire', "CI"],
  ["Croatia", "HR"],
  ["Cuba", "CU"],
  ["Cyprus", "CY"],
  ["Czech Republic", "CZ"],
  ["Denmark", "DK"],
  ["Djibouti", "DJ"],
  ["Dominica", "DM"],
  ["Dominican Republic", "DO"],
  ["Ecuador", "EC"],
  ["Egypt", "EG"],
  ["El Salvador", "SV"],
  ["Equatorial Guinea", "GQ"],
  ["Eritrea", "ER"],
  ["Estonia", "EE"],
  ["Ethiopia", "ET"],
  ["Falkland Islands (Malvinas)", "FK"],
  ["Faroe Islands", "FO"],
  ["Fiji", "FJ"],
  ["Finland", "FI"],
  ["France", "FR"],
  ["French Guiana", "GF"],
  ["French Polynesia", "PF"],
  ["French Southern Territories", "TF"],
  ["Gabon", "GA"],
  ["Gambia", "GM"],
  ["Georgia", "GE"],
  ["Germany", "DE"],
  ["Ghana", "GH"],
  ["Gibraltar", "GI"],
  ["Greece", "GR"],
  ["Greenland", "GL"],
  ["Grenada", "GD"],
  ["Guadeloupe", "GP"],
  ["Guam", "GU"],
  ["Guatemala", "GT"],
  ["Guernsey", "GG"],
  ["Guinea", "GN"],
  ["Guinea-Bissau", "GW"],
  ["Guyana", "GY"],
  ["Haiti", "HT"],
  ["Heard Island and Mcdonald Islands", "HM"],
  ["Holy See (Vatican City State)", "VA"],
  ["Honduras", "HN"],
  ["Hong Kong", "HK"],
  ["Hungary", "HU"],
  ["Iceland", "IS"],
  ["India", "IN"],
  ["Indonesia", "ID"],
  ["Iran, Islamic Republic Of", "IR"],
  ["Iraq", "IQ"],
  ["Ireland", "IE"],
  ["Isle of Man", "IM"],
  ["Israel", "IL"],
  ["Italy", "IT"],
  ["Jamaica", "JM"],
  ["Japan", "JP"],
  ["Jersey", "JE"],
  ["Jordan", "JO"],
  ["Kazakhstan", "KZ"],
  ["Kenya", "KE"],
  ["Kiribati", "KI"],
  ['Korea, Democratic People"S Republic of', "KP"],
  ["Korea, Republic of", "KR"],
  ["Kuwait", "KW"],
  ["Kyrgyzstan", "KG"],
  ['Lao People"S Democratic Republic', "LA"],
  ["Latvia", "LV"],
  ["Lebanon", "LB"],
  ["Lesotho", "LS"],
  ["Liberia", "LR"],
  ["Libyan Arab Jamahiriya", "LY"],
  ["Liechtenstein", "LI"],
  ["Lithuania", "LT"],
  ["Luxembourg", "LU"],
  ["Macao", "MO"],
  ["Macedonia, The Former Yugoslav Republic of", "MK"],
  ["Madagascar", "MG"],
  ["Malawi", "MW"],
  ["Malaysia", "MY"],
  ["Maldives", "MV"],
  ["Mali", "ML"],
  ["Malta", "MT"],
  ["Marshall Islands", "MH"],
  ["Martinique", "MQ"],
  ["Mauritania", "MR"],
  ["Mauritius", "MU"],
  ["Mayotte", "YT"],
  ["Mexico", "MX"],
  ["Micronesia, Federated States of", "FM"],
  ["Moldova, Republic of", "MD"],
  ["Monaco", "MC"],
  ["Mongolia", "MN"],
  ["Montserrat", "MS"],
  ["Morocco", "MA"],
  ["Mozambique", "MZ"],
  ["Myanmar", "MM"],
  ["Namibia", "NA"],
  ["Nauru", "NR"],
  ["Nepal", "NP"],
  ["Netherlands", "NL"],
  ["Netherlands Antilles", "AN"],
  ["New Caledonia", "NC"],
  ["New Zealand", "NZ"],
  ["Nicaragua", "NI"],
  ["Niger", "NE"],
  ["Nigeria", "NG"],
  ["Niue", "NU"],
  ["Norfolk Island", "NF"],
  ["Northern Mariana Islands", "MP"],
  ["Norway", "NO"],
  ["Oman", "OM"],
  ["Pakistan", "PK"],
  ["Palau", "PW"],
  ["Palestinian Territory, Occupied", "PS"],
  ["Panama", "PA"],
  ["Papua New Guinea", "PG"],
  ["Paraguay", "PY"],
  ["Peru", "PE"],
  ["Philippines", "PH"],
  ["Pitcairn", "PN"],
  ["Poland", "PL"],
  ["Portugal", "PT"],
  ["Puerto Rico", "PR"],
  ["Qatar", "QA"],
  ["Reunion", "RE"],
  ["Romania", "RO"],
  ["Russian Federation", "RU"],
  ["RWANDA", "RW"],
  ["Saint Helena", "SH"],
  ["Saint Kitts and Nevis", "KN"],
  ["Saint Lucia", "LC"],
  ["Saint Pierre and Miquelon", "PM"],
  ["Saint Vincent and the Grenadines", "VC"],
  ["Samoa", "WS"],
  ["San Marino", "SM"],
  ["Sao Tome and Principe", "ST"],
  ["Saudi Arabia", "SA"],
  ["Senegal", "SN"],
  ["Serbia and Montenegro", "CS"],
  ["Seychelles", "SC"],
  ["Sierra Leone", "SL"],
  ["Singapore", "SG"],
  ["Slovakia", "SK"],
  ["Slovenia", "SI"],
  ["Solomon Islands", "SB"],
  ["Somalia", "SO"],
  ["South Africa", "ZA"],
  ["South Georgia and the South Sandwich Islands", "GS"],
  ["Spain", "ES"],
  ["Sri Lanka", "LK"],
  ["Sudan", "SD"],
  ["Suriname", "SR"],
  ["Svalbard and Jan Mayen", "SJ"],
  ["Swaziland", "SZ"],
  ["Sweden", "SE"],
  ["Switzerland", "CH"],
  ["Syrian Arab Republic", "SY"],
  ["Taiwan, Province of China", "TW"],
  ["Tajikistan", "TJ"],
  ["Tanzania, United Republic of", "TZ"],
  ["Thailand", "TH"],
  ["Timor-Leste", "TL"],
  ["Togo", "TG"],
  ["Tokelau", "TK"],
  ["Tonga", "TO"],
  ["Trinidad and Tobago", "TT"],
  ["Tunisia", "TN"],
  ["Turkey", "TR"],
  ["Turkmenistan", "TM"],
  ["Turks and Caicos Islands", "TC"],
  ["Tuvalu", "TV"],
  ["Uganda", "UG"],
  ["Ukraine", "UA"],
  ["United Arab Emirates", "AE"],
  ["United Kingdom", "GB"],
  ["United States", "US"],
  ["United States Minor Outlying Islands", "UM"],
  ["Uruguay", "UY"],
  ["Uzbekistan", "UZ"],
  ["Vanuatu", "VU"],
  ["Venezuela", "VE"],
  ["Viet Nam", "VN"],
  ["Virgin Islands, British", "VG"],
  ["Virgin Islands, U.S.", "VI"],
  ["Wallis and Futuna", "WF"],
  ["Western Sahara", "EH"],
  ["Yemen", "YE"],
  ["Zambia", "ZM"],
  ["Zimbabwe", "ZW"],
]);

export const countryToEmojiData = new Map(
  Object.entries({
    AC: {
      name: "Ascension Island",
      emoji: "🇦🇨",
      unicode: "U+1F1E6 U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AC.svg",
    },
    AD: {
      name: "Andorra",
      emoji: "🇦🇩",
      unicode: "U+1F1E6 U+1F1E9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg",
    },
    AE: {
      name: "United Arab Emirates",
      emoji: "🇦🇪",
      unicode: "U+1F1E6 U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg",
    },
    AF: {
      name: "Afghanistan",
      emoji: "🇦🇫",
      unicode: "U+1F1E6 U+1F1EB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg",
    },
    AG: {
      name: "Antigua & Barbuda",
      emoji: "🇦🇬",
      unicode: "U+1F1E6 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg",
    },
    AI: {
      name: "Anguilla",
      emoji: "🇦🇮",
      unicode: "U+1F1E6 U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg",
    },
    AL: {
      name: "Albania",
      emoji: "🇦🇱",
      unicode: "U+1F1E6 U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg",
    },
    AM: {
      name: "Armenia",
      emoji: "🇦🇲",
      unicode: "U+1F1E6 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg",
    },
    AO: {
      name: "Angola",
      emoji: "🇦🇴",
      unicode: "U+1F1E6 U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg",
    },
    AQ: {
      name: "Antarctica",
      emoji: "🇦🇶",
      unicode: "U+1F1E6 U+1F1F6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AQ.svg",
    },
    AR: {
      name: "Argentina",
      emoji: "🇦🇷",
      unicode: "U+1F1E6 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg",
    },
    AS: {
      name: "American Samoa",
      emoji: "🇦🇸",
      unicode: "U+1F1E6 U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AS.svg",
    },
    AT: {
      name: "Austria",
      emoji: "🇦🇹",
      unicode: "U+1F1E6 U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg",
    },
    AU: {
      name: "Australia",
      emoji: "🇦🇺",
      unicode: "U+1F1E6 U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg",
    },
    AW: {
      name: "Aruba",
      emoji: "🇦🇼",
      unicode: "U+1F1E6 U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AW.svg",
    },
    AX: {
      name: "Åland Islands",
      emoji: "🇦🇽",
      unicode: "U+1F1E6 U+1F1FD",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AX.svg",
    },
    AZ: {
      name: "Azerbaijan",
      emoji: "🇦🇿",
      unicode: "U+1F1E6 U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg",
    },
    BA: {
      name: "Bosnia & Herzegovina",
      emoji: "🇧🇦",
      unicode: "U+1F1E7 U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BA.svg",
    },
    BB: {
      name: "Barbados",
      emoji: "🇧🇧",
      unicode: "U+1F1E7 U+1F1E7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BB.svg",
    },
    BD: {
      name: "Bangladesh",
      emoji: "🇧🇩",
      unicode: "U+1F1E7 U+1F1E9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg",
    },
    BE: {
      name: "Belgium",
      emoji: "🇧🇪",
      unicode: "U+1F1E7 U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg",
    },
    BF: {
      name: "Burkina Faso",
      emoji: "🇧🇫",
      unicode: "U+1F1E7 U+1F1EB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BF.svg",
    },
    BG: {
      name: "Bulgaria",
      emoji: "🇧🇬",
      unicode: "U+1F1E7 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg",
    },
    BH: {
      name: "Bahrain",
      emoji: "🇧🇭",
      unicode: "U+1F1E7 U+1F1ED",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BH.svg",
    },
    BI: {
      name: "Burundi",
      emoji: "🇧🇮",
      unicode: "U+1F1E7 U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BI.svg",
    },
    BJ: {
      name: "Benin",
      emoji: "🇧🇯",
      unicode: "U+1F1E7 U+1F1EF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BJ.svg",
    },
    BL: {
      name: "St. Barthélemy",
      emoji: "🇧🇱",
      unicode: "U+1F1E7 U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BL.svg",
    },
    BM: {
      name: "Bermuda",
      emoji: "🇧🇲",
      unicode: "U+1F1E7 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BM.svg",
    },
    BN: {
      name: "Brunei",
      emoji: "🇧🇳",
      unicode: "U+1F1E7 U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BN.svg",
    },
    BO: {
      name: "Bolivia",
      emoji: "🇧🇴",
      unicode: "U+1F1E7 U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BO.svg",
    },
    BQ: {
      name: "Caribbean Netherlands",
      emoji: "🇧🇶",
      unicode: "U+1F1E7 U+1F1F6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BQ.svg",
    },
    BR: {
      name: "Brazil",
      emoji: "🇧🇷",
      unicode: "U+1F1E7 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg",
    },
    BS: {
      name: "Bahamas",
      emoji: "🇧🇸",
      unicode: "U+1F1E7 U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BS.svg",
    },
    BT: {
      name: "Bhutan",
      emoji: "🇧🇹",
      unicode: "U+1F1E7 U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BT.svg",
    },
    BV: {
      name: "Bouvet Island",
      emoji: "🇧🇻",
      unicode: "U+1F1E7 U+1F1FB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BV.svg",
    },
    BW: {
      name: "Botswana",
      emoji: "🇧🇼",
      unicode: "U+1F1E7 U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BW.svg",
    },
    BY: {
      name: "Belarus",
      emoji: "🇧🇾",
      unicode: "U+1F1E7 U+1F1FE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg",
    },
    BZ: {
      name: "Belize",
      emoji: "🇧🇿",
      unicode: "U+1F1E7 U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BZ.svg",
    },
    CA: {
      name: "Canada",
      emoji: "🇨🇦",
      unicode: "U+1F1E8 U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg",
    },
    CC: {
      name: "Cocos (Keeling) Islands",
      emoji: "🇨🇨",
      unicode: "U+1F1E8 U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CC.svg",
    },
    CD: {
      name: "Congo - Kinshasa",
      emoji: "🇨🇩",
      unicode: "U+1F1E8 U+1F1E9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CD.svg",
    },
    CF: {
      name: "Central African Republic",
      emoji: "🇨🇫",
      unicode: "U+1F1E8 U+1F1EB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CF.svg",
    },
    CG: {
      name: "Congo - Brazzaville",
      emoji: "🇨🇬",
      unicode: "U+1F1E8 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CG.svg",
    },
    CH: {
      name: "Switzerland",
      emoji: "🇨🇭",
      unicode: "U+1F1E8 U+1F1ED",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg",
    },
    CI: {
      name: "Côte d’Ivoire",
      emoji: "🇨🇮",
      unicode: "U+1F1E8 U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CI.svg",
    },
    CK: {
      name: "Cook Islands",
      emoji: "🇨🇰",
      unicode: "U+1F1E8 U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CK.svg",
    },
    CL: {
      name: "Chile",
      emoji: "🇨🇱",
      unicode: "U+1F1E8 U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CL.svg",
    },
    CM: {
      name: "Cameroon",
      emoji: "🇨🇲",
      unicode: "U+1F1E8 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CM.svg",
    },
    CN: {
      name: "China",
      emoji: "🇨🇳",
      unicode: "U+1F1E8 U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg",
    },
    CO: {
      name: "Colombia",
      emoji: "🇨🇴",
      unicode: "U+1F1E8 U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CO.svg",
    },
    CP: {
      name: "Clipperton Island",
      emoji: "🇨🇵",
      unicode: "U+1F1E8 U+1F1F5",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CP.svg",
    },
    CR: {
      name: "Costa Rica",
      emoji: "🇨🇷",
      unicode: "U+1F1E8 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CR.svg",
    },
    CU: {
      name: "Cuba",
      emoji: "🇨🇺",
      unicode: "U+1F1E8 U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CU.svg",
    },
    CV: {
      name: "Cape Verde",
      emoji: "🇨🇻",
      unicode: "U+1F1E8 U+1F1FB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CV.svg",
    },
    CW: {
      name: "Curaçao",
      emoji: "🇨🇼",
      unicode: "U+1F1E8 U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CW.svg",
    },
    CX: {
      name: "Christmas Island",
      emoji: "🇨🇽",
      unicode: "U+1F1E8 U+1F1FD",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CX.svg",
    },
    CY: {
      name: "Cyprus",
      emoji: "🇨🇾",
      unicode: "U+1F1E8 U+1F1FE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg",
    },
    CZ: {
      name: "Czechia",
      emoji: "🇨🇿",
      unicode: "U+1F1E8 U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CZ.svg",
    },
    DE: {
      name: "Germany",
      emoji: "🇩🇪",
      unicode: "U+1F1E9 U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg",
    },
    DG: {
      name: "Diego Garcia",
      emoji: "🇩🇬",
      unicode: "U+1F1E9 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DG.svg",
    },
    DJ: {
      name: "Djibouti",
      emoji: "🇩🇯",
      unicode: "U+1F1E9 U+1F1EF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DJ.svg",
    },
    DK: {
      name: "Denmark",
      emoji: "🇩🇰",
      unicode: "U+1F1E9 U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg",
    },
    DM: {
      name: "Dominica",
      emoji: "🇩🇲",
      unicode: "U+1F1E9 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DM.svg",
    },
    DO: {
      name: "Dominican Republic",
      emoji: "🇩🇴",
      unicode: "U+1F1E9 U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DO.svg",
    },
    DZ: {
      name: "Algeria",
      emoji: "🇩🇿",
      unicode: "U+1F1E9 U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DZ.svg",
    },
    EA: {
      name: "Ceuta & Melilla",
      emoji: "🇪🇦",
      unicode: "U+1F1EA U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EA.svg",
    },
    EC: {
      name: "Ecuador",
      emoji: "🇪🇨",
      unicode: "U+1F1EA U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EC.svg",
    },
    EE: {
      name: "Estonia",
      emoji: "🇪🇪",
      unicode: "U+1F1EA U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg",
    },
    EG: {
      name: "Egypt",
      emoji: "🇪🇬",
      unicode: "U+1F1EA U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg",
    },
    EH: {
      name: "Western Sahara",
      emoji: "🇪🇭",
      unicode: "U+1F1EA U+1F1ED",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EH.svg",
    },
    ER: {
      name: "Eritrea",
      emoji: "🇪🇷",
      unicode: "U+1F1EA U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ER.svg",
    },
    ES: {
      name: "Spain",
      emoji: "🇪🇸",
      unicode: "U+1F1EA U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg",
    },
    ET: {
      name: "Ethiopia",
      emoji: "🇪🇹",
      unicode: "U+1F1EA U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg",
    },
    EU: {
      name: "European Union",
      emoji: "🇪🇺",
      unicode: "U+1F1EA U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EU.svg",
    },
    FI: {
      name: "Finland",
      emoji: "🇫🇮",
      unicode: "U+1F1EB U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg",
    },
    FJ: {
      name: "Fiji",
      emoji: "🇫🇯",
      unicode: "U+1F1EB U+1F1EF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FJ.svg",
    },
    FK: {
      name: "Falkland Islands",
      emoji: "🇫🇰",
      unicode: "U+1F1EB U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FK.svg",
    },
    FM: {
      name: "Micronesia",
      emoji: "🇫🇲",
      unicode: "U+1F1EB U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FM.svg",
    },
    FO: {
      name: "Faroe Islands",
      emoji: "🇫🇴",
      unicode: "U+1F1EB U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FO.svg",
    },
    FR: {
      name: "France",
      emoji: "🇫🇷",
      unicode: "U+1F1EB U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg",
    },
    GA: {
      name: "Gabon",
      emoji: "🇬🇦",
      unicode: "U+1F1EC U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GA.svg",
    },
    GB: {
      name: "United Kingdom",
      emoji: "🇬🇧",
      unicode: "U+1F1EC U+1F1E7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg",
    },
    GD: {
      name: "Grenada",
      emoji: "🇬🇩",
      unicode: "U+1F1EC U+1F1E9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GD.svg",
    },
    GE: {
      name: "Georgia",
      emoji: "🇬🇪",
      unicode: "U+1F1EC U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg",
    },
    GF: {
      name: "French Guiana",
      emoji: "🇬🇫",
      unicode: "U+1F1EC U+1F1EB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GF.svg",
    },
    GG: {
      name: "Guernsey",
      emoji: "🇬🇬",
      unicode: "U+1F1EC U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GG.svg",
    },
    GH: {
      name: "Ghana",
      emoji: "🇬🇭",
      unicode: "U+1F1EC U+1F1ED",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GH.svg",
    },
    GI: {
      name: "Gibraltar",
      emoji: "🇬🇮",
      unicode: "U+1F1EC U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GI.svg",
    },
    GL: {
      name: "Greenland",
      emoji: "🇬🇱",
      unicode: "U+1F1EC U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GL.svg",
    },
    GM: {
      name: "Gambia",
      emoji: "🇬🇲",
      unicode: "U+1F1EC U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GM.svg",
    },
    GN: {
      name: "Guinea",
      emoji: "🇬🇳",
      unicode: "U+1F1EC U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GN.svg",
    },
    GP: {
      name: "Guadeloupe",
      emoji: "🇬🇵",
      unicode: "U+1F1EC U+1F1F5",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GP.svg",
    },
    GQ: {
      name: "Equatorial Guinea",
      emoji: "🇬🇶",
      unicode: "U+1F1EC U+1F1F6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GQ.svg",
    },
    GR: {
      name: "Greece",
      emoji: "🇬🇷",
      unicode: "U+1F1EC U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg",
    },
    GS: {
      name: "South Georgia & South Sandwich Islands",
      emoji: "🇬🇸",
      unicode: "U+1F1EC U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GS.svg",
    },
    GT: {
      name: "Guatemala",
      emoji: "🇬🇹",
      unicode: "U+1F1EC U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GT.svg",
    },
    GU: {
      name: "Guam",
      emoji: "🇬🇺",
      unicode: "U+1F1EC U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GU.svg",
    },
    GW: {
      name: "Guinea-Bissau",
      emoji: "🇬🇼",
      unicode: "U+1F1EC U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GW.svg",
    },
    GY: {
      name: "Guyana",
      emoji: "🇬🇾",
      unicode: "U+1F1EC U+1F1FE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GY.svg",
    },
    HK: {
      name: "Hong Kong SAR China",
      emoji: "🇭🇰",
      unicode: "U+1F1ED U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HK.svg",
    },
    HM: {
      name: "Heard & McDonald Islands",
      emoji: "🇭🇲",
      unicode: "U+1F1ED U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HM.svg",
    },
    HN: {
      name: "Honduras",
      emoji: "🇭🇳",
      unicode: "U+1F1ED U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HN.svg",
    },
    HR: {
      name: "Croatia",
      emoji: "🇭🇷",
      unicode: "U+1F1ED U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg",
    },
    HT: {
      name: "Haiti",
      emoji: "🇭🇹",
      unicode: "U+1F1ED U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HT.svg",
    },
    HU: {
      name: "Hungary",
      emoji: "🇭🇺",
      unicode: "U+1F1ED U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg",
    },
    IC: {
      name: "Canary Islands",
      emoji: "🇮🇨",
      unicode: "U+1F1EE U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IC.svg",
    },
    ID: {
      name: "Indonesia",
      emoji: "🇮🇩",
      unicode: "U+1F1EE U+1F1E9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg",
    },
    IE: {
      name: "Ireland",
      emoji: "🇮🇪",
      unicode: "U+1F1EE U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg",
    },
    IL: {
      name: "Israel",
      emoji: "🇮🇱",
      unicode: "U+1F1EE U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg",
    },
    IM: {
      name: "Isle of Man",
      emoji: "🇮🇲",
      unicode: "U+1F1EE U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IM.svg",
    },
    IN: {
      name: "India",
      emoji: "🇮🇳",
      unicode: "U+1F1EE U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
    },
    IO: {
      name: "British Indian Ocean Territory",
      emoji: "🇮🇴",
      unicode: "U+1F1EE U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IO.svg",
    },
    IQ: {
      name: "Iraq",
      emoji: "🇮🇶",
      unicode: "U+1F1EE U+1F1F6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg",
    },
    IR: {
      name: "Iran",
      emoji: "🇮🇷",
      unicode: "U+1F1EE U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg",
    },
    IS: {
      name: "Iceland",
      emoji: "🇮🇸",
      unicode: "U+1F1EE U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg",
    },
    IT: {
      name: "Italy",
      emoji: "🇮🇹",
      unicode: "U+1F1EE U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg",
    },
    JE: {
      name: "Jersey",
      emoji: "🇯🇪",
      unicode: "U+1F1EF U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JE.svg",
    },
    JM: {
      name: "Jamaica",
      emoji: "🇯🇲",
      unicode: "U+1F1EF U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg",
    },
    JO: {
      name: "Jordan",
      emoji: "🇯🇴",
      unicode: "U+1F1EF U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JO.svg",
    },
    JP: {
      name: "Japan",
      emoji: "🇯🇵",
      unicode: "U+1F1EF U+1F1F5",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg",
    },
    KE: {
      name: "Kenya",
      emoji: "🇰🇪",
      unicode: "U+1F1F0 U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg",
    },
    KG: {
      name: "Kyrgyzstan",
      emoji: "🇰🇬",
      unicode: "U+1F1F0 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KG.svg",
    },
    KH: {
      name: "Cambodia",
      emoji: "🇰🇭",
      unicode: "U+1F1F0 U+1F1ED",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg",
    },
    KI: {
      name: "Kiribati",
      emoji: "🇰🇮",
      unicode: "U+1F1F0 U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KI.svg",
    },
    KM: {
      name: "Comoros",
      emoji: "🇰🇲",
      unicode: "U+1F1F0 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KM.svg",
    },
    KN: {
      name: "St. Kitts & Nevis",
      emoji: "🇰🇳",
      unicode: "U+1F1F0 U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KN.svg",
    },
    KP: {
      name: "North Korea",
      emoji: "🇰🇵",
      unicode: "U+1F1F0 U+1F1F5",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KP.svg",
    },
    KR: {
      name: "South Korea",
      emoji: "🇰🇷",
      unicode: "U+1F1F0 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg",
    },
    KW: {
      name: "Kuwait",
      emoji: "🇰🇼",
      unicode: "U+1F1F0 U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KW.svg",
    },
    KY: {
      name: "Cayman Islands",
      emoji: "🇰🇾",
      unicode: "U+1F1F0 U+1F1FE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KY.svg",
    },
    KZ: {
      name: "Kazakhstan",
      emoji: "🇰🇿",
      unicode: "U+1F1F0 U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg",
    },
    LA: {
      name: "Laos",
      emoji: "🇱🇦",
      unicode: "U+1F1F1 U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg",
    },
    LB: {
      name: "Lebanon",
      emoji: "🇱🇧",
      unicode: "U+1F1F1 U+1F1E7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LB.svg",
    },
    LC: {
      name: "St. Lucia",
      emoji: "🇱🇨",
      unicode: "U+1F1F1 U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LC.svg",
    },
    LI: {
      name: "Liechtenstein",
      emoji: "🇱🇮",
      unicode: "U+1F1F1 U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg",
    },
    LK: {
      name: "Sri Lanka",
      emoji: "🇱🇰",
      unicode: "U+1F1F1 U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg",
    },
    LR: {
      name: "Liberia",
      emoji: "🇱🇷",
      unicode: "U+1F1F1 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LR.svg",
    },
    LS: {
      name: "Lesotho",
      emoji: "🇱🇸",
      unicode: "U+1F1F1 U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LS.svg",
    },
    LT: {
      name: "Lithuania",
      emoji: "🇱🇹",
      unicode: "U+1F1F1 U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg",
    },
    LU: {
      name: "Luxembourg",
      emoji: "🇱🇺",
      unicode: "U+1F1F1 U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg",
    },
    LV: {
      name: "Latvia",
      emoji: "🇱🇻",
      unicode: "U+1F1F1 U+1F1FB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg",
    },
    LY: {
      name: "Libya",
      emoji: "🇱🇾",
      unicode: "U+1F1F1 U+1F1FE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LY.svg",
    },
    MA: {
      name: "Morocco",
      emoji: "🇲🇦",
      unicode: "U+1F1F2 U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg",
    },
    MC: {
      name: "Monaco",
      emoji: "🇲🇨",
      unicode: "U+1F1F2 U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MC.svg",
    },
    MD: {
      name: "Moldova",
      emoji: "🇲🇩",
      unicode: "U+1F1F2 U+1F1E9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MD.svg",
    },
    ME: {
      name: "Montenegro",
      emoji: "🇲🇪",
      unicode: "U+1F1F2 U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ME.svg",
    },
    MF: {
      name: "St. Martin",
      emoji: "🇲🇫",
      unicode: "U+1F1F2 U+1F1EB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MF.svg",
    },
    MG: {
      name: "Madagascar",
      emoji: "🇲🇬",
      unicode: "U+1F1F2 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MG.svg",
    },
    MH: {
      name: "Marshall Islands",
      emoji: "🇲🇭",
      unicode: "U+1F1F2 U+1F1ED",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MH.svg",
    },
    MK: {
      name: "North Macedonia",
      emoji: "🇲🇰",
      unicode: "U+1F1F2 U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MK.svg",
    },
    ML: {
      name: "Mali",
      emoji: "🇲🇱",
      unicode: "U+1F1F2 U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ML.svg",
    },
    MM: {
      name: "Myanmar (Burma)",
      emoji: "🇲🇲",
      unicode: "U+1F1F2 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MM.svg",
    },
    MN: {
      name: "Mongolia",
      emoji: "🇲🇳",
      unicode: "U+1F1F2 U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MN.svg",
    },
    MO: {
      name: "Macao SAR China",
      emoji: "🇲🇴",
      unicode: "U+1F1F2 U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MO.svg",
    },
    MP: {
      name: "Northern Mariana Islands",
      emoji: "🇲🇵",
      unicode: "U+1F1F2 U+1F1F5",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MP.svg",
    },
    MQ: {
      name: "Martinique",
      emoji: "🇲🇶",
      unicode: "U+1F1F2 U+1F1F6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MQ.svg",
    },
    MR: {
      name: "Mauritania",
      emoji: "🇲🇷",
      unicode: "U+1F1F2 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MR.svg",
    },
    MS: {
      name: "Montserrat",
      emoji: "🇲🇸",
      unicode: "U+1F1F2 U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MS.svg",
    },
    MT: {
      name: "Malta",
      emoji: "🇲🇹",
      unicode: "U+1F1F2 U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg",
    },
    MU: {
      name: "Mauritius",
      emoji: "🇲🇺",
      unicode: "U+1F1F2 U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MU.svg",
    },
    MV: {
      name: "Maldives",
      emoji: "🇲🇻",
      unicode: "U+1F1F2 U+1F1FB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MV.svg",
    },
    MW: {
      name: "Malawi",
      emoji: "🇲🇼",
      unicode: "U+1F1F2 U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MW.svg",
    },
    MX: {
      name: "Mexico",
      emoji: "🇲🇽",
      unicode: "U+1F1F2 U+1F1FD",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg",
    },
    MY: {
      name: "Malaysia",
      emoji: "🇲🇾",
      unicode: "U+1F1F2 U+1F1FE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MY.svg",
    },
    MZ: {
      name: "Mozambique",
      emoji: "🇲🇿",
      unicode: "U+1F1F2 U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MZ.svg",
    },
    NA: {
      name: "Namibia",
      emoji: "🇳🇦",
      unicode: "U+1F1F3 U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NA.svg",
    },
    NC: {
      name: "New Caledonia",
      emoji: "🇳🇨",
      unicode: "U+1F1F3 U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NC.svg",
    },
    NE: {
      name: "Niger",
      emoji: "🇳🇪",
      unicode: "U+1F1F3 U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NE.svg",
    },
    NF: {
      name: "Norfolk Island",
      emoji: "🇳🇫",
      unicode: "U+1F1F3 U+1F1EB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NF.svg",
    },
    NG: {
      name: "Nigeria",
      emoji: "🇳🇬",
      unicode: "U+1F1F3 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg",
    },
    NI: {
      name: "Nicaragua",
      emoji: "🇳🇮",
      unicode: "U+1F1F3 U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NI.svg",
    },
    NL: {
      name: "Netherlands",
      emoji: "🇳🇱",
      unicode: "U+1F1F3 U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg",
    },
    NO: {
      name: "Norway",
      emoji: "🇳🇴",
      unicode: "U+1F1F3 U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg",
    },
    NP: {
      name: "Nepal",
      emoji: "🇳🇵",
      unicode: "U+1F1F3 U+1F1F5",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg",
    },
    NR: {
      name: "Nauru",
      emoji: "🇳🇷",
      unicode: "U+1F1F3 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NR.svg",
    },
    NU: {
      name: "Niue",
      emoji: "🇳🇺",
      unicode: "U+1F1F3 U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NU.svg",
    },
    NZ: {
      name: "New Zealand",
      emoji: "🇳🇿",
      unicode: "U+1F1F3 U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg",
    },
    OM: {
      name: "Oman",
      emoji: "🇴🇲",
      unicode: "U+1F1F4 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/OM.svg",
    },
    PA: {
      name: "Panama",
      emoji: "🇵🇦",
      unicode: "U+1F1F5 U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PA.svg",
    },
    PE: {
      name: "Peru",
      emoji: "🇵🇪",
      unicode: "U+1F1F5 U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PE.svg",
    },
    PF: {
      name: "French Polynesia",
      emoji: "🇵🇫",
      unicode: "U+1F1F5 U+1F1EB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PF.svg",
    },
    PG: {
      name: "Papua New Guinea",
      emoji: "🇵🇬",
      unicode: "U+1F1F5 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PG.svg",
    },
    PH: {
      name: "Philippines",
      emoji: "🇵🇭",
      unicode: "U+1F1F5 U+1F1ED",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg",
    },
    PK: {
      name: "Pakistan",
      emoji: "🇵🇰",
      unicode: "U+1F1F5 U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg",
    },
    PL: {
      name: "Poland",
      emoji: "🇵🇱",
      unicode: "U+1F1F5 U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg",
    },
    PM: {
      name: "St. Pierre & Miquelon",
      emoji: "🇵🇲",
      unicode: "U+1F1F5 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PM.svg",
    },
    PN: {
      name: "Pitcairn Islands",
      emoji: "🇵🇳",
      unicode: "U+1F1F5 U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PN.svg",
    },
    PR: {
      name: "Puerto Rico",
      emoji: "🇵🇷",
      unicode: "U+1F1F5 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PR.svg",
    },
    PS: {
      name: "Palestinian Territories",
      emoji: "🇵🇸",
      unicode: "U+1F1F5 U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PS.svg",
    },
    PT: {
      name: "Portugal",
      emoji: "🇵🇹",
      unicode: "U+1F1F5 U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg",
    },
    PW: {
      name: "Palau",
      emoji: "🇵🇼",
      unicode: "U+1F1F5 U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PW.svg",
    },
    PY: {
      name: "Paraguay",
      emoji: "🇵🇾",
      unicode: "U+1F1F5 U+1F1FE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PY.svg",
    },
    QA: {
      name: "Qatar",
      emoji: "🇶🇦",
      unicode: "U+1F1F6 U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg",
    },
    RE: {
      name: "Réunion",
      emoji: "🇷🇪",
      unicode: "U+1F1F7 U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RE.svg",
    },
    RO: {
      name: "Romania",
      emoji: "🇷🇴",
      unicode: "U+1F1F7 U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg",
    },
    RS: {
      name: "Serbia",
      emoji: "🇷🇸",
      unicode: "U+1F1F7 U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg",
    },
    RU: {
      name: "Russia",
      emoji: "🇷🇺",
      unicode: "U+1F1F7 U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg",
    },
    RW: {
      name: "Rwanda",
      emoji: "🇷🇼",
      unicode: "U+1F1F7 U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg",
    },
    SA: {
      name: "Saudi Arabia",
      emoji: "🇸🇦",
      unicode: "U+1F1F8 U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg",
    },
    SB: {
      name: "Solomon Islands",
      emoji: "🇸🇧",
      unicode: "U+1F1F8 U+1F1E7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SB.svg",
    },
    SC: {
      name: "Seychelles",
      emoji: "🇸🇨",
      unicode: "U+1F1F8 U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SC.svg",
    },
    SD: {
      name: "Sudan",
      emoji: "🇸🇩",
      unicode: "U+1F1F8 U+1F1E9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SD.svg",
    },
    SE: {
      name: "Sweden",
      emoji: "🇸🇪",
      unicode: "U+1F1F8 U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg",
    },
    SG: {
      name: "Singapore",
      emoji: "🇸🇬",
      unicode: "U+1F1F8 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SG.svg",
    },
    SH: {
      name: "St. Helena",
      emoji: "🇸🇭",
      unicode: "U+1F1F8 U+1F1ED",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SH.svg",
    },
    SI: {
      name: "Slovenia",
      emoji: "🇸🇮",
      unicode: "U+1F1F8 U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg",
    },
    SJ: {
      name: "Svalbard & Jan Mayen",
      emoji: "🇸🇯",
      unicode: "U+1F1F8 U+1F1EF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SJ.svg",
    },
    SK: {
      name: "Slovakia",
      emoji: "🇸🇰",
      unicode: "U+1F1F8 U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg",
    },
    SL: {
      name: "Sierra Leone",
      emoji: "🇸🇱",
      unicode: "U+1F1F8 U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SL.svg",
    },
    SM: {
      name: "San Marino",
      emoji: "🇸🇲",
      unicode: "U+1F1F8 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SM.svg",
    },
    SN: {
      name: "Senegal",
      emoji: "🇸🇳",
      unicode: "U+1F1F8 U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SN.svg",
    },
    SO: {
      name: "Somalia",
      emoji: "🇸🇴",
      unicode: "U+1F1F8 U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SO.svg",
    },
    SR: {
      name: "Suriname",
      emoji: "🇸🇷",
      unicode: "U+1F1F8 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SR.svg",
    },
    SS: {
      name: "South Sudan",
      emoji: "🇸🇸",
      unicode: "U+1F1F8 U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SS.svg",
    },
    ST: {
      name: "São Tomé & Príncipe",
      emoji: "🇸🇹",
      unicode: "U+1F1F8 U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ST.svg",
    },
    SV: {
      name: "El Salvador",
      emoji: "🇸🇻",
      unicode: "U+1F1F8 U+1F1FB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SV.svg",
    },
    SX: {
      name: "Sint Maarten",
      emoji: "🇸🇽",
      unicode: "U+1F1F8 U+1F1FD",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SX.svg",
    },
    SY: {
      name: "Syria",
      emoji: "🇸🇾",
      unicode: "U+1F1F8 U+1F1FE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SY.svg",
    },
    SZ: {
      name: "Eswatini",
      emoji: "🇸🇿",
      unicode: "U+1F1F8 U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SZ.svg",
    },
    TA: {
      name: "Tristan da Cunha",
      emoji: "🇹🇦",
      unicode: "U+1F1F9 U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TA.svg",
    },
    TC: {
      name: "Turks & Caicos Islands",
      emoji: "🇹🇨",
      unicode: "U+1F1F9 U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TC.svg",
    },
    TD: {
      name: "Chad",
      emoji: "🇹🇩",
      unicode: "U+1F1F9 U+1F1E9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TD.svg",
    },
    TF: {
      name: "French Southern Territories",
      emoji: "🇹🇫",
      unicode: "U+1F1F9 U+1F1EB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TF.svg",
    },
    TG: {
      name: "Togo",
      emoji: "🇹🇬",
      unicode: "U+1F1F9 U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TG.svg",
    },
    TH: {
      name: "Thailand",
      emoji: "🇹🇭",
      unicode: "U+1F1F9 U+1F1ED",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg",
    },
    TJ: {
      name: "Tajikistan",
      emoji: "🇹🇯",
      unicode: "U+1F1F9 U+1F1EF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TJ.svg",
    },
    TK: {
      name: "Tokelau",
      emoji: "🇹🇰",
      unicode: "U+1F1F9 U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TK.svg",
    },
    TL: {
      name: "Timor-Leste",
      emoji: "🇹🇱",
      unicode: "U+1F1F9 U+1F1F1",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TL.svg",
    },
    TM: {
      name: "Turkmenistan",
      emoji: "🇹🇲",
      unicode: "U+1F1F9 U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TM.svg",
    },
    TN: {
      name: "Tunisia",
      emoji: "🇹🇳",
      unicode: "U+1F1F9 U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg",
    },
    TO: {
      name: "Tonga",
      emoji: "🇹🇴",
      unicode: "U+1F1F9 U+1F1F4",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TO.svg",
    },
    TR: {
      name: "Turkey",
      emoji: "🇹🇷",
      unicode: "U+1F1F9 U+1F1F7",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg",
    },
    TT: {
      name: "Trinidad & Tobago",
      emoji: "🇹🇹",
      unicode: "U+1F1F9 U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TT.svg",
    },
    TV: {
      name: "Tuvalu",
      emoji: "🇹🇻",
      unicode: "U+1F1F9 U+1F1FB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TV.svg",
    },
    TW: {
      name: "Taiwan",
      emoji: "🇹🇼",
      unicode: "U+1F1F9 U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TW.svg",
    },
    TZ: {
      name: "Tanzania",
      emoji: "🇹🇿",
      unicode: "U+1F1F9 U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TZ.svg",
    },
    UA: {
      name: "Ukraine",
      emoji: "🇺🇦",
      unicode: "U+1F1FA U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg",
    },
    UG: {
      name: "Uganda",
      emoji: "🇺🇬",
      unicode: "U+1F1FA U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UG.svg",
    },
    UM: {
      name: "U.S. Outlying Islands",
      emoji: "🇺🇲",
      unicode: "U+1F1FA U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UM.svg",
    },
    UN: {
      name: "United Nations",
      emoji: "🇺🇳",
      unicode: "U+1F1FA U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UN.svg",
    },
    US: {
      name: "United States",
      emoji: "🇺🇸",
      unicode: "U+1F1FA U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg",
    },
    UY: {
      name: "Uruguay",
      emoji: "🇺🇾",
      unicode: "U+1F1FA U+1F1FE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UY.svg",
    },
    UZ: {
      name: "Uzbekistan",
      emoji: "🇺🇿",
      unicode: "U+1F1FA U+1F1FF",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg",
    },
    VA: {
      name: "Vatican City",
      emoji: "🇻🇦",
      unicode: "U+1F1FB U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VA.svg",
    },
    VC: {
      name: "St. Vincent & Grenadines",
      emoji: "🇻🇨",
      unicode: "U+1F1FB U+1F1E8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VC.svg",
    },
    VE: {
      name: "Venezuela",
      emoji: "🇻🇪",
      unicode: "U+1F1FB U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VE.svg",
    },
    VG: {
      name: "British Virgin Islands",
      emoji: "🇻🇬",
      unicode: "U+1F1FB U+1F1EC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VG.svg",
    },
    VI: {
      name: "U.S. Virgin Islands",
      emoji: "🇻🇮",
      unicode: "U+1F1FB U+1F1EE",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VI.svg",
    },
    VN: {
      name: "Vietnam",
      emoji: "🇻🇳",
      unicode: "U+1F1FB U+1F1F3",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg",
    },
    VU: {
      name: "Vanuatu",
      emoji: "🇻🇺",
      unicode: "U+1F1FB U+1F1FA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VU.svg",
    },
    WF: {
      name: "Wallis & Futuna",
      emoji: "🇼🇫",
      unicode: "U+1F1FC U+1F1EB",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WF.svg",
    },
    WS: {
      name: "Samoa",
      emoji: "🇼🇸",
      unicode: "U+1F1FC U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WS.svg",
    },
    XK: {
      name: "Kosovo",
      emoji: "🇽🇰",
      unicode: "U+1F1FD U+1F1F0",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/XK.svg",
    },
    YE: {
      name: "Yemen",
      emoji: "🇾🇪",
      unicode: "U+1F1FE U+1F1EA",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YE.svg",
    },
    YT: {
      name: "Mayotte",
      emoji: "🇾🇹",
      unicode: "U+1F1FE U+1F1F9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YT.svg",
    },
    ZA: {
      name: "South Africa",
      emoji: "🇿🇦",
      unicode: "U+1F1FF U+1F1E6",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg",
    },
    ZM: {
      name: "Zambia",
      emoji: "🇿🇲",
      unicode: "U+1F1FF U+1F1F2",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZM.svg",
    },
    ZW: {
      name: "Zimbabwe",
      emoji: "🇿🇼",
      unicode: "U+1F1FF U+1F1FC",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZW.svg",
    },
    ENGLAND: {
      name: "England",
      emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      unicode: "U+1F3F4 U+E0067 U+E0062 U+E0065 U+E006E U+E0067 U+E007F",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ENGLAND.svg",
    },
    SCOTLAND: {
      name: "Scotland",
      emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
      unicode: "U+1F3F4 U+E0067 U+E0062 U+E0073 U+E0063 U+E0074 U+E007F",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SCOTLAND.svg",
    },
    WALES: {
      name: "Wales",
      emoji: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
      unicode: "U+1F3F4 U+E0067 U+E0062 U+E0077 U+E006C U+E0073 U+E007F",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WALES.svg",
    },
  })
);
