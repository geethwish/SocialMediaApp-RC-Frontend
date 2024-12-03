import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { fetchPosts } from "../../store/slices/posts/getPost.slice";

const Home = () => {

    const dispatch = useDispatch<AppDispatch>();
    const posts = useSelector((state: RootState) => state.posts.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    console.log(posts);

    return (
        <div>Home</div>
    )
}

export default Home