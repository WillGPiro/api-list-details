import React, { useState, useEffect } from 'react';
import { fetchSingleCharacter } from '../Services/xfiles';
import Detail from '../components/Detail.jsx';
import { useParams } from 'react-router-dom';

const DetailContainer = () => {
  const [singleCharacter, setCharacter] = useState({});
  let { name } = useParams();

  useEffect(() => {
    fetchSingleCharacter(name)
      .then(singleCharacter => setCharacter(singleCharacter));
  }, []);

  return (
    <Detail {...singleCharacter}/>
  );
};

export default DetailContainer;

