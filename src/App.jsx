/* eslint-disable import/namespace */
import React, { useEffect, useState } from "react";
import AppRoutes from "@/Routes/AppRoutes";
import { pdfjs } from "react-pdf";
import Spinner from "@/Components/Spinner";
import ScrollToTop from "./Components/ScrollToTop";

// Set the worker source for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {" "}
      {loading ? (
        <Spinner width={40} height={40}/>
      ) : (
        <>
          <AppRoutes />
          <ScrollToTop />
        </>
      )}
    </>
  );
};

export default App;
