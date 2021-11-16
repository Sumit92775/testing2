// import Header from "../components/Public/Header"
// import FooterMenus from "../components/FooterMenus"
// import Footer from "../components/Footer";
// import { Steps } from 'antd';
// import Step1 from '../components/Auth/Signup/Step1';
// import Step1_2 from '../components/Auth/Signup/Step1-2';
// import Step3 from '../components/Auth/Signup/Step3';
// import Success from '../components/Auth/Signup/Success';
// import { useSelector } from 'react-redux';

// const { Step } = Steps;

// export default function Search() {
//     let form = <Step1></Step1>,
//     step = 0;

//     return useSelector((state:{signup: any}) => {
//         switch (state.signup.step) {
//             case 1:
//                 form = <Step1></Step1>;
//                 step = 0;
//                 break;
                
//             case 2:
//                 form = <Step1_2></Step1_2>;
//                 step = 0;
//                 break;
    
//             case 3:
//                 form = <Step3></Step3>;
//                 step = 1;
//                 break;
    
//             case 4:
//                 form = <Success base_url={ process.env.base_url }></Success>;
//                 step = 2;
//                 break;
        
//             default:
//                 form = <Step1></Step1>;
//                 step = 0;
//                 break;
//         }
        
//         return (
//             <div className="layout three-rows signup">
//                 <header>
//                     <Header></Header>
//                 </header>
//                 <main>
//                     <div>
//                         <Steps className="content-wrapper" style={{visibility: step == 2 ? 'hidden' : 'visible'}} current={ step }>
//                             <Step title="Login" icon={<span className="material-icons">person</span>} />
//                             <Step title="Verification" icon={<span className="material-icons">table_chart</span>} />
//                             <Step title="Done" icon={<span className="material-icons">check_circle</span>} />
//                         </Steps>
//                     </div>
//                     { form }
//                 </main>
//                 <footer>
//                     <FooterMenus />
//                     <Footer />
//                 </footer>
//             </div>
//         )
//     });

// }

// // export default search

import React, { useState } from 'react';
import Header from "../components/Public/Header";
import FooterMenus from "../components/FooterMenus";
import Footer from "../components/Footer";
import { Steps } from 'antd';
import Step1 from '../components/Auth/Signup/Step1';
import Step1_2 from '../components/Auth/Signup/Step1-2';
// import Step2 from '../components/Auth/Signup/Step2';
import Step3 from '../components/Auth/Signup/Step3';
import Success from '../components/Auth/Signup/Success';
import { useSelector, useDispatch } from 'react-redux';

const { Step } = Steps;

export default function Search() {
    const [formData, setFormData] = useState({});
    let form = <Step1></Step1>,
    step = 0,
    dispatch = useDispatch();

    return useSelector((state:{signup: any}) => {
        // state.signup.step = 2;
        switch (state.signup.step) {
            case 1:
                form = <Step1 onNext={(value) => {
                    setFormData({ value });
                }}></Step1>;
                step = 0;
                break;
                
            case 2:
                form = <Step1_2 formData={formData}></Step1_2>;
                step = 1;
                break;
    
            // case 3:
            //     form = <Step2 title="Service Provider Subscription Tiers"></Step2>;
            //     step = 1;
            //     break;
    
            // case 4:
            //     form = <Step3></Step3>;
            //     step = 2;
            //     break;
    
            case 3:
                form = <Success></Success>;
                step = 2;
                break;
        
            default:
                form = <Step1></Step1>;
                step = 0;
                break;
        }
        
        return (
            <div className="layout three-rows signup">
                <header>
                    <Header></Header>
                </header>
                <main>
                    <div>
                        <Steps className="content-wrapper" style={{visibility: step == 3 ? 'hidden' : 'visible'}} current={ step }>
                            <Step title="Register" icon={<span className="material-icons">person</span>} />
                            <Step title="Verification" icon={<span className="material-icons">table_chart</span>} />
                            <Step title="Done" icon={<span className="material-icons">check_circle</span>} />
                        </Steps>
                    </div>
                    { form }
                </main>
                <footer>
                    <FooterMenus />
                    <Footer />
                </footer>
            </div>
        )
    });

}

// export default search
