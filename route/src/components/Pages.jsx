import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useParams, useSearchParams } from "react-router-dom"
// import Article from './../../../begin1/src/components/Article'
const Pages = () => {

    function Home() {
        const location = useLocation();

        useEffect(() => {
            console.log("current path", location.pathname);
        }, [location])
        return <h1>Home Page</h1>
    }

    function User() {
        const { id } = useParams();
        const location = useLocation();

        useEffect(() => {
            console.log("current path", location.pathname);
        }, [location, id])
        return <h1>User Id : {id}</h1>
    }

    function Search() {
        // const location = useLocation();
        // // URLSearchParams() : 브라우저 API 이용
        // const queryParams = new URLSearchParams(location.search);
        // const keyword = queryParams.length("keyword");

        // useEffect(() => {
        //     console.log("current path", location.pathname);
        //     console.log("keyword", location.keyword);
        // }, [location, keyword])
        const [queryParams] = useSearchParams();
        const keyword = queryParams.get("keyword");
        return <h1>Search keyword :{keyword}</h1>
    }

    function Articles() {
        return (
            <>
                <Outlet>
                    <ul>
                        <li>
                            <Link to={"/articles/1"}>게시글 1 </Link>
                        </li>
                        <li>
                            <Link to={"/articles/2"}>게시글 2 </Link>
                        </li>
                        <li>
                            <Link to={"/articles/3"}>게시글 3 </Link>
                        </li>
                    </ul>
                </Outlet>
            </>
        )
    }

    function Error() {
        return <h2>404 - Page Not Found</h2>
    }

    const Pages = () => { }
    return (
        <div>
            <Routes>
                <Route path="/" element={Home}></Route>
                <Route path="/user/:id" element={User}></Route>
                <Route path="/search" element={Search}></Route>
                <Route path="/articles" element={<Articles />}>
                    <Route path="/articles/:id" element={<Article />} />
                </Route>
            </Routes>
        </div>
    );
};

export default Pages;