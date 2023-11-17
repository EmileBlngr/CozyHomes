import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
    const navigate = useNavigate();
  
    const navigateTo = (path: string, params?: Record<string, string>) => {
      const urlSearchParams = new URLSearchParams(params);
      const search = urlSearchParams.toString();
      navigate(`${path}${search ? '?' + search : ''}`);
    };
  
    return navigateTo;
  };