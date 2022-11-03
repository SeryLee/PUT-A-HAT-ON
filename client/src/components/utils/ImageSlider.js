import React, { useState } from 'react'
import { Carousel } from 'antd';


function ImageSlider(props) {

    const [dotPosition, setDotPosition] = useState('top');

    return (
        <div>
            <Carousel autoplay dotPosition={dotPosition}>
                {props.images.map((image, index) => (
                    <div key={index}>
                        <img style={{ width: '100%', height: '100%', maxHeight: '480px' }}
                            src={`http://localhost:5001/${image}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ImageSlider
