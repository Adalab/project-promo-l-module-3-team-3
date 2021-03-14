const fetchApi = (data) => {
  //Servidor de los profes
  // const url = "https://profileawesome.herokuapp.com/card";
  //habría que cambiarlo
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
