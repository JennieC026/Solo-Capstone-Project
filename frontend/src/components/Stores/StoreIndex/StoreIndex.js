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
        <div>
            <div className='store-index-categories-header'>
                Categories Placeholder
            </div>
            <div className='store-index-recommend-area'>
                Recommend Area Placeholder
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
                                    ${store.deliveryFee}Delivery Fee
                                </div>
                                <div className='store-index-card-store-starRating'>
                                    {store.starRating}
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