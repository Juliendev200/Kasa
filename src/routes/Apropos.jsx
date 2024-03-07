import Banner from '../components/Banner';
import AproposCollapse from '../components/AproposCollapse';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Apropos() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <Banner bannerimg="src/assets/img/Aproposimg.png" bannertitle="" />
        <AproposCollapse />
      </div>
      <Footer />
    </>
  );
}