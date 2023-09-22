import './CategoryCard.css'
import {useEffect, useState}from'react';
import{useDispatch,useSelector}from'react-redux'
import { fetchCategories } from '../../../store/categories'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';


function CategoryCard(){
    const dispatch = useDispatch();
    const unfilteredCategories = useSelector(state => Object.values(state.categories));
    const categories = unfilteredCategories.filter(category => category.categoryImageUrl !==null);


    useEffect(() => {
        if(categories.length === 0){
            dispatch(fetchCategories());
        }
        dispatch(fetchCategories());
    }, [dispatch]);

    if(categories.length === 0){
        return(<div>Loading...</div>)
    }

    return(
        <div className='category-card-component-container'>
            
            
            <div className='category-card-categories-container' >
                {categories.map(category => (
                    
                    <div className='category-card-category-container' key={category.id}>
                        <NavLink to={`/stores/categories/${category.categoryName}`} className='category-card-category-link'>
                            <div className='category-card-category-image-text-container'>
                        <div className='category-card-category-image-container'>
                            <img className='category-card-category-image' src={category.categoryImageUrl}></img>
                        </div>
                        <div className='category-card-category'>
                            {category.categoryName}
                        </div>
                        </div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryCard;