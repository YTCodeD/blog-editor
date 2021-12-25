import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './FormCreate.module.scss';

function FormCreate({ content }) {
	const nav = useNavigate();
	const [data, setData] = useState({ content });

	const handleChange = e => {
		const { value, name } = e.target;
		setData(prev => ({ ...prev, [name]: value }));
	};

	const handleSelectImg = e => {
		getBase64(e.target.files[0]);
	};

	const handleSubmit = e => {
		e.preventDefault();
		const dataLocal = localStorage.getItem('dataLocal');
		const dataForm = { ...data, slug: convertToSlug(data.title) };
		if (dataLocal) {
			localStorage.setItem(
				'dataLocal',
				JSON.stringify([...JSON.parse(dataLocal), dataForm]),
			);
		} else {
			localStorage.setItem('dataLocal', JSON.stringify([dataForm]));
		}
		nav('/');
	};

	function getBase64(file) {
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function () {
			setData(prev => ({ ...prev, ['img']: reader.result }));
		};
		reader.onerror = function (error) {
			console.log('Error: ', error);
		};
	}

	function convertToSlug(Text) {
		return Text.toLowerCase()
			.replace(/ /g, '-')
			.replace(/[^\w-]+/g, '');
	}

	useEffect(() => () => setData({}), []);

	return (
		<div>
			<div className={style.overlay}></div>
			<form className={style.form} onSubmit={handleSubmit}>
				<div>
					<div>
						<label>Tiêu đề</label>
					</div>
					<input type={'text'} onChange={handleChange} name="title" />
				</div>
				<div>
					<div>
						<label>Mô tả</label>
					</div>
					<input type={'text'} onChange={handleChange} name="des" />
				</div>
				<div>
					<div>
						<label>Mô tả</label>
					</div>
					<input
						type={'file'}
						onChange={handleSelectImg}
						name="img"
					/>
					{data?.img && <img src={data?.img} alt="pereview" />}
				</div>
				<div>
					<button>Xuất bản ngay</button>
				</div>
			</form>
		</div>
	);
}

export default FormCreate;
