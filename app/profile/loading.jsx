const Loading = () => {
  return (
    <div className="w-full flex-center">
      <svg className="spinner-ring" viewBox="25 25 50 50" strokeWidth="5">
        <circle cx="50" cy="50" r="20" />
      </svg>
    </div>
  );
};

export default Loading;
