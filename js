// Rezervasyonları saklamak için dizi
let reservations = [];

// Rezervasyon yapma işlemi
function makeReservation() {
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Giriş doğrulama
    if (name === "") {
        alert("Hatalı Giriş: Lütfen geçerli bir müşteri adı giriniz.");
        return;
    }

    if (!isValidDate(date)) {
        alert("Hatalı Giriş: Lütfen geçerli bir tarih seçiniz.");
        return;
    }

    if (!isValidTime(time)) {
        alert("Hatalı Giriş: Lütfen geçerli bir saat seçiniz.");
        return;
    }

    // Rezervasyon objesini oluşturma
    const reservation = {
        name: name,
        date: date,
        time: time
    };

    // Rezervasyonu diziye ekleme
    reservations.push(reservation);

    // Rezervasyonları ekranda gösterme
    displayReservations();

    // Formu sıfırlama
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
}

// Tarih doğrulama
function isValidDate(date) {
    const selectedDate = new Date(date);
    const today = new Date();

    if (selectedDate < today) {
        alert("Geçersiz Tarih: Seçtiğiniz tarih geçmiş bir tarih olamaz.");
        return false;
    }

    return true;
}

// Saat doğrulama
function isValidTime(time) {
    // Burada saat doğrulama kurallarını kontrol edebilirsiniz
    // Örneğin, işletme saatlerine göre uygun saatleri kontrol edebilirsiniz

    return true;
}

// Rezervasyonları ekranda gösterme
function displayReservations() {
    const reservationsList = document.getElementById("reservations");
    reservationsList.innerHTML = "";

    reservations.forEach(function(reservation) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${reservation.name} - ${reservation.date} - ${reservation.time}`;
        reservationsList.appendChild(listItem);
    });
}

// "Rezervasyon Yap" butonuna tıklama olayı
const reservationButton = document.querySelector("#reservation-form button");
reservationButton.addEventListener("click", makeReservation);
