import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Support from "./components/Support";
import Contact from "./components/Contact";
import Error from "./components/Error";
import LoginPage from "./components/LoginPage";
import StudentProgress from "./components/StudentProgress";
import TechnicalReport from "./components/TechnicalReport";
import NonTechnicalReport from "./components/NonTechnicalReport";

const AppLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Header />
            </header>
            <main className="flex-grow">
                <Outlet /> {/* Render child route here */}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <LoginPage />, // Default to Login Page
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "student-progress",
                element: <StudentProgress />,
            },
            {
                path: "technical-report",
                element: <TechnicalReport />
            },
            {
                path: "non-technical-report",
                element: <NonTechnicalReport />
            },
            {
                path: "support",
                element: <Support />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);