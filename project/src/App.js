import './App.css';
import Routing from './Routing/Routing';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header/>
      <Routing/>
      <Footer/>
      <ToastContainer autoClose={1000}/>
    </div>
  );
}

export default App;
