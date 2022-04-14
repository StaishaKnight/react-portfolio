import { React, useState } from 'react';
import ProjectList from '../ProjectList';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Gallery() {
  const [categories] = useState([
    {
      name: 'projects', description: 'Check out my work' },

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
  
  return (
    <div>
    {categories.map((category) => {
        return( <section>

      <h1 data-testid="h1tag">{capitalizeFirstLetter(category.name)}</h1>
      <p>{category.description}</p>
      <ProjectList category={category.name} />
    </section>)
    } )}
    </div>

  );
}
export default Gallery;
