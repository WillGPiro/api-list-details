export const fetchXfilesCharacters = () => {
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(json => json.results);
};

export const fetchSingleCharacter = (name) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
    .then(res => res.json())
    .then(json => ({
      name: json[0].name,
      image: json[0].image,
      status: json[0].status,
      occupation: json[0].occupation,
      portrayedby: json[0].portrayedby
    }));
};




