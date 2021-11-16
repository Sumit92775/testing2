import React, { useState } from 'react';
import styles from './Reviews.module.scss';
import cx from 'classnames';
import { Rate, Form, Select, Button } from 'antd';
import ReviewRight from './ReviewRight';
import Modal from 'antd/lib/modal/Modal';
import ReviewModal from '../../pages/Reviews/review-modal';
import DiscardModal from '../../pages/Reviews/discard-modal';
import astyles from './Tag.module.scss';
import { Help } from '@material-ui/icons';

const Reviews = () => {
   
    const [review, setReview] = useState(false);
    const [discard, setDiscard] = useState(false);
    const [receivedReviewClicked, setReceivedReviewClicked] = useState(true);
    const [selectedTab, setSelectedTab] = useState(1);
    const [modal, setModal] = useState(false);
    const [modalName, setModalName] = useState("");
    const [image, setImage] = useState("");
    const [username, setUsername] = useState("");
    const [service, setService] = useState("");
    const [time, setTime] = useState("");
    const [comment, setComment] = useState("");
   
    const handleOk = () => {
        // console.log('ok clicked', evt);
    }

    const handleCancel = () => {
       setModal(false);
       setReview(false);
       setDiscard(false);
    }
    
    const openModal = (type) => {

        console.log(type);
        setModal(true);
        
        if(type === "Review"){
            setReview(true);
            setModalName("Review");
        }else if(type === "Discard"){
            setDiscard(true);
            setModalName("Discard");
        }

    };

    const ModalContent = (image, username, time, service, comment) =>{
        // console.log(image+username+time+service+comment);
        setImage(image)
        setUsername(username)
        setService(service)
        setTime(time)
        setComment(comment)

        // return image;
    }

    const tags = [
        {id : 1, name : "Reviews Received (890)"},
        {id : 2, name : "Pending Reviews (2)"}
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
            replies: [
                {
                    user_name: 'Ehsaan',
                    rating: '5.0',
                    comment: 'Wonderful service by halais, did a great job from the time of order to delivery. Would love to make more orders in future.',
                    date_time: new Date(),
                    replies: [
                        {
                            user_name: 'Ehsaan',
                            rating: '5.0',
                            comment: 'Wonderful service by halais, did a great job from the time of order to delivery. Would love to make more orders in future.',
                            date_time: new Date()
                        },
                        {
                            user_name: 'Ehsaan',
                            rating: '5.0',
                            comment: 'Wonderful service by halais, did a great job from the time of order to delivery. Would love to make more orders in future.',
                            date_time: new Date()
                        },
                        {
                            user_name: 'Ehsaan',
                            rating: '5.0',
                            comment: 'Wonderful service by halais, did a great job from the time of order to delivery. Would love to make more orders in future.',
                            date_time: new Date()
                        }
                    ]
                },
                {
                    user_name: 'Ehsaan',
                    rating: '5.0',
                    comment: 'Wonderful service by halais, did a great job from the time of order to delivery. Would love to make more orders in future.',
                    date_time: new Date()
                },
                {
                    user_name: 'Ehsaan',
                    rating: '5.0',
                    comment: 'Wonderful service by halais, did a great job from the time of order to delivery. Would love to make more orders in future.',
                    date_time: new Date()
                }
            ]
        },
        {
            user_name: 'Halais',
            rating: '5.0',
            comment: 'Wonderful discipline from Ehsaan, did a great order with him. He was found with good understanding of the service and prompt payment.',
            booking_id: 'SP15912502',
            date_time: new Date(),
            replies: [
                {
                    user_name: 'Ehsaan',
                    rating: '5.0',
                    comment: 'Wonderful service by halais, did a great job from the time of order to delivery. Would love to make more orders in future.',
                    date_time: new Date()
                }
            ]
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

    const handleTag = (id) =>{
        setSelectedTab(id);
        
        if(id == 1){
            setReceivedReviewClicked(true);
        }else if(id == 2){
            // setReceivedReviewClicked()
            setReceivedReviewClicked(false);
        }
        
        
    }
    
    const handleSelectedTab = (id) =>{
        if(id == selectedTab){

        }
    }

    return (
        <div className={ cx("card", styles["card"] ) }>
            <h5 className={ cx("card-title", styles["card-title"]) }>Reviews For Halais</h5>
            <div className={ cx(styles["card-details"]) }>
                <div className={ styles['review-filters']}>
                    <div className="tags-wrap">
                        { tags.map(tag => (
                         <div key={tag.id} style={{backgroundColor : selectedTab === tag.id ? "black" : "white", color : selectedTab === tag.id ? "white" : "black"}} onClick={() =>{handleTag(tag.id);
                         handleSelectedTab(tag.id);
                         }} className={ cx(astyles['tag'], astyles['selected'])}>
                            <span className="mr-8">{ tag.name }</span>
                        </div>
                        )) }
                        <div className="flex center-content">
                            <Help></Help>
                        </div>
                    </div>
                    <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
                        <Form.Item label="Sort By">
                            <Select className="medium" defaultValue={sortings[0]}>
                                {sortings.map(option => (
                                    <Select.Option key={option} value={option}>{option}</Select.Option>
                                    ))}
                            </Select>
                        </Form.Item>
                    </Form>
                </div>
                <div className={ cx(styles['reviews-filter-container'], 'mt-35') }>
                    <div>
                        <div className={ styles["filter-container"] }>
                            <h5 className="mb-5">Reviews For Ehsaan</h5>
                            <Rate className="fz-18" value={ 5 } /> <span className="ant-rate-text fz-17">5 out of 5</span>
                            <ul className={ cx(styles['review-filters'], "no-style full-width") }>
                                { ratings.map(rating => (
                                    <li key={rating}>
                                        <a>{ rating.name } ({ rating.count })</a>
                                    </li>
                                )) }
                            </ul>

                            <Form layout="vertical" className="pull left full-width mt-45">
                                <Form.Item label="Categories">
                                    <Select defaultValue={categories[0]}>
                                        {categories.map(option => (
                                            <Select.Option key={option} value={option}>{option}</Select.Option>
                                            ))}
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Sub Categories" className="mt-25">
                                    <Select defaultValue={subCategories[0]}>
                                        {subCategories.map(option => (
                                            <Select.Option key={option} value={option}>{option}</Select.Option>
                                            ))}
                                    </Select>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>

                    {receivedReviewClicked === true ? 
                    
                    <ReviewRight type={"received_review"} modal={openModal} modalContent={ModalContent}></ReviewRight>

                    :

                    <ReviewRight type={"pending_reviews"} modal={openModal} modalContent={ModalContent}></ReviewRight>
                }
                    <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                            <div style={{width : "100%", 
                            height: "100%",
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            alignItems: "center"}}
                            >
                                <h4 className="txt primary">{modalName}</h4>
                            </div>

                    } footer={
                        <div className="pt-20 pb-20">
                            <Button className="mr-20" onClick={handleCancel}>{modalName === "Review" ? "Review" : "Cancel"}</Button>
                            <Button className="ant-btn primary mr-7" >{modalName === "Discard" ? "Discard" : "Discard"}</Button>
                        </div>
                        } visible={modal} onOk={handleOk} onCancel={handleCancel}>
                           
                           {modalName === "Review" ?  
                           < ReviewModal modalContent = {{image : image, username : username, service : service, time : time}}/>
                           : 
                           <>
                           < DiscardModal modalContent = {{image : image, username : username, service : service, time : time, comment : comment}}/>
                           </>
                           }
                        </Modal>
                        
                </div>
            </div>
        </div>
    )
}

export default Reviews;
