import { resourcesInfo } from '/js/resources-info.js';
import Card from '/components/Card';
import CardItem from '/components/CardItem';
import NodeIcon from '/public/images/nodejs-icon.svg';
import ExpressIcon from '/public/images/expressjs-icon.svg';
import MongoDBIcon from '/public/images/mongodb-icon.svg';

const Backend = () => {
  let backEndInfo = resourcesInfo[0].backEndResources; // fetch the objects from resources-info,js
  return (
    <section id="backend">
      <h1 className="section-title">BACK END DEVELOPMENT</h1>
      <Card>
        {/* NodeJS */}
        <CardItem
          image={NodeIcon}
          title={backEndInfo.NodeJS.title}
          info={backEndInfo.NodeJS.item}
        />

        {/* ExpressJS */}
        <CardItem
          image={ExpressIcon}
          title={backEndInfo.ExpressJS.title}
          info={backEndInfo.ExpressJS.item}
        />

        {/* MongoDB */}
        <CardItem
          image={MongoDBIcon}
          title={backEndInfo.MongoDB.title}
          info={backEndInfo.MongoDB.item}
        />
      </Card>
    </section>
  );
};

export default Backend;
