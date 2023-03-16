import { createSelector } from "reselect"

export const categorySelector = (state) => {
    return state.category
}

export const categorySelectorMap = createSelector(
    [categorySelector],
    (categories) =>{
        return categories.categoriesMap
    }
)

export const isLoadingCategorySelector = createSelector(
    [categorySelector],
    (categories) => {
        return categories.isLoading
    }
)

