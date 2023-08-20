import {useEffect,useRef}from'react';
import{useDispatch,useSelector}from'react-redux'
import {fetchAllStores}from'../../../store/stores'
import { fetchStoreDishes } from '../../../store/dishes';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import StoreComment from '../../Comments/StoreComment';


import './StoreDetail.css'


function StoreDetail(){
    const dispatch = useDispatch();
    const {storeId} = useParams();
    const store = useSelector(state => state.stores[storeId]);
    const dishes = useSelector(state => Object.values(state.dishes));//cause render, try to convert the array outside of the selector if have time
 
    useEffect(() => {
        if(!store){
            dispatch(fetchAllStores());
        }
    }, [dispatch]);

    useEffect(() => {
   
            dispatch(fetchStoreDishes(storeId));
  
    }, [dispatch,storeId]);

    
    

    const myRef = useRef(null);
    const handleScrollButtonClick = () => {
        myRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const categoriesArr = ['Most Popular','Picked for you','Featured Items','Drink','Entree','Burgers']

    const handleFavoriteClick = () => {
        alert('favorite feature coming soon!');
    }

    if(!store){
        return(<div>Loading...</div>)
    }
    
    return(
        <div className='store-detail-component'>
            <div className='store-detail-banner'>
                <i class="fa-solid fa-heart banner-icon" onClick={handleFavoriteClick}></i>
                <div className='store-detail-banner-img-container'>

                <img className='banner-image' src={store.bannerUrl ? store.bannerUrl : "https://cdn.discordapp.com/attachments/811082976501825539/1139436150923210772/images_3.jpg" } alt={store.name}/>
                </div>
            </div>
            <div className='store-detail-info-container'>
                <div className='store-detail-info-name'>
                    <h1 className='store-name'>{store.name}</h1>
                    </div>
                    <div className='store-detail-info-starRating-price'>
                    <i class="fa-solid fa-star"></i>{store.avgStarRating} ({(store.Comments?.length || 0) + ' Rating' + (store.Comments?.length > 1 ? 's' : '')}) • {store.category} • {store.costLevel} • <span className='view-review' onClick={handleScrollButtonClick}>View Reviews</span>
                    </div>
                    <div className='store-detail-info-delivery'>
                        {store.deliveryFee ? '$'+store.deliveryFee +' Delivery Fee'  : 'No Delivery Fee'}
                    </div>
                    <div className='store-detail-categories-all-dishes-container'>
                        <div className='store-detail-categories'>
                            {
                                categoriesArr.map((category) => (
                                    <div className='store-detail-single-category'>
                                        {category}
                                        </div>
                                ))
                            }
                        </div>
                        <div className='store-detail-all-dishes'>
                            <ol className='store-detail-all-dishes-list'>
                            {dishes.map((dish) => (
                    <li key={dish.id} className='dish-detail-card-container'>
                        <NavLink to={`/stores/${store.id}/dishes/${dish.id}`} className='dish-index-card'>
                            <div className='dish-index-card-image-container'>
                                <img className='dish-index-card-image' src={dish.imageUrl} alt={dish.name}/>
                            </div>
                            <div className='dish-index-card-info-container'>
                                <div className='dish-index-card-dish-name'>
                                    {dish.name}
                                </div>
                                <div className='dish-index-card-dish-price-calories'>
                                    {'$'+ dish.price} • {dish.calorie}  Cal
                                    </div>
                                </div>
                            </NavLink>
                    </li>
                ))}
                                </ol>
                        </div>
                        </div>

                </div>
                <div ref={myRef} className='store-detail-comment-component-container'><StoreComment store={store}/></div>
                
        </div>
    )
}

export default StoreDetail;