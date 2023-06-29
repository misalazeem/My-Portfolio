import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Modal.css';

const CustomModal = ({ isOpen, closeModal, project }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Project Modal"
    className="custom-modal"
    overlayClassName="custom-modal-overlay"
  >
    <div className="modal-container">
      <div className="top-section">
        <div className="modal-titles">
          <h2>{project.name}</h2>
          <div className="project-overview">
            <span>Misal</span>
            <FaCircle className="icons" />
            <p>{project.type}</p>
            <FaCircle className="icons" />
            <p>{project.year}</p>
          </div>
        </div>
        <button onClick={closeModal} type="button">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="image-container">
        <img src={project.image} alt="Project" />
      </div>
      <div className="project-details">
        <div className="details-left">
          <p>{project.summary}</p>
        </div>
        <div className="details-right">
          <div className="project-stack">
            <ul>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="project-buttons">
            <a href={project.livedemo} target="_blank" rel="noreferrer">
              See Live
            </a>
            <a href={project.github} target="_blank" rel="noreferrer">
              See Source
            </a>
          </div>
        </div>
      </div>
    </div>
  </Modal>
);

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    livedemo: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default CustomModal;
