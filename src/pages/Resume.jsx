import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useNavigate } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import { motion } from "framer-motion";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../App.css";

// Configuration constants
const RESUME_CONFIG = {
  filename: "Alwaleed-Alshaghnoubi-Resume.pdf",
  workerFile: "pdf.worker.min.mjs",
  scale: {
    desktop: 1.5,
    tablet: 1,
    mobile: 0.6,
  },
  breakpoints: {
    desktop: 1024,
    tablet: 768,
  },
};

// Animation variants for cleaner motion config
const animations = {
  title: {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  download: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.2 },
  },
  pdf: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4, delay: 0.3 },
  },
  backButton: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.4 },
  },
};

// Custom hooks for cleaner logic
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function useBasePath() {
  const currentPath = window.location.pathname;
  return currentPath.includes("/Portfolio/") ? "/Portfolio/" : "/";
}

function usePDFWorker(basePath) {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = 
      window.location.origin + basePath + RESUME_CONFIG.workerFile;
  }, [basePath]);
}

// Helper function for responsive PDF scaling
function getPDFScale(width) {
  const { desktop, tablet } = RESUME_CONFIG.breakpoints;
  const { desktop: desktopScale, tablet: tabletScale, mobile: mobileScale } = RESUME_CONFIG.scale;
  
  if (width > desktop) return desktopScale;
  if (width > tablet) return tabletScale;
  return mobileScale;
}

function DownloadButton({ pdfFile }) {
  return (
    <motion.div className="resume-download" {...animations.download}>
      <a href={pdfFile} download className="resume-download-button">
        <AiOutlineDownload size={20} /> Download PDF
      </a>
    </motion.div>
  );
}

function PDFViewer({ pdfFile, scale }) {
  return (
    <motion.div className="pdf-container" {...animations.pdf}>
      <div className="pdf-box">
        <Document file={pdfFile}>
          <Page
            pageNumber={1}
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    </motion.div>
  );
}

function BackButton({ onBack }) {
  return (
    <motion.button 
      onClick={onBack} 
      className="back-home" 
      {...animations.backButton}
    >
      ← Back
    </motion.button>
  );
}

export default function Resume() {
  const width = useWindowWidth();
  const basePath = useBasePath();
  const navigate = useNavigate();
  
  const pdfFile = basePath + RESUME_CONFIG.filename;
  const pdfScale = getPDFScale(width);
  
  usePDFWorker(basePath);

  return (
    <div className="page resume-page">
      <motion.h1 className="section-title" {...animations.title}>
        My Resume
      </motion.h1>

      <DownloadButton pdfFile={pdfFile} />
      
      <PDFViewer pdfFile={pdfFile} scale={pdfScale} />
      
      <BackButton onBack={() => navigate(-1)} />
    </div>
  );
}