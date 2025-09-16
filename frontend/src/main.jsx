import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import store from './store/store.js';
import { Provider } from 'react-redux'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App/>
    </ClerkProvider>
   </Provider>
  </StrictMode>,
)
