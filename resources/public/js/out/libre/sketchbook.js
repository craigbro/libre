// Compiled by ClojureScript 0.0-2371
goog.provide('libre.sketchbook');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
if(typeof libre.sketchbook._STAR_sketchbook_STAR_ !== 'undefined')
{} else
{libre.sketchbook._STAR_sketchbook_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
libre.sketchbook.defsketch = (function defsketch(name,sketchmap){return cljs.core.swap_BANG_.call(null,libre.sketchbook._STAR_sketchbook_STAR_,cljs.core.assoc,name,sketchmap);
});
goog.exportSymbol('libre.sketchbook.defsketch', libre.sketchbook.defsketch);
libre.sketchbook.get_sketch = (function get_sketch(name){return cljs.core.get.call(null,cljs.core.deref.call(null,libre.sketchbook._STAR_sketchbook_STAR_),name);
});
goog.exportSymbol('libre.sketchbook.get_sketch', libre.sketchbook.get_sketch);
libre.sketchbook.list_sketches = (function list_sketches(){return cljs.core.keys.call(null,cljs.core.deref.call(null,libre.sketchbook._STAR_sketchbook_STAR_));
});
goog.exportSymbol('libre.sketchbook.list_sketches', libre.sketchbook.list_sketches);
/**
* looks at our URL to determine the sketch to run.
*/
libre.sketchbook.run_from_url = (function run_from_url(){var vec__9621 = clojure.string.split.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(document.location)),"?");var url = cljs.core.nth.call(null,vec__9621,(0),null);var params = cljs.core.nth.call(null,vec__9621,(1),null);var name = cljs.core.last.call(null,clojure.string.split.call(null,url,"/"));console.log(("URL is: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)));
console.log(("Sketch is: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
var temp__4124__auto___9622 = libre.sketchbook.get_sketch.call(null,name);if(cljs.core.truth_(temp__4124__auto___9622))
{var sk_9623 = temp__4124__auto___9622;libre.sketch.run_sketch.call(null,new cljs.core.Keyword(null,"#sketch","#sketch",-820536229),sk_9623);
} else
{}
return true;
});
goog.exportSymbol('libre.sketchbook.run_from_url', libre.sketchbook.run_from_url);

//# sourceMappingURL=sketchbook.js.map