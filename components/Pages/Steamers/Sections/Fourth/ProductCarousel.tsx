"use client";
import { useEffect, useState } from 'react';
import uniqid from 'uniqid';

import { ISteamer } from "@/model/Steamer"

import Carousel from 'react-bootstrap/Carousel';

interface Props {
    steamerModel: 'besteam' | 'besteamXL'
    steamers: ISteamer[]
}

function ProductCarousel({
    steamerModel,
    steamers
}: Props) {
    const [indicatorLabels, setIndicatorLabels] = useState<string[]>([])

    useEffect(() => {
        const currentIndicatorLabels = steamers.map((steamer) => steamer.color);
        setIndicatorLabels(currentIndicatorLabels)
    }, [])

    return (
        <Carousel id={steamerModel === 'besteam' ? 'carousel-besteam' : 'carousel-besteamXl'} controls={false} fade indicators={true} indicatorLabels={indicatorLabels} interval={1200} touch>
            {
                steamers.map((steamer) => (
                    <Carousel.Item key={uniqid()}>
                        <img
                            className="w-100"
                            src={`/assets/img/${steamer.imgFolder}/${steamer.imgSpecial}`}
                            alt={steamer.color}
                        />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default ProductCarousel