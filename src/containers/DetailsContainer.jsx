import React, { useState, useEffect } from 'react';
import { fetchXfilesCharacters } from '../Services/xfiles';
import DetailsList from '../components/DetailsList.jsx';
// import { useParams, useHistory } from 'react-router-dom';

const DetailsContainer = () => {
  //characters is a key in state. setCharacters is the same as this.setSate
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchXfilesCharacters()
      .then(allCharacters => setCharacters(allCharacters));
  }, []);

  const characterNode = characters.map(character => {
    return <DetailsList key={character.name} {...character} />;

  });
  return (
    <>
      {characterNode}
    </>
  );
};

export default DetailsContainer;

