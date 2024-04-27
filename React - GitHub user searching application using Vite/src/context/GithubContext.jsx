import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async (text) => {
    setLoading();
    const res = await fetch(`https://api.github.com/search/users?q=${text}`);
    const { items } = await res.json();
    dispatch({
      type: "GET_USERS",
      users: items,
    });
  };

  const getUser = async (login) => {
    setLoading();
    const res = await fetch(`https://api.github.com/users/${login}`);
    const data = await res.json();
    dispatch({
      type: "GET_USER",
      data: data,
    });
  };

  const getRepos = async (login) => {
    setLoading();
    const res = await fetch(`https://api.github.com/users/${login}/repos`);
    const data = await res.json();
    dispatch({
      type: "GET_REPOS",
      data: data,
    });
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        getRepos,
        getUser,
        fetchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
