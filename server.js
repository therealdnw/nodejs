var express = require("express"),
    app = express();

app.engine("ejs", require("ejs-locals"));
app.set("views", __dirname + "/templates");
app.set("view engine", "ejs");



app.get("/", function (request,
    response) {
    response.render("index", {
        page: {
            title: "fizmat",
            text: "я физик"
        }
    });
});

app.get("/news", function(request, response){
    response.render("news-list",{
        page: {
            title: "Новости",
            items: getAllNews()
        }
    })
});

app.listen(3334, function () {
    console.log("Сервер запущен");
});