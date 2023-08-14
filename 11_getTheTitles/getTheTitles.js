const getTheTitles = function(books) {

    let titles = [];

    for(let i = 0; i < books.length ; i++){
        let title = books[i].title;
        titles.push(title);
    }

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
