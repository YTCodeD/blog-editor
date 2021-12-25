import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ListPost from '../../components/ListPost';

function HomePage() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const dataLocal = localStorage.getItem('dataLocal');
		dataLocal && setData(JSON.parse(dataLocal));
		return () => setData([]);
	}, []);

	return (
		<div className="page">
			<h1>Trang chủ</h1>
			<div className="btn-group-add">
				<NavLink to={'/tao-bai-viet'}>Thêm bài viết</NavLink>
			</div>
			<ListPost data={data} />
		</div>
	);
}

export default HomePage;
