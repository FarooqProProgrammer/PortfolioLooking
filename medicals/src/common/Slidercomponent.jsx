import React from 'react'
import Slider from 'react-slick'

export default function Slidercomponent({
    slidesToShow,
    slidesToShowlg,
    slidesToShowmd,
    slidesToShowsm,
    children

}) {


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: slidesToShowlg,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: slidesToShowmd,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: slidesToShowsm,
                    slidesToScroll: 1
                }
            }
        ]
    }



    return (
       
            <Slider {...settings}>
                {children}
            </Slider>
        
    )
}
