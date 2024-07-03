import { Link, Outlet } from "react-router-dom";

function Home (){
    return(
        <>
        <h2>Best Seller Authors</h2>
        <ul>
            <li><Link to="/author/J.K.Rowling">J.K.Rowling</Link></li>
            <li><Link to="/author/J.R.R.Tolkien">J.R.R.Tolkien</Link></li>
        </ul>
        <Outlet />
        </>
    );
}

export default Home