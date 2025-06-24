import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import { useNavigate } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc =
  window.location.origin + "/pdf.worker.min.mjs";
const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const pdfFile = "/Alwaleed-Alshaghnoubi-Resume.pdf";

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "var(--bg)",
      padding: "3rem 1rem",
      color: "var(--text)",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem", paddingTop:"2rem"}}>My Resume</h1>

      <div style={{ marginBottom: "2rem" }}>
        <a
          href={pdfFile}
          download
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "var(--accent)",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none",
            gap: "0.5rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}
        >
          <AiOutlineDownload size={20} />
          Download PDF
        </a>
      </div>

      <div style={{
        display: "flex",
        justifyContent: "center",
        overflow: "auto",
        marginBottom: "2rem"
      }}>
        <Document file={pdfFile}>
          <Page
            pageNumber={1}
            scale={width > 786 ? 1.5 : 0.6}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      <button
        onClick={() => navigate(-1)}
        style={{
          backgroundColor: "transparent",
          border: "2px solid var(--accent)",
          color: "var(--accent)",
          padding: "0.6rem 1.2rem",
          borderRadius: "8px",
          fontWeight: "500",
          cursor: "pointer"
        }}
      >
        ← Back
      </button>
    </div>
  );
};

export default Resume;