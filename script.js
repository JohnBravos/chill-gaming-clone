let articles = [
    {title: "Κερδοφόρο Q1 για την Remedy", category: "Gaming News", author: "User", date: "06/05/2026", img: "./img/gaming-news-pics/first-gaming-section-pic.png"},
    {title: "Το Steam Controller εξαντλήθηκε", category: "Gaming News", author: "User", date: "05/05/2026", img: "./img/gaming-news-pics/sec-gaming-section-pic.png"},
    {title: "Playstation απάντηση για DRM 30 ημερών", category: "Gaming News", author: "User", date: "30/04/2026", img: "./img/gaming-news-pics/third-gaming-section-pic.png"},
    {title: "Το Playstation για προσθήκη DRM", category: "Gaming News", author: "User", date: "29/04/2026", img: "./img/gaming-news-pics/fourth-gaming-section-pic.png"},
    {title: "Xbox μείωση τιμών Game Pass", category: "Gaming News", author: "User", date: "22/04/2026", img: "./img/gaming-news-pics/fifth-gaming-section-pic.png"},
    {title: "Shuhei Yoshida απόλυση", category: "Gaming News", author: "User", date: "21/04/2026", img: "./img/gaming-news-pics/sixth-gaming-section-pic.png"},

    {title: `Το Mini Review Του 'Reanimal'`, category: "Gaming Reviews", author: "User", date: "20/02/2026", img: "./img/gaming-reviews-pics/G-R-PIC1.png"},
    {title: `Το Μεγάλο REVIEW Του 'Metroid Prime 4: Beyond'`, category: "Gaming Reviews", author: "User", date: "11/12/2025", img: "./img/gaming-reviews-pics/G-R-PIC2.png"},
    {title: "Το Μεγάλο REVIEW του Ghost of Yotei", category: "Gaming Reviews", author: "User", date: "10/11/2025", img: "./img/gaming-reviews-pics/G-R-PIC3.png"},
    {title: `Το Μεγάλο REVIEW του Καλλιτεχνικού ‘Keeper’`, category: "Gaming Reviews", author: "User", date: "30/10/2025", img: "./img/gaming-reviews-pics/G-R-PIC4.png"},
    {title: `Το Μεγάλο REVIEW του 'Death Stranding 2: On the Beach'`, category: "Gaming Reviews", author: "User", date: "15/10/2025", img: "./img/gaming-reviews-pics/G-R-PIC5.png"},
    {title: `Το Μεγάλο REVIEW του 'DOOM: The Dark Ages'`, category: "Gaming Reviews", author: "User", date: "15/10/2025", img: "./img/gaming-reviews-pics/G-R-PIC6.png"}
];

// function filterByCategory(arr, cat) {
//     let result = [];
//     for (let article of arr) {
//         if (article.category.toLowerCase() === cat.toLowerCase()) {
//             result.push(article);
//         }
//     }
//     return result;
// }

let filterByCategory = (arr, cat) => {
    let newArticles = arr.filter(article => {
        return article.category.toLowerCase() === cat.toLowerCase();
    })
    
    return newArticles;
}

// function countByCategory(arr) {
//     let result = {};

//     for (let article of arr) {
//         if (!result[article.category]) {
//             result[article.category] = 1;
//         } else {
//             result[article.category] += 1;
//         }
//     }
    
//     return result;
// }

// let countByCategory = (arr) => {
//     let newArr = arr.reduce((result, article) => {
//         if (!result[article.category]) {
//             result[article.category] = 1;
//         } else {
//             result[article.category] += 1;
//         }
//         return result;
//     }, {})

//     return newArr;
// }

// function searchArticles(arr, keySearch) {
//     let result = [];

//     for (let article of arr) {
//         if (article.title.toLowerCase().includes(keySearch.toLowerCase())) {
//             result.push(article);
//         }
//     }

//     return result;
// }

// let searchArticles = (arr, key) => {
//     let newArr = arr.filter(article => article.title.toLowerCase().includes(key.toLowerCase()))
        
//     return newArr;
// }

// let getStats = (arr) => {
//     let totalArt = arr.length;
    
//     let byCat = arr.reduce((result, article) => {
//         if (!result[article.category]) {
//             result[article.category] = 1;
//         } else {
//             result[article.category] += 1;
//         }

//         return result;
//     }, {});

//     let articAuthors = arr.reduce((totalAuthors, article) => {
//         if (!totalAuthors.includes(article.author)) {
//             totalAuthors.push(article.author);
//         }
    
//         return totalAuthors;
//     }, []);

//     let latestArt = arr.sort((a, b) => a.date - b.date).slice(0, 1);

//     return {
//         totalArticles: totalArt, 
//         byCategory: byCat,
//         authors: articAuthors,
//         latestArticle: latestArt
//     };
// }

// let getlatestArticles = (arr, n) => {
//     let latestArt = arr.sort((a, b) => a.date - b.date).slice(0, n);
//     return latestArt;
// }

// console.log(getStats(articles));


