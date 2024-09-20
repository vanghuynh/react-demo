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

      <div className='row'>
        <div className='col'>
          <p class='d-inline-flex gap-1'>
            <a
              class='btn btn-primary'
              data-bs-toggle='collapse'
              href='#collapseExample'
              role='button'
              aria-expanded='false'
              aria-controls='collapseExample'
            >
              Link with href
            </a>
            <button
              class='btn btn-primary'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseExample'
              aria-expanded='false'
              aria-controls='collapseExample'
            >
              Button with data-bs-target
            </button>
          </p>
          <div class='collapse' id='collapseExample'>
            <div class='card card-body'>
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </div>
      </div>

      <div className='row text-center mb-3'>
        <div className='col'>Student Detail</div>
      </div>
      <div className='row justify-content-between'>
        <div className='col'>
          <img src={event1} alt='...' />
        </div>
        <div className='col'>
          <img src={event1} alt='...' />
        </div>
      </div>

      <div className='row'>
        <div class='accordion accordion-flush' id='accordionFlushExample'>
          <div class='accordion-item'>
            <h2 class='accordion-header'>
              <button
                class='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseOne'
                aria-expanded='false'
                aria-controls='flush-collapseOne'
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id='flush-collapseOne'
              class='accordion-collapse collapse'
              data-bs-parent='#accordionFlushExample'
            >
              <div class='accordion-body'>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
          <div class='accordion-item'>
            <h2 class='accordion-header'>
              <button
                class='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseTwo'
                aria-expanded='false'
                aria-controls='flush-collapseTwo'
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id='flush-collapseTwo'
              class='accordion-collapse collapse'
              data-bs-parent='#accordionFlushExample'
            >
              <div class='accordion-body'>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div class='accordion-item'>
            <h2 class='accordion-header'>
              <button
                class='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseThree'
                aria-expanded='false'
                aria-controls='flush-collapseThree'
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id='flush-collapseThree'
              class='accordion-collapse collapse'
              data-bs-parent='#accordionFlushExample'
            >
              <div class='accordion-body'>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <button
            type='button'
            class='btn btn-secondary'
            data-bs-toggle='tooltip'
            data-bs-placement='top'
            data-bs-title='Tooltip on top'
          >
            Tooltip on top
          </button>
          <button
            type='button'
            class='btn btn-secondary'
            data-bs-toggle='tooltip'
            data-bs-placement='right'
            data-bs-title='Tooltip on right'
          >
            Tooltip on right
          </button>
          <button
            type='button'
            class='btn btn-secondary'
            data-bs-toggle='tooltip'
            data-bs-placement='bottom'
            data-bs-title='Tooltip on bottom'
          >
            Tooltip on bottom
          </button>
          <button
            type='button'
            class='btn btn-secondary'
            data-bs-toggle='tooltip'
            data-bs-placement='left'
            data-bs-title='Tooltip on left'
          >
            Tooltip on left
          </button>
        </div>
      </div>
      <div className='row'>
        <button
          type='button'
          class='btn btn-primary'
          data-bs-toggle='modal'
          data-bs-target='#exampleModal'
        >
          Launch demo modal
        </button>

        <div
          class='modal fade'
          id='exampleModal'
          tabindex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h1 class='modal-title fs-5' id='exampleModalLabel'>
                  Modal title
                </h1>
                <button
                  type='button'
                  class='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div class='modal-body'>...</div>
              <div class='modal-footer'>
                <button
                  type='button'
                  class='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
                <button type='button' class='btn btn-primary'>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <nav>
          <div class='nav nav-tabs' id='nav-tab' role='tablist'>
            <button
              class='nav-link active'
              id='nav-home-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-home'
              type='button'
              role='tab'
              aria-controls='nav-home'
              aria-selected='true'
            >
              Home
            </button>
            <button
              class='nav-link'
              id='nav-profile-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-profile'
              type='button'
              role='tab'
              aria-controls='nav-profile'
              aria-selected='false'
            >
              Profile
            </button>
            <button
              class='nav-link'
              id='nav-contact-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-contact'
              type='button'
              role='tab'
              aria-controls='nav-contact'
              aria-selected='false'
            >
              Contact
            </button>
            <button
              class='nav-link'
              id='nav-disabled-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-disabled'
              type='button'
              role='tab'
              aria-controls='nav-disabled'
              aria-selected='false'
              disabled
            >
              Disabled
            </button>
          </div>
        </nav>
        <div class='tab-content' id='nav-tabContent'>
          <div
            class='tab-pane fade show active'
            id='nav-home'
            role='tabpanel'
            aria-labelledby='nav-home-tab'
            tabindex='0'
          >
            Tab 1
          </div>
          <div
            class='tab-pane fade'
            id='nav-profile'
            role='tabpanel'
            aria-labelledby='nav-profile-tab'
            tabindex='0'
          >
            Tab 2
          </div>
          <div
            class='tab-pane fade'
            id='nav-contact'
            role='tabpanel'
            aria-labelledby='nav-contact-tab'
            tabindex='0'
          >
            Tab 3
          </div>
          <div
            class='tab-pane fade'
            id='nav-disabled'
            role='tabpanel'
            aria-labelledby='nav-disabled-tab'
            tabindex='0'
          >
            ...
          </div>
        </div>
      </div>
      <div className='row'>
        <div class='row g-3'>
          <div class='col-sm    '>
            <input
              type='text'
              class='form-control'
              placeholder='City'
              aria-label='City'
            />
          </div>
          <div class='col-sm'>
            <input
              type='text'
              class='form-control'
              placeholder='State'
              aria-label='State'
            />
          </div>
          <div class='col-sm'>
            <input
              type='text'
              class='form-control'
              placeholder='Zip'
              aria-label='Zip'
            />
          </div>
        </div>
      </div>
      <div className='row'>
        <div class='mb-3 mt-3'>
          <textarea
            class='form-control'
            id='exampleFormControlTextarea1'
            rows='3'
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
