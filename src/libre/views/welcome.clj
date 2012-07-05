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

