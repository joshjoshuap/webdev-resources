import CardItem from '/components/CardItem';
import HTMLIcon from '/public/images/html5-icon.svg';
import CSSIcon from '/public/images/css3-icon.svg';
import JSIcon from '/public/images/javascript-icon.svg';
import BootstrapIcon from '/public/images/bootstrap-icon.svg';
import TailwindIcon from '/public/images/tailwindcss-icon.svg';
import ReactIcon from '/public/images/reactjs-icon.svg';

const FrontEnd = () => {
  return (
    <section id="frontend">
      <h1 className="section-title">FRONT END DEVELOPMENT</h1>
      <div className="card-container">
        {/* HTML */}
        <CardItem
          image={HTMLIcon}
          title="HTML"
          info={[
            { link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', text: 'MDN Web HTML' },
            { link: 'https://www.w3schools.com/html/default.asp', text: 'W3School HTML' },
          ]}
        />

        {/* CSS */}
        <CardItem
          image={CSSIcon}
          title="CSS"
          info={[
            { link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', text: 'MDN Web CSS' },
            { link: 'https://cssreference.io/', text: 'CSS Reference' },
            { link: 'https://www.w3schools.com/css/default.asp', text: 'W3School CSS' },
            { link: 'https://css-tricks.com/', text: 'CSS Tricks' },
          ]}
        />

        {/* Javascript */}
        <CardItem
          image={JSIcon}
          title="Javascript"
          info={[
            {
              link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
              text: 'MDN Web Javascript',
            },
            { link: 'https://eloquentjavascript.net/', text: 'Eloquent Javascript' },
            { link: 'https://www.w3schools.com/js/default.asp', text: 'W3School Javascript' },
            { link: 'https://github.com/rwaldron/idiomatic.js', text: 'Idiomatic Javascript' },
          ]}
        />

        {/* Bootstrap */}
        <CardItem
          image={BootstrapIcon}
          title="Bootstrap"
          info={[
            {
              link: 'https://getbootstrap.com/docs/5.2/getting-started/introduction/',
              text: 'Bootstrap 5.2',
            },
            { link: 'https://bootsnipp.com/', text: 'Bootsnipp Template' },
            { link: 'https://hackerthemes.com/bootstrap-tools/', text: 'Bootstrap Tools' },
            {
              link: 'https://bootstrap-cheatsheet.themeselection.com/',
              text: '  Bootstrap 5 Cheatsheet',
            },
          ]}
        />

        {/* Tailwind CSS */}
        <CardItem
          image={TailwindIcon}
          title="Tailwind CSS"
          info={[
            { link: 'https://tailwindcss.com/', text: 'Tailwind CSS' },
            { link: 'https://www.tailwindtoolbox.com/tools', text: 'Tailwind Toolbox' },
            { link: 'https://postsrc.com/components', text: 'Tailwind Components' },
            { link: 'https://bestoftailwind.com/t/tools', text: 'Tailwind Tools' },
          ]}
        />

        {/* ReactJS */}
        <CardItem
          image={ReactIcon}
          title="ReactJS"
          info={[
            { link: 'https://reactjs.org/docs/getting-started.html', text: 'React JS' },
            { link: 'https://mui.com/material-ui/getting-started/overview/', text: 'Material UI' },
            { link: 'https://chakra-ui.com/getting-started', text: 'Chakra UI' },
            { link: 'https://redux.js.org/introduction/getting-started', text: 'Redux' },
            { link: 'https://reactrouter.com/docs/en/v6', text: 'React Router' },
            { link: 'https://devhints.io/react', text: 'ReactJS Cheatsheet' },
          ]}
        />
      </div>
    </section>
  );
};

export default FrontEnd;
