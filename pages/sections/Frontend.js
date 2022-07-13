import { resourcesInfo } from '/js/resources-info.js';
import CardItem from '/components/CardItem';
import HTMLIcon from '/public/images/html5-icon.svg';
import CSSIcon from '/public/images/css3-icon.svg';
import JSIcon from '/public/images/javascript-icon.svg';
import BootstrapIcon from '/public/images/bootstrap-icon.svg';
import TailwindIcon from '/public/images/tailwindcss-icon.svg';
import ReactIcon from '/public/images/reactjs-icon.svg';

const FrontEnd = () => {
  let frontEndInfo = resourcesInfo[0].frontEndResources;
  return (
    <section id="frontend">
      <h1 className="section-title">FRONT END DEVELOPMENT</h1>
      <div className="card-container">
        <CardItem image={HTMLIcon} title={frontEndInfo.HTML.title} info={frontEndInfo.HTML.item} />
        <CardItem image={CSSIcon} title={frontEndInfo.CSS.title} info={frontEndInfo.CSS.item} />
        <CardItem
          image={JSIcon}
          title={frontEndInfo.Javascript.title}
          info={frontEndInfo.Javascript.item}
        />
        <CardItem
          image={BootstrapIcon}
          title={frontEndInfo.Bootstrap.title}
          info={frontEndInfo.Bootstrap.item}
        />
        <CardItem
          image={TailwindIcon}
          title={frontEndInfo.TailwindCSS.title}
          info={frontEndInfo.TailwindCSS.item}
        />
        <CardItem
          image={ReactIcon}
          title={frontEndInfo.ReactJS.title}
          info={frontEndInfo.ReactJS.item}
        />
      </div>
    </section>
  );
};

export default FrontEnd;
