import React, { useState } from 'react';
import Counter from './components/Counter';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleIsModalOpen = (): void => {setIsModalOpen(!isModalOpen); };

  const onModalConfirm = (): void => {
    alert('Confirmed!');
    toggleIsModalOpen();
  };

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
    </div>
  );
}

export default App;
