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

function AllTours({tours}) {

  let {data, error, isLoading, isError} = useQuery('allTours', fetchTours, {initialData: tours});
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
