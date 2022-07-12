import Image from 'next/image';
import CardItem from '/components/CardItem';
import NodeIcon from '/public/images/nodejs-icon.svg';
import ExpressIcon from '/public/images/expressjs-icon.svg';
import MongoDBIcon from '/public/images/mongodb-icon.svg';

const Backend = () => {
  return (
    <section id="backend">
      <h1 className="section-title">BACK END DEVELOPMENT</h1>
      <div className="card-container">
        {/* NodeJS */}
        <CardItem
          image={NodeIcon}
          title="NodeJS"
          info={[
            { link: 'https://nodejs.org/dist/latest-v16.x/docs/api/', text: 'Node JS v16' },
            { link: 'https://www.npmjs.com/', text: 'NPM' },
            {
              link: 'https://github.com/goldbergyoni/nodebestpractices?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more',
              text: 'Node Best Practices',
            },
            { link: 'https://github.com/sindresorhus/awesome-nodejs', text: ' Awesome NodeJS' },
          ]}
        />

        {/* ExpressJS */}
        <CardItem
          image={ExpressIcon}
          title="ExpressJS"
          info={[
            { link: 'https://expressjs.com/en/4x/api.html', text: 'Express JS' },
            { link: 'https://restfulapi.net/', text: 'Rest API' },
          ]}
        />

        {/* MongoDB */}
        <CardItem
          image={MongoDBIcon}
          title="MongoDB"
          info={[
            { link: 'https://www.mongodb.com/docs/manual/introduction/l', text: 'MongoDB' },
            { link: 'https://mongoosejs.com/docs/guide.html', text: 'Mongoose' },
          ]}
        />
      </div>
    </section>
  );
};

export default Backend;
