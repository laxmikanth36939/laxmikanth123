let cart = [];

        function addToCart(itemName, itemPrice) {
            const item = {
                name: itemName,
                price: itemPrice
            };

            cart.push(item);
            updateCart();
        }

        function updateCart() {
            const cartItemsElement = document.getElementById('cart-items');
            const totalPriceElement = document.getElementById('total-price');

            cartItemsElement.innerHTML = '';

            let totalPrice = 0;
            cart.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `${item.name} - ${item.price} Rs`;
                cartItemsElement.appendChild(li);
                totalPrice += item.price;
            });

            totalPriceElement.innerHTML = totalPrice;
        }

        function clearCart() {
            cart = [];  
            updateCart();  
        }