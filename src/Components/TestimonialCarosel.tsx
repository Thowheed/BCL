// 'use client';

// import "../styles/TestimonialCarosel.scss";
// import Image from "next/image";
// import React, { useEffect, useState } from 'react';
// import { Carousel } from 'antd';

// const testimonials = [
//     {
//         place: 'UK',
//         feedback: "As a busy restaurant owner, I need reliable suppliers who deliver premium quality. This service has exceeded my expectations! The jackfruit, coconuts, and fresh spices are exceptional, and their dedication to sustainable farming practices aligns perfectly with our restaurant's values. Their wholesale options have been a game-changer for my business.",
//         name: "Cooper",
//         image: 'https://i.pravatar.cc/150?img=1'
//     },
//     {
//         place: 'London',
//         feedback: "I've been ordering from this service for over 6 months now, and the quality of produce has been consistently excellent. The mangoes and rambutan are always perfectly ripe, and their organic vegetables taste just like what my grandmother used to grow. Delivery is always on time, and I love supporting local Sri Lankan farmers!",
//         name: "Shizukz Admin",
//         image: 'https://i.pravatar.cc/150?img=2'
//     },
//     {
//         feedback: "Moving to Sri Lanka, I was worried about  has been my savior! Their English interface is easy to navigate, and the variety of fruits I'd never tried before—like wood apple and soursop—came with helpful preparation tips. The customer service team is incredibly responsive and friendly.",
//         place: 'Ravi phillins',
//         name: "John Doe",
//         image: 'https://i.pravatar.cc/150?img=3'
//     },
//     {
//         place: 'Bhiar Anropp',
//         feedback: "As a busy restaurant owner, I need reliable suppliers who deliver premium quality. This service has exceeded my expectations! The jackfruit, coconuts, and fresh spices are exceptional, and their dedication to sustainable farming practices aligns perfectly with our restaurant's values. Their wholesale options have been a game-changer for my business.",
//         name: "john Doe",
//         image: 'https://i.pravatar.cc/150?img=3'
//     }
// ];

// export default function Testimonial() {

//     const [slidesToShow, setSlidesToShow] = useState(3);

//     useEffect(() => {
//         const updateSlides = () => {
//             const width = window.innerWidth;
//             setSlidesToShow(width < 500 ? 1 : (width > 500 && width < 1200) ? 2.5 : 3);
//         };

//         updateSlides(); // Call once on mount
//         window.addEventListener('resize', updateSlides);

//         return () => window.removeEventListener('resize', updateSlides);
//     }, []);

//     return (
//         <div className="testimonial-wrapper">
//             <div className="testimonial-header">
//                 <span className="testimonial-title">TESTIMONIALS</span>
//                 <h1 className="testimonial-subtitle">What Our Customers Say</h1>
//             </div>

//                 <Carousel
//                     className="carosal-inner"
//                     autoplay
//                     dotPosition="bottom"
//                     dots={false}
//                     slidesToShow={slidesToShow} // react-slick supports this
//                 >
//                     {testimonials.map((t, index) => (
//                         <div key={index} className="testimonial-warpper-new" style={{maxWidth: "33%", backgroundColor:"red"}}>
//                             <div className="testimonial-card">
//                                 <img
//                                     className="testimonial-image"
//                                     src={t.image}
//                                     alt={t.place}
//                                 />
//                                 <div className="testimonial-content">
//                                     <div className="testimonial-main-feedback">
//                                         <p className="testimonial-feedback">{t.feedback}</p>
//                                     </div>
//                                     <div>
//                                         <h2 className="testimonial-name">{t.name}</h2>
//                                     </div>
//                                     <div>
//                                         <h3 className="testimonial-location">
//                                             <img src="/locationtest.svg" className="location-icon" />
//                                             {t.place}
//                                         </h3>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </Carousel>
//         </div>
//     );
// }

'use client';

import "../styles/TestimonialCarosel.scss";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';

const testimonials = [
    {
        place: 'UK',
        feedback: "As a busy restaurant owner, I need reliable suppliers who deliver premium quality. This service has exceeded my expectations! The jackfruit, coconuts, and fresh spices are exceptional, and their dedication to sustainable farming practices aligns perfectly with our restaurant's values. Their wholesale options have been a game-changer for my business.",
        name: "Cooper",
        image: 'https://i.pravatar.cc/150?img=1'
    },
    {
        place: 'London',
        feedback: "I've been ordering from this service for over 6 months now, and the quality of produce has been consistently excellent. The mangoes and rambutan are always perfectly ripe, and their organic vegetables taste just like what my grandmother used to grow. Delivery is always on time, and I love supporting local Sri Lankan farmers!",
        name: "Shizukz Admin",
        image: 'https://i.pravatar.cc/150?img=2'
    },
    {
        feedback: "Moving to Sri Lanka, I was worried about  has been my savior! Their English interface is easy to navigate, and the variety of fruits I'd never tried before—like wood apple and soursop—came with helpful preparation tips. The customer service team is incredibly responsive and friendly.",
        place: 'Ravi phillins',
        name: "John Doe",
        image: 'https://i.pravatar.cc/150?img=3'
    },
    {
        place: 'Bhiar Anropp',
        feedback: "As a busy restaurant owner, I need reliable suppliers who deliver premium quality. This service has exceeded my expectations! The jackfruit, coconuts, and fresh spices are exceptional, and their dedication to sustainable farming practices aligns perfectly with our restaurant's values. Their wholesale options have been a game-changer for my business.",
        name: "john Doe",
        image: 'https://i.pravatar.cc/150?img=3'
    }
];

export default function Testimonial() {

    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const updateSlides = () => {
            const width = window.innerWidth;
            setSlidesToShow(width < 500 ? 1 : (width > 500 && width < 1200) ? 2.5 : 3);
        };

        updateSlides(); // Call once on mount
        window.addEventListener('resize', updateSlides);

        return () => window.removeEventListener('resize', updateSlides);
    }, []);

    return (
        <div className="testimonial-wrapper">
            <div className="testimonial-header">
                <span className="testimonial-title">TESTIMONIALS</span>
                <h1 className="testimonial-subtitle">What Our Customers Say</h1>
            </div>

            <Carousel
                className="carosal-inner"
                autoplay
                dotPosition="bottom"
                dots={false}
                slidesToShow={slidesToShow} // react-slick supports this
            >
                {testimonials.map((t, index) => (
                    <div key={index} className="testimonial-warpper-new" style={{ maxWidth: "33%", backgroundColor: "red" }}>
                        <div className="testimonial-card">
                            <Image
                                className="testimonial-image"
                                src={t.image}
                                alt={`${t.name}'s profile`}
                                width={150}
                                height={150}
                            />
                            <div className="testimonial-content">
                                <div className="testimonial-main-feedback">
                                    <p className="testimonial-feedback">{t.feedback}</p>
                                </div>
                                <div>
                                    <h2 className="testimonial-name">{t.name}</h2>
                                </div>
                                <div>
                                    <h3 className="testimonial-location">
                                        <Image
                                            src="/locationtest.svg"
                                            alt="Location icon"
                                            width={20}
                                            height={20}
                                            className="location-icon"
                                        />
                                        {t.place}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
