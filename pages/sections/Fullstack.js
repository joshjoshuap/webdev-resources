import { resourcesInfo } from '/js/resources-info.js';
import CardItem from '/components/CardItem';
import VsCodeIcon from '/public/images/vscode-icon.svg';
import GitIcon from '/public/images/git-icon.svg';

const FullStack = () => {
  let fullStackInfo = resourcesInfo[0].fullStackResources;
  return (
    <section id="fullstack">
      <h1 className="section-title">FULLSTACK DEVELOPMENT</h1>
      <div className="card-container">
        <CardItem
          image={VsCodeIcon}
          title={fullStackInfo.VSCode.title}
          info={fullStackInfo.VSCode.item}
        />
        <CardItem image={GitIcon} title={fullStackInfo.Git.title} info={fullStackInfo.Git.item} />
      </div>
    </section>
  );
};

export default FullStack;
