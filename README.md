# Libre

A simple website for experimenting with clojurescript and canvas

It happens to include a Clojurescript wrapper for Processing.js and
minimal sketchbook functionality.

For info on Processing.js: http://processingjs.org/

## Usage

```bash
lein deps
lein run &
lein cljsbuild auto
```

Then point your browser at:

    http://localhost:8080/sketchbook
	
You can add sketches as you like, see `src/cljs/libre/sketches` for examples.

I like having the cljsbuild auto going in the background, cause then I
can open up my sketch files and edit the, and they'll be compiled when
I save them.  

I also start a repl in Emacs inferior-lisp mode once in awhile if I
need to work something out.

## License

Copyright (C) 2011 Craig Brozefsky

Distributed under the Eclipse Public License, the same as Clojure.

