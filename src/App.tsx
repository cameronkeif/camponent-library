import React, { useState } from 'react';
import Counter from './components/Counter';
import Modal from './components/Modal';
import './App.css';
import Countdown from './components/Countdown';
import Countfrom from './components/Countfrom';

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleIsModalOpen = (): void => {setIsModalOpen(!isModalOpen); };

  const onModalConfirm = (): void => {
    alert('Confirmed!');
    toggleIsModalOpen();
  };

  const countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 1);

  const countfromDate = new Date();
  countfromDate.setDate(countdownDate.getDate() - 1);

  return (
    <div className="App">
      <Modal
        isOpen={isModalOpen}
        title="Test Title"
      >
        <div>test</div>
        <div className="button-bar">
          <button onClick={onModalConfirm}>Confirm</button>
          <button onClick={toggleIsModalOpen}>Cancel</button>
        </div>
      </Modal>
      <div>
        <button onClick={toggleIsModalOpen}>Toggle Modal</button>
      </div>
      <Counter />
      <Countdown targetDate={countdownDate}/>
      <Countfrom targetDate={countfromDate}/>
    </div>
  );
}

export default App;
