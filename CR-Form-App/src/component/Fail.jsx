import React from "react";

const FormError = () => {
  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="36"
          height="36"
          fill="none"
          stroke="red"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 22h20L12 2z" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12" y2="16" />
        </svg>
      </div>
      <h2 style={styles.heading}>Unable to submit form</h2>
      <p style={styles.description}>
        It will show the exception from the server side
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
    color: "#333",
  },
  iconContainer: {
    marginBottom: "20px",
  },
  heading: {
    fontSize: "1.5rem",
    color: "#FF0000",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1rem",
    color: "#666",
    maxWidth: "400px",
  },
};

export default FormError;
