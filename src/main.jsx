import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppHello from './AppHello.jsx'
import ImportantGreeting from './Greeting.jsx'
import { GreatEasyMeal, AnotherGoodMeal } from './FavoriteFood.jsx'
import ConversionTest from './ConversionTest.jsx'
import Animals from './Animals.jsx'
import AnimalsByProps from './AnimalsByProps.jsx'
import TernaryAnimalsByProps from './TernaryAnimalsByProps.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <AppHello /> */}
    <ImportantGreeting />
    <GreatEasyMeal />
    <AnotherGoodMeal />
    <ConversionTest />
    <Animals />
    <AnimalsByProps />
    <TernaryAnimalsByProps />
  </StrictMode>,
)
