import axios from "axios";

const publicToken = process.env.NEXT_PUBLIC_USER_KEY
const appUrl      = process.env.NEXT_PUBLIC_USER_API
export const  appApi = axios.create({
    baseURL: appUrl ,
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${publicToken}`,
      },
  });



