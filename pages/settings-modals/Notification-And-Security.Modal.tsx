import {Button, Form, Input} from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React from 'react';

const NotiicationAndSecurityModal = () =>{

    return(
      <div className="pl-12 pr-12">
          <Form>
              <Form.Item label="Notification Methods">
                  <Checkbox>E-Mail</Checkbox>
                  <Checkbox>SMS</Checkbox>
              </Form.Item>

                <Form.Item className="mt-25" label='Verify Password'>
                    <Input type="password" placeholder="Password" style={{ width: 350 }}></Input>
                </Form.Item>

                <Form.Item className="mt-28 mb-40">
                    <Button className="primary txt">Change Password</Button>
                </Form.Item>
          </Form>

      </div>
    
    )

}
export default NotiicationAndSecurityModal;