let articles = [
    {title: "Κερδοφόρο Q1 για την Remedy", category: "Gaming News", author: "User", date: "06/05/2026"},
    {title: "Το Steam Controller εξαντλήθηκε", category: "Gaming News", author: "User", date: "05/05/2026"},
    {title: "Playstation απάντηση για DRM 30 ημερών", category: "Gaming News", author: "User", date: "30/04/2026"},
    {title: "Το Playstation για προσθήκη DRM", category: "Gaming News", author: "User", date: "29/04/2026"},
    {title: "Xbox μείωση τιμών Game Pass", category: "Gaming News", author: "User", date: "22/04/2026"},
    {title: "Shuhei Yoshida απόλυση", category: "Gaming News", author: "User", date: "21/04/2026"},

    {title: `Το Mini Review Του 'Reanimal'`, category: "Gaming Reviews", author: "User", date: "20/02/2026"},
    {title: `Το Μεγάλο REVIEW Του 'Metroid Prime 4: Beyond'`, category: "Gaming Reviews", author: "User", date: "11/12/2025"},
    {title: "Το Μεγάλο REVIEW του Ghost of Yotei", category: "Gaming Reviews", author: "User", date: "10/11/2025"},
    {title: `Το Μεγάλο REVIEW του Καλλιτεχνικού ‘Keeper’`, category: "Gaming Reviews", author: "User", date: "30/10/2025"},
    {title: `Το Μεγάλο REVIEW του 'Death Stranding 2: On the Beach'`, category: "Gaming Reviews", author: "User", date: "15/10/2025"},
    {title: `Το Μεγάλο REVIEW του 'DOOM: The Dark Ages'`, category: "Gaming Reviews", author: "User", date: "15/10/2025"}
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

let countByCategory = (arr) => {
    let newArr = arr.reduce((result, article) => {
        if (!result[article.category]) {
            result[article.category] = 1;
        } else {
            result[article.category] += 1;
        }
        return result;
    }, {})

    return newArr;
}

// function searchArticles(arr, keySearch) {
//     let result = [];

//     for (let article of arr) {
//         if (article.title.toLowerCase().includes(keySearch.toLowerCase())) {
//             result.push(article);
//         }
//     }

//     return result;
// }

let searchArticles = (arr, key) => {
    let newArr = arr.filter(article => article.title.toLowerCase().includes(key.toLowerCase()))
        
    return newArr;
}

console.log(searchArticles(articles, "remedy"));
