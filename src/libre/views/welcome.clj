(ns libre.views.welcome
  (:require [libre.views.common :as common])
  (:use [noir.core :only [defpage]]))

(defpage "/" []
  (common/layout
   [:h1 "Welcome to libre"]
   [:div#canvas-container
    [:canvas#tree {:width "1000" :height "1000"}]
    (hiccup.element/javascript-tag "$(document).ready(function(){
                                      libre.tarot.repl();
                                      libre.tarot.drawtree();
                                    });")
    ]))


(defpage "/painter" []
  (common/layout
   [:h1 "Welcome to libre"]
   [:div#canvas-container
    [:canvas#tree {:width "1000" :height "1000"}]
    (hiccup.element/javascript-tag "$(document).ready(function(){
                                      libre.tarot.repl();
                                      libre.painter.test();

                                    });")
    ]))

(defpage "/sketch" []
  (common/layout
   [:h1 "Welcome to libre sketch"]
   [:div#canvas-container
    [:canvas#sketch {:width "1000" :height "1000"}]
    (hiccup.element/javascript-tag "$(document).ready(function(){
                                      libre.tarot.repl();
                                      libre.sketch.test();
                                    });")
    ]))

