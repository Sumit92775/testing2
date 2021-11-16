import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import styles from './SearchResult.module.scss';
import { Checkbox, Rate, Carousel } from 'antd';
import Image from 'next/image';

const SearchResult = ({item}) => {
    const sponsored = item.sponsored ? <span className={ cx(styles['item-sponsored']) }><span className="material-icons">star</span> Sponsored</span> : null,
    [ images, setImages ] = useState([]),
    [ initialized, initialize] = useState(false),

    renderImages = (currImg = 0) => {
        setImages(item.images.map((img, i) => {
            return <div key={i} className={ cx(i==currImg ? styles['selected'] : '') }>
                <Image layout="fill" src={ img } alt="" />
            </div>
        }))
    },
    
    beforeChange = (from, to) => renderImages(to);

    useEffect(() => renderImages(), []);

    return (
        <div className={ cx('card card2 no-padding', styles['item']) }>
            { sponsored }
            <div className={ cx(styles['item-image']) }>
                <Carousel className="absolute hide-dots" beforeChange={ beforeChange } autoplay>
                    { images }
                </Carousel>
                <div className={ cx(styles['item-image-info']) }>
                    <span className={ cx('pull right', styles['item-likes']) }>
                        <span className={ cx("material-icons rounded", styles['item-likes-icon']) }>favorite</span>
                        { item.likes }
                    </span>
                    <div className={ cx(styles['image-strip']) }>
                        <span style={{ flexGrow: 1 }}></span>
                        { images }
                    </div>
                </div>
            </div>
            <div className={ cx(styles['item-info']) }>
                <div>
                    <h5>{ item.name }
                        <span className="pull fz-14 txt weight400 right">Starting From <strong>{ process.env.currency }{ item.startingPrice }</strong></span>
                    </h5>
                </div>
                <h6 className="regular">{ item.address }</h6>
                <Rate className="mr-10 small" value={ item.rating } /> <span>{ item.rating } ({ item.reviews })</span>
                <p className="txt dark1 weight500 mt-10">Offers</p>
                <ul className={ cx(styles['item-offers'], 'no-style') }>
                    { item.offers.map((offer, i) => (
                        <li key={i}>
                            <Checkbox defaultChecked={ offer.selected }>{ offer.name }</Checkbox>
                            <strong className="pull right">From { process.env.currency }{ offer.price }</strong>
                        </li>
                    )) }
                </ul>
                <div className="txt right mt-35">
                    <button className="ant-btn ghost primary mr-25">View All Services</button>
                    <button className="ant-btn primary">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
