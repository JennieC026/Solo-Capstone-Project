import {useEffect, useState}from'react';
import{useDispatch,useSelector}from'react-redux'
import { fetchAllStores } from '../../store/stores';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import CategoryCard from '../Stores/StoreIndex/CategoryCard';
import StoreCard from '../Stores/StoreCard/StoreCard';

import './FavoriteStoreIndex.css'



function FavoriteStoreIndex(){
    const dispatch = useDispatch();
    const stores = useSelector(state => Object.values(state.stores));
    const currentUser = useSelector(state => state.session.user);
    const favStores = stores.filter(store => store.isFavorite === true);
    

    
    const [showFilterMenu, setShowFilterMenu] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    
    
    useEffect(() => {
        if(stores.length === 0){
            dispatch(fetchAllStores());
        }
    }, [dispatch]);

    const handleSelect = (option) => {
        setSelectedOption(option);
        alert('This feature will be available soon!');

    }

    if(stores.length === 0){
        return(<div>Loading...</div>)
    }
     
    let storeContent;
    if(favStores.length === 0){
        storeContent = (
            <div className='store-index-card-container-no-fav'>

                <div className='no-favorites-yet'>
                    Add a favorite store to see it here!
                    </div>
                    <img className='no-favorites-yet-img' src='https://cdn.discordapp.com/attachments/811082976501825539/1154718827339321344/404_copy.png'/>
                </div>
        )
        }else if(!currentUser){
            storeContent = (
                <div className='store-index-card-container'>
                    
                    <div className='no-user-favorites'>
                        Login to see your favorite stores!
                        </div></div>)
        }else{
            storeContent =  (
            <ol className='all-stores-container'>
            {favStores.map((store) => (
                <StoreCard store={store} key={store.id}/>
            ))}
        </ol>)

        }
    
    return(
        <div className='store-index-component-container'>
            
            <div className='store-index-header-container'>
                My Favorite
                </div>
            {storeContent}
        </div>
    )
}

export default FavoriteStoreIndex;