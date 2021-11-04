import React from 'react'
import axios from 'axios';
import {useQuery} from 'react-query';
import Link from 'next/link';

const fetchTours = async () => {
  const {data} = await axios.get('https://tours-explorer.herokuapp.com/api/v1/tours', {withCredentials: true});
  console.log(data)
  return data.data.data;
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts

  const tours = await fetchTours()
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      tours,
    },
  }
}

function AllTours() {

  let {data, error, isLoading, isError} = useQuery('allTours', fetchTours);
  console.log(data)
  console.log(error)
  console.log(isLoading)

   return (
        <div>
            <main className="main">

              <div className="cardt-container">

                {data ? data.map(tour => 
                  (
                    <div className="cardt" key={tour._id}>
                  <div className="cardt__header">
                    <div className="cardt__picture">
                      <div className="cardt__picture-overlay">&nbsp;</div>
                      <img
                        src={`img/${tour.imageCover}`}
                        alt="Tour 1"
                        className="cardt__picture-img"
                      />
                    </div>

                    <h3 className="heading-tertirary">
                      <span>{tour.name}</span>
                    </h3>
                  </div>

                  <div className="cardt__details">
                    <h4 className="cardt__sub-heading">{`${tour.difficulty} ${tour.duration}-DAY TOUR`}</h4>
                    <p className="cardt__text">
                      {tour.summary}
                    </p>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-map-pin"></use>
                      </svg>
                      <span>{tour.startLocation.description}</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-calendar"></use>
                      </svg>
                      <span>April 2021</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-flag"></use>
                      </svg>
                      <span>{`${tour.locations.length} stops`}</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-user"></use>
                      </svg>
                      <span>{`${tour.maxGroupSize} people`}</span>
                    </div>
                  </div>

                  <div className="cardt__footer">
                    <p>
                      <span className="cardt__footer-value">{`$${tour.price}`}</span>
                      <span className="cardt__footer-text">per person</span>
                    </p>
                    <p className="cardt__ratings">
                      <span className="cardt__footer-value">{tour.ratingsAverage}</span>
                      <span className="cardt__footer-text">{`rating (${tour.ratingsQuantity})`}</span>
                    </p>
                    <Link href={`tours/${tour._id}`}>
                    <a className="btn btn--green btn--small">Details</a>
                    </Link>
                  </div>
                </div>
                  )
                ): (<div><h1>Loading...</h1></div>)}

                

              </div>
            </main>

    
        </div>
    )
}

export default AllTours
/*

                <div className="cardt">
                  <div className="cardt__header">
                    <div className="cardt__picture">
                      <div className="cardt__picture-overlay">&nbsp;</div>
                      <img
                        src="img/tour-2-cover.jpg"
                        alt="Tour 1"
                        className="cardt__picture-img"
                      />
                    </div>

                    <h3 className="heading-tertirary">
                      <span>The Sea Explorer</span>
                    </h3>
                  </div>

                  <div className="cardt__details">
                    <h4 className="cardt__sub-heading">Medium-difficult 7-day tour</h4>
                    <p className="cardt__text">
                      Exploring the jaw-dropping US east coast by foot and by boat
                    </p>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-map-pin"></use>
                      </svg>
                      <span>Oregon, US</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-calendar"></use>
                      </svg>
                      <span>June 2021</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-flag"></use>
                      </svg>
                      <span>4 stops</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-user"></use>
                      </svg>
                      <span>15 people</span>
                    </div>
                  </div>

                  <div className="cardt__footer">
                    <p>
                      <span className="cardt__footer-value">$497</span>
                      <span className="cardt__footer-text">per person</span>
                    </p>
                    <p className="cardt__ratings">
                      <span className="cardt__footer-value">4.8</span>
                      <span className="cardt__footer-text">rating (12)</span>
                    </p>
                    <a href="#" className="btn btn--green btn--small">Details</a>
                  </div>
                </div>

                <div className="cardt">
                  <div className="cardt__header">
                    <div className="cardt__picture">
                      <div className="cardt__picture-overlay">&nbsp;</div>
                      <img
                        src="img/tour-3-cover.jpg"
                        alt="Tour 1"
                        className="cardt__picture-img"
                      />
                    </div>

                    <h3 className="heading-tertirary">
                      <span>The Snow Adventurer</span>
                    </h3>
                  </div>

                  <div className="cardt__details">
                    <h4 className="cardt__sub-heading">Difficult 3-day tour</h4>
                    <p className="cardt__text">
                      Exciting adventure in the snow with snowboarding and skiing
                    </p>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-map-pin"></use>
                      </svg>
                      <span>Aspen, USA</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-calendar"></use>
                      </svg>
                      <span>January 2022</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-flag"></use>
                      </svg>
                      <span>2 stops</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-user"></use>
                      </svg>
                      <span>10 people</span>
                    </div>
                  </div>

                  <div className="cardt__footer">
                    <p>
                      <span className="cardt__footer-value">$697</span>
                      <span className="cardt__footer-text">per person</span>
                    </p>
                    <p className="cardt__ratings">
                      <span className="cardt__footer-value">4.9</span>
                      <span className="cardt__footer-text">rating (7)</span>
                    </p>
                    <a href="#" className="btn btn--green btn--small">Details</a>
                  </div>
                </div>

                <div className="cardt">
                  <div className="cardt__header">
                    <div className="cardt__picture">
                      <div className="cardt__picture-overlay">&nbsp;</div>
                      <img
                        src="img/tour-4-cover.jpg"
                        alt="Tour 1"
                        className="cardt__picture-img"
                      />
                    </div>

                    <h3 className="heading-tertirary">
                      <span>The City Wanderer</span>
                    </h3>
                  </div>

                  <div className="cardt__details">
                    <h4 className="cardt__sub-heading">Easy 7-day tour</h4>
                    <p className="cardt__text">
                      Living the life of Wanderlust in the US' most beatiful cities
                    </p>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-map-pin"></use>
                      </svg>
                      <span>NYC, USA</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-calendar"></use>
                      </svg>
                      <span>March 2021</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-flag"></use>
                      </svg>
                      <span>3 stops</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-user"></use>
                      </svg>
                      <span>20 people</span>
                    </div>
                  </div>

                  <div className="cardt__footer">
                    <p>
                      <span className="cardt__footer-value">$997</span>
                      <span className="cardt__footer-text">per person</span>
                    </p>
                    <p className="cardt__ratings">
                      <span className="cardt__footer-value">4.8</span>
                      <span className="cardt__footer-text">rating (31)</span>
                    </p>
                    <a href="#" className="btn btn--green btn--small">Details</a>
                  </div>
                </div>

                <div className="cardt">
                  <div className="cardt__header">
                    <div className="cardt__picture">
                      <div className="cardt__picture-overlay">&nbsp;</div>
                      <img
                        src="img/tour-5-cover.jpg"
                        alt="Tour 1"
                        className="cardt__picture-img"
                      />
                    </div>

                    <h3 className="heading-tertirary">
                      <span>The Park Camper</span>
                    </h3>
                  </div>

                  <div className="cardt__details">
                    <h4 className="cardt__sub-heading">Medium-Difficult 10-day tour</h4>
                    <p className="cardt__text">
                      Breathing in Nature in America's most spectacular National Parks
                    </p>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-map-pin"></use>
                      </svg>
                      <span>Las Vegas, USA</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-calendar"></use>
                      </svg>
                      <span>August 2021</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-flag"></use>
                      </svg>
                      <span>4 stops</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-user"></use>
                      </svg>
                      <span>15 people</span>
                    </div>
                  </div>

                  <div className="cardt__footer">
                    <p>
                      <span className="cardt__footer-value">$1,497</span>
                      <span className="cardt__footer-text">per person</span>
                    </p>
                    <p className="cardt__ratings">
                      <span className="cardt__footer-value">4.9</span>
                      <span className="cardt__footer-text">rating (19)</span>
                    </p>
                    <a href="/tour.html" className="btn btn--green btn--small">Details</a>
                  </div>
                </div>

                <div className="cardt">
                  <div className="cardt__header">
                    <div className="cardt__picture">
                      <div className="cardt__picture-overlay">&nbsp;</div>
                      <img
                        src="img/tour-6-cover.jpg"
                        alt="Tour 1"
                        className="cardt__picture-img"
                      />
                    </div>

                    <h3 className="heading-tertirary">
                      <span>The Sports Lover</span>
                    </h3>
                  </div>

                  <div className="cardt__details">
                    <h4 className="cardt__sub-heading">Difficult 14-day tour</h4>
                    <p className="cardt__text">
                      Surfing, skating, parajumping, rock climbing and more, all in one
                      tour
                    </p>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-map-pin"></use>
                      </svg>
                      <span>California, USA</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-calendar"></use>
                      </svg>
                      <span>July 2021</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-flag"></use>
                      </svg>
                      <span>5 stops</span>
                    </div>
                    <div className="cardt__data">
                      <svg className="cardt__icon">
                        <use href="img/icons.svg#icon-user"></use>
                      </svg>
                      <span>8 people</span>
                    </div>
                  </div>

                  <div className="cardt__footer">
                    <p>
                      <span className="cardt__footer-value">$1,997</span>
                      <span className="cardt__footer-text">per person</span>
                    </p>
                    <p className="cardt__ratings">
                      <span className="cardt__footer-value">4.7</span>
                      <span className="cardt__footer-text">rating (23)</span>
                    </p>
                    <a href="#" className="btn btn--green btn--small">Details</a>
                  </div>
                </div>
*/