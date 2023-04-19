import { Card, Col, Row } from 'antd';
import './CardGallery.css';
import Product from './Product';
import { useEffect, useState } from 'react';
import api from '../api/services/ProductService';

const CardGallery = () => {
    const [products, setProducts] = useState();

    const afterComplete = (resData) => {
        setProducts(resData);
    }

    useEffect(() => {
        api.getAllProducts(afterComplete);
    }, []);

    return (
        <div className='cardContainer'>
            <Row gutter={16}>
                {products ?
                    products.map((card, ndx) =>
                        <Col span={8} xs={24} sm={12} md={8} lg={6} key={card.id}>
                            <Product title={card.name}
                            description={card.description}
                            url={card.image_url}
                            alt={card.name}
                            id={card.id}
                            />
                        </Col>
                    ) : null
                } 
            </Row>
        </div>
    )
}

export default CardGallery;