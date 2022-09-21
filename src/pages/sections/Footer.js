const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <footer>
      <p className="footer-copyright">&copy; Copyright {year} </p>
      <p>
        <a href="https://joshjoshuap.vercel.app/" className="footer-link" target="_blank">
          Build By: Joshua Pautanes
        </a>
      </p>
    </footer>
  );
};

export default Footer;
