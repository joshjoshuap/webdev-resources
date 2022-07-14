import { VsCodeIcon, GitIcon } from '/js/image-icon';
import { resourcesInfo } from '/js/resources-info.js';
import Section from '/components/Section';
import Card from '/components/Card';
import CardItem from '/components/CardItem';

const FullStack = () => {
  let fullStackInfo = resourcesInfo[0].fullStackResources; // fetch the objects from resources-info,js
  return (
    <Section id="fullstack" title="Fullstack Development">
      <Card>
        {/* VSCode */}
        <CardItem
          image={VsCodeIcon}
          title={fullStackInfo.VSCode.title}
          info={fullStackInfo.VSCode.item}
        />

        {/* Git */}
        <CardItem image={GitIcon} title={fullStackInfo.Git.title} info={fullStackInfo.Git.item} />
      </Card>
    </Section>
  );
};

export default FullStack;
