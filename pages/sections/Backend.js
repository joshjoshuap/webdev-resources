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
          width={200}
          info={[
            { link: 'https://nodejs.org/dist/latest-v16.x/docs/api/', title: 'Node JS v16' },
            { link: 'https://www.npmjs.com/', title: 'NPM' },
            {
              link: 'https://github.com/goldbergyoni/nodebestpractices?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more',
              title: 'Node Best Practices',
            },
            { link: 'https://github.com/sindresorhus/awesome-nodejs', title: ' Awesome NodeJS' },
          ]}
        />

        {/* ExpressJS */}
        <CardItem
          image={ExpressIcon}
          info={[
            { link: 'https://expressjs.com/en/4x/api.html', title: 'Express JS' },
            { link: 'https://restfulapi.net/', title: 'Rest API' },
          ]}
        />

        {/* MongoDB */}
        <CardItem
          image={MongoDBIcon}
          info={[
            { link: 'https://www.mongodb.com/docs/manual/introduction/l', title: 'MongoDB' },
            { link: 'https://mongoosejs.com/docs/guide.html', title: 'Mongoose' },
          ]}
        />
      </div>
    </section>
  );
};

export default Backend;
