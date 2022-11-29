import "./App.css";
import slika1 from "./assets/images/01.jpeg";
import slika2 from "./assets/images/02.jpeg";
import slika3 from "./assets/images/03.jpeg";
import slika4 from "./assets/images/04.jpeg";
import slika5 from "./assets/images/05.jpeg";
import slika6 from "./assets/images/06.jpeg";
import person from "./assets/images/person.jpeg";
import facebook from "./assets/images/facebook.png";
import twitter from "./assets/images/twitter.png";
import instagram from "./assets/images/instagram.png";

function App() {
  return (
    <>
      <div class="background">
        <div class="header w80">
          <div class="logo">
            <a href="#">BLISS</a>
          </div>
          <div>
            <ul>
              <li>
                <a href="#" class="home">
                  home
                </a>
              </li>
              <li>
                <a href="#">menu</a>
              </li>
              <li>
                <a href="#">reservation</a>
              </li>
              <li>
                <a href="#">blogs</a>
              </li>
              <li>
                <a href="#">contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container1 w80">
        <div>
          <img src={slika1} />
        </div>
        <div class="KVM">
          <p>
            Kid's & Vegan
            <br />
            Menu
          </p>
        </div>
        <div>
          <img src={slika3} />
        </div>
        <div class="KVM">
          <p>
            Kid's & Vegan
            <br />
            Menu
          </p>
        </div>
        <div>
          <img src={slika2} />
        </div>
        <div class="KVM">
          <p>
            Kid's & Vegan
            <br />
            Menu
          </p>
        </div>
      </div>
      <div class="container2 w80">
        <div class="card">
          <div class="circle">1.</div>
          <div class="card-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              maxime accusantium eveniet explicabo id et incidunt nihil labore
              quisquam tenetur?Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Debitis, odio?
            </p>
            <a href="#" class="btn">
              more
            </a>
          </div>
        </div>
        <div class="card">
          <div class="circle">2.</div>
          <div class="card-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              maxime accusantium eveniet explicabo id et incidunt nihil labore
              quisquam tenetur?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nobis, fugiat.
            </p>
            <a href="#" class="btn">
              more
            </a>
          </div>
        </div>
        <div class="card">
          <div class="circle">3.</div>
          <div class="card-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              maxime accusantium eveniet explicabo id et incidunt nihil labore
              quisquam tenetur?Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Aperiam, consequuntur.
            </p>
            <a href="#" class="btn">
              more
            </a>
          </div>
        </div>
      </div>
      <div class="container3 w80">
        <div>
          <h1>Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            excepturi sequi magnam quam expedita tempore. Ipsum cupiditate saepe
            laborum quod voluptas autem, quisquam minima laudantium voluptatibus
            rerum dolore nostrum quaerat!
          </p>
          <a href="#" class="btn">
            more
          </a>
        </div>
        <div>
          <h1>Feel the Savor of Life</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, minus
            quasi suscipit explicabo voluptatum corrupti veniam quo fuga unde
            labore laboriosam cumque repudiandae quia quidem beatae enim
            delectus qui pariatur?
          </p>
          <a href="#" class="btn">
            more
          </a>
        </div>
      </div>
      <div>
        <h2 class="w80">Dishes for You to Try</h2>
      </div>
      <div class="container4 w80">
        <div>
          <img src={slika4} />
        </div>
        <div>
          <img class="vtora" src={slika5} />
        </div>
        <div>
          <img src={slika6} />
        </div>
      </div>
      <div class="container5 w80">
        <div>
          <h2>Testimonials</h2>
          <img src={person} />
          <div>
            <h3>Mark Wood</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <p class="testi-text">Testimonials</p>
        </div>
        <div>
          <h2>What's new</h2>
          <div class="whatsnew">
            <div class="datum">
              11
              <br />
              June
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
              qui.
            </p>
          </div>
          <div class="whatsnew">
            <div class="datum">
              15
              <br />
              Apr
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Expedita, sint?
            </p>
          </div>
        </div>
        <div class="opening">
          <h2>Opening Hours</h2>
          <div class="datum last">Breakfast: 8AM-11AM</div>
          <div class="datum last">Grill Menu: 12AM-12PM</div>
          <div class="datum last">Live Music: 8AM-11AM</div>
        </div>
      </div>
      <div class="background">
        <div class="footer w80">
          <div class="link">
            <a href="www.facebook.com" target="_blank">
              <img src={facebook} />
            </a>
          </div>
          <div class="link">
            <a href="www.twitter.com" target="_blank">
              <img src={twitter} />
            </a>
          </div>
          <div class="link">
            <a href="www.instagram.com" target="_blank">
              <img src={instagram} />
            </a>
          </div>
          <div class="link">
            <a href="#">
              <img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
