import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import style from './Detail.module.scss';

function DetailPage() {
	const [data, setData] = useState({});
	const { slug } = useParams();

	useEffect(() => {
		const dataLocal = localStorage.getItem('dataLocal');
		const dataDetail = [...JSON.parse(dataLocal)].filter(
			item => item.slug === slug,
		);
		setData(...dataDetail);
	}, []);

	return (
		<div className={style.page}>
			<NavLink to={'/'}>Về trang chủ</NavLink>
			<div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
		</div>
	);
}

export default DetailPage;
