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