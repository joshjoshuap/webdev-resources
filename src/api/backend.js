import { nodejsIcon, expressjsIcon, mongodbIcon } from "../assets/js/icons";

let backEndResourcesList = [
  {
    title: "NodeJS",
    icon: nodejsIcon,
    item: [
      {
        text: "Node JS",
        link: "https://nodejs.org/dist/latest-v16.x/docs/api/",
      },
      { text: "NPM", link: "https://www.npmjs.com/" },
      {
        text: "Node Best Practices",
        link: "https://github.com/goldbergyoni/nodebestpractices?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more",
      },
      {
        text: " Awesome NodeJS",
        link: "https://github.com/sindresorhus/awesome-nodejs",
      },
    ],
  },
  {
    title: "Express",
    icon: expressjsIcon,
    item: [
      { text: "Express JS", link: "https://expressjs.com/en/4x/api.html" },
      { text: "Rest API", link: "https://restfulapi.net/" },
    ],
  },
  {
    title: "MongoDB",
    icon: mongodbIcon,
    item: [
      {
        text: "MongoDB",
        link: "https://www.mongodb.com/docs/manual/introduction/l",
      },
      { text: "Mongoose", link: "https://mongoosejs.com/docs/guide.html" },
    ],
  },
];

export { backEndResourcesList };
