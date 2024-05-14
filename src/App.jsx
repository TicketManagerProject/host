import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./components/Loader";

const LogInPage = lazy(() => import("./pages/LogInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <LogInPage />
          </Suspense>
        }
      />
      <Route
        path="/signup"
        element={
          <Suspense fallback={<Loader />}>
            <SignUpPage />
          </Suspense>
        }
      />
    </Routes>
  </Router>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
