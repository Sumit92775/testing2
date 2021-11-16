// // import React from 'react';
// // import Switch from '../../../components/Common/Switch';
// // import SubscriptionCard from "../../Common/SubscriptionCard";
// // import { useDispatch } from 'react-redux';
// // import { next } from '../../../actions/signup';

// // const Step2 = (props) => {
// //     const subscriptions = [
// //         {
// //             price: 60,
// //             desc: `Per Month, Billed Annually or 
// //             $5 Month - to - Month`,
// //             title: 'Basic',
// //             sub_title: 'Basic Plan Features',
// //             features: [
// //                 { name: 'Upcoming booking visibility', value: '7 Days', available: true},
// //                 { name: 'Past Booking visibility', value: '7 Days', available: true},
// //                 { name: 'Branches', value: 'Upto 5', available: true},
// //                 { name: 'Category', value: '2', available: true},
// //                 { name: 'Sub-Category', value: '1', available: true},
// //                 { name: 'Menu', value: '3 Titles', available: true},
// //                 { name: 'Staff Management', value: 'No', available: false},
// //                 { name: 'Gift Card Creation', value: 'No', available: false},
// //                 { name: 'Reports', value: '7 Days', available: true},
// //                 { name: 'SP Policy ', value: 'Regular Season ONLY', available: true},
// //                 { name: 'Other related functionality', value: 'No', available: false},
// //             ],
// //             button_txt: 'Start 30 Days Free Trial',
// //             is_premium: false
// //         },
// //         {
// //             price: 180,
// //             desc: `Per Month, Billed Annually or 
// //             $15 Month - to - Month`,
// //             title: 'Standard',
// //             sub_title: 'Standard Plan Features',
// //             features: [
// //                 { name: 'Upcoming booking visibility', value: '14 Days', available: true},
// //                 { name: 'Past Booking visibility', value: '14 Days', available: true},
// //                 { name: 'Branches', value: 'Upto 10', available: true},
// //                 { name: 'Category', value: '4', available: true},
// //                 { name: 'Sub-Category', value: '3', available: true},
// //                 { name: 'Menu', value: '6 Titles', available: true},
// //                 { name: 'Staff Management', value: 'Upto 25', available: true},
// //                 { name: 'Gift Card Creation', value: 'Yes', available: true},
// //                 { name: 'Reports', value: '14 Days', available: true},
// //                 { name: 'SP Policy ', value: 'Regular + High Seasons', available: true},
// //                 { name: 'Other related functionality', value: 'Yes', available: true},
// //             ],
// //             button_txt: 'Start 30 Days Free Trial',
// //             is_premium: true
// //         },
// //         {
// //             price: 1200,
// //             desc: `Per Month, Billed Annually or 
// //             $120 Month - to - Month`,
// //             title: 'Professional',
// //             sub_title: 'Professional Plan Features',
// //             features: [
// //                 { name: 'Upcoming booking visibility', value: '30 Days', available: true},
// //                 { name: 'Past Booking visibility', value: '30 Days', available: true},
// //                 { name: 'Branches', value: 'Unlimited', available: true},
// //                 { name: 'Category', value: '12', available: true},
// //                 { name: 'Sub-Category', value: '5', available: true},
// //                 { name: 'Menu', value: '18 Titles', available: true},
// //                 { name: 'Staff Management', value: 'Unlimited', available: true},
// //                 { name: 'Gift Card Creation', value: 'Yes', available: true},
// //                 { name: 'Reports', value: '30 Days', available: true},
// //                 { name: 'SP Policy ', value: 'Regular + High Seasons', available: true},
// //                 { name: 'Other related functionality', value: 'Yes', available: true},
// //             ],
// //             button_txt: 'Start 30 Days Free Trial',
// //             is_premium: false
// //         }
// //     ],
// //     dispatch = useDispatch(),

// //     nextStep = () => {
// //         dispatch(next())
// //     };

// //     return (
// //         <div>
// //             <h4 className="center-text mt-50">{ props?.title ? props.title : 'Subscription Tiers'}</h4>
// //             <p className="center-text mt-6">Chose the best one that fits your needs</p>
// //             <div className="center-text mt-11">
// //                 <Switch></Switch>
// //             </div>
// //             <div className="mt-20 mb-50">
// //                 <div className="subscriptions">
// //                     { subscriptions.map((feature, i) => <SubscriptionCard key={i} subscription={feature} click={nextStep}/>) }
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Step2

// import React from 'react';
// import Switch from '../../Common/_Switch';
// import SubscriptionCard from "../../Common/SubscriptionCard";
// import { useDispatch } from 'react-redux';
// import { next } from '../../../actions/signup';

// const Step2 = (props) => {
//     const subscriptions = [
//         {
//             price: 60,
//             desc: `Per Month, Billed Annually or 
//             $5 Month - to - Month`,
//             title: 'Basic',
//             sub_title: 'Basic Plan Features',
//             features: [
//                 { name: 'Upcoming booking visibility', value: '7 Days', available: true},
//                 { name: 'Past Booking visibility', value: '7 Days', available: true},
//                 { name: 'Branches', value: 'Upto 5', available: true},
//                 { name: 'Category', value: '2', available: true},
//                 { name: 'Sub-Category', value: '1', available: true},
//                 { name: 'Menu', value: '3 Titles', available: true},
//                 { name: 'Staff Management', value: 'No', available: false},
//                 { name: 'Gift Card Creation', value: 'No', available: false},
//                 { name: 'Reports', value: '7 Days', available: true},
//                 { name: 'SP Policy ', value: 'Regular Season ONLY', available: true},
//                 { name: 'Other related functionality', value: 'No', available: false},
//             ],
//             button_txt: 'Start 30 Days Free Trial',
//             is_premium: false
//         },
//         {
//             price: 180,
//             desc: `Per Month, Billed Annually or 
//             $15 Month - to - Month`,
//             title: 'Standard',
//             sub_title: 'Standard Plan Features',
//             features: [
//                 { name: 'Upcoming booking visibility', value: '14 Days', available: true},
//                 { name: 'Past Booking visibility', value: '14 Days', available: true},
//                 { name: 'Branches', value: 'Upto 10', available: true},
//                 { name: 'Category', value: '4', available: true},
//                 { name: 'Sub-Category', value: '3', available: true},
//                 { name: 'Menu', value: '6 Titles', available: true},
//                 { name: 'Staff Management', value: 'Upto 25', available: true},
//                 { name: 'Gift Card Creation', value: 'Yes', available: true},
//                 { name: 'Reports', value: '14 Days', available: true},
//                 { name: 'SP Policy ', value: 'Regular + High Seasons', available: true},
//                 { name: 'Other related functionality', value: 'Yes', available: true},
//             ],
//             button_txt: 'Start 30 Days Free Trial',
//             is_premium: true
//         },
//         {
//             price: 1200,
//             desc: `Per Month, Billed Annually or 
//             $120 Month - to - Month`,
//             title: 'Professional',
//             sub_title: 'Professional Plan Features',
//             features: [
//                 { name: 'Upcoming booking visibility', value: '30 Days', available: true},
//                 { name: 'Past Booking visibility', value: '30 Days', available: true},
//                 { name: 'Branches', value: 'Unlimited', available: true},
//                 { name: 'Category', value: '12', available: true},
//                 { name: 'Sub-Category', value: '5', available: true},
//                 { name: 'Menu', value: '18 Titles', available: true},
//                 { name: 'Staff Management', value: 'Unlimited', available: true},
//                 { name: 'Gift Card Creation', value: 'Yes', available: true},
//                 { name: 'Reports', value: '30 Days', available: true},
//                 { name: 'SP Policy ', value: 'Regular + High Seasons', available: true},
//                 { name: 'Other related functionality', value: 'Yes', available: true},
//             ],
//             button_txt: 'Start 30 Days Free Trial',
//             is_premium: false
//         }
//     ],
//     dispatch = useDispatch(),
    

//     nextStep = () => {
//         dispatch(next())
//     };

//     return (
//         <div>
//             <h4 className="center-text mt-50">{ props?.title ? props.title : 'Subscription Tiers'}</h4>
//             <p className="center-text mt-6">Chose the best one that fits your needs</p>
//             <div className="center-text mt-11">
//                 <Switch></Switch>
//             </div>
//             <div className="mt-20 mb-50">
//                 <div className="subscriptions">
//                     { subscriptions.map((feature, i) => <SubscriptionCard key={i} subscription={feature} click={nextStep}/>) }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Step2
