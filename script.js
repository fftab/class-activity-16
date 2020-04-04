// Global Variables
// ===================================

let searchTerm = $("#search-term").val().trim();
let startYear = $("#start-year").val().trim();
let endYear = $("#end-year").val().trim();

// Functions
// ====================================

function createQueryUrl() {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

    let queryParams = {
        "api-key": "T7PcwJpFJq4GepMWCLX6jEtqtUyagCem"
    };

    queryParams.q = searchTerm;
    
    if (parseInt(startYear)) {

        // push startYear as property into queryParams
        queryParams.begin_date = startYear + "0101";

    }

    if (parseInt(endYear)) {

        queryParams.end_date = endYear + "0101";

    }

    return queryURL + $.params(queryParams)

}

function updatePage(whateverYouWant) {

    // 
    let articleCount = $("#article-count").val();

    for (i = 0; i < articleCount; i++) {

        // grabbing the article quantity form NYTTimes

        let article = whateverYouWant.resonse.docs[i];

        let numArticles = i + 1;

        

    }

}

// $("#add-search-terms").on("click"), function() {
    
//     $.ajax({
//             url: queryURL,
//             method: "GET"
//         }).then(function(response) {
          
//             });
            
//             console.log(response);
    
    
//     };

    

    
    