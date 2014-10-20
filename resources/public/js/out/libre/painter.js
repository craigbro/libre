// Compiled by ClojureScript 0.0-2371
goog.provide('libre.painter');
goog.require('cljs.core');
libre.painter.IPaintable = (function (){var obj9585 = {};return obj9585;
})();
libre.painter.paint = (function paint(this$,context){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.libre$painter$IPaintable$paint$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.libre$painter$IPaintable$paint$arity$2(this$,context);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (libre.painter.paint[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (libre.painter.paint["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPaintable.paint",this$);
}
}
})().call(null,this$,context);
}
});
libre.painter.z_order = (function z_order(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.libre$painter$IPaintable$z_order$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.libre$painter$IPaintable$z_order$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (libre.painter.z_order[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (libre.painter.z_order["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPaintable.z-order",this$);
}
}
})().call(null,this$);
}
});
libre.painter.IPosition = (function (){var obj9587 = {};return obj9587;
})();
libre.painter.position = (function position(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.libre$painter$IPosition$position$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.libre$painter$IPosition$position$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (libre.painter.position[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (libre.painter.position["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPosition.position",this$);
}
}
})().call(null,this$);
}
});
libre.painter.x = (function x(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.libre$painter$IPosition$x$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.libre$painter$IPosition$x$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (libre.painter.x[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (libre.painter.x["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPosition.x",this$);
}
}
})().call(null,this$);
}
});
libre.painter.y = (function y(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.libre$painter$IPosition$y$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.libre$painter$IPosition$y$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (libre.painter.y[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (libre.painter.y["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPosition.y",this$);
}
}
})().call(null,this$);
}
});
libre.painter.z = (function z(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.libre$painter$IPosition$z$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.libre$painter$IPosition$z$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (libre.painter.z[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (libre.painter.z["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPosition.z",this$);
}
}
})().call(null,this$);
}
});
Array.prototype.libre$painter$IPosition$ = true;
Array.prototype.libre$painter$IPosition$position$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.take.call(null,(2),cljs.core.js__GT_clj.call(null,this$__$1));
});
Array.prototype.libre$painter$IPosition$x$arity$1 = (function (this$){var this$__$1 = this;return (this$__$1[(0)]);
});
Array.prototype.libre$painter$IPosition$y$arity$1 = (function (this$){var this$__$1 = this;return (this$__$1[(1)]);
});
Array.prototype.libre$painter$IPosition$z$arity$1 = (function (this$){var this$__$1 = this;return (this$__$1[(2)]);
});
cljs.core.PersistentArrayMap.prototype.libre$painter$IPosition$ = true;
cljs.core.PersistentArrayMap.prototype.libre$painter$IPosition$position$arity$1 = (function (this$){var this$__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(this$__$1)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(this$__$1)),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(this$__$1));
});
cljs.core.PersistentArrayMap.prototype.libre$painter$IPosition$x$arity$1 = (function (this$){var this$__$1 = this;return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(this$__$1);
});
cljs.core.PersistentArrayMap.prototype.libre$painter$IPosition$y$arity$1 = (function (this$){var this$__$1 = this;return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(this$__$1);
});
cljs.core.PersistentArrayMap.prototype.libre$painter$IPosition$z$arity$1 = (function (this$){var this$__$1 = this;return new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(this$__$1);
});
cljs.core.PersistentVector.prototype.libre$painter$IPosition$ = true;
cljs.core.PersistentVector.prototype.libre$painter$IPosition$position$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.take.call(null,(3),this$__$1);
});
cljs.core.PersistentVector.prototype.libre$painter$IPosition$x$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.first.call(null,this$__$1);
});
cljs.core.PersistentVector.prototype.libre$painter$IPosition$y$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.second.call(null,this$__$1);
});
cljs.core.PersistentVector.prototype.libre$painter$IPosition$z$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.nth.call(null,this$__$1,(2));
});
libre.painter.ICanvasContextOps = (function (){var obj9589 = {};return obj9589;
})();
libre.painter.preserving_state = (function preserving_state(ctx,f){if((function (){var and__3628__auto__ = ctx;if(and__3628__auto__)
{return ctx.libre$painter$ICanvasContextOps$preserving_state$arity$2;
} else
{return and__3628__auto__;
}
})())
{return ctx.libre$painter$ICanvasContextOps$preserving_state$arity$2(ctx,f);
} else
{var x__4277__auto__ = (((ctx == null))?null:ctx);return (function (){var or__3640__auto__ = (libre.painter.preserving_state[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (libre.painter.preserving_state["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICanvasContextOps.preserving-state",ctx);
}
}
})().call(null,ctx,f);
}
});
libre.painter.apply_style = (function apply_style(this$,style){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.libre$painter$ICanvasContextOps$apply_style$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.libre$painter$ICanvasContextOps$apply_style$arity$2(this$,style);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (libre.painter.apply_style[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (libre.painter.apply_style["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICanvasContextOps.apply-style",this$);
}
}
})().call(null,this$,style);
}
});
libre.painter.with_style = (function with_style(this$,style,f){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.libre$painter$ICanvasContextOps$with_style$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.libre$painter$ICanvasContextOps$with_style$arity$3(this$,style,f);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (libre.painter.with_style[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (libre.painter.with_style["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICanvasContextOps.with-style",this$);
}
}
})().call(null,this$,style,f);
}
});
libre.painter.with_path = (function with_path(this$,f){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.libre$painter$ICanvasContextOps$with_path$arity$2;
} else
{return and__3628__auto__;
}
})())
{return this$.libre$painter$ICanvasContextOps$with_path$arity$2(this$,f);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (libre.painter.with_path[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (libre.painter.with_path["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICanvasContextOps.with-path",this$);
}
}
})().call(null,this$,f);
}
});
CanvasRenderingContext2D.prototype.libre$painter$ICanvasContextOps$ = true;
CanvasRenderingContext2D.prototype.libre$painter$ICanvasContextOps$apply_style$arity$2 = (function (ctx,style){var ctx__$1 = this;var temp__4126__auto___9590 = new cljs.core.Keyword(null,"fill-style","fill-style",-1384418633).cljs$core$IFn$_invoke$arity$1(style);if(cljs.core.truth_(temp__4126__auto___9590))
{var v_9591 = temp__4126__auto___9590;ctx__$1.fillStyle = v_9591;
} else
{}
var temp__4126__auto___9592 = new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146).cljs$core$IFn$_invoke$arity$1(style);if(cljs.core.truth_(temp__4126__auto___9592))
{var v_9593 = temp__4126__auto___9592;ctx__$1.strokeStyle = v_9593;
} else
{}
var temp__4126__auto___9594 = new cljs.core.Keyword(null,"global-alpha","global-alpha",90691754).cljs$core$IFn$_invoke$arity$1(style);if(cljs.core.truth_(temp__4126__auto___9594))
{var v_9595 = temp__4126__auto___9594;ctx__$1.globalAlpha = v_9595;
} else
{}
var temp__4126__auto___9596 = new cljs.core.Keyword(null,"line-width","line-width",-906934988).cljs$core$IFn$_invoke$arity$1(style);if(cljs.core.truth_(temp__4126__auto___9596))
{var v_9597 = temp__4126__auto___9596;ctx__$1.lineWidth = v_9597;
} else
{}
var temp__4126__auto___9598 = new cljs.core.Keyword(null,"line-cap","line-cap",448406012).cljs$core$IFn$_invoke$arity$1(style);if(cljs.core.truth_(temp__4126__auto___9598))
{var v_9599 = temp__4126__auto___9598;ctx__$1.lineCap = v_9599;
} else
{}
var temp__4126__auto___9600 = new cljs.core.Keyword(null,"line-join","line-join",-1560936092).cljs$core$IFn$_invoke$arity$1(style);if(cljs.core.truth_(temp__4126__auto___9600))
{var v_9601 = temp__4126__auto___9600;ctx__$1.lineJoin = v_9601;
} else
{}
var temp__4126__auto___9602 = new cljs.core.Keyword(null,"miter-limit","miter-limit",-1242625357).cljs$core$IFn$_invoke$arity$1(style);if(cljs.core.truth_(temp__4126__auto___9602))
{var v_9603 = temp__4126__auto___9602;ctx__$1.miterLimit = v_9603;
} else
{}
var temp__4126__auto___9604 = new cljs.core.Keyword(null,"shadow-offset-x","shadow-offset-x",-902722299).cljs$core$IFn$_invoke$arity$1(style);if(cljs.core.truth_(temp__4126__auto___9604))
{var v_9605 = temp__4126__auto___9604;ctx__$1.shadowOffsetX = v_9605;
} else
{}
var temp__4126__auto___9606 = new cljs.core.Keyword(null,"shadow-offset-y","shadow-offset-y",1244000612).cljs$core$IFn$_invoke$arity$1(style);if(cljs.core.truth_(temp__4126__auto___9606))
{var v_9607 = temp__4126__auto___9606;ctx__$1.shadowOffsetY = v_9607;
} else
{}
var temp__4126__auto___9608 = new cljs.core.Keyword(null,"shadow-blur","shadow-blur",1929293221).cljs$core$IFn$_invoke$arity$1(style);if(cljs.core.truth_(temp__4126__auto___9608))
{var v_9609 = temp__4126__auto___9608;ctx__$1.shadowBlur = v_9609;
} else
{}
var temp__4126__auto___9610 = new cljs.core.Keyword(null,"shadow-color","shadow-color",-1868753054).cljs$core$IFn$_invoke$arity$1(style);if(cljs.core.truth_(temp__4126__auto___9610))
{var v_9611 = temp__4126__auto___9610;ctx__$1.shadowCOlor = v_9611;
} else
{}
var temp__4126__auto___9612 = new cljs.core.Keyword(null,"global-composite-op","global-composite-op",-1854516398).cljs$core$IFn$_invoke$arity$1(style);if(cljs.core.truth_(temp__4126__auto___9612))
{var v_9613 = temp__4126__auto___9612;ctx__$1.globalCompositeOperation = v_9613;
} else
{}
var temp__4126__auto___9614 = new cljs.core.Keyword(null,"font","font",-1506159249).cljs$core$IFn$_invoke$arity$1(style);if(cljs.core.truth_(temp__4126__auto___9614))
{var v_9615 = temp__4126__auto___9614;ctx__$1.font = v_9615;
} else
{}
var temp__4126__auto___9616 = new cljs.core.Keyword(null,"text-align","text-align",1786091845).cljs$core$IFn$_invoke$arity$1(style);if(cljs.core.truth_(temp__4126__auto___9616))
{var v_9617 = temp__4126__auto___9616;ctx__$1.textAlign = v_9617;
} else
{}
var temp__4126__auto__ = new cljs.core.Keyword(null,"text-baseline","text-baseline",-1979590273).cljs$core$IFn$_invoke$arity$1(style);if(cljs.core.truth_(temp__4126__auto__))
{var v = temp__4126__auto__;return ctx__$1.textBaseline = v;
} else
{return null;
}
});
CanvasRenderingContext2D.prototype.libre$painter$ICanvasContextOps$preserving_state$arity$2 = (function (ctx,f){var ctx__$1 = this;ctx__$1.save();
try{return f.call(null);
}finally {ctx__$1.restore();
}});
CanvasRenderingContext2D.prototype.libre$painter$ICanvasContextOps$with_style$arity$3 = (function (ctx,style,f){var ctx__$1 = this;return libre.painter.preserving_state.call(null,ctx__$1,((function (ctx__$1){
return (function (){libre.painter.apply_style.call(null,ctx__$1,style);
return f.call(null);
});})(ctx__$1))
);
});
CanvasRenderingContext2D.prototype.libre$painter$ICanvasContextOps$with_path$arity$2 = (function (ctx,f){var ctx__$1 = this;ctx__$1.beginPath();
f.call(null);
return ctx__$1.closePath();
});

/**
* @constructor
*/
libre.painter.Circle = (function (center,radius,style){
this.center = center;
this.radius = radius;
this.style = style;
})
libre.painter.Circle.cljs$lang$type = true;
libre.painter.Circle.cljs$lang$ctorStr = "libre.painter/Circle";
libre.painter.Circle.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"libre.painter/Circle");
});
libre.painter.Circle.prototype.libre$painter$IPaintable$ = true;
libre.painter.Circle.prototype.libre$painter$IPaintable$z_order$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3640__auto__ = libre.painter.z.call(null,self__.center);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return (0);
}
});
libre.painter.Circle.prototype.libre$painter$IPaintable$paint$arity$2 = (function (_,ctx){var self__ = this;
var ___$1 = this;libre.painter.with_path.call(null,ctx,((function (___$1){
return (function (){return ctx.arc(libre.painter.x.call(null,self__.center),libre.painter.y.call(null,self__.center),self__.radius,(0),(Math.PI * (2)),true);
});})(___$1))
);
libre.painter.with_style.call(null,ctx,self__.style,((function (___$1){
return (function (){if(cljs.core.truth_((function (){var or__3640__auto__ = new cljs.core.Keyword(null,"filled","filled",1908725116).cljs$core$IFn$_invoke$arity$1(self__.style);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return new cljs.core.Keyword(null,"fill-style","fill-style",-1384418633).cljs$core$IFn$_invoke$arity$1(self__.style);
}
})()))
{ctx.fill();
} else
{}
return ctx.stroke();
});})(___$1))
);
return ctx;
});
libre.painter.__GT_Circle = (function __GT_Circle(center,radius,style){return (new libre.painter.Circle(center,radius,style));
});

/**
* @constructor
*/
libre.painter.Rect = (function (pos,width,height,style){
this.pos = pos;
this.width = width;
this.height = height;
this.style = style;
})
libre.painter.Rect.cljs$lang$type = true;
libre.painter.Rect.cljs$lang$ctorStr = "libre.painter/Rect";
libre.painter.Rect.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"libre.painter/Rect");
});
libre.painter.Rect.prototype.libre$painter$IPaintable$ = true;
libre.painter.Rect.prototype.libre$painter$IPaintable$z_order$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3640__auto__ = libre.painter.z.call(null,self__.pos);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return (0);
}
});
libre.painter.Rect.prototype.libre$painter$IPaintable$paint$arity$2 = (function (_,ctx){var self__ = this;
var ___$1 = this;libre.painter.with_path.call(null,ctx,((function (___$1){
return (function (){return ctx.rect(libre.painter.x.call(null,self__.pos),libre.painter.y.call(null,self__.pos),self__.width,self__.height);
});})(___$1))
);
libre.painter.with_style.call(null,ctx,self__.style,((function (___$1){
return (function (){if(cljs.core.truth_((function (){var or__3640__auto__ = new cljs.core.Keyword(null,"filled","filled",1908725116).cljs$core$IFn$_invoke$arity$1(self__.style);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return new cljs.core.Keyword(null,"fill-style","fill-style",-1384418633).cljs$core$IFn$_invoke$arity$1(self__.style);
}
})()))
{ctx.fill();
} else
{}
return ctx.stroke();
});})(___$1))
);
return ctx;
});
libre.painter.__GT_Rect = (function __GT_Rect(pos,width,height,style){return (new libre.painter.Rect(pos,width,height,style));
});

/**
* @constructor
*/
libre.painter.Ellipse = (function (center,w,h,style){
this.center = center;
this.w = w;
this.h = h;
this.style = style;
})
libre.painter.Ellipse.cljs$lang$type = true;
libre.painter.Ellipse.cljs$lang$ctorStr = "libre.painter/Ellipse";
libre.painter.Ellipse.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"libre.painter/Ellipse");
});
libre.painter.Ellipse.prototype.libre$painter$IPaintable$ = true;
libre.painter.Ellipse.prototype.libre$painter$IPaintable$z_order$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3640__auto__ = libre.painter.z.call(null,self__.center);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return (0);
}
});
libre.painter.Ellipse.prototype.libre$painter$IPaintable$paint$arity$2 = (function (_,ctx){var self__ = this;
var ___$1 = this;libre.painter.with_path.call(null,ctx,((function (___$1){
return (function (){var cx = libre.painter.x.call(null,self__.center);var cy = libre.painter.y.call(null,self__.center);ctx.moveTo(cx,(cy - (self__.h / (2))));
ctx.bezierCurveTo((cx + (self__.w / (2))),(cy - (self__.h / (2))),(cx + (self__.w / (2))),(cy + (self__.h / (2))),cx,(cy + (self__.h / (2))));
return ctx.bezierCurveTo((cx - (self__.w / (2))),(cy + (self__.h / (2))),(cx - (self__.w / (2))),(cy - (self__.h / (2))),cx,(cy - (self__.h / (2))));
});})(___$1))
);
libre.painter.with_style.call(null,ctx,self__.style,((function (___$1){
return (function (){if(cljs.core.truth_((function (){var or__3640__auto__ = new cljs.core.Keyword(null,"filled","filled",1908725116).cljs$core$IFn$_invoke$arity$1(self__.style);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return new cljs.core.Keyword(null,"fill-style","fill-style",-1384418633).cljs$core$IFn$_invoke$arity$1(self__.style);
}
})()))
{ctx.fill();
} else
{}
return ctx.stroke();
});})(___$1))
);
return ctx;
});
libre.painter.__GT_Ellipse = (function __GT_Ellipse(center,w,h,style){return (new libre.painter.Ellipse(center,w,h,style));
});
libre.painter.test = (function test(){var ctx = document.getElementById("tree").getContext("2d");libre.painter.paint.call(null,(new libre.painter.Circle(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null),(80),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-style","fill-style",-1384418633),"#666",new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146),"#000"], null))),ctx);
return libre.painter.paint.call(null,(new libre.painter.Rect(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null),(80),(80),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-style","fill-style",-1384418633),"#666",new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146),"#000"], null))),ctx);
});

//# sourceMappingURL=painter.js.map