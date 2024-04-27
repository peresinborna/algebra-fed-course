import { useState, useContext } from "react";
import GithubContext from "../context/GithubContext";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, fetchUsers, clearUsers } = useContext(GithubContext);
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Polje za unos GitHub korisnika ne može biti prazno!");
    } else {
      fetchUsers(text);
      setText("");
    }
  };

  return (
    <div className="usersearch-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Unesi GitHub korisnika..."
          value={text}
          onChange={handleChange}
        />
        <button className="usersearch-container-btn1">Pretraži</button>
      </form>
      {users.length > 0 && (
        <button className="usersearch-container-btn2" onClick={clearUsers}>
          Resetiraj
        </button>
      )}
    </div>
  );
};

export default UserSearch;
