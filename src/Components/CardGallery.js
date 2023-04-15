import { Card, Col, Row } from 'antd';
import './CardGallery.css';
import Product from './Product';

const { Meta } = Card;

const CardGallery = () => {
    const cards = [
        {"title": "ExampleOne", "description": "Description One", "url": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", "alt": "Polar Bear" },
        {"title": "ExampleTwo", "description": "Description Two", "url": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", "alt": "Polar Bear" }
    ];
    return (
        <div className='cardContainer'>
            <Row gutter={16}>
                {
                    cards.map((card, ndx) =>
                        <Col span={8} xs={24} sm={12} md={8}>
                            <Product title={card.title}
                            description={card.description}
                            url={card.url}
                            alt={card.alt}
                            key={ndx}
                            />
                        </Col>
                    )
                }
                

                
            </Row>
        </div>
    )
}

export default CardGallery;