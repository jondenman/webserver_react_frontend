import { Card, Col, Row } from 'antd';
import './CardGallery.css';
import Product from './Product';
import { useEffect, useState } from 'react';
import GetAllProducts from '../api/services/ProductService';

const { Meta } = Card;

const CardGallery = () => {
    const [products, setProducts] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const afterComplete = (resData) => {
        setProducts(resData);
        setIsLoaded(true);
    }

    useEffect(() => {
        GetAllProducts(afterComplete);
    }, []);

    return (
        <div className='cardContainer'>
            <Row gutter={16}>
                {products ?
                    products.map((card, ndx) =>
                        <Col span={8} xs={24} sm={12} md={8}>
                            <Product title={card.name}
                            description={card.description}
                            url={card.image_url}
                            alt={card.name}
                            key={ndx}
                            />
                        </Col>
                    ) : null
                } 
            </Row>
        </div>
    )
}

export default CardGallery;