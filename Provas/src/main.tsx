import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './Card'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Card title='Cartão de visita' description='informação do visitante'/>
  </StrictMode>,
)
