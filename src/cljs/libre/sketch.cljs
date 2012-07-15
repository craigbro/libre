(ns libre.sketch
  (:require [clojure.string :as string]))

(def ^:dynamic *processing* nil)

(defn -add-sketch-handler [p s k v]
  (when-let [f (get s k)]
    (aset p v
          (fn [] (binding [*processing* p]
                   (f))))))

(defn sketch-init [sketch]
  (fn [processing]

    (set! (.-sketch processing) sketch)
    (set! (.-sketch-data processing) {})
    
    (-add-sketch-handler processing sketch :draw "draw")
    (-add-sketch-handler processing sketch :setup "setup")

    (-add-sketch-handler processing sketch :mouse-clicked "mouseClicked")
    (-add-sketch-handler processing sketch :mouse-dragged "mouseDragged")
    (-add-sketch-handler processing sketch :mouse-moved "mouseMoved")
    (-add-sketch-handler processing sketch :mouse-moved "mouseMoved")
    (-add-sketch-handler processing sketch :mouse-out "mouseOut")
    (-add-sketch-handler processing sketch :mouse-over "mouseOver")
    (-add-sketch-handler processing sketch :mouse-pressed "mousePressed")
    (-add-sketch-handler processing sketch :mouse-released "mouseReleased")

    (-add-sketch-handler processing sketch :key-pressed "keyPressed")
    (-add-sketch-handler processing sketch :key-released "keyReleased")
    (-add-sketch-handler processing sketch :key-typed "keyTyped")
    
    processing))

(defn -lookup-constant [c]
  (let [k (string/upper-case (name c))]
    (aget (.-PConstants *processing*) k)))


(def PI (.-PI js/Math))
(def HALF_PI (/ PI 2))
(def QUARTER_PI (/ PI 4))
(def TWO_PI (* PI 2))

(defn arc
  ([x y w h start stop]
     (. *processing* (arc x y w h start stop)))
  ([x y d]
     (. *processing* (arc x y d d 0 TWO_PI))))

(defn ellipse
  ([x y w h]
     (. *processing* (ellipse x y w h)))
  ([x y d]
     (. *processing* (ellipse x y d d))))

(def *ellipse-modes*
  {:corner 0
   :corners 1
   :radius 2
   :center 3})

(defn ellipse-mode [mode]
  (. *processing* (ellipseMode (get *ellipse-modes* mode))))

(defn line
  ([x1 y1 x2 y2]
     (. *processing* (line x1 y1 x2 y2)))
  ([x1 y1 z1 x2 y2 z2]
     (. *processing* (line x1 y1 z1 x2 y2 z2))))

(defn point
  ([x y] (. *processing* (point x y)))
  ([x y z] (. *processing* (point x y z))))

(defn quad [x1 y1 x2 y2 x3 y3]
  (. *processing* (quad x1 y1 x2 y2 x3 y3)))

(defn rect
  ([x y width]
     (. *processing* (rect x y width width)))
  ([x y width height]
     (. *processing* (rect x y width height)))
  ([x y width height radius]
     (. *processing* (rect x y width height radius)))
  ([x y width height tlradius trradius blradius brradius]
     (. *processing* (rect x y width height tlradius trradius blradius brradius))))

(def *rect-modes*
  {:corner 0
   :corners 1
   :radius 2
   :center 3})

(defn rect-mode [mode]
  (. *processing* (rectMode (get *rect-modes* mode))))

(defn triangle [x1 y1 x2 y2 x3 y3]
  (. *processing* (triangle x1 y1 x2 y2 x3 y3)))

(defn bezier
  ([x1 y1 cx1 cy1 cx2 cy2 x2 y2]
     (. *processing* (bezier x1 y1 cx1 cy1 cx2 cy2 x2 y2)))
  ([x1 y1 z1 cx1 cy1 cz1 cx2 cy2 cz2 x2 y2 z2]
     (. *processing* (bezier x1 y1 z1 cx1 cy1 cz1 cx2 cy2 cz2 x2 y2 z2))))

(defn bezier-detail [detail]
  (. *processing* (bezier-detail detail)))

(defn bezier-point [a b c d t]
  (. *processing* (bezier-point a b c d t)))

(defn bezier-tangent [a b c d t]
  (. *processing* (bezier-tangent a b c d t)))

(defn curve
  ([x1 y1 x2 y2 x3 y3 x4 y4]
     (. *processing* (curve x1 y1 x2 y2 x3 y3 x4 y4)))
  ([x1 y1 z1 x2 y2 z2 x3 y3 z3 x4 y4 z4]
     (. *processing* (curve x1 y1 z1 x2 y2 z2 x3 y3 z3 x4 y4 z4))))

(defn curve-detail [detail]
  (. *processing* (curve-detail detail)))

(defn curve-point [a b c d t]
  (. *processing* (curve-point a b c d t)))

(defn curve-tangent [a b c d t]
  (. *processing* (curve-tangent a b c d t)))

(defn curve-tightness [squishy]
  (. *processing* (curve-tightness squishy)))

(def *color-modes* {:rgb 1 :hsb 3})

(defn color-mode
  ([mode]
     (. *processing* (colorMode (get *color-modes* mode))))
  ([mode range]
     (. *processing* (colorMode (get *color-modes* mode) range)))
  ([mode range1 range2 range3]
     (. *processing* (colorMode (get *color-modes* mode) range1 range2 range3)))
  ([mode range1 range2 range3 range4]
     (. *processing* (colorMode (get *color-modes* mode) range1 range2 range3 range4))))

(defn color
  ([arg]
     (. *processing* (color arg)))
  ([arg1, arg2]
     (. *processing* (color arg1 arg2)))
  ([arg1, arg2, arg3]
     (. *processing* (color arg1 arg2 arg3)))
  ([arg1, arg2, arg3, arg4]
     (. *processing* (color arg1 arg2 arg3 arg4))))

(defn alpha [c]
  (. *processing* (alpha c)))

(defn blend-color [c1 c2 mode]
  (. *processing* (blendColor c1 c2 (-lookup-constant mode))))

(defn blue [c]
  (. *processing* (blue c)))

(defn brightness [c]
  (. *processing* (brightness c)))

(defn green [c]
  (. *processing* (green c)))

(defn hue [c]
  (. *processing* (hue c)))

(defn lerp-color [c1 c2 amt]
  (. *processing* (lerpColor c1 c2 amt)))

(defn red [c]
  (. *processing* (red c)))

(defn saturation [c]
  (. *processing* (saturation c)))


(defn preload-image [imagename]
  (. (.imageCatch
      (.-sketch (.-externals  libre.sketch/*processing*)))
     (add imagename)))

(defn load-image [imagename]
  (. *processing* (loadImage imagename)))

(defn request-image
  ([filename]
     (. *processing* (requestImage filename)))
  ([filename ext]
     (. *processing* (requestImage filename ext))))

(defn create-image [width height format]
  (. *processing* (create-image width height (-lookup-constant format))))

(defn image
  ([img x y]
     (. *processing* (image img x y)))
  ([img x y width height]
     (. *processing* (image img x y width height))))

(defn image-mode [mode]
  (. *processing* (imageMode (-lookup-constant mode))))

(defn tint
  ([arg]
     (. *processing* (tint arg)))
  ([arg1, arg2]
     (. *processing* (tint arg1 arg2)))
  ([arg1, arg2, arg3]
     (. *processing* (tint arg1 arg2 arg3)))
  ([arg1, arg2, arg3, arg4]
     (. *processing* (tint arg1 arg2 arg3 arg4))))

(defn no-tint []
  (. *processing* (noTint)))

(defn pixel-blend 
  ([x y width height dx dy dwidth dheight mode]
     (. *processing* (blend x y width height dx dy dwidth dheight (-lookup-constant mode))))
  ([imgsrc x y width height dx dy dwidth dheight mode]
     (. *processing* (blend imgsrc x y width height dx dy dwidth dheight (-lookup-constant mode)))))

(defn pixel-copy
  ([x y width height dx dy dwidth dheight mode]
     (. *processing* (copy x y width height dx dy dwidth dheight (-lookup-constant mode))))
  ([imgsrc x y width height dx dy dwidth dheight mode]
     (. *processing* (copy imgsrc x y width height dx dy dwidth dheight (-lookup-constant mode)))))

(defn pixel-filter
  ([mode]
     (. *processing* (filter (-lookup-constant mode))))
  ([mode imgsrc]
     (. *processing* (filter (-lookup-constant mode) imgsrc))))


(defn pixel-get
  ([]
     (. *processing* (get)))
  ([x y]
     (. *processing* (get x y)))
  ([x y width height]
     (. *processing* (get x y width height))))

(defn pixel-array []
  (.-pixels *processing*))

(defn pixel-set [x y src]
  (. *processing* (set x y src)))

(defn load-pixels []
  (. *processing* (loadPixels)))

(defn update-pixels []
  (. *processing* (updatePixels)))

(defn push-style []
  (. *processing* (pushStyle)))

(defn pop-style []
  (. *processing* (popStyle)))

(defn smooth []
  (. *processing* (smooth)))

(defn no-smooth []
  (. *processing* (noSmooth)))

(defn stroke-weight
  ([width] (. *processing* (strokeWeight width))))

(defn stroke
  ([arg]
     (. *processing* (stroke arg)))
  ([arg1, arg2]
     (. *processing* (stroke arg1 arg2)))
  ([arg1, arg2, arg3]
     (. *processing* (stroke arg1 arg2 arg3)))
  ([arg1, arg2, arg3, arg4]
     (. *processing* (stroke arg1 arg2 arg3 arg4))))

(defn no-stroke []
  (. *processing* (noStroke)))

(def *stroke-join-styles*
  {:miter "miter"
   :bevel "bevel"
   :round "round"})

(defn stroke-join [style]
  (. *processing* (get *stroke-join-styles* style style)))

(def *stroke-cap-styles*
  {:square "butt"
   :project "square"
   :round "round"})

(defn stroke-cap [style]
  (. *processing* (get *stroke-cap-styles* style)))

(defn font-list []
  (. (.-PFont *processing*) (list)))

(defn create-font
  ([name size]
     (. *processing* (createFont name size)))
  ([name size smooth]
     (. *processing* (createFont name size smooth))))

(defn load-font [name]
  (. *processing* (loadFont name)))

(defn text-font
  ([name]
     (. *processing* (textFont name)))
  ([name size]
     (. *processing* (textFont name size))))

(defn text
  ([data x y]
     (. *processing* (text data x y)))
  ([data x y z]
     (. *processing* (text data x y z)))
  ([data x y width height]
     (. *processing* (text data x y width height)))
  ([data x y width height z]
     (. *processing* (text data x y width height z))))

(defn text-align
  ([align]
     (. *processing* (textAlign (-lookup-constant align))))
  ([align yalign]
     (. *processing* (textAlign (-lookup-constant align)
                                (-lookup-constant yalign)))))

(defn text-leading [dist]
  (. *processing* (textLeading dist)))

(defn text-mode [mode]
  (. *processing* (textMode (-lookup-constant mode))))

(defn text-size [size]
  (. *processing* (textSize size)))

(defn text-width [data]
  (. *processing* (textWidth data)))

(defn text-ascent [data]
  (. *processing* (textAscent data)))

(defn text-descent [data]
  (. *processing* (textDescent data)))

(defn text-height [data]
  (+ (text-ascent data) (text-descent data)))

(defn mouse-button []
  (.-mouseButton *processing*))

(defn mouse-pressed? []
  (.-mousePressed *processing*))

(defn mouse-x []
  (.-mouseX *processing*))

(defn mouse-y []
  (.-mouseY *processing*))

(defn pmouse-x []
  (.-pmouseX *processing*))

(defn pmouse-y []
  (.-pmouseY *processing*))

(defn get-key []
  (.-key *processing*))

(defn get-key-code []
  (.-keyCode *processing*))

(defn key-pressed? []
  (.-keyPressed *processing*))

(defn apply-matrix [n0 n1 n2 n3 n4 n5 n6 n7 n8 n9 n10 n11 n12 n13 n14 n15]
  (. *processing* (applyMatrix n0 n1 n2 n3 n4 n5 n6 n7 n8 n9 n10 n11 n12 n13 n14 n15)))

(defn pop-matrix []
  (. *processing* (popMatrix)))

(defn push-matrix []
  (. *processing* (pushMatrix)))

(defn reset-matrix []
  (. *processing* (resetMatrix)))

(defn rotate [angle]
  (. *processing* (rotate angle)))

(defn rotate-x [radians]
  (. *processing* (rotateX radians)))

(defn rotate-y [radians]
  (. *processing* (rotateY radians)))

(defn rotate-z [radians]
  (. *processing* (rotateZ radians)))

(defn scale
  ([size]
     (. *processing* (scale size)))
  ([x y]
     (. *processing* (scale x y)))
  ([x y z]
     (. *processing* (scale x y z))))

(defn translate
  ([x y]
     (. *processing* (translate x y)))
  ([x y z]
     (. *processing* (translate x y z))))

(defn load-shape [filename]
  (. *processing* (loadShape filename)))

(defn shape
  ([s]
     (. *processing* (shape s)))
  ([s x y]
     (. *processing* (shape s x y)))
  ([s x y width height]
     (. *processing* (shape s x y width height))))

(defn shape-mode [mode]
  (. *processing* (shapeMode (-lookup-constant mode))))

(defn sketch-width []
  (.-width *processing*))

(defn sketch-height []
  (.-height *processing*))

(defn cursor
  ([]
     (. *processing* (cursor)))
  ([mode]
     (. *processing* (cursor (-lookup-constant mode))))
  ([img x y]
     (. *processing* (cursor img x y))))

(defn no-cursor []
  (. *processing* (noCursor)))

(defn focused? []
  (.-focused *processing*))

(defn frame-count []
  (.-frameCount *processing*))

(defn frame-rate
  ([]
     (.-frameRate *processing*))
  ([fps]
     (. *processing* (frameRate fps))))

(defn online? []
  (.-online *processing*))

(defn frame-rate [fps]
  (. *processing* (frameRate fps)))

(defn screen []
  js/screen)

(defn screen-width []
  (.-width js/screen))

(defn screen-height []
  (.-height js/screen))

(def *render-modes*
  {:p2d 1
   :java2d 1
   :webgl 2
   :p3d 2
   :opengl 2})

(defn size
  ([width height]
     (. *processing* (size width height)))
  ([width height renderer]
     (. *processing* (size width height (get *render-modes* renderer)))))

(defn background
  ([arg]
     (. *processing* (background arg)))
  ([arg1, arg2]
     (. *processing* (background arg1 arg2)))
  ([arg1, arg2, arg3]
     (. *processing* (background arg1 arg2 arg3)))
  ([arg1, arg2, arg3, arg4]
     (. *processing* (background arg1 arg2 arg3 arg4))))

(defn fill
  ([arg]
     (. *processing* (fill arg)))
  ([arg1, arg2]
     (. *processing* (fill arg1 arg2)))
  ([arg1, arg2, arg3]
     (. *processing* (fill arg1 arg2 arg3)))
  ([arg1, arg2, arg3, arg4]
     (. *processing* (fill arg1 arg2 arg3 arg4))))

(defn exit []
  (. *processing* (exit)))

(defn redraw []
  (. *processing* (redraw)))

(defn draw-loop []
  (. *processing* (loop)))

(defn no-draw-loop []
  (. *processing* (noLoop)))

     

(defn random
  ([high] (. *processing* (random high)))
  ([low high] (. *processing* (random low high))))

(defn random-circle []
  (let [diameter (random 250)]
    (arc (random (sketch-width))
         (random (sketch-height))
         diameter)))

(defn test []
  (let [canvas (.get (jayq.core/$ :#sketch) 0)
        p (js/Processing. canvas
                          (sketch-init
                           {:setup
                            (fn []
                              (size (- (screen-width) 50)
                                    (- (screen-height) 50))
                              (smooth)
                              (background 255))
                            :key-typed (fn [] (background 255))
                            :draw (fn []
                                    (fill 255 1)
                                    (no-stroke)
                                    (rect 0 0 (sketch-width) (sketch-height))
                                    (fill (random 255) (random 255) (random 255))
                                    (stroke-weight (random 10))
                                    (stroke 0 (random 255))
                                    (random-circle))}))]
    (set! *processing* p)))
