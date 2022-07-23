const Section = (props) => {
  return (
    <section id={props.id}>
      <h1 className="section-title">{props.title}</h1>
      {props.children}
    </section>
  );
};

export default Section;
