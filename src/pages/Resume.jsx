import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useNavigate } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import { motion } from "framer-motion";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../App.css";

export default function Resume() {
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const currentPath = window.location.pathname;
  const basePath = currentPath.includes("/Portfolio/") ? "/Portfolio/" : "/";
  const pdfFile = basePath + "Alwaleed-Alshaghnoubi-Resume.pdf";

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc =
      window.location.origin + basePath + "pdf.worker.min.mjs";

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [basePath]);

  return (
    <div className="page resume-page">
      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Resume
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="resume-download"
      >
        <a href={pdfFile} download className="resume-download-button">
          <AiOutlineDownload size={20} /> Download PDF
        </a>
      </motion.div>

      <motion.div
        className="pdf-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="pdf-box">
          <Document file={pdfFile}>
            <Page
              pageNumber={1}
              scale={width > 1024 ? 1.5 : width > 768 ? 1 : 0.6}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>
      </motion.div>

      <motion.button
        onClick={() => navigate(-1)}
        className="back-home"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        ← Back
      </motion.button>
    </div>
  );
}
