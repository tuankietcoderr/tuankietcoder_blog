import React from "react";

const DownloadFile = ({ file }) => {
  return (
    <>
      <div className="d-flex" style={{ gap: 16 }}>
        <h3>Tải về file: </h3>
        <a
          href={file}
          className="center"
          download
          rel="noopener noreferrer"
          target="_blank"
        >
          <button
            className="btn"
            style={{ fontSize: 20, padding: "0.2rem 2rem", fontWeight: "bold" }}
          >
            Download
          </button>
        </a>
      </div>
    </>
  );
};

export default DownloadFile;
