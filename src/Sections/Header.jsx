import Navigation from "../components/Navigation";
import headingImage from "../../public/images/heading.png";
import githubIcon from "/public/icons/github-icon.svg";

export default function Header() {
  return (
    <header className="bg-lightsilver font-quicksand">
      <Navigation />
      <div className="flex w-10/12 mx-auto">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-blue leading-tight">
            WEB DEVELOPMENT RESOURCES FOR YOU
          </h1>
          <p className="text-xl font-semibold mt-5">
            List of resources and developer tools to build and learn web
            development. Contains Documentation, websites, links and guides.
          </p>
          <div className="mt-12">
            <p className="italic text-gray">
              “Open for collaboration just visit github repo and fork then pull
              request”
            </p>
            <a
              href="https://github.com/joshjoshuap/webdev-resources"
              className="flex items-center gap-2 border-2 border-transparent w-fit py-1 px-2 rounded hover:border-blue hover:bg-white transition-all duration-150"
            >
              <img
                src={githubIcon}
                className="w-10"
              ></img>
              <p className="text-lg font-semibold">GITHUB</p>
            </a>
          </div>
        </div>
        <div className="justify-self-center ">
          <img
            src={headingImage}
            className="w-screen"
          ></img>
        </div>
      </div>
    </header>
  );
}
