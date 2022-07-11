import Header from './sections/Header';
import FrontEnd from './sections/Frontend';
import Backend from './sections/Backend';
import FullStack from './sections/Fullstack';

const HomePage = () => {
  return (
    <>
      <Header />
      <div id="main">
        <FrontEnd />
        <Backend />
        <FullStack />
      </div>
    </>
  );
};

export default HomePage;
