import {
  apiIcon,
  compilerIcon,
  codetoolsIcon,
  cssIcon,
} from "../assets/js/icons";

let toolsResourcesList = [
  {
    title: "API",
    icon: apiIcon,
    item: [
      {
        text: "Free Public API",
        link: "https://github.com/public-apis/public-apis",
      },
      { text: "Unsplash API", link: "https://unsplash.com/developers" },
      {
        text: "Random Data",
        link: "https://random-data-api.com/documentation",
      },
    ],
  },

  {
    title: "Online Compiler",
    icon: compilerIcon,
    item: [
      { text: "Codepen", link: "https://codepen.io/pen/" },
      { text: "Tio", link: "https://tio.run/" },
    ],
  },
  {
    title: "CSS Helpers",
    icon: cssIcon,
    item: [
      { text: "CSS clip-path Maker", link: "https://bennettfeely.com/clippy/" },
      { text: "CSS Generator", link: "https://webcode.tools/generators/css" },
      { text: "CSS Pie Chart", link: "https://bennettfeely.com/csspiechart/" },
      { text: "Smooth Shadow", link: "https://shadows.brumm.af/" },
      { text: "Grid Layout Generator", link: "https://grid.layoutit.com/" },
    ],
  },
  {
    title: "Productive",
    icon: codetoolsIcon,
    item: [
      {
        text: "Gitignore",
        link: "https://www.toptal.com/developers/gitignore",
      },
      { text: "Readme", link: "https://readme.so/editor" },
      { text: "Meta Tags", link: "https://metatags.io/" },
      { text: "Code Beautify", link: "https://codebeautify.org/" },
      { text: "Unminify", link: "https://unminify.com/" },
      { text: "PDF Editor", link: "https://www.pdfescape.com/open/" },
      { text: "Code Sharing", link: "https://carbon.now.sh/" },
    ],
  },
];

export { toolsResourcesList };
