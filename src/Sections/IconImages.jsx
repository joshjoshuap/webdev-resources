import { iconsIcon, imageIcon, imagetoolsIcon } from "../assets/icons";

let iconsimagesResourcesList = [
  {
    title: "Icons",
    icon: iconsIcon,
    item: [
      {
        text: "Github Badges",
        link: "https://dev.to/envoy_/150-badges-for-github-pnk",
      },
      { text: "Cryptocurrency Icon", link: "http://cryptoicons.co/" },
      { text: "Icons8", link: "https://icons8.com/" },
      { text: "Flaticon", link: "https://www.flaticon.com/" },
      { text: "Font Awesome", link: "https://fontawesome.com/icons" },
      { text: "Google Icon", link: "https://fonts.google.com/icons" },
    ],
  },
  {
    title: "Images",
    icon: imageIcon,
    item: [
      { text: "Devian Art", link: "https://www.deviantart.com/" },
      { text: "Rive", link: "https://rive.app/community/" },
      { text: "Coverr", link: "https://coverr.co/" },
      { text: "Pexels", link: "https://www.pexels.com/" },
      { text: "Pixabay", link: "https://pixabay.com/" },
      { text: "Stocksnap", link: "https://stocksnap.io/" },
      { text: "Unsplash", link: "https://unsplash.com/" },
      { text: "Giphy", link: "https://giphy.com/" },
    ],
  },
  {
    title: "Image Tools",
    icon: imagetoolsIcon,
    item: [
      { text: "Image Compressor", link: "https://squoosh.app/" },
      { text: "Remove Background", link: "https://www.remove.bg/" },
      { text: "Designify", link: "https://www.designify.com/" },
      {
        text: "Befunky",
        link: "https://www.befunky.com/features/resize-image/",
      },
    ],
  },
];

export default function IconImages() {
  return (
    <section className="w-10/12 py-12 mx-auto bg-white">
      <h1 className="text-6xl font-semibold text-center text-lightblue font-robotoslab">
        ICONS & IMAGES
      </h1>
      <div className="grid grid-cols-4 mt-10 gap-y-5">
        {iconsimagesResourcesList.map((item, index) => (
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
