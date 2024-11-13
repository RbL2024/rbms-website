import Navbar from './components/Navigaitonbar/Navigationbar';
import Home from './Pages/Home/Home';
import Tutorial from './Pages/Tutorial/Tutorial';
import AdultBike from './Pages/AdultBike/AdultBike';
import KidBike from './Pages/KidBike/KidBike';
import Help from "./Pages/Help/Help";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Tutorial />
      <AdultBike />
      <KidBike />
      <Help />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default App;
