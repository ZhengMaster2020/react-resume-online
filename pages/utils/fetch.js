const fetch = ({ url, method, params, header }) =>
  fetch(url, {
    body: params,
    method,
  })
    .then((response) => response)
    .catch((err) => err)

export default fetch
