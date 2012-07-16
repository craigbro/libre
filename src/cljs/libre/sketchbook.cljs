(ns libre.sketchbook
  (:use [jayq.core :only [$ inner append]])
  (:use-macros [crate.def-macros :only [defpartial]])
  (:require [clojure.string :as string]
            [crate.core :as crate]))

(def *sketchbook* {})

(defn ^:export defsketch [name sketchmap]
  (set! *sketchbook* (assoc *sketchbook* name sketchmap)))

(defn ^:export get-sketch [name]
  (get *sketchbook* name))

(defpartial sketch-list [sketches]
  [:div.sketch-index
   [:h2 "Sketches"]
   [:ul
    (map (fn [k]
           [:li [:a {:href (str "/sketchbook/" k)}
                 k]]) sketches)]])

(defn ^:export show_index []
  (.append ($ "#container")
           (sketch-list (sort (keys *sketchbook*)))))
     
(defn ^:export run_from_url
  "looks at our URL to determine the sketch to run."
  []
  (let [[url params] (string/split (str (.-location js/document)) "?")
        name (last (string/split url "/"))]
    (.log js/console (str "URL is: " url))
    (.log js/console (str "Sketch is: " name))
    (if-let [sk (get-sketch name)]
      (do
        (.text ($ "#title") (str "Sketch: " name))
        (libre.sketch/run-sketch :#sketch sk))
      (.text ($ "#title") "Unknown sketch"))
    true))
