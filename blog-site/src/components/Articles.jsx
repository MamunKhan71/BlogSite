import { useLoaderData } from "react-router-dom";
import Article from "./Article";

const Articles = () => {
    const articles = useLoaderData();
    return (
        <div className="grid place-items-center grid-cols-2 gap-10 p-8 justify-self-center">
            {
                articles.map(article => <Article key={article.id} article={article}></Article>)
            }
        </div>
    );
};

export default Articles;