import Header from "../components/Public/Header"
import FooterMenus from "../components/FooterMenus"
import Footer from "../components/Footer";
import { Form, Input, Button, Checkbox, Divider, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { authenticate } from '../actions/user';
import cx from 'classnames';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { login } from "../services/auth";
import Cookies from 'universal-cookie';
import useTranslation from "next-translate/useTranslation";

export default function Search(props:any) {
    const userid = 'customer@saloonplus.com',
    pass = '12345678';
    
    const { t } = useTranslation('common');
    const cookies = new Cookies();
    const [form] = Form.useForm(),
    dispatch = useDispatch(),
    router = useRouter();

    const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
        },
        string: {
            min: '${label} must be at least ${min} characters',
        }
    },
    onFinish = (values: any) => {
        login({
            userType: 1,
            userName: values.userName,
            password: values.password
        })
        .then(res => {
            console.log(res)
            if(res.status) {
                localStorage.setItem('accessToken', res.accessToken);

                cookies.set('accessToken', res.accessToken);
                console.log("Cookies Token: ",cookies.get('accessToken'));
                localStorage.setItem('user', res.UserData);
                dispatch(authenticate(true));
                router.push(`${ process.env.base_url }home`);
            } else {
                message.config({duration: 5, top: 60})
                message.error( t(res.message) );
            }
        })
        .catch(error => {
            console.log(error)
        })

      
        // if(values.userName == userid && values.password == pass) {
        //     dispatch(authenticate(true));
        //     router.push(`${ process.env.base_url }home`);
        // }
        // router.push(`${ process.env.base_url }bookings`);
    }

    return (
        <div className="layout three-rows signup">
            <header>
                <Header></Header>
            </header>
            <main>
            <div className="content-wrapper table mb-56">
                    <h4 className="center-text mt-67 mb-67">Sign in to SaloonPlus</h4>
                    <Form
                        className="grid-view grid-1 rowgap-24"
                        form={form}
                        onFinish={onFinish}
                        layout="vertical"
                        validateMessages={validateMessages}>

                        <Form.Item name={['userName']} label="Email/Mobile/Username" rules={[{ required: true }]}>
                            <Input placeholder="ex:mystore@gmail.com" />
                        </Form.Item>
                        <Form.Item name={['password']} label="Password" rules={[{ required: true, min: 6 }]}>
                            <div className={cx('pwd-eye-cont', '_input')}>
                                <Input.Password className="input medium input" placeholder="input password" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                            </div>
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                {/* <Checkbox className="mt-10"><span className="primary-txt">Remember Me</span></Checkbox> */}
                            </Form.Item>
                            <Button className="primary pull-right" htmlType="submit">Sign In</Button>
                        </Form.Item>

                        <div className="center">
                            <Divider>
                                <Link href="/forgot-password" passHref={true}>
                                    <Button className="ant-btn ant-btn-link">Forgot password</Button>
                                </Link>
                            </Divider>
                        </div>
                    </Form>
                </div>
            </main>
            <footer>
                <FooterMenus />
                <Footer />
            </footer>
        </div>
    )
}
