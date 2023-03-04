import {useState, useEffect } from "react";
const useIsOnline = () => {
const [isOnline,  setIsonline] = useState(true);

const handleOnline = () => {
    setIsonline(true);
}

const handleOffline = () => {
    setIsonline(false); 
}


useEffect(()=> {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
        window.removeEventListener("online", handleOnline);
       window.removeEventListener("offline", handleOffline);
      };
},[]);


    return isOnline;
}

export default useIsOnline;