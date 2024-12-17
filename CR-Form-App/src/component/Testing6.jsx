import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { FaTrashAlt } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

function FileUpload() {
  const [uploadedFiles, setUploadedFiles] = useState([]); // Store multiple files

  const onDrop = (acceptedFiles) => {
    const newFiles = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true, // Allow multiple files
    accept: ".pdf,.doc,.docx,.png,.jpg,.jpeg",
    maxSize: 5 * 1024 * 1024,
  });

  const handleDelete = (fileName) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((uploadedFile) => uploadedFile.file.name !== fileName)
    );
  };

  // Cleanup previews when component unmounts
  useEffect(() => {
    return () => {
      uploadedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [uploadedFiles]);

  return (
    <div style={{ width: "400px", margin: "auto", textAlign: "center" }}>
      <h3>Attachment</h3>
      <p>
        Upload files (5MB max each) <span style={{ color: "red" }}>*</span>
      </p>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #ccc",
          borderRadius: "8px",
          padding: "20px",
          backgroundColor: isDragActive ? "#f0f8ff" : "#f9f9f9",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input {...getInputProps()} />
        <FiUpload size={30} color="#555" />
        <p>
          Drop files here or{" "}
          <span style={{ color: "#007bff", cursor: "pointer" }}>Select files</span>
        </p>
      </div>

      {uploadedFiles.length > 0 && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          {uploadedFiles.map((uploadedFile) => (
            <div
              key={uploadedFile.file.name}
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                backgroundColor: "#f9f9f9",
                marginBottom: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flexGrow: 1 }}>
                  <p style={{ margin: 0 }}>{uploadedFile.file.name}</p>
                  <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>
                    {(uploadedFile.file.size / 1024).toFixed(2)} KB
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(uploadedFile.file.name)}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#d9534f",
                  }}
                >
                  <FaTrashAlt size={20} />
                </button>
              </div>
              {/* Preview Section */}
              {uploadedFile.file.type.startsWith("image/") && (
                <img
                  src={uploadedFile.preview}
                  alt="preview"
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    borderRadius: "8px",
                  }}
                />
              )}
              {uploadedFile.file.type === "application/pdf" && (
                <iframe
                  src={uploadedFile.preview}
                  title="PDF Preview"
                  style={{
                    width: "100%",
                    height: "200px",
                    marginTop: "10px",
                    border: "1px solid #ccc",
                  }}
                />
              )}
              {/* Unsupported File Type */}
              {!uploadedFile.file.type.startsWith("image/") &&
                uploadedFile.file.type !== "application/pdf" && (
                  <p style={{ fontSize: "12px", color: "#999" }}>
                    Preview not available for this file type.
                  </p>
                )}
            </div>
          ))}
          <p style={{ color: "green", margin: "10px 0 0" }}>
            ✔ {uploadedFiles.length} file(s) successfully uploaded!
          </p>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
