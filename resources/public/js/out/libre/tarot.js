// Compiled by ClojureScript 0.0-2371
goog.provide('libre.tarot');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('clojure.browser.repl');
goog.require('clojure.browser.repl');
goog.require('monet.canvas');
goog.require('monet.canvas');
goog.require('libre.painter');
goog.require('libre.painter');
goog.require('jayq.core');
libre.tarot.repl = (function repl(){return clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
});
goog.exportSymbol('libre.tarot.repl', libre.tarot.repl);
libre.tarot.middle_pillar = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(500)], null);
libre.tarot.pillar_of_severity = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(250)], null);
libre.tarot.pillar_of_mercy = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(750)], null);
libre.tarot.rect = (function rect(ctx,p__9672){var map__9674 = p__9672;var map__9674__$1 = ((cljs.core.seq_QMARK_.call(null,map__9674))?cljs.core.apply.call(null,cljs.core.hash_map,map__9674):map__9674);var fill = cljs.core.get.call(null,map__9674__$1,new cljs.core.Keyword(null,"fill","fill",883462889));var h = cljs.core.get.call(null,map__9674__$1,new cljs.core.Keyword(null,"h","h",1109658740));var w = cljs.core.get.call(null,map__9674__$1,new cljs.core.Keyword(null,"w","w",354169001));var y = cljs.core.get.call(null,map__9674__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__9674__$1,new cljs.core.Keyword(null,"x","x",2099068185));ctx.beginPath();
ctx.rect(x,y,w,h);
ctx.closePath();
return ctx;
});
libre.tarot.circle = (function circle(ctx,p__9675){var map__9677 = p__9675;var map__9677__$1 = ((cljs.core.seq_QMARK_.call(null,map__9677))?cljs.core.apply.call(null,cljs.core.hash_map,map__9677):map__9677);var r = cljs.core.get.call(null,map__9677__$1,new cljs.core.Keyword(null,"r","r",-471384190));var y = cljs.core.get.call(null,map__9677__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__9677__$1,new cljs.core.Keyword(null,"x","x",2099068185));ctx.beginPath();
ctx.arc(x,y,r,(0),(Math.PI * (2)),true);
ctx.closePath();
return ctx;
});
libre.tarot.ellipse = (function ellipse(ctx,cx,cy,w,h){ctx.beginPath();
ctx.moveTo(cx,(cy - (h / (2))));
ctx.bezierCurveTo((cx + (w / (2))),(cy - (h / (2))),(cx + (w / (2))),(cy + (h / (2))),cx,(cy + (h / (2))));
ctx.bezierCurveTo((cx - (w / (2))),(cy + (h / (2))),(cx - (w / (2))),(cy - (h / (2))),cx,(cy - (h / (2))));
return ctx.closePath();
});
libre.tarot.ain_soph = (function ain_soph(){return monet.canvas.entity.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"r","r",-471384190),(1000)], null),null,(function (ctx,shape){ctx.fillStyle = "#aaa";
libre.tarot.ellipse.call(null,ctx,(500),(500),(2000),(1000));
return ctx.fill();
}));
});
goog.exportSymbol('libre.tarot.ain_soph', libre.tarot.ain_soph);
libre.tarot.ain_soph_aur = (function ain_soph_aur(){return monet.canvas.entity.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"r","r",-471384190),(1000)], null),null,(function (ctx,shape){ctx.fillStyle = "#eee";
libre.tarot.ellipse.call(null,ctx,(500),(500),(1200),(1000));
return ctx.fill();
}));
});
goog.exportSymbol('libre.tarot.ain_soph_aur', libre.tarot.ain_soph_aur);
libre.tarot.sephiroth = (function sephiroth(seph){return monet.canvas.entity.call(null,seph,null,(function (ctx,seph__$1){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(seph__$1);var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pillar","pillar",-1745552777).cljs$core$IFn$_invoke$arity$1(seph__$1));var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(seph__$1);ctx.fillStyle = "#666";
libre.tarot.circle.call(null,ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"r","r",-471384190),(50)], null));
ctx.fill();
ctx.font = "15pt Sans";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillStyle = "#fff";
return ctx.fillText(name,x,y);
}));
});
goog.exportSymbol('libre.tarot.sephiroth', libre.tarot.sephiroth);
libre.tarot.tree_path = (function tree_path(f,t){return monet.canvas.entity.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),f,new cljs.core.Keyword(null,"to","to",192099007),t], null),null,(function (ctx,path){ctx.beginPath();
ctx.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pillar","pillar",-1745552777).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(path))),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(path)));
ctx.lineWidth = (20);
ctx.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pillar","pillar",-1745552777).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(path))),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(path)));
ctx.strokeStyle = "#000";
ctx.stroke();
ctx.beginPath();
ctx.moveTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pillar","pillar",-1745552777).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(path))),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(path)));
ctx.lineWidth = (18);
ctx.lineTo(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pillar","pillar",-1745552777).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(path))),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(path)));
ctx.strokeStyle = "#ffffff";
return ctx.stroke();
}));
});
goog.exportSymbol('libre.tarot.tree_path', libre.tarot.tree_path);
libre.tarot.sephiroth_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hod","hod",69794048),new cljs.core.Keyword(null,"kether","kether",600827491),new cljs.core.Keyword(null,"binah","binah",1362019908),new cljs.core.Keyword(null,"malkuth","malkuth",901549796),new cljs.core.Keyword(null,"chesed","chesed",-2141386746),new cljs.core.Keyword(null,"netzach","netzach",-6459059),new cljs.core.Keyword(null,"geburah","geburah",245111600),new cljs.core.Keyword(null,"yesod","yesod",-652447978),new cljs.core.Keyword(null,"tiphareth","tiphareth",1263809271),new cljs.core.Keyword(null,"chokmah","chokmah",-1044150882)],[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"hod",new cljs.core.Keyword(null,"number","number",1570378438),(8),new cljs.core.Keyword(null,"pillar","pillar",-1745552777),libre.tarot.pillar_of_severity,new cljs.core.Keyword(null,"y","y",-1757859776),(600)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"kether",new cljs.core.Keyword(null,"number","number",1570378438),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"pillar","pillar",-1745552777),libre.tarot.middle_pillar], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"binah",new cljs.core.Keyword(null,"number","number",1570378438),(3),new cljs.core.Keyword(null,"pillar","pillar",-1745552777),libre.tarot.pillar_of_severity,new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"malkuth",new cljs.core.Keyword(null,"number","number",1570378438),(10),new cljs.core.Keyword(null,"pillar","pillar",-1745552777),libre.tarot.middle_pillar,new cljs.core.Keyword(null,"y","y",-1757859776),(900)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"chesed",new cljs.core.Keyword(null,"number","number",1570378438),(4),new cljs.core.Keyword(null,"pillar","pillar",-1745552777),libre.tarot.pillar_of_mercy,new cljs.core.Keyword(null,"y","y",-1757859776),(400)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"netzach",new cljs.core.Keyword(null,"number","number",1570378438),(7),new cljs.core.Keyword(null,"pillar","pillar",-1745552777),libre.tarot.pillar_of_mercy,new cljs.core.Keyword(null,"y","y",-1757859776),(600)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"geburah",new cljs.core.Keyword(null,"number","number",1570378438),(5),new cljs.core.Keyword(null,"pillar","pillar",-1745552777),libre.tarot.pillar_of_severity,new cljs.core.Keyword(null,"y","y",-1757859776),(400)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"yesod",new cljs.core.Keyword(null,"number","number",1570378438),(9),new cljs.core.Keyword(null,"pillar","pillar",-1745552777),libre.tarot.middle_pillar,new cljs.core.Keyword(null,"y","y",-1757859776),(700)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"tiphareth",new cljs.core.Keyword(null,"number","number",1570378438),(6),new cljs.core.Keyword(null,"pillar","pillar",-1745552777),libre.tarot.middle_pillar,new cljs.core.Keyword(null,"y","y",-1757859776),(500)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"chokmah",new cljs.core.Keyword(null,"number","number",1570378438),(2),new cljs.core.Keyword(null,"pillar","pillar",-1745552777),libre.tarot.pillar_of_mercy,new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null)]);
libre.tarot.add_sephiroth = (function add_sephiroth(mc,name){var spec = name.call(null,libre.tarot.sephiroth_map);return monet.canvas.add_entity.call(null,mc,name,libre.tarot.sephiroth.call(null,spec));
});
libre.tarot.path_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"resh","resh",-127416096),new cljs.core.Keyword(null,"lamed","lamed",-1934324318),new cljs.core.Keyword(null,"gimel","gimel",1315904741),new cljs.core.Keyword(null,"mem","mem",-1804286459),new cljs.core.Keyword(null,"beth","beth",1126685256),new cljs.core.Keyword(null,"cheth","cheth",727157097),new cljs.core.Keyword(null,"ayin","ayin",1854385167),new cljs.core.Keyword(null,"qoph","qoph",-579974766),new cljs.core.Keyword(null,"shin","shin",-1431928365),new cljs.core.Keyword(null,"heh","heh",2036676820),new cljs.core.Keyword(null,"caph","caph",1578338068),new cljs.core.Keyword(null,"yod","yod",-648925227),new cljs.core.Keyword(null,"vav","vav",1583790390),new cljs.core.Keyword(null,"samekh","samekh",-559668168),new cljs.core.Keyword(null,"aleph","aleph",-565818376),new cljs.core.Keyword(null,"tav","tav",-913989508),new cljs.core.Keyword(null,"zayin","zayin",-662738564),new cljs.core.Keyword(null,"teth","teth",183632476),new cljs.core.Keyword(null,"peh","peh",-1284171747),new cljs.core.Keyword(null,"daleth","daleth",-2115475107),new cljs.core.Keyword(null,"nun","nun",27977342),new cljs.core.Keyword(null,"tzaddi","tzaddi",-1364980002)],[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"resh",new cljs.core.Keyword(null,"number","number",1570378438),(30),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"hod","hod",69794048),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"yesod","yesod",-652447978)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"lamed",new cljs.core.Keyword(null,"number","number",1570378438),(22),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"geburah","geburah",245111600),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"tiphareth","tiphareth",1263809271)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"gimel",new cljs.core.Keyword(null,"number","number",1570378438),(13),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"kether","kether",600827491),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"tiphareth","tiphareth",1263809271)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"mem",new cljs.core.Keyword(null,"number","number",1570378438),(23),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"geburah","geburah",245111600),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"hod","hod",69794048)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"beth",new cljs.core.Keyword(null,"number","number",1570378438),(12),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"kether","kether",600827491),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"binah","binah",1362019908)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"chetch",new cljs.core.Keyword(null,"number","number",1570378438),(18),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"binah","binah",1362019908),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"geburah","geburah",245111600)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"ayin",new cljs.core.Keyword(null,"number","number",1570378438),(26),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tiphareth","tiphareth",1263809271),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"hod","hod",69794048)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"qoph",new cljs.core.Keyword(null,"number","number",1570378438),(29),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"netzach","netzach",-6459059),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"malkuth","malkuth",901549796)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"shin",new cljs.core.Keyword(null,"number","number",1570378438),(31),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"hod","hod",69794048),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"malkuth","malkuth",901549796)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"heh",new cljs.core.Keyword(null,"number","number",1570378438),(15),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"chokmah","chokmah",-1044150882),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"tiphareth","tiphareth",1263809271)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"caph",new cljs.core.Keyword(null,"number","number",1570378438),(21),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"chesed","chesed",-2141386746),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"netzach","netzach",-6459059)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"yod",new cljs.core.Keyword(null,"number","number",1570378438),(20),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"chesed","chesed",-2141386746),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"tiphareth","tiphareth",1263809271)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"vav",new cljs.core.Keyword(null,"number","number",1570378438),(16),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"chokmah","chokmah",-1044150882),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"chesed","chesed",-2141386746)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"samekh",new cljs.core.Keyword(null,"number","number",1570378438),(25),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tiphareth","tiphareth",1263809271),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"yesod","yesod",-652447978)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"aleph",new cljs.core.Keyword(null,"number","number",1570378438),(10),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"kether","kether",600827491),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"chokmah","chokmah",-1044150882)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"tav",new cljs.core.Keyword(null,"number","number",1570378438),(32),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"yesod","yesod",-652447978),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"malkuth","malkuth",901549796)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"zayin",new cljs.core.Keyword(null,"number","number",1570378438),(17),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"binah","binah",1362019908),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"tiphareth","tiphareth",1263809271)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"teth",new cljs.core.Keyword(null,"number","number",1570378438),(19),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"chesed","chesed",-2141386746),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"geburah","geburah",245111600)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"peh",new cljs.core.Keyword(null,"number","number",1570378438),(27),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"netzach","netzach",-6459059),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"hod","hod",69794048)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"daleth",new cljs.core.Keyword(null,"number","number",1570378438),(14),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"chokmah","chokmah",-1044150882),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"binah","binah",1362019908)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"nun",new cljs.core.Keyword(null,"number","number",1570378438),(24),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tiphareth","tiphareth",1263809271),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"netzach","netzach",-6459059)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"tzaddi",new cljs.core.Keyword(null,"number","number",1570378438),(28),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"netzach","netzach",-6459059),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"yesod","yesod",-652447978)], null)]);
libre.tarot.add_path = (function add_path(mc,name){var spec = name.call(null,libre.tarot.path_map);return monet.canvas.add_entity.call(null,mc,name,libre.tarot.tree_path.call(null,cljs.core.get.call(null,libre.tarot.sephiroth_map,new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(spec)),cljs.core.get.call(null,libre.tarot.sephiroth_map,new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(spec))));
});
libre.tarot.drawtree = (function drawtree(){var mc = monet.canvas.init.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#tree","#tree",-298831395)).get((0)));monet.canvas.add_entity.call(null,mc,new cljs.core.Keyword(null,"ain","ain",-185717232),monet.canvas.entity.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"h","h",1109658740),(1000),new cljs.core.Keyword(null,"w","w",354169001),(1000)], null),null,((function (mc){
return (function (ctx,box){ctx.fillStyle = "#000";
return libre.tarot.rect.call(null,ctx,box).fill(ctx);
});})(mc))
));
monet.canvas.add_entity.call(null,mc,new cljs.core.Keyword(null,"ain-soph","ain-soph",1012279510),libre.tarot.ain_soph.call(null));
monet.canvas.add_entity.call(null,mc,new cljs.core.Keyword(null,"ain-soph-aur","ain-soph-aur",1147224031),libre.tarot.ain_soph_aur.call(null));
var seq__9686_9694 = cljs.core.seq.call(null,cljs.core.keys.call(null,libre.tarot.path_map));var chunk__9687_9695 = null;var count__9688_9696 = (0);var i__9689_9697 = (0);while(true){
if((i__9689_9697 < count__9688_9696))
{var s_9698 = cljs.core._nth.call(null,chunk__9687_9695,i__9689_9697);libre.tarot.add_path.call(null,mc,s_9698);
{
var G__9699 = seq__9686_9694;
var G__9700 = chunk__9687_9695;
var G__9701 = count__9688_9696;
var G__9702 = (i__9689_9697 + (1));
seq__9686_9694 = G__9699;
chunk__9687_9695 = G__9700;
count__9688_9696 = G__9701;
i__9689_9697 = G__9702;
continue;
}
} else
{var temp__4126__auto___9703 = cljs.core.seq.call(null,seq__9686_9694);if(temp__4126__auto___9703)
{var seq__9686_9704__$1 = temp__4126__auto___9703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9686_9704__$1))
{var c__4410__auto___9705 = cljs.core.chunk_first.call(null,seq__9686_9704__$1);{
var G__9706 = cljs.core.chunk_rest.call(null,seq__9686_9704__$1);
var G__9707 = c__4410__auto___9705;
var G__9708 = cljs.core.count.call(null,c__4410__auto___9705);
var G__9709 = (0);
seq__9686_9694 = G__9706;
chunk__9687_9695 = G__9707;
count__9688_9696 = G__9708;
i__9689_9697 = G__9709;
continue;
}
} else
{var s_9710 = cljs.core.first.call(null,seq__9686_9704__$1);libre.tarot.add_path.call(null,mc,s_9710);
{
var G__9711 = cljs.core.next.call(null,seq__9686_9704__$1);
var G__9712 = null;
var G__9713 = (0);
var G__9714 = (0);
seq__9686_9694 = G__9711;
chunk__9687_9695 = G__9712;
count__9688_9696 = G__9713;
i__9689_9697 = G__9714;
continue;
}
}
} else
{}
}
break;
}
var seq__9690 = cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.keys.call(null,libre.tarot.sephiroth_map)));var chunk__9691 = null;var count__9692 = (0);var i__9693 = (0);while(true){
if((i__9693 < count__9692))
{var s = cljs.core._nth.call(null,chunk__9691,i__9693);libre.tarot.add_sephiroth.call(null,mc,s);
{
var G__9715 = seq__9690;
var G__9716 = chunk__9691;
var G__9717 = count__9692;
var G__9718 = (i__9693 + (1));
seq__9690 = G__9715;
chunk__9691 = G__9716;
count__9692 = G__9717;
i__9693 = G__9718;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9690);if(temp__4126__auto__)
{var seq__9690__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9690__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__9690__$1);{
var G__9719 = cljs.core.chunk_rest.call(null,seq__9690__$1);
var G__9720 = c__4410__auto__;
var G__9721 = cljs.core.count.call(null,c__4410__auto__);
var G__9722 = (0);
seq__9690 = G__9719;
chunk__9691 = G__9720;
count__9692 = G__9721;
i__9693 = G__9722;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__9690__$1);libre.tarot.add_sephiroth.call(null,mc,s);
{
var G__9723 = cljs.core.next.call(null,seq__9690__$1);
var G__9724 = null;
var G__9725 = (0);
var G__9726 = (0);
seq__9690 = G__9723;
chunk__9691 = G__9724;
count__9692 = G__9725;
i__9693 = G__9726;
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
goog.exportSymbol('libre.tarot.drawtree', libre.tarot.drawtree);

//# sourceMappingURL=tarot.js.map