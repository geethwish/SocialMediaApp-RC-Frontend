import { Button, Form, Input, Modal, Segmented } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import React, { FC, memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { addPost, resetCreatePostState } from '../../store/slices/posts/createPost.slice';

interface AddPostModalPros {
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
}

const AddPostModal: FC<AddPostModalPros> = ({ isModalOpen, handleCancel }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch<AppDispatch>();
    const status = useSelector((state: RootState) => state.cratePost.status);

    const onFinish = async () => {
        try {
            const values = await form.validateFields();

            dispatch(addPost(values))

            handleCancel()

        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }

    }

    useEffect(() => {
        dispatch(resetCreatePostState());
    }, [])


    return (
        <Modal title="Add Post" open={isModalOpen} onOk={onFinish} onCancel={handleCancel} footer={<Button loading={status === 'loading'} onClick={onFinish} type="primary" htmlType="submit">
            Submit
        </Button>}>
            <Form

                form={form}
                name="AddPostForm"
                labelCol={{
                    span: 24,
                }}
                wrapperCol={{
                    span: 24,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your post title!',
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
                            message: 'Please enter post description!',
                        },
                    ]}
                >
                    <TextArea />
                </Form.Item>

                <Form.Item
                    label="Tile Color"
                    name="titleColor"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter post description!',
                        },
                    ]}
                >
                    <Segmented
                        options={[
                            {
                                label: (
                                    <div className='box-blue'>
                                    </div>
                                ),
                                value: 'Blue',
                            },
                            {
                                label: (
                                    <div className='box-yellow'>
                                    </div>
                                ),
                                value: 'Yellow',
                            },
                            {
                                label: (
                                    <div className='box-red'>
                                    </div>
                                ),
                                value: 'Red',
                            },
                        ]}
                    />
                </Form.Item>


            </Form>
        </Modal>
    )
}

export default memo(AddPostModal)