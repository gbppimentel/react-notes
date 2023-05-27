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
      <h1>
        <span style={{ color: "#582D92" }}>React Project</span>:{" "}
        <span style={{ color: "#f1356d" }}>Notes</span>
      </h1>

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
