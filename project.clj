(defproject libre "0.1.0-SNAPSHOT"
            :description "FIXME: write this!"
            :dependencies [[org.clojure/clojure "1.4.0"]
                           [noir "1.3.0-beta3"]
                           [jayq "0.1.0-alpha4"]
                           [monet "0.1.0-SNAPSHOT"]
                           ]

            :cljsbuild {
                        :builds [{
                                        ; The path to the top-level ClojureScript source directory:
                                  :source-path "src/cljs"
                                        ; The standard ClojureScript compiler options:
                                        ; (See the ClojureScript compiler documentation for details.)
                                  :compiler {
                                             :output-to "resources/public/js/cljs.js"  ; default: main.js in current directory
                                             :optimizations :whitespace
                                             :pretty-print true}}]}
            
            :main libre.server
)


