import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import AllTours from '../components/AllTours'


function tours() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <link
                href="https://fonts.googleapis.com/css?family=Lato:300,300i,700"
                rel="stylesheet"
                />

                <link rel="stylesheet" href="css/style.css" />
                <link rel="shortcut icon" type="image/png" href="img/favicon.png" />

                <title>Natours | Exciting tours for adventurous people</title>
            </Head>

    
            <AllTours></AllTours>
        </div>
    )
}

export default tours
