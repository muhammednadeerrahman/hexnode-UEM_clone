import './App.css';
import Header from './components/Header/Header';
import Spotlight from './components/SpotlightSection/Spotlight';
import WhyHexnode from './components/whyHexnode/WhyHexnode';
import Features from './components/Features/Features';
import Platform from './components/Platform/Platform';
import Customers from './components/Customers/Customers';
import TryHexnode from './components/TryHexnode/TryHexnode';
import Footer from './components/Footer/Footer';
import MessageButton from './components/general/MessageButton';
import { useEffect, useState } from 'react';
import Modal from './components/general/Modal';
import LeavingModal from './components/general/modal/LeavingModal';

function App() {

  const [isMessageActive, setMessageActive] = useState(false)
  const [isModalActive, setModalActive] = useState(false)

  useEffect(() => {
    const popupTimestamp = sessionStorage.getItem('popupTimestamp');
    const expirationTime = 1 * 60 * 60 * 1000; 

    if (!popupTimestamp || Date.now() - popupTimestamp > expirationTime) {
      setModalActive(true); 
    }
  }, []);
  const closeModal = () => {
    setModalActive(false); 
    sessionStorage.setItem('popupTimestamp', Date.now().toString()); 
  };
  return (
    <div className="App relative">

      <Header />
      <Spotlight />
      <WhyHexnode />
      <Features />
      <Platform />
      <Customers />
      <TryHexnode />
      <Footer />
      <MessageButton isActive={isMessageActive} onClick={() => setMessageActive(!isMessageActive)} />
      <Modal isActive={isModalActive} >
        <LeavingModal setModalActive={()=>closeModal()} />
      </Modal>
    </div>
  );
}

export default App;
