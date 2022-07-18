import { session } from '$app/stores';
import type { Cart, CartItem, Product } from '$lib/types';
import { deleteCookie, setCookie } from '$lib/utils/cookie';

export const addToCart = (businessId: number, product: Product) => {
	let cart: Cart;
	session.update((n) => {
		if (!n.cart || n.cart.businessId != businessId) {
			cart = {
				businessId,
				products: [{ product, qty: 1 }]
			};
			setCookie('cart', cart, 30);
			return {
				...n,
				cart
			};
		}
		const products = getUpdatedProducts(n.cart, product);
		cart = {
			...n.cart,
			products
		};
		setCookie('cart', cart, 30);
		return {
			...n,
			cart
		};
	});
};

export const resetCart = () => {
	deleteCookie('cart');
	session.update((session) => {
		return {
			...session,
			cart: null
		};
	});
};

export const setCart = (cart: Cart) => {
	session.update((session) => {
		return {
			...session,
			cart
		};
	});
};

export const removeFromCart = (id: number) => {
	session.update((n) => {
		if (n.cart == null) return { ...n, cart: null };
		const item = n.cart.products.find((e: CartItem) => e.product.id == id);
		const items = n.cart.products.map((e: CartItem) => e.product.id);
		const index = items.indexOf(id);
		if (item && item?.qty <= 1) {
			n.cart.products.splice(index, 1);
		} else if (item) {
			n.cart.products.splice(index, 1, { ...item, qty: item.qty - 1 });
		}
		if (n.cart.products.length <= 0) {
			deleteCookie('cart');
			return { ...n, cart: null };
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
