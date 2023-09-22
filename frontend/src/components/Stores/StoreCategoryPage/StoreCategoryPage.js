import {useEffect, useState}from'react';
import{useDispatch,useSelector}from'react-redux'
import {fetchAllStores}from'../../../store/stores'
import { fetchFavorites,createFavorite } from '../../../store/favorite';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import CategoryCard from '../StoreIndex/CategoryCard';
import StoreCard from '../StoreCard/StoreCard';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { fetchCategories } from '../../../store/categories';
import './StoreCategoryPage.css';



function StoreCategoryPage(){
    const dispatch = useDispatch();
    const {categoryName} = useParams();

    const user = useSelector(state => state.session.user);
    const originStores = useSelector(state => Object.values(state.stores));
    const categories = useSelector(state => Object.values(state.categories));
    console.log('c',categories,originStores)
    const stores = originStores.filter(store => store.category === categoryName || categories[store.categoryId].categoryName   === categoryName);
    const [showFilterMenu, setShowFilterMenu] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [storeArray, setStoreArray] = useState(stores);
   
    
    
    useEffect(() => {
        if(originStores.length === 0){
            dispatch(fetchAllStores());
        }
        
    }, [dispatch]);

    useEffect(() => {
        if(categories.length === 0){
            dispatch(fetchCategories());
        }
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {

        if(stores.length > 0){
            setStoreArray(stores);
        }
    }, []);

    const handleSelect = (option) => {
        setSelectedOption(option);
        if(option === 'Picked for you'){
            setStoreArray(stores);
        }else if(option === 'Most Popular'){
            const sortedStores = stores.sort((a,b) => b.Comments.length - a.Comments.length);
            setStoreArray(sortedStores);
        }else if(option === 'Rating'){
            const sortedStores = stores.sort((a,b) => b.avgStarRating - a.avgStarRating);
            setStoreArray(sortedStores);
        }else if(option === 'Delivery Fee'){
            const sortedStores = stores.sort((a,b) => a.deliveryFee - b.deliveryFee);
            setStoreArray(sortedStores);
        }

    }
    if (originStores.length>0 && stores.length === 0){
        return(
            <div>
                <div className='store-index-categories-header'>
            <CategoryCard />
                </div>
                <div className='category-card-no-stores-text-img-container'>
                <div className='store-category-index-no-stores'>This categories doesn't have any stores yet. 
                </div>
                <img className='store-category-index-no-stores-img' src='https://cdn.discordapp.com/attachments/811082976501825539/1154718827339321344/404_copy.png'/>
                </div>
                </div>
            )
    }
    if(stores.length === 0){
        return(<div>Loading...</div>)
    }
    

   
    
    return(<div>
<div className='store-index-component-container'>
            <div className='store-index-categories-header'>
                <CategoryCard />
            </div>
            <div className='category-card-header'>
                <div className='category-card-header-text'>
                    {categoryName}
                </div>
            </div>
            <div className='store-index-recommend-area'>
            </div>
            <div className='store-index-filter-all-stores-container'>
                <div className='store-index-filter'>
                    <div className='store-index-filter-store-title'>
                        All Stores
                    </div>
                    <div onClick={() => setShowFilterMenu(!showFilterMenu)} className='store-index-filter-store-sort-container'>
                        <div className='store-index-filter-store-sort-title'>
                            Sort
                        </div>
                        <i className={showFilterMenu? 'fa-solid fa-angle-up': "fa-solid fa-angle-down"}></i>
                            
                    </div>
                        {showFilterMenu && (
                            <div className='store-index-filter-store-sort-menu'>
                                <div className='store-index-filter-store-sort-menu-option-container' onClick={() => handleSelect('Picked for you')}>
                                    <i className = {selectedOption === 'Picked for you' ? 'fa-solid fa-circle-dot' : 'fa-regular fa-circle'}></i>
                                <div  className='store-index-filter-store-sort-menu-option'>
                                    Picked for you
                                </div>
                                </div>

                                <div className='store-index-filter-store-sort-menu-option-container' onClick={() => handleSelect('Most Popular')}>
                                    <i className = {selectedOption === 'Most Popular' ? 'fa-solid fa-circle-dot' : 'fa-regular fa-circle'}></i>
                                <div  className='store-index-filter-store-sort-menu-option'>
                                    Most Popular
                                </div>
                                </div>

                                <div className='store-index-filter-store-sort-menu-option-container' onClick={() => handleSelect('Rating')}>
                                    <i className = {selectedOption === 'Rating' ? 'fa-solid fa-circle-dot' : 'fa-regular fa-circle'}></i>
                                <div  className='store-index-filter-store-sort-menu-option'>
                                    Rating
                                </div>
                                </div>

                                <div className='store-index-filter-store-sort-menu-option-container' onClick={() => handleSelect('Delivery Fee')}>
                                    <i className = {selectedOption === 'Delivery Fee' ? 'fa-solid fa-circle-dot' : 'fa-regular fa-circle'}></i>
                                <div  className='store-index-filter-store-sort-menu-option'>
                                    Least Delivery Fee
                                </div>
                                </div>
                            </div>)}
                    
                </div>
                <ol className='all-stores-container'>
                {storeArray.length>0? storeArray.map((store) => (
                    <StoreCard store={store} key={store.id}/>

                   
                )) :stores.map((store) => (
                    <StoreCard store={store} key={store.id}/>

                   
                ))}
            </ol>
                
            </div>
            
        </div>
    </div>)
}

export default StoreCategoryPage;