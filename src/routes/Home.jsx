import Banner from '../components/Banner'
import Gallery from '../components/Gallery'

export default function Home() {
  return (
    <>
      <Banner bannerimg="src/assets/img/homeimg.png" bannertitle="Chez vous, partout et ailleurs" />
      <Gallery />
    </>
  );
}