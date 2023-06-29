import React, { useState } from 'react';
import '../styles/Project.css';
import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/fa';
import CustomModal from './Modal';

function Project({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="project-card">
      <div className="left-section">
        <img src={project.image} alt="" />
      </div>
      <div className="right-section">
        <h2>{project.name}</h2>
        <div className="project-overview">
          <span>Misal</span>
          <FaCircle className="icons" />
          <p>{project.type}</p>
          <FaCircle className="icons" />
          <p>{project.year}</p>
        </div>
        <span>{project.summary}</span>
        <div className="project-stack">
          <ul>
            {project.stack.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <button type="button" onClick={openModal}>See Project</button>
        <CustomModal isOpen={isModalOpen} closeModal={closeModal} project={project} />
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    livedemo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
