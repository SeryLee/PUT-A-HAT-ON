import React, { useState, useEffect } from 'react'
import { Button, Form, Input } from 'antd';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';

const { TextArea } = Input;

const types = [
    { key: 1, value: "Baseball" },
    { key: 2, value: "Bucket hat" },
    { key: 3, value: "Beret" },
    { key: 4, value: "Beanie" },
    { key: 5, value: "Fedora" },
    { key: 6, value: "Trapper" },
    { key: 7, value: "Other" }
]

function UpdateProductPage(props) {

    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const [Continent, setContinent] = useState(1)
    const [Images, setImages] = useState([])
    const [Product, setProduct] = useState([])
    console.log(props);
    const productId = props.match.params.productId

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
    }

    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value)
    }

    const continentChangeHandler = (event) => {
        setContinent(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    useEffect(() => {
        Axios.get(`/api/product/update/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })
            .catch(err => alert(err))
    }, [])

    const submitHandler = (event) => {
        event.preventDefault();

        if(!Title || !Description || !Price || !Continent || !Images) {
            return alert('모든 값을 넣어주셔야 합니다.')
        }

        //서버에 채운 값들을 request로 보낸다
        const body = {
            //현재 로그인된 사람의 ID
            writer: props.user.userData._id,
            title: Title,
            description: Description,
            price: Price,
            images: Images,
            types: Continent
        }

        Axios.post('/api/product', body)
            .then(response => {
                if(response.data.success) {
                    alert('상품 수정에 성공했습니다.')
                    props.history.push('/')
                } else {
                    alert('상품 수정에 실패했습니다.')
                }
            })
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2>상품 수정 페이지</h2>
            </div>

            <Form onSubmitCapture={submitHandler}>
                {/* {DropZone} */}
                <FileUpload refreshFunction={updateImages}/>


                <br /><br />
                <label>이름</label>
                <Input onChange={titleChangeHandler} value={Title} />
                <br /><br />
                <label>설명</label>
                <TextArea onChange={descriptionChangeHandler} value={Description} />
                <br /><br />
                <label>가격($)</label>
                <Input type="number" onChange={priceChangeHandler} value={Price} />
                <br /><br />
                <select onChange={continentChangeHandler} value={Continent}>
                    {types.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>

                    ))}
                </select>
                <br /><br />
                <Button htmlType='submit'>
                    확인
                </Button>
            </Form>
        </div>
    )
}

export default UpdateProductPage