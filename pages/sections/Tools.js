import { resourcesInfo } from '/js/resources-info.js';
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
  let toolsInfo = resourcesInfo[0].toolsResources;
  return (
    <section id="tools">
      <h1 className="section-title">TOOLS AND HELPERS</h1>
      <div className="card-container">
        <CardItem
          image={CompilerIcon}
          title={toolsInfo.Compiler.title}
          info={toolsInfo.Compiler.item}
        />
        <CardItem
          image={HostingIcon}
          title={toolsInfo.Hosting.title}
          info={toolsInfo.Hosting.item}
        />
        <CardItem image={ColorIcon} title={toolsInfo.Color.title} info={toolsInfo.Color.item} />
        <CardItem
          image={CSSIcon}
          title={toolsInfo.CSSHelpers.title}
          info={toolsInfo.CSSHelpers.item}
        />
        <CardItem
          image={TypographyIcon}
          title={toolsInfo.Typography.title}
          info={toolsInfo.Typography.item}
        />
        <CardItem image={HappIcon} title={toolsInfo.Icons.title} info={toolsInfo.Icons.item} />
        <CardItem image={ImageIcon} title={toolsInfo.Images.title} info={toolsInfo.Images.item} />
        <CardItem
          image={ImageToolsIcon}
          title={toolsInfo.ImagesTools.title}
          info={toolsInfo.ImagesTools.item}
        />
        <CardItem
          image={CodingIcon}
          title={toolsInfo.Productive.title}
          info={toolsInfo.Productive.item}
        />
      </div>
    </section>
  );
};

export default Tools;
