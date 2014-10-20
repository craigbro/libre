// Compiled by ClojureScript 0.0-2371
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__14472,args){var map__14474 = p__14472;var map__14474__$1 = ((cljs.core.seq_QMARK_.call(null,map__14474))?cljs.core.apply.call(null,cljs.core.hash_map,map__14474):map__14474);var debug = cljs.core.get.call(null,map__14474__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__14472,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__14472,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__14475){
var p__14472 = cljs.core.first(arglist__14475);
var args = cljs.core.rest(arglist__14475);
return log__delegate(p__14472,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__14476){var map__14478 = p__14476;var map__14478__$1 = ((cljs.core.seq_QMARK_.call(null,map__14478))?cljs.core.apply.call(null,cljs.core.hash_map,map__14478):map__14478);var websocket_url = cljs.core.get.call(null,map__14478__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__14479,callback){var map__14481 = p__14479;var map__14481__$1 = ((cljs.core.seq_QMARK_.call(null,map__14481))?cljs.core.apply.call(null,cljs.core.hash_map,map__14481):map__14481);var msg = map__14481__$1;var dependency_file = cljs.core.get.call(null,map__14481__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__14481__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__14481__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3640__auto__ = dependency_file;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__14481,map__14481__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__14481,map__14481__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__14482,p__14483){var map__14486 = p__14482;var map__14486__$1 = ((cljs.core.seq_QMARK_.call(null,map__14486))?cljs.core.apply.call(null,cljs.core.hash_map,map__14486):map__14486);var opts = map__14486__$1;var url_rewriter = cljs.core.get.call(null,map__14486__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__14487 = p__14483;var map__14487__$1 = ((cljs.core.seq_QMARK_.call(null,map__14487))?cljs.core.apply.call(null,cljs.core.hash_map,map__14487):map__14487);var d = map__14487__$1;var file = cljs.core.get.call(null,map__14487__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__14488,p__14489){var map__14531 = p__14488;var map__14531__$1 = ((cljs.core.seq_QMARK_.call(null,map__14531))?cljs.core.apply.call(null,cljs.core.hash_map,map__14531):map__14531);var opts = map__14531__$1;var on_jsload = cljs.core.get.call(null,map__14531__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__14531__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__14532 = p__14489;var map__14532__$1 = ((cljs.core.seq_QMARK_.call(null,map__14532))?cljs.core.apply.call(null,cljs.core.hash_map,map__14532):map__14532);var files = cljs.core.get.call(null,map__14532__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__6481__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6481__auto__,map__14531,map__14531__$1,opts,on_jsload,before_jsload,map__14532,map__14532__$1,files){
return (function (){var f__6482__auto__ = (function (){var switch__6466__auto__ = ((function (c__6481__auto__,map__14531,map__14531__$1,opts,on_jsload,before_jsload,map__14532,map__14532__$1,files){
return (function (state_14555){var state_val_14556 = (state_14555[(1)]);if((state_val_14556 === (6)))
{var inst_14537 = (state_14555[(7)]);var inst_14546 = (state_14555[(2)]);var inst_14547 = cljs.core.PersistentVector.EMPTY_NODE;var inst_14548 = [inst_14537];var inst_14549 = (new cljs.core.PersistentVector(null,1,(5),inst_14547,inst_14548,null));var inst_14550 = cljs.core.apply.call(null,on_jsload,inst_14549);var state_14555__$1 = (function (){var statearr_14557 = state_14555;(statearr_14557[(8)] = inst_14546);
return statearr_14557;
})();var statearr_14558_14572 = state_14555__$1;(statearr_14558_14572[(2)] = inst_14550);
(statearr_14558_14572[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14556 === (5)))
{var inst_14553 = (state_14555[(2)]);var state_14555__$1 = state_14555;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14555__$1,inst_14553);
} else
{if((state_val_14556 === (4)))
{var state_14555__$1 = state_14555;var statearr_14559_14573 = state_14555__$1;(statearr_14559_14573[(2)] = null);
(statearr_14559_14573[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14556 === (3)))
{var inst_14537 = (state_14555[(7)]);var inst_14540 = console.debug("Figwheel: loaded these files");var inst_14541 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_14537);var inst_14542 = cljs.core.prn_str.call(null,inst_14541);var inst_14543 = console.log(inst_14542);var inst_14544 = cljs.core.async.timeout.call(null,(10));var state_14555__$1 = (function (){var statearr_14560 = state_14555;(statearr_14560[(9)] = inst_14540);
(statearr_14560[(10)] = inst_14543);
return statearr_14560;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14555__$1,(6),inst_14544);
} else
{if((state_val_14556 === (2)))
{var inst_14537 = (state_14555[(7)]);var inst_14537__$1 = (state_14555[(2)]);var inst_14538 = cljs.core.not_empty.call(null,inst_14537__$1);var state_14555__$1 = (function (){var statearr_14561 = state_14555;(statearr_14561[(7)] = inst_14537__$1);
return statearr_14561;
})();if(cljs.core.truth_(inst_14538))
{var statearr_14562_14574 = state_14555__$1;(statearr_14562_14574[(1)] = (3));
} else
{var statearr_14563_14575 = state_14555__$1;(statearr_14563_14575[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14556 === (1)))
{var inst_14533 = before_jsload.call(null,files);var inst_14534 = figwheel.client.add_request_urls.call(null,opts,files);var inst_14535 = figwheel.client.load_all_js_files.call(null,inst_14534);var state_14555__$1 = (function (){var statearr_14564 = state_14555;(statearr_14564[(11)] = inst_14533);
return statearr_14564;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14555__$1,(2),inst_14535);
} else
{return null;
}
}
}
}
}
}
});})(c__6481__auto__,map__14531,map__14531__$1,opts,on_jsload,before_jsload,map__14532,map__14532__$1,files))
;return ((function (switch__6466__auto__,c__6481__auto__,map__14531,map__14531__$1,opts,on_jsload,before_jsload,map__14532,map__14532__$1,files){
return (function() {
var state_machine__6467__auto__ = null;
var state_machine__6467__auto____0 = (function (){var statearr_14568 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14568[(0)] = state_machine__6467__auto__);
(statearr_14568[(1)] = (1));
return statearr_14568;
});
var state_machine__6467__auto____1 = (function (state_14555){while(true){
var ret_value__6468__auto__ = (function (){try{while(true){
var result__6469__auto__ = switch__6466__auto__.call(null,state_14555);if(cljs.core.keyword_identical_QMARK_.call(null,result__6469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6469__auto__;
}
break;
}
}catch (e14569){if((e14569 instanceof Object))
{var ex__6470__auto__ = e14569;var statearr_14570_14576 = state_14555;(statearr_14570_14576[(5)] = ex__6470__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14555);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14569;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14577 = state_14555;
state_14555 = G__14577;
continue;
}
} else
{return ret_value__6468__auto__;
}
break;
}
});
state_machine__6467__auto__ = function(state_14555){
switch(arguments.length){
case 0:
return state_machine__6467__auto____0.call(this);
case 1:
return state_machine__6467__auto____1.call(this,state_14555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6467__auto____0;
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6467__auto____1;
return state_machine__6467__auto__;
})()
;})(switch__6466__auto__,c__6481__auto__,map__14531,map__14531__$1,opts,on_jsload,before_jsload,map__14532,map__14532__$1,files))
})();var state__6483__auto__ = (function (){var statearr_14571 = f__6482__auto__.call(null);(statearr_14571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6481__auto__);
return statearr_14571;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6483__auto__);
});})(c__6481__auto__,map__14531,map__14531__$1,opts,on_jsload,before_jsload,map__14532,map__14532__$1,files))
);
return c__6481__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__14578,link_href){var map__14580 = p__14578;var map__14580__$1 = ((cljs.core.seq_QMARK_.call(null,map__14580))?cljs.core.apply.call(null,cljs.core.hash_map,map__14580):map__14580);var request_url = cljs.core.get.call(null,map__14580__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__14580__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__6481__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6481__auto__,parent){
return (function (){var f__6482__auto__ = (function (){var switch__6466__auto__ = ((function (c__6481__auto__,parent){
return (function (state_14601){var state_val_14602 = (state_14601[(1)]);if((state_val_14602 === (2)))
{var inst_14598 = (state_14601[(2)]);var inst_14599 = parent.removeChild(orig_link);var state_14601__$1 = (function (){var statearr_14603 = state_14601;(statearr_14603[(7)] = inst_14598);
return statearr_14603;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14601__$1,inst_14599);
} else
{if((state_val_14602 === (1)))
{var inst_14596 = cljs.core.async.timeout.call(null,(200));var state_14601__$1 = state_14601;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14601__$1,(2),inst_14596);
} else
{return null;
}
}
});})(c__6481__auto__,parent))
;return ((function (switch__6466__auto__,c__6481__auto__,parent){
return (function() {
var state_machine__6467__auto__ = null;
var state_machine__6467__auto____0 = (function (){var statearr_14607 = [null,null,null,null,null,null,null,null];(statearr_14607[(0)] = state_machine__6467__auto__);
(statearr_14607[(1)] = (1));
return statearr_14607;
});
var state_machine__6467__auto____1 = (function (state_14601){while(true){
var ret_value__6468__auto__ = (function (){try{while(true){
var result__6469__auto__ = switch__6466__auto__.call(null,state_14601);if(cljs.core.keyword_identical_QMARK_.call(null,result__6469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6469__auto__;
}
break;
}
}catch (e14608){if((e14608 instanceof Object))
{var ex__6470__auto__ = e14608;var statearr_14609_14611 = state_14601;(statearr_14609_14611[(5)] = ex__6470__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14601);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14608;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14612 = state_14601;
state_14601 = G__14612;
continue;
}
} else
{return ret_value__6468__auto__;
}
break;
}
});
state_machine__6467__auto__ = function(state_14601){
switch(arguments.length){
case 0:
return state_machine__6467__auto____0.call(this);
case 1:
return state_machine__6467__auto____1.call(this,state_14601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6467__auto____0;
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6467__auto____1;
return state_machine__6467__auto__;
})()
;})(switch__6466__auto__,c__6481__auto__,parent))
})();var state__6483__auto__ = (function (){var statearr_14610 = f__6482__auto__.call(null);(statearr_14610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6481__auto__);
return statearr_14610;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6483__auto__);
});})(c__6481__auto__,parent))
);
return c__6481__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__14613){var map__14615 = p__14613;var map__14615__$1 = ((cljs.core.seq_QMARK_.call(null,map__14615))?cljs.core.apply.call(null,cljs.core.hash_map,map__14615):map__14615);var f_data = map__14615__$1;var request_url = cljs.core.get.call(null,map__14615__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__14615__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__14616,files_msg){var map__14638 = p__14616;var map__14638__$1 = ((cljs.core.seq_QMARK_.call(null,map__14638))?cljs.core.apply.call(null,cljs.core.hash_map,map__14638):map__14638);var opts = map__14638__$1;var on_cssload = cljs.core.get.call(null,map__14638__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__14639_14659 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__14640_14660 = null;var count__14641_14661 = (0);var i__14642_14662 = (0);while(true){
if((i__14642_14662 < count__14641_14661))
{var f_14663 = cljs.core._nth.call(null,chunk__14640_14660,i__14642_14662);figwheel.client.reload_css_file.call(null,f_14663);
{
var G__14664 = seq__14639_14659;
var G__14665 = chunk__14640_14660;
var G__14666 = count__14641_14661;
var G__14667 = (i__14642_14662 + (1));
seq__14639_14659 = G__14664;
chunk__14640_14660 = G__14665;
count__14641_14661 = G__14666;
i__14642_14662 = G__14667;
continue;
}
} else
{var temp__4126__auto___14668 = cljs.core.seq.call(null,seq__14639_14659);if(temp__4126__auto___14668)
{var seq__14639_14669__$1 = temp__4126__auto___14668;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14639_14669__$1))
{var c__4410__auto___14670 = cljs.core.chunk_first.call(null,seq__14639_14669__$1);{
var G__14671 = cljs.core.chunk_rest.call(null,seq__14639_14669__$1);
var G__14672 = c__4410__auto___14670;
var G__14673 = cljs.core.count.call(null,c__4410__auto___14670);
var G__14674 = (0);
seq__14639_14659 = G__14671;
chunk__14640_14660 = G__14672;
count__14641_14661 = G__14673;
i__14642_14662 = G__14674;
continue;
}
} else
{var f_14675 = cljs.core.first.call(null,seq__14639_14669__$1);figwheel.client.reload_css_file.call(null,f_14675);
{
var G__14676 = cljs.core.next.call(null,seq__14639_14669__$1);
var G__14677 = null;
var G__14678 = (0);
var G__14679 = (0);
seq__14639_14659 = G__14676;
chunk__14640_14660 = G__14677;
count__14641_14661 = G__14678;
i__14642_14662 = G__14679;
continue;
}
}
} else
{}
}
break;
}
var c__6481__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6481__auto__,map__14638,map__14638__$1,opts,on_cssload){
return (function (){var f__6482__auto__ = (function (){var switch__6466__auto__ = ((function (c__6481__auto__,map__14638,map__14638__$1,opts,on_cssload){
return (function (state_14649){var state_val_14650 = (state_14649[(1)]);if((state_val_14650 === (2)))
{var inst_14645 = (state_14649[(2)]);var inst_14646 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_14647 = on_cssload.call(null,inst_14646);var state_14649__$1 = (function (){var statearr_14651 = state_14649;(statearr_14651[(7)] = inst_14645);
return statearr_14651;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14649__$1,inst_14647);
} else
{if((state_val_14650 === (1)))
{var inst_14643 = cljs.core.async.timeout.call(null,(100));var state_14649__$1 = state_14649;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14649__$1,(2),inst_14643);
} else
{return null;
}
}
});})(c__6481__auto__,map__14638,map__14638__$1,opts,on_cssload))
;return ((function (switch__6466__auto__,c__6481__auto__,map__14638,map__14638__$1,opts,on_cssload){
return (function() {
var state_machine__6467__auto__ = null;
var state_machine__6467__auto____0 = (function (){var statearr_14655 = [null,null,null,null,null,null,null,null];(statearr_14655[(0)] = state_machine__6467__auto__);
(statearr_14655[(1)] = (1));
return statearr_14655;
});
var state_machine__6467__auto____1 = (function (state_14649){while(true){
var ret_value__6468__auto__ = (function (){try{while(true){
var result__6469__auto__ = switch__6466__auto__.call(null,state_14649);if(cljs.core.keyword_identical_QMARK_.call(null,result__6469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6469__auto__;
}
break;
}
}catch (e14656){if((e14656 instanceof Object))
{var ex__6470__auto__ = e14656;var statearr_14657_14680 = state_14649;(statearr_14657_14680[(5)] = ex__6470__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14649);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14656;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14681 = state_14649;
state_14649 = G__14681;
continue;
}
} else
{return ret_value__6468__auto__;
}
break;
}
});
state_machine__6467__auto__ = function(state_14649){
switch(arguments.length){
case 0:
return state_machine__6467__auto____0.call(this);
case 1:
return state_machine__6467__auto____1.call(this,state_14649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6467__auto____0;
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6467__auto____1;
return state_machine__6467__auto__;
})()
;})(switch__6466__auto__,c__6481__auto__,map__14638,map__14638__$1,opts,on_cssload))
})();var state__6483__auto__ = (function (){var statearr_14658 = f__6482__auto__.call(null);(statearr_14658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6481__auto__);
return statearr_14658;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6483__auto__);
});})(c__6481__auto__,map__14638,map__14638__$1,opts,on_cssload))
);
return c__6481__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__14682){var map__14687 = p__14682;var map__14687__$1 = ((cljs.core.seq_QMARK_.call(null,map__14687))?cljs.core.apply.call(null,cljs.core.hash_map,map__14687):map__14687);var opts = map__14687__$1;var on_compile_fail = cljs.core.get.call(null,map__14687__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__14687__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__14687__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__14687__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__14687,map__14687__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__14688 = cljs.core._EQ_;var expr__14689 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__14688.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__14689)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__14688.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__14689)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__14688.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__14689)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__14687,map__14687__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__14687,map__14687__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__14687,map__14687__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__14687,map__14687__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__14687,map__14687__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__14687,map__14687__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__14687,map__14687__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__14687,map__14687__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__14687,map__14687__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj14694 = {"detail":url};return obj14694;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__14695){var map__14697 = p__14695;var map__14697__$1 = ((cljs.core.seq_QMARK_.call(null,map__14697))?cljs.core.apply.call(null,cljs.core.hash_map,map__14697):map__14697);var class$ = cljs.core.get.call(null,map__14697__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__14697__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__14698){var map__14704 = p__14698;var map__14704__$1 = ((cljs.core.seq_QMARK_.call(null,map__14704))?cljs.core.apply.call(null,cljs.core.hash_map,map__14704):map__14704);var ed = map__14704__$1;var exception_data = cljs.core.get.call(null,map__14704__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__14704__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__14705_14709 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__14706_14710 = null;var count__14707_14711 = (0);var i__14708_14712 = (0);while(true){
if((i__14708_14712 < count__14707_14711))
{var msg_14713 = cljs.core._nth.call(null,chunk__14706_14710,i__14708_14712);console.log(msg_14713);
{
var G__14714 = seq__14705_14709;
var G__14715 = chunk__14706_14710;
var G__14716 = count__14707_14711;
var G__14717 = (i__14708_14712 + (1));
seq__14705_14709 = G__14714;
chunk__14706_14710 = G__14715;
count__14707_14711 = G__14716;
i__14708_14712 = G__14717;
continue;
}
} else
{var temp__4126__auto___14718 = cljs.core.seq.call(null,seq__14705_14709);if(temp__4126__auto___14718)
{var seq__14705_14719__$1 = temp__4126__auto___14718;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14705_14719__$1))
{var c__4410__auto___14720 = cljs.core.chunk_first.call(null,seq__14705_14719__$1);{
var G__14721 = cljs.core.chunk_rest.call(null,seq__14705_14719__$1);
var G__14722 = c__4410__auto___14720;
var G__14723 = cljs.core.count.call(null,c__4410__auto___14720);
var G__14724 = (0);
seq__14705_14709 = G__14721;
chunk__14706_14710 = G__14722;
count__14707_14711 = G__14723;
i__14708_14712 = G__14724;
continue;
}
} else
{var msg_14725 = cljs.core.first.call(null,seq__14705_14719__$1);console.log(msg_14725);
{
var G__14726 = cljs.core.next.call(null,seq__14705_14719__$1);
var G__14727 = null;
var G__14728 = (0);
var G__14729 = (0);
seq__14705_14709 = G__14726;
chunk__14706_14710 = G__14727;
count__14707_14711 = G__14728;
i__14708_14712 = G__14729;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3640__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__14730){var map__14732 = p__14730;var map__14732__$1 = ((cljs.core.seq_QMARK_.call(null,map__14732))?cljs.core.apply.call(null,cljs.core.hash_map,map__14732):map__14732);var opts = map__14732__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__14730 = null;if (arguments.length > 0) {
  p__14730 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__14730);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__14733){
var p__14730 = cljs.core.seq(arglist__14733);
return watch_and_reload__delegate(p__14730);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map