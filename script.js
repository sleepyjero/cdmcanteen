let selectedFoods = [];

function selectFood(food) {
    const foodDescription = {
        'Sisig w/ Rice': 'A dish made with sisig served with rice.',
        'Chicken Tender w/ Rice': 'Crispy chicken tenders served with a side of rice.',
        'Chaofan': 'Fried rice with a mix of vegetables and meat.',
        'Siomai Rice': 'A dish made with steamed or fried siomai dumplings on top of rice.',
        'Siopao': 'A steamed bun filled with various meats and vegetables.',
        'French Fries': 'Thin strips of deep-fried potato served as a snack or side dish.',
        'Fried Noodles': 'Stir-fried noodles with meat, vegetables, and sauce.',
        'Hotdog Sandwich': 'A hotdog served in a sandwich bun.',
        'Burger': 'A meat patty served in a bun with various toppings.',
        'Palamig': 'A sweet chilled refreshing beverage with gulaman.'
    };

    selectedFoods.push(food);
    updateOrderSummary();
}

function updateOrderSummary() {
    const foodList = document.getElementById('selected-food-list');
    foodList.innerHTML = '';
    selectedFoods.forEach(food => {
        const listItem = document.createElement('li');
        listItem.textContent = food;
        foodList.appendChild(listItem);
    });

    document.getElementById('order-form').style.display = 'block';
    document.getElementById('menu-container').style.display = 'none';
}

function goBackToMenu() {
    document.getElementById('order-form').style.display = 'none';
    document.getElementById('menu-container').style.display = 'flex';
}

function placeOrder() {
    const room = document.getElementById('room').value;
    const building = document.getElementById('building').value;

    if (!room || !building) {
        alert("Please enter both room and building.");
        return;
    }

    document.getElementById('thank-you-message').style.display = 'block';
}
