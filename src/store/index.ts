import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@store/reducers';
import apiMiddleware from '@store/middlewares/api';

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => [...getDefaultMiddleware({ serializableCheck: false }), apiMiddleware],
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const dispatch = store.dispatch;
