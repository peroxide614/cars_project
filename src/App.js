import React from 'react';
import './App.css';
import firstcar from './image/car_1.png';
import secondcar from './image/car_2.png';
import thirdcar from './image/car_3.jpg';
import fourthcar from './image/car_4.png';
import fifthcar from './image/car_5.png';
import sixthcar from './image/car_6.png';
import seventhcar from './image/car_7.png';
import siemens from './image/siemens_logo.png';
import nickelodeon from './image/nickelodeon_logo.png';
import ogilvy from './image/ogilvy_logo.png';
import snowflake from './image/snowflake_logo.png';
import forbes from './image/forbes_logo.png';
import dyson from './image/dyson_logo.png';
import firsticon from './image/icon_1.png';
import secondicon from './image/icon_2.png';
import thirdicon from './image/icon_3.png';
import lambo from './image/lambo.png';
import passat from './image/passat.png';
import chevrolet from './image/chevrolet.png';
// import differenticon from './image/icon_5.png';

function App() {
  return (
    <div className="full-page">
      <div className="first-part">
        <div className="title-rent"> Time For Rent</div>
        <div className="intro-rent">
          Find the best deals for budget and luxury / sports car rentals,
          chauffeur service and driver on hire service. Headquartered in Dubai,
          our services are available in select citires across the globe.
        </div>
        <div className="cars-element">
          <div className="first-block">
            <img className="cubed-car" src={firstcar} alt="heart image"></img>
          </div>
          <div className="second-block">
            <div>
              <img className="rect-car" src={secondcar} alt="car"></img>
            </div>
            <div>
              <img className="cubed-car" src={thirdcar} alt="car"></img>
            </div>
          </div>
          <div>
            <img className="biggest-car" src={fourthcar} alt="car"></img>
          </div>
          <div className="fourth-block">
            <div>
              <img className="cubed-car" src={fifthcar} alt="car"></img>
            </div>
            <div>
              <img className="rect-car" src={sixthcar} alt="car"></img>
            </div>
          </div>
          <div className="fifth-block">
            <img className="cubed-car" src={seventhcar} alt="car"></img>
          </div>
        </div>
        <div className="logos-element">
          <img className="siemens_logo" src={siemens} alt="car"></img>
          <img className="nickelodeon_logo" src={nickelodeon} alt="car"></img>
          <img className="ovilvy_logo" src={ogilvy} alt="car"></img>
          <img className="snowflake_logo" src={snowflake} alt="car"></img>
          <img className="forbes_logo" src={forbes} alt="car"></img>
          <img className="dyson_logo" src={dyson} alt="car"></img>
        </div>
        <div className="time-rent">Why Time To Rent</div>
        <div className="benefits-element">
          <div className="benefits-block">
            <div className="logo-and-circle">
              <img src={firsticon}></img>
            </div>
            <div className="statement">Diversity</div>
            <div className="statement-continue">
              We guarantee that you will find the best car for your trip thanks
              to special offers from 800+ suppliers.
            </div>
          </div>
          <div className="benefits-block">
            <div className="logo-and-circle">
              <img src={secondicon}></img>
            </div>
            <div className="statement">Value for Money</div>
            <div className="statement-continue">
              We are happy to offer our customers the best prices due to having
              access to discounts provided by rental companies.
            </div>
          </div>
          <div className="benefits-block">
            <div className="logo-and-circle">
              <img src={thirdicon}></img>
            </div>
            <div className="statement">Experience & Expertise</div>
            <div className="statement-continue">
              With over a decade on the market, we are one of the most
              experienced and trusted experts in the car rental field.
            </div>
          </div>
        </div>
      </div>
      <div className="second-part">
        <div className="cars-and-text">
          <div className="second-cars-block">
            <div className="first-block-of-cars">
              <img className="lambo" src={lambo} alt="heart image"></img>
            </div>
            <div className="second-block-of-cars">
              <div>
                <img className="passat" src={passat} alt="heart image"></img>
              </div>
              <div>
                <img
                  className="chevrolet"
                  src={chevrolet}
                  alt="heart image"
                ></img>
              </div>
            </div>
          </div>
          <div className="text-and-slogans">
            <div className="big-chunk-of-text">
              <p>
                At Time to Rent, our mission is to transform the car rental
                experience by delivering exceptional service, a diverse vehicle
                selection, and a commitment to safety, sustainabillity, and
                value.
              </p>
              <p>
                We aim to provide every customer with a seamelss and enjoyable
                rental journey, ensuring reliable and eco-friendly options
                tailored to their needs. Join us and experience a superior way
                to rent a car, where your satisfaciton is our top priority.
              </p>
            </div>
            <ul className="slogans">
              <li className="slogans-list">
                Provide Exceptional Customer Service
              </li>
              <li className="slogans-list">Offer a Wide Range of Vehicles</li>
              <li className="slogans-list">Ensure Safety and Reliabillity</li>
              <li className="slogans-list">Promote Sustainabillity</li>
            </ul>
            <button className="explore-button">
              <div className="icon-button"></div>
              <div>Explore Our Cars</div>
            </button>
          </div>
        </div>
        <div className="batch-of-blocks">
          <ol className="horizontal-list">
            <li className="slogan-from-blocks">
              <div className="rounded-number">1</div>
              <div className="title">There are Three ways to book</div>
              <div>
                <ul className="list">
                  <li className="list-element">Reserve Directly via Online</li>
                  <li className="list-element">
                    Reserve Directly via Phone Call
                  </li>
                  <li className="list-element">
                    Reserve Directly via WhatsApp
                  </li>
                </ul>
              </div>
            </li>
            <li className="slogan-from-blocks">
              <div className="rounded-number">2</div>
              <div className="title">Select/Indicate the following:</div>
              <div>
                <ul className="list">
                  <li className="list-element">Reserve Directly via Online</li>
                  <li className="list-element">
                    Reserve Directly via Phone Call
                  </li>
                  <li className="list-element">
                    Reserve Directly via WhatsApp
                  </li>
                </ul>
              </div>
            </li>
            <li className="slogan-from-blocks ">
              <div className="rounded-number">3</div>
              <div className="title">Enjoy your ride!</div>
              <span>
                Inspect the vehicle and take a video for reference upon renting.
                Sign the contract and complete the necessary payments, including
                the rental fee and any applicable deposit.
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
export default App;
