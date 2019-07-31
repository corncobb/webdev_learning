var movieDB = [
    {
        movie: "Wolf of Wall Street",
        rating: 5,
        hasSeen: true,
    },
    {
        movie: "Midsommer",
        rating: 3.5,
        hasSeen: true,
    },
    {
        movie: "IT",
        rating: 2.5,
        hasSeen: false,
    },
    {
        movie: "Spongebob Movie",
        rating: 4.5,
        hasSeen: false,
    },
    {
        movie: "Split",
        rating: 1.5,
        hasSeen: true,
    }
]

function printData(arr){
    arr.forEach(function(mov){
        var temp = "have";
        if(mov.hasSeen === false){
            temp = "have not";
        } 
        console.log("You " + temp + " seen " + "\"" + mov.movie + "\"" + " - " + mov.rating + " stars");
    })
}

printData(movieDB);