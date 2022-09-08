import Image from 'next/image';

const CardInfo = (info) => {
  return (
    <>
      <span className="card-link">
        <a href={info.link} target="_blank">
          {info.text}
        </a>
      </span>
    </>
  );
};

const CardItem = (props) => {
  let infos = props.info;
  return (
    <>
      <div className="card-item">
        <div className="card-image">
          <Image src={props.image} height={70} width={70} alt={`${props.title} icon`} />
          <h1 className="card-title">{props.title}</h1>
        </div>
        <div className="card-info">{infos.map(CardInfo)}</div>
      </div>
    </>
  );
};

export default CardItem;
