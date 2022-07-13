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
            text: '  Bootstrap 5 Cheatsheet',
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
          ]
      }
    },
  },
];

export { resourcesInfo };
