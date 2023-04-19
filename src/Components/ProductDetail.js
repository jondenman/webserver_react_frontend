import { Card, Space, Input } from 'antd';
import { EditOutlined, DeleteOutlined, SaveOutlined } from '@ant-design/icons';
import { useState } from 'react';
import api from '../api/services/ProductService';
import AddEditForm from './AddEditForm';

const { Meta } = Card;

const ProductDetail = ({title, description, url, alt, id}) => {
    const [editing, setEditing] = useState(false);
    const [deleted, setDeleted] = useState(false);

    const deleteProduct = (id) => {
        api.deleteProduct(id);
        setDeleted(true);
    }

    const productToAddEdit = ({url: {url}})

    return (
        <>
            {
                !editing && !deleted &&
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
                        <DeleteOutlined style={{float: 'right'}} onClick={() => deleteProduct(id)}/>
                        <EditOutlined style={{float: 'right'}} onClick={() => setEditing(true)} />
                    </Space>
                </Card>
            }
            {
                editing &&
                <Card>
                    <AddEditForm url={url} title={title} description={description} id={id}/>
                </Card>
            }
            {
                deleted &&
                <h1>The product has been deleted.</h1>
            }
        </>
    )
}

export default ProductDetail