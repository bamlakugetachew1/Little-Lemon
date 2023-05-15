import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Main from './Main';
import Banner from './Banner';
function HomePage() {
  return (
     <div>
      <div className="md:flex md:justify-between mx-10 mt-4">
      <Header/>
      <Nav/>
      </div>
      <Banner/>
      <Main/>
      <Footer/>
     </div>
  );
}

export default HomePage;
