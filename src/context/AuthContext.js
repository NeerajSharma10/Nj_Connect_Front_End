import { createContext, useEffect, useReducer } from 'react'
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    // user: { "_id": "62a0981b47749c529235a5fa" , 
    // "username": "neeraj", 
    // "email": "neeraj@email.com", 
    // "password": "$2b$10$15ocjGWSUe8v8kMBAn7enO7KYWPzhIUqjOXOQMKm.i58q5eIwKblS", 
    // "profilePicture": "person/1.jpeg", 
    // "coverPicture": "", 
    // "followers": [], 
    // "followingPeople": ["62a093f39a7602fead34c5a8"], 
    // "isAdmin": false, 
    // "desc": "Awesome Guy", 
    // "createdAt": { "$date": { "$numberLong": "1654691867211" } }, 
    // "updatedAt": { "$date": { "$numberLong": "1654699907842" } }, "__v": { "$numberInt": "0" }, "city": "New Delhi", "from": "Indiana", "relationship": "1" }
    // ,
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {

    
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    
    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(state.user))
    },[state.user])

    
    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}