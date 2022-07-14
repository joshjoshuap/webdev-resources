import { HTMLIcon, CSSIcon, JSIcon, BootstrapIcon, TailwindIcon, ReactIcon } from '/js/image-icon';
import { resourcesInfo } from '/js/resources-info.js';
import Section from '/components/Section';
import Card from '/components/Card';
import CardItem from '/components/CardItem';

const FrontEnd = () => {
  let frontEndInfo = resourcesInfo[0].frontEndResources; // fetch the objects from resources-info,js
  return (
    <Section id="frontend" title="Front End Development">
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
    </Section>
  );
};

export default FrontEnd;
