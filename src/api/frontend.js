import {
  htmlIcon,
  cssIcon,
  javascriptIcon,
  bootstrapIcon,
  tailwindIcon,
  reactjsIcon,
} from "../assets/js/icons";

let frontEndResourcesList = [
  {
    title: "HTML",
    icon: htmlIcon,
    item: [
      {
        text: "MDN Web HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        text: "W3School HTML",
        link: "https://www.w3schools.com/html/default.asp",
      },
    ],
  },
  {
    title: "CSS",
    icon: cssIcon,
    item: [
      {
        text: "MDN Web CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      { text: "CSS Reference", link: "https://cssreference.io/" },
      {
        text: "W3School CSS",
        link: "https://www.w3schools.com/css/default.asp",
      },
      { text: "CSS Tricks", link: "https://css-tricks.com/" },
    ],
  },
  {
    title: "Javascript",
    icon: javascriptIcon,
    item: [
      {
        text: "MDN Web Javascript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        text: "Eloquent Javascript",
        link: "https://eloquentjavascript.net/",
      },
      {
        text: "W3School Javascript",
        link: "https://www.w3schools.com/js/default.asp",
      },
      {
        text: "Idiomatic Javascript",
        link: "https://github.com/rwaldron/idiomatic.js",
      },
      { text: "Jquery Library", link: "https://api.jquery.com/" },
    ],
  },
  {
    title: "Bootstrap",
    icon: bootstrapIcon,
    item: [
      {
        text: "Bootstrap 5.2",
        link: "https://getbootstrap.com/docs/5.2/getting-started/introduction/",
      },
      { text: "Bootsnipp Template", link: "https://bootsnipp.com/" },
      {
        text: "Bootstrap Tools",
        link: "https://hackerthemes.com/bootstrap-tools/",
      },
      {
        text: "Bootstrap 5 Cheatsheet",
        link: "https://bootstrap-cheatsheet.themeselection.com/",
      },
    ],
  },
  {
    title: "Tailwind CSS",
    icon: tailwindIcon,
    item: [
      { text: "Tailwind CSS", link: "https://tailwindcss.com/" },
      {
        text: "Tailwind Toolbox",
        link: "https://www.tailwindtoolbox.com/tools",
      },
      { text: "Tailwind Components", link: "https://postsrc.com/components" },
      { text: "Tailwind Tools", link: "https://bestoftailwind.com/t/tools" },
    ],
  },
  {
    title: "React JS",
    icon: reactjsIcon,
    item: [
      {
        text: "React JS",
        link: "https://reactjs.org/docs/getting-started.html",
      },
      {
        text: "Material UI",
        link: "https://mui.com/material-ui/getting-started/overview/",
      },
      { text: "Chakra UI", link: "https://chakra-ui.com/getting-started" },
      {
        text: "Redux",
        link: "https://redux.js.org/introduction/getting-started",
      },
      { text: "React Router", link: "https://reactrouter.com/docs/en/v6" },
      { text: "ReactJS Cheatsheet", link: "https://devhints.io/react" },
    ],
  },
];

export { frontEndResourcesList };
