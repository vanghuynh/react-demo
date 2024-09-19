import event1 from './images/event-1.jpg';
import event2 from './images/event-2.jpg';
import event3 from './images/event-2.jpg';
import pizza1 from './images/pizza1.jpg';
import pizza2 from './images/pizza2.jpg';
import pizza3 from './images/pizza3.jpg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className='container'>
      <div className='row justify-content-between'>
        <div className='col'>
          <nav class='navbar navbar-expand-lg bg-body-tertiary'>
            <div class='container-fluid'>
              <a class='navbar-brand' href='#'>
                Navbar
              </a>
              <button
                class='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span class='navbar-toggler-icon'></span>
              </button>
              <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                  <li class='nav-item'>
                    <a class='nav-link active' aria-current='page' href='#'>
                      Home
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>
                      Link
                    </a>
                  </li>
                  <li class='nav-item dropdown'>
                    <a
                      class='nav-link dropdown-toggle'
                      href='#'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Dropdown
                    </a>
                    <ul class='dropdown-menu'>
                      <li>
                        <a class='dropdown-item' href='#'>
                          Action
                        </a>
                      </li>
                      <li>
                        <a class='dropdown-item' href='#'>
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr class='dropdown-divider' />
                      </li>
                      <li>
                        <a class='dropdown-item' href='#'>
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link disabled' aria-disabled='true'>
                      Disabled
                    </a>
                  </li>
                </ul>
                <form class='d-flex' role='search'>
                  <input
                    class='form-control me-2'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                  />
                  <button class='btn btn-outline-success' type='submit'>
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className='row justify-content-center mb-3'>
        <div className='col'>
          <div id='carouselExample' class='carousel slide'>
            <div class='carousel-inner'>
              <div class='carousel-item active'>
                <img src={pizza1} class='d-block w-100' alt='...' />
                <div class='carousel-caption d-none d-md-block'>
                  <h5>Neapolitan Pizza</h5>
                  <p>
                    If you are looking for a traditional Italian pizza.
                    Neapolitan is the best option.
                  </p>
                </div>
              </div>
              <div class='carousel-item'>
                <img src={pizza2} class='d-block w-100' alt='...' />
                <div class='carousel-caption d-none d-md-block'>
                  <h5>Neapolitan Pizza</h5>
                  <p>
                    If you are looking for a traditional Italian pizza.
                    Neapolitan is the best option.
                  </p>
                </div>
              </div>
              <div class='carousel-item'>
                <img src={pizza3} class='d-block w-100' alt='...' />
                <div class='carousel-caption d-none d-md-block'>
                  <h5>Neapolitan Pizza</h5>
                  <p>
                    If you are looking for a traditional Italian pizza.
                    Neapolitan is the best option.
                  </p>
                </div>
              </div>
            </div>
            <button
              class='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExample'
              data-bs-slide='prev'
            >
              <span
                class='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span class='visually-hidden'>Previous</span>
            </button>
            <button
              class='carousel-control-next'
              type='button'
              data-bs-target='#carouselExample'
              data-bs-slide='next'
            >
              <span
                class='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span class='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className='row justify-content-between mb-3'>
        <div className='col'>
          <div className='card'>
            <img src={event1} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' className='btn btn-primary'>
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <img src={event2} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' className='btn btn-primary'>
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <img src={event3} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' className='btn btn-primary'>
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <div className='card'>
            <img src={event2} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' className='btn btn-primary'>
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <div className='card-body'>
              <div className='mb-3'>
                <label
                  htmlFor='exampleFormControlInput1'
                  className='form-label'
                >
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleFormControlInput1'
                  placeholder='name@example.com'
                />
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='exampleFormControlTextarea1'
                  className='form-label'
                >
                  Example textarea
                </label>
                <textarea
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
