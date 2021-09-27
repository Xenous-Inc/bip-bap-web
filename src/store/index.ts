import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@store/reducers';
import apiMiddleware from '@store/middlewares/api';
import cleanerMiddleware from '@store/middlewares/cleaner';
import { tokenMiddleware } from '@store/middlewares/token';

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({ serializableCheck: false }),
        tokenMiddleware,
        apiMiddleware,
        cleanerMiddleware,
    ],
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const dispatch = store.dispatch;
