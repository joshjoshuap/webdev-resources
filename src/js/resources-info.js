const resourcesInfo = [
  {
    frontEndResources: {
      HTML: {
        title: 'HTML',
        item: [
          { text: 'MDN Web HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
          { text: 'W3School HTML', link: 'https://www.w3schools.com/html/default.asp' },
        ],
      },
      CSS: {
        title: 'CSS',
        item: [
          { text: 'MDN Web CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
          { text: 'CSS Reference', link: 'https://cssreference.io/' },
          { text: 'W3School CSS', link: 'https://www.w3schools.com/css/default.asp' },
          { text: 'CSS Tricks', link: 'https://css-tricks.com/' },
        ],
      },
      Javascript: {
        title: 'Javascript',
        item: [
          {
            text: 'MDN Web Javascript',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          },
          { text: 'Eloquent Javascript', link: 'https://eloquentjavascript.net/' },
          { text: 'W3School Javascript', link: 'https://www.w3schools.com/js/default.asp' },
          { text: 'Idiomatic Javascript', link: 'https://github.com/rwaldron/idiomatic.js' },
          { text: 'Jquery Library', link: 'https://api.jquery.com/' },
        ],
      },
      Bootstrap: {
        title: 'Bootstrap',
        item: [
          {
            text: 'Bootstrap 5.2',
            link: 'https://getbootstrap.com/docs/5.2/getting-started/introduction/',
          },
          { text: 'Bootsnipp Template', link: 'https://bootsnipp.com/' },
          { text: 'Bootstrap Tools', link: 'https://hackerthemes.com/bootstrap-tools/' },
          {
            text: 'Bootstrap 5 Cheatsheet',
            link: 'https://bootstrap-cheatsheet.themeselection.com/',
          },
        ],
      },
      TailwindCSS: {
        title: 'Tailwind CSS',
        item: [
          { text: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
          { text: 'Tailwind Toolbox', link: 'https://www.tailwindtoolbox.com/tools' },
          { text: 'Tailwind Components', link: 'https://postsrc.com/components' },
          { text: 'Tailwind Tools', link: 'https://bestoftailwind.com/t/tools' },
        ],
      },
      ReactJS: {
        title: 'React JS',
        item: [
          { text: 'React JS', link: 'https://reactjs.org/docs/getting-started.html' },
          { text: 'Material UI', link: 'https://mui.com/material-ui/getting-started/overview/' },
          { text: 'Chakra UI', link: 'https://chakra-ui.com/getting-started' },
          { text: 'Redux', link: 'https://redux.js.org/introduction/getting-started' },
          { text: 'React Router', link: 'https://reactrouter.com/docs/en/v6' },
          { text: 'ReactJS Cheatsheet', link: 'https://devhints.io/react' },
        ],
      },
    },
    backEndResources: {
      NodeJS: {
        title: 'NodeJS',
        item: [
          { text: 'Node JS v16', link: 'https://nodejs.org/dist/latest-v16.x/docs/api/' },
          { text: 'NPM', link: 'https://www.npmjs.com/' },
          {
            text: 'Node Best Practices',
            link: 'https://github.com/goldbergyoni/nodebestpractices?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more',
          },
          { text: ' Awesome NodeJS', link: 'https://github.com/sindresorhus/awesome-nodejs' },
        ],
      },
      ExpressJS: {
        title: 'ExpressJS',
        item: [
          { text: 'Express JS', link: 'https://expressjs.com/en/4x/api.html' },
          { text: 'Rest API', link: 'https://restfulapi.net/' },
        ],
      },
      MongoDB: {
        title: 'MongoDB',
        item: [
          { text: 'MongoDB', link: 'https://www.mongodb.com/docs/manual/introduction/l' },
          { text: 'Mongoose', link: 'https://mongoosejs.com/docs/guide.html' },
        ],
      },
    },
    fullStackResources: {
      VSCode: {
        title: 'VSCode',
        item: [
          { text: 'VSCode IDE', link: 'https://code.visualstudio.com/' },
          { text: 'VSCode Theme', link: 'https://vscodethemes.com/' },
          {
            text: 'VSCode Shorcuts',
            link: 'https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf',
          },
        ],
      },
      Git: {
        title: 'Git',
        item: [
          { link: 'https://git-scm.com/downloads', text: 'Git Terminal' },
          {
            link: 'hhttps://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow',
            text: 'Git Worlkflow',
          },
          {
            link: 'https://www.conventionalcommits.org/en/v1.0.0/',
            text: 'Semantic Commit Message',
          },
        ],
      },
    },
    toolsResources: {
      API: {
        title: 'API',
        item: [
          { text: 'Free Public API', link: 'https://github.com/public-apis/public-apis' },
          { text: 'Unsplash API', link: 'https://unsplash.com/developers' },
          { text: 'Random Data', link: 'https://random-data-api.com/documentation' },
        ],
      },
      Compiler: {
        title: 'Online Compiler',
        item: [
          { text: 'Codepen', link: 'https://codepen.io/pen/' },
          { text: 'Tio', link: 'https://tio.run/' },
        ],
      },
      Hosting: {
        title: 'Hosting Sites',
        item: [
          { text: 'Netlify', link: 'https://www.netlify.com/' },
          { text: 'Vercel', link: 'https://vercel.com/' },
          { text: 'Render', link: 'https://render.com/' },
        ],
      },
      Color: {
        title: 'Colors',
        item: [
          { text: 'Adobe Color', link: 'https://color.adobe.com/create/color-wheel' },
          { text: 'Color Hunt', link: 'https://colorhunt.co/' },
          { text: 'Coolors', link: 'https://coolors.co/' },
          { text: 'UI Gradients', link: 'https://uigradients.com/' },
          { text: 'Hypercolor Gradient', link: 'https://hypercolor.dev/#gradients' },
        ],
      },
      CSSHelpers: {
        title: 'CSS Helpers',
        item: [
          { text: 'CSS clip-path Maker', link: 'https://bennettfeely.com/clippy/' },
          { text: 'CSS Generator', link: 'https://webcode.tools/generators/css' },
          { text: 'CSS Pie Chart', link: 'https://bennettfeely.com/csspiechart/' },
          { text: 'Smooth Shadow', link: 'https://shadows.brumm.af/' },
          { text: 'Grid Layout Generator', link: 'https://grid.layoutit.com/' },
        ],
      },
      Typography: {
        title: 'Typography',
        item: [
          { text: 'Google Font', link: 'https://fonts.google.com/' },
          { text: 'Font Squirrel', link: 'https://fonts.google.com/' },
          { text: 'Font Joy', link: 'https://fontjoy.com/' },
          { text: 'Type Scale', link: 'https://type-scale.com/' },
        ],
      },
      Icons: {
        title: 'Icons',
        item: [
          { text: 'Github Badges', link: 'https://dev.to/envoy_/150-badges-for-github-pnk' },
          { text: 'Cryptocurrency Icon', link: 'http://cryptoicons.co/' },
          { text: 'Icons8', link: 'https://icons8.com/' },
          { text: 'Flaticon', link: 'https://www.flaticon.com/' },
          { text: 'Font Awesome', link: 'https://fontawesome.com/icons' },
          { text: 'Google Icon', link: 'https://fonts.google.com/icons' },
        ],
      },
      Images: {
        title: 'Images',
        item: [
          { text: 'Devian Art', link: 'https://www.deviantart.com/' },
          { text: 'Rive', link: 'https://rive.app/community/' },
          { text: 'Coverr', link: 'https://coverr.co/' },
          { text: 'Pexels', link: 'https://www.pexels.com/' },
          { text: 'Pixabay', link: 'https://pixabay.com/' },
          { text: 'Stocksnap', link: 'https://stocksnap.io/' },
          { text: 'Unsplash', link: 'https://unsplash.com/' },
          { text: 'Giphy', link: 'https://giphy.com/' },
        ],
      },
      ImagesTools: {
        title: 'Image Tools',
        item: [
          { text: 'Image Compressor', link: 'https://squoosh.app/' },
          { text: 'Remove Background', link: 'https://www.remove.bg/' },
          { text: 'Designify', link: 'https://www.designify.com/' },
          { text: 'Befunky', link: 'https://www.befunky.com/features/resize-image/' },
        ],
      },
      Productive: {
        title: 'Productive',
        item: [
          { text: 'Gitignore', link: 'https://www.toptal.com/developers/gitignore' },
          { text: 'Readme', link: 'https://readme.so/editor' },
          { text: 'Meta Tags', link: 'https://metatags.io/' },
          { text: 'Code Beautify', link: 'https://codebeautify.org/' },
          { text: 'Unminify', link: 'https://unminify.com/' },
          { text: 'PDF Editor', link: 'https://www.pdfescape.com/open/' },
          { text: 'Code Sharing', link: 'https://carbon.now.sh/' },
        ],
      },
    },
  },
];

export { resourcesInfo };
