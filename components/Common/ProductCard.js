import styles from './ProductCard.module.scss';
import { Rate } from 'antd';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { removeProvider } from '../../actions/sponsoredProviders'
import Link from 'next/link';

const ProductCard = (data) => {
    const dispatch = useDispatch();
    console.log("Data: ",data.product);

    return (
        <Link href={{
        pathname: "/service-detail",
        query: {
            id: data.product.id,
        }
    }} passHref={true} >
            <div className={styles['product-card']} onClick={() => dispatch(removeProvider(data.product.id))}>
                <div className={styles['product-image']}>
                    <Image layout="fill" src="/slider 1.jpg" alt={""} />
                </div>
                <div className={styles['product-details']}>
                    <h6 className="mb-3">{ data.product.storeName }</h6>
                    <div className={styles['product-rating']}>
                        <Rate className="mr-10" value={ data.product.rating } /> <span>{ data.product.rating }</span>
                        {/* <Rate className="mr-10" value={ data.product.rating } /> <span>{ data.product.rating } ({ data.product.reviews })</span> */}
                    </div>
                    <span>{data.product.startingFrom}</span>
                    <br/>
                    <span>{data.product.location},{data.product.city}</span>
                    {/* <p>{ data.product.sortDesc }</p> */}
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
