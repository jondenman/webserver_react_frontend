import { Card, Space, Input } from 'antd';
import { EditOutlined, DeleteOutlined, SaveOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Meta } = Card;

const ProductDetail = ({title, description, url, alt, id}) => {
    const [editing, setEditing] = useState(false);

    return (
        <>
            {
                !editing &&
                <Card
                    style={{margin:10}}
                    hoverable
                    cover={<img
                            alt={alt}
                            src={url}
                            />}
                    >
                    <Meta title={title} description={description}/>
                    <Space size={4} style={{float: 'right'}}>
                        <DeleteOutlined style={{float: 'right'}}/>
                        <EditOutlined style={{float: 'right'}} onClick={() => setEditing(true)} />
                    </Space>
                </Card>
            }
            {
                editing &&
                <Card
                    style={{margin:10}}
                    hoverable
                    cover={<div style={{padding: 10}}> 
                            <Input placeholder='Image URL'></Input> 
                            <Input placeholder='Title'></Input>
                            <Input placeholder='Description'></Input>
                           </div>}
                >
                    <SaveOutlined style={{float: 'right'}} onClick={() => setEditing(false)}/>
                </Card>
            }
        </>
    )
}

export default ProductDetail