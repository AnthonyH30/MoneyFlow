import { FinanceContextProvider } from './Context/FinanceContext';
import Home from './Pages/Home';
import './styles/global.scss';

function App() {

  return (
    <FinanceContextProvider>
      <Home />
    </FinanceContextProvider>
  )
}

export default App
