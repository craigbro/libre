// Compiled by ClojureScript 0.0-2371
goog.provide('libre.sketches.color_walk');
goog.require('cljs.core');
goog.require('libre.sketchbook');
goog.require('libre.sketch');
goog.require('libre.sketch');
goog.require('libre.sketchbook');
libre.sketches.color_walk.fade = (function fade(a){libre.sketch.push_style.call(null);
libre.sketch.fill.call(null,(255),a);
libre.sketch.no_stroke.call(null);
libre.sketch.rect.call(null,(0),(0),libre.sketch.sketch_width.call(null),libre.sketch.sketch_height.call(null));
return libre.sketch.pop_style.call(null);
});
libre.sketchbook.defsketch.call(null,"random-circles",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"setup","setup",1987730512),(function (){libre.sketch.size.call(null,(libre.sketch.screen_width.call(null) - (50)),(libre.sketch.screen_height.call(null) - (50)));
libre.sketch.smooth.call(null);
return libre.sketch.background.call(null,(255));
}),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),(function (){return libre.sketch.background.call(null,(255));
}),new cljs.core.Keyword(null,"draw","draw",1358331674),(function (){libre.sketches.color_walk.fade.call(null,(1));
libre.sketch.fill.call(null,libre.sketch.random.call(null,(255)),libre.sketch.random.call(null,(255)),libre.sketch.random.call(null,(255)));
libre.sketch.stroke_weight.call(null,libre.sketch.random.call(null,(10)));
libre.sketch.stroke.call(null,(0));
return libre.sketch.random_circle.call(null);
})], null));
libre.sketchbook.defsketch.call(null,"random-rects",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"setup","setup",1987730512),(function (){libre.sketch.size.call(null,(libre.sketch.screen_width.call(null) - (50)),(libre.sketch.screen_height.call(null) - (50)));
libre.sketch.smooth.call(null);
return libre.sketch.background.call(null,(255));
}),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),(function (){return libre.sketch.background.call(null,(255));
}),new cljs.core.Keyword(null,"draw","draw",1358331674),(function (){libre.sketches.color_walk.fade.call(null,(1));
libre.sketch.fill.call(null,libre.sketch.random.call(null,(255)),libre.sketch.random.call(null,(255)),libre.sketch.random.call(null,(255)));
libre.sketch.stroke_weight.call(null,(5));
libre.sketch.stroke.call(null,(0));
var dim = libre.sketch.random.call(null,(60),(200));return libre.sketch.rect.call(null,libre.sketch.random.call(null,(libre.sketch.sketch_width.call(null) - dim)),libre.sketch.random.call(null,(libre.sketch.sketch_height.call(null) - dim)),(dim + libre.sketch.random.call(null,(-40),(50))),(dim + libre.sketch.random.call(null,(-40),(50))),(10));
})], null));
libre.sketches.color_walk.color_walker = (function color_walker(from_color,to_color,step){libre.sketch.size.call(null,(libre.sketch.screen_width.call(null) - (50)),(libre.sketch.screen_height.call(null) - (50)));
libre.sketch.smooth.call(null);
libre.sketch.background.call(null,(0));
var seq__9628 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),libre.sketch.sketch_width.call(null),step));var chunk__9629 = null;var count__9630 = (0);var i__9631 = (0);while(true){
if((i__9631 < count__9630))
{var x = cljs.core._nth.call(null,chunk__9629,i__9631);libre.sketch.stroke_weight.call(null,libre.sketch.random.call(null,step,(step + libre.sketch.random.call(null,(step / (2))))));
libre.sketch.stroke.call(null,libre.sketch.lerp_color.call(null,from_color,to_color,(x / libre.sketch.sketch_width.call(null))),(128));
libre.sketch.line.call(null,x,(0),x,libre.sketch.sketch_height.call(null));
{
var G__9632 = seq__9628;
var G__9633 = chunk__9629;
var G__9634 = count__9630;
var G__9635 = (i__9631 + (1));
seq__9628 = G__9632;
chunk__9629 = G__9633;
count__9630 = G__9634;
i__9631 = G__9635;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9628);if(temp__4126__auto__)
{var seq__9628__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9628__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__9628__$1);{
var G__9636 = cljs.core.chunk_rest.call(null,seq__9628__$1);
var G__9637 = c__4410__auto__;
var G__9638 = cljs.core.count.call(null,c__4410__auto__);
var G__9639 = (0);
seq__9628 = G__9636;
chunk__9629 = G__9637;
count__9630 = G__9638;
i__9631 = G__9639;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__9628__$1);libre.sketch.stroke_weight.call(null,libre.sketch.random.call(null,step,(step + libre.sketch.random.call(null,(step / (2))))));
libre.sketch.stroke.call(null,libre.sketch.lerp_color.call(null,from_color,to_color,(x / libre.sketch.sketch_width.call(null))),(128));
libre.sketch.line.call(null,x,(0),x,libre.sketch.sketch_height.call(null));
{
var G__9640 = cljs.core.next.call(null,seq__9628__$1);
var G__9641 = null;
var G__9642 = (0);
var G__9643 = (0);
seq__9628 = G__9640;
chunk__9629 = G__9641;
count__9630 = G__9642;
i__9631 = G__9643;
continue;
}
}
} else
{return null;
}
}
break;
}
});
libre.sketchbook.defsketch.call(null,"color-walk-1",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"setup","setup",1987730512),(function (){return libre.sketches.color_walk.color_walker.call(null,libre.sketch.color.call(null,(255),(0),(0)),libre.sketch.color.call(null,(0),(0),(255)),(3));
})], null));
libre.sketchbook.defsketch.call(null,"color-walk-2",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"setup","setup",1987730512),(function (){return libre.sketches.color_walk.color_walker.call(null,libre.sketch.color.call(null,(0),(255),(0)),libre.sketch.color.call(null,(0),(0),(255)),(3));
})], null));
libre.sketchbook.defsketch.call(null,"color-walk-3",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"setup","setup",1987730512),(function (){return libre.sketches.color_walk.color_walker.call(null,libre.sketch.color.call(null,(0),(0),(255)),libre.sketch.color.call(null,(0),(255),(0)),(3));
})], null));
libre.sketchbook.defsketch.call(null,"color-walk-4",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"setup","setup",1987730512),(function (){return libre.sketches.color_walk.color_walker.call(null,libre.sketch.color.call(null,(255),(255),(255)),libre.sketch.color.call(null,(0),(255),(0)),(1));
})], null));
libre.sketchbook.defsketch.call(null,"color-walk-5",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"setup","setup",1987730512),(function (){return libre.sketches.color_walk.color_walker.call(null,libre.sketch.color.call(null,(255),(255),(255)),libre.sketch.color.call(null,(0),(0),(0)),(1));
})], null));
libre.sketchbook.defsketch.call(null,"ghost-doodle",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"setup","setup",1987730512),(function (){libre.sketch.size.call(null,(1000),(1000));
return libre.sketch.background.call(null,(0));
}),new cljs.core.Keyword(null,"draw","draw",1358331674),(function (){var x_off = (5.0E-4 * libre.sketch.frame_count.call(null));var y_off = (x_off + (20));var x = (libre.sketch.noise.call(null,x_off) * libre.sketch.width.call(null));var y = (libre.sketch.noise.call(null,y_off) * libre.sketch.height.call(null));libre.sketch.stroke.call(null,(255),(0),(0),(80));
return libre.sketch.point.call(null,x,y);
})], null));

//# sourceMappingURL=color_walk.js.map