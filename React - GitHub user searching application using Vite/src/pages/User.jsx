import { useContext, useEffect } from "react";
import GithubContext from "../context/GithubContext";
import { useParams, Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import RepoList from "../components/RepoList";

const User = () => {
  const { getUser, user, loading, getRepos, repos } = useContext(GithubContext);
  const { name, avatar_url, bio, html_url } = user;

  const params = useParams();
  useEffect(() => {
    getUser(params.login);
    getRepos(params.login);
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="users-card-container">
        <div className="user-back-link">
          <Link to="/">Nazad na početnu</Link>
        </div>
        <div className="users-card-container-details1">
          <img
            src={avatar_url}
            alt={name}
            className="users-card-container-jpg"
          />
          <div className="users-card-container-details2">
            <h2>{name}</h2>
            <p>{bio}</p>
            <a href={html_url} target="_blank">
              Pogledaj GitHub profil
            </a>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    </>
  );
};

export default User;
