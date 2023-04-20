import { Carousel } from "flowbite-react";
import React from "react";

const CarouselComponent = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-3">
            <Carousel slideInterval={5000}>
                {/* Gambar disimpan di folder public/images */}
                <img
                    src="/images/carousel-1.jpg"
                    alt="Carousel Picture 1"
                />
                <img
                    src="/images/carousel-2.jpg"
                    alt="Carousel Picture 2"
                />
                <img
                    src="/images/carousel-3.jpg"
                    alt="Carousel Picture 3"
                />
                <img
                    src="/images/carousel-4.jpg"
                    alt="Carousel Picture 4"
                />
            </Carousel>
        </div>
    )
}
export default CarouselComponent