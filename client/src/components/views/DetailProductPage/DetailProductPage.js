import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import { Row, Col } from 'antd';

function DetailProductPage(props) {

    const productId = props.match.params.productId

    const [Product, setProduct] = useState({})
    console.log(props);

    useEffect(() => {
        axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })
            .catch(err => alert(err))
    }, [])

    //관리자 수정버튼 생성
    if (props.user.userData && props.user.userData.email == 'admin@gmail.com') {
        return (
            <div style={{ width: '100%', padding: '3rem 4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1>{Product.title}</h1>
                </div>

                <Row gutter={[16, 16]} >
                    <Col lg={12} sm={24}>
                        {/* ProductImage */}
                        <ProductImage detail={Product} />
                    </Col>
                    <Col lg={12} sm={24}>
                        {/* ProductInfo */}
                        <ProductInfo detail={Product} />
                    </Col>
                </Row>
                <button><a href={`/product/update/${productId}`}>Update</a></button>
            </div>
        )
    } else {
        return (
            <div style={{ width: '100%', padding: '3rem 4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1>{Product.title}</h1>
                </div>

                <Row gutter={[16, 16]} >
                    <Col lg={12} sm={24}>
                        {/* ProductImage */}
                        <ProductImage detail={Product} />
                    </Col>
                    <Col lg={12} sm={24}>
                        {/* ProductInfo */}
                        <ProductInfo detail={Product} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DetailProductPage
