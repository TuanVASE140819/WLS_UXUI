// src/api/apiServices.js
import API from "./index";



//  Register 
export const registerUser = async (data) => {
  try {
    const response = await API.post("/api/v1/Account/register", data);
    return response.data;
  } catch (error) {
    // console.error("Error registering user:", error);
  }
};


export const loginUser = async (data) => {
  try {
    const response = await API.post("/api/v1/Login/loginweb", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    // console.error("Error logging in user:", error);
  }
};

// Get data trường
//https://apiweloveschool20240421134825.azurewebsites.net/api/v1/School/getSchool?tinh=r&quan=r&xa=r&captruong=r&name=r&pageNumber=1&pageSize=10

export const getListSchool = async (
  tinh,
  quan,
  xa,
  captruong,
  name,
  pageNumber,
  pageSize
) => {
  try {
    const response = await API.get(
      `/api/v1/School/getSchool?tinh=${tinh}&quan=${quan}&xa=${xa}&captruong=${captruong}&name=${name}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

//https://apiweloveschool20240421134825.azurewebsites.net/api/v1/School/getSchoolDetail?id=0dade44e-25de-4c27-a479-459c60017755

export const getSchoolDetail = async (id) => {
  try {
    const response = await API.get(`/api/v1/School/getSchoolDetail?id=${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};


export const fetchData = async () => {
  try {
    const response = await API.get("/path-to-resource");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};


// thêm các hàm khác cho POST, PUT, DELETE...

export const postData = async (data) => {
  try {
    const response = await API.post("/path-to-resource", data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

export const putData = async (data) => {
  try {
    const response = await API.put("/path-to-resource", data);
    return response.data;
  } catch (error) {
    console.error("Error putting data:", error);
  }
};

export const deleteData = async (id) => {
  try {
    const response = await API.delete(`/path-to-resource/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
  }
};
