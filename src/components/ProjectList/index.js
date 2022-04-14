import React, { useState } from 'react';
import Modal from '../Modal';


const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Weather Dashboard',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        link: 'https://staishaknight.github.io/weatherdashboard/'
    },
    {
      name: 'Note Taker',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        link: 'https://staisha-notes.herokuapp.com/'
    },
    {
      name: 'Beers and Bands',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        link:'https://sarahwylie.github.io/BeersandBands/'
    },
  
    {
      name: 'Budget App',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        link:'https://dry-dawn-99162.herokuapp.com/'
    },
    
    {
      name: 'Tech Blog',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        link:'https://dry-cove-83506.herokuapp.com/'
    }
  ]);

  // const currentPhotos = photos.filter(photo => photo.category === category);
  const currentPhotos = photos
  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };
  
  return (
    <div>
      {/* {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      
      <div className="flex-row center">
        {currentPhotos.map((image, i) => (
          <div>
            <p className="project-name col-sm">{image.name}</p>
          <img
            src={require(`../../assets/small/projects/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            id={i}
          />
          
          </div>
        ))}
      </div> */}
      Projects
     
      
      name: 'Weather Dashboard',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        link: 'https://staishaknight.github.io/weatherdashboard/'
  
    
      name: 'Note Taker',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        link: 'https://staisha-notes.herokuapp.com/'
    
      name: 'Beers and Bands',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        link:'https://sarahwylie.github.io/BeersandBands/'
    
  
    
      name: 'Budget App',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        link:'https://dry-dawn-99162.herokuapp.com/'
    
    
  
      name: 'Tech Blog',
      category: 'projects',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        link:'https://dry-cove-83506.herokuapp.com/'
  
    

    </div>
    
  );
};

export default ProjectList;
