const ProjectCard = ({ repository }) => {
  return (
    <div>
      <div>Repository pathname: {repository.pathname}</div>
      <div>Issue count: {repository.issues.length}</div>
    </div>
  );
};

export default ProjectCard

