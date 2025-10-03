const rewardCards = document.querySelectorAll(".reward-card");
const popupText = document.getElementById("popupText");
let selectedReward = "";

rewardCards.forEach((card) => {
    card.addEventListener("click", () => {
        selectedReward = card.getAttribute("data-reward");
        popupText.textContent = `Apakah kamu yakin ingin menukar poin dengan ${selectedReward}?`;
        document.getElementById("popup").style.display = "flex";
    });
});

document.getElementById("confirmYes").onclick = function () {
    alert(`Reward "${selectedReward}" berhasil ditukar! (mockup)`);
    document.getElementById("popup").style.display = "none";
};
document.getElementById("confirmNo").onclick = function () {
    document.getElementById("popup").style.display = "none";
};

// Search & Filter
const searchInput = document.getElementById("searchReward");
const filterSelect = document.getElementById("filterReward");

function filterRewards() {
    const searchText = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;

    rewardCards.forEach((card) => {
        const title = card.querySelector("h4").textContent.toLowerCase();
        const category = card.getAttribute("data-category");

        if (
            (filterValue === "all" || category === filterValue) &&
            title.includes(searchText)
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

searchInput.addEventListener("input", filterRewards);
filterSelect.addEventListener("change", filterRewards);