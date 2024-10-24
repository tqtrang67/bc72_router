import { useEffect, useState } from "react";
import axios from "axios";
export default function HomePage() {
	const [movies, setMovies] = useState([]);
	console.log("🚀 ~ HomePage ~ movies:", movies);
	useEffect(() => {
		// gọi api lấy danh sách phim khi load
		axios({
			url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
			method: "GET",
			headers: {
				TokenCybersoft:
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MiIsIkhldEhhblN0cmluZyI6IjEzLzA0LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0NDUwMjQwMDAwMCIsIm5iZiI6MTcxODAzODgwMCwiZXhwIjoxNzQ0NjUwMDAwfQ.fmqH6r3okZ7fvy9XANWrnS3RWO_QFuFVMtEunoJHZrM",
			},
		})
			.then((result) => {
				setMovies(result.data.content);
				console.log("result", result);
			})
			.catch((error) => {
				console.log("error", error);
			});
	}, []);

	return (
		<div className="row">
			{movies.map((movie) => {
				<div key={movie.maPhim} className="col-2">
					<img className="w-100" src={movie.hinhAnh} alt="" />
					<p>{movie.tenPhim}</p>
				</div>;
			})}
		</div>
	);
}
