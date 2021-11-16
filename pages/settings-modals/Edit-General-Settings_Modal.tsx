import { DatePicker, Form, Input, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React from 'react';
import moment from 'moment';

const GeneralSettingsModal = () =>{

    function handleChange(value : any) {
        console.log(`selected ${value}`);
    }

        
    const dateFormat = 'YYYY/MM/DD';
    const monthFormat = 'YYYY/MM';

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    const customFormat = (value : any)  => `custom format: ${value.format(dateFormat)}`;


    return(
        <div className="pl-12 pr-12">
            <Form className="mt-5">
                <Form.Item label="Timezone">
                    <Select className="h43" defaultValue="lucy" onChange={handleChange}>
                        <Option value="Arabian Standard Time (GMT+3)">Arabian Standard Time (GMT+3)</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                        Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </Form.Item>

                <Form.Item className="mt-26 mb-20">
                    <div className="user-ratings multi" style={{gridColumnGap : "53px"}}>
                        <Form.Item label="Tax Rate">
                            <Input style={{height : "43px !important"}}></Input>
                        </Form.Item>
                        
                        <Form.Item label="Date Format">
                            <Select className="h43"  defaultValue="15/01/199" onChange={handleChange}>
                                <Option value="DD/MM/YY">DD/MM/YY</Option>
                            </Select>
                        </Form.Item>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default GeneralSettingsModal;