import React from 'react';

const NotificationCard = (props) =>{
    return(
        <div>
            <div className="card card2 mb-30">
                <div className="mb-3">
                    <span className="full-width pl-4 pr-4 pt-4 pb-4 fz-11 txt white" style={{backgroundColor : 'var(--secondary-1)', borderRadius : "4px"}}>{props?.cardDetails?.NotificationType?.typeName}</span>
                </div>
                                        
                <div>
                    <span className="full-width">{props?.cardDetails?.notification}</span>
                </div>

                <div>
                    <span className="full-width fz-11">{props?.cardDetails?.createdAt}</span>
                </div>
            </div>
        </div>
    )
}

export default NotificationCard;