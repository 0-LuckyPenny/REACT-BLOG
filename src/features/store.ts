
import { configureStore } from '@reduxjs/toolkit';
import { postApi } from './posts/post.api';
import { setupListeners } from '@reduxjs/toolkit/query'
import { categoryApi } from './categories/category.api';


const store = configureStore({

  // Define the reducers for the store
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },


  // Add middleware to the store. In this case, it combines the middleware from postApi and categoryApi.
  // The middleware enables handling asynchronous actions provided by the API endpoints.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware, categoryApi.middleware),
});

// Setup listeners for automatic retries on network errors and other query lifecycle events.
// This is optional but required for features like refetchOnFocus and refetchOnReconnect behaviors.
setupListeners(store.dispatch)

// Define type aliases for RootState and AppDispatch for TypeScript type inference.
// RootState represents the overall state type, and AppDispatch represents the type of the store's dispatch function.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
