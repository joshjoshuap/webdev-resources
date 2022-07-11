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
      <div className="container">
        {/* HTML */}
        <CardItem
          image={HTMLIcon}
          info={[
            { link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', title: 'MDN Web HTML' },
            { link: 'https://www.w3schools.com/html/default.asp', title: 'W3School HTML' },
          ]}
        />

        {/* CSS */}
        <CardItem
          image={CSSIcon}
          info={[
            { link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', title: 'MDN Web CSS' },
            { link: 'https://cssreference.io/', title: 'CSS Reference' },
            { link: 'https://www.w3schools.com/css/default.asp', title: 'W3School CSS' },
            { link: 'https://css-tricks.com/', title: 'CSS Tricks' },
          ]}
        />

        {/* Javascript */}
        <CardItem
          image={JSIcon}
          info={[
            {
              link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
              title: 'MDN Web Javascript',
            },
            { link: 'https://eloquentjavascript.net/', title: 'Eloquent Javascript' },
            { link: 'https://www.w3schools.com/js/default.asp', title: 'W3School Javascript' },
            { link: 'https://github.com/rwaldron/idiomatic.js', title: 'Idiomatic Javascript' },
          ]}
        />

        {/* Bootstrap */}
        <CardItem
          image={BootstrapIcon}
          info={[
            {
              link: 'https://getbootstrap.com/docs/5.2/getting-started/introduction/',
              title: 'Bootstrap 5.2',
            },
            { link: 'https://bootsnipp.com/', title: 'Bootsnipp Template' },
            { link: 'https://hackerthemes.com/bootstrap-tools/', title: 'Bootstrap Tools' },
            {
              link: 'https://bootstrap-cheatsheet.themeselection.com/',
              title: '  Bootstrap 5 Cheatsheet',
            },
          ]}
        />

        {/* Tailwind CSS */}
        <CardItem
          image={TailwindIcon}
          info={[
            { link: 'https://tailwindcss.com/', title: 'Tailwind CSS' },
            { link: 'https://www.tailwindtoolbox.com/tools', title: 'Tailwind Toolbox' },
            { link: 'https://postsrc.com/components', title: 'Tailwind Components' },
            { link: 'https://bestoftailwind.com/t/tools', title: 'Tailwind Tools' },
          ]}
        />

        {/* ReactJS */}
        <CardItem
          image={ReactIcon}
          info={[
            { link: 'https://reactjs.org/docs/getting-started.html', title: 'React JS' },
            { link: 'https://mui.com/material-ui/getting-started/overview/', title: 'Material UI' },
            { link: 'https://chakra-ui.com/getting-started', title: 'Chakra UI' },
            { link: 'https://redux.js.org/introduction/getting-started', title: 'Redux' },
            { link: 'https://reactrouter.com/docs/en/v6', title: 'React Router' },
            { link: 'https://devhints.io/react', title: 'ReactJS Cheatsheet' },
          ]}
        />
      </div>
    </section>
  );
};

export default FrontEnd;
