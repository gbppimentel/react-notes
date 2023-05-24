import Modal from "./Modal";
import { useState } from "react";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <nav className="Navbar">
      <h1>Internship Notes</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create-entry" onClick={openModal}>
          New Entry
        </a>
        {modalOpen && <Modal closeModal={closeModal} />}
      </div>
    </nav>
  );
};

export default Navbar;
