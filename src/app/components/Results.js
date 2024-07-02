"use client";
import React from 'react'
import Card from './Card'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Results({results}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
        },
    ],
    }
    
  return (
    <div className='mx-w-5xl max-auto py-5 w-full'>
    <Slider {...settings}>
      {results.map((result) => (
            <div key={result.id} className=''>
                <Card key={result.id} result={result} />
            </div>
        ))}
    </Slider>
    </div>
  )
}
