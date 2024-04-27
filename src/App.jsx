import './App.css'
import List from './components/List'
import Navbar from './components/Navbar'
import SearchProvider from './contexts/SearchContext'

function App() {
  return (
    <>
      <SearchProvider>
        <Navbar />
        <List />
      </SearchProvider>
    </>
  )
}

export default App
