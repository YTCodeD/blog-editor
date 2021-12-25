import { Routes, Route } from 'react-router-dom';

import HomePage from '../page/Home';
import NewPostPage from '../page/NewPost';
import DetailPage from '../page/Detail';

function RoutersMain() {
	return (
		<Routes>
			<Route exact path="/" element={<HomePage />} />
			<Route exact path="/tao-bai-viet" element={<NewPostPage />} />
			<Route exact path="/xem-bai-viet/:slug" element={<DetailPage />} />
		</Routes>
	);
}

export default RoutersMain;
