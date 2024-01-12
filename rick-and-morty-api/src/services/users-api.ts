import { UserData } from "../App";

export const fetchRickAndMortyData = async (url : string, setUserData : (data : UserData | null) => void) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setUserData(result);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
};
