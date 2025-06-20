import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/app/app'
import { offers } from './mocks/offers'
import { offersList } from './mocks/offers-list'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App 
		rentalOffersCount={12}
		offers = {offers}
		offersList={offersList}
	/>
  </StrictMode>,
)
