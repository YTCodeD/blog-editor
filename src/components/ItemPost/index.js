import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './ItemPost.module.scss';

function ItemPost({ data }) {
	return (
		<NavLink to={`/xem-bai-viet/${data.slug}`} className={style.item}>
			<div className={style.text}>
				<h3>{data.title}</h3>
				<p>{data.des}</p>
			</div>

			<div className={style.img}>
				<img src={data.img} alt="javaasd" />
			</div>
		</NavLink>
	);
}

export default ItemPost;
