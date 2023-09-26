
const useRequest = () => {
  const { REACT_APP_BASE_URL } = process.env;
  const request = async ({ url, method = "GET", data, token, headers, me }) => {
    if (token)
      headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

    const options = {
      method,
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    try {
      let res = await fetch(`${me? 'http://ec2-3-140-188-131.us-east-2.compute.amazonaws.com:8081/api' : REACT_APP_BASE_URL}${url}`, options).then(
        (res) => res.json()
      )
      return res
    } catch (error) {
        // alert('Login yoki parol hato')
        return `${error}`

    }
  };
  return request;
};

export default useRequest;
