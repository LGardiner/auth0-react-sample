import { handleResponse, handleError } from "./apiUtils";
const apiUrl = process.env.REACT_APP_API_URL;
// const { getAccessTokenSilently } = useAuth0();

export function getUser() {
  console.log("ayo");
  return fetch(`${apiUrl}/api/public-message`)
    .then(handleResponse)
    .catch(handleError);
}

// const callSecureApi = async () => {
//   try {
//     const token = await getAccessTokenSilently();

//     const response = await fetch(`${apiUrl}/api/private-message`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     const responseData = await response.json();

//     setMessage(responseData);
//   } catch (error) {
//     setMessage(error.message);
//   }
// };
