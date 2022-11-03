import React, { useState, useEffect } from 'react'
import ImageGallery from 'react-image-gallery';

function ProductImage(props) {

    const [Images, setImages] = useState([])

    useEffect(() => {
        if (props.detail.images && props.detail.images.length > 0) {
            let images = []

            props.detail.images.map(item => {
                images.push({
                    original: `http://localhost:5001/${item}`,
                    thumbnail: `http://localhost:5001/${item}`
                })
            })
            setImages(images)
        }
        // props.detail이 바뀔 때마다 위 라이프사이클을 실행시켜라는 뜻
    }, [props.detail])

    return (
        <div>
            <ImageGallery items={Images} />
        </div>
    )
}

export default ProductImage
