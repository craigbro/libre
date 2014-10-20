(ns libre.sketches.color-walk
  (:use [libre.sketchbook :only [defsketch]])
  (:require [libre.sketch :as sk]))

(defn fade [a]
  (sk/push-style)
  (sk/fill 255 a)
  (sk/no-stroke)
  (sk/rect 0 0 (sk/sketch-width) (sk/sketch-height))
  (sk/pop-style))

(defsketch "random-circles"
  {:setup 
   (fn []
     (sk/size (- (sk/screen-width) 50)
              (- (sk/screen-height) 50))
     (sk/smooth)
     (sk/background 255))
   :key-typed (fn [] (sk/background 255))
   :draw (fn []
           (fade 1)
           (sk/fill (sk/random 255) (sk/random 255) (sk/random 255))
           (sk/stroke-weight (sk/random 10))
           (sk/stroke 0)
           (sk/random-circle))})

(defsketch "random-rects"
  {:setup
   (fn []
     (sk/size (- (sk/screen-width) 50)
              (- (sk/screen-height) 50))
     (sk/smooth)
     (sk/background 255))
   :key-typed (fn [] (sk/background 255))
   :draw (fn []
           (fade 1)
           (sk/fill (sk/random 255) (sk/random 255) (sk/random 255))
           (sk/stroke-weight 5)
           (sk/stroke 0)
           (let [dim (sk/random 60 200)]
             (sk/rect (sk/random (- (sk/sketch-width) dim))
                      (sk/random (- (sk/sketch-height) dim))
                      (+ dim (sk/random -40 50))
                      (+ dim (sk/random -40 50))
                      10)))})

(defn color_walker [from_color to_color step]
  (sk/size (- (sk/screen-width) 50)
           (- (sk/screen-height) 50))
  (sk/smooth)
  (sk/background 0)
  (doseq [x (range 0 (sk/sketch-width) step)]
    (sk/stroke-weight (sk/random step (+ step (sk/random (/ step 2)))))
    (sk/stroke (sk/lerp-color from_color to_color (/ x (sk/sketch-width))) 128)
    (sk/line x 0 x (sk/sketch-height))))

(defsketch "color-walk-1"
  {:setup
   (fn []
     (color_walker (sk/color 255 0 0) (sk/color 0 0 255) 3))})

(defsketch "color-walk-2"
  {:setup
   (fn []
     (color_walker (sk/color 0 255 0) (sk/color 0 0 255) 3))})

(defsketch "color-walk-3"
  {:setup
   (fn []
     (color_walker (sk/color 0 0 255) (sk/color 0 255 0) 3))})

(defsketch "color-walk-4"
  {:setup
   (fn []
     (color_walker (sk/color 255 255 255) (sk/color 0 255 0) 1))})

(defsketch "color-walk-5"
  {:setup
   (fn []
     (color_walker (sk/color 255 255 255) (sk/color 0 0 0) 1))})



(defsketch "ghost-doodle"
  {:setup
   (fn []
     (sk/size 1000 1000)
     (sk/background 0))
   :draw
   (fn []
     (let [x_off (* 0.0005 (sk/frame-count))
           y_off (+ x_off 20)
           x (* (sk/noise x_off) (sk/width))
           y (* (sk/noise y_off) (sk/height))]
       (sk/stroke 255 0 0 80)
       (sk/point x y)))})



