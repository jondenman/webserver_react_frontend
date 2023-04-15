import { Card, Col, Row } from 'antd';
import './CardGallery.css';
import Product from './Product';
import { useEffect, useState } from 'react';
import GetProducts from './GetProducts';

const { Meta } = Card;

const CardGallery = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        console.log('Fetching...');
        fetch('http://127.0.0.1:8000/api/cards/')
            .then((response) => response.json())
            .then((data) => {
                console.log(data.cards);
                setProducts(data.cards);
            })
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