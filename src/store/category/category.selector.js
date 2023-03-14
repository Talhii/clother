import { createSelector } from "reselect"

export const categorySelector = (state) => {
    console.log('selctor 1')
    return state.category
}

export const categorySelectorMap = createSelector(
    [categorySelector],
    (categories) =>{
        console.log('selector 2')
        return categories.categoriesMap
    }
)
