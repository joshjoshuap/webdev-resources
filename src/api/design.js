import { colorsIcon, typographyIcon } from "../assets/js/icons";

let designResourcesList = [
  {
    title: "Colors",
    icon: colorsIcon,
    item: [
      {
        text: "Adobe Color",
        link: "https://color.adobe.com/create/color-wheel",
      },
      { text: "Color Hunt", link: "https://colorhunt.co/" },
      { text: "Coolors", link: "https://coolors.co/" },
      { text: "UI Gradients", link: "https://uigradients.com/" },
      {
        text: "Hypercolor Gradient",
        link: "https://hypercolor.dev/#gradients",
      },
    ],
  },
  {
    title: "Typography",
    icon: typographyIcon,
    item: [
      { text: "Google Font", link: "https://fonts.google.com/" },
      { text: "Font Squirrel", link: "https://fonts.google.com/" },
      { text: "Font Joy", link: "https://fontjoy.com/" },
      { text: "Type Scale", link: "https://type-scale.com/" },
    ],
  },
];

export { designResourcesList };
