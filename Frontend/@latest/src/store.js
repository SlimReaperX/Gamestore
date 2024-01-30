import {configureStore} from "@reduxjs/toolkit"
import { api } from "./api"
import videoGamesSlice from "./slices/index.js"

export const store = configureStore({
    reducer:{
        [api.reducerPath]: api.reducer,
        videoGames: videoGamesSlice
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export default store