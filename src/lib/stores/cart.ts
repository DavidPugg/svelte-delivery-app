import type { Cart, Product } from '$lib/types';
import { deleteCookie, setCookie } from '$lib/utils/cookie';
import { writable } from 'svelte/store';

const createCart = () => {
	const { subscribe, set, update } = writable<Cart | null>(null);

	const addToCart = (businessId: number, product: Product) => {
		let cart: Cart;
		update((n) => {
			if (!n || n.businessId != businessId) {
				cart = {
					businessId,
					products: [{ product, qty: 1 }]
				};
				setCookie('cart', cart, 30);
				return cart;
			}
			const products = getUpdatedProducts(n, product);
			cart = {
				...n,
				products
			};
			setCookie('cart', cart, 30);
			return cart;
		});
	};

	const resetCart = () => {
		deleteCookie('cart');
		set(null);
	};

	const setCart = (cart: Cart) => {
		set(cart);
	};

	const removeFromCart = (id: number) => {
		update((n) => {
			if (n == null) return null;
			const item = n.products.find((e) => e.product.id == id);
			const items = n.products.map((e) => e.product.id);
			const index = items.indexOf(id);
			if (item && item?.qty <= 1) {
				n.products.splice(index, 1);
			} else if (item) {
				n.products.splice(index, 1, { ...item, qty: item.qty - 1 });
			}
			if (n.products.length <= 0) {
				deleteCookie('cart');
				return null;
			}
			setCookie('cart', { ...n }, 30);
			return { ...n };
		});
	};

	const getUpdatedProducts = (n: Cart, product: Product) => {
		const item = n.products.find((e) => e.product.id == product.id);
		if (!item) {
			return [...n.products, { product, qty: 1 }];
		}
		const items = n.products.map((e) => e.product.id);
		const index = items.indexOf(product.id);
		n.products.splice(index, 1, { product: item.product, qty: item.qty + 1 });
		return n.products;
	};

	return {
		subscribe,
		addToCart,
		resetCart,
		removeFromCart,
		setCart
	};
};

export const cart = createCart();
