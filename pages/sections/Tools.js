import { resourcesInfo } from '/js/resources-info.js';
import Card from '/components/Card';
import CardItem from '/components/CardItem';
import CompilerIcon from '/public/images/compiler-icon.png';
import HostingIcon from '/public/images/hosting-icon.png';
import ColorIcon from '/public/images/colors-icon.png';
import CSSIcon from '/public/images/css3-icon.svg';
import TypographyIcon from '/public/images/typography-icon.png';
import HappIcon from '/public/images/happy-icon.png';
import ImageIcon from '/public/images/image-icon.png';
import ImageToolsIcon from '/public/images/imagetools-icon.png';
import CodingIcon from '/public/images/coding-icon.png';

const Tools = () => {
  let toolsInfo = resourcesInfo[0].toolsResources; // fetch the objects from resources-info,js
  return (
    <section id="tools">
      <h1 className="section-title">TOOLS AND HELPERS</h1>
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
        <CardItem image={HappIcon} title={toolsInfo.Icons.title} info={toolsInfo.Icons.item} />

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
    </section>
  );
};

export default Tools;
