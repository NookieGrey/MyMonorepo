import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRoter } from './App.tsx'
import 'antd/dist/reset.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoter />
  </StrictMode>,
)
