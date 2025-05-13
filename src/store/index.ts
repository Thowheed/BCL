// import createSagaMiddleware from 'redux-saga';
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducer';
// import rootSaga from './saga/rootSaga';
// const sagaMiddleware = createSagaMiddleware();


// const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => {
//         return getDefaultMiddleware().concat(sagaMiddleware)
//     },
//     devTools: true
// });

// sagaMiddleware.run(rootSaga);

// export default store
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // uses localStorage
import rootReducer from './reducer';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['bcl'], // replace with reducer(s) you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // necessary for redux-persist
    }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

