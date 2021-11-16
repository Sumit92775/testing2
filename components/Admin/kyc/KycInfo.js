import React from 'react';
import { Avatar, Timeline, Rate } from 'antd';


const KycInfo = () => {
    return (
        <>
            <div className="data-card pt-0">
                <div>
                    <strong>First Name</strong>
                    <p>Ehsaan</p>
                </div>
                <div>
                    <strong>Last Name</strong>
                    <p>H</p>
                </div>
                <div>
                    <strong>Address line 1</strong>
                    <p>Addressline 1</p>
                </div>
                <div>
                    <strong>Address line 2</strong>
                    <p>Address line 2</p>
                </div>
                <div>
                    <strong>Address line 3</strong>
                    <p>Address line 3</p>
                </div>
            </div>

            <div className="mt-25">
                <strong>Uploaded Documents</strong>
                <div className="uploaded-documents mt-20">
                    <div>
                        <Avatar shape="square" size={90} />
                        <p className="fz-11 lh-15 mt-5">Verification Image</p>
                    </div>
                    <div>
                        <Avatar shape="square" size={90} />
                        <p className="fz-11 lh-15 mt-5">Verification Image</p>
                    </div>
                    <div>
                        <Avatar shape="square" size={90} />
                        <p className="fz-11 lh-15 mt-5">Verification Image</p>
                    </div>
                </div>
            </div>

            <h5 className="mt-45">Application History</h5>
            <Timeline className="no-style mt-30">
                <Timeline.Item dot={<span className="material-icons ml-9 txt primary">fiber_manual_record</span>}>
                    <p className="txt primary"><strong>1st Application Submitted</strong></p>
                    <p className="tag txt light1">21 Nov 2021</p>
                </Timeline.Item>
                <Timeline.Item dot={<span className="material-icons ml-9 txt danger">fiber_manual_record</span>}>
                    <p className="txt danger"><strong>Application Rejected on 21 Nov 2021</strong></p>
                    <p className="tag txt light1">21 Nov 2021</p>
                    <p className="tag mt-4"><span className="material-icons rounded danger">close</span> Reason: <span className="txt danger">Face is not clear</span></p>
                </Timeline.Item>
                <Timeline.Item dot={<span className="material-icons ml-9 txt danger">fiber_manual_record</span>}>
                    <p className="txt danger"><strong>Application Rejected on 21 Nov 2021</strong></p>
                    <p className="tag txt light1">21 Nov 2021</p>
                    <p className="tag mt-4"><span className="material-icons rounded danger">close</span> Reason: <span className="txt danger">Face is not clear</span></p>
                </Timeline.Item>
            </Timeline>
        </>
    )
}

export default KycInfo

