import Navigation from "../components/Navigation";
import headingImage from "../assets/images/heading.png";
import githubIcon from "../assets/icons/github-icon.svg";

export default function Header() {
  return (
    <header className="pb-8 md:pb-16 bg-lightsilver font-quicksand">
      <Navigation />
      <div className="flex flex-col w-10/12 mx-auto lg:flex-row">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-2xl font-bold md:text-5xl text-blue">
            WEB DEVELOPMENT RESOURCES FOR YOU
          </h1>
          <p className="mt-3 font-semibold md:mt-5 text-md md:text-xl">
            List of resources and developer tools to build and learn web
            development. Contains Documentation, websites, links and guides.
          </p>
          <div className="flex flex-col items-center mt-8 md:mt-12 lg:items-start">
            <p className="text-sm italic text-gray md:text-xl">
              “Open for collaboration just visit github repo and fork then pull
              request”
            </p>
            <a
              href="https://github.com/joshjoshuap/webdev-resources"
              className="flex items-center gap-2 px-2 py-1 transition-all duration-150 border-2 border-transparent rounded w-fit hover:border-blue hover:bg-white"
            >
              <img
                src={githubIcon}
                className="w-10"
              ></img>
              <p className="text-lg font-semibold">GITHUB</p>
            </a>
          </div>
        </div>
        <div className="hidden lg:block justify-self-center ">
          <img
            src={headingImage}
            className="w-screen"
          ></img>
        </div>
      </div>
    </header>
  );
}
