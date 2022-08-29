import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		(async () => {
			const { data: response } = await axios(API);
			setProducts(response);
		})();
	}, []);
	return products;
};
export default useGetProducts;
