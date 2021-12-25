import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import FormCreate from '../../components/FormCreate';
import style from './NewPost.module.scss';

const NewPostPage = ({}) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');
	const [showForm, setShowForm] = useState(false);

	const config = {
		readonly: false, // all options from https://xdsoft.net/jodit/doc/
	};

	const handleSubmit = () => {
		content !== '' && setShowForm(true);
	};

	return (
		<div className={style.main}>
			{showForm && <FormCreate content={content} />}
			<div className={clsx([style.btnSubmit, style.active])}>
				<NavLink to="/">Về trang chủ</NavLink>
				<button onClick={handleSubmit}>Xuất bản</button>
			</div>
			<JoditEditor
				ref={editor}
				value={content}
				config={config}
				tabIndex={1} // tabIndex of textarea
				onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
				onChange={newContent => {}}
			/>
		</div>
	);
};

export default NewPostPage;
