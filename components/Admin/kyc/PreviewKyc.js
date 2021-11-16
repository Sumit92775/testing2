// import { Timeline } from 'antd';
// import { ClockCircleOutlined } from '@ant-design/icons';
// import React from 'react';
// import styles from './../../../styles/components/Kyc-Preview.module.scss'


// const PreviewKyc = () => {

//     let applicationHistory = [{
//      type : "submitted",
//      text : "1st Application Submitted",
//      date : "21 Nov 2021"   
//     },{
//         type : "rejected",
//         text : "Application Rejected on 21 Nov 2021",
//         date : "21 Nov 2021",
//         warning : [{
//             warningLogo : "warning",
//             warningText : "Reason: Face is not clear",    
//         }]
//        },{
//         type : "resubmitted",
//         text : "1st Application Re-Submitted",
//         date : "21 Nov 2021"   
//        }]

//     return (
//         <>
//         <div className={styles['kyc-data']}>
//             <span><h5 style={{paddingBottom : "19px"}}>KYC Data</h5></span>
//             <div className="grid-view grid-3 colgap-20 rowgap-20">
//                 <span><strong>First Name</strong><br/>content</span>
//                 <span><strong>Last Name</strong><br/>content</span>
//                 <span><strong>Address line 1</strong><br/>content</span>
//                 <span><strong>Address line 2</strong><br/>content</span>
//                 <span><strong>Address line 2</strong><br/>content</span>
//             </div>
//             <span style={{paddingTop : "22px"}}><strong>Uploaded Documents</strong></span>
//             <div className={styles['uploaded-document-images']}>
//                 <div className={styles['img-text']}>
//                     <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"></img>
//                     <span>Verification Image</span>
//                 </div>

//                 <div className={styles['img-text']}>
//                     <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"></img>
//                     <span>Business Registration</span>
//                 </div>
//             </div>
//         </div>

//         <div className={styles['application-listing']}>
//             <strong><h5>Application History</h5></strong>
//             <div className={styles['history-container']} style={{display : "flex", flexDirection :"column"}}>
//               {/* <div className={styles['main-container']}> */}

//                   {applicationHistory.map((obj) =>{
//                       return(

//                         <Timeline>
//                                  <Timeline.Item><span><strong>Create a services site 2015-09-01</strong></span></Timeline.Item>
//                                  <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
//                                  <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
//                              </Timeline>

//                         //   obj.type === "submitted" ? 

//                         //   <>

//                         //     <Timeline>
//                         //         <Timeline.Item><span><strong>Create a services site 2015-09-01</strong></span></Timeline.Item>
//                         //         <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
//                         //         <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
//                         //         Technical testing 2015-09-01
//                         //         </Timeline.Item>
//                         //         <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
//                         //     </Timeline>

//                         //     {
//                         //         /* <div className={styles['top']}>
//                         //             <span className="material-icons" style={{paddingRight : "13px"}}>fiber_manual_record</span>
//                         //             <span style={{color : "vary(--primary-1)"}}><strong>1st Application Submitted</strong></span>
//                         //         </div>
//                         //         <div className={styles['bottom']}>
//                         //             <span style={{fontSize : "var(--font-11)", color : "var(--light-neutral-1)"}}> 21 Nov 2021</span>
                                    
//                         //         </div> */
//                         //     }
//                         //   </>           
//                         //   :
                          
//                         //   obj.type === "rejected" ? 
//                         //   <>
//                         //     <div className={styles['top']}>
//                         //         <span className="material-icons" style={{paddingRight : "13px"}}>fiber_manual_record</span>
//                         //         <span style={{color : "var(--primary-1)"}}><strong>1st Application Submitted</strong></span>
//                         //     </div>
//                         //     <div className={styles['bottom']}>
//                         //         <span style={{fontSize : "var(--font-11)", color : "var(--light-neutral-1)"}}> 21 Nov 2021</span>   
//                         //         <div className={styles['warning']}>
//                         //             <span className="material-icons" style={{height : "14px", width : "14px"}}>cancel</span>
//                         //             <span style={{fontSize : "var(--font-11)", color : "var(--dark-neutral-4)"}}>Reason: <span style={{fontSize : "var(--font-11)", color : "var(--red-1)"}}>Face is not clear</span></span>
//                         //         </div>          
            
//                         //     </div>
//                         //   </> 
//                         //   :
//                         //   <>
//                         //     <div className={styles['top']}>
//                         //         <span className="material-icons" style={{paddingRight : "13px"}}>fiber_manual_record</span>
//                         //         <span style={{color : "vary(--primary-1)"}}><strong>1st Application Re-Submitted</strong></span>
//                         //     </div>
//                         //     <div className={styles['bottom']}>
//                         //         <span style={{fontSize : "var(--font-11)", color : "var(--light-neutral-1)"}}>21 Nov 2021</span>
//                         //     </div>
//                         //   </> 

//                       )
//                   })}

//               </div>
//             {/* </div> */}
//         </div>
//         </>
//     )
// }

// export default PreviewKyc
