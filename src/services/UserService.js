import auth from "../config/firebase";
import { io } from "socket.io-client";
import instance from "./api";
import TokenService from "./TokenService";

const baseURL = "http://localhost:3001/api";

const getUserToken = async () => {
  const user = auth.currentUser;
  const token = user && (await user.getIdToken());
  return token;
};

export const initiateSocketConnection = async () => {
  const token = await getUserToken();

  const socket = io("http://localhost:3001", {
    auth: {
      token,
    },
  });

  return socket;
};

const createHeader = async () => {
  const token = await getUserToken();

  const payloadHeader = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return payloadHeader;
};

export const getAllUsers = async () => {
  try {
    const res = await instance.get(`${baseURL}/user`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const getUser = async (userId) => {
  try {
    const res = await instance.get(`${baseURL}/user/${userId}`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const createUser = async (user) => {
  try {
    const res = await instance.post(`${baseURL}/user/register`, user);
    console.log(res);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const loginUser = async (user) => {
  try {
    const res = await instance.post(`${baseURL}/user/login`, user);
    console.log(res.data.token);
    TokenService.setAccessToken(res.data.token);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const getUsers = async (users) => {
  try {
    const res = await instance.get(`${baseURL}/user/users`, users);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
