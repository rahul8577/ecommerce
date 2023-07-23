import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error=useRouteError();
    return (
        <div className="error">
            <h1>OOPs</h1>
            <h2>{error.statusText || error.message}</h2>
        </div>
    );
}