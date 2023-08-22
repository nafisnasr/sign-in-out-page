import Home from "./Home/Home";
import LoginBox from "./LoginBox/LoginBox";
import RegisterBox from "./RegisterBox/RegisterBox";

const router = [
    { path: '/', element: <Home /> },
    { path: '/login', element: <LoginBox /> },
    { path: '/register', element: <RegisterBox /> }
]

export default router;