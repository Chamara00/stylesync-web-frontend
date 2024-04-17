import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import Card from "../../components/card";
import location from '../../assests/images/location.png';
import star from '../../assests/images/star.png';
import pencil from '../../assests/images/pencil.png';
import servicepageimg from '../../assests/images/servicepageimg.jpg';
import Footer from "../../components/Footer";
import Selection from "../../components/Selection";

function HairService() {
    const [pdata, setPdata] = useState([]);
   

    useEffect(() => {
       
        const fetchSalonData = async () => {
            try {
                
                const salonData = [
                    {
                        title: '25 Results Among 5000 Salons',
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
                        title: '',
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
                        title: '',
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
                        title: '',
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
                            }
                        ]
                    }
                ];
                setPdata(salonData);
            } catch (error) {
                console.error('Error fetching salon data:', error);
            }
        };

        fetchSalonData();
    }, []);

    const handleSearch = (searchParams) => {
        console.log('Search parameters:', searchParams);
    };

    return (
        <>
            <div className='container'>
                <div className="top-header">
                    <div className="w-full h-full absolute" style={{ zIndex: -1 }}>
                        <div className="layer w-full absolute bg-black opacity-35"></div>
                        <img src={servicepageimg} alt="Service Page" className="top-img" />
                    </div>
                    <div className="topText pl-36">
                        <div className="headText text-backgroundTwo">
                            <h1 className="font-medium text-medium tracking-wide">Hair Services</h1>
                            <p className="text-sm tracking-wide mt-1">Enter your dates and choose from 5,000 salons to get your service!</p>
                        </div>
                        <div className="selectionBar mt-12">
                            <Selection onSearch={handleSearch} />
                        </div>
                    </div>
                </div>
                <div className="middle pl-36 pr-36 h-full bg-rgba(248, 245, 243, 1)">
                    {pdata.map((item, index) => (
                        <div key={index} className={`middle-section${index + 1}`}>
                            <div className="text-base flex pt-10 justify-between">
                                <h2 className="text-black font-normal">{item.title}</h2>
                            </div>
                            {index !== pdata.length - 1 && (
                                <div className="col1 flex justify-evenly mt-6 gap-4">
                                    {item.cards.map((card, cardIndex) => (
                                        <Link to={`/salon/${card.cardTitle}`} key={cardIndex}  >
                                        <Card
                                            cardImg={card.cardImg}
                                            cardTitle={card.cardTitle}
                                            cardImgLoc={card.cardImgLoc}
                                            description1={card.description1}
                                            description2={card.description2}
                                            cardImgStar={card.cardImgStar}
                                            description3={card.description3}
                                            cardImgPencil={card.cardImgPencil}
                                            description4={card.description4}
                                            description5={card.description5}
                                        />
                                    </Link>
                                    ))}
                                </div>
                            )}
                            {index === pdata.length - 1 && (
                                <div className="col1 flex gap-12 pl-10 pr-10 pb-10 mt-6">
                                    {item.cards.map((card, cardIndex) => (
                                        <Link to={`/salon/${card.cardTitle}`} key={cardIndex}>
                                        <Card
                                            cardImg={card.cardImg}
                                            cardTitle={card.cardTitle}
                                            cardImgLoc={card.cardImgLoc}
                                            description1={card.description1}
                                            description2={card.description2}
                                            cardImgStar={card.cardImgStar}
                                            description3={card.description3}
                                            cardImgPencil={card.cardImgPencil}
                                            description4={card.description4}
                                            description5={card.description5}
                                        />
                                    </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                       
                   
            </div>
                
                <Footer />
           
        </>
    );
}

export default HairService;
