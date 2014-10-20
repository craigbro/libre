// Compiled by ClojureScript 0.0-2371
goog.provide('libre.core');
goog.require('cljs.core');
goog.require('libre.sketch');
goog.require('libre.sketchbook');
goog.require('cljs.core.async');
goog.require('libre.sketch');
goog.require('libre.sketch');
goog.require('libre.sketchbook');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
/**
* @param {...*} var_args
*/
libre.core.info = (function() { 
var info__delegate = function (mesg,objs){cljs.core.enable_console_print_BANG_.call(null);
return cljs.core.apply.call(null,cljs.core.println,"INFO:",mesg,objs);
};
var info = function (mesg,var_args){
var objs = null;if (arguments.length > 1) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return info__delegate.call(this,mesg,objs);};
info.cljs$lang$maxFixedArity = 1;
info.cljs$lang$applyTo = (function (arglist__9562){
var mesg = cljs.core.first(arglist__9562);
var objs = cljs.core.rest(arglist__9562);
return info__delegate(mesg,objs);
});
info.cljs$core$IFn$_invoke$arity$variadic = info__delegate;
return info;
})()
;
goog.require("libre.sketches.color_walk");
if(typeof libre.core.app_state !== 'undefined')
{} else
{libre.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sketch-name","sketch-name",507643804),"random-rects"], null));
}
libre.core.start_processing = (function start_processing(owner,sketch){var temp__4126__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));if(cljs.core.truth_(temp__4126__auto__))
{var c = temp__4126__auto__;if(cljs.core.truth_(sketch))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"processing","processing",-1576405467),libre.sketch.run_sketch.call(null,c,sketch));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"running","running",1554969103),true);
} else
{return null;
}
} else
{return null;
}
});
libre.core.exit_processing = (function exit_processing(owner){var temp__4126__auto__ = new cljs.core.Keyword(null,"processing","processing",-1576405467).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner));if(cljs.core.truth_(temp__4126__auto__))
{var p = temp__4126__auto__;p.exit();
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"processing","processing",-1576405467),null);
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"running","running",1554969103),false);
} else
{return null;
}
});
libre.core.toggle_processing_loop = (function toggle_processing_loop(owner,event){var temp__4126__auto___9563 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"processing","processing",-1576405467));if(cljs.core.truth_(temp__4126__auto___9563))
{var p_9564 = temp__4126__auto___9563;if(cljs.core.truth_(p_9564.draw))
{if(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"running","running",1554969103))))
{libre.core.info.call(null,"Stopping loop.");
p_9564.noLoop();
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"running","running",1554969103),false);
} else
{libre.core.info.call(null,"Starting loop.");
p_9564.loop();
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"running","running",1554969103),true);
}
} else
{}
} else
{}
return false;
});
libre.core.reset_processing = (function reset_processing(owner,event){libre.core.info.call(null,"resetting");
libre.core.exit_processing.call(null,owner);
return libre.core.start_processing.call(null,owner,om.core.get_props.call(null,owner));
});
libre.core.sketch_display = (function sketch_display(sketch,owner){if(typeof libre.core.t9568 !== 'undefined')
{} else
{
/**
* @constructor
*/
libre.core.t9568 = (function (owner,sketch,sketch_display,meta9569){
this.owner = owner;
this.sketch = sketch;
this.sketch_display = sketch_display;
this.meta9569 = meta9569;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
libre.core.t9568.cljs$lang$type = true;
libre.core.t9568.cljs$lang$ctorStr = "libre.core/t9568";
libre.core.t9568.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"libre.core/t9568");
});
libre.core.t9568.prototype.om$core$IRenderState$ = true;
libre.core.t9568.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "sketch-display"},(cljs.core.truth_(self__.sketch)?React.DOM.div(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"sketch-controls"], null),React.DOM.button({"onClick": cljs.core.partial.call(null,libre.core.toggle_processing_loop,self__.owner), "style": {"width": "6em"}, "className": (cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"running","running",1554969103)))?"pause":"run")},(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"running","running",1554969103)))?"Pause":"Run")),React.DOM.button({"onClick": cljs.core.partial.call(null,libre.core.reset_processing,self__.owner), "style": {"width": "6em"}, "className": "reset"},"Reset")):React.DOM.span({"className": "error"},"No sketch found.")),React.DOM.canvas({"width": (1000), "height": (1000), "id": "processing-canvas"}));
});
libre.core.t9568.prototype.om$core$IDidUpdate$ = true;
libre.core.t9568.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;if(!(cljs.core._EQ_.call(null,self__.sketch,prev_props)))
{libre.core.info.call(null,"Sketch changed.");
libre.core.exit_processing.call(null,self__.owner);
return libre.core.start_processing.call(null,self__.owner,self__.sketch);
} else
{return null;
}
});
libre.core.t9568.prototype.om$core$IWillMount$ = true;
libre.core.t9568.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return libre.core.info.call(null,"Mount");
});
libre.core.t9568.prototype.om$core$IWillUnmount$ = true;
libre.core.t9568.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;libre.core.info.call(null,"Unmounting");
libre.core.exit_processing.call(null,self__.owner);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null);
});
libre.core.t9568.prototype.om$core$IDidMount$ = true;
libre.core.t9568.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var canvas = om.core.get_node.call(null,self__.owner).querySelector("#processing-canvas");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas);
return libre.core.start_processing.call(null,self__.owner,self__.sketch);
});
libre.core.t9568.prototype.om$core$IInitState$ = true;
libre.core.t9568.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"processing","processing",-1576405467),null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null,new cljs.core.Keyword(null,"running","running",1554969103),false], null);
});
libre.core.t9568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9570){var self__ = this;
var _9570__$1 = this;return self__.meta9569;
});
libre.core.t9568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9570,meta9569__$1){var self__ = this;
var _9570__$1 = this;return (new libre.core.t9568(self__.owner,self__.sketch,self__.sketch_display,meta9569__$1));
});
libre.core.__GT_t9568 = (function __GT_t9568(owner__$1,sketch__$1,sketch_display__$1,meta9569){return (new libre.core.t9568(owner__$1,sketch__$1,sketch_display__$1,meta9569));
});
}
return (new libre.core.t9568(owner,sketch,sketch_display,null));
});
libre.core.sketchbook_selector = (function sketchbook_selector(app,owner){if(typeof libre.core.t9575 !== 'undefined')
{} else
{
/**
* @constructor
*/
libre.core.t9575 = (function (owner,app,sketchbook_selector,meta9576){
this.owner = owner;
this.app = app;
this.sketchbook_selector = sketchbook_selector;
this.meta9576 = meta9576;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
libre.core.t9575.cljs$lang$type = true;
libre.core.t9575.cljs$lang$ctorStr = "libre.core/t9575";
libre.core.t9575.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"libre.core/t9575");
});
libre.core.t9575.prototype.om$core$IRenderState$ = true;
libre.core.t9575.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var sketches = libre.sketchbook.list_sketches.call(null);var value = new cljs.core.Keyword(null,"sketch-name","sketch-name",507643804).cljs$core$IFn$_invoke$arity$1(om.core.get_props.call(null,self__.owner));libre.core.info.call(null,"Sketchbook:",sketches);
return React.DOM.span({"className": "sketchbook-selector"},React.DOM.label({},"Sketch: "),cljs.core.apply.call(null,om.dom.select,{"onChange": ((function (sketches,value,___$1){
return (function (p1__9571_SHARP_){return om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"sketch-name","sketch-name",507643804),p1__9571_SHARP_.target.value);
});})(sketches,value,___$1))
, "value": value},cljs.core.map.call(null,((function (sketches,value,___$1){
return (function (s){return om.dom.option.call(null,{"value": cljs.core.name.call(null,s)},cljs.core.name.call(null,s));
});})(sketches,value,___$1))
,cljs.core.set.call(null,cljs.core.conj.call(null,sketches,value)))));
});
libre.core.t9575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9577){var self__ = this;
var _9577__$1 = this;return self__.meta9576;
});
libre.core.t9575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9577,meta9576__$1){var self__ = this;
var _9577__$1 = this;return (new libre.core.t9575(self__.owner,self__.app,self__.sketchbook_selector,meta9576__$1));
});
libre.core.__GT_t9575 = (function __GT_t9575(owner__$1,app__$1,sketchbook_selector__$1,meta9576){return (new libre.core.t9575(owner__$1,app__$1,sketchbook_selector__$1,meta9576));
});
}
return (new libre.core.t9575(owner,app,sketchbook_selector,null));
});
libre.core.main = (function main(){libre.core.info.call(null,"Calling main.");
return om.core.root.call(null,(function (app,owner){if(typeof libre.core.t9581 !== 'undefined')
{} else
{
/**
* @constructor
*/
libre.core.t9581 = (function (owner,app,main,meta9582){
this.owner = owner;
this.app = app;
this.main = main;
this.meta9582 = meta9582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
libre.core.t9581.cljs$lang$type = true;
libre.core.t9581.cljs$lang$ctorStr = "libre.core/t9581";
libre.core.t9581.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"libre.core/t9581");
});
libre.core.t9581.prototype.om$core$IRender$ = true;
libre.core.t9581.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "sketch-display"},om.core.build.call(null,libre.core.sketchbook_selector,self__.app),om.core.build.call(null,libre.core.sketch_display,libre.sketchbook.get_sketch.call(null,new cljs.core.Keyword(null,"sketch-name","sketch-name",507643804).cljs$core$IFn$_invoke$arity$1(om.core.get_props.call(null,self__.owner)))));
});
libre.core.t9581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9583){var self__ = this;
var _9583__$1 = this;return self__.meta9582;
});
libre.core.t9581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9583,meta9582__$1){var self__ = this;
var _9583__$1 = this;return (new libre.core.t9581(self__.owner,self__.app,self__.main,meta9582__$1));
});
libre.core.__GT_t9581 = (function __GT_t9581(owner__$1,app__$1,main__$1,meta9582){return (new libre.core.t9581(owner__$1,app__$1,main__$1,meta9582));
});
}
return (new libre.core.t9581(owner,app,main,null));
}),libre.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementsByTagName("body").item((0))], null));
});

//# sourceMappingURL=core.js.map