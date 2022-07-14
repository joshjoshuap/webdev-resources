import Header from './sections/Header';
import FrontEnd from './sections/Frontend';
import Backend from './sections/Backend';
import FullStack from './sections/Fullstack';
import Tools from './sections/Tools';
import Footer from './sections/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <div id="main">
        <FrontEnd />
        <Backend />
        <FullStack />
        <Tools />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
