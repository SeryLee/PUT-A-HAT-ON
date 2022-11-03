import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Icon, Col, Card, Row, BackTop } from 'antd';
import ImageSlider from '../../utils/ImageSlider';
import Meta from 'antd/lib/card/Meta';

function CategoryPage(props) {
    
    const menu = parseInt(props.match.params.types)
    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState(0)
    const [Filters, setFilters] = useState({
        types: [menu]
    })

    useEffect(() => {
        let body = {
            skip: Skip,
            limit: Limit,
            filters: Filters
        }

        getProducts(body)
    }, [])

    const getProducts = (body) => {
        axios.post('/api/product/shop', body)
            .then(response => {
                if (response.data.success) {
                    //console.log(response.data)
                    if (body.loadMore) {
                        setProducts([...Products, ...response.data.productInfo])
                    } else {
                        setProducts(response.data.productInfo)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert('상품들을 가져오는데 실패 했습니다.')
                }
            })
    }

    const loadMoreHandler = () => {
        let skip = Skip + Limit

        let body = {
            skip: skip,
            limit: Limit,
            loadMore: true,
            filters: Filters
        }

        getProducts(body)
        setSkip(skip)
    }

    const renderCards = Products.map((product, index) => {

        return <Col lg={6} md={8} xs={24} key={index}>
            <Card
                //hoverable
                cover={<a href={`/product/${product._id}`}><ImageSlider images={product.images} /></a>}
            >
                <Meta
                    title={product.title}
                    description={`$${product.price}`}
                />
            </Card>
        </Col>
    })



    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>Put Your Love On!<Icon type='heart' /></h2>
                {/* Cards */}
                <Row gutter={[16, 16]}>
                    {renderCards}
                </Row>
                {PostSize >= Limit &&
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={loadMoreHandler}>더보기</button>
                    </div>
                }
            </div>

            <BackTop>
                <div><Icon type='up' style={{ fontSize: '24px', color: 'black' }} theme="outlined" /></div>
            </BackTop>
        </div>
    )
}

export default CategoryPage