// Global Variables
// ===================================


// Functions
// ====================================
$("#add-search-terms").on("click"), function() {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=T7PcwJpFJq4GepMWCLX6jEtqtUyagCem";
    
    
    };
        $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response) {
          
            });
            
            console.log(response);
    
    
    
    