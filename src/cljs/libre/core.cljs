(ns libre.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [libre.sketchbook :refer [get-sketch defsketch list-sketches]]
            [libre.sketch :as sk :refer [run-sketch]
             ]))

(defn info [mesg & objs]
  (enable-console-print!)
  (apply println "INFO:" mesg objs))

;; loading up some default sketch collections
(js/goog.require "libre.sketches.color_walk")

(defonce app-state (atom {:sketch-name "random-rects"}))

(defn- start-processing [owner sketch]
  (when-let [c (om/get-state owner :canvas)]
    (when sketch
      (om/set-state! owner :processing (run-sketch c sketch))
      (om/set-state! owner :running true))))

(defn- exit-processing [owner]
  (when-let [p (:processing (om/get-state owner))]
    (. p (exit))
    (om/set-state! owner :processing nil)
    (om/set-state! owner :running false)))

(defn- toggle-processing-loop [owner event]
  (when-let [p (om/get-state owner :processing)]
    (when (.-draw p)
      (if (and (om/get-state owner :running))
        (do
          (info "Stopping loop.")
          (. p noLoop)
          (om/set-state! owner :running false))
        (do
          (info "Starting loop." )
          (. p loop)
          (om/set-state! owner :running true)))))
  false)

(defn- reset-processing [owner event]
  (info "resetting")
  (exit-processing owner)
  (start-processing owner (om/get-props owner)))

(defn sketch-display [sketch owner]
  (reify
    om/IInitState
    (init-state [_]
      {:processing nil   ;; the Processing object
       :canvas nil       ;; the canvas DOM element we render too
       :running false})   ;; wether we are running or not
    om/IDidMount
    (did-mount [this]
      (let [canvas (. (om/get-node owner) (querySelector "#processing-canvas"))]
        (om/set-state! owner :canvas canvas)
        (start-processing owner sketch)))
    om/IWillUnmount
    (will-unmount [_]
      (info "Unmounting")
      (exit-processing owner)
      (om/set-state! owner :canvas nil))
    om/IWillMount
    (will-mount [_]
      (info "Mount"))
    om/IDidUpdate
    (did-update [this prev-props prev-state]
      (when (not (= sketch prev-props))
        (info "Sketch changed.")
        (exit-processing owner)
        (start-processing owner sketch)))
    om/IRenderState 
    (render-state [_ state]
      (dom/div #js {:className "sketch-display"}
               (if sketch
                 (dom/div {:className "sketch-controls"}
                          (dom/button #js {:className (if (om/get-state owner :running) "pause" "run")
                                           :style #js {:width "6em"}
                                           :onClick (partial toggle-processing-loop owner)}
                                      (if (om/get-state owner :running) "Pause" "Run"))
                          (dom/button #js {:className "reset"
                                           :style #js {:width "6em"}
                                           :onClick (partial reset-processing owner)} "Reset"))
                 (dom/span #js {:className "error"} "No sketch found."))
               (dom/canvas #js {:id "processing-canvas" :height 1000 :width 1000})))))

(defn sketchbook-selector [app owner]
  (reify
    om/IRenderState
    (render-state [_ state]
      ;; this would be a good place for reference cursors
      (let [sketches (list-sketches)
            value (:sketch-name (om/get-props owner))]
        (info "Sketchbook:" sketches)
        (dom/span #js {:className "sketchbook-selector"}
                  (dom/label #js {} "Sketch: ")
                  (apply dom/select #js {:value value
                                         :onChange #(om/update! app :sketch-name (.. % -target -value))}
                         (map
                          (fn [s]
                            (dom/option #js{:value (name s)} (name s)))
                          (set (conj sketches value)))))))))


(defn main []
  (info "Calling main.")
  (om/root
   (fn [app owner]
     (reify om/IRender
       (render [_]
         (dom/div #js {:className "sketch-display"}
                  (om/build sketchbook-selector app)
                  (om/build sketch-display (get-sketch (:sketch-name (om/get-props owner))))))))
   app-state
   {:target (.item (. js/document (getElementsByTagName "body")) 0)}))

;;(swap! app-state assoc :sketch-name "color-walk-333")
;;(get-sketch "random-squares")
;;app-state

