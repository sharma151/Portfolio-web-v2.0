import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from '../../../assets/saurav_resume.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

function Resume() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1); // Reset to first page on load
  }

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set PDF width based on screen size
  const getPdfWidth = () => {
    if (windowWidth > 1024) return 800; // large screen
    if (windowWidth > 768) return 600; // medium screen
    return windowWidth - 40; // small screens with padding
  };

  const goToPrevPage = () => setPageNumber(prev => (prev > 1 ? prev - 1 : prev));
  const goToNextPage = () => setPageNumber(prev => (prev < numPages ? prev + 1 : prev));

  return (
    <div className="flex flex-col items-center">
      {/* Download Button */}
      <a
        href={pdf}
        download
        className="mt-5 mb-5 px-5 py-2 bg-[#AD46FF] text-(--text-color) no-underline rounded flex items-center gap-2"
      >
        <AiOutlineDownload /> Download Resume
      </a>

      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          width={getPdfWidth()}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>

      {numPages > 1 && (
        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="px-3 py-1 rounded disabled:opacity-50"
          >
            <GrFormPrevious size={22} />
          </button>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className="px-3 py-1  rounded disabled:opacity-50"
          >
            <GrFormNext size={22} />
          </button>
        </div>
      )}

      {/* Duplicate Download Button (Optional) */}
      <a
        href={pdf}
        download
        className="mt-5 px-5 py-2 bg-[#AD46FF] text-(--text-color) no-underline rounded flex items-center gap-2"
      >
        <AiOutlineDownload /> Download Resume
      </a>
    </div>
  );
}

export default Resume;
