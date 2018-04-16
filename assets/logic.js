$(document).ready(function () {

    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

    /* 
     */
    var anime = ["One Punch Man", 'One Piece', 'Naruto', 'Bleach', 'Fate', 'My Hero Acadamia', 'Soul Eater', 'Full Metal Alchemist'];

    function createButtons() {
        $('#buttons').text("");

        for (var i = 0; i < anime.length; i++) {

            var animeBtns = $("<button>");
            animeBtns.addClass("anime-btn btn btn-elegant");
            animeBtns.attr("data-anime", anime[i]);
            animeBtns.text(anime[i]);
            $("#buttons").append(animeBtns);
        }
    }

    createButtons();

    $('.anime-btn').on('click', function () {
        var giph = $(this).attr('data-anime');
        console.log(giph);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giph +
            "&api_key=BXfMFs12m3Xw0ZPy4p4Lf1S6rxa6GOVx&limit=10&rating=pg";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function (response) {
            console.log(queryURL);
            console.log(response);

            var results = response.data;
            
            for (var i = 0; i < results.length; i++){
                var giphyDiv= $("<div>");
                var p = $("<p>").text("Rating:" + results[i].rating);
                var animeImg = $("<img>");
                animeImg.attr("src", results[i].images.fixed_height.url);
                giphyDiv.append(p);
                giphyDiv.append(animeImg);
                $("#giphs").prepend(giphyDiv);
            }
        });
    });
});

