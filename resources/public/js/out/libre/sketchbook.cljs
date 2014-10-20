(ns libre.sketchbook
  (:require [clojure.string :as string]
            ))

(defonce *sketchbook* (atom {}))

(defn ^:export defsketch [name sketchmap]
  (swap! *sketchbook* assoc name sketchmap))

(defn ^:export get-sketch [name]
  (get @*sketchbook* name))

(defn ^:export list-sketches []
  (keys @*sketchbook*))

(defn ^:export run_from_url
  "looks at our URL to determine the sketch to run."
  []
  (let [[url params] (string/split (str (.-location js/document)) "?")
        name (last (string/split url "/"))]
    (.log js/console (str "URL is: " url))
    (.log js/console (str "Sketch is: " name))
    (if-let [sk (get-sketch name)]
      (do
        (libre.sketch/run-sketch :#sketch sk))
      )
    true))

