const openPopup = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const confirmYes = document.getElementById("confirmYes");
const confirmNo = document.getElementById("confirmNo");
const setorLabel = document.getElementById("setorLabel");

let setorStatus = localStorage.getItem("setorStatus") || "off";
updateSetorUI();

openPopup.addEventListener("click", () => {
    if (setorStatus === "off") {
        popupText.innerHTML = "Kamu akan mengubah status menjadi <b>bersedia untuk menyetor</b>. Apakah yakin?";
        confirmYes.textContent = "Ya, Setor";
    } else {
        popupText.innerHTML = "Status setor saat ini <b>aktif</b>. Apakah ingin menonaktifkan?";
        confirmYes.textContent = "Nonaktifkan";
    }
    popup.style.display = "flex";
});

confirmNo.addEventListener("click", () => {
    popup.style.display = "none";
});

confirmYes.addEventListener("click", () => {
    if (setorStatus === "off") {
        setorStatus = "on";
        localStorage.setItem("setorStatus", "on");
        alert("Status berhasil diaktifkan: Bersedia menyetor ✅");
    } else {
        setorStatus = "off";
        localStorage.setItem("setorStatus", "off");
        alert("Status setor dinonaktifkan ❌");
    }
    updateSetorUI();
    popup.style.display = "none";
});

function updateSetorUI() {
    if (setorStatus === "on") {
        setorLabel.textContent = "Setor Aktif ✅";
        setorLabel.style.color = "green";
    } else {
        setorLabel.textContent = "Setor Sampah";
        setorLabel.style.color = "";
    }
}

// RIWAYAAATTTTTTT

if (!localStorage.getItem("riwayat")) {
    const sampleData = [
        { type: "Penjemputan", detail: "10 Kg plastik dijemput", date: "28 Sep 2025" },
        { type: "Penukaran Poin", detail: "200 poin → Gratis Ongkir E-Commerce", date: "29 Sep 2025" },
        { type: "Penjemputan", detail: "5 Kg kardus dijemput", date: "30 Sep 2025" },
        { type: "Penukaran Poin", detail: "200 poin → Voucher 10% RM. Pak Rahmat", date: "1 Okt 2025" },
    ];
    localStorage.setItem("riwayat", JSON.stringify(sampleData));
}

const historyPopup = document.getElementById("historyPopup");
const openHistory = document.getElementById("openHistory");
const closeHistory = document.getElementById("closeHistory");
const historyContent = document.getElementById("historyContent");

openHistory.addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("riwayat")) || [];
    historyContent.innerHTML = data.map(item => `
    <div style="margin-bottom:10px; padding:8px; border-bottom:1px solid #ddd;">
      <strong>${item.type}</strong><br>
      <span>${item.detail}</span><br>
      <small style="color:gray;">${item.date}</small>
    </div>
  `).join("");
    historyPopup.style.display = "flex";
});

closeHistory.addEventListener("click", () => {
    historyPopup.style.display = "none";
});

// BUAT REWARDSS
const promoCards = document.querySelectorAll(".promo-card");
const rewardPopup = document.getElementById("rewardPopup");
const rewardText = document.getElementById("rewardText");

promoCards.forEach(card => {
    card.addEventListener("click", () => {
        const rewardName = card.getAttribute("data-reward");
        rewardText.textContent = `Apakah kamu yakin ingin menukar poin dengan ${rewardName}?`;
        rewardPopup.style.display = "flex";
    });
});

document.getElementById("confirmRewardYes").onclick = function () {
    alert("Reward berhasil ditukar! (mockup)");
    rewardPopup.style.display = "none";
};

document.getElementById("confirmRewardNo").onclick = function () {
    rewardPopup.style.display = "none";
};