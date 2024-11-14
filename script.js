// Wishes Section
const wishes = [
    { name: 'TOPIK HIDAYAT', comment: 'Selamat untuk pernikahannya!' },
    { name: 'adit', comment: 'Selamat berbahagia untuk kedua insan yang telah menjadi satu!' },
    { name: 'aan', comment: 'Semoga cepat dapat momongan!' },
    { name: 'iyan', comment: 'wadidaw😁😁😁' },
    { name: 'azmi', comment: 'rada di lap asep🤣🤣🤣' },
    { name: 'lutfi', comment: 'kaka aing kawin dak keren' },
    { name: 'rama', comment: ' bianglah iping geh eleh ho meren azmi🤣🤣' },
    { name: 'fahmi', comment: 'atu biang asep' }
];


function displayWishes() {
    const wishesContainer = document.getElementById('wishes');
    wishesContainer.innerHTML = '';  // Kosongkan sebelumnya
    wishes.forEach(wish => {
        const wishElement = document.createElement('div');
        wishElement.className = 'wish';
        wishElement.innerHTML = `<div class="wish-name">${wish.name}</div><div class="wish-comment">${wish.comment}</div>`;
        wishesContainer.appendChild(wishElement);
    });
}

function submitWish() {
    const nameInput = document.getElementById('nameInput');
    const wishInput = document.getElementById('wishInput');
    if (nameInput.value && wishInput.value) {
        wishes.push({ name: nameInput.value, comment: wishInput.value });
        nameInput.value = '';
        wishInput.value = '';
        displayWishes();  // Tampilkan ucapan terbaru
    }
}

// Countdown Timer Section
const countdownDate = new Date("November 24, 2024 09:00:00").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Event Started!";
    }
}, 1000);

function addToCalendar() {
    alert("Acara ditambahkan ke kalender!");
}

function openModal() {
    document.getElementById("giftModal").style.display = "block";
}

function closeModal() {
    document.getElementById("giftModal").style.display = "none";
    document.getElementById("copyMessage").style.display = "none";
}

function copyAccountNumber() {
    const accountNumber = document.getElementById("accountNumber").textContent;
    navigator.clipboard.writeText(accountNumber).then(() => {
        document.getElementById("copyMessage").style.display = "block";
    });
}

displayWishes();  // Menampilkan ucapan yang sudah ada saat pertama kali halaman dimuat
