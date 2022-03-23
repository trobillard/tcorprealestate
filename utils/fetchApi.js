import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '1ab07a491dmsh222891eb6d737d6p1dd90djsnc2368793e6e1',
    },
  });
    
  return data;
}