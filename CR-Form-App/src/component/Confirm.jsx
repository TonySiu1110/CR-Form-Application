import React from "react";

const FormSubmitted = () => {
  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        <div style={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="green"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
      </div>
      <h2 style={styles.message}>Your form has been submitted.</h2>
      <a href="/" style={styles.link}>
        Go back
      </a>
      <p>
        confirmation number: 0123456789
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
    backgroundColor: "#EAFBF2",
    borderRadius: "50%",
    padding: "15px",
    marginBottom: "20px",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
  },
  message: {
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  link: {
    fontSize: "1rem",
    color: "#007BFF",
    textDecoration: "none",
    marginBottom: "10px",
  },
  url: {
    fontSize: "0.9rem",
    color: "#007BFF",
    textDecoration: "underline",
  },
};

export default FormSubmitted;
