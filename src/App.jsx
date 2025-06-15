/* eslint-disable import/namespace */
import React, { useEffect, useState } from "react";
import AppRoutes from "@/Routes/AppRoutes";
import { pdfjs } from "react-pdf";
import Spinner from "@/Components/Spinner";
import ScrollToTop from "./Components/ScrollToTop";
import { inject } from "@vercel/analytics";

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

  useEffect(() => {
    inject(); // ✅ Initialize analytics on mount
  }, []);

  return (
    <>
      {" "}
      {loading ? (
        <Spinner width={40} height={40} />
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
