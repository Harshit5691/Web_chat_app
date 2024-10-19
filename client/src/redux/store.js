import {configureStore} from '@reduxjs/toolkit'
import authSlice from './reducer/auth.js'
import api from './api/api.js';
import miscSlice from './reducer/misc.js'
const store = configureStore({
    reducer: {
        [authSlice.name]: authSlice.reducer,
        [miscSlice.name]: miscSlice.reducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (mid) => [...mid(),api.middleware],
});

export default store;