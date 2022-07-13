import { resourcesInfo } from '/js/resources-info.js';
import Image from 'next/image';
import CardItem from '/components/CardItem';
import NodeIcon from '/public/images/nodejs-icon.svg';
import ExpressIcon from '/public/images/expressjs-icon.svg';
import MongoDBIcon from '/public/images/mongodb-icon.svg';

const Backend = () => {
  let backEndInfo = resourcesInfo[0].backEndResources;
  return (
    <section id="backend">
      <h1 className="section-title">BACK END DEVELOPMENT</h1>
      <div className="card-container">
        <CardItem
          image={NodeIcon}
          title={backEndInfo.NodeJS.title}
          info={backEndInfo.NodeJS.item}
        />
        <CardItem
          image={ExpressIcon}
          title={backEndInfo.ExpressJS.title}
          info={backEndInfo.ExpressJS.item}
        />
        <CardItem
          image={MongoDBIcon}
          title={backEndInfo.MongoDB.title}
          info={backEndInfo.MongoDB.item}
        />
      </div>
    </section>
  );
};

export default Backend;
