const ProjectCard = ({ repository }) => {
  return (
    <div className="p-3 bg-green-300 w-1/4 dark:bg-gray-900 bg-gray-100 m-2">
      <div>Repository pathname: {repository.pathname}</div>
      <div>Issue count: {repository.issues.length}</div>
    </div>
  );
};

export default ProjectCard

