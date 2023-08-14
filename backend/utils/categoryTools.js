
 const findBiggestCategory = (category) => {

    while(category.parentCategoryId!==null){
        category = category.StoreCategory;
    }

    return category.categoryName
    }



module.exports = {findBiggestCategory}