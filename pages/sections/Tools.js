import CardItem from '/components/CardItem';
import CompilerIcon from '/public/images/compiler-icon.png';
import HostingIcon from '/public/images/hosting-icon.png';
import ColorIcon from '/public/images/colors-icon.png';
import CSSIcon from '/public/images/css3-icon.svg';
import TypographyIcon from '/public/images/typography-icon.png';
import HappIcon from '/public/images/happy-icon.png';
import ImageIcon from '/public/images/image-icon.png';
import ImageToolsIcon from '/public/images/imagetools-icon.png';
import CodingIcon from '/public/images/coding-icon.png';

const Tools = () => {
  return (
    <section id="tools">
      <h1 className="section-title">TOOLS AND HELPERS</h1>
      <div className="card-container">
        <CardItem
          image={CompilerIcon}
          title={'Online Compiler'}
          info={[
            { link: 'https://codepen.io/pen/', text: 'Codepen' },
            { link: 'https://tio.run/', text: 'Tio' },
          ]}
        />

        <CardItem
          image={HostingIcon}
          title={'Hosting Sites'}
          info={[
            { link: 'https://www.netlify.com/', text: 'Netlify' },
            { link: 'https://www.heroku.com/', text: 'Heroku' },
            { link: 'https://vercel.com/', text: 'Vercel' },
          ]}
        />

        <CardItem
          image={ColorIcon}
          title={'Color Palletes'}
          info={[
            { link: 'https://color.adobe.com/create/color-wheel', text: 'Adobe Color' },
            { link: 'https://colorhunt.co/', text: 'Color Hunt' },
            { link: 'https://coolors.co/', text: 'Coolors ' },
            { link: 'https://uigradients.com/', text: 'UI Gradients ' },
            { link: 'https://hypercolor.dev/#gradients', text: 'Hypercolor Gradient ' },
          ]}
        />

        <CardItem
          image={CSSIcon}
          title={'CSS Helpers'}
          info={[
            { link: 'https://bennettfeely.com/clippy/', text: 'CSS clip-path Maker' },
            { link: 'https://webcode.tools/generators/css', text: 'CSS Generator' },
            { link: 'https://bennettfeely.com/csspiechart/', text: 'CSS Pie Chart' },
            { link: 'https://shadows.brumm.af/', text: 'Smooth Shadow' },
            { link: 'https://grid.layoutit.com/', text: 'Grid Layout Generator' },
          ]}
        />

        <CardItem
          image={TypographyIcon}
          title={'Typography'}
          info={[
            { link: 'https://fonts.google.com/', text: 'Google Font' },
            { link: 'https://fonts.google.com/', text: 'Font Squirrel' },
            { link: 'https://fontjoy.com/', text: 'Font Joy' },
            { link: 'https://type-scale.com/', text: 'Type Scale' },
          ]}
        />

        <CardItem
          image={HappIcon}
          title={'Icons'}
          info={[
            { link: 'https://dev.to/envoy_/150-badges-for-github-pnk', text: 'Github Badges' },
            { link: 'http://cryptoicons.co/', text: 'Cryptocurrency Icon' },
            { link: 'https://icons8.com/', text: 'Icons8' },
            { link: 'https://www.flaticon.com/', text: 'Flaticon' },
            { link: 'https://fontawesome.com/icons', text: 'Font Awesome' },
            { link: 'https://fonts.google.com/icons', text: 'Google Icon' },
          ]}
        />

        <CardItem
          image={ImageIcon}
          title={'Images'}
          info={[
            { link: 'https://www.deviantart.com/', text: 'Devian Art' },
            { link: 'https://rive.app/community/', text: 'Rive' },
            { link: 'https://coverr.co/', text: 'Coverr' },
            { link: 'https://www.pexels.com/', text: 'Pexels' },
            { link: 'https://pixabay.com/', text: 'Pixabay' },
            { link: 'https://stocksnap.io/', text: 'Stocksnap' },
            { link: 'https://unsplash.com/', text: 'Unsplash' },
          ]}
        />

        <CardItem
          image={ImageToolsIcon}
          title={'Image Tools'}
          info={[
            { link: 'https://squoosh.app/', text: 'Image Compressor' },
            { link: 'https://www.remove.bg/', text: 'Remove Background' },
          ]}
        />

        <CardItem 
        image={CodingIcon}
        title={'Productive'}
        info={[
            { link: 'https://www.toptal.com/developers/gitignore', text: 'Gitignore' },
            { link: 'https://readme.so/editor', text: 'Readme' },
            { link: 'https://metatags.io/', text: 'Meta Tags' },
            { link: 'https://codebeautify.org/', text: 'Code Beautify' },
            { link: 'https://unminify.com/', text: 'Unminify' },
            { link: 'https://www.pdfescape.com/open/', text: 'PDF Editor' },
            { link: 'https://carbon.now.sh/', text: 'Code Sharing' },
          ]}
        />
      </div>
    </section>
  );
};

export default Tools;
