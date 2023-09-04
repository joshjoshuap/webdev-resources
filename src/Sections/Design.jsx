import { colorsIcon, typographyIcon } from "../assets/icons";

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

export default function Design() {
  return (
    <section
      className="w-10/12 py-12 mx-auto bg-white"
      id="design"
    >
      <h1 className="text-4xl font-semibold text-center md:text-6xl text-lightblue font-robotoslab">
        DESIGNING
      </h1>
      <div className="grid grid-cols-2 gap-5 mt-10 md:grid-cols-3 xl:grid-cols-4">
        {designResourcesList.map((item, index) => (
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
