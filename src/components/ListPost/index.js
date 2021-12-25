import React from 'react';

import ItemPost from '../ItemPost';
import style from './ListPost.module.scss';

function ListPost({ data = [] }) {
	return (
		<div className={style.list}>
			{data.map(item => (
				<ItemPost key={item.title} data={item} />
			))}
		</div>
	);
}

export default ListPost;
