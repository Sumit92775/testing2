import React from 'react';
import styles from './Reviews.module.scss';
import cx from 'classnames';
import { Rate, Form, Select, Avatar, List, Button } from 'antd';
import Tag from './Tag';
import * as moment from 'moment';


const ReviewRight = (props) =>{

    // console.log(props.modalContent("image","image","image","image","image"));


    const tags = [
        'Completed Bookings (3500)',
        'Reviews Received  (890)'
    ],
    sortings = ['Latest Reviews', 'Sorting 1', 'Sorting 2', 'Sorting 3'],
    categories = ['Restaurants', 'Category 1', 'Category 2', 'Category 3'],
    subCategories = ['Fine Dining', 'Sub Category 1', 'Sub Category 2', 'Sub Category 3'],
    ratings = [
        { name: '5 Stars', count: 1 },
        { name: '4 Stars', count: 0 },
        { name: '3 Stars', count: 0 },
        { name: '2 Stars', count: 0 },
        { name: '1 Stars', count: 0 }
    ],
    reviews = [
        {
            user_name: 'Halais',
            rating: '5.0',
            comment: 'Wonderful discipline from Ehsaan, did a great order with him. He was found with good understanding of the service and prompt payment.',
            booking_id: 'SP15912502',
            date_time: new Date(),
            service: 'Hair Cut'
        },
        {
            user_name: 'Halais',
            rating: '5.0',
            comment: 'Wonderful discipline from Ehsaan, did a great order with him. He was found with good understanding of the service and prompt payment.',
            booking_id: 'SP15912502',
            date_time: new Date(),
            service: 'Hair Cut'
        },
        {
            user_name: 'Halais',
            rating: '5.0',
            comment: 'Wonderful discipline from Ehsaan, did a great order with him. He was found with good understanding of the service and prompt payment.',
            booking_id: 'SP15912502',
            date_time: new Date(),
            service: 'Hair Cut'
        },
        {
            user_name: 'Halais',
            rating: '5.0',
            comment: 'Wonderful discipline from Ehsaan, did a great order with him. He was found with good understanding of the service and prompt payment.',
            booking_id: 'SP15912502',
            date_time: new Date(),
            service: 'Hair Cut'
        },
    ],
    rendered_reviews = [],
    render_reviews = (reviews, level=0) => {
        reviews.forEach(review => {
            review['level'] = level;
            rendered_reviews.push(review);
            if(review?.replies) {
                render_reviews(review.replies, level+1)
            }
        });
    };

    render_reviews(reviews);


    return(
        <div className={ cx(styles["reviews"], "reviews") }>

            <div className="txt pull center mt-50">
                <span>No Reviews Available.</span>
            </div>
        {/* <List
            itemLayout="vertical"
            pagination={{
                onChange: page => {
                    console.log(page)
                },
                pageSize: 3,
            }}
            dataSource={ rendered_reviews }
            renderItem = {review => (
                <List.Item key={review} className={ `level-${review?.level}` } 
                    actions={[
                        <span key={'date_time'}>{ moment(review.date_time).format(`${process.env.date_format} ${process.env.time_format}`) }</span>,
                        (review?.booking_id && <span>Booking ID <span className="txt italic">{  review.booking_id }</span></span>),
                        props.type === "pending_reviews" ? 
                            <div className={styles['reviewed-requests-container']}>
                                    <Button onClick={() =>{props.modal("Review");
                                props.modalContent("image", review.user_name, date=>{ moment(review.date_time).format(`${process.env.date_format} ${process.env.time_format}`) }, review.service,"");
                                }}>Review</Button>
                                    <Button className="txt primary" onClick={() =>{props.modal("Discard");
                                props.modalContent("image", review.user_name, date=>{ moment(review.date_time).format(`${process.env.date_format} ${process.env.time_format}`) }, review.service, review.comment);
                                }}>Discard</Button>
                            </div>
                            
                            : 
                            <>
                            </>
                        
                    ]}
                >
                    <List.Item.Meta
                        avatar={<Avatar size={60} />}
                        title={
                            <div className="review-header">
                                <strong className='user-name'>{ review.user_name }</strong>
                                <Rate className="fz-14" value={ review.rating } /> <span className="ant-rate-text">({ review.rating })</span>
                            </div>
                        }
                        // description={ props.type === "pending_reviews" ? review.service : review.comment }
                        //     <div className={ styles["review-comment"] }>{ review.comment }</div>
                        // }
                        description = {
                            <div>

                                { props.type === "pending_reviews" ? review.service : review.comment }
                                
                                </div>

                        }
                    ></List.Item.Meta>
                </List.Item>
            )}
        ></List> */}
    </div>

    )
}

export default ReviewRight;