const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <svg
        className="spinner-ring w-20 h-20"
        viewBox="25 25 50 50"
        strokeWidth="5"
      >
        <circle cx="50" cy="50" r="20" />
      </svg>
    </div>
  );
};

export default Loading;
