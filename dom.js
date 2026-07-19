const searchIcon = document.getElementById("search-icon");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

const registerBtn = document.getElementById("register-btn");
const emailInput = document.getElementById("email-input");
const newsletterMsg = document.getElementById("newsletter-msg");

const backToTop = document.getElementById("back-to-top");

// Dynamic Gaming News
const newsContainer = document.getElementById("gaming-news-container");
newsContainer.innerHTML = "";
const reviewsContainer = document.getElementById("gaming-reviews-container");
reviewsContainer.innerHTML = "";

filterByCategory(articles, "Gaming News").forEach(article => {
    newsContainer.innerHTML += `
        <div>
            <img class="card-img" src="${article.img}">
            <span class="card-span">News</span>
            <h1 class="card-h1">${article.title}</h1>
            <p class="card-p">από ${article.author} στις ${article.date}</p>
        </div>
    `;
});

// Dynamic Gaming Reviews
filterByCategory(articles, "Gaming Reviews").forEach(article => {
    reviewsContainer.innerHTML += `
        <div>
            <img class="card-img" src="${article.img}">
            <span class="card-span">Reviews</span>
            <h1 class="card-h1">${article.title}</h1>
            <p class="card-p">από ${article.author} στις ${article.date}</p>
        </div>
    `;
})

// Find Next Livestream
function getNextLivestream() {
    const now = new Date();
    const target = new Date();

    // Find next Tuesday(2) or Thursday(4)
    const day = now.getDay();

    let daysUntilNext;

    if (day < 2) daysUntilNext = 2 - day;
    else if (day === 2) daysUntilNext = now.getHours() < 21 ? 0 : 2;
    else if (day < 4) daysUntilNext = 4 - day;
    else if (day === 4) daysUntilNext = now.getHours() < 21 ? 0 : 5;
    else daysUntilNext = 7 - day + 2;

    target.setDate(now.getDate() + daysUntilNext);
    target.setHours(21, 30, 0, 0);

    return target;
}

function updateCountdown() {
    const now = new Date();
    const target = getNextLivestream();
    const diff = target - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
};

updateCountdown();
setInterval(updateCountdown, 1000);

// Search articles

searchIcon.addEventListener('click', function(e) {
    e.preventDefault(); // dont use #
    if (searchInput.style.display === "none") {
        searchInput.style.display = "block";
    } else {
        searchInput.style.display = "none";
    }
})

searchInput.addEventListener("input", function() {
    let inputValue = searchInput.value;

    if (inputValue === "") {
        searchResults.style.display = "none";
        searchResults.innerHTML = "";
        return;
    }

    let results = searchArticles(articles, inputValue);

    searchResults.style.display = "block";
    searchResults.innerHTML = "";

    results.forEach(article => {
        searchResults.innerHTML += `<p>${article.title}</p>`
    });
});

// Newsletter validation 
registerBtn.addEventListener('click', function() {
    newsletterMsg.innerHTML = "";

   if (emailInput.value === "") {
        newsletterMsg.innerHTML = `<p class="empty">Please add an email.</p>`;
        return;
    }

    if (emailInput.value.includes("@") && emailInput.value.includes(".")) {
        newsletterMsg.innerHTML += `<p class="success">Email is valid!</p>`
    } else {
        newsletterMsg.innerHTML += `<p class="error">Email is not valid!</p>`
    }
});

emailInput.addEventListener("input", function() {
    newsletterMsg.innerHTML = "";
})

// Back to top button
window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener('click', function() {
    window.scroll(0, 0);
});