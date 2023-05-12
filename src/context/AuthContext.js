// import React, {useContext, useState , useEffect} from "react"; 
// import { useNavigate } from "react-router-dom";
// import { auth } from "../components/firebase";

// const AuthContext = React.createContext()

// export const useAuth =()=> useContext(AuthContext)

// export const AuthProvider =({children})=>{
//     const [loading, setLoading]=useState(true)
//     const [user , setUser] = useNavigate(null)
//     const history= useNavigate()

//     useEffect((user)=>{
// setUser(user)
// setLoading(false)
// if(user)
// history.push('/chat')
//     }, [user , history])

//     const value ={user}

//     return(
//         <AuthContext.Provider value={value}>
//             {!loading && children}
//         </AuthContext.Provider>
//     )
// }


// chatgpt provide
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../components/firebase";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        navigate("/chats");
      }
    });

    return unsubscribe;
  }, [navigate]);

  const value = { user };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
