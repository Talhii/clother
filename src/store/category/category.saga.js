import { takeLatest, call, put, all } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import {
setCategoriesMap,
fetchCategoriesMapFail,
} from './category.action';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
    yield put(setCategoriesMap(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesMapFail(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    'FETCH_CATEGORY_MAP',
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}