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

    // Find next Tuesday or Thursday
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