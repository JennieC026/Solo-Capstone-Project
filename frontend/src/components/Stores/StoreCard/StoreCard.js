import {useEffect, useState}from'react';
import{useDispatch,useSelector}from'react-redux'
import {fetchAllStores}from'../../../store/stores'
import { fetchFavorites,createFavorite,deleteFavorite } from '../../../store/favorite';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import './StoreCard.css'


function StoreCard({store}){
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const [isFavorite, setIsFavorite] = useState(store.isFavorite);

    useEffect(() => {
        setIsFavorite(store.isFavorite);
    }, [store]);

    const handleFavClick = (e) => {
  
        e.preventDefault();
        if(isFavorite === false){
            dispatch(createFavorite({storeId:store.id}));
            setIsFavorite(true);
        }else{
            dispatch(deleteFavorite(store.id));
            setIsFavorite(false);
        }

        
        dispatch(fetchAllStores());

        
    }


    return ( <li key={store.id} className='store-index-card-container'>
        {user && 
        <div className='store-index-card-fav-container' onClick={handleFavClick}>
            <div className='store-index-card-fav-icon-background'>
                
            </div>
        <i className={isFavorite===true? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
            </div>
        }
    <NavLink to={`/stores/${store.id}`} className='store-index-card'>
        
        
        <div className='store-index-card-image-container'>
            <img className='store-index-card-image' src={store.coverUrl} alt='store'/>
        </div>
        <div className='store-index-card-info-container'>
            <div className='store-index-card-store-name'>
                {store.name}
            </div>
            <div className='store-index-card-store-delivery-info'>
                ${store.deliveryFee} Delivery Fee
            </div>
            <div className='store-index-card-store-starRating'>
                <div className='store-index-card-store-starRating-text'>
                {store.avgStarRating===0?'No Reviews Yet':store.avgStarRating}
                </div>
                <div className='store-index-card-store-starRating-stars'>
                {store.avgStarRating===0?'': <div>
{Array.from({ length: 5 }).map((_, index) => (
<i
key={index}
className={`fa-solid fa-star ${index < store.avgStarRating ? 'black-star' : 'grey-star'}`}
></i>
))}
</div>}
</div>
            </div>
        </div>
        </NavLink>
</li>)
}

export default StoreCard;