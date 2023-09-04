import { vscodeIcon, gitIcon } from "../assets/js/icons";

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

export { developmentResourcesList };
