import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from './pages/home.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './state/store.ts'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Home />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
