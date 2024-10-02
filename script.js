let cartItems = [];
let phoneNumbers = []; // Telefon numaralarını tutmak için

function addToCart(product) {
  cartItems.push(product);
  updateCart();
}

function updateCart() {
  const cartItemsList = document.getElementById('cartItems');
  cartItemsList.innerHTML = '';
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    cartItemsList.appendChild(li);
  });

  if (cartItems.length > 0) {
    document.getElementById('checkout').classList.remove('hidden');
  } else {
    document.getElementById('checkout').classList.add('hidden');
  }
}

function processPayment() {
  const phoneNumber = document.getElementById('phoneNumber').value;
  const cardNumber = document.getElementById('cardNumber').value;

  if (phoneNumber && cardNumber) {
    phoneNumbers.push(phoneNumber); // Telefon numarasını kaydet
    alert('Ödeme işlemi başarıyla tamamlandı!');
    document.getElementById('phoneNumber').value = '';
    document.getElementById('cardNumber').value = '';
  } else {
    alert('Lütfen telefon numarası ve kart bilgilerini doldurun.');
  }
}

const adminButton = document.getElementById('adminButton');
const adminPanel = document.getElementById('adminPanel');
const adminContent = document.getElementById('adminContent');
const phoneNumbersList = document.getElementById('phoneNumbersList');

adminButton.addEventListener('click', () => {
  adminPanel.classList.toggle('hidden');
});

function checkPassword() {
  const password = document.getElementById('adminPassword').value;
  if (password === 'admin123') {
    adminContent.classList.remove('hidden');
    showPhoneNumbers(); // Telefon numaralarını göster
  } else {
    alert('Yanlış şifre!');
  }
}

function showPhoneNumbers() {
  phoneNumbersList.innerHTML = '';
  phoneNumbers.forEach(number => {
    const li = document.createElement('li');
    li.textContent = number;
    phoneNumbersList.appendChild(li);
  });
}