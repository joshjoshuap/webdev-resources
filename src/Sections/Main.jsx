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
        sectionTitle="FRONT END"
        resourcesList={frontEndResourcesList}
      />
      <Section
        sectionTitle="BACK END"
        resourcesList={backEndResourcesList}
      />
      <Section
        sectionTitle="DEVELOPMENT"
        resourcesList={developmentResourcesList}
      />
      <Section
        sectionTitle="TOOLS"
        resourcesList={toolsResourcesList}
      />
      <Section
        sectionTitle="DESIGN"
        resourcesList={designResourcesList}
      />
      <Section
        sectionTitle="ICONS & IMAGES"
        resourcesList={iconsimagesResourcesList}
      />
    </>
  );
}
