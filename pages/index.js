import Header from './sections/Header';
import FrontEnd from './sections/Frontend';
import Backend from './sections/Backend';

const HomePage = () => {
  return (
    <>
      <Header />
      <div id="main">
        <FrontEnd />
        <Backend />
      </div>
    </>
  );
};

export default HomePage;
