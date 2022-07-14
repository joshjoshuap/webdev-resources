import { resourcesInfo } from '/js/resources-info.js';
import Card from '/components/Card';
import CardItem from '/components/CardItem';
import VsCodeIcon from '/public/images/vscode-icon.svg';
import GitIcon from '/public/images/git-icon.svg';

const FullStack = () => {
  let fullStackInfo = resourcesInfo[0].fullStackResources; // fetch the objects from resources-info,js
  return (
    <section id="fullstack">
      <h1 className="section-title">FULLSTACK DEVELOPMENT</h1>
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
    </section>
  );
};

export default FullStack;
