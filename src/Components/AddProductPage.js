import { useState } from 'react';
import { Button, Space } from 'antd';
import AddEditForm from './AddEditForm';
import CardGallery from './CardGallery';


const AddProductPage = () => {
    const [showAddCard, setShowAddCard] = useState(false);

    const toggleShowAdd = () => setShowAddCard(!showAddCard);

    return (
        <>
            <Space style={{justifyContent: 'center', margin: 5}}>
                {
                    !showAddCard &&
                    <Button type="primary" onClick={() => toggleShowAdd()}>Add Product</Button>
                }
                {
                    showAddCard &&
                    <AddEditForm />
                }
            </Space>
            <CardGallery />
        </>
    )
}

export default AddProductPage