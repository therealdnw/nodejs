var express = require("express"),
    app = express();
app.use(express.static(__dirname));
app.engine("ejs", require("ejs-locals"));
app.set("views", __dirname + "/templates");
app.set("view engine", "ejs");

var news = [{
        id: 1,
        title: "Новость №1",
        text: "Текст №1",
    },
    {
        id: 2,
        title: "Новость №2",
        text: "Текст №2",
    },
    {
        id: 3,
        title: "Новость №3",
        text: "Текст №3",
    },
    {
        id: 4,
        title: "Новость №4",
        text: "Текст №4",
    }
];

function getAllNews() {
    return news;
}

function getOneofNews(id) {
    var response = news.filter(function (m) {
        return m.id == id
    });
    return response.length > 0 ? response[0] : null;
}



app.get("/", function (request,
    response) {
    response.render("index", {
        page: {
            title: "main",
            text: "jojo"
        }
    });
});

app.get("/news", function (request, response) {
    response.render("news-list", {
        page: {
            title: "Новости",
            items: getAllNews()
        }
    })
});

app.get("/news/:id.html", function (request, response) {
    var id = request.params.id;
    if (id) {
        var result = getOneofNews(id);
        if (result) {
            response.render("news-view", {
                page: result
            });
        }else{
            response.send('');
        }
    }
});

app.listen(3333, function () {
    console.log("Сервер запущен");
});