import {
  CompilerIcon,
  HostingIcon,
  CSSIcon,
  TypographyIcon,
  ColorIcon,
  HappyIcon,
  ImageIcon,
  ImageToolsIcon,
  CodingIcon,
} from '/js/image-icon';
import { resourcesInfo } from '/js/resources-info.js';
import Section from '/components/Section';
import Card from '/components/Card';
import CardItem from '/components/CardItem';

const Tools = () => {
  let toolsInfo = resourcesInfo[0].toolsResources; // fetch the objects from resources-info,js
  return (
    <Section id="tools" title="Tools and Helpers">
      <Card>
        {/* Compiler */}
        <CardItem
          image={CompilerIcon}
          title={toolsInfo.Compiler.title}
          info={toolsInfo.Compiler.item}
        />

        {/* Hosting */}
        <CardItem
          image={HostingIcon}
          title={toolsInfo.Hosting.title}
          info={toolsInfo.Hosting.item}
        />

        {/* CSS Helpers */}
        <CardItem image={ColorIcon} title={toolsInfo.Color.title} info={toolsInfo.Color.item} />
        <CardItem
          image={CSSIcon}
          title={toolsInfo.CSSHelpers.title}
          info={toolsInfo.CSSHelpers.item}
        />

        {/* Typography */}
        <CardItem
          image={TypographyIcon}
          title={toolsInfo.Typography.title}
          info={toolsInfo.Typography.item}
        />

        {/* Icons */}
        <CardItem image={HappyIcon} title={toolsInfo.Icons.title} info={toolsInfo.Icons.item} />

        {/* Images */}
        <CardItem image={ImageIcon} title={toolsInfo.Images.title} info={toolsInfo.Images.item} />

        {/* Image Tools */}
        <CardItem
          image={ImageToolsIcon}
          title={toolsInfo.ImagesTools.title}
          info={toolsInfo.ImagesTools.item}
        />

        {/* Productive */}
        <CardItem
          image={CodingIcon}
          title={toolsInfo.Productive.title}
          info={toolsInfo.Productive.item}
        />
      </Card>
    </Section>
  );
};

export default Tools;
