import { EnhancedStore, configureStore } from '@reduxjs/toolkit'
import emotionReducer from './emotionSlice'

const store: EnhancedStore = configureStore({
    reducer: {
        emotion: emotionReducer
    }
})

export default store