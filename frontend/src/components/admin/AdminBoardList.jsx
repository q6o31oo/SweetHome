import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function AdminBoardList() {
	const [boardRequestList, setBoardRequestList] = useState({
		id: "",
		name: "",
		description: "",
	});
	useEffect(() => {
		axios({
			method: "GET",
			url: `${SERVER_URL}/api/admin/boards`,
		})
			.then((res) => {
				console.log(res.data);
				setBoardRequestList(res.data.boards);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return <h1>어드민 보드 리스트</h1>;
}

export default AdminBoardList;
