
const isDevEnvironment = process.env.NODE_ENV === 'development';
const apiUrl = isDevEnvironment ? 'http://localhost:3000' : 'https://awesome-profile-cards-lolies.herokuapp.com';


const fetchApi = (data) => {

console.log(apiUrl)

  return fetch(apiUrl, {
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
