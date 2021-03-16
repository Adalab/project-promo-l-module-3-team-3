const fetchApi = (data) => {
  //Servidor de los profes
  // const url = "http://localhost:3000/card";
  //luego habría que cambiarlo, no sé si por...
  const url = 'https://profileawesome.herokuapp.com/card';

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
