import React  from 'react';
import { Form, Input, Button  } from 'antd';
import uuid from 'uuid/dist/v1'

const AddForm = (props) => {
    const layout = {
        labelCol: { span: 2 },
        wrapperCol: { span: 6 },
      };
      const tailLayout = {
        wrapperCol: { offset: 2, span: 16 },
      };
  
      const onFinish = values => {
        values.key=uuid();
        values.delete=<button onClick={()=>{props.deletePatian(values.name)}}>delete</button>
        values.edit=<button onClick={props.editPatien}>edit</button>
        console.log('Success:', values);
        props.addPerson(values)
        
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

      // const [newPerson , setNewPerson] = useState(
      //   {
      //     key: '',
      //     name: '',
      //     age: '',
      //     address: '',
      //   }
      // )
    return ( 
        <Form
      {...layout}  //for style
      name="basic"
      // initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="name"
        name="name"
        rules={[{ required: true, message: 'Please input a name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="age"
        name="age"
        rules={[{ required: true, message: 'Please input age!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="address"
        name="address"
        rules={[{ required: true, message: 'Please input age!' }]}
      >
        <Input />
      </Form.Item>

      {/* <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item> */}

      {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
     );
}
 
export default AddForm;