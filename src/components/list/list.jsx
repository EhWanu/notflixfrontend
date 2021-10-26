import {
	ArrowBackIosNewOutlined,
	ArrowForwardIosOutlined,
} from "@mui/icons-material";
import "./list.scss";

const List = () => {
	return (
		<div className="list">
			<span className="lisTitle">
				Continue Watching
			</span>
			<div className="wrapper">
				<ArrowBackIosNewOutlined />
				<div className="container"></div>
				<ArrowForwardIosOutlined />
			</div>
		</div>
	);
};

export default List;
