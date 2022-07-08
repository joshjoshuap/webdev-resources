import Image from 'next/image';
import HTMLLogo from '../public/images/html5-logo.svg';
import CSSLogo from '../public//images/css3-logo.svg';
import JSLogo from '../public//images/javascript-logo.svg';

const HomePage = () => {
  return (
    <>
      <header>
        <h1 class="header-title"> WEB DEVELOPER ROADMAP </h1>
        <p class="header-description">
          My Personal roadmap and guide to learn and study web development. Contains Links, websites
          and sample projects
        </p>

        <a href="#navigation" class="header-btn">
          Lets Study
        </a>
      </header>
      <nav id="navigation">
        <a href="#frontend" class="navigation-btn">
          FRONT END
        </a>
        <a href="#backend" class="navigation-btn">
          BACKEND END
        </a>
        <a href="#fullstack" class="navigation-btn">
          FULLSTACK
        </a>
        <a href="#challenges" class="navigation-btn">
          CHALLENGES
        </a>
        <a href="#tools" class="navigation-btn">
          TOOLS
        </a>
      </nav>
      <section id="frontend">
        <h1 class="section-title">FRONT END DEVELOPMENT</h1>
        <div class="card-container">
          {/* HTML */}
          <div class="card-item">
            <div class="card-image">
              <Image src={HTMLLogo} height={80} width={80} alt="HTML 5 Logo" />
            </div>
            <div class="card-description">
              <ul>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    target="_blank"
                    class="card-link">
                    MDN Web HTML
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="https://www.w3schools.com/html/default.asp"
                    target="_blank"
                    class="card-link">
                    W3School HTML
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* CSS */}
          <div class="card-item">
            <div class="card-image">
              <Image src={CSSLogo} height={80} width={80} alt="HTML 5 Logo" />
            </div>
            <div class="card-description">
              <ul>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                    class="card-link">
                    MDN Web CSS
                  </a>
                </li>
                <li>
                  <a href="https://cssreference.io/" target="_blank" class="card-link">
                    CSS Reference
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="https://www.w3schools.com/css/default.asp"
                    target="_blank"
                    class="card-link">
                    W3School CSS
                  </a>
                </li>
                <li>
                  <a href="https://css-tricks.com/" target="_blank" class="card-link">
                    CSS Tricks
                  </a>
                </li>
              </ul>
            </div>
          </div>

           {/* Javascript */}
           <div class="card-item">
            <div class="card-image">
              <Image src={JSLogo} height={80} width={80} alt="HTML 5 Logo" />
            </div>
            <div class="card-description">
              <ul>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    class="card-link">
                    MDN Web Javascript
                  </a>
                </li>
                <li>
                  <a href="https://eloquentjavascript.net/" target="_blank" class="card-link">
                    Eloquent Javascript
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="https://www.w3schools.com/js/default.asp"
                    target="_blank"
                    class="card-link">
                    W3School Javascript
                  </a>
                </li>
                <li>
                  <a href="https://github.com/rwaldron/idiomatic.js" target="_blank" class="card-link">
                    Idiomatic Javascript
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="backend">
        <h1 class="section-title">BACK END DEVELOPMENT</h1>
      </section>
    </>
  );
};

export default HomePage;
