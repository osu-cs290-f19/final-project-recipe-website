
 var path = require('path');
 var express = require('express');
 var exphbs = require('express-handlebars');
 var fs = require('fs'); // require filesystem to append new recipes
 var bodyParser = require('body-parser');

 var app = express();

// listen on specified port; if none, listen on port 3000
var port = process.env.PORT || 3000;

// read in recipeData.json file w/all recipes, save into recipeData variable
var recipeData = require('./recipeData');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// following line serves of static assets like images, CSS, etc.
// *note: Express looks up files relative to the static directory,
//        so the name of directory 'public' is not part of the URL.
app.use(express.static('public'));

app.use(bodyParser.json());

// after a client request, print URL and method to console
function logger (req, res, next) {
  console.log("\n== Got a request");
  console.log("  -- URL:", req.url);
  console.log("  -- Method:", req.method);
  next();
}

// use the logger function in our express app
app.use(logger);

// serve up main page template, stored in views/recipePage.handlebars,
// and populate it with content from recipeData variable we read in earlier
app.get('/', function (req, res, next) {
    res.status(200).render('recipePage', recipeData);
});

// serve up posts, if request is in range
app.get('/recipes/:n', function (req, res, next) {
    var index = req.params.n;
    // if recipe is in range, display it
    if (index >= 0 && index <= 7) {
      res.status(200).render('partials/recipe', recipeData[index]);
    }
    // else requested post not found, thank u next
    else { next(); }
});

// anything not mentioned above is an invalid address, serve up 404
app.get('*', function (req, res) {
  console.log("  -- 404: Non-existing directory or file.");
  res.status(404).render('404');
});

app.post('/recipes', function (req, res){
  if (req.body && req.body.recipeName) {
    recipeData.push({
        recipeName: req.body.recipeName,
        time: req.body.time,
        complexity: req.body.complexity,
        servings: req.body.servings,
        originalImageURL: req.body.originalImageURL,
        creditName: req.body.creditName,
        creditURL: req.body.creditURL
    });
    fs.writeFile('./recipeData.json', JSON.stringify(recipeData, null, 4), (err) => {
      if(err) {
        console.error(err);
        return;
      };
      console.log("Recipe Saved.");
    });

    res.status(200).send("Recipe successfully added");
  } else {
    res.status(400).send("Requests to this path must " +
      "contain a JSON body with all recipe Content " +
      "fields.");
  }
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
