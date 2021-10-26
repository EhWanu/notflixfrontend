import {
	Add,
	PlayArrow,
	ThumbDownOutlined,
	ThumbUpOutlined,
} from "@mui/icons-material";
import "./listItem.scss";

const ListItem = () => {
	return (
		<div className="listItem">
			<img
				src="https://images.unsplash.com/photo-1511875762315-c773eb98eec0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
				alt=""
			/>
			<div className="itemInfo">
				<div className="icons">
					<PlayArrow />
					<Add />
					<ThumbUpOutlined />
					<ThumbDownOutlined />
				</div>
			</div>
		</div>
	);
};

export default ListItem;
