export const fetchSingleCharacter = () => {
  return Promise.resolve({
    name: 'Barack Obama',
    image: 'https://vignette.wikia.nocookie.net/x-files/images/a/ae/Barack_Obama.png/revision/latest/scale-to-width-down/310?cb=20160127051451',
    status: 'Alive',
    occupation: 'President',
    portrayedby: 'Himself' 
  });
};

