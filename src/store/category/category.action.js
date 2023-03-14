export const setCategoriesMap = (categories) => {
    const payload = {
        categoriesMap: categories
    }

    return ({type: "SET_CATEOGRY_MAP", payload:payload})
}