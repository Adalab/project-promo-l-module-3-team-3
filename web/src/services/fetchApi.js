
// durante la clase de hoy miércoles, falta acabarlo más abajo, creo
const isDevEnvironment = process.env.NODE_ENV === 'development'; // Booleano
const apiUrl = isDevEnvironment ? 'http://localhost:3000' : 'https://awesome-profile-cards-lolies.herokuapp.com/#/';


const fetchApi = (data) => {
  console.log(apiUrl);
 
  const url = "http://localhost:3000/card";
 
  // const url = 'https://profileawesome.herokuapp.com/card';

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default fetchApi;
