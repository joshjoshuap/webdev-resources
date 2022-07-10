import Image from 'next/image';
import NodeIcon from '../../public/images/nodejs-icon.svg';
import ExpressIcon from '../../public/images/expressjs-icon.svg';
import MongoDBIcon from '../../public/images/mongodb-icon.svg';

const Backend = () => {
  return (
    <section id="backend">
      <h1 class="section-title">BACK END DEVELOPMENT</h1>
      <div class="card-container">
        {/* NodeJS */}
        <div class="card-item">
          <div class="card-image">
            <Image src={NodeIcon} height={80} width={80} alt="HTML 5 Icon" />
          </div>
          <div class="card-description">
            <ul>
              <li>
                <a
                  href="https://nodejs.org/dist/latest-v16.x/docs/api/"
                  target="_blank"
                  class="card-link">
                  Node JS v16
                </a>
              </li>
              <li>
                <a href="https://www.npmjs.com/" target="_blank" class="card-link">
                  NPM
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://github.com/goldbergyoni/nodebestpractices?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more"
                  target="_blank"
                  class="card-link">
                  Node Best Practices
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sindresorhus/awesome-nodejs"
                  target="_blank"
                  class="card-link">
                  Awesome NodeJS
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Express JS */}
        <div class="card-item">
          <div class="card-image">
            <Image src={ExpressIcon} height={80} width={150} alt="HTML 5 Icon" />
          </div>
          <div class="card-description">
            <ul>
              <li>
                <a href="https://expressjs.com/en/4x/api.html" target="_blank" class="card-link">
                  Express JS
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://restfulapi.net/" target="_blank" class="card-link">
                  Rest API
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* MongoDB */}
        <div class="card-item">
          <div class="card-image">
            <Image src={MongoDBIcon} height={80} width={150} alt="HTML 5 Icon" />
          </div>
          <div class="card-description">
            <ul>
              <li>
                <a
                  href="https://www.mongodb.com/docs/manual/introduction/l"
                  target="_blank"
                  class="card-link">
                  MongoDB
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://mongoosejs.com/docs/guide.html" target="_blank" class="card-link">
                  Mongoose
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Backend;
