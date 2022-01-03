import Header from "../Header";

const Home = () => {
    return (
        <div className={"d-flex justify-content-around"}>
            <a href={"/login"}><button type="button" className="btn btn-secondary">Login
            </button></a>
            <a href={"/register"}><button type="button" className="btn btn-secondary">Register
            </button></a>
        </div>
        );

};

export default Home;
