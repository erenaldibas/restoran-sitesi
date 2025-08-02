// Form gönderilince çalışır
document.getElementById("reservationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Sayfanın yenilenmesini engeller

    const name = document.getElementById("name").value;  // Adı al
    const date = document.getElementById("date").value;  // Tarihi al
    const time = document.getElementById("time").value;  // Saati al

    // Mesajı oluştur
    const message = `Sayın ${name}, rezervasyonunuz ${date} tarihinde saat ${time}'de alınmıştır. Teşekkür ederiz`; 

    // Mesajı ekrana yaz
    document.getElementById("confirmationMessage").textContent = message;

    // Formu sıfırla
    document.getElementById("reservationForm").reset();
});
