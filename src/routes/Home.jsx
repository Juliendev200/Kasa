import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <Banner bannerimg="src/assets/img/homeimg.png" bannertitle="Chez vous, partout et ailleurs" />
        <Gallery />
      </div>
      <Footer />
    </>
  );
}