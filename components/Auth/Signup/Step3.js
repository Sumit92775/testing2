// import { Form, Input, Button,  Checkbox, Select } from 'antd';
// import { useDispatch } from 'react-redux';
// import { next } from '../../../actions/signup';

// const Step3 = () => {
//     const [form] = Form.useForm(),   
//     dispatch = useDispatch(),

//     nextStep = () => dispatch(next());
    
//     return (
//         <div>
//             <div className="content-wrapper table mb-56">
//                 <h4 className="center-text mt-67 mb-67">Make Payment</h4>
//                 <Form
//                     className="grid-view grid-2 colgap-42 rowgap-24"
//                     form={form}
//                     layout="vertical">
//                     <Form.Item className="span-2" label="Choose Your Payment Method">
//                         <Select placeholder="Select Payment Method">
//                             <Select.Option value="1">Debit/Credit Card</Select.Option>
//                             <Select.Option value="2">Debit/Credit Card</Select.Option>
//                         </Select>
//                     </Form.Item>
//                     <h4 className="span-2 center-text regular mt-37 mb-37">Debit/Credit Card Information</h4>

//                     <Form.Item label="Card Number Name">
//                         <Input placeholder="ex:Ehsaan H" />
//                     </Form.Item>

//                     <Form.Item label="Card Number">
//                         <Input placeholder="ex:1234 - 5678 - 9101 - 1213" />
//                     </Form.Item>

//                     <div className="grid-view grid-2 colgap-42">
//                         <Form.Item label="Expiry Month">
//                             <Input type="number" max={12} min={1} placeholder="ex:12" />
//                         </Form.Item>

//                         <Form.Item label="Expiry Year">
//                             <Input type="number" max={2020} min={2021} placeholder="ex:20" />
//                         </Form.Item>
//                     </div>
//                     <div className="grid-view grid-2 colgap-42">
//                         <Form.Item label="CVV Code">
//                             <Input type="number" minLength={3} maxLength={3} placeholder="ex:240" />
//                         </Form.Item>
//                     </div>
//                     <Form.Item className="span-2">
//                         <Checkbox>Save card details for future transactions</Checkbox>
//                     </Form.Item>
                    
//                     <Button className="primary span-2" onClick={nextStep}>Make Payment</Button> 

//                 </Form>
//             </div>
//         </div>
//     )
// }

// export default Step3

import { Form, Input, Button,  Checkbox, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { next } from '../../../actions/signup';

const Step3 = () => {
    const [form] = Form.useForm(),   
    dispatch = useDispatch(),

    nextStep = () => dispatch(next());
    
    return (
        <div>
            <div className="content-wrapper table mb-56">
                <h4 className="center-text mt-67 mb-67">Make Payment</h4>
                <Form
                    className="grid-view grid-2 colgap-42 rowgap-24"
                    form={form}
                    layout="vertical">
                    <Form.Item className="span-2" label="Choose Your Payment Method">
                        <Select placeholder="Select Payment Method">
                            <Select.Option value="1">Debit/Credit Card</Select.Option>
                            <Select.Option value="2">Debit/Credit Card</Select.Option>
                        </Select>
                    </Form.Item>
                    <h4 className="span-2 center-text regular mt-37 mb-37">Debit/Credit Card Information</h4>

                    <Form.Item label="Card Number Name">
                        <Input placeholder="ex:Ehsaan H" />
                    </Form.Item>

                    <Form.Item label="Card Number">
                        <Input placeholder="ex:1234 - 5678 - 9101 - 1213" />
                    </Form.Item>

                    <div className="grid-view grid-2 colgap-42">
                        <Form.Item label="Expiry Month">
                            <Input type="number" max={12} min={1} placeholder="ex:12" />
                        </Form.Item>

                        <Form.Item label="Expiry Year">
                            <Input type="number" max={2020} min={2021} placeholder="ex:20" />
                        </Form.Item>
                    </div>
                    <div className="grid-view grid-2 colgap-42">
                        <Form.Item label="CVV Code">
                            <Input type="number" minLength={3} maxLength={3} placeholder="ex:240" />
                        </Form.Item>
                    </div>
                    <Form.Item className="span-2">
                        <Checkbox>Save card details for future transactions</Checkbox>
                    </Form.Item>
                    
                    <Button className="primary span-2" onClick={nextStep}>Make Payment</Button> 

                </Form>
            </div>
        </div>
    )
}

export default Step3
