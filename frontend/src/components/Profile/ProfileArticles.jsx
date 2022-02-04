import { useEffect, useState } from "react";
import profileFunction from "../../utils/profileFunction";

function ProfileArticles() {
	const [articles, setArticles] = useState("");

	useEffect(() => {
		profileFunction("boards/articles/mine", setArticles);
	}, []);

	return (
		<div>
			{/* Link로 해당 게시글로 이동 기능 추가 예정 */}
			{articles &&
				articles.map((article, idx) => (
					<div key={idx}>
						<p>{article.title}</p>
						<p>{article.created_at}</p>
					</div>
				))}
		</div>
	);
}

export default ProfileArticles;
