import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import Card from "../../components/card";
import location from '../../assests/images/location.png'
import star from '../../assests/images/star.png'
import pencil from '../../assests/images/pencil.png'
import servicepageimg from '../../assests/images/servicepageimg.jpg'
import './style.css';
import Footer from "../../components/Footer";
import Selection from "../../components/Selection";
import { getSalon } from "../../services/salonservice/salonservice";

function Services() {
    // const [pdata, setPdata] = useState([]);

    const pdata = [
        {
            title: 'Popular Hair Service Salons',
            cards: [
                {
                    cardImg: 'https://th.bing.com/th/id/OIP.QvkZT8UecmbWkiZlgedZfwHaGL?w=237&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7', 
                    cardTitle: 'Salon Leo',
                    cardImgLoc: location,
                    description1: 'cNo. 324, Chatham street,',
                    description2: 'colombo 7',
                    cardImgStar: star,
                    description3: '4.5',
                    cardImgPencil: pencil,
                    description4: 'Male Haircuts, Beard Shaving,',
                    description5: 'Head Shave'
                },
                {
                    cardImg: {},
                    cardTitle: 'Salon Alpha',
                    cardImgLoc: location,
                    description1: '123, Main Street',
                    description2: 'City Center',
                    cardImgStar: star,
                    description3: '4.7',
                    cardImgPencil: pencil,
                    description4: 'Female Haircuts, Hair Coloring,',
                    description5: 'Hair Styling'
                },
                {
                    cardImg: {},
                    cardTitle: 'Salon Beta',
                    cardImgLoc: location,
                    description1: '456, Elm Street',
                    description2: 'Downtown',
                    cardImgStar: star,
                    description3: '4.9',
                    cardImgPencil: pencil,
                    description4: 'Haircuts, Beard Trimming,',
                    description5: 'Facial Massage'
                },
                {
                    cardImg: {},
                    cardTitle: 'Salon Delta',
                    cardImgLoc: location,
                    description1: '789, Oak Street',
                    description2: 'Uptown',
                    cardImgStar: star,
                    description3: '4.6',
                    cardImgPencil: pencil,
                    description4: 'Male Haircuts, Beard Styling,',
                    description5: 'Scalp Massage'
                }
            ]
        },
        {
            title: 'Top rated Hair Service Salons',
            cards: [
                {
                    cardImg: {},
                    cardTitle: 'Salon Epsilon',
                    cardImgLoc: location,
                    description1: '10, Maple Avenue',
                    description2: 'Suburbia',
                    cardImgStar: star,
                    description3: '4.8',
                    cardImgPencil: pencil,
                    description4: 'Hair Styling, Hair Coloring,',
                    description5: 'Hair Treatments'
                },
                {
                    cardImg: {},
                    cardTitle: 'Salon Zeta',
                    cardImgLoc: location,
                    description1: '11, Pine Street',
                    description2: 'Rural',
                    cardImgStar: star,
                    description3: '4.7',
                    cardImgPencil: pencil,
                    description4: 'Haircuts, Beard Trimming,',
                    description5: 'Facial Massage'
                },
                {
                    cardImg: {},
                    cardTitle: 'Salon Eta',
                    cardImgLoc: location,
                    description1: '12, Cedar Road',
                    description2: 'Village',
                    cardImgStar: star,
                    description3: '4.9',
                    cardImgPencil: pencil,
                    description4: 'Hair Styling, Hair Treatments,',
                    description5: 'Hair Coloring'
                },
                {
                    cardImg: {}, 
                    cardTitle: 'Salon Theta',
                    cardImgLoc: location,
                    description1: '13, Birch Boulevard',
                    description2: 'Metropolitan',
                    cardImgStar: star,
                    description3: '4.6',
                    cardImgPencil: pencil,
                    description4: 'Haircuts, Beard Styling,',
                    description5: 'Scalp Massage'
                }
            ]
        },
        {
            title: 'Popular Male Haircuts Salons',
            cards: [
                {
                    cardImg: {}, 
                    cardTitle: 'Salon Iota',
                    cardImgLoc: location,
                    description1: '14, Walnut Way',
                    description2: 'Countryside',
                    cardImgStar: star,
                    description3: '4.7',
                    cardImgPencil: pencil,
                    description4: 'Male Haircuts, Beard Trimming,',
                    description5: 'Facial Massage'
                },
                {
                    cardImg: {},
                    cardTitle: 'Salon Kappa',
                    cardImgLoc: location,
                    description1: '15, Elm Avenue',
                    description2: 'Outskirts',
                    cardImgStar: star,
                    description3: '4.6',
                    cardImgPencil: pencil,
                    description4: 'Male Haircuts, Beard Styling,',
                    description5: 'Scalp Massage'
                },
                {
                    cardImg: {},
                    cardTitle: 'Salon Lambda',
                    cardImgLoc: location,
                    description1: '16, Oak Road',
                    description2: 'Countryside',
                    cardImgStar: star,
                    description3: '4.8',
                    cardImgPencil: pencil,
                    description4: 'Male Haircuts, Beard Shaving,',
                    description5: 'Head Shave'
                },
                {
                    cardImg: {}, 
                    cardTitle: 'Salon Mu',
                    cardImgLoc: location,
                    description1: '17, Cedar Street',
                    description2: 'Outskirts',
                    cardImgStar: star,
                    description3: '4.9',
                    cardImgPencil: pencil,
                    description4: 'Male Haircuts, Beard Trimming,',
                    description5: 'Facial Massage'
                }
            ]
        },
    ];
    
    

    const handleSearch = (searchParams) => {
        // Handle search logic here, such as making an API call with the search parameters
        console.log('Search parameters:', searchParams);
    };

    useEffect(() => {
        const fetchSalonData = async () => {
            try {
                const salonData = await getSalon();
                setPdata(salonData); 
            } catch (error) {
                console.error('Error fetching salon data:', error);
            }
        };

        fetchSalonData();
    }, []);

    return (
        <div className='container '>
            <div className="top-header">
                <div className ="w-full h-full absolute" style={{zIndex:-1}}>
                    <div className =" layer w-full absolute bg-black opacity-35"></div>
                    <img src={servicepageimg} className="top-img"/>
                </div>
                
                <div className="topText pl-36">
                    <div className="headText text-backgroundTwo">
                        <h1 className="font-medium text-medium tracking-wide">Hair Services</h1>
                        <p className="text-md tracking-wide ">Enter your dates and choose from 5,000 salons to get your service!</p>
                    </div>

                    <div className="selectionBar mt-12">
                        <Selection onSearch={handleSearch} />
                    </div>
                </div>
            </div>

            <div className="middle pl-36 pr-36 bg-rgba(248, 245, 243, 1)">
                {pdata.map((data, index) => (
                    <div key={index} className="middle-section">
                        <div className="text-base flex pt-10 justify-between">
                            <h2 className="text-black font-normal">{data.title}</h2>
                            <a href="#" className="underline">View more</a>
                        </div>
                        <div className="col1 flex justify-evenly mt-6 gap-4">
                        {data.cards.map((cardData, cardIndex) => (
                           <Link to={`/salon/${cardData.cardTitle}`} key={cardIndex}>
                                <Card
                                    cardImg={cardData.cardImg}
                                    cardTitle={cardData.cardTitle}
                                    cardImgLoc={cardData.cardImgLoc}
                                    description1={cardData.description1}
                                    description2={cardData.description2}
                                    cardImgStar={cardData.cardImgStar}
                                    description3={cardData.description3}
                                    cardImgPencil={cardData.cardImgPencil}
                                    description4={cardData.description4}
                                    description5={cardData.description5}
                                />
                            </Link>
                        ))}
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default Services;
