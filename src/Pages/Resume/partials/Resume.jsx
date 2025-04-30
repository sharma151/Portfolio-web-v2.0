import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import pdf from "@/assets/saurav_sharma_resume.pdf";

function Resume() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <a
        href={pdf}
        download
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        Download Resume
      </a>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          className={"mx-auto "}
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
      {/* Download Button */}
      <a
        href={pdf}
        download
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
