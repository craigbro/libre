(ns libre.painter)

(defprotocol IPaintable
  "Protocol for painting to a canvas"
  (paint [this context]
    "Paint themselves to a canvas context.")
  (z-order [this]
    "The Z order of this object, defaulting to 0."))

(defprotocol IPosition
  (position [this])
  (x [this])
  (y [this])
  (z [this]))

(extend-protocol IPosition
  cljs.core/PersistentVector
  (position [this] (take 3 this))
  (x [this] (first this))
  (y [this] (second this))
  (z [this] (nth this 2))
  
  cljs.core/ObjMap
  (position [this] (list (:x this) (:y this) (:z this)))
  (x [this] (:x this))
  (y [this] (:y this))
  (z [this] (:z this))
  
  js/Array
  (position [this] (take 2 (js->clj this)))
  (x [this] (aget this 0))
  (y [this] (aget this 1))
  (z [this] (aget this 2)))

(defprotocol ICanvasContextOps
  (preserving-state [ctx f]
    "Save and restore state around the function f.")
  (apply-style [this style]
    "Apply the given style map to the context, modified context state.")
  (with-style [this style f]
    "Perform the function f with the given style, then return to previous state.")
  (with-path [this f]
    "Perform the function wrapping begin and close Path.")
  )

(extend-protocol ICanvasContextOps
  js/CanvasRenderingContext2D
  (apply-style [ctx style]
    (when-let [v (:fill-style style)]
      (set! (.-fillStyle ctx) v))
    (when-let [v (:stroke-style style)]
      (set! (.-strokeStyle ctx) v))
    (when-let [v (:global-alpha style)]
      (set! (.-globalAlpha ctx) v))
    (when-let [v (:line-width style)]
      (set! (.-lineWidth ctx) v))
    (when-let [v (:line-cap style)]
      (set! (.-lineCap ctx) v))
    (when-let [v (:line-join style)]
      (set! (.-lineJoin ctx) v))
    (when-let [v (:miter-limit style)]
      (set! (.-miterLimit ctx) v))
    (when-let [v (:shadow-offset-x style)]
      (set! (.-shadowOffsetX ctx) v))
    (when-let [v (:shadow-offset-y style)]
      (set! (.-shadowOffsetY ctx) v))
    (when-let [v (:shadow-blur style)]
      (set! (.-shadowBlur ctx) v))
    (when-let [v (:shadow-color style)]
      (set! (.-shadowCOlor ctx) v))
    (when-let [v (:global-composite-op style)]
      (set! (.-globalCompositeOperation ctx) v))
    (when-let [v (:font style)]
      (set! (.-font ctx) v))
    (when-let [v (:text-align style)]
      (set! (.-textAlign ctx) v))
    (when-let [v (:text-baseline style)]
      (set! (.-textBaseline ctx) v)))
  
  (preserving-state [ctx f]
    (. ctx (save))
    (try
      (f)
      (finally
        (. ctx (restore)))))
  
  (with-style [ctx style f]
    (preserving-state ctx
                      (fn []
                        (apply-style ctx style)
                        (f))))

  (with-path [ctx f]
    (.beginPath ctx)
    (f)
    (.closePath ctx)))
  

(deftype Circle [center radius style]
  IPaintable
  (z-order [_] (or (z center) 0))
  (paint [_ ctx]
    (with-path ctx
      (fn []
        (.arc ctx (x center) (y center)
              radius 0 (* (.-PI js/Math) 2) true)))
    (with-style ctx style
      (fn []
        (when (or (:filled style)
                  (:fill-style style))
          (.fill ctx))
        (.stroke ctx)))
    ctx))

(deftype Rect [pos width height style]
  IPaintable
  (z-order [_] (or (z center) 0))
  (paint [_ ctx]
    (with-path ctx
      (fn []
        (.rect ctx (x pos) (y pos) width height)))
    (with-style ctx style
      (fn []
        (when (or (:filled style)
                  (:fill-style style))
          (.fill ctx))
        (.stroke ctx)))
    ctx))

(deftype Ellipse [center w h style]
  IPaintable
  (z-order [_] (or (z center) 0))
  (paint [_ ctx]
    (with-path ctx
      (fn []
        (let [cx (x center)
              cy (y center)]
          (.moveTo ctx cx (- cy (/ h 2)))
          (.bezierCurveTo ctx
                          (+ cx (/ w 2)) (- cy (/ h 2))
                          (+ cx (/ w 2)) (+ cy (/ h 2))
                          cx (+ cy (/ h 2)))
          (.bezierCurveTo ctx
                          (- cx (/ w 2)) (+ cy (/ h 2))
                          (- cx (/ w 2)) (- cy (/ h 2))
                          cx (- cy (/ h 2))))))
    (with-style ctx style
      (fn []
        (when (or (:filled style)
                  (:fill-style style))
          (.fill ctx))
        (.stroke ctx)))
    ctx))


(defn test []
  (let [ctx (. (.get (jayq.core/$ :#tree) 0) (getContext "2d"))]
    (paint (libre.painter/Circle. {:x 100 :y 200}
                                  80
                                  {:fill-style "#666"
                                   :stroke-style "#000"})
           ctx)
    
    (paint (libre.painter/Rect. {:x 200 :y 200}
                                80 80
                                {:fill-style "#666"
                                 :stroke-style "#000"})
           ctx)))
