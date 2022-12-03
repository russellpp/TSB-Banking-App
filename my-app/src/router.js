import { createBrowserRouter } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/dashcomponents/Transactions";
import Account from "./components/dashcomponents/Account";
<<<<<<< HEAD
import ErrorPage from "./components/ErrorPage"
import App from "./App";
=======
import ExpensesDashboard from "./components/ExpensesDashboard";
>>>>>>> 99c0f5c63044c21e9fa7d79c3d39b2cdf8282ff9


const router  = createBrowserRouter(
    [
        {
            path:"/",
            element:<LoginForm />
        },
        {
            path:"/SignUpForm",
            element:<SignUpForm />
        },
        {
            path:"/Dashboard",
            element:<Dashboard />,
        },
        {
<<<<<<< HEAD
            path:'*',
            elementError:<ErrorPage />
=======
            path:"/ExpensesDashboard",
            element: <ExpensesDashboard />
>>>>>>> 99c0f5c63044c21e9fa7d79c3d39b2cdf8282ff9
        }
    ]
)

export default router