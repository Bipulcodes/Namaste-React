import { useRouteError } from "react-router-dom";
const Error = () => {

    const err = useRouteError();
    console.log(err);
    
    return(
        <div>
            <h1>Opps!</h1>
            <h2>Something went wrong</h2>
            <h3>{err.error.message +" "+"In a wrong Route"}</h3>
        </div>

    )
}

export default Error;
