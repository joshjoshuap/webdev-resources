import { nodejsIcon, expressjsIcon, mongodbIcon } from "../assets/icons";

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

export default function Backend() {
  return (
    <section
      className="w-10/12 py-12 mx-auto bg-white"
      id="back-end"
    >
      <h1 className="text-6xl font-semibold text-center text-lightblue font-robotoslab">
        BACK END
      </h1>
      <div className="grid grid-cols-4 mt-10 gap-y-5">
        {backEndResourcesList.map((item, index) => (
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
