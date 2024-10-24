import { useCallback, useEffect, useState } from "react";
import Card from "./Card";

/**
	 useEffect : thay thế cho các lifecycle method của class component gồm 3 chức năng : componentDidMount, componentDidUpdate, componentWillUnmount

	 useEffect(()=> {}, [])
	 // tham số 1: callback function sẽ được chạy 1 hoặc nhiều lần lệ thuộc vào tham số thứ 2 
	 // tham số 2 : mảng dependency, nếu array rỗng => componentDidmount ,nếu có giá trị thì khi giá trị thay đổi thì callback function sẽ chạy lại
	 */
export default function UseEffect() {
	const [like, setLike] = useState(0);
	const [share, setShare] = useState(100);
	useEffect(() => {
		console.log("useEffect");
	}, [like]);
	console.log("render");
	let handleUpLike = () => {
		setLike(like + 1);
	};
	let handleUpShare = useCallback(() => {
		setShare(share + 1);
	}, [share]);
	return (
		<div>
			<h2>Like {like}</h2>
			<button onClick={handleUpLike} className="btn btn-danger">
				Up like
			</button>
			<Card share={share} handleUpShare={handleUpShare} />
		</div>
	);
}
