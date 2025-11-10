import Header from './components/Header.jsx'
import Hero from './sections/Hero.jsx';
import GalleryCard from './components/GalleryCard.jsx';
function App() {
    return (
      <div>
        <Header/>
        <Hero/>
        <h3 className='text-2xl font-bold text-center mt-20'>Our Collection</h3>
        <GalleryCard title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
        price="109.95"/>
        </div>
    );
}
export default App;
