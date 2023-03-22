/* 
const prices = {
	paris: 100,
	london: 120,
	rome: 150
};

const getDiscount = (days) => {
	if (days >= 1 && days <= 7) {
        return 0.4;
    } else if (days >= 8 && days <= 14) {
        return 0.3;
    } else if (days >= 15 && days <= 21) {
        return 0.2;
    } else if (days >= 22 && days <= 28) {
        return 0.1;
    } else {
        return 0;
    }
}

let cart = [];
const addToCart = () => {
	const city = document.getElementById("city").value;
	const passengers = document.getElementById("passengers").value;
	const days = document.getElementById("days").value;
	const price = prices[city] * passengers;
	const discount = getDiscount(days);
	const total = price * (1 + discount);
	cart.push({ city, passengers, days, price, discount, total });
	updateCart();
};

const updateCart = () => {
	const cartDiv = document.getElementById("cart");
	const table = cart.reduce((acc, item) => {
		const row = `<tr><td>${item.city}</td><td>${item.passengers}</td><td>${item.days}</td><td>$${item.price}</td><td>${item.discount * 100}%</td><td>$${item.total}</td></tr>`;
		return acc + row;
	}, "<table><tr><th>Ciudad</th><th>Pasajeros</th><th>Días de estancia</th><th>Precio base</th><th>Descuento</th><th>Total</th></tr>");
	const totalPrice = cart.reduce((acc, item) => acc + item.total, 0);
	const tableWithTotal = `${table}<tr><td></td><td></td><td></td><td></td><td></td><td>$${totalPrice}</td></tr></table>`;
	cartDiv.innerHTML = tableWithTotal;
};

const finishCart = () => {
	cart = [];
	updateCart();
};

document.getElementById("continue").addEventListener("click", addToCart);
document.getElementById("finish").addEventListener("click", finishCart); */




/*-----------Agregando STORAGE Y JSON-------------------------------------------*/


const prices = {
	paris: 100,
	london: 120,
	rome: 150
};

const getDiscount = (days) => {
	if (days >= 1 && days <= 7) {
        return 0.4;
    } else if (days >= 8 && days <= 14) {
        return 0.3;
    } else if (days >= 15 && days <= 21) {
        return 0.2;
    } else if (days >= 22 && days <= 28) {
        return 0.1;
    } else {
        return 0;
    }
}

let cart = [];

const addToCart = () => {
	const city = document.getElementById("city").value;
	const passengers = document.getElementById("passengers").value;
	const days = document.getElementById("days").value;
	const price = prices[city] * passengers;
	const discount = getDiscount(days);
	const total = price * (1 + discount);
	const item = { city, passengers, days, price, discount, total };
	cart.push(item);
	localStorage.setItem("cart", JSON.stringify(cart));
	updateCart();
	};

const updateCart = () => {
	const cartDiv = document.getElementById("cart");
	const table = cart.reduce((acc, item) => {
		const row = `<tr><td>${item.city}</td><td>${item.passengers}</td><td>${item.days}</td><td>$${item.price}</td><td>${item.discount * 100}%</td><td>$${item.total}</td></tr>`;
		return acc + row;
	}, "<table><tr><th>Ciudad</th><th>Pasajeros</th><th>Días de estancia</th><th>Precio base</th><th>Descuento</th><th>Total</th></tr>");
	const totalPrice = cart.reduce((acc, item) => acc + item.total, 0);
	const tableWithTotal = `${table}<tr><td></td><td></td><td></td><td></td><td></td><td>$${totalPrice}</td></tr></table>`;
	cartDiv.innerHTML = tableWithTotal;
};

const finishCart = () => {
	cart = [];
	localStorage.removeItem("cart");
	updateCart();
	};

document.getElementById("continue").addEventListener("click", addToCart);
document.getElementById("finish").addEventListener("click", finishCart);



/*-----------Agregando STORAGE Y JSON-+ ARRAY DE OBJETOS-------?????????-----------------------------------*/

