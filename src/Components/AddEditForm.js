import { useState, ReactDOM } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import api from '../api/services/ProductService';
import { useNavigate } from 'react-router-dom';


const AddEditForm = (props) => {
    const [url, setUrl] = useState(props.url);
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [id, setId] = useState(props.id);
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Success:', values);
        if (id) {
            api.updateProduct(values, id);
        } else {
            api.addProduct(values);
        }
        navigate("/");
        
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    console.log('props: ' + props)
    console.log('url is: ' + props.url);
    return (
        <Form
            name="basic"
            labelCol={{
            span: 8,
            }}
            wrapperCol={{
            span: 16,
            }}
            style={{
            maxWidth: 600,
            }}
            initialValues={{
            url: url,
            title: title,
            description: description
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
            label="Image URL"
            name="url"
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Title"
            name="title"
            rules={[
                {
                required: true,
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Description"
            name="description"
            rules={[
                {
                required: true,
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
    )
}

export default AddEditForm