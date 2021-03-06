import axios from "axios";
import { useEffect, useRef, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import style from "style/Authority.module.css";
import { toast } from "react-toastify";
import errorMessage from "store/errorMessage";
import { cancelOrRefer } from "utils/authorityRequest";

function AptMemberRequest(props) {
	const [addresses, setAddress] = useState({
		address: "",
		building: "",
		unit: "",
		buildingCode: "",
		postalCode: "",
	});
	const [hasRequest, setHasRequest] = useState(false);
	const [isModal, setIsModal] = useState(false);
	const { address, building, unit, buildingCode, postalCode } = addresses;
	const [message, setMessage] = useState("");
	const URL = process.env.REACT_APP_SERVER_URL;
	const modal = useRef();

	useEffect(() => {
		axios({
			url: `${URL}/api/apts/register`,
			method: "get",
			headers: {
				"Content-type": "application/json",
			},
		})
			.then(() => setHasRequest(true))
			.catch(() => setHasRequest(false));
	}, []);

	const handleCloseModal = (e) => {
		if (isModal && (!modal.current || !modal.current.contains(e.target))) setIsModal(false);
	};
	const onChange = (e) => {
		setAddress((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const changeMessage = (e) => {
		setMessage(e.target.value);
	};
	const checkNum = /[0-9]/;

	const findAddress = () => {
		setIsModal((prev) => !prev);
	};

	const onCancel = (e) => {
		e.preventDefault();
		cancelOrRefer("delete", setHasRequest, false, true);
	};

	useEffect(() => {
		window.addEventListener("click", handleCloseModal);
		return () => {
			window.removeEventListener("click", handleCloseModal);
		};
	}, []);
	const onComplete = (data) => {
		let addr;
		data.userSelectedType === "R" ? (addr = data.roadAddress) : (addr = data.jibunAddress);
		setAddress({
			...addresses,
			address: addr,
			postalCode: data.zonecode,
			buildingCode: data.buildingCode,
		});
		findAddress();
	};

	const onSubmit = (e) => {
		const data = {
			apt_number: buildingCode,
			dong: building,
			ho: unit,
			message,
		};
		e.preventDefault();
		if (checkNum.test(building) && checkNum.test(unit) && buildingCode) {
			window.confirm("?????? ???????????? ?????? ??? ??? ????????????. ?????????????????????????") &&
				axios({
					url: `${URL}/api/apts/register`,
					method: "post",
					headers: {
						"Content-type": "application/json;charset=UTF-8",
					},
					data,
				})
					.then(() => window.location.replace("/"))
					.catch((err) => errorMessage(err.response.data.error_code));
		} else {
			toast.error("?????? ????????? ??????????????????");
		}
	};

	return hasRequest ? (
		<form>
			<h1>
				???????????? <br /> ?????? ????????? ???????????? ????????????
			</h1>
			<button onClick={onCancel} className={style.btn_cancel_request}>
				?????? ?????? ????????????
			</button>
		</form>
	) : (
		<div className={style.apt_member_page}>
			<h1 className={props.moving ? style.hidden : style.apt_member_title}>????????? ????????? ??????</h1>
			<div className={style.apt_member}>
				<form onSubmit={onSubmit}>
					<div className={style.apt_member_form_div}>
						<aside>
							<label>?????? ????????????</label>
						</aside>
						<input
							type="text"
							readOnly
							placeholder="????????????"
							className={style.postal_code}
							value={postalCode}
						/>
						<button ref={modal} type="button" onClick={findAddress}>
							?????? ??????
						</button>
						<br />
						<input
							type="text"
							readOnly
							placeholder="??????"
							value={address}
							className={style.member_address}
						/>
						<br />

						<input
							type="text"
							placeholder="???"
							id="building"
							className={style.building}
							value={building}
							onChange={onChange}
							required
						/>
						<input
							type="text"
							placeholder="??????"
							id="unit"
							className={style.unit}
							value={unit}
							onChange={onChange}
							required
						/>
						<p className={style.desc}>?????? ???????????? ????????? ?????? ????????????</p>
					</div>
					<div>
						<aside>
							<label>??????</label>
						</aside>
						<textarea cols="35" rows="30" onChange={changeMessage}></textarea>
					</div>
					<button className={style.btn_submit}>????????????</button>
				</form>
				{isModal && <DaumPostcode className={style.showModal} onComplete={onComplete} />}
			</div>
		</div>
	);
}

export default AptMemberRequest;
