import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { LoginLayout } from "../layout/LoginLayout";
import { MainLayout } from "../layout/MainLayout";
import { Step1 } from "../pages/Step1";
import { Step2 } from "../pages/Step2";
import ProtectedRoute from "./ProtectedRoute";


export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <LoginLayout />,
            children: [
                {
                    index: true,
                    element: <Login />,
                },
            ],
        },
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: 'paso1',
                    element: (
                        <ProtectedRoute>
                            <Step1 />
                        </ProtectedRoute>
                    ),
                },
                {
                    path: 'paso2',
                    element: (
                        <ProtectedRoute>
                            <Step2 />
                        </ProtectedRoute>
                    ),
                },
            ],
        },
    ]
)

