const getTheTitles = function(books) {

    //new array that will store the titles
    let titles = [];

    //cycle through each array element, and push the book title to the new titles array
    for(let i = 0; i < books.length ; i++){
        let title = books[i].title;
        titles.push(title);
    }

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
