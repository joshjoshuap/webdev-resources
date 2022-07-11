import Header from './sections/Header';
import FrontEnd from './sections/Frontend';
import Backend from './sections/Backend';

const HomePage = () => {
  return (
    <>
      <Header />
      <div id='main' className="container-2">
        <FrontEnd />
        <Backend />
      </div>
    </>
  );
};

export default HomePage;
