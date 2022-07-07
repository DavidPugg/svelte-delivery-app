export interface Business {
	id: number;
	name: string;
	products: Product[];
}

export interface Product {
	id: number;
	name: string;
	price: number;
}

export interface CartItem {
	product: Product;
	qty: number;
}

export interface Cart {
	businessId: number;
	products: CartItem[];
}
