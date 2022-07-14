import { resourcesInfo } from '/js/resources-info.js';
import Card from '/components/Card';
import CardItem from '/components/CardItem';
import HTMLIcon from '/public/images/html5-icon.svg';
import CSSIcon from '/public/images/css3-icon.svg';
import JSIcon from '/public/images/javascript-icon.svg';
import BootstrapIcon from '/public/images/bootstrap-icon.svg';
import TailwindIcon from '/public/images/tailwindcss-icon.svg';
import ReactIcon from '/public/images/reactjs-icon.svg';

const FrontEnd = () => {
  let frontEndInfo = resourcesInfo[0].frontEndResources; // fetch the objects from resources-info,js
  return (
    <section id="frontend">
      <h1 className="section-title">FRONT END DEVELOPMENT</h1>
      <Card>
        {/* HTML */}
        <CardItem image={HTMLIcon} title={frontEndInfo.HTML.title} info={frontEndInfo.HTML.item} />

        {/* CSS */}
        <CardItem image={CSSIcon} title={frontEndInfo.CSS.title} info={frontEndInfo.CSS.item} />

        {/* Javascript */}
        <CardItem
          image={JSIcon}
          title={frontEndInfo.Javascript.title}
          info={frontEndInfo.Javascript.item}
        />

        {/* Bootstrap */}
        <CardItem
          image={BootstrapIcon}
          title={frontEndInfo.Bootstrap.title}
          info={frontEndInfo.Bootstrap.item}
        />

        {/* TailwindCSS */}
        <CardItem
          image={TailwindIcon}
          title={frontEndInfo.TailwindCSS.title}
          info={frontEndInfo.TailwindCSS.item}
        />

        {/* ReactJS */}
        <CardItem
          image={ReactIcon}
          title={frontEndInfo.ReactJS.title}
          info={frontEndInfo.ReactJS.item}
        />
      </Card>
    </section>
  );
};

export default FrontEnd;
