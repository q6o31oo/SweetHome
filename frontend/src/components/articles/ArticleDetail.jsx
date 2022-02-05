import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Comments from "../comments/Comments";
import ArticleUpdate from "./ArticleUpdate";
import ArticleDetailButtons from "./ArticleDetailButtons";
import Sidebar from "../Sidebar";

function ArticleDetail() {
	const SERVER_URL = process.env.REACT_APP_SERVER_URL;
	const location = useLocation();
	const articleId = location.state.id;

	const [articleData, setArticleData] = useState();
	const [update, setUpdate] = useState(false);
	const [isLiked, setIsLiked] = useState();

	useEffect(() => {
		axios({
			url: `${SERVER_URL}/api/boards/articles/${articleId}`,
			method: "get",
		}).then((res) => {
			setArticleData(res.data);
		});
		getTotalLikes();
	}, [isLiked]);

	const getTotalLikes = () => {
		axios({
			url: `${SERVER_URL}/api/articles/${articleId}/likes`,
			method: "get",
		}).then((res) => {
			setIsLiked(res.data.is_liked);
		});
	};

	const handleHeartClick = () => {
		const method = isLiked ? "delete" : "post";

		axios({
			url: `${SERVER_URL}/api/articles/${articleId}/likes`,
			method: method,
		}).then(() => {
			setIsLiked((prev) => !prev);
		});
	};

	return (
		<div>
			<Sidebar />
			<nav>nav-bar</nav>
			{articleData &&
				(update ? (
					<ArticleUpdate articleId={articleId} setUpdate={setUpdate} />
				) : (
					<div>
						<article>
							<div>
								<p>{articleData.username}</p>
								<p>{articleData.created_at}</p>
							</div>
							<ArticleDetailButtons
								articleData={articleData}
								articleId={articleId}
								setUpdate={setUpdate}
							/>
							<h3>{articleData.title}</h3>
							<p>{articleData.content}</p>
							<div>
								<span>{articleData.total_likes}</span>
								<span>댓글 수</span>
								<button onClick={handleHeartClick}>{isLiked ? "💗" : "🤍"}</button>
							</div>
						</article>
						{/* <Comments articleId={articleId} /> */}
					</div>
				))}
		</div>
	);
}

export default ArticleDetail;
