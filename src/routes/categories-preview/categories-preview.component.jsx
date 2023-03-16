import { useSelector } from "react-redux";
import { Fragment } from "react";
import { categorySelectorMap } from "../../store/category/category.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { isLoadingCategorySelector } from "../../store/category/category.selector";
import Spinner from "../../components/spinner/spinner.component";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(categorySelectorMap);
  const isLoading = useSelector(isLoadingCategorySelector);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
