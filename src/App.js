import Footer from './components/Footer'
import Header from './components/Header'
import Navigation from './components/Navigation'
import ProductDetails from './screens/ProductDetails'
import ProductListScreen from './screens/ProductListScreen'

const App = () => {
  return (
    <>
      <Navigation />
      <Header />
      <main className='py-3 container'>
        <ProductListScreen />
        {/* <ProductDetails /> */}
      </main>
      <Footer />
    </>
  )
}

export default App
