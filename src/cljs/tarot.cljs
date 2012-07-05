(ns libre.tarot
  (:use [jayq.core :only [$]])
  (:require [monet.canvas :as canvas]
            [clojure.browser.repl :as repl]))

; Use of "localhost" will only work for local development.
; Change the port to match the :repl-listen-port.
(defn ^:export repl []
  (repl/connect "http://localhost:9000/repl"))

(def middle-pillar {:x 500})

(def pillar-of-severity {:x 250})

(def pillar-of-mercy {:x 750})

(defn rect [ctx {:keys [x y w h fill]}]
  (.beginPath ctx)
  (.rect ctx x y w h)
  (.closePath ctx)
  ctx)

(defn circle [ctx {:keys [x y r]}]
  (.beginPath ctx)
  (.arc ctx x y r 0 (* (.-PI js/Math) 2) true)
  (.closePath ctx)
  ctx)

(defn ellipse [ctx cx cy w h]
  (.beginPath ctx)
  (.moveTo ctx cx (- cy (/ h 2)))
  (.bezierCurveTo ctx
                  (+ cx (/ w 2)) (- cy (/ h 2))
                  (+ cx (/ w 2)) (+ cy (/ h 2))
                  cx (+ cy (/ h 2)))
  (.bezierCurveTo ctx
                  (- cx (/ w 2)) (+ cy (/ h 2))
                  (- cx (/ w 2)) (- cy (/ h 2))
                  cx (- cy (/ h 2)))
  (.closePath ctx))

(defn ^:export ain-soph []
  (canvas/entity {:x 0 :y 0 :r 1000}
                 nil
                 (fn [ctx shape]
                   (set! (.-fillStyle ctx) "#aaa")
                   (ellipse ctx 500 500 2000 1000)
                   (.fill ctx)
                   )))

(defn ^:export ain-soph-aur []
  (canvas/entity {:x 0 :y 0 :r 1000}
                 nil
                 (fn [ctx shape]
                   (set! (.-fillStyle ctx) "#eee")
                   (ellipse ctx 500 500 1200 1000)
                   (.fill ctx)
                   )))

(defn ^:export sephiroth [seph]
  (canvas/entity seph
   nil
   (fn [ctx seph]
     (let [name (:name seph)
           x (:x (:pillar seph))
           y (:y seph)]
       (set! (.-fillStyle ctx) "#666")
       (circle ctx {:x x :y y :r 50})
       (.fill ctx)
       (set! (.-font ctx) "15pt Sans")
       (set! (.-textAlign ctx) "center")
       (set! (.-textBaseline ctx) "middle")
       (set! (.-fillStyle ctx) "#fff")
       (.fillText ctx name x y)
       ))))

(defn ^:export tree-path [f t]
  (canvas/entity {:from f :to t}
                 nil
                 (fn [ctx path]

                   (.beginPath ctx)
                   (.moveTo ctx (:x (:pillar (:from path))) (:y (:from path)))
                   (set! (.-lineWidth ctx) 20)
                   (.lineTo ctx (:x (:pillar (:to path))) (:y (:to path)))
                   (set! (.-strokeStyle ctx) "#000")
                   (.stroke ctx)
                   
                   (.beginPath ctx)
                   (.moveTo ctx (:x (:pillar (:to path))) (:y (:to path)))
                   (set! (.-lineWidth ctx) 18)
                   (.lineTo ctx (:x (:pillar (:from path))) (:y (:from path)))
                   (set! (.-strokeStyle ctx) "#ffffff")
                   (.stroke ctx)
                   )))


(def ^export sephiroth-map {:kether {:name "kether"
                             :number 1
                             :y 100
                             :pillar middle-pillar}

                    :chokmah {:name "chokmah"
                              :number 2
                              :pillar pillar-of-mercy
                              :y 200}
    
                    :binah {:name "binah"
                            :number 3
                            :pillar pillar-of-severity
                            :y 200}

                    :chesed {:name "chesed"
                             :number 4
                             :pillar pillar-of-mercy
                             :y 400}
    
                    :geburah {:name "geburah"
                              :number 5
                              :pillar pillar-of-severity
                              :y 400}

                    :tiphareth {:name "tiphareth"
                               :number 6
                               :pillar middle-pillar
                               :y 500}
    
    
                    :netzach {:name "netzach"
                              :number 7
                              :pillar pillar-of-mercy
                              :y 600}
    
                    :hod {:name "hod"
                          :number 8
                          :pillar pillar-of-severity
                          :y 600}

                    :yesod {:name "yesod"
                            :number 9
                            :pillar middle-pillar
                            :y 700}
    
                    :malkuth {:name "malkuth"
                              :number 10
                              :pillar middle-pillar
                              :y 900}})


(defn add-sephiroth [mc name]
  (let [spec (name sephiroth-map)]
    (canvas/add-entity mc name
                       (sephiroth spec))))

(def path-map {:tav {:name "tav"
                     :number 32
                     :from :yesod
                     :to :malkuth}

               :shin {:name "shin"
                      :number 31
                      :from :hod
                      :to :malkuth}

               :resh {:name "resh"
                      :number 30
                      :from :hod
                      :to :yesod}

               :qoph {:name "qoph"
                      :number 29
                      :from :netzach
                      :to :malkuth}
               
               :tzaddi {:name "tzaddi"
                        :number 28
                        :from :netzach
                        :to :yesod}

               :peh {:name "peh"
                     :number 27
                     :from :netzach
                     :to :hod}

               :ayin {:name "ayin"
                      :number 26
                      :from :tiphareth
                      :to :hod}

               :samekh {:name "samekh"
                        :number 25
                        :from :tiphareth
                        :to :yesod}

               :nun {:name "nun"
                     :number 24
                     :from :tiphareth
                     :to :netzach}

               :mem {:name "mem"
                     :number 23
                     :from :geburah
                     :to :hod}

               :lamed {:name "lamed"
                       :number 22
                       :from :geburah
                       :to :tiphareth}

               :caph {:name "caph"
                      :number 21
                      :from :chesed
                      :to :netzach}

               :yod {:name "yod"
                     :number 20
                     :from :chesed
                     :to :tiphareth}

               :teth {:name "teth"
                      :number 19
                      :from :chesed
                      :to :geburah}

               :cheth {:name "chetch"
                       :number 18
                       :from :binah
                       :to :geburah}

               :zayin {:name "zayin"
                       :number 17
                       :from :binah
                       :to :tiphareth}

               :vav {:name "vav"
                     :number 16
                     :from :chokmah
                     :to :chesed}

               :heh {:name "heh"
                     :number 15
                     :from :chokmah
                     :to :tiphareth}

               :daleth {:name "daleth"
                        :number 14
                        :from :chokmah
                        :to :binah}

               :gimel {:name "gimel"
                       :number 13
                       :from :kether
                       :to :tiphareth}

               :beth {:name "beth"
                      :number 12
                      :from :kether
                      :to :binah}

               :aleph {:name "aleph"
                       :number 10
                       :from :kether
                       :to :chokmah}
               }

  )

(defn add-path [mc name]
  (let [spec (name path-map)]
    (canvas/add-entity mc name
                       (tree-path (get sephiroth-map (:from spec))
                                  (get sephiroth-map (:to spec))))))


(defn ^:export drawtree []
  (let [mc (canvas/init (.get ($ :#tree) 0))]
    (canvas/add-entity mc
                       :ain
                       (canvas/entity {:x 0 :y 0 :h 1000 :w 1000}
                                      nil
                                      (fn [ctx box]
                                        (set! (. ctx -fillStyle) "#000")
                                        (-> ctx
                                            (rect box)
                                            (.fill ctx)))))
    
    (canvas/add-entity mc :ain-soph
                       (ain-soph))
    
    (canvas/add-entity mc :ain-soph-aur
                       (ain-soph-aur))

    (doseq [s (keys path-map)]
      (add-path mc s))
    
    (doseq [s (reverse (keys sephiroth-map))]
      (add-sephiroth mc s))
    
    ))
