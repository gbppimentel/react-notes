import React, { useState } from "react";
import "../css/modal.css";

const Modal = ({ closeModal }) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 60) {
      setTitle(inputValue);
    }
  };

  const remainingCharacters = 60 - title.length;
  const message =
    title.length === 60
      ? "Maximum characters reached"
      : `${remainingCharacters}/60`;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Title</h2>
        <div className="title-input-container">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <p className="character-count title-limit">{message}</p>{" "}
        <h2 className="modal-title">Journal Entry</h2>
        <textarea placeholder="Description"></textarea>
        <div className="modal-buttons">
          <button className="cancel" onClick={closeModal}>
            Cancel
          </button>
          <button className="save">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
