import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"

export const fetchCategoriesMap = () => {
    return ({ type: "FETCH_CATEGORY_MAP" })
}

export const setCategoriesMap = (categories) => {
    const payload = {
        categoriesMap: categories
    }

    return ({ type: "SET_CATEGORY_MAP", payload: payload })
}

export const fetchCategoriesMapFail = (error) => {
    const payload = {
        error: error
    }

    return ({ type: "FETCH_CATEGORY_FAIL", payload: payload })
}

export const setCategoriesMapAsync = () => async (dispatch) => {

    dispatch(fetchCategoriesMap())
    try {
        const categoryMap = await getCategoriesAndDocuments();
        dispatch(setCategoriesMap(categoryMap))
    }
    catch (err) {
        dispatch(fetchCategoriesMapFail(err))
    }
}