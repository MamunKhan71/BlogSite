const Article = ({ article }) => {
    const { image, title, subtitle, category, publish_date, author } = article;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <div className="p-8 rounded-xl flex items-center justify-center">
                <div className="w-64 h-64">
                    <img className="rounded-xl w-full h-full object-cover" src={image} alt="Movie" />
                </div>
            </div>
            <div className="card-body pl-0">
                <h2 className="card-title">{title}</h2>
                <p>{subtitle}</p>
                <p><strong>ক্যাটাগরিঃ</strong> {category}</p>
                <p><strong>প্রকাশনাঃ</strong> {publish_date}</p>
                <p><strong>লেখকঃ </strong>{author}</p>
                <div className="card-actions justify-start">
                    <button className="btn bg-amber-400 w-full">আরো পড়ুন<img width="24" height="24" src="https://img.icons8.com/ios/50/right--v1.png" alt="right--v1" /></button>
                </div>
            </div>
        </div>
    );
};

export default Article;