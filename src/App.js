import React from "react";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Hero name="Spiderman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero name="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero name="Jocker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
