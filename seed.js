import prisma from '@prisma/client';

export const db = new prisma.PrismaClient();

const restaurants = [
	{
		name: 'Picikato',
		type: 'restaurant',
		products: {
			create: [
				{
					name: 'Hamburger',
					price: 8.99
				},
				{
					name: 'Pizza',
					price: 10
				}
			]
		}
	},
	{
		name: 'Limbo',
		type: 'restaurant',
		products: {
			create: [
				{
					name: 'Steak',
					price: 18.99
				},
				{
					name: 'Pulled pork',
					price: 11.49
				}
			]
		}
	},
	{
		name: 'Fudi',
		type: 'restaurant',
		products: {
			create: [
				{
					name: 'Salad',
					price: 5.99
				},
				{
					name: 'Bread sticks',
					price: 3.49
				}
			]
		}
	}
];

const stores = [
	{
		name: 'Mercator',
		type: 'store',
		products: {
			create: [
				{
					name: 'Bread',
					price: 1.29
				},
				{
					name: 'Olive oil',
					price: 9.99
				}
			]
		}
	},
	{
		name: 'Spar',
		type: 'store',
		products: {
			create: [
				{
					name: 'Water',
					price: 0.59
				},
				{
					name: 'Flour',
					price: 1.99
				}
			]
		}
	}
];

const seed = async () => {
	await db.product.deleteMany({});
	await db.business.deleteMany({});
	restaurants.forEach(async (restaurant) => {
		await db.business.create({
			data: {
				...restaurant
			}
		});
	});
	stores.forEach(async (store) => {
		await db.business.create({
			data: {
				...store
			}
		});
	});
};

seed();
