import {useState} from 'react';
import {useRouter} from 'next/router';
import ReactMapGL, {Marker, WebMercatorViewport, FlyToInterpolator} from 'react-map-gl';
import axios from 'axios';

const fetchTours = async (id) => {
    const {data} = await axios.get('https://tours-explorer.herokuapp.com/api/v1/tours/', {withCredentials: true});
    return data.data.data;
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const tours = await fetchTours()
    // Get the paths we want to pre-render based on posts
    const paths = tours.map((tour) => ({
      params: { id: tour.id },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://tours-explorer.herokuapp.com/api/v1/tours/${params.id}`)
    const tour = await res.json()
  
    // Pass post data to the page via props
    return { props: { tour } }
  }

  const monthNames = ["", "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  /*
  // SERVER SIDE RENDERING
  const fetchTourServerSide = async (id) => {
    const {data} = await axios.get(`http://localhost:8000/api/v1/tours/${id}`, {withCredentials: true});
    return data.data.data;
}
  export async function getServerSideProps(context) {
    //console.log(context.params)
    const tour = await fetchTourServerSide(context.params.id)
    if (!tour) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {tour}, // will be passed to the page component as props
    }
  }
*/
function tour({tour}) {

    if (tour) {
        var data = tour.data.data
    }

    const {longitude, latitude, zoom} = new WebMercatorViewport({width: 600, height: 600})
    .fitBounds([[data.locations[1] ? data.locations[1].coordinates[0]: data.locations[0].coordinates[0], data.locations[1] ? data.locations[1].coordinates[1]: data.locations[0].coordinates[1]], [data.locations[0].coordinates[0], data.locations[0].coordinates[1]]], {
      padding: 20,
      offset: [0, -100]
    });

    //console.log(longitude)
    //console.log(latitude)
    //console.log(zoom)


    const [viewPort, setViewPort] = useState({
        width: '100%',
        height: 600,
        longitude: longitude,
        latitude: latitude,
        zoom,
        scrollZoom: false
    })



       /* setViewPort({
            //...viewPort,
            longitude,
            latitude,
            zoom,
            transitionDuration: 5000,
            transitionInterpolator: new FlyToInterpolator(),
          })*/

    const router = useRouter();


    console.log(data)
    const month = monthNames[new Date(data.startDates[0]).getMonth()]
    return (
        <div>
           

            <section className="section-header">
                <div className="header__background-image">
                    <img src={`../../img/${data.imageCover}`} alt="" />
                </div>
                <div className="heading-box">

                    <h1 className="heading-primaryt">
                        <span>{data.name}</span> <br />      
                    </h1>
                    
                    <div className="heading-box__group">
                        <div className="heading-box__detail">
                            <svg className="heading-box__icon">
                            <use href="../../img/icons.svg#icon-clock"></use>
                            </svg>
                            <span className="heading-box__text">{`${data.duration} days`}</span>
                        </div>

                        <div className="heading-box__detail">
                            <svg className="heading-box__icon">
                            <use href="../img/icons.svg#icon-map-pin"></use>
                            </svg>
                            <span className="heading-box__text">{data.startLocation.address}</span>
                        </div>
                    </div>
                </div>
            </section>

        <section className="section-description">

    
        <div className="overview-box">
            <div className="overview-box-inner">
                <div className="overview-box__group">
                    <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
                    <div className="overview-box__detail">
                    <svg className="overview-box__icon">
                        <use href="../img/icons.svg#icon-calendar"></use>
                    </svg>
                    <span className="overview-box__label">Next date</span>
                    <span className="overview-box__text">{`${month}, ${new Date(data.startDates[0]).getFullYear()}`}</span>
                    </div>
                    <div className="overview-box__detail">
                    <svg className="overview-box__icon">
                        <use href="../img/icons.svg#icon-trending-up"></use>
                    </svg>
                    <span className="overview-box__label">Difficulty</span>
                    <span className="overview-box__text">{data.difficulty}</span>
                    </div>
                    <div className="overview-box__detail">
                    <svg className="overview-box__icon">
                        <use href="../img/icons.svg#icon-user"></use>
                    </svg>
                    <span className="overview-box__label">Participants</span>
                    <span className="overview-box__text">{`${data.maxGroupSize} People`}</span>
                    </div>
                    <div className="overview-box__detail">
                    <svg className="overview-box__icon">
                        <use href="../img/icons.svg#icon-star"></use>
                    </svg>
                    <span className="overview-box__label">Rating</span>
                    <span className="overview-box__text">{`${data.ratingsAverage} / 5`}</span>
                    </div>
                </div>

                <div className="overview-box__group">
                    <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
                {data.guides.map(guide => (

                    <div className="overview-box__detail" key={guide._id}>
                        <img
                            src={`../img/users/${guide.photo}`}
                            alt={guide.role}
                            className="overview-box__img"
                        />
                        <span className="overview-box__label">{guide.role}</span>
                        <span className="overview-box__text">{guide.name}</span>
                    </div>
                ))}


                    
                </div>
            </div>
        </div>

        <div className="description-box">
            <h2 className="heading-secondary ma-bt-lg">{`About ${data.name}`}</h2>
            <p className="description__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            </p>
            <p className="description__text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum!
            </p>
        </div>
        </section>

        <section className="section-pictures">

            {data.images.map((img, i) => (
                
        <div className="picture-box" key={img}>
            <img
            className={`picture-box__img picture-box__img--${i+1}`}
            src={`../img/${img}`}
            alt={`${data.name} image ${i+1}`}
            />
        </div>

            ))}
        
        </section>

        <section className="section-map">
            <ReactMapGL 
                {...viewPort} 
                mapboxApiAccessToken='pk.eyJ1IjoiaXNtYWlsaW5heWF0IiwiYSI6ImNrMzk0OTlsdzBmMm0zZW92YXV5aXpoOG4ifQ.Xn1DGhnwcZQ8IXD4_Irubw'
                onViewportChange={viewport => setViewPort(viewport)}
                mapStyle="mapbox://styles/ismailinayat/ckvjrgado9jty15o8mbybz9o7"
            >
                {
                    data.locations.map(loc => (
                        <Marker 
                            key={loc._id}
                            longitude={loc.coordinates[0]}
                            latitude={loc.coordinates[1]}
                        
                        >
                            <button className="marker__button">
                                <img className="marker" src="../img/pin.png" alt="" />
                            </button>
                        </Marker>
                    ))
                }
            </ReactMapGL>
        </section>

        
        <section className="section-reviews">
        <div className="reviews">

            {data.reviews.map(review => (

            <div className="reviews__card" key={review._id}>
                <div className="reviews__avatar">
                    <img
                    src={`../img/users/${review.user.photo}`}
                    alt={review.user.name}
                    className="reviews__avatar-img"
                    />
                    <h6 className="reviews__user">{review.user.name}</h6>
                </div>
                <p className="reviews__text">
                    {review.review}
                </p>
                <div className="reviews__rating">
                    <svg className="reviews__star reviews__star--active">
                        <use href="../img/icons.svg#icon-star"></use>
                    </svg>
                    <svg className="reviews__star reviews__star--active">
                        <use href="../img/icons.svg#icon-star"></use>
                    </svg>
                    <svg className="reviews__star reviews__star--active">
                        <use href="../img/icons.svg#icon-star"></use>
                    </svg>
                    <svg className="reviews__star reviews__star--active">
                        <use href="../img/icons.svg#icon-star"></use>
                    </svg>
                    <svg className="reviews__star reviews__star--active">
                        <use href="../img/icons.svg#icon-star"></use>
                    </svg>
                </div>
            </div>
            ))}

        </div>
        </section>

        <section className="section-cta">
        <div className="cta">
            <div className="cta__img cta__img--logo">
                <img src="../img/logo-white.png" alt="Natours logo" className="" />
            </div>

            <img src="../img/tour-5-2.jpg" alt="" className="cta__img cta__img--1" />
            <img src="../img/tour-5-1.jpg" alt="" className="cta__img cta__img--2" />

            <div className="cta__content">
                <div className="cta__content--text">

                    <h2 className="heading-secondary">What are you waiting for?</h2>
                    <p className="cta__text">
                        {`${data.duration} days. 1 adventure. Infinite memories. Make it yours today!`}
                    </p>
                </div>
            <button className="btn btn--green span-all-rows btn--buy">Book tour now!</button>
            </div>
        </div>
        </section>

   


        </div>
    )
}

export default tour
/*
<div className="overview-box__detail">
                    <img
                        src={`../img/users/${data.guides[1].photo}`}
                        alt={data.guides[1].role}
                        className="overview-box__img"
                    />
                    <span className="overview-box__label">{data.guides[1].role}</span>
                    <span className="overview-box__text">{data.guides[1].name}</span>
                </div>

                <div className="overview-box__detail">
                    <img
                        src={`../img/users/${data.guides[2].photo}`}
                        alt={data.guides[2].role}
                        className="overview-box__img"
                    />
                    <span className="overview-box__label">{data.guides[2].role}</span>
                    <span className="overview-box__text">{data.guides[2].name}</span>
                </div>


                <div className="picture-box">
            <img
            className="picture-box__img picture-box__img--2"
            src={`../img/${data.images[1]}`}
            alt="The Park Camper Tour 1"
            />
        </div>
        <div className="picture-box">
            <img
            className="picture-box__img picture-box__img--3"
            src={`../img/${data.images[2]}`}
            alt="The Park Camper Tour 1"
            />
        </div>

        
            <div className="reviews__card">
            <div className="reviews__avatar">
                <img
                src="../img/users/user-14.jpg"
                alt="Laura Wilson"
                className="reviews__avatar-img"
                />
                <h6 className="reviews__user">Laura Wilson</h6>
            </div>
            <p className="reviews__text">
                Veniam adipisci blanditiis, corporis sit magnam aperiam ad, fuga
                reiciendis provident deleniti cumque similique itaque animi,
                sapiente obcaecati beatae accusantium.
            </p>
            <div className="reviews__rating">
                <svg className="reviews__star reviews__star--active">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
                <svg className="reviews__star reviews__star--active">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
                <svg className="reviews__star reviews__star--active">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
                <svg className="reviews__star reviews__star--active">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
                <svg className="reviews__star reviews__star--inactive">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
            </div>
            </div>

            <div className="reviews__card">
            <div className="reviews__avatar">
                <img
                src="../img/users/user-15.jpg"
                alt="Ben Hadley"
                className="reviews__avatar-img"
                />
                <h6 className="reviews__user">Ben Hadley</h6>
            </div>
            <p className="reviews__text">
                Debitis, nesciunt itaque! At quis officia natus. Suscipit,
                reprehenderit blanditiis mollitia distinctio ducimus porro tempore
                perspiciatis sunt vel.
            </p>
            <div className="reviews__rating">
                <svg className="reviews__star reviews__star--active">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
                <svg className="reviews__star reviews__star--active">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
                <svg className="reviews__star reviews__star--active">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
                <svg className="reviews__star reviews__star--active">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
                <svg className="reviews__star reviews__star--active">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
            </div>
            </div>

            <div className="reviews__card">
            <div className="reviews__avatar">
                <img
                src="../img/users/user-6.jpg"
                alt="Alexander Jones"
                className="reviews__avatar-img"
                />
                <h6 className="reviews__user">Alexander Jones</h6>
            </div>
            <p className="reviews__text">
                Quaerat laborum eveniet ut aut maiores doloribus mollitia aperiam
                quis praesentium sed inventore harum aliquam veritatis at adipisci
                ea assumenda!
            </p>
            <div className="reviews__rating">
                <svg className="reviews__star reviews__star--active">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
                <svg className="reviews__star reviews__star--active">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
                <svg className="reviews__star reviews__star--active">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
                <svg className="reviews__star reviews__star--active">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
                <svg className="reviews__star reviews__star--active">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
            </div>
            </div>

            <div className="reviews__card">
            <div className="reviews__avatar">
                <img
                src="../img/users/user-3.jpg"
                alt="Ayla Cornell"
                className="reviews__avatar-img"
                />
                <h6 className="reviews__user">Ayla Cornell</h6>
            </div>
            <p className="reviews__text">
                Perferendis quo aliquid iste quas laboriosam molestias illo est
                voluptatem odit ea. Vero placeat culpa provident dicta maiores!
            </p>
            <div className="reviews__rating">
                <svg className="reviews__star reviews__star--active">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
                <svg className="reviews__star reviews__star--active">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
                <svg className="reviews__star reviews__star--active">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
                <svg className="reviews__star reviews__star--active">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
                <svg className="reviews__star reviews__star--active">
                <use href="../img/icons.svg#icon-star"></use>
                </svg>
            </div>
            </div>
*/