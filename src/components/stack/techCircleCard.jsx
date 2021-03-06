import "./techCircleCard.scss";

const minitech = ({ techName }) => {
	return (
		<div className="techContainer__minitech">
			<div className="minitech__imgContainer">
				<img
					src={process.env.PUBLIC_URL + `/img/${techName.replace(/\s/g, "")}.svg`}
					alt={techName}
					width={"40" + (techName === "creativity" ? "30" : "") + "%"}
				/>
			</div>
			<h3 className="minitech__title">{techName.toUpperCase()}</h3>
		</div>
	);
};

export default minitech;
