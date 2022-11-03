import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import axios from 'axios';
import { Icon, Col, Card, Row, BackTop } from 'antd';
import Meta from 'antd/lib/card/Meta';
import ImageSlider from '../../utils/ImageSlider';
import SearchFeature from '../AllProductPage/Sections/SearchFeature';
import './css/slick.css';
import './css/slick-theme.css';
import './css/HomePage.css'

function HomePage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState(0)
    const [Filters, setFilters] = useState({
        types: [],
        price: []
    })
    const [SearchTerm, setSearchTerm] = useState("")
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2000,
    };

    useEffect(() => {
        let body = {
            skip: Skip,
            limit: Limit
        }

        getProducts(body)
    }, [])

    const getProducts = (body) => {
        axios.post('/api/product/products', body)
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

    const viewsUpHandler = () => {

    }

    const renderCards = Products.map((product, index) => {

        return <Col lg={6} md={8} xs={12} key={index}>
            <Card
                //hoverable
                cover={<a href={`/product/${product._id}`} onClick={viewsUpHandler}><ImageSlider images={product.images} /></a>}
            >
                <Meta
                    title={product.title}
                    description={`$${product.price}`}
                />
            </Card>
        </Col>
    })



    const updateSearchTerm = (newSearchTerm) => {

        let body = {
            skip: 0,
            limit: Limit,
            filters: Filters,
            searchTerm: newSearchTerm
        }

        setSkip(0)
        setSearchTerm(newSearchTerm)

        getProducts(body)
    }


    return (

        <div style={{ width: '75%', margin: '3rem auto' }}>

            {/* Banner */}
            <div style={{ marginBottom: '2rem'}}>
                <Slider {...settings}>
                    <div className='banner1'></div>
                    <div className='banner2'></div>
                    <div className='banner3'></div>
                </Slider>
            </div>

            {/* Search */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1rem auto' }}>
                <SearchFeature
                    refreshFunction={updateSearchTerm}
                />
            </div>

            {/* Cards */}
            <div>
                <Row gutter={[16, 16]}>
                    {renderCards}
                </Row>
            </div>

            <br />

            {PostSize >= Limit &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={loadMoreHandler}><Icon type='plus' style={{ fontSize: '24px', color: 'black' }} theme="outlined" /></button>
                </div>
            }

            <BackTop>
                <div><Icon type='up' style={{ fontSize: '24px', color: 'black' }} theme="outlined" /></div>
            </BackTop>

        </div>
    )
}

export default HomePage