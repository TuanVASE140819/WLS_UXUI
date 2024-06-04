import axios from "axios";

const BASE_URL = "https://apiweloveschool20240421134825.azurewebsites.net";

export const domainApi = BASE_URL;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});




// //https://apiweloveschool20240421134825.azurewebsites.net/api/v1/School/getSchool?tinh=r&quan=r&xa=r&captruong=r&name=r&pageNumber=1&pageSize=10
export const getSchool = async (tinh,quan,xa,captruong,name,pageNumber,pageSize) => {
  try {
    const res = await publicRequest
      .get
      // `/api/v1/School/getSchool?tinh=${tinh}&quan=${quan}&xa=${xa}&captruong=${captruong}&name=${name}&pageNumber=${pageNumber}&pageSize=${pageSize}`
      ();
    return res;
  } catch (err) {
    return err;
  }
}
