import React from 'react'

function tour() {
    return (
        <div>
           

            <section class="section-header">
                <div class="heading-box">
                <h1 class="heading-primaryt">
                    <span>The Park </span> <br />
                       <span>
                       Camper Tour
                        </span> 
                    
                    </h1>
                    <div class="heading-box__group">
                    <div class="heading-box__detail">
                        <svg class="heading-box__icon">
                        <use href="img/icons.svg#icon-clock"></use>
                        </svg>
                        <span class="heading-box__text">10 days</span>
                    </div>
                    <div class="heading-box__detail">
                        <svg class="heading-box__icon">
                        <use href="img/icons.svg#icon-map-pin"></use>
                        </svg>
                        <span class="heading-box__text">Las Vegas, USA</span>
                    </div>
                    </div>
                </div>
            </section>

        <section class="section-description">
        <div class="overview-box">
            <div>
            <div class="overview-box__group">
                <h2 class="heading-secondary ma-bt-lg">Quick facts</h2>
                <div class="overview-box__detail">
                <svg class="overview-box__icon">
                    <use href="img/icons.svg#icon-calendar"></use>
                </svg>
                <span class="overview-box__label">Next date</span>
                <span class="overview-box__text">August 2021</span>
                </div>
                <div class="overview-box__detail">
                <svg class="overview-box__icon">
                    <use href="img/icons.svg#icon-trending-up"></use>
                </svg>
                <span class="overview-box__label">Difficulty</span>
                <span class="overview-box__text">Medium</span>
                </div>
                <div class="overview-box__detail">
                <svg class="overview-box__icon">
                    <use href="img/icons.svg#icon-user"></use>
                </svg>
                <span class="overview-box__label">Participants</span>
                <span class="overview-box__text">10 people</span>
                </div>
                <div class="overview-box__detail">
                <svg class="overview-box__icon">
                    <use href="img/icons.svg#icon-star"></use>
                </svg>
                <span class="overview-box__label">Rating</span>
                <span class="overview-box__text">4.9 / 5</span>
                </div>
            </div>

            <div class="overview-box__group">
                <h2 class="heading-secondary ma-bt-lg">Your tour guides</h2>

                <div class="overview-box__detail">
                <img
                    src="img/users/user-19.jpg"
                    alt="Lead guide"
                    class="overview-box__img"
                />
                <span class="overview-box__label">Lead guide</span>
                <span class="overview-box__text">Steven Miller</span>
                </div>
                <div class="overview-box__detail">
                <img
                    src="img/users/user-18.jpg"
                    alt="Tour guide"
                    class="overview-box__img"
                />
                <span class="overview-box__label">Tour guide</span>
                <span class="overview-box__text">Lisa Brown</span>
                </div>
                <div class="overview-box__detail">
                <img
                    src="img/users/user-17.jpg"
                    alt="Intern"
                    class="overview-box__img"
                />
                <span class="overview-box__label">Intern</span>
                <span class="overview-box__text">Max Smith</span>
                </div>
            </div>
            </div>
        </div>

        <div class="description-box">
            <h2 class="heading-secondary ma-bt-lg">About the park camper tour</h2>
            <p class="description__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            </p>
            <p class="description__text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum!
            </p>
        </div>
        </section>

        <section class="section-pictures">
        <div class="picture-box">
            <img
            class="picture-box__img picture-box__img--1"
            src="img/tour-5-1.jpg"
            alt="The Park Camper Tour 1"
            />
        </div>
        <div class="picture-box">
            <img
            class="picture-box__img picture-box__img--2"
            src="img/tour-5-2.jpg"
            alt="The Park Camper Tour 1"
            />
        </div>
        <div class="picture-box">
            <img
            class="picture-box__img picture-box__img--3"
            src="img/tour-5-3.jpg"
            alt="The Park Camper Tour 1"
            />
        </div>
        </section>

        
        <section class="section-reviews">
        <div class="reviews">
            <div class="reviews__card">
            <div class="reviews__avatar">
                <img
                src="img/users/user-7.jpg"
                alt="Jim Brown"
                class="reviews__avatar-img"
                />
                <h6 class="reviews__user">Jim Brown</h6>
            </div>
            <p class="reviews__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                dignissimos sint quo commodi corrupti accusantium veniam saepe
                numquam.
            </p>
            <div class="reviews__rating">
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
            </div>
            </div>

            <div class="reviews__card">
            <div class="reviews__avatar">
                <img
                src="img/users/user-14.jpg"
                alt="Laura Wilson"
                class="reviews__avatar-img"
                />
                <h6 class="reviews__user">Laura Wilson</h6>
            </div>
            <p class="reviews__text">
                Veniam adipisci blanditiis, corporis sit magnam aperiam ad, fuga
                reiciendis provident deleniti cumque similique itaque animi,
                sapiente obcaecati beatae accusantium.
            </p>
            <div class="reviews__rating">
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--inactive">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
            </div>
            </div>

            <div class="reviews__card">
            <div class="reviews__avatar">
                <img
                src="img/users/user-15.jpg"
                alt="Ben Hadley"
                class="reviews__avatar-img"
                />
                <h6 class="reviews__user">Ben Hadley</h6>
            </div>
            <p class="reviews__text">
                Debitis, nesciunt itaque! At quis officia natus. Suscipit,
                reprehenderit blanditiis mollitia distinctio ducimus porro tempore
                perspiciatis sunt vel.
            </p>
            <div class="reviews__rating">
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
            </div>
            </div>

            <div class="reviews__card">
            <div class="reviews__avatar">
                <img
                src="img/users/user-6.jpg"
                alt="Alexander Jones"
                class="reviews__avatar-img"
                />
                <h6 class="reviews__user">Alexander Jones</h6>
            </div>
            <p class="reviews__text">
                Quaerat laborum eveniet ut aut maiores doloribus mollitia aperiam
                quis praesentium sed inventore harum aliquam veritatis at adipisci
                ea assumenda!
            </p>
            <div class="reviews__rating">
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
            </div>
            </div>

            <div class="reviews__card">
            <div class="reviews__avatar">
                <img
                src="img/users/user-3.jpg"
                alt="Ayla Cornell"
                class="reviews__avatar-img"
                />
                <h6 class="reviews__user">Ayla Cornell</h6>
            </div>
            <p class="reviews__text">
                Perferendis quo aliquid iste quas laboriosam molestias illo est
                voluptatem odit ea. Vero placeat culpa provident dicta maiores!
            </p>
            <div class="reviews__rating">
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
                <svg class="reviews__star reviews__star--active">
                <use href="img/icons.svg#icon-star"></use>
                </svg>
            </div>
            </div>
        </div>
        </section>

        <section class="section-cta">
        <div class="cta">
            <div class="cta__img cta__img--logo">
            <img src="img/logo-white.png" alt="Natours logo" class="" />
            </div>
            <img src="img/tour-5-2.jpg" alt="" class="cta__img cta__img--1" />
            <img src="img/tour-5-1.jpg" alt="" class="cta__img cta__img--2" />

            <div class="cta__content">
            <h2 class="heading-secondary">What are you waiting for?</h2>
            <p class="cta__text">
                10 days. 1 adventure. Infinite memories. Make it yours today!
            </p>
            <button class="btn btn--green span-all-rows">Book tour now!</button>
            </div>
        </div>
        </section>

   


        </div>
    )
}

export default tour
