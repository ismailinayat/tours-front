import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';


export default function Home() {
  return (
    <div className='app'>
      <Head>
        
        <title>Natours | Exciting tours For adventurous people</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      

      
        <meta charset="UTF-8"/>

        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet"/>

        <link rel="stylesheet" href="css/icon-font.css"/> 
        <link rel="stylesheet" href="css/icon-fonts.css"/>
        <link rel="stylesheet" href="css/styles.css"/>
        <link rel="shortcut icon" type="image/png" href="img/favicon.png"/>

      </Head>
    

          
          <header className="header">

            <div className="header__text-box">
              <h1 className="heading-primary">                                                    

                <span className="heading-primary--main">outdoors</span>
                <span className="heading-primary--sub1">is where life happens</span>

              </h1>
              <Link href='/tours'>
                <a className="btn btn--white btn--animated">discover our tours</a>         
              </Link>

            </div>
          </header>

          <main>                                                                                
            
            

            <section className="section-about">

              <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                  Exciting tours For adventurous people
                </h2>
              </div>

              <div className="about__container">

                <div className="about__container--left">
                  <h3 className="heading-tertiary u-margin-bottom-small">You are going to fall in love with nature</h3>
                  <p className="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore aliquid architecto, eveniet, reiciendis, itaque officia soluta excepturi non illum similique esse omnis vero ut aut laboriosam quisquam! A, eaque!</p>
                  <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                  <p className="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque recusandae voluptates autem architecto soluta est nam enim tempore molestias laboriosam.</p>
                  <a href="#" className="btn-text">Learn More &rarr;</a>
                </div>

                <div className="about__container--right">
                  <div className="composition">
                    <img src="img/nat-1-large.jpg" alt="Photo 1" className="composition__photo composition__photo--p1"/>
                    <img src="img/nat-2-large.jpg" alt="Photo 2" className="composition__photo composition__photo--p2"/>
                    <img src="img/nat-3-large.jpg" alt="Photo 3" className="composition__photo composition__photo--p3"/>
                  </div>
                </div>
                
              </div>

            </section>

        
            <section className="section-feature">

              <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary feature__heading">
                  Features that you won't be able to ignore
                </h2>
              </div>
              <div className="row-skew feature__container">
                <div className="feature">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-world"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                    <p className="feature-box__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore aliquid architecto eveniet, reiciendis,</p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-compass"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">Meet Nature</h3>
                    <p className="feature-box__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore aliquid architecto eveniet, reiciendis,</p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-map"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">Find you way</h3>
                    <p className="feature-box__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore aliquid architecto eveniet, reiciendis,</p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-box">
                    <i className="feature-box__icon icon-basic-heart"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">live a healthier life</h3>
                    <p className="feature-box__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore aliquid architecto eveniet, reiciendis,</p>
                  </div>
                </div>
              </div>
              

            </section>


            <section className="section-tours" id="section-tours">


              <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                  most popular tours
                </h2>
              </div>

              <div className="tours">

                <div className="tour">
                  <div className="card">
                    <div className="card__side card__side--front">
                      <div className="card__pictures card__pictures--1">
                        &nbsp;
                      </div>
                      <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--1">
                          The Sea Explorer
                        </span>
                      </h4>
                      <div className="card__details">
                        <ul>
                          <li>3 day tour</li>
                          <li>Up to 30 people</li>
                          <li>2 tour guides</li>
                          <li>Sleep in cozy hotels</li>
                          <li>Difficulty: very easy</li>  
                        </ul>
                      </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-1">
                      <div className="card__cta">
                        <div className="card__price-box">
                          <p className="card__price-only">Only</p>
                          <p className="card__price-value">$297</p>
                        </div>
                        <a href="#popup" className="btn btn--white">Book Now!</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tour">
                  <div className="card">
                    <div className="card__side card__side--front">
                      <div className="card__pictures card__pictures--2">
                        &nbsp;
                      </div>
                      <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--2">
                          The Sea Explorer
                        </span>
                      </h4>
                      <div className="card__details">
                        <ul>
                          <li>7 day tour</li>
                          <li>Up to 40 people</li>
                          <li>6 tour guides</li>
                          <li>Sleep in provided tents</li>
                          <li>Difficulty: medium</li>  
                        </ul>
                      </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-2">
                      <div className="card__cta">
                        <div className="card__price-box">
                          <p className="card__price-only">Only</p>
                          <p className="card__price-value">$597</p>
                        </div>
                        <a href="#popup" className="btn btn--white">Book Now!</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tour">
                  <div className="card">
                    <div className="card__side card__side--front">
                      <div className="card__pictures card__pictures--3">
                        &nbsp;
                      </div>
                      <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--3">
                          The Sea Explorer
                        </span>
                      </h4>
                      <div className="card__details">
                        <ul>
                          <li>5 day tour</li>
                          <li>Up to 15 people</li>
                          <li>3 tour guides</li>
                          <li>Sleep in provided tents</li>
                          <li>Difficulty: Hard</li>  
                        </ul>
                      </div>
                    </div>
                    <div className="card__side card__side--back card__side--back-3">
                      <div className="card__cta">
                        <div className="card__price-box">
                          <p className="card__price-only">Only</p>
                          <p className="card__price-value">$897</p>
                        </div>
                        <a href="#popup" className="btn btn--white">Book Now!</a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="u-center-text u-margin-top-huge">
              <Link href='/tours'>
                <a href="#" className="btn btn--green">Discover all tours</a>
              </Link>
              </div>

            </section>

    

            <section className="section-stories">

              <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                  <source src="../img/video.mp4" type="video/mp4"/>
                  <source src="../img/video.webm" type="video/webm"/>
                  Your browser is not supported!
                </video>
              </div>

              <div className="u-margin-bottom-big u-center-text">
                <h2 className="heading-secondary">we make people genuinely happy</h2>
              </div>
            
              <div className="story__container">
                <div className="story">
                  <figure className="story__shape">
                    <img src="../img/nat-8.jpg" alt="Image of the story person" className="story__img"/>
                    <fig-caption className="story__caption">
                      Marry Smith
                    </fig-caption>
                  </figure>
                  

                  <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      I had the best week ever with my family
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolore illum saepe, excepturi repellat amet debitis distinctio quasi asperiores totam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolore illum saepe, excepturi repellat amet debitis distinctio quasi asperiores totam!
                    </p>
                  </div>


                </div>

                
              </div>

              <div className="story__container">
                <div className="story">
                  <figure className="story__shape">
                    <img src="../img/nat-9.jpg" alt="Image of the story person" className="story__img"/>
                    <fig-caption className="story__caption">
                      Marry Smith
                    </fig-caption>
                  </figure>
                  

                  <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      Completely changed by life
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolore illum saepe, excepturi repellat amet debitis distinctio quasi asperiores totam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolore illum saepe, excepturi repellat amet debitis distinctio quasi asperiores totam!
                    </p>
                  </div>

                </div>
                <div className="u-margin-top-big u-center-text">
                  <a href="#" className="btn-text">Discover all stories &rarr;</a>
                </div>

              </div>
            </section>

            <section className="section-book">

              <div className="booking__container">

                <div className="book">

                  <div className="book__form">
                    <h2 className="heading-secondary">
                      Start booking now
                    </h2>

                    <form action="#" className="form">

                      <div className="form__group">
                        <input type="text" className="form__input" id="name" placeholder="Full Name" required/>
                        <label htmlFor="name" className="form__label">Full Name</label>
                      </div>

                      <div className="form__group">
                        <input type="email" className="form__input" id="email" placeholder="Email address" required/>
                        <label htmlFor="email" className="form__label">Email address</label>
                      </div>

                      <div className="radio__container">

                        <div className="form__group">
                          <div className="form__radio-group">
                            <input type="radio" className="form__radio-input" id="small" name="radio"/>
                            <label htmlFor="small" className="form__radio-label"><span className="form__radio-button"></span>Small tour group</label>
                          </div>
                          <div className="form__radio-group">
                            <input type="radio" className="form__radio-input" id="large" name="radio"/>
                            <label htmlFor="large" className="form__radio-label"><span className="form__radio-button"></span> Large tour group</label>
                          </div>
                        </div>
                      </div>

                      <button className="btn btn--green u-margin-top-medium">Next Step &rarr;</button>

                    </form>

                  </div>


                </div>
              </div>
            </section>

            

            <div className="popup" id="popup">

              <div className="popup__content">
                <a href="#section-tours" className="popup__close">&times;</a>
                <div className="popup__left">
                  <img src="img/nat-8.jpg" alt="" className="popup__img"/>
                  <img src="img/nat-9.jpg" alt="" className="popup__img"/>
                </div>
                <div className="popup__right">

                  <h2 className="heading-secondary u-margin-bottom-small">Start Booking Now</h2>
                  <h3 className="heading__tertiary u-margin-bottom-small">Important &ndash; Please read the terms before booking</h3>
                  <p className="popup__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse amet iusto, nemo dolorem animi incidunt officia in saepe cum itaque non doloremque officiis debitis sequi nesciunt sint asperiores fugiat ex! ipsum dolor sit, amet consectetur adipisicing elit. Et necessitatibus rerum officia cupiditate velit, maxime sit molestiae dignissimos totam quidem quasi tempora repellendus corporis. Beatae repellat neque sunt pariatur. Delectus id est nihil tenetur ratione deleniti impedit repudiandae, aut facilis eius vitae distinctio dolorem nemo pariatur possimus repellat nisi? Ipsa, sit doloribus porro, maiores sunt adipisci neque dolorem voluptate, quo libero facilis commodi. Laborum libero autem reprehenderit harum est aperiam velit sint voluptas temporibus quisquam iusto quo illum excepturi facere at tempore, repellendus eos sunt numquam modi dicta ipsum rem molestias mollitia. Eum voluptatum nostrum placeat consectetur, aut non ea.</p>
                  <a href="#" className="btn btn--green u-margin-top-medium">BOOK NOW</a>
                </div>
              </div>
            </div>

   
          </main>

      

    </div>
  )
}
