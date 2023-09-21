import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col gap-6 justify-center items-center">
            <h1 className="text-7xl font-bold">Opps!!!</h1>
            <Link to='/'><button className="btn btn-success">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;