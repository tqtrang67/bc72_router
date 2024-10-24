import { memo, useEffect } from "react";

function Card({ share, handleUpShare }) {
	console.log("component con render");
	useEffect(() => {
		console.log("card didmount");
		return () => {
			// function này sẽ chạy khi component bị unmount
			console.log("card will unmount");
		};
	});
	console.log("component con render");

	return (
		<div className="bg-warning text-while">
			<h2>Card</h2>
			<h3>{share} Share</h3>
			<button onClick={handleUpShare} className="btn btn-success">
				Up Share
			</button>
		</div>
	);
}

export default memo(Card);
// memo (PureComponent)
// về tìm hiểu useMome , shallow compare / deep compare , shallow copy / deep copy
