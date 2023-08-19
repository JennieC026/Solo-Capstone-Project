import {useEffect}from'react';
import{useDispatch,useSelector}from'react-redux'
import {fetchAllStores}from'../../../store/stores'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import './StoreIndex.css'


function StoreIndex(){
    const dispatch = useDispatch();
    const stores = useSelector(state => Object.values(state.stores));
    
    
    useEffect(() => {
        if(stores.length === 0){
            dispatch(fetchAllStores());
        }
    }, [dispatch]);

    if(stores.length === 0){
        return(<div>Loading...</div>)
    }
     
    
    return(
        <div className='store-index-component-container'>
            <div className='store-index-categories-header'>
            </div>
            <div className='store-index-recommend-area'>
            </div>
            <div className='store-index-filter-all-stores-container'>
                <div className='store-index-filter'>All Store Filter Placeholder</div>
                <ol className='all-stores-container'>
                {stores.map((store) => (
                    <li key={store.id} className='store-index-card-container'>
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
          className={`fa-solid fa-star ${index <= store.avgStarRating ? 'black-star' : 'grey-star'}`}
        ></i>
      ))}
    </div>}
    </div>
                                </div>
                            </div>
                            </NavLink>
                    </li>
                ))}
            </ol>
            </div>
            
        </div>
    )
}

export default StoreIndex;