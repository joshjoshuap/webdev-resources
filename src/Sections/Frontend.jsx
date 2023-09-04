import {
  htmlIcon,
  cssIcon,
  javascriptIcon,
  bootstrapIcon,
  tailwindIcon,
  reactjsIcon,
} from "../assets/icons";

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

export default function Frontend() {
  return (
    <section
      className="w-10/12 py-12 mx-auto bg-white"
      id="front-end"
    >
      <h1 className="text-4xl font-semibold text-center md:text-6xl text-lightblue font-robotoslab">
        FRONT END
      </h1>
      <div className="grid grid-cols-2 gap-5 mt-10 md:grid-cols-3 xl:grid-cols-4">
        {frontEndResourcesList.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col gap-1">
              <img
                src={item.icon}
                className="w-16"
              />
              <h3 className="text-2xl font-semibold text-blue">{item.title}</h3>
            </div>
            <div className="flex flex-col">
              {item.item.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-lg font-semibold transition-all duration-100 hover:text-blue hover:underline"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
