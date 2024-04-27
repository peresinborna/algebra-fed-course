import Spinner from "./Spinner";
import UserKartica from "./UserKartica";
import { useContext } from "react";
import GithubContext from "../context/GithubContext";

const IspisUsera = () => {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="ispisusera-container">
        {users.map((user) => (
          <UserKartica key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default IspisUsera;
