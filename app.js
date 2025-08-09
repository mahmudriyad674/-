// ৩৫০ টাকার মধ্যে খাবারের তালিকা (নাম এবং দাম)
const foods = [
    { name: "ভাত", price: ২৫ },
    { name: "ডাল", price: ২০ },
    { name: "মাছ", price: ৬০ },
    { name: "গরুর মাংস", price: ১২০ },
    { name: "মুরগির মাংস", price: ১০০ },
    { name: "সবজি", price: ১৫ },
    { name: "ডিম", price: ১২ },
    { name: "রুটি", price: ৮ },
    { name: "চা", price: ১০ },
];

// মোট দাম দেখানোর জন্য ফাংশন
function totalPrice() {
    let sum = 0;
    foods.forEach(food => sum += food.price);
    return sum;
}

// HTML-এ দেখানোর জন্য ফাংশন
function displayFoods() {
    const foodList = document.getElementById('food-list');
    foods.forEach(food => {
        const div = document.createElement('div');
        div.className = 'food-item';
        div.innerHTML = `
            <span class="food-name">${food.name}</span>
            <span class="food-price">${food.price} টাকা</span>
        `;
        foodList.appendChild(div);
    });

    // মোট দাম দেখানো
    const totalDiv = document.createElement('div');
    totalDiv.style.marginTop = '20px';
    totalDiv.innerHTML = `<strong>মোট দাম: ${totalPrice()} টাকা</strong>`;
    foodList.appendChild(totalDiv);
}

// পেজ লোড হলে ডাটা দেখাও
displayFoods();
