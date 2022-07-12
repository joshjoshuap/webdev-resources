import CardItem from '/components/CardItem';
import VsCodeIcon from '/public/images/vscode-icon.svg';
import GitIcon from '/public/images/git-icon.svg';

const FullStack = () => {
  return (
    <section id="fullstack">
      <h1 className="section-title">FULLSTACK DEVELOPMENT</h1>
      <div className="card-container">
        <CardItem
          image={VsCodeIcon}
          title="VSCode"
          info={[
            { link: 'https://code.visualstudio.com/', text: 'VSCode IDE' },
            { link: 'https://vscodethemes.com/', text: 'VSCode Theme' },
            {
              link: 'https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf',
              text: 'VSCode Shorcuts',
            },
          ]}
        />

        <CardItem
          image={GitIcon}
          title="GIT"
          info={[
            { link: 'https://git-scm.com/downloads', text: 'Git Terminal' },
            {
              link: 'hhttps://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow',
              text: 'Git Worlkflow',
            },
            {
              link: 'https://www.conventionalcommits.org/en/v1.0.0/',
              text: 'Semantic Commit Message',
            },
          ]}
        />
      </div>
    </section>
  );
};

export default FullStack;
