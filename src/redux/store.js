import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

import userReducer from '../features/userSlice'


const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
  reducer: persistedReducer,
})