import { vscodeIcon, gitIcon } from "../assets/icons";

let developmentResourcesList = [
  {
    title: "VSCode",
    icon: vscodeIcon,
    item: [
      { text: "VSCode IDE", link: "https://code.visualstudio.com/" },
      { text: "VSCode Theme", link: "https://vscodethemes.com/" },
      {
        text: "VSCode Shorcuts",
        link: "https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf",
      },
    ],
  },
  {
    title: "Git",
    icon: gitIcon,
    item: [
      { link: "https://git-scm.com/downloads", text: "Git Terminal" },
      {
        link: "hhttps://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow",
        text: "Git Worlkflow",
      },
      {
        link: "https://www.conventionalcommits.org/en/v1.0.0/",
        text: "Semantic Commit Message",
      },
    ],
  },
];

export default function Development() {
  return (
    <section
      className="w-10/12 py-12 mx-auto bg-white"
      id="development"
    >
      <h1 className="text-6xl font-semibold text-center text-lightblue font-robotoslab">
        DEVELOPMENT
      </h1>
      <div className="grid grid-cols-4 mt-10 gap-y-5">
        {developmentResourcesList.map((item, index) => (
          <div
            className=""
            key={index}
          >
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
