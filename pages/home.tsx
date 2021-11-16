import Image from 'next/image';
import ProductCard from '../components/Common/ProductCard';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button, Input, message } from 'antd';
import PublicLayout from '../components/Public/Layout';
import Tag from '../components/Common/Tag';
import Icon from '@material-ui/core/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { addProvider } from '../actions/sponsoredProviders';
import styles from '../styles/pages/Index.module.scss';
import { useEffect, useState } from 'react';
import { getStoreByLocation } from '../services/home';
import { getNotifications } from '../services/notification';
import { getCartStatus } from '../services/header';
import router from 'next/router';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

export default function Home() {
  const dispatch = useDispatch();
  let items = useSelector((state:{sponsoredProviders: any}) => state.sponsoredProviders);

  const [notificationCount, setNotificationCount] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [ourTopProvider, setOurTopProvider] = useState([]);
  const [userSearch, setUserSearch] = useState('');

  useEffect( () =>{
    try{
        getNotifications(1).then(res =>{
            if(res.status === 404){
              setNotificationCount(0);
            }else{
              setNotificationCount(res?.newNotifications);
              
            }
        }).catch(error =>{
            console.log(error);
        })

      getStoreByLocation().then(res =>{
        console.log("Response: ",res);
        setOurTopProvider(res.data);
      })
      // console.log(res);
      message.config({
        duration: 5,
        top: 80
      })

      getCartStatus().then(res =>{
        if(res.status == false || res.status == 403 || res.status == 404){
          setCartItemCount(0);
          console.log("ResponseCart: ",res);
        }else{
          if(res.data){
            console.log("Cart Count Home: ",res.data);
            setCartItemCount(res.data[0].cartCount)
          }
        }

        console.log("RES1: ",res.status);
        
      })


      getStoreByLocation().then(res =>{
        console.log(res);
        if(res?.status){
          if(res?.data){
            setOurTopProvider(res.data);
          }else{
            message.error("store");
          }
        }else{
          message.error("Server Error");
        }
      });

    }catch(error: any){
      console.log(error);
      message.error(error);
    }

  },[])

  const handleApiFetch = async () =>{
  try{
    let res = await getStoreByLocation();
    console.log(res);
    message.config({
      duration: 5,
      top: 80
    })

    if(res.status){
      setOurTopProvider(res.data);
    }else{
      message.error("Server Error");
    }
  }catch(error: any){
    console.log(error);
    message.error(error);
  }
  }

  let products = [
    {
      image: '/product (1).png',
      name: 'Dorman Beauty Clinic',
      rating: 5.0,
      reviews: 24,
      sortDesc: 'All kind of beauty services at an affordable rate'
    },
    {
      image: '/product (2).png',
      name: 'Dorman Beauty Clinic',
      rating: 3.2,
      reviews: 24,
      sortDesc: 'All kind of beauty services at an affordable rate'
    },
    {
      image: '/product (3).png',
      name: 'Dorman Beauty Clinic',
      rating: 5,
      reviews: 24,
      sortDesc: 'All kind of beauty services at an affordable rate'
    },
    {
      image: '/product (4).png',
      name: 'Dorman Beauty Clinic',
      rating: 5,
      reviews: 24,
      sortDesc: 'All kind of beauty services at an affordable rate'
    },
    {
      image: '/product (5).png',
      name: 'Dorman Beauty Clinic',
      rating: 5,
      reviews: 24,
      sortDesc: 'All kind of beauty services at an affordable rate'
    },
  ];
  let tags = [
    {
      name: 'Restaurants',
      icon: 'room_service',
      selected: true
    },
    {
      name: 'Beauty Shops',
      icon: 'local_florist',
      selected: false
    },
    {
      name: 'Clinics',
      icon: 'local_pharmacy',
      selected: false
    },
    {
      name: 'Driving Training',
      icon: 'bluetooth_drive',
      selected: false
    },
    {
      name: 'Beverages',
      icon: 'local_bar',
      selected: false
    },
    {
      name: 'Bakery and Desserts',
      icon: 'fastfood',
      selected: true
    },
    {
      name: 'Sports Clubs',
      icon: 'directions_bike',
      selected: true
    },
    {
      name: 'Venue',
      icon: 'meeting_room',
      selected: false
    },
    {
      name: 'Gift Shop',
      icon: 'card_giftcard',
      selected: false
    }
  ],
  loadMore = () => {
    products.map((product, j) => {
      const id = `${Date.now()}${j}`;
      dispatch(addProvider(<ProductCard product={{...product, id: id}} key={id} />));
    })
  };

  const handleSearch = () =>{
    router.push(`${process.env.base_url}search`);
  }

  return (
    <PublicLayout data={{cartCount: cartItemCount, notificationCount: notificationCount}}>
        <section className="banner home">
          <Image layout="fill" src="/slider 1.jpg" alt="" />
          <div className={styles['search-container']}>
            <h1>No Waiting, any more</h1>
            <h5>A supportive text to elaborate the idea to a more specific deal</h5>
            <div className={styles['find-container']}>
              <Input className="pull left pr-0" style={{border: "none"}} value={userSearch} onChange={(event) => setUserSearch(event.target.value)} placeholder="Search for a specific service or category here!" suffix={<div className={styles['ls-container']}>
                  <span className="material-icons txt primary ml-10">my_location</span>
                  <span className="txt primary ml-10 mr-20">Riyadh</span>
                  <Button className="txt primary" style={{borderRadius: "2px"}} onClick={handleSearch}><span className="material-icons-outlined">search</span></Button>
                </div>}>  
              </Input>
            </div>
          </div>
        </section>
        
        <section className={ styles['providers-section'] }>
          <h2 onClick={() => handleApiFetch}>Our Top Providers</h2>
          <h4 className="regular mb-56">Browse few of the top performers of the week</h4>
          <div className="products-wrapper">
            {
              ourTopProvider? 
              ourTopProvider.map((product, i) => {
                return <ProductCard product={product} key={i} />
              })
              : 
              <>
              </>
            }
          </div>
        </section>

        <section className="banner home banner-2"></section>

        <section className={ styles['sponsored-providers'] }>
          <h2>Sponsored Providers</h2>
          <h4 className="regular mb-43">Browse few of the top performers of the week</h4>
          <div className="tags-wrap mb-40">
          {
            tags.map((tag, i) => {
              return <Tag key={i} name={tag.name} icon={<Icon>{tag.icon}</Icon>} selected={tag.selected} />
            })
          }
          </div>
          <div className="products-wrapper">
            { items }
          </div>
          <div className="mt-55 mb-25 center">
            <Button className="primary" onClick={() => {loadMore;
            handleApiFetch;
            }}>Load More</Button>
          </div>
        </section>
        
        <section className="p-35">
          <div className="banner home banner-3"></div>
        </section>
    </PublicLayout>
  )
}