import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import style from "../style/Messages.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function MessageBox() {
	const [isOpen, setMenu] = useState(false);

	const toggleMenu = () => {
		setMenu(!isOpen);
	};
	return (
		<div className={style.message_box_container}>
			<div>
				<FontAwesomeIcon onClick={toggleMenu} icon={faBars} />
				{isOpen && (
					<ul>
						<li className={style.li_link}>
							<Link className={style.link} to="read-receive-message">
								받은 메시지
							</Link>
						</li>
						<li className={style.li_link}>
							<Link className={style.link} to="read-send-message">
								보낸 메시지
							</Link>
						</li>
						<li className={style.li_link}>
							<Link className={style.link} to="send-message">
								메시지 보내기
							</Link>
						</li>
					</ul>
				)}
			</div>

			<div>
				<Outlet />
			</div>
		</div>
	);
}

export default MessageBox;
