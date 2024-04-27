const RepoList = ({ repos }) => {
  return (
    <div className="repolist-container">
      <h2 className="repolist-container-h2">Repozitoriji</h2>
      {repos.map((repo) => (
        <p key={repo.id}>
          <a href={repo.html_url} target="_blank">
            {repo.name}&nbsp;&nbsp;
          </a>
          Repozitorij kreiran {repo.created_at}, Zadnje ažuriran{" "}
          {repo.updated_at}
        </p>
      ))}
    </div>
  );
};

export default RepoList;
