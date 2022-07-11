import Image from 'next/image';

const CardInfo = (info) => {
  return (
    <>
      <span class="card-link">
        <a href={info.link} target="_blank">
          {info.title}
        </a>
      </span>
    </>
  );
};

const CardItem = (props) => {
  let infos = props.info;
  return (
    <>
      <div class="card-item">
        <div class="card-image">
          <Image src={props.image} height={80} width={80} alt="HTML 5 Icon" />
        </div>
        <div class="card-info">{infos.map(CardInfo)}</div>
      </div>
    </>
  );
};

export default CardItem;
