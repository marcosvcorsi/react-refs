import React, { useRef, useCallback, FormEvent } from 'react';
import Input from './components/Input';
import Modal, { ModalHandles } from './components/Modal';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputComponentRef = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef({ value: false });
  const modalRef = useRef<ModalHandles>(null);

  const handleFocus = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = useCallback((evt: FormEvent) => {
    evt.preventDefault();

    console.log(inputRef.current?.value);
    console.log(acceptTermsRef.current.value);
  }, []);

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value;
  }, []);

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="Digite seu nome" />

        <Input label="Sobrenome" name="lastname" ref={inputComponentRef} />

        <button type="button" onClick={handleAcceptTerms}>
          Aceitar termos
        </button>

        <button type="button" onClick={handleFocus}>
          Realizar foco
        </button>

        <button type="button" onClick={handleOpenModal}>
          Abrir modal
        </button>

        <button type="submit">Submit</button>
      </form>

      <Modal ref={modalRef} />
    </div>
  );
}

export default App;
