import {
	ArrowBackIosNewOutlined,
	ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

const List = () => {
	const [slideNumber, setSlideNumber] =
		useState(0);

	const [isMoved, setIsMoved] = useState(false);

	const listRef = useRef();

	const handClick = (direction) => {
		setIsMoved(true);
		let distance =
			listRef.current.getBoundingClientRect().x - 50;
		if (direction === "left" && slideNumber > 0) {
			setSlideNumber(slideNumber - 1);
			listRef.current.style.transform = `translateX(${
				230 + distance
			}px)`;
		}
		if (direction === "right" && slideNumber < 5) {
			setSlideNumber(slideNumber + 1);
			listRef.current.style.transform = `translateX(${
				-230 + distance
			}px)`;
		}
	};
	return (
		<div className="list">
			<span className="listTitle">
				Continue Watching
			</span>
			<div className="wrapper">
				<ArrowBackIosNewOutlined
					className="sliderArrow left"
					onClick={() => handClick("left")}
					style={{ display: !isMoved && "none" }}
				/>
				<div className="container" ref={listRef}>
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
				</div>
				<ArrowForwardIosOutlined
					className="sliderArrow right"
					onClick={() => handClick("right")}
				/>
			</div>
		</div>
	);
};

export default List;
