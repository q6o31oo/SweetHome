import { useDispatch } from "react-redux";
import { SET_REPORT } from "store/report";
import style from "style/articles/ArticleDetailComment.module.css";
import { deleteOrSubmit } from "utils/commentAxios";

function CommentButton({ user, comment, onClick, getComments }) {
	const dispatch = useDispatch();
	const id = comment.id;

	const commentDelete = async () => {
		if (window.confirm("댓글을 삭제 하시겠습니까?")) {
			const res = await deleteOrSubmit(user.apt_house.apt.apt_id, id, "delete");
			res && getComments(true);
		}
	};

	const reportThis = async () => {
		await dispatch(SET_REPORT({ ...comment, id, type: "comments" }));
		await window.open("/report", "report", "width=430, height=500,location=no,status=no");
	};
	return (
		<>
			{user.email === comment.email ? (
				<div className={style.btn_nested_comments}>
					<button className={style.btn_nested} onClick={onClick}>
						수정
					</button>
					<button className={style.btn_nested} onClick={commentDelete}>
						삭제
					</button>
				</div>
			) : (
				<button className={style.btn_nested} onClick={reportThis}>
					신고
				</button>
			)}
		</>
	);
}

export default CommentButton;
