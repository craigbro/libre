(ns libre.views.common
  (:use [noir.core :only [defpartial]]
        hiccup.element
        hiccup.page))

(defpartial layout [& content]
            (html5
             [:head
              [:title "libre"]
              (include-css "/css/reset.css")
              
              (javascript-tag "var CLOSURE_NO_DEPS = true;")
              (include-js "/js/jquery.min.js")
              (include-js "/js/processing-1.3.6.js")
              (include-js "/js/cljs.js")]
             [:body
              [:div#wrapper
               content]]))


