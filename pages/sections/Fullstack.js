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
          info={[
            { link: 'https://code.visualstudio.com/', title: 'VSCode IDE' },
            { link: 'https://vscodethemes.com/', title: 'VSCode Theme' },
            {
              link: 'https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf',
              title: 'VSCode Shorcuts',
            },
          ]}
        />

        <CardItem
          image={GitIcon}
          info={[
            { link: 'https://git-scm.com/downloads', title: 'Git Terminal' },
            {
              link: 'hhttps://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow',
              title: 'Git Worlkflow',
            },
            {
              link: 'https://www.conventionalcommits.org/en/v1.0.0/',
              title: 'Semantic Commit Message',
            },
          ]}
        />
      </div>
    </section>
  );
};

export default FullStack;
