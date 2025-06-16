const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0E0A18] to-purple-900 text-white px-4">
      <h1 className="text-9xl font-extrabold mb-4 drop-shadow-lg">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 drop-shadow-md">
        Page Not Found
      </h2>
      <p className="max-w-md text-center mb-8 text-purple-100">
        Oops! The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-md shadow-lg hover:bg-purple-100 transition"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default PageNotFound;
