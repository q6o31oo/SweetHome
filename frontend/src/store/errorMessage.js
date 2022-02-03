import { toast } from "react-toastify";

export default function errorMessage(code) {
	const initialState = {
		A01: "만료된 토큰입니다",
		A02: "잘못된 토큰 서명입니다",
		A03: "지원하지 않는 토큰입니다",
		A04: "토큰이 잘못되었습니다",
		A05: "로그아웃된 유저입니다",
		A06: "토큰에 권한값이 존재하지 않습니다",
		A07: "리프레시 토큰이 일치하지 않습니다",
		B01: "존재하지 않는 권한코드입니다",
		C01: "존재하지 않는 유저의 이메일입니다",
		C02: "존재하지 않는 유저의 이름입니다",
		C03: "비밀번호가 일치하지 않는 유저입니다",
		C04: "이미 중복된 이메일의 회원 정보가 존재합니다.",
		C05: "존재하지 않는 세대주입니다",
		C06: "빌딩 ID가 일치하지 않습니다.",
		D01: "존재하지 않는 동의서 ID입니다",
		D02: "해당 아파트의 관리자가 아닙니다",
		E01: "존재하지 않는 메시지 ID입니다",
		E02: "메시지 송수신자와 일치하지 않는 유저입니다",
		E03: "메시지 송수신자와 일치하지 않는 이메일 입니다",
		F01: "존재하지 않는 게시판입니다",
		F02: "이미 즐겨찾기된 게시판입니다",
		F03: "즐겨찾기 되지 않은 게시판입니다",
		G01: "존재하지 않는 게시글입니다",
		G02: "게시글 작성자와 일치하지 않는 이메일입니다",
		G03: "이미 좋아요한 게시글입니다",
		G04: "좋아요 되지 않은 게시글입니다",
		G05: "이미 신고한 게시글입니다",
		H01: "존재하지 않는 댓글입니다",
		H02: "댓글 작성자와 일치하지 않는 이메일입니다",
		H03: "이미 좋아요한 댓글입니다",
		H04: "좋아요 되지 않은 댓글입니다",
		H05: "이미 신고한 댓글입니다",
		H06: "존재하지 않는 대댓글입니다",
		H07: "대댓글 작성자와 일치하지 않는 이메일입니다",
		H08: "이미 좋아요한 대댓글입니다",
		H09: "좋아요되지 않은 대댓글입니다",
		H10: "이미 신고한 대댓글입니다",
		Z01: "ILLEGAL 에러입니다",
		Z02: "RUNTIME 에러입니다",
	};
	return toast.error(initialState[code]);
}
