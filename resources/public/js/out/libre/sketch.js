// Compiled by ClojureScript 0.0-2371
goog.provide('libre.sketch');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
libre.sketch._STAR_processing_STAR_ = null;
libre.sketch._add_sketch_handler = (function _add_sketch_handler(p,s,k,v){var temp__4126__auto__ = cljs.core.get.call(null,s,k);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;return (p[v] = ((function (f,temp__4126__auto__){
return (function (){var _STAR_processing_STAR_9619 = libre.sketch._STAR_processing_STAR_;try{libre.sketch._STAR_processing_STAR_ = p;
return f.call(null);
}finally {libre.sketch._STAR_processing_STAR_ = _STAR_processing_STAR_9619;
}});})(f,temp__4126__auto__))
);
} else
{return null;
}
});
libre.sketch.sketch_init = (function sketch_init(sketch){return (function (processing){processing.sketch = sketch;
processing.sketch_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
processing.sketch_data_map = cljs.core.PersistentArrayMap.EMPTY;
libre.sketch._add_sketch_handler.call(null,processing,sketch,new cljs.core.Keyword(null,"draw","draw",1358331674),"draw");
libre.sketch._add_sketch_handler.call(null,processing,sketch,new cljs.core.Keyword(null,"setup","setup",1987730512),"setup");
libre.sketch._add_sketch_handler.call(null,processing,sketch,new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),"mouseClicked");
libre.sketch._add_sketch_handler.call(null,processing,sketch,new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),"mouseDragged");
libre.sketch._add_sketch_handler.call(null,processing,sketch,new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),"mouseMoved");
libre.sketch._add_sketch_handler.call(null,processing,sketch,new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),"mouseMoved");
libre.sketch._add_sketch_handler.call(null,processing,sketch,new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964),"mouseOut");
libre.sketch._add_sketch_handler.call(null,processing,sketch,new cljs.core.Keyword(null,"mouse-over","mouse-over",-882913683),"mouseOver");
libre.sketch._add_sketch_handler.call(null,processing,sketch,new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),"mousePressed");
libre.sketch._add_sketch_handler.call(null,processing,sketch,new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),"mouseReleased");
libre.sketch._add_sketch_handler.call(null,processing,sketch,new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),"keyPressed");
libre.sketch._add_sketch_handler.call(null,processing,sketch,new cljs.core.Keyword(null,"key-released","key-released",215919828),"keyReleased");
libre.sketch._add_sketch_handler.call(null,processing,sketch,new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),"keyTyped");
return processing;
});
});
libre.sketch._lookup_constant = (function _lookup_constant(c){var k = clojure.string.upper_case.call(null,cljs.core.name.call(null,c));return (libre.sketch._STAR_processing_STAR_.PConstants[k]);
});
libre.sketch.PI = Math.PI;
libre.sketch.HALF_PI = (libre.sketch.PI / (2));
libre.sketch.QUARTER_PI = (libre.sketch.PI / (4));
libre.sketch.TWO_PI = (libre.sketch.PI * (2));
libre.sketch.arc = (function() {
var arc = null;
var arc__3 = (function (x,y,d){return libre.sketch._STAR_processing_STAR_.arc(x,y,d,d,(0),libre.sketch.TWO_PI);
});
var arc__6 = (function (x,y,w,h,start,stop){return libre.sketch._STAR_processing_STAR_.arc(x,y,w,h,start,stop);
});
arc = function(x,y,w,h,start,stop){
switch(arguments.length){
case 3:
return arc__3.call(this,x,y,w);
case 6:
return arc__6.call(this,x,y,w,h,start,stop);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
arc.cljs$core$IFn$_invoke$arity$3 = arc__3;
arc.cljs$core$IFn$_invoke$arity$6 = arc__6;
return arc;
})()
;
libre.sketch.ellipse = (function() {
var ellipse = null;
var ellipse__3 = (function (x,y,d){return libre.sketch._STAR_processing_STAR_.ellipse(x,y,d,d);
});
var ellipse__4 = (function (x,y,w,h){return libre.sketch._STAR_processing_STAR_.ellipse(x,y,w,h);
});
ellipse = function(x,y,w,h){
switch(arguments.length){
case 3:
return ellipse__3.call(this,x,y,w);
case 4:
return ellipse__4.call(this,x,y,w,h);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ellipse.cljs$core$IFn$_invoke$arity$3 = ellipse__3;
ellipse.cljs$core$IFn$_invoke$arity$4 = ellipse__4;
return ellipse;
})()
;
libre.sketch._STAR_ellipse_modes_STAR_ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"corner","corner",1296717125),(0),new cljs.core.Keyword(null,"corners","corners",-137817903),(1),new cljs.core.Keyword(null,"radius","radius",-2073122258),(2),new cljs.core.Keyword(null,"center","center",-748944368),(3)], null);
/**
* Set the ellipse drawing mode, to one of the following values:
* :corner
* :corners
* :radius
* :center
*/
libre.sketch.ellipse_mode = (function ellipse_mode(mode){return libre.sketch._STAR_processing_STAR_.ellipseMode(cljs.core.get.call(null,libre.sketch._STAR_ellipse_modes_STAR_,mode));
});
libre.sketch.line = (function() {
var line = null;
var line__4 = (function (x1,y1,x2,y2){return libre.sketch._STAR_processing_STAR_.line(x1,y1,x2,y2);
});
var line__6 = (function (x1,y1,z1,x2,y2,z2){return libre.sketch._STAR_processing_STAR_.line(x1,y1,z1,x2,y2,z2);
});
line = function(x1,y1,z1,x2,y2,z2){
switch(arguments.length){
case 4:
return line__4.call(this,x1,y1,z1,x2);
case 6:
return line__6.call(this,x1,y1,z1,x2,y2,z2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
line.cljs$core$IFn$_invoke$arity$4 = line__4;
line.cljs$core$IFn$_invoke$arity$6 = line__6;
return line;
})()
;
libre.sketch.point = (function() {
var point = null;
var point__2 = (function (x,y){return libre.sketch._STAR_processing_STAR_.point(x,y);
});
var point__3 = (function (x,y,z){return libre.sketch._STAR_processing_STAR_.point(x,y,z);
});
point = function(x,y,z){
switch(arguments.length){
case 2:
return point__2.call(this,x,y);
case 3:
return point__3.call(this,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
point.cljs$core$IFn$_invoke$arity$2 = point__2;
point.cljs$core$IFn$_invoke$arity$3 = point__3;
return point;
})()
;
libre.sketch.quad = (function quad(x1,y1,x2,y2,x3,y3){return libre.sketch._STAR_processing_STAR_.quad(x1,y1,x2,y2,x3,y3);
});
libre.sketch.rect = (function() {
var rect = null;
var rect__3 = (function (x,y,width){return libre.sketch._STAR_processing_STAR_.rect(x,y,width,width);
});
var rect__4 = (function (x,y,width,height){return libre.sketch._STAR_processing_STAR_.rect(x,y,width,height);
});
var rect__5 = (function (x,y,width,height,radius){return libre.sketch._STAR_processing_STAR_.rect(x,y,width,height,radius);
});
var rect__8 = (function (x,y,width,height,tlradius,trradius,blradius,brradius){return libre.sketch._STAR_processing_STAR_.rect(x,y,width,height,tlradius,trradius,blradius,brradius);
});
rect = function(x,y,width,height,tlradius,trradius,blradius,brradius){
switch(arguments.length){
case 3:
return rect__3.call(this,x,y,width);
case 4:
return rect__4.call(this,x,y,width,height);
case 5:
return rect__5.call(this,x,y,width,height,tlradius);
case 8:
return rect__8.call(this,x,y,width,height,tlradius,trradius,blradius,brradius);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rect.cljs$core$IFn$_invoke$arity$3 = rect__3;
rect.cljs$core$IFn$_invoke$arity$4 = rect__4;
rect.cljs$core$IFn$_invoke$arity$5 = rect__5;
rect.cljs$core$IFn$_invoke$arity$8 = rect__8;
return rect;
})()
;
libre.sketch._STAR_rect_modes_STAR_ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"corner","corner",1296717125),(0),new cljs.core.Keyword(null,"corners","corners",-137817903),(1),new cljs.core.Keyword(null,"radius","radius",-2073122258),(2),new cljs.core.Keyword(null,"center","center",-748944368),(3)], null);
libre.sketch.rect_mode = (function rect_mode(mode){return libre.sketch._STAR_processing_STAR_.rectMode(cljs.core.get.call(null,libre.sketch._STAR_rect_modes_STAR_,mode));
});
libre.sketch.triangle = (function triangle(x1,y1,x2,y2,x3,y3){return libre.sketch._STAR_processing_STAR_.triangle(x1,y1,x2,y2,x3,y3);
});
libre.sketch.bezier = (function() {
var bezier = null;
var bezier__8 = (function (x1,y1,cx1,cy1,cx2,cy2,x2,y2){return libre.sketch._STAR_processing_STAR_.bezier(x1,y1,cx1,cy1,cx2,cy2,x2,y2);
});
var bezier__12 = (function (x1,y1,z1,cx1,cy1,cz1,cx2,cy2,cz2,x2,y2,z2){return libre.sketch._STAR_processing_STAR_.bezier(x1,y1,z1,cx1,cy1,cz1,cx2,cy2,cz2,x2,y2,z2);
});
bezier = function(x1,y1,z1,cx1,cy1,cz1,cx2,cy2,cz2,x2,y2,z2){
switch(arguments.length){
case 8:
return bezier__8.call(this,x1,y1,z1,cx1,cy1,cz1,cx2,cy2);
case 12:
return bezier__12.call(this,x1,y1,z1,cx1,cy1,cz1,cx2,cy2,cz2,x2,y2,z2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bezier.cljs$core$IFn$_invoke$arity$8 = bezier__8;
bezier.cljs$core$IFn$_invoke$arity$12 = bezier__12;
return bezier;
})()
;
libre.sketch.bezier_detail = (function bezier_detail(detail){return libre.sketch._STAR_processing_STAR_.bezier_detail(detail);
});
libre.sketch.bezier_point = (function bezier_point(a,b,c,d,t){return libre.sketch._STAR_processing_STAR_.bezier_point(a,b,c,d,t);
});
libre.sketch.bezier_tangent = (function bezier_tangent(a,b,c,d,t){return libre.sketch._STAR_processing_STAR_.bezier_tangent(a,b,c,d,t);
});
libre.sketch.curve = (function() {
var curve = null;
var curve__8 = (function (x1,y1,x2,y2,x3,y3,x4,y4){return libre.sketch._STAR_processing_STAR_.curve(x1,y1,x2,y2,x3,y3,x4,y4);
});
var curve__12 = (function (x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4){return libre.sketch._STAR_processing_STAR_.curve(x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4);
});
curve = function(x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4){
switch(arguments.length){
case 8:
return curve__8.call(this,x1,y1,z1,x2,y2,z2,x3,y3);
case 12:
return curve__12.call(this,x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
curve.cljs$core$IFn$_invoke$arity$8 = curve__8;
curve.cljs$core$IFn$_invoke$arity$12 = curve__12;
return curve;
})()
;
libre.sketch.curve_detail = (function curve_detail(detail){return libre.sketch._STAR_processing_STAR_.curve_detail(detail);
});
libre.sketch.curve_point = (function curve_point(a,b,c,d,t){return libre.sketch._STAR_processing_STAR_.curve_point(a,b,c,d,t);
});
libre.sketch.curve_tangent = (function curve_tangent(a,b,c,d,t){return libre.sketch._STAR_processing_STAR_.curve_tangent(a,b,c,d,t);
});
libre.sketch.curve_tightness = (function curve_tightness(squishy){return libre.sketch._STAR_processing_STAR_.curve_tightness(squishy);
});
libre.sketch._STAR_color_modes_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rgb","rgb",1432123467),(1),new cljs.core.Keyword(null,"hsb","hsb",-753472031),(3)], null);
libre.sketch.color_mode = (function() {
var color_mode = null;
var color_mode__1 = (function (mode){return libre.sketch._STAR_processing_STAR_.colorMode(cljs.core.get.call(null,libre.sketch._STAR_color_modes_STAR_,mode));
});
var color_mode__2 = (function (mode,range){return libre.sketch._STAR_processing_STAR_.colorMode(cljs.core.get.call(null,libre.sketch._STAR_color_modes_STAR_,mode),range);
});
var color_mode__4 = (function (mode,range1,range2,range3){return libre.sketch._STAR_processing_STAR_.colorMode(cljs.core.get.call(null,libre.sketch._STAR_color_modes_STAR_,mode),range1,range2,range3);
});
var color_mode__5 = (function (mode,range1,range2,range3,range4){return libre.sketch._STAR_processing_STAR_.colorMode(cljs.core.get.call(null,libre.sketch._STAR_color_modes_STAR_,mode),range1,range2,range3,range4);
});
color_mode = function(mode,range1,range2,range3,range4){
switch(arguments.length){
case 1:
return color_mode__1.call(this,mode);
case 2:
return color_mode__2.call(this,mode,range1);
case 4:
return color_mode__4.call(this,mode,range1,range2,range3);
case 5:
return color_mode__5.call(this,mode,range1,range2,range3,range4);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_mode.cljs$core$IFn$_invoke$arity$1 = color_mode__1;
color_mode.cljs$core$IFn$_invoke$arity$2 = color_mode__2;
color_mode.cljs$core$IFn$_invoke$arity$4 = color_mode__4;
color_mode.cljs$core$IFn$_invoke$arity$5 = color_mode__5;
return color_mode;
})()
;
libre.sketch.color = (function() {
var color = null;
var color__1 = (function (arg){return libre.sketch._STAR_processing_STAR_.color(arg);
});
var color__2 = (function (arg1,arg2){return libre.sketch._STAR_processing_STAR_.color(arg1,arg2);
});
var color__3 = (function (arg1,arg2,arg3){return libre.sketch._STAR_processing_STAR_.color(arg1,arg2,arg3);
});
var color__4 = (function (arg1,arg2,arg3,arg4){return libre.sketch._STAR_processing_STAR_.color(arg1,arg2,arg3,arg4);
});
color = function(arg1,arg2,arg3,arg4){
switch(arguments.length){
case 1:
return color__1.call(this,arg1);
case 2:
return color__2.call(this,arg1,arg2);
case 3:
return color__3.call(this,arg1,arg2,arg3);
case 4:
return color__4.call(this,arg1,arg2,arg3,arg4);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color.cljs$core$IFn$_invoke$arity$1 = color__1;
color.cljs$core$IFn$_invoke$arity$2 = color__2;
color.cljs$core$IFn$_invoke$arity$3 = color__3;
color.cljs$core$IFn$_invoke$arity$4 = color__4;
return color;
})()
;
libre.sketch.alpha = (function alpha(c){return libre.sketch._STAR_processing_STAR_.alpha(c);
});
libre.sketch.blend_color = (function blend_color(c1,c2,mode){return libre.sketch._STAR_processing_STAR_.blendColor(c1,c2,libre.sketch._lookup_constant.call(null,mode));
});
libre.sketch.blue = (function blue(c){return libre.sketch._STAR_processing_STAR_.blue(c);
});
libre.sketch.brightness = (function brightness(c){return libre.sketch._STAR_processing_STAR_.brightness(c);
});
libre.sketch.green = (function green(c){return libre.sketch._STAR_processing_STAR_.green(c);
});
libre.sketch.hue = (function hue(c){return libre.sketch._STAR_processing_STAR_.hue(c);
});
libre.sketch.lerp_color = (function lerp_color(c1,c2,amt){return libre.sketch._STAR_processing_STAR_.lerpColor(c1,c2,amt);
});
libre.sketch.red = (function red(c){return libre.sketch._STAR_processing_STAR_.red(c);
});
libre.sketch.saturation = (function saturation(c){return libre.sketch._STAR_processing_STAR_.saturation(c);
});
libre.sketch.preload_image = (function preload_image(imagename){return libre.sketch._STAR_processing_STAR_.externals.sketch.imageCatch().add(imagename);
});
libre.sketch.load_image = (function load_image(imagename){return libre.sketch._STAR_processing_STAR_.loadImage(imagename);
});
libre.sketch.request_image = (function() {
var request_image = null;
var request_image__1 = (function (filename){return libre.sketch._STAR_processing_STAR_.requestImage(filename);
});
var request_image__2 = (function (filename,ext){return libre.sketch._STAR_processing_STAR_.requestImage(filename,ext);
});
request_image = function(filename,ext){
switch(arguments.length){
case 1:
return request_image__1.call(this,filename);
case 2:
return request_image__2.call(this,filename,ext);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
request_image.cljs$core$IFn$_invoke$arity$1 = request_image__1;
request_image.cljs$core$IFn$_invoke$arity$2 = request_image__2;
return request_image;
})()
;
libre.sketch.create_image = (function create_image(width,height,format){return libre.sketch._STAR_processing_STAR_.create_image(width,height,libre.sketch._lookup_constant.call(null,format));
});
libre.sketch.image = (function() {
var image = null;
var image__3 = (function (img,x,y){return libre.sketch._STAR_processing_STAR_.image(img,x,y);
});
var image__5 = (function (img,x,y,width,height){return libre.sketch._STAR_processing_STAR_.image(img,x,y,width,height);
});
image = function(img,x,y,width,height){
switch(arguments.length){
case 3:
return image__3.call(this,img,x,y);
case 5:
return image__5.call(this,img,x,y,width,height);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image.cljs$core$IFn$_invoke$arity$3 = image__3;
image.cljs$core$IFn$_invoke$arity$5 = image__5;
return image;
})()
;
libre.sketch.image_mode = (function image_mode(mode){return libre.sketch._STAR_processing_STAR_.imageMode(libre.sketch._lookup_constant.call(null,mode));
});
libre.sketch.tint = (function() {
var tint = null;
var tint__1 = (function (arg){return libre.sketch._STAR_processing_STAR_.tint(arg);
});
var tint__2 = (function (arg1,arg2){return libre.sketch._STAR_processing_STAR_.tint(arg1,arg2);
});
var tint__3 = (function (arg1,arg2,arg3){return libre.sketch._STAR_processing_STAR_.tint(arg1,arg2,arg3);
});
var tint__4 = (function (arg1,arg2,arg3,arg4){return libre.sketch._STAR_processing_STAR_.tint(arg1,arg2,arg3,arg4);
});
tint = function(arg1,arg2,arg3,arg4){
switch(arguments.length){
case 1:
return tint__1.call(this,arg1);
case 2:
return tint__2.call(this,arg1,arg2);
case 3:
return tint__3.call(this,arg1,arg2,arg3);
case 4:
return tint__4.call(this,arg1,arg2,arg3,arg4);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tint.cljs$core$IFn$_invoke$arity$1 = tint__1;
tint.cljs$core$IFn$_invoke$arity$2 = tint__2;
tint.cljs$core$IFn$_invoke$arity$3 = tint__3;
tint.cljs$core$IFn$_invoke$arity$4 = tint__4;
return tint;
})()
;
libre.sketch.no_tint = (function no_tint(){return libre.sketch._STAR_processing_STAR_.noTint();
});
libre.sketch.pixel_blend = (function() {
var pixel_blend = null;
var pixel_blend__9 = (function (x,y,width,height,dx,dy,dwidth,dheight,mode){return libre.sketch._STAR_processing_STAR_.blend(x,y,width,height,dx,dy,dwidth,dheight,libre.sketch._lookup_constant.call(null,mode));
});
var pixel_blend__10 = (function (imgsrc,x,y,width,height,dx,dy,dwidth,dheight,mode){return libre.sketch._STAR_processing_STAR_.blend(imgsrc,x,y,width,height,dx,dy,dwidth,dheight,libre.sketch._lookup_constant.call(null,mode));
});
pixel_blend = function(imgsrc,x,y,width,height,dx,dy,dwidth,dheight,mode){
switch(arguments.length){
case 9:
return pixel_blend__9.call(this,imgsrc,x,y,width,height,dx,dy,dwidth,dheight);
case 10:
return pixel_blend__10.call(this,imgsrc,x,y,width,height,dx,dy,dwidth,dheight,mode);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pixel_blend.cljs$core$IFn$_invoke$arity$9 = pixel_blend__9;
pixel_blend.cljs$core$IFn$_invoke$arity$10 = pixel_blend__10;
return pixel_blend;
})()
;
libre.sketch.pixel_copy = (function() {
var pixel_copy = null;
var pixel_copy__9 = (function (x,y,width,height,dx,dy,dwidth,dheight,mode){return libre.sketch._STAR_processing_STAR_.copy(x,y,width,height,dx,dy,dwidth,dheight,libre.sketch._lookup_constant.call(null,mode));
});
var pixel_copy__10 = (function (imgsrc,x,y,width,height,dx,dy,dwidth,dheight,mode){return libre.sketch._STAR_processing_STAR_.copy(imgsrc,x,y,width,height,dx,dy,dwidth,dheight,libre.sketch._lookup_constant.call(null,mode));
});
pixel_copy = function(imgsrc,x,y,width,height,dx,dy,dwidth,dheight,mode){
switch(arguments.length){
case 9:
return pixel_copy__9.call(this,imgsrc,x,y,width,height,dx,dy,dwidth,dheight);
case 10:
return pixel_copy__10.call(this,imgsrc,x,y,width,height,dx,dy,dwidth,dheight,mode);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pixel_copy.cljs$core$IFn$_invoke$arity$9 = pixel_copy__9;
pixel_copy.cljs$core$IFn$_invoke$arity$10 = pixel_copy__10;
return pixel_copy;
})()
;
libre.sketch.pixel_filter = (function() {
var pixel_filter = null;
var pixel_filter__1 = (function (mode){return libre.sketch._STAR_processing_STAR_.filter(libre.sketch._lookup_constant.call(null,mode));
});
var pixel_filter__2 = (function (mode,imgsrc){return libre.sketch._STAR_processing_STAR_.filter(libre.sketch._lookup_constant.call(null,mode),imgsrc);
});
pixel_filter = function(mode,imgsrc){
switch(arguments.length){
case 1:
return pixel_filter__1.call(this,mode);
case 2:
return pixel_filter__2.call(this,mode,imgsrc);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pixel_filter.cljs$core$IFn$_invoke$arity$1 = pixel_filter__1;
pixel_filter.cljs$core$IFn$_invoke$arity$2 = pixel_filter__2;
return pixel_filter;
})()
;
libre.sketch.pixel_get = (function() {
var pixel_get = null;
var pixel_get__0 = (function (){return libre.sketch._STAR_processing_STAR_.get();
});
var pixel_get__2 = (function (x,y){return libre.sketch._STAR_processing_STAR_.get(x,y);
});
var pixel_get__4 = (function (x,y,width,height){return libre.sketch._STAR_processing_STAR_.get(x,y,width,height);
});
pixel_get = function(x,y,width,height){
switch(arguments.length){
case 0:
return pixel_get__0.call(this);
case 2:
return pixel_get__2.call(this,x,y);
case 4:
return pixel_get__4.call(this,x,y,width,height);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pixel_get.cljs$core$IFn$_invoke$arity$0 = pixel_get__0;
pixel_get.cljs$core$IFn$_invoke$arity$2 = pixel_get__2;
pixel_get.cljs$core$IFn$_invoke$arity$4 = pixel_get__4;
return pixel_get;
})()
;
libre.sketch.pixel_array = (function pixel_array(){return libre.sketch._STAR_processing_STAR_.pixels;
});
libre.sketch.pixel_set = (function pixel_set(x,y,src){return libre.sketch._STAR_processing_STAR_.set(x,y,src);
});
libre.sketch.load_pixels = (function load_pixels(){return libre.sketch._STAR_processing_STAR_.loadPixels();
});
libre.sketch.update_pixels = (function update_pixels(){return libre.sketch._STAR_processing_STAR_.updatePixels();
});
libre.sketch.push_style = (function push_style(){return libre.sketch._STAR_processing_STAR_.pushStyle();
});
libre.sketch.pop_style = (function pop_style(){return libre.sketch._STAR_processing_STAR_.popStyle();
});
libre.sketch.smooth = (function smooth(){return libre.sketch._STAR_processing_STAR_.smooth();
});
libre.sketch.no_smooth = (function no_smooth(){return libre.sketch._STAR_processing_STAR_.noSmooth();
});
libre.sketch.stroke_weight = (function stroke_weight(width){return libre.sketch._STAR_processing_STAR_.strokeWeight(width);
});
libre.sketch.stroke = (function() {
var stroke = null;
var stroke__1 = (function (arg){return libre.sketch._STAR_processing_STAR_.stroke(arg);
});
var stroke__2 = (function (arg1,arg2){return libre.sketch._STAR_processing_STAR_.stroke(arg1,arg2);
});
var stroke__3 = (function (arg1,arg2,arg3){return libre.sketch._STAR_processing_STAR_.stroke(arg1,arg2,arg3);
});
var stroke__4 = (function (arg1,arg2,arg3,arg4){return libre.sketch._STAR_processing_STAR_.stroke(arg1,arg2,arg3,arg4);
});
stroke = function(arg1,arg2,arg3,arg4){
switch(arguments.length){
case 1:
return stroke__1.call(this,arg1);
case 2:
return stroke__2.call(this,arg1,arg2);
case 3:
return stroke__3.call(this,arg1,arg2,arg3);
case 4:
return stroke__4.call(this,arg1,arg2,arg3,arg4);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stroke.cljs$core$IFn$_invoke$arity$1 = stroke__1;
stroke.cljs$core$IFn$_invoke$arity$2 = stroke__2;
stroke.cljs$core$IFn$_invoke$arity$3 = stroke__3;
stroke.cljs$core$IFn$_invoke$arity$4 = stroke__4;
return stroke;
})()
;
libre.sketch.no_stroke = (function no_stroke(){return libre.sketch._STAR_processing_STAR_.noStroke();
});
libre.sketch._STAR_stroke_join_styles_STAR_ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"miter","miter",327727052),"miter",new cljs.core.Keyword(null,"bevel","bevel",2090515654),"bevel",new cljs.core.Keyword(null,"round","round",2009433328),"round"], null);
libre.sketch.stroke_join = (function stroke_join(style){return libre.sketch._STAR_processing_STAR_.get(libre.sketch._STAR_stroke_join_styles_STAR_,style,style);
});
libre.sketch._STAR_stroke_cap_styles_STAR_ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"square","square",812434677),"butt",new cljs.core.Keyword(null,"project","project",1124394579),"square",new cljs.core.Keyword(null,"round","round",2009433328),"round"], null);
libre.sketch.stroke_cap = (function stroke_cap(style){return libre.sketch._STAR_processing_STAR_.get(libre.sketch._STAR_stroke_cap_styles_STAR_,style);
});
libre.sketch.font_list = (function font_list(){return libre.sketch._STAR_processing_STAR_.PFont.list();
});
libre.sketch.create_font = (function() {
var create_font = null;
var create_font__2 = (function (name,size){return libre.sketch._STAR_processing_STAR_.createFont(name,size);
});
var create_font__3 = (function (name,size,smooth){return libre.sketch._STAR_processing_STAR_.createFont(name,size,smooth);
});
create_font = function(name,size,smooth){
switch(arguments.length){
case 2:
return create_font__2.call(this,name,size);
case 3:
return create_font__3.call(this,name,size,smooth);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_font.cljs$core$IFn$_invoke$arity$2 = create_font__2;
create_font.cljs$core$IFn$_invoke$arity$3 = create_font__3;
return create_font;
})()
;
libre.sketch.load_font = (function load_font(name){return libre.sketch._STAR_processing_STAR_.loadFont(name);
});
libre.sketch.text_font = (function() {
var text_font = null;
var text_font__1 = (function (name){return libre.sketch._STAR_processing_STAR_.textFont(name);
});
var text_font__2 = (function (name,size){return libre.sketch._STAR_processing_STAR_.textFont(name,size);
});
text_font = function(name,size){
switch(arguments.length){
case 1:
return text_font__1.call(this,name);
case 2:
return text_font__2.call(this,name,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_font.cljs$core$IFn$_invoke$arity$1 = text_font__1;
text_font.cljs$core$IFn$_invoke$arity$2 = text_font__2;
return text_font;
})()
;
libre.sketch.text = (function() {
var text = null;
var text__3 = (function (data,x,y){return libre.sketch._STAR_processing_STAR_.text(data,x,y);
});
var text__4 = (function (data,x,y,z){return libre.sketch._STAR_processing_STAR_.text(data,x,y,z);
});
var text__5 = (function (data,x,y,width,height){return libre.sketch._STAR_processing_STAR_.text(data,x,y,width,height);
});
var text__6 = (function (data,x,y,width,height,z){return libre.sketch._STAR_processing_STAR_.text(data,x,y,width,height,z);
});
text = function(data,x,y,width,height,z){
switch(arguments.length){
case 3:
return text__3.call(this,data,x,y);
case 4:
return text__4.call(this,data,x,y,width);
case 5:
return text__5.call(this,data,x,y,width,height);
case 6:
return text__6.call(this,data,x,y,width,height,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text.cljs$core$IFn$_invoke$arity$3 = text__3;
text.cljs$core$IFn$_invoke$arity$4 = text__4;
text.cljs$core$IFn$_invoke$arity$5 = text__5;
text.cljs$core$IFn$_invoke$arity$6 = text__6;
return text;
})()
;
libre.sketch.text_align = (function() {
var text_align = null;
var text_align__1 = (function (align){return libre.sketch._STAR_processing_STAR_.textAlign(libre.sketch._lookup_constant.call(null,align));
});
var text_align__2 = (function (align,yalign){return libre.sketch._STAR_processing_STAR_.textAlign(libre.sketch._lookup_constant.call(null,align),libre.sketch._lookup_constant.call(null,yalign));
});
text_align = function(align,yalign){
switch(arguments.length){
case 1:
return text_align__1.call(this,align);
case 2:
return text_align__2.call(this,align,yalign);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_align.cljs$core$IFn$_invoke$arity$1 = text_align__1;
text_align.cljs$core$IFn$_invoke$arity$2 = text_align__2;
return text_align;
})()
;
libre.sketch.text_leading = (function text_leading(dist){return libre.sketch._STAR_processing_STAR_.textLeading(dist);
});
libre.sketch.text_mode = (function text_mode(mode){return libre.sketch._STAR_processing_STAR_.textMode(libre.sketch._lookup_constant.call(null,mode));
});
libre.sketch.text_size = (function text_size(size){return libre.sketch._STAR_processing_STAR_.textSize(size);
});
libre.sketch.text_width = (function text_width(data){return libre.sketch._STAR_processing_STAR_.textWidth(data);
});
libre.sketch.text_ascent = (function text_ascent(data){return libre.sketch._STAR_processing_STAR_.textAscent(data);
});
libre.sketch.text_descent = (function text_descent(data){return libre.sketch._STAR_processing_STAR_.textDescent(data);
});
libre.sketch.text_height = (function text_height(data){return (libre.sketch.text_ascent.call(null,data) + libre.sketch.text_descent.call(null,data));
});
libre.sketch.mouse_button = (function mouse_button(){return libre.sketch._STAR_processing_STAR_.mouseButton;
});
libre.sketch.mouse_pressed_QMARK_ = (function mouse_pressed_QMARK_(){return libre.sketch._STAR_processing_STAR_.mousePressed;
});
libre.sketch.mouse_x = (function mouse_x(){return libre.sketch._STAR_processing_STAR_.mouseX;
});
libre.sketch.mouse_y = (function mouse_y(){return libre.sketch._STAR_processing_STAR_.mouseY;
});
libre.sketch.pmouse_x = (function pmouse_x(){return libre.sketch._STAR_processing_STAR_.pmouseX;
});
libre.sketch.pmouse_y = (function pmouse_y(){return libre.sketch._STAR_processing_STAR_.pmouseY;
});
libre.sketch.get_key = (function get_key(){return libre.sketch._STAR_processing_STAR_.key;
});
libre.sketch.get_key_code = (function get_key_code(){return libre.sketch._STAR_processing_STAR_.keyCode;
});
libre.sketch.key_pressed_QMARK_ = (function key_pressed_QMARK_(){return libre.sketch._STAR_processing_STAR_.keyPressed;
});
libre.sketch.apply_matrix = (function apply_matrix(n0,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15){return libre.sketch._STAR_processing_STAR_.applyMatrix(n0,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15);
});
libre.sketch.pop_matrix = (function pop_matrix(){return libre.sketch._STAR_processing_STAR_.popMatrix();
});
libre.sketch.push_matrix = (function push_matrix(){return libre.sketch._STAR_processing_STAR_.pushMatrix();
});
libre.sketch.reset_matrix = (function reset_matrix(){return libre.sketch._STAR_processing_STAR_.resetMatrix();
});
libre.sketch.rotate = (function rotate(angle){return libre.sketch._STAR_processing_STAR_.rotate(angle);
});
libre.sketch.rotate_x = (function rotate_x(radians){return libre.sketch._STAR_processing_STAR_.rotateX(radians);
});
libre.sketch.rotate_y = (function rotate_y(radians){return libre.sketch._STAR_processing_STAR_.rotateY(radians);
});
libre.sketch.rotate_z = (function rotate_z(radians){return libre.sketch._STAR_processing_STAR_.rotateZ(radians);
});
libre.sketch.scale = (function() {
var scale = null;
var scale__1 = (function (size){return libre.sketch._STAR_processing_STAR_.scale(size);
});
var scale__2 = (function (x,y){return libre.sketch._STAR_processing_STAR_.scale(x,y);
});
var scale__3 = (function (x,y,z){return libre.sketch._STAR_processing_STAR_.scale(x,y,z);
});
scale = function(x,y,z){
switch(arguments.length){
case 1:
return scale__1.call(this,x);
case 2:
return scale__2.call(this,x,y);
case 3:
return scale__3.call(this,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scale.cljs$core$IFn$_invoke$arity$1 = scale__1;
scale.cljs$core$IFn$_invoke$arity$2 = scale__2;
scale.cljs$core$IFn$_invoke$arity$3 = scale__3;
return scale;
})()
;
libre.sketch.translate = (function() {
var translate = null;
var translate__2 = (function (x,y){return libre.sketch._STAR_processing_STAR_.translate(x,y);
});
var translate__3 = (function (x,y,z){return libre.sketch._STAR_processing_STAR_.translate(x,y,z);
});
translate = function(x,y,z){
switch(arguments.length){
case 2:
return translate__2.call(this,x,y);
case 3:
return translate__3.call(this,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
translate.cljs$core$IFn$_invoke$arity$2 = translate__2;
translate.cljs$core$IFn$_invoke$arity$3 = translate__3;
return translate;
})()
;
libre.sketch.load_shape = (function load_shape(filename){return libre.sketch._STAR_processing_STAR_.loadShape(filename);
});
libre.sketch.shape = (function() {
var shape = null;
var shape__1 = (function (s){return libre.sketch._STAR_processing_STAR_.shape(s);
});
var shape__3 = (function (s,x,y){return libre.sketch._STAR_processing_STAR_.shape(s,x,y);
});
var shape__5 = (function (s,x,y,width,height){return libre.sketch._STAR_processing_STAR_.shape(s,x,y,width,height);
});
shape = function(s,x,y,width,height){
switch(arguments.length){
case 1:
return shape__1.call(this,s);
case 3:
return shape__3.call(this,s,x,y);
case 5:
return shape__5.call(this,s,x,y,width,height);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shape.cljs$core$IFn$_invoke$arity$1 = shape__1;
shape.cljs$core$IFn$_invoke$arity$3 = shape__3;
shape.cljs$core$IFn$_invoke$arity$5 = shape__5;
return shape;
})()
;
libre.sketch.shape_mode = (function shape_mode(mode){return libre.sketch._STAR_processing_STAR_.shapeMode(libre.sketch._lookup_constant.call(null,mode));
});
libre.sketch.sketch_width = (function sketch_width(){return libre.sketch._STAR_processing_STAR_.width;
});
libre.sketch.sketch_height = (function sketch_height(){return libre.sketch._STAR_processing_STAR_.height;
});
libre.sketch.cursor = (function() {
var cursor = null;
var cursor__0 = (function (){return libre.sketch._STAR_processing_STAR_.cursor();
});
var cursor__1 = (function (mode){return libre.sketch._STAR_processing_STAR_.cursor(libre.sketch._lookup_constant.call(null,mode));
});
var cursor__3 = (function (img,x,y){return libre.sketch._STAR_processing_STAR_.cursor(img,x,y);
});
cursor = function(img,x,y){
switch(arguments.length){
case 0:
return cursor__0.call(this);
case 1:
return cursor__1.call(this,img);
case 3:
return cursor__3.call(this,img,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cursor.cljs$core$IFn$_invoke$arity$0 = cursor__0;
cursor.cljs$core$IFn$_invoke$arity$1 = cursor__1;
cursor.cljs$core$IFn$_invoke$arity$3 = cursor__3;
return cursor;
})()
;
libre.sketch.no_cursor = (function no_cursor(){return libre.sketch._STAR_processing_STAR_.noCursor();
});
libre.sketch.focused_QMARK_ = (function focused_QMARK_(){return libre.sketch._STAR_processing_STAR_.focused;
});
libre.sketch.frame_count = (function frame_count(){return libre.sketch._STAR_processing_STAR_.frameCount;
});
libre.sketch.frame_rate = (function() {
var frame_rate = null;
var frame_rate__0 = (function (){return libre.sketch._STAR_processing_STAR_.frameRate;
});
var frame_rate__1 = (function (fps){return libre.sketch._STAR_processing_STAR_.frameRate(fps);
});
frame_rate = function(fps){
switch(arguments.length){
case 0:
return frame_rate__0.call(this);
case 1:
return frame_rate__1.call(this,fps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frame_rate.cljs$core$IFn$_invoke$arity$0 = frame_rate__0;
frame_rate.cljs$core$IFn$_invoke$arity$1 = frame_rate__1;
return frame_rate;
})()
;
libre.sketch.online_QMARK_ = (function online_QMARK_(){return libre.sketch._STAR_processing_STAR_.online;
});
libre.sketch.frame_rate = (function frame_rate(fps){return libre.sketch._STAR_processing_STAR_.frameRate(fps);
});
libre.sketch.screen = (function screen__$1(){return screen;
});
libre.sketch.screen_width = (function screen_width(){return screen.width;
});
libre.sketch.screen_height = (function screen_height(){return screen.height;
});
libre.sketch.width = (function width(){return libre.sketch._STAR_processing_STAR_.width;
});
libre.sketch.height = (function height(){return libre.sketch._STAR_processing_STAR_.height;
});
libre.sketch._STAR_render_modes_STAR_ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"p2d","p2d",-2106175755),(1),new cljs.core.Keyword(null,"java2d","java2d",166099237),(1),new cljs.core.Keyword(null,"webgl","webgl",1974307887),(2),new cljs.core.Keyword(null,"p3d","p3d",-850380194),(2),new cljs.core.Keyword(null,"opengl","opengl",-614998103),(2)], null);
libre.sketch.size = (function() {
var size = null;
var size__2 = (function (width,height){return libre.sketch._STAR_processing_STAR_.size(width,height);
});
var size__3 = (function (width,height,renderer){return libre.sketch._STAR_processing_STAR_.size(width,height,cljs.core.get.call(null,libre.sketch._STAR_render_modes_STAR_,renderer));
});
size = function(width,height,renderer){
switch(arguments.length){
case 2:
return size__2.call(this,width,height);
case 3:
return size__3.call(this,width,height,renderer);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
size.cljs$core$IFn$_invoke$arity$2 = size__2;
size.cljs$core$IFn$_invoke$arity$3 = size__3;
return size;
})()
;
libre.sketch.background = (function() {
var background = null;
var background__1 = (function (arg){return libre.sketch._STAR_processing_STAR_.background(arg);
});
var background__2 = (function (arg1,arg2){return libre.sketch._STAR_processing_STAR_.background(arg1,arg2);
});
var background__3 = (function (arg1,arg2,arg3){return libre.sketch._STAR_processing_STAR_.background(arg1,arg2,arg3);
});
var background__4 = (function (arg1,arg2,arg3,arg4){return libre.sketch._STAR_processing_STAR_.background(arg1,arg2,arg3,arg4);
});
background = function(arg1,arg2,arg3,arg4){
switch(arguments.length){
case 1:
return background__1.call(this,arg1);
case 2:
return background__2.call(this,arg1,arg2);
case 3:
return background__3.call(this,arg1,arg2,arg3);
case 4:
return background__4.call(this,arg1,arg2,arg3,arg4);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
background.cljs$core$IFn$_invoke$arity$1 = background__1;
background.cljs$core$IFn$_invoke$arity$2 = background__2;
background.cljs$core$IFn$_invoke$arity$3 = background__3;
background.cljs$core$IFn$_invoke$arity$4 = background__4;
return background;
})()
;
libre.sketch.fill = (function() {
var fill = null;
var fill__1 = (function (arg){return libre.sketch._STAR_processing_STAR_.fill(arg);
});
var fill__2 = (function (arg1,arg2){return libre.sketch._STAR_processing_STAR_.fill(arg1,arg2);
});
var fill__3 = (function (arg1,arg2,arg3){return libre.sketch._STAR_processing_STAR_.fill(arg1,arg2,arg3);
});
var fill__4 = (function (arg1,arg2,arg3,arg4){return libre.sketch._STAR_processing_STAR_.fill(arg1,arg2,arg3,arg4);
});
fill = function(arg1,arg2,arg3,arg4){
switch(arguments.length){
case 1:
return fill__1.call(this,arg1);
case 2:
return fill__2.call(this,arg1,arg2);
case 3:
return fill__3.call(this,arg1,arg2,arg3);
case 4:
return fill__4.call(this,arg1,arg2,arg3,arg4);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fill.cljs$core$IFn$_invoke$arity$1 = fill__1;
fill.cljs$core$IFn$_invoke$arity$2 = fill__2;
fill.cljs$core$IFn$_invoke$arity$3 = fill__3;
fill.cljs$core$IFn$_invoke$arity$4 = fill__4;
return fill;
})()
;
libre.sketch.exit = (function exit(){return libre.sketch._STAR_processing_STAR_.exit();
});
libre.sketch.redraw = (function redraw(){return libre.sketch._STAR_processing_STAR_.redraw();
});
libre.sketch.draw_loop = (function draw_loop(){return libre.sketch._STAR_processing_STAR_.loop();
});
libre.sketch.no_draw_loop = (function no_draw_loop(){return libre.sketch._STAR_processing_STAR_.noLoop();
});
libre.sketch.random = (function() {
var random = null;
var random__1 = (function (high){return libre.sketch._STAR_processing_STAR_.random(high);
});
var random__2 = (function (low,high){return libre.sketch._STAR_processing_STAR_.random(low,high);
});
random = function(low,high){
switch(arguments.length){
case 1:
return random__1.call(this,low);
case 2:
return random__2.call(this,low,high);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random.cljs$core$IFn$_invoke$arity$1 = random__1;
random.cljs$core$IFn$_invoke$arity$2 = random__2;
return random;
})()
;
libre.sketch.acos = (function acos(value){return libre.sketch._STAR_processing_STAR_.acos(value);
});
libre.sketch.asin = (function asin(value){return libre.sketch._STAR_processing_STAR_.asin(value);
});
libre.sketch.atan = (function atan(value){return libre.sketch._STAR_processing_STAR_.atan(value);
});
libre.sketch.atan2 = (function atan2(y,x){return libre.sketch._STAR_processing_STAR_.atan2(y,x);
});
libre.sketch.cos = (function cos(angle){return libre.sketch._STAR_processing_STAR_.cos(angle);
});
libre.sketch.degrees = (function degrees(angle){return libre.sketch._STAR_processing.degrees(angle);
});
libre.sketch.radians = (function radians(angle){return libre.sketch._STAR_processing.radians(angle);
});
libre.sketch.sin = (function sin(radians){return libre.sketch._STAR_processing_STAR_.sin(radians);
});
libre.sketch.tan = (function tan(radians){return libre.sketch._STAR_processing_STAR_.tan(radians);
});
libre.sketch.noise = (function() {
var noise = null;
var noise__1 = (function (x){return libre.sketch._STAR_processing_STAR_.noise(x);
});
var noise__2 = (function (x,y){return libre.sketch._STAR_processing_STAR_.noise(x,y);
});
var noise__3 = (function (x,y,z){return libre.sketch._STAR_processing_STAR_.noise(x,y,z);
});
noise = function(x,y,z){
switch(arguments.length){
case 1:
return noise__1.call(this,x);
case 2:
return noise__2.call(this,x,y);
case 3:
return noise__3.call(this,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
noise.cljs$core$IFn$_invoke$arity$1 = noise__1;
noise.cljs$core$IFn$_invoke$arity$2 = noise__2;
noise.cljs$core$IFn$_invoke$arity$3 = noise__3;
return noise;
})()
;
libre.sketch.noise_detail = (function() {
var noise_detail = null;
var noise_detail__1 = (function (octave){return libre.sketch._STAR_processing_STAR_.noiseDetail(octave);
});
var noise_detail__2 = (function (octave,falloff){return libre.sketch._STAR_processing_STAR_.noiseDetail(octave,falloff);
});
noise_detail = function(octave,falloff){
switch(arguments.length){
case 1:
return noise_detail__1.call(this,octave);
case 2:
return noise_detail__2.call(this,octave,falloff);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
noise_detail.cljs$core$IFn$_invoke$arity$1 = noise_detail__1;
noise_detail.cljs$core$IFn$_invoke$arity$2 = noise_detail__2;
return noise_detail;
})()
;
libre.sketch.noise_seed = (function noise_seed(value){return libre.sketch._STAR_processing_STAR_.noiseSeed(value);
});
libre.sketch.random_seed = (function random_seed(value){return libre.sketch._STAR_processing_STAR_.randomSeed(value);
});
libre.sketch.random_circle = (function random_circle(){var diameter = libre.sketch.random.call(null,(250));return libre.sketch.arc.call(null,libre.sketch.random.call(null,libre.sketch.sketch_width.call(null)),libre.sketch.random.call(null,libre.sketch.sketch_height.call(null)),diameter);
});
libre.sketch.run_sketch = (function run_sketch(canvas,sketch){var target = ((((canvas instanceof cljs.core.Keyword)) || (typeof canvas === 'string'))?document.getElementById(canvas):canvas
);return (new Processing(target,libre.sketch.sketch_init.call(null,sketch)));
});

//# sourceMappingURL=sketch.js.map