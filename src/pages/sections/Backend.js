import { NodeIcon, ExpressIcon, MongoDBIcon } from '../../js/image-icon';
import { resourcesInfo } from '../../js/resources-info.js';
import Section from '../../components/Section';
import Card from '../../components/Card';
import CardItem from '../../components/CardItem';

const Backend = () => {
  let backEndInfo = resourcesInfo[0].backEndResources; // fetch the objects from resources-info,js
  return (
    <Section id="backend" title="Back End Development">
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
    </Section>
  );
};

export default Backend;
