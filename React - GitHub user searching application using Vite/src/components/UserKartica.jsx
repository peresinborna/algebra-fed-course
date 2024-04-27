import { Link } from "react-router-dom";

const UserKartica = ({ user }) => {
  return (
    <div className="userkartica-container">
      <img src={user.avatar_url} alt={user.login} className="userkartica-jpg" />
      <div>
        <h2 className="userkartica-container-h2">{user.login}</h2>
        <Link to={`/user/${user.login}`} className="userkartica-container-link">
          Pogledaj GitHub profil
        </Link>
      </div>
    </div>
  );
};

export default UserKartica;
