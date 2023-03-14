import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import Category from '../category/category.component';
import { setCategoriesMap } from '../../store/category/category.action';

const Shop = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategoriesMap();
  }, []);
  
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
