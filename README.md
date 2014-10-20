# libre

A [Chestnut](https://github.com/plexus/chestnut) for experimenting
with clojurescript, Processing, and Om. It includes a Clojurescript
wrapper for Processing.js (libre.sketch) and basic sketchbook
functionality (libre.sketchbook)

For info on Processing.js: http://processingjs.org/

This is a [Chestnut](https://github.com/plexus/chestnut) project, so
it supports automatic browser updating, live cljs evaluation via a
browser REPL, as well as deployment to Heroku.

Some example sketches can be found in
`src/cljs/libre/sketches/color-walk.cljs`

## Development

Start a REPL (in a terminal: `lein repl`, or from Emacs: open a
clj/cljs file in the project, then do `M-x cider-jack-in`. Make sure
CIDER is up to date).

In the REPL do

```clojure
(run)
(browser-repl)
```

The call to `(run)` does two things, it starts the webserver at port
10555, and also the Figwheel server which takes care of live reloading
ClojureScript code and CSS. Give them some time to start.

Running `(browser-repl)` starts the Weasel REPL server, and drops you
into a ClojureScript REPL. Evaluating expressions here will only work
once you've loaded the page, so the browser can connect to Weasel.

When you see the line `Successfully compiled "resources/public/app.js"
in 21.36 seconds.`, you're ready to go. Browse to
`http://localhost:10555` and enjoy.

**Attention: It is not longer needed to run `lein fighwheel`
  separately. This is now taken care of behind the scenes**

**Emacs Users: be sure you are running the latest cider-nrepl and
  clojure-mode from the MELPA archive.**

## Trying it out

If all is well you now have a browser window with a Processing sketch
running in it, and a REPL prompt that looks like `cljs.user=>`.

In the REPL, type

```
(ns libre.core)
(swap! app-state assoc :sketch-name "random-circles")
```

Notice again how the browser updates and now shows a different sketch.

## Deploying to Heroku

This assumes you have a
[Heroku account](https://signup.heroku.com/dc), have installed the
[Heroku toolbelt](https://toolbelt.heroku.com/), and have done a
`heroku login` before.

``` sh
git init
git add -A
git commit
heroku create
git push heroku master:master
heroku open
```

## Running with Foreman

Heroku uses [Foreman](http://ddollar.github.io/foreman/) to run your
app, which uses the `Procfile` in your repository to figure out which
server command to run. Heroku also compiles and runs your code with a
Leiningen "production" profile, instead of "dev". To locally simulate
what Heroku does you can do:

``` sh
lein with-profile -dev,+production uberjar && foreman start
```

Now your app is running at
[http://localhost:5000](http://localhost:5000) in production mode.

## License

Copyright © 2014 Craig Brozefsky

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
