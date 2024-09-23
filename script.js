const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const clearBtn = document.getElementById("clear-btn");
const historyList = document.getElementById("history-list");

const loadHistory = () => {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    historyList.innerHTML = ""; // Clear current list
    history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
};

const saveSearchHistory = (term) => {
    let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    history.push(term);
    localStorage.setItem("searchHistory", JSON.stringify(history));
};

const clearHistory = () => {
    localStorage.removeItem("searchHistory");
    loadHistory();
};

// Event Listeners
searchBtn.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        saveSearchHistory(searchTerm);
        loadHistory();
        searchInput.value = ""; // Clear input after search
    }
});

clearBtn.addEventListener("click", () => {
    clearHistory();
});

// Initial load of history when page is loaded
document.addEventListener("DOMContentLoaded", loadHistory);