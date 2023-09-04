import { frontEndResourcesList } from "../api/frontend";
import { backEndResourcesList } from "../api/backend";
import { developmentResourcesList } from "../api/development";
import { toolsResourcesList } from "../api/tools";
import { designResourcesList } from "../api/design";
import { iconsimagesResourcesList } from "../api/icons-images";

import Section from "../components/Section";

export default function Main() {
  return (
    <>
      <Section
        sectionID="frontend"
        sectionTitle="FRONT END"
        resourcesList={frontEndResourcesList}
      />
      <Section
        sectionID="backend"
        sectionTitle="BACK END"
        resourcesList={backEndResourcesList}
      />
      <Section
        sectionID="development"
        sectionTitle="DEVELOPMENT"
        resourcesList={developmentResourcesList}
      />
      <Section
        sectionID="tools"
        sectionTitle="TOOLS"
        resourcesList={toolsResourcesList}
      />
      <Section
        sectionID="design"
        sectionTitle="DESIGN"
        resourcesList={designResourcesList}
      />
      <Section
        sectionID="icons-images"
        sectionTitle="ICONS & IMAGES"
        resourcesList={iconsimagesResourcesList}
      />
    </>
  );
}
