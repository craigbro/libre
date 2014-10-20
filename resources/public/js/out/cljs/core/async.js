// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11335 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11335 = (function (f,fn_handler,meta11336){
this.f = f;
this.fn_handler = fn_handler;
this.meta11336 = meta11336;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11335.cljs$lang$type = true;
cljs.core.async.t11335.cljs$lang$ctorStr = "cljs.core.async/t11335";
cljs.core.async.t11335.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11335");
});
cljs.core.async.t11335.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11337){var self__ = this;
var _11337__$1 = this;return self__.meta11336;
});
cljs.core.async.t11335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11337,meta11336__$1){var self__ = this;
var _11337__$1 = this;return (new cljs.core.async.t11335(self__.f,self__.fn_handler,meta11336__$1));
});
cljs.core.async.__GT_t11335 = (function __GT_t11335(f__$1,fn_handler__$1,meta11336){return (new cljs.core.async.t11335(f__$1,fn_handler__$1,meta11336));
});
}
return (new cljs.core.async.t11335(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11339 = buff;if(G__11339)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__11339.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11339.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11339);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11339);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11340 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11340);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11340,ret){
return (function (){return fn1.call(null,val_11340);
});})(val_11340,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___11341 = n;var x_11342 = (0);while(true){
if((x_11342 < n__4510__auto___11341))
{(a[x_11342] = (0));
{
var G__11343 = (x_11342 + (1));
x_11342 = G__11343;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11344 = (i + (1));
i = G__11344;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11348 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11348 = (function (flag,alt_flag,meta11349){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11349 = meta11349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11348.cljs$lang$type = true;
cljs.core.async.t11348.cljs$lang$ctorStr = "cljs.core.async/t11348";
cljs.core.async.t11348.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11348");
});})(flag))
;
cljs.core.async.t11348.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11350){var self__ = this;
var _11350__$1 = this;return self__.meta11349;
});})(flag))
;
cljs.core.async.t11348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11350,meta11349__$1){var self__ = this;
var _11350__$1 = this;return (new cljs.core.async.t11348(self__.flag,self__.alt_flag,meta11349__$1));
});})(flag))
;
cljs.core.async.__GT_t11348 = ((function (flag){
return (function __GT_t11348(flag__$1,alt_flag__$1,meta11349){return (new cljs.core.async.t11348(flag__$1,alt_flag__$1,meta11349));
});})(flag))
;
}
return (new cljs.core.async.t11348(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11354 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11354 = (function (cb,flag,alt_handler,meta11355){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11355 = meta11355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11354.cljs$lang$type = true;
cljs.core.async.t11354.cljs$lang$ctorStr = "cljs.core.async/t11354";
cljs.core.async.t11354.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11354");
});
cljs.core.async.t11354.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11356){var self__ = this;
var _11356__$1 = this;return self__.meta11355;
});
cljs.core.async.t11354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11356,meta11355__$1){var self__ = this;
var _11356__$1 = this;return (new cljs.core.async.t11354(self__.cb,self__.flag,self__.alt_handler,meta11355__$1));
});
cljs.core.async.__GT_t11354 = (function __GT_t11354(cb__$1,flag__$1,alt_handler__$1,meta11355){return (new cljs.core.async.t11354(cb__$1,flag__$1,alt_handler__$1,meta11355));
});
}
return (new cljs.core.async.t11354(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11357_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11357_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11358_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11358_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11359 = (i + (1));
i = G__11359;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3640__auto__ = ret;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3628__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11360){var map__11362 = p__11360;var map__11362__$1 = ((cljs.core.seq_QMARK_.call(null,map__11362))?cljs.core.apply.call(null,cljs.core.hash_map,map__11362):map__11362);var opts = map__11362__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__11360 = null;if (arguments.length > 1) {
  p__11360 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11360);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11363){
var ports = cljs.core.first(arglist__11363);
var p__11360 = cljs.core.rest(arglist__11363);
return alts_BANG___delegate(ports,p__11360);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11371 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11371 = (function (ch,f,map_LT_,meta11372){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11372 = meta11372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11371.cljs$lang$type = true;
cljs.core.async.t11371.cljs$lang$ctorStr = "cljs.core.async/t11371";
cljs.core.async.t11371.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11371");
});
cljs.core.async.t11371.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11371.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11371.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11371.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11374 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11374 = (function (fn1,_,meta11372,ch,f,map_LT_,meta11375){
this.fn1 = fn1;
this._ = _;
this.meta11372 = meta11372;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11375 = meta11375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11374.cljs$lang$type = true;
cljs.core.async.t11374.cljs$lang$ctorStr = "cljs.core.async/t11374";
cljs.core.async.t11374.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11374");
});})(___$1))
;
cljs.core.async.t11374.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11374.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11364_SHARP_){return f1.call(null,(((p1__11364_SHARP_ == null))?null:self__.f.call(null,p1__11364_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11376){var self__ = this;
var _11376__$1 = this;return self__.meta11375;
});})(___$1))
;
cljs.core.async.t11374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11376,meta11375__$1){var self__ = this;
var _11376__$1 = this;return (new cljs.core.async.t11374(self__.fn1,self__._,self__.meta11372,self__.ch,self__.f,self__.map_LT_,meta11375__$1));
});})(___$1))
;
cljs.core.async.__GT_t11374 = ((function (___$1){
return (function __GT_t11374(fn1__$1,___$2,meta11372__$1,ch__$2,f__$2,map_LT___$2,meta11375){return (new cljs.core.async.t11374(fn1__$1,___$2,meta11372__$1,ch__$2,f__$2,map_LT___$2,meta11375));
});})(___$1))
;
}
return (new cljs.core.async.t11374(fn1,___$1,self__.meta11372,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11371.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11371.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11371.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11373){var self__ = this;
var _11373__$1 = this;return self__.meta11372;
});
cljs.core.async.t11371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11373,meta11372__$1){var self__ = this;
var _11373__$1 = this;return (new cljs.core.async.t11371(self__.ch,self__.f,self__.map_LT_,meta11372__$1));
});
cljs.core.async.__GT_t11371 = (function __GT_t11371(ch__$1,f__$1,map_LT___$1,meta11372){return (new cljs.core.async.t11371(ch__$1,f__$1,map_LT___$1,meta11372));
});
}
return (new cljs.core.async.t11371(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11380 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11380 = (function (ch,f,map_GT_,meta11381){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11381 = meta11381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11380.cljs$lang$type = true;
cljs.core.async.t11380.cljs$lang$ctorStr = "cljs.core.async/t11380";
cljs.core.async.t11380.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11380");
});
cljs.core.async.t11380.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11380.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11380.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11380.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11380.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11380.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11382){var self__ = this;
var _11382__$1 = this;return self__.meta11381;
});
cljs.core.async.t11380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11382,meta11381__$1){var self__ = this;
var _11382__$1 = this;return (new cljs.core.async.t11380(self__.ch,self__.f,self__.map_GT_,meta11381__$1));
});
cljs.core.async.__GT_t11380 = (function __GT_t11380(ch__$1,f__$1,map_GT___$1,meta11381){return (new cljs.core.async.t11380(ch__$1,f__$1,map_GT___$1,meta11381));
});
}
return (new cljs.core.async.t11380(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11386 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11386 = (function (ch,p,filter_GT_,meta11387){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11387 = meta11387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11386.cljs$lang$type = true;
cljs.core.async.t11386.cljs$lang$ctorStr = "cljs.core.async/t11386";
cljs.core.async.t11386.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11386");
});
cljs.core.async.t11386.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11386.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11386.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11386.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11386.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11386.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11386.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11388){var self__ = this;
var _11388__$1 = this;return self__.meta11387;
});
cljs.core.async.t11386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11388,meta11387__$1){var self__ = this;
var _11388__$1 = this;return (new cljs.core.async.t11386(self__.ch,self__.p,self__.filter_GT_,meta11387__$1));
});
cljs.core.async.__GT_t11386 = (function __GT_t11386(ch__$1,p__$1,filter_GT___$1,meta11387){return (new cljs.core.async.t11386(ch__$1,p__$1,filter_GT___$1,meta11387));
});
}
return (new cljs.core.async.t11386(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6481__auto___11471 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6481__auto___11471,out){
return (function (){var f__6482__auto__ = (function (){var switch__6466__auto__ = ((function (c__6481__auto___11471,out){
return (function (state_11450){var state_val_11451 = (state_11450[(1)]);if((state_val_11451 === (7)))
{var inst_11446 = (state_11450[(2)]);var state_11450__$1 = state_11450;var statearr_11452_11472 = state_11450__$1;(statearr_11452_11472[(2)] = inst_11446);
(statearr_11452_11472[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11451 === (1)))
{var state_11450__$1 = state_11450;var statearr_11453_11473 = state_11450__$1;(statearr_11453_11473[(2)] = null);
(statearr_11453_11473[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11451 === (4)))
{var inst_11432 = (state_11450[(7)]);var inst_11432__$1 = (state_11450[(2)]);var inst_11433 = (inst_11432__$1 == null);var state_11450__$1 = (function (){var statearr_11454 = state_11450;(statearr_11454[(7)] = inst_11432__$1);
return statearr_11454;
})();if(cljs.core.truth_(inst_11433))
{var statearr_11455_11474 = state_11450__$1;(statearr_11455_11474[(1)] = (5));
} else
{var statearr_11456_11475 = state_11450__$1;(statearr_11456_11475[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11451 === (6)))
{var inst_11432 = (state_11450[(7)]);var inst_11437 = p.call(null,inst_11432);var state_11450__$1 = state_11450;if(cljs.core.truth_(inst_11437))
{var statearr_11457_11476 = state_11450__$1;(statearr_11457_11476[(1)] = (8));
} else
{var statearr_11458_11477 = state_11450__$1;(statearr_11458_11477[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11451 === (3)))
{var inst_11448 = (state_11450[(2)]);var state_11450__$1 = state_11450;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11450__$1,inst_11448);
} else
{if((state_val_11451 === (2)))
{var state_11450__$1 = state_11450;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11450__$1,(4),ch);
} else
{if((state_val_11451 === (11)))
{var inst_11440 = (state_11450[(2)]);var state_11450__$1 = state_11450;var statearr_11459_11478 = state_11450__$1;(statearr_11459_11478[(2)] = inst_11440);
(statearr_11459_11478[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11451 === (9)))
{var state_11450__$1 = state_11450;var statearr_11460_11479 = state_11450__$1;(statearr_11460_11479[(2)] = null);
(statearr_11460_11479[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11451 === (5)))
{var inst_11435 = cljs.core.async.close_BANG_.call(null,out);var state_11450__$1 = state_11450;var statearr_11461_11480 = state_11450__$1;(statearr_11461_11480[(2)] = inst_11435);
(statearr_11461_11480[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11451 === (10)))
{var inst_11443 = (state_11450[(2)]);var state_11450__$1 = (function (){var statearr_11462 = state_11450;(statearr_11462[(8)] = inst_11443);
return statearr_11462;
})();var statearr_11463_11481 = state_11450__$1;(statearr_11463_11481[(2)] = null);
(statearr_11463_11481[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11451 === (8)))
{var inst_11432 = (state_11450[(7)]);var state_11450__$1 = state_11450;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11450__$1,(11),out,inst_11432);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6481__auto___11471,out))
;return ((function (switch__6466__auto__,c__6481__auto___11471,out){
return (function() {
var state_machine__6467__auto__ = null;
var state_machine__6467__auto____0 = (function (){var statearr_11467 = [null,null,null,null,null,null,null,null,null];(statearr_11467[(0)] = state_machine__6467__auto__);
(statearr_11467[(1)] = (1));
return statearr_11467;
});
var state_machine__6467__auto____1 = (function (state_11450){while(true){
var ret_value__6468__auto__ = (function (){try{while(true){
var result__6469__auto__ = switch__6466__auto__.call(null,state_11450);if(cljs.core.keyword_identical_QMARK_.call(null,result__6469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6469__auto__;
}
break;
}
}catch (e11468){if((e11468 instanceof Object))
{var ex__6470__auto__ = e11468;var statearr_11469_11482 = state_11450;(statearr_11469_11482[(5)] = ex__6470__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11450);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11468;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11483 = state_11450;
state_11450 = G__11483;
continue;
}
} else
{return ret_value__6468__auto__;
}
break;
}
});
state_machine__6467__auto__ = function(state_11450){
switch(arguments.length){
case 0:
return state_machine__6467__auto____0.call(this);
case 1:
return state_machine__6467__auto____1.call(this,state_11450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6467__auto____0;
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6467__auto____1;
return state_machine__6467__auto__;
})()
;})(switch__6466__auto__,c__6481__auto___11471,out))
})();var state__6483__auto__ = (function (){var statearr_11470 = f__6482__auto__.call(null);(statearr_11470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6481__auto___11471);
return statearr_11470;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6483__auto__);
});})(c__6481__auto___11471,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6481__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6481__auto__){
return (function (){var f__6482__auto__ = (function (){var switch__6466__auto__ = ((function (c__6481__auto__){
return (function (state_11649){var state_val_11650 = (state_11649[(1)]);if((state_val_11650 === (7)))
{var inst_11645 = (state_11649[(2)]);var state_11649__$1 = state_11649;var statearr_11651_11692 = state_11649__$1;(statearr_11651_11692[(2)] = inst_11645);
(statearr_11651_11692[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11650 === (20)))
{var inst_11615 = (state_11649[(7)]);var inst_11626 = (state_11649[(2)]);var inst_11627 = cljs.core.next.call(null,inst_11615);var inst_11601 = inst_11627;var inst_11602 = null;var inst_11603 = (0);var inst_11604 = (0);var state_11649__$1 = (function (){var statearr_11652 = state_11649;(statearr_11652[(8)] = inst_11601);
(statearr_11652[(9)] = inst_11604);
(statearr_11652[(10)] = inst_11602);
(statearr_11652[(11)] = inst_11603);
(statearr_11652[(12)] = inst_11626);
return statearr_11652;
})();var statearr_11653_11693 = state_11649__$1;(statearr_11653_11693[(2)] = null);
(statearr_11653_11693[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11650 === (1)))
{var state_11649__$1 = state_11649;var statearr_11654_11694 = state_11649__$1;(statearr_11654_11694[(2)] = null);
(statearr_11654_11694[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11650 === (4)))
{var inst_11590 = (state_11649[(13)]);var inst_11590__$1 = (state_11649[(2)]);var inst_11591 = (inst_11590__$1 == null);var state_11649__$1 = (function (){var statearr_11655 = state_11649;(statearr_11655[(13)] = inst_11590__$1);
return statearr_11655;
})();if(cljs.core.truth_(inst_11591))
{var statearr_11656_11695 = state_11649__$1;(statearr_11656_11695[(1)] = (5));
} else
{var statearr_11657_11696 = state_11649__$1;(statearr_11657_11696[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11650 === (15)))
{var state_11649__$1 = state_11649;var statearr_11661_11697 = state_11649__$1;(statearr_11661_11697[(2)] = null);
(statearr_11661_11697[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11650 === (21)))
{var state_11649__$1 = state_11649;var statearr_11662_11698 = state_11649__$1;(statearr_11662_11698[(2)] = null);
(statearr_11662_11698[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11650 === (13)))
{var inst_11601 = (state_11649[(8)]);var inst_11604 = (state_11649[(9)]);var inst_11602 = (state_11649[(10)]);var inst_11603 = (state_11649[(11)]);var inst_11611 = (state_11649[(2)]);var inst_11612 = (inst_11604 + (1));var tmp11658 = inst_11601;var tmp11659 = inst_11602;var tmp11660 = inst_11603;var inst_11601__$1 = tmp11658;var inst_11602__$1 = tmp11659;var inst_11603__$1 = tmp11660;var inst_11604__$1 = inst_11612;var state_11649__$1 = (function (){var statearr_11663 = state_11649;(statearr_11663[(14)] = inst_11611);
(statearr_11663[(8)] = inst_11601__$1);
(statearr_11663[(9)] = inst_11604__$1);
(statearr_11663[(10)] = inst_11602__$1);
(statearr_11663[(11)] = inst_11603__$1);
return statearr_11663;
})();var statearr_11664_11699 = state_11649__$1;(statearr_11664_11699[(2)] = null);
(statearr_11664_11699[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11650 === (22)))
{var state_11649__$1 = state_11649;var statearr_11665_11700 = state_11649__$1;(statearr_11665_11700[(2)] = null);
(statearr_11665_11700[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11650 === (6)))
{var inst_11590 = (state_11649[(13)]);var inst_11599 = f.call(null,inst_11590);var inst_11600 = cljs.core.seq.call(null,inst_11599);var inst_11601 = inst_11600;var inst_11602 = null;var inst_11603 = (0);var inst_11604 = (0);var state_11649__$1 = (function (){var statearr_11666 = state_11649;(statearr_11666[(8)] = inst_11601);
(statearr_11666[(9)] = inst_11604);
(statearr_11666[(10)] = inst_11602);
(statearr_11666[(11)] = inst_11603);
return statearr_11666;
})();var statearr_11667_11701 = state_11649__$1;(statearr_11667_11701[(2)] = null);
(statearr_11667_11701[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11650 === (17)))
{var inst_11615 = (state_11649[(7)]);var inst_11619 = cljs.core.chunk_first.call(null,inst_11615);var inst_11620 = cljs.core.chunk_rest.call(null,inst_11615);var inst_11621 = cljs.core.count.call(null,inst_11619);var inst_11601 = inst_11620;var inst_11602 = inst_11619;var inst_11603 = inst_11621;var inst_11604 = (0);var state_11649__$1 = (function (){var statearr_11668 = state_11649;(statearr_11668[(8)] = inst_11601);
(statearr_11668[(9)] = inst_11604);
(statearr_11668[(10)] = inst_11602);
(statearr_11668[(11)] = inst_11603);
return statearr_11668;
})();var statearr_11669_11702 = state_11649__$1;(statearr_11669_11702[(2)] = null);
(statearr_11669_11702[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11650 === (3)))
{var inst_11647 = (state_11649[(2)]);var state_11649__$1 = state_11649;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11649__$1,inst_11647);
} else
{if((state_val_11650 === (12)))
{var inst_11635 = (state_11649[(2)]);var state_11649__$1 = state_11649;var statearr_11670_11703 = state_11649__$1;(statearr_11670_11703[(2)] = inst_11635);
(statearr_11670_11703[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11650 === (2)))
{var state_11649__$1 = state_11649;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11649__$1,(4),in$);
} else
{if((state_val_11650 === (23)))
{var inst_11643 = (state_11649[(2)]);var state_11649__$1 = state_11649;var statearr_11671_11704 = state_11649__$1;(statearr_11671_11704[(2)] = inst_11643);
(statearr_11671_11704[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11650 === (19)))
{var inst_11630 = (state_11649[(2)]);var state_11649__$1 = state_11649;var statearr_11672_11705 = state_11649__$1;(statearr_11672_11705[(2)] = inst_11630);
(statearr_11672_11705[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11650 === (11)))
{var inst_11601 = (state_11649[(8)]);var inst_11615 = (state_11649[(7)]);var inst_11615__$1 = cljs.core.seq.call(null,inst_11601);var state_11649__$1 = (function (){var statearr_11673 = state_11649;(statearr_11673[(7)] = inst_11615__$1);
return statearr_11673;
})();if(inst_11615__$1)
{var statearr_11674_11706 = state_11649__$1;(statearr_11674_11706[(1)] = (14));
} else
{var statearr_11675_11707 = state_11649__$1;(statearr_11675_11707[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11650 === (9)))
{var inst_11637 = (state_11649[(2)]);var inst_11638 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11649__$1 = (function (){var statearr_11676 = state_11649;(statearr_11676[(15)] = inst_11637);
return statearr_11676;
})();if(cljs.core.truth_(inst_11638))
{var statearr_11677_11708 = state_11649__$1;(statearr_11677_11708[(1)] = (21));
} else
{var statearr_11678_11709 = state_11649__$1;(statearr_11678_11709[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11650 === (5)))
{var inst_11593 = cljs.core.async.close_BANG_.call(null,out);var state_11649__$1 = state_11649;var statearr_11679_11710 = state_11649__$1;(statearr_11679_11710[(2)] = inst_11593);
(statearr_11679_11710[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11650 === (14)))
{var inst_11615 = (state_11649[(7)]);var inst_11617 = cljs.core.chunked_seq_QMARK_.call(null,inst_11615);var state_11649__$1 = state_11649;if(inst_11617)
{var statearr_11680_11711 = state_11649__$1;(statearr_11680_11711[(1)] = (17));
} else
{var statearr_11681_11712 = state_11649__$1;(statearr_11681_11712[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11650 === (16)))
{var inst_11633 = (state_11649[(2)]);var state_11649__$1 = state_11649;var statearr_11682_11713 = state_11649__$1;(statearr_11682_11713[(2)] = inst_11633);
(statearr_11682_11713[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11650 === (10)))
{var inst_11604 = (state_11649[(9)]);var inst_11602 = (state_11649[(10)]);var inst_11609 = cljs.core._nth.call(null,inst_11602,inst_11604);var state_11649__$1 = state_11649;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11649__$1,(13),out,inst_11609);
} else
{if((state_val_11650 === (18)))
{var inst_11615 = (state_11649[(7)]);var inst_11624 = cljs.core.first.call(null,inst_11615);var state_11649__$1 = state_11649;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11649__$1,(20),out,inst_11624);
} else
{if((state_val_11650 === (8)))
{var inst_11604 = (state_11649[(9)]);var inst_11603 = (state_11649[(11)]);var inst_11606 = (inst_11604 < inst_11603);var inst_11607 = inst_11606;var state_11649__$1 = state_11649;if(cljs.core.truth_(inst_11607))
{var statearr_11683_11714 = state_11649__$1;(statearr_11683_11714[(1)] = (10));
} else
{var statearr_11684_11715 = state_11649__$1;(statearr_11684_11715[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6481__auto__))
;return ((function (switch__6466__auto__,c__6481__auto__){
return (function() {
var state_machine__6467__auto__ = null;
var state_machine__6467__auto____0 = (function (){var statearr_11688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11688[(0)] = state_machine__6467__auto__);
(statearr_11688[(1)] = (1));
return statearr_11688;
});
var state_machine__6467__auto____1 = (function (state_11649){while(true){
var ret_value__6468__auto__ = (function (){try{while(true){
var result__6469__auto__ = switch__6466__auto__.call(null,state_11649);if(cljs.core.keyword_identical_QMARK_.call(null,result__6469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6469__auto__;
}
break;
}
}catch (e11689){if((e11689 instanceof Object))
{var ex__6470__auto__ = e11689;var statearr_11690_11716 = state_11649;(statearr_11690_11716[(5)] = ex__6470__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11649);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11689;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11717 = state_11649;
state_11649 = G__11717;
continue;
}
} else
{return ret_value__6468__auto__;
}
break;
}
});
state_machine__6467__auto__ = function(state_11649){
switch(arguments.length){
case 0:
return state_machine__6467__auto____0.call(this);
case 1:
return state_machine__6467__auto____1.call(this,state_11649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6467__auto____0;
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6467__auto____1;
return state_machine__6467__auto__;
})()
;})(switch__6466__auto__,c__6481__auto__))
})();var state__6483__auto__ = (function (){var statearr_11691 = f__6482__auto__.call(null);(statearr_11691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6481__auto__);
return statearr_11691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6483__auto__);
});})(c__6481__auto__))
);
return c__6481__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6481__auto___11812 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6481__auto___11812){
return (function (){var f__6482__auto__ = (function (){var switch__6466__auto__ = ((function (c__6481__auto___11812){
return (function (state_11788){var state_val_11789 = (state_11788[(1)]);if((state_val_11789 === (7)))
{var inst_11784 = (state_11788[(2)]);var state_11788__$1 = state_11788;var statearr_11790_11813 = state_11788__$1;(statearr_11790_11813[(2)] = inst_11784);
(statearr_11790_11813[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11789 === (1)))
{var state_11788__$1 = state_11788;var statearr_11791_11814 = state_11788__$1;(statearr_11791_11814[(2)] = null);
(statearr_11791_11814[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11789 === (4)))
{var inst_11767 = (state_11788[(7)]);var inst_11767__$1 = (state_11788[(2)]);var inst_11768 = (inst_11767__$1 == null);var state_11788__$1 = (function (){var statearr_11792 = state_11788;(statearr_11792[(7)] = inst_11767__$1);
return statearr_11792;
})();if(cljs.core.truth_(inst_11768))
{var statearr_11793_11815 = state_11788__$1;(statearr_11793_11815[(1)] = (5));
} else
{var statearr_11794_11816 = state_11788__$1;(statearr_11794_11816[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11789 === (13)))
{var state_11788__$1 = state_11788;var statearr_11795_11817 = state_11788__$1;(statearr_11795_11817[(2)] = null);
(statearr_11795_11817[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11789 === (6)))
{var inst_11767 = (state_11788[(7)]);var state_11788__$1 = state_11788;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11788__$1,(11),to,inst_11767);
} else
{if((state_val_11789 === (3)))
{var inst_11786 = (state_11788[(2)]);var state_11788__$1 = state_11788;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11788__$1,inst_11786);
} else
{if((state_val_11789 === (12)))
{var state_11788__$1 = state_11788;var statearr_11796_11818 = state_11788__$1;(statearr_11796_11818[(2)] = null);
(statearr_11796_11818[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11789 === (2)))
{var state_11788__$1 = state_11788;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11788__$1,(4),from);
} else
{if((state_val_11789 === (11)))
{var inst_11777 = (state_11788[(2)]);var state_11788__$1 = state_11788;if(cljs.core.truth_(inst_11777))
{var statearr_11797_11819 = state_11788__$1;(statearr_11797_11819[(1)] = (12));
} else
{var statearr_11798_11820 = state_11788__$1;(statearr_11798_11820[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11789 === (9)))
{var state_11788__$1 = state_11788;var statearr_11799_11821 = state_11788__$1;(statearr_11799_11821[(2)] = null);
(statearr_11799_11821[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11789 === (5)))
{var state_11788__$1 = state_11788;if(cljs.core.truth_(close_QMARK_))
{var statearr_11800_11822 = state_11788__$1;(statearr_11800_11822[(1)] = (8));
} else
{var statearr_11801_11823 = state_11788__$1;(statearr_11801_11823[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11789 === (14)))
{var inst_11782 = (state_11788[(2)]);var state_11788__$1 = state_11788;var statearr_11802_11824 = state_11788__$1;(statearr_11802_11824[(2)] = inst_11782);
(statearr_11802_11824[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11789 === (10)))
{var inst_11774 = (state_11788[(2)]);var state_11788__$1 = state_11788;var statearr_11803_11825 = state_11788__$1;(statearr_11803_11825[(2)] = inst_11774);
(statearr_11803_11825[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11789 === (8)))
{var inst_11771 = cljs.core.async.close_BANG_.call(null,to);var state_11788__$1 = state_11788;var statearr_11804_11826 = state_11788__$1;(statearr_11804_11826[(2)] = inst_11771);
(statearr_11804_11826[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6481__auto___11812))
;return ((function (switch__6466__auto__,c__6481__auto___11812){
return (function() {
var state_machine__6467__auto__ = null;
var state_machine__6467__auto____0 = (function (){var statearr_11808 = [null,null,null,null,null,null,null,null];(statearr_11808[(0)] = state_machine__6467__auto__);
(statearr_11808[(1)] = (1));
return statearr_11808;
});
var state_machine__6467__auto____1 = (function (state_11788){while(true){
var ret_value__6468__auto__ = (function (){try{while(true){
var result__6469__auto__ = switch__6466__auto__.call(null,state_11788);if(cljs.core.keyword_identical_QMARK_.call(null,result__6469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6469__auto__;
}
break;
}
}catch (e11809){if((e11809 instanceof Object))
{var ex__6470__auto__ = e11809;var statearr_11810_11827 = state_11788;(statearr_11810_11827[(5)] = ex__6470__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11788);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11809;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11828 = state_11788;
state_11788 = G__11828;
continue;
}
} else
{return ret_value__6468__auto__;
}
break;
}
});
state_machine__6467__auto__ = function(state_11788){
switch(arguments.length){
case 0:
return state_machine__6467__auto____0.call(this);
case 1:
return state_machine__6467__auto____1.call(this,state_11788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6467__auto____0;
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6467__auto____1;
return state_machine__6467__auto__;
})()
;})(switch__6466__auto__,c__6481__auto___11812))
})();var state__6483__auto__ = (function (){var statearr_11811 = f__6482__auto__.call(null);(statearr_11811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6481__auto___11812);
return statearr_11811;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6483__auto__);
});})(c__6481__auto___11812))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6481__auto___11929 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6481__auto___11929,tc,fc){
return (function (){var f__6482__auto__ = (function (){var switch__6466__auto__ = ((function (c__6481__auto___11929,tc,fc){
return (function (state_11904){var state_val_11905 = (state_11904[(1)]);if((state_val_11905 === (7)))
{var inst_11900 = (state_11904[(2)]);var state_11904__$1 = state_11904;var statearr_11906_11930 = state_11904__$1;(statearr_11906_11930[(2)] = inst_11900);
(statearr_11906_11930[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11905 === (1)))
{var state_11904__$1 = state_11904;var statearr_11907_11931 = state_11904__$1;(statearr_11907_11931[(2)] = null);
(statearr_11907_11931[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11905 === (4)))
{var inst_11881 = (state_11904[(7)]);var inst_11881__$1 = (state_11904[(2)]);var inst_11882 = (inst_11881__$1 == null);var state_11904__$1 = (function (){var statearr_11908 = state_11904;(statearr_11908[(7)] = inst_11881__$1);
return statearr_11908;
})();if(cljs.core.truth_(inst_11882))
{var statearr_11909_11932 = state_11904__$1;(statearr_11909_11932[(1)] = (5));
} else
{var statearr_11910_11933 = state_11904__$1;(statearr_11910_11933[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11905 === (13)))
{var state_11904__$1 = state_11904;var statearr_11911_11934 = state_11904__$1;(statearr_11911_11934[(2)] = null);
(statearr_11911_11934[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11905 === (6)))
{var inst_11881 = (state_11904[(7)]);var inst_11887 = p.call(null,inst_11881);var state_11904__$1 = state_11904;if(cljs.core.truth_(inst_11887))
{var statearr_11912_11935 = state_11904__$1;(statearr_11912_11935[(1)] = (9));
} else
{var statearr_11913_11936 = state_11904__$1;(statearr_11913_11936[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11905 === (3)))
{var inst_11902 = (state_11904[(2)]);var state_11904__$1 = state_11904;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11904__$1,inst_11902);
} else
{if((state_val_11905 === (12)))
{var state_11904__$1 = state_11904;var statearr_11914_11937 = state_11904__$1;(statearr_11914_11937[(2)] = null);
(statearr_11914_11937[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11905 === (2)))
{var state_11904__$1 = state_11904;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11904__$1,(4),ch);
} else
{if((state_val_11905 === (11)))
{var inst_11881 = (state_11904[(7)]);var inst_11891 = (state_11904[(2)]);var state_11904__$1 = state_11904;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11904__$1,(8),inst_11891,inst_11881);
} else
{if((state_val_11905 === (9)))
{var state_11904__$1 = state_11904;var statearr_11915_11938 = state_11904__$1;(statearr_11915_11938[(2)] = tc);
(statearr_11915_11938[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11905 === (5)))
{var inst_11884 = cljs.core.async.close_BANG_.call(null,tc);var inst_11885 = cljs.core.async.close_BANG_.call(null,fc);var state_11904__$1 = (function (){var statearr_11916 = state_11904;(statearr_11916[(8)] = inst_11884);
return statearr_11916;
})();var statearr_11917_11939 = state_11904__$1;(statearr_11917_11939[(2)] = inst_11885);
(statearr_11917_11939[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11905 === (14)))
{var inst_11898 = (state_11904[(2)]);var state_11904__$1 = state_11904;var statearr_11918_11940 = state_11904__$1;(statearr_11918_11940[(2)] = inst_11898);
(statearr_11918_11940[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11905 === (10)))
{var state_11904__$1 = state_11904;var statearr_11919_11941 = state_11904__$1;(statearr_11919_11941[(2)] = fc);
(statearr_11919_11941[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11905 === (8)))
{var inst_11893 = (state_11904[(2)]);var state_11904__$1 = state_11904;if(cljs.core.truth_(inst_11893))
{var statearr_11920_11942 = state_11904__$1;(statearr_11920_11942[(1)] = (12));
} else
{var statearr_11921_11943 = state_11904__$1;(statearr_11921_11943[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6481__auto___11929,tc,fc))
;return ((function (switch__6466__auto__,c__6481__auto___11929,tc,fc){
return (function() {
var state_machine__6467__auto__ = null;
var state_machine__6467__auto____0 = (function (){var statearr_11925 = [null,null,null,null,null,null,null,null,null];(statearr_11925[(0)] = state_machine__6467__auto__);
(statearr_11925[(1)] = (1));
return statearr_11925;
});
var state_machine__6467__auto____1 = (function (state_11904){while(true){
var ret_value__6468__auto__ = (function (){try{while(true){
var result__6469__auto__ = switch__6466__auto__.call(null,state_11904);if(cljs.core.keyword_identical_QMARK_.call(null,result__6469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6469__auto__;
}
break;
}
}catch (e11926){if((e11926 instanceof Object))
{var ex__6470__auto__ = e11926;var statearr_11927_11944 = state_11904;(statearr_11927_11944[(5)] = ex__6470__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11904);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11926;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11945 = state_11904;
state_11904 = G__11945;
continue;
}
} else
{return ret_value__6468__auto__;
}
break;
}
});
state_machine__6467__auto__ = function(state_11904){
switch(arguments.length){
case 0:
return state_machine__6467__auto____0.call(this);
case 1:
return state_machine__6467__auto____1.call(this,state_11904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6467__auto____0;
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6467__auto____1;
return state_machine__6467__auto__;
})()
;})(switch__6466__auto__,c__6481__auto___11929,tc,fc))
})();var state__6483__auto__ = (function (){var statearr_11928 = f__6482__auto__.call(null);(statearr_11928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6481__auto___11929);
return statearr_11928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6483__auto__);
});})(c__6481__auto___11929,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6481__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6481__auto__){
return (function (){var f__6482__auto__ = (function (){var switch__6466__auto__ = ((function (c__6481__auto__){
return (function (state_11992){var state_val_11993 = (state_11992[(1)]);if((state_val_11993 === (7)))
{var inst_11988 = (state_11992[(2)]);var state_11992__$1 = state_11992;var statearr_11994_12010 = state_11992__$1;(statearr_11994_12010[(2)] = inst_11988);
(statearr_11994_12010[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11993 === (6)))
{var inst_11978 = (state_11992[(7)]);var inst_11981 = (state_11992[(8)]);var inst_11985 = f.call(null,inst_11978,inst_11981);var inst_11978__$1 = inst_11985;var state_11992__$1 = (function (){var statearr_11995 = state_11992;(statearr_11995[(7)] = inst_11978__$1);
return statearr_11995;
})();var statearr_11996_12011 = state_11992__$1;(statearr_11996_12011[(2)] = null);
(statearr_11996_12011[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11993 === (5)))
{var inst_11978 = (state_11992[(7)]);var state_11992__$1 = state_11992;var statearr_11997_12012 = state_11992__$1;(statearr_11997_12012[(2)] = inst_11978);
(statearr_11997_12012[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11993 === (4)))
{var inst_11981 = (state_11992[(8)]);var inst_11981__$1 = (state_11992[(2)]);var inst_11982 = (inst_11981__$1 == null);var state_11992__$1 = (function (){var statearr_11998 = state_11992;(statearr_11998[(8)] = inst_11981__$1);
return statearr_11998;
})();if(cljs.core.truth_(inst_11982))
{var statearr_11999_12013 = state_11992__$1;(statearr_11999_12013[(1)] = (5));
} else
{var statearr_12000_12014 = state_11992__$1;(statearr_12000_12014[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11993 === (3)))
{var inst_11990 = (state_11992[(2)]);var state_11992__$1 = state_11992;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11992__$1,inst_11990);
} else
{if((state_val_11993 === (2)))
{var state_11992__$1 = state_11992;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11992__$1,(4),ch);
} else
{if((state_val_11993 === (1)))
{var inst_11978 = init;var state_11992__$1 = (function (){var statearr_12001 = state_11992;(statearr_12001[(7)] = inst_11978);
return statearr_12001;
})();var statearr_12002_12015 = state_11992__$1;(statearr_12002_12015[(2)] = null);
(statearr_12002_12015[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6481__auto__))
;return ((function (switch__6466__auto__,c__6481__auto__){
return (function() {
var state_machine__6467__auto__ = null;
var state_machine__6467__auto____0 = (function (){var statearr_12006 = [null,null,null,null,null,null,null,null,null];(statearr_12006[(0)] = state_machine__6467__auto__);
(statearr_12006[(1)] = (1));
return statearr_12006;
});
var state_machine__6467__auto____1 = (function (state_11992){while(true){
var ret_value__6468__auto__ = (function (){try{while(true){
var result__6469__auto__ = switch__6466__auto__.call(null,state_11992);if(cljs.core.keyword_identical_QMARK_.call(null,result__6469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6469__auto__;
}
break;
}
}catch (e12007){if((e12007 instanceof Object))
{var ex__6470__auto__ = e12007;var statearr_12008_12016 = state_11992;(statearr_12008_12016[(5)] = ex__6470__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11992);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12007;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12017 = state_11992;
state_11992 = G__12017;
continue;
}
} else
{return ret_value__6468__auto__;
}
break;
}
});
state_machine__6467__auto__ = function(state_11992){
switch(arguments.length){
case 0:
return state_machine__6467__auto____0.call(this);
case 1:
return state_machine__6467__auto____1.call(this,state_11992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6467__auto____0;
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6467__auto____1;
return state_machine__6467__auto__;
})()
;})(switch__6466__auto__,c__6481__auto__))
})();var state__6483__auto__ = (function (){var statearr_12009 = f__6482__auto__.call(null);(statearr_12009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6481__auto__);
return statearr_12009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6483__auto__);
});})(c__6481__auto__))
);
return c__6481__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6481__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6481__auto__){
return (function (){var f__6482__auto__ = (function (){var switch__6466__auto__ = ((function (c__6481__auto__){
return (function (state_12091){var state_val_12092 = (state_12091[(1)]);if((state_val_12092 === (7)))
{var inst_12073 = (state_12091[(2)]);var state_12091__$1 = state_12091;var statearr_12093_12116 = state_12091__$1;(statearr_12093_12116[(2)] = inst_12073);
(statearr_12093_12116[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12092 === (1)))
{var inst_12067 = cljs.core.seq.call(null,coll);var inst_12068 = inst_12067;var state_12091__$1 = (function (){var statearr_12094 = state_12091;(statearr_12094[(7)] = inst_12068);
return statearr_12094;
})();var statearr_12095_12117 = state_12091__$1;(statearr_12095_12117[(2)] = null);
(statearr_12095_12117[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12092 === (4)))
{var inst_12068 = (state_12091[(7)]);var inst_12071 = cljs.core.first.call(null,inst_12068);var state_12091__$1 = state_12091;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12091__$1,(7),ch,inst_12071);
} else
{if((state_val_12092 === (13)))
{var inst_12085 = (state_12091[(2)]);var state_12091__$1 = state_12091;var statearr_12096_12118 = state_12091__$1;(statearr_12096_12118[(2)] = inst_12085);
(statearr_12096_12118[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12092 === (6)))
{var inst_12076 = (state_12091[(2)]);var state_12091__$1 = state_12091;if(cljs.core.truth_(inst_12076))
{var statearr_12097_12119 = state_12091__$1;(statearr_12097_12119[(1)] = (8));
} else
{var statearr_12098_12120 = state_12091__$1;(statearr_12098_12120[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12092 === (3)))
{var inst_12089 = (state_12091[(2)]);var state_12091__$1 = state_12091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12091__$1,inst_12089);
} else
{if((state_val_12092 === (12)))
{var state_12091__$1 = state_12091;var statearr_12099_12121 = state_12091__$1;(statearr_12099_12121[(2)] = null);
(statearr_12099_12121[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12092 === (2)))
{var inst_12068 = (state_12091[(7)]);var state_12091__$1 = state_12091;if(cljs.core.truth_(inst_12068))
{var statearr_12100_12122 = state_12091__$1;(statearr_12100_12122[(1)] = (4));
} else
{var statearr_12101_12123 = state_12091__$1;(statearr_12101_12123[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12092 === (11)))
{var inst_12082 = cljs.core.async.close_BANG_.call(null,ch);var state_12091__$1 = state_12091;var statearr_12102_12124 = state_12091__$1;(statearr_12102_12124[(2)] = inst_12082);
(statearr_12102_12124[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12092 === (9)))
{var state_12091__$1 = state_12091;if(cljs.core.truth_(close_QMARK_))
{var statearr_12103_12125 = state_12091__$1;(statearr_12103_12125[(1)] = (11));
} else
{var statearr_12104_12126 = state_12091__$1;(statearr_12104_12126[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12092 === (5)))
{var inst_12068 = (state_12091[(7)]);var state_12091__$1 = state_12091;var statearr_12105_12127 = state_12091__$1;(statearr_12105_12127[(2)] = inst_12068);
(statearr_12105_12127[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12092 === (10)))
{var inst_12087 = (state_12091[(2)]);var state_12091__$1 = state_12091;var statearr_12106_12128 = state_12091__$1;(statearr_12106_12128[(2)] = inst_12087);
(statearr_12106_12128[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12092 === (8)))
{var inst_12068 = (state_12091[(7)]);var inst_12078 = cljs.core.next.call(null,inst_12068);var inst_12068__$1 = inst_12078;var state_12091__$1 = (function (){var statearr_12107 = state_12091;(statearr_12107[(7)] = inst_12068__$1);
return statearr_12107;
})();var statearr_12108_12129 = state_12091__$1;(statearr_12108_12129[(2)] = null);
(statearr_12108_12129[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6481__auto__))
;return ((function (switch__6466__auto__,c__6481__auto__){
return (function() {
var state_machine__6467__auto__ = null;
var state_machine__6467__auto____0 = (function (){var statearr_12112 = [null,null,null,null,null,null,null,null];(statearr_12112[(0)] = state_machine__6467__auto__);
(statearr_12112[(1)] = (1));
return statearr_12112;
});
var state_machine__6467__auto____1 = (function (state_12091){while(true){
var ret_value__6468__auto__ = (function (){try{while(true){
var result__6469__auto__ = switch__6466__auto__.call(null,state_12091);if(cljs.core.keyword_identical_QMARK_.call(null,result__6469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6469__auto__;
}
break;
}
}catch (e12113){if((e12113 instanceof Object))
{var ex__6470__auto__ = e12113;var statearr_12114_12130 = state_12091;(statearr_12114_12130[(5)] = ex__6470__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12091);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12113;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12131 = state_12091;
state_12091 = G__12131;
continue;
}
} else
{return ret_value__6468__auto__;
}
break;
}
});
state_machine__6467__auto__ = function(state_12091){
switch(arguments.length){
case 0:
return state_machine__6467__auto____0.call(this);
case 1:
return state_machine__6467__auto____1.call(this,state_12091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6467__auto____0;
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6467__auto____1;
return state_machine__6467__auto__;
})()
;})(switch__6466__auto__,c__6481__auto__))
})();var state__6483__auto__ = (function (){var statearr_12115 = f__6482__auto__.call(null);(statearr_12115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6481__auto__);
return statearr_12115;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6483__auto__);
});})(c__6481__auto__))
);
return c__6481__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12133 = {};return obj12133;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12135 = {};return obj12135;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12357 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12357 = (function (cs,ch,mult,meta12358){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12358 = meta12358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12357.cljs$lang$type = true;
cljs.core.async.t12357.cljs$lang$ctorStr = "cljs.core.async/t12357";
cljs.core.async.t12357.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12357");
});})(cs))
;
cljs.core.async.t12357.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12357.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12357.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12357.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12357.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12357.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12359){var self__ = this;
var _12359__$1 = this;return self__.meta12358;
});})(cs))
;
cljs.core.async.t12357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12359,meta12358__$1){var self__ = this;
var _12359__$1 = this;return (new cljs.core.async.t12357(self__.cs,self__.ch,self__.mult,meta12358__$1));
});})(cs))
;
cljs.core.async.__GT_t12357 = ((function (cs){
return (function __GT_t12357(cs__$1,ch__$1,mult__$1,meta12358){return (new cljs.core.async.t12357(cs__$1,ch__$1,mult__$1,meta12358));
});})(cs))
;
}
return (new cljs.core.async.t12357(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6481__auto___12578 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6481__auto___12578,cs,m,dchan,dctr,done){
return (function (){var f__6482__auto__ = (function (){var switch__6466__auto__ = ((function (c__6481__auto___12578,cs,m,dchan,dctr,done){
return (function (state_12490){var state_val_12491 = (state_12490[(1)]);if((state_val_12491 === (7)))
{var inst_12486 = (state_12490[(2)]);var state_12490__$1 = state_12490;var statearr_12492_12579 = state_12490__$1;(statearr_12492_12579[(2)] = inst_12486);
(statearr_12492_12579[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (20)))
{var inst_12391 = (state_12490[(7)]);var inst_12401 = cljs.core.first.call(null,inst_12391);var inst_12402 = cljs.core.nth.call(null,inst_12401,(0),null);var inst_12403 = cljs.core.nth.call(null,inst_12401,(1),null);var state_12490__$1 = (function (){var statearr_12493 = state_12490;(statearr_12493[(8)] = inst_12402);
return statearr_12493;
})();if(cljs.core.truth_(inst_12403))
{var statearr_12494_12580 = state_12490__$1;(statearr_12494_12580[(1)] = (22));
} else
{var statearr_12495_12581 = state_12490__$1;(statearr_12495_12581[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (27)))
{var inst_12362 = (state_12490[(9)]);var inst_12433 = (state_12490[(10)]);var inst_12431 = (state_12490[(11)]);var inst_12438 = (state_12490[(12)]);var inst_12438__$1 = cljs.core._nth.call(null,inst_12431,inst_12433);var inst_12439 = cljs.core.async.put_BANG_.call(null,inst_12438__$1,inst_12362,done);var state_12490__$1 = (function (){var statearr_12496 = state_12490;(statearr_12496[(12)] = inst_12438__$1);
return statearr_12496;
})();if(cljs.core.truth_(inst_12439))
{var statearr_12497_12582 = state_12490__$1;(statearr_12497_12582[(1)] = (30));
} else
{var statearr_12498_12583 = state_12490__$1;(statearr_12498_12583[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (1)))
{var state_12490__$1 = state_12490;var statearr_12499_12584 = state_12490__$1;(statearr_12499_12584[(2)] = null);
(statearr_12499_12584[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (24)))
{var inst_12391 = (state_12490[(7)]);var inst_12408 = (state_12490[(2)]);var inst_12409 = cljs.core.next.call(null,inst_12391);var inst_12371 = inst_12409;var inst_12372 = null;var inst_12373 = (0);var inst_12374 = (0);var state_12490__$1 = (function (){var statearr_12500 = state_12490;(statearr_12500[(13)] = inst_12373);
(statearr_12500[(14)] = inst_12372);
(statearr_12500[(15)] = inst_12374);
(statearr_12500[(16)] = inst_12408);
(statearr_12500[(17)] = inst_12371);
return statearr_12500;
})();var statearr_12501_12585 = state_12490__$1;(statearr_12501_12585[(2)] = null);
(statearr_12501_12585[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (39)))
{var state_12490__$1 = state_12490;var statearr_12505_12586 = state_12490__$1;(statearr_12505_12586[(2)] = null);
(statearr_12505_12586[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (4)))
{var inst_12362 = (state_12490[(9)]);var inst_12362__$1 = (state_12490[(2)]);var inst_12363 = (inst_12362__$1 == null);var state_12490__$1 = (function (){var statearr_12506 = state_12490;(statearr_12506[(9)] = inst_12362__$1);
return statearr_12506;
})();if(cljs.core.truth_(inst_12363))
{var statearr_12507_12587 = state_12490__$1;(statearr_12507_12587[(1)] = (5));
} else
{var statearr_12508_12588 = state_12490__$1;(statearr_12508_12588[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (15)))
{var inst_12373 = (state_12490[(13)]);var inst_12372 = (state_12490[(14)]);var inst_12374 = (state_12490[(15)]);var inst_12371 = (state_12490[(17)]);var inst_12387 = (state_12490[(2)]);var inst_12388 = (inst_12374 + (1));var tmp12502 = inst_12373;var tmp12503 = inst_12372;var tmp12504 = inst_12371;var inst_12371__$1 = tmp12504;var inst_12372__$1 = tmp12503;var inst_12373__$1 = tmp12502;var inst_12374__$1 = inst_12388;var state_12490__$1 = (function (){var statearr_12509 = state_12490;(statearr_12509[(13)] = inst_12373__$1);
(statearr_12509[(14)] = inst_12372__$1);
(statearr_12509[(15)] = inst_12374__$1);
(statearr_12509[(17)] = inst_12371__$1);
(statearr_12509[(18)] = inst_12387);
return statearr_12509;
})();var statearr_12510_12589 = state_12490__$1;(statearr_12510_12589[(2)] = null);
(statearr_12510_12589[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (21)))
{var inst_12412 = (state_12490[(2)]);var state_12490__$1 = state_12490;var statearr_12514_12590 = state_12490__$1;(statearr_12514_12590[(2)] = inst_12412);
(statearr_12514_12590[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (31)))
{var inst_12438 = (state_12490[(12)]);var inst_12442 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12443 = cljs.core.async.untap_STAR_.call(null,m,inst_12438);var state_12490__$1 = (function (){var statearr_12515 = state_12490;(statearr_12515[(19)] = inst_12442);
return statearr_12515;
})();var statearr_12516_12591 = state_12490__$1;(statearr_12516_12591[(2)] = inst_12443);
(statearr_12516_12591[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (32)))
{var inst_12432 = (state_12490[(20)]);var inst_12433 = (state_12490[(10)]);var inst_12431 = (state_12490[(11)]);var inst_12430 = (state_12490[(21)]);var inst_12445 = (state_12490[(2)]);var inst_12446 = (inst_12433 + (1));var tmp12511 = inst_12432;var tmp12512 = inst_12431;var tmp12513 = inst_12430;var inst_12430__$1 = tmp12513;var inst_12431__$1 = tmp12512;var inst_12432__$1 = tmp12511;var inst_12433__$1 = inst_12446;var state_12490__$1 = (function (){var statearr_12517 = state_12490;(statearr_12517[(20)] = inst_12432__$1);
(statearr_12517[(10)] = inst_12433__$1);
(statearr_12517[(22)] = inst_12445);
(statearr_12517[(11)] = inst_12431__$1);
(statearr_12517[(21)] = inst_12430__$1);
return statearr_12517;
})();var statearr_12518_12592 = state_12490__$1;(statearr_12518_12592[(2)] = null);
(statearr_12518_12592[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (40)))
{var inst_12458 = (state_12490[(23)]);var inst_12462 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12463 = cljs.core.async.untap_STAR_.call(null,m,inst_12458);var state_12490__$1 = (function (){var statearr_12519 = state_12490;(statearr_12519[(24)] = inst_12462);
return statearr_12519;
})();var statearr_12520_12593 = state_12490__$1;(statearr_12520_12593[(2)] = inst_12463);
(statearr_12520_12593[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (33)))
{var inst_12449 = (state_12490[(25)]);var inst_12451 = cljs.core.chunked_seq_QMARK_.call(null,inst_12449);var state_12490__$1 = state_12490;if(inst_12451)
{var statearr_12521_12594 = state_12490__$1;(statearr_12521_12594[(1)] = (36));
} else
{var statearr_12522_12595 = state_12490__$1;(statearr_12522_12595[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (13)))
{var inst_12381 = (state_12490[(26)]);var inst_12384 = cljs.core.async.close_BANG_.call(null,inst_12381);var state_12490__$1 = state_12490;var statearr_12523_12596 = state_12490__$1;(statearr_12523_12596[(2)] = inst_12384);
(statearr_12523_12596[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (22)))
{var inst_12402 = (state_12490[(8)]);var inst_12405 = cljs.core.async.close_BANG_.call(null,inst_12402);var state_12490__$1 = state_12490;var statearr_12524_12597 = state_12490__$1;(statearr_12524_12597[(2)] = inst_12405);
(statearr_12524_12597[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (36)))
{var inst_12449 = (state_12490[(25)]);var inst_12453 = cljs.core.chunk_first.call(null,inst_12449);var inst_12454 = cljs.core.chunk_rest.call(null,inst_12449);var inst_12455 = cljs.core.count.call(null,inst_12453);var inst_12430 = inst_12454;var inst_12431 = inst_12453;var inst_12432 = inst_12455;var inst_12433 = (0);var state_12490__$1 = (function (){var statearr_12525 = state_12490;(statearr_12525[(20)] = inst_12432);
(statearr_12525[(10)] = inst_12433);
(statearr_12525[(11)] = inst_12431);
(statearr_12525[(21)] = inst_12430);
return statearr_12525;
})();var statearr_12526_12598 = state_12490__$1;(statearr_12526_12598[(2)] = null);
(statearr_12526_12598[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (41)))
{var inst_12449 = (state_12490[(25)]);var inst_12465 = (state_12490[(2)]);var inst_12466 = cljs.core.next.call(null,inst_12449);var inst_12430 = inst_12466;var inst_12431 = null;var inst_12432 = (0);var inst_12433 = (0);var state_12490__$1 = (function (){var statearr_12527 = state_12490;(statearr_12527[(20)] = inst_12432);
(statearr_12527[(10)] = inst_12433);
(statearr_12527[(11)] = inst_12431);
(statearr_12527[(21)] = inst_12430);
(statearr_12527[(27)] = inst_12465);
return statearr_12527;
})();var statearr_12528_12599 = state_12490__$1;(statearr_12528_12599[(2)] = null);
(statearr_12528_12599[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (43)))
{var state_12490__$1 = state_12490;var statearr_12529_12600 = state_12490__$1;(statearr_12529_12600[(2)] = null);
(statearr_12529_12600[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (29)))
{var inst_12474 = (state_12490[(2)]);var state_12490__$1 = state_12490;var statearr_12530_12601 = state_12490__$1;(statearr_12530_12601[(2)] = inst_12474);
(statearr_12530_12601[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (44)))
{var inst_12483 = (state_12490[(2)]);var state_12490__$1 = (function (){var statearr_12531 = state_12490;(statearr_12531[(28)] = inst_12483);
return statearr_12531;
})();var statearr_12532_12602 = state_12490__$1;(statearr_12532_12602[(2)] = null);
(statearr_12532_12602[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (6)))
{var inst_12422 = (state_12490[(29)]);var inst_12421 = cljs.core.deref.call(null,cs);var inst_12422__$1 = cljs.core.keys.call(null,inst_12421);var inst_12423 = cljs.core.count.call(null,inst_12422__$1);var inst_12424 = cljs.core.reset_BANG_.call(null,dctr,inst_12423);var inst_12429 = cljs.core.seq.call(null,inst_12422__$1);var inst_12430 = inst_12429;var inst_12431 = null;var inst_12432 = (0);var inst_12433 = (0);var state_12490__$1 = (function (){var statearr_12533 = state_12490;(statearr_12533[(20)] = inst_12432);
(statearr_12533[(10)] = inst_12433);
(statearr_12533[(11)] = inst_12431);
(statearr_12533[(21)] = inst_12430);
(statearr_12533[(30)] = inst_12424);
(statearr_12533[(29)] = inst_12422__$1);
return statearr_12533;
})();var statearr_12534_12603 = state_12490__$1;(statearr_12534_12603[(2)] = null);
(statearr_12534_12603[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (28)))
{var inst_12449 = (state_12490[(25)]);var inst_12430 = (state_12490[(21)]);var inst_12449__$1 = cljs.core.seq.call(null,inst_12430);var state_12490__$1 = (function (){var statearr_12535 = state_12490;(statearr_12535[(25)] = inst_12449__$1);
return statearr_12535;
})();if(inst_12449__$1)
{var statearr_12536_12604 = state_12490__$1;(statearr_12536_12604[(1)] = (33));
} else
{var statearr_12537_12605 = state_12490__$1;(statearr_12537_12605[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (25)))
{var inst_12432 = (state_12490[(20)]);var inst_12433 = (state_12490[(10)]);var inst_12435 = (inst_12433 < inst_12432);var inst_12436 = inst_12435;var state_12490__$1 = state_12490;if(cljs.core.truth_(inst_12436))
{var statearr_12538_12606 = state_12490__$1;(statearr_12538_12606[(1)] = (27));
} else
{var statearr_12539_12607 = state_12490__$1;(statearr_12539_12607[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (34)))
{var state_12490__$1 = state_12490;var statearr_12540_12608 = state_12490__$1;(statearr_12540_12608[(2)] = null);
(statearr_12540_12608[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (17)))
{var state_12490__$1 = state_12490;var statearr_12541_12609 = state_12490__$1;(statearr_12541_12609[(2)] = null);
(statearr_12541_12609[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (3)))
{var inst_12488 = (state_12490[(2)]);var state_12490__$1 = state_12490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12490__$1,inst_12488);
} else
{if((state_val_12491 === (12)))
{var inst_12417 = (state_12490[(2)]);var state_12490__$1 = state_12490;var statearr_12542_12610 = state_12490__$1;(statearr_12542_12610[(2)] = inst_12417);
(statearr_12542_12610[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (2)))
{var state_12490__$1 = state_12490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12490__$1,(4),ch);
} else
{if((state_val_12491 === (23)))
{var state_12490__$1 = state_12490;var statearr_12543_12611 = state_12490__$1;(statearr_12543_12611[(2)] = null);
(statearr_12543_12611[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (35)))
{var inst_12472 = (state_12490[(2)]);var state_12490__$1 = state_12490;var statearr_12544_12612 = state_12490__$1;(statearr_12544_12612[(2)] = inst_12472);
(statearr_12544_12612[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (19)))
{var inst_12391 = (state_12490[(7)]);var inst_12395 = cljs.core.chunk_first.call(null,inst_12391);var inst_12396 = cljs.core.chunk_rest.call(null,inst_12391);var inst_12397 = cljs.core.count.call(null,inst_12395);var inst_12371 = inst_12396;var inst_12372 = inst_12395;var inst_12373 = inst_12397;var inst_12374 = (0);var state_12490__$1 = (function (){var statearr_12545 = state_12490;(statearr_12545[(13)] = inst_12373);
(statearr_12545[(14)] = inst_12372);
(statearr_12545[(15)] = inst_12374);
(statearr_12545[(17)] = inst_12371);
return statearr_12545;
})();var statearr_12546_12613 = state_12490__$1;(statearr_12546_12613[(2)] = null);
(statearr_12546_12613[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (11)))
{var inst_12391 = (state_12490[(7)]);var inst_12371 = (state_12490[(17)]);var inst_12391__$1 = cljs.core.seq.call(null,inst_12371);var state_12490__$1 = (function (){var statearr_12547 = state_12490;(statearr_12547[(7)] = inst_12391__$1);
return statearr_12547;
})();if(inst_12391__$1)
{var statearr_12548_12614 = state_12490__$1;(statearr_12548_12614[(1)] = (16));
} else
{var statearr_12549_12615 = state_12490__$1;(statearr_12549_12615[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (9)))
{var inst_12419 = (state_12490[(2)]);var state_12490__$1 = state_12490;var statearr_12550_12616 = state_12490__$1;(statearr_12550_12616[(2)] = inst_12419);
(statearr_12550_12616[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (5)))
{var inst_12369 = cljs.core.deref.call(null,cs);var inst_12370 = cljs.core.seq.call(null,inst_12369);var inst_12371 = inst_12370;var inst_12372 = null;var inst_12373 = (0);var inst_12374 = (0);var state_12490__$1 = (function (){var statearr_12551 = state_12490;(statearr_12551[(13)] = inst_12373);
(statearr_12551[(14)] = inst_12372);
(statearr_12551[(15)] = inst_12374);
(statearr_12551[(17)] = inst_12371);
return statearr_12551;
})();var statearr_12552_12617 = state_12490__$1;(statearr_12552_12617[(2)] = null);
(statearr_12552_12617[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (14)))
{var state_12490__$1 = state_12490;var statearr_12553_12618 = state_12490__$1;(statearr_12553_12618[(2)] = null);
(statearr_12553_12618[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (45)))
{var inst_12480 = (state_12490[(2)]);var state_12490__$1 = state_12490;var statearr_12554_12619 = state_12490__$1;(statearr_12554_12619[(2)] = inst_12480);
(statearr_12554_12619[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (26)))
{var inst_12422 = (state_12490[(29)]);var inst_12476 = (state_12490[(2)]);var inst_12477 = cljs.core.seq.call(null,inst_12422);var state_12490__$1 = (function (){var statearr_12555 = state_12490;(statearr_12555[(31)] = inst_12476);
return statearr_12555;
})();if(inst_12477)
{var statearr_12556_12620 = state_12490__$1;(statearr_12556_12620[(1)] = (42));
} else
{var statearr_12557_12621 = state_12490__$1;(statearr_12557_12621[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (16)))
{var inst_12391 = (state_12490[(7)]);var inst_12393 = cljs.core.chunked_seq_QMARK_.call(null,inst_12391);var state_12490__$1 = state_12490;if(inst_12393)
{var statearr_12558_12622 = state_12490__$1;(statearr_12558_12622[(1)] = (19));
} else
{var statearr_12559_12623 = state_12490__$1;(statearr_12559_12623[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (38)))
{var inst_12469 = (state_12490[(2)]);var state_12490__$1 = state_12490;var statearr_12560_12624 = state_12490__$1;(statearr_12560_12624[(2)] = inst_12469);
(statearr_12560_12624[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (30)))
{var state_12490__$1 = state_12490;var statearr_12561_12625 = state_12490__$1;(statearr_12561_12625[(2)] = null);
(statearr_12561_12625[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (10)))
{var inst_12372 = (state_12490[(14)]);var inst_12374 = (state_12490[(15)]);var inst_12380 = cljs.core._nth.call(null,inst_12372,inst_12374);var inst_12381 = cljs.core.nth.call(null,inst_12380,(0),null);var inst_12382 = cljs.core.nth.call(null,inst_12380,(1),null);var state_12490__$1 = (function (){var statearr_12562 = state_12490;(statearr_12562[(26)] = inst_12381);
return statearr_12562;
})();if(cljs.core.truth_(inst_12382))
{var statearr_12563_12626 = state_12490__$1;(statearr_12563_12626[(1)] = (13));
} else
{var statearr_12564_12627 = state_12490__$1;(statearr_12564_12627[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (18)))
{var inst_12415 = (state_12490[(2)]);var state_12490__$1 = state_12490;var statearr_12565_12628 = state_12490__$1;(statearr_12565_12628[(2)] = inst_12415);
(statearr_12565_12628[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (42)))
{var state_12490__$1 = state_12490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12490__$1,(45),dchan);
} else
{if((state_val_12491 === (37)))
{var inst_12362 = (state_12490[(9)]);var inst_12449 = (state_12490[(25)]);var inst_12458 = (state_12490[(23)]);var inst_12458__$1 = cljs.core.first.call(null,inst_12449);var inst_12459 = cljs.core.async.put_BANG_.call(null,inst_12458__$1,inst_12362,done);var state_12490__$1 = (function (){var statearr_12566 = state_12490;(statearr_12566[(23)] = inst_12458__$1);
return statearr_12566;
})();if(cljs.core.truth_(inst_12459))
{var statearr_12567_12629 = state_12490__$1;(statearr_12567_12629[(1)] = (39));
} else
{var statearr_12568_12630 = state_12490__$1;(statearr_12568_12630[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (8)))
{var inst_12373 = (state_12490[(13)]);var inst_12374 = (state_12490[(15)]);var inst_12376 = (inst_12374 < inst_12373);var inst_12377 = inst_12376;var state_12490__$1 = state_12490;if(cljs.core.truth_(inst_12377))
{var statearr_12569_12631 = state_12490__$1;(statearr_12569_12631[(1)] = (10));
} else
{var statearr_12570_12632 = state_12490__$1;(statearr_12570_12632[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6481__auto___12578,cs,m,dchan,dctr,done))
;return ((function (switch__6466__auto__,c__6481__auto___12578,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6467__auto__ = null;
var state_machine__6467__auto____0 = (function (){var statearr_12574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12574[(0)] = state_machine__6467__auto__);
(statearr_12574[(1)] = (1));
return statearr_12574;
});
var state_machine__6467__auto____1 = (function (state_12490){while(true){
var ret_value__6468__auto__ = (function (){try{while(true){
var result__6469__auto__ = switch__6466__auto__.call(null,state_12490);if(cljs.core.keyword_identical_QMARK_.call(null,result__6469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6469__auto__;
}
break;
}
}catch (e12575){if((e12575 instanceof Object))
{var ex__6470__auto__ = e12575;var statearr_12576_12633 = state_12490;(statearr_12576_12633[(5)] = ex__6470__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12490);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12575;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12634 = state_12490;
state_12490 = G__12634;
continue;
}
} else
{return ret_value__6468__auto__;
}
break;
}
});
state_machine__6467__auto__ = function(state_12490){
switch(arguments.length){
case 0:
return state_machine__6467__auto____0.call(this);
case 1:
return state_machine__6467__auto____1.call(this,state_12490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6467__auto____0;
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6467__auto____1;
return state_machine__6467__auto__;
})()
;})(switch__6466__auto__,c__6481__auto___12578,cs,m,dchan,dctr,done))
})();var state__6483__auto__ = (function (){var statearr_12577 = f__6482__auto__.call(null);(statearr_12577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6481__auto___12578);
return statearr_12577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6483__auto__);
});})(c__6481__auto___12578,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12636 = {};return obj12636;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12756 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12756 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12757){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12757 = meta12757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12756.cljs$lang$type = true;
cljs.core.async.t12756.cljs$lang$ctorStr = "cljs.core.async/t12756";
cljs.core.async.t12756.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12756");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12756.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12756.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12756.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12756.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12756.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12756.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12756.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12756.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12756.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12758){var self__ = this;
var _12758__$1 = this;return self__.meta12757;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12758,meta12757__$1){var self__ = this;
var _12758__$1 = this;return (new cljs.core.async.t12756(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12757__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12756 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12756(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12757){return (new cljs.core.async.t12756(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12757));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12756(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6481__auto___12875 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6481__auto___12875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6482__auto__ = (function (){var switch__6466__auto__ = ((function (c__6481__auto___12875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12828){var state_val_12829 = (state_12828[(1)]);if((state_val_12829 === (7)))
{var inst_12772 = (state_12828[(7)]);var inst_12777 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12772);var state_12828__$1 = state_12828;var statearr_12830_12876 = state_12828__$1;(statearr_12830_12876[(2)] = inst_12777);
(statearr_12830_12876[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (20)))
{var inst_12787 = (state_12828[(8)]);var state_12828__$1 = state_12828;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12828__$1,(23),out,inst_12787);
} else
{if((state_val_12829 === (1)))
{var inst_12762 = (state_12828[(9)]);var inst_12762__$1 = calc_state.call(null);var inst_12763 = cljs.core.seq_QMARK_.call(null,inst_12762__$1);var state_12828__$1 = (function (){var statearr_12831 = state_12828;(statearr_12831[(9)] = inst_12762__$1);
return statearr_12831;
})();if(inst_12763)
{var statearr_12832_12877 = state_12828__$1;(statearr_12832_12877[(1)] = (2));
} else
{var statearr_12833_12878 = state_12828__$1;(statearr_12833_12878[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (24)))
{var inst_12780 = (state_12828[(10)]);var inst_12772 = inst_12780;var state_12828__$1 = (function (){var statearr_12834 = state_12828;(statearr_12834[(7)] = inst_12772);
return statearr_12834;
})();var statearr_12835_12879 = state_12828__$1;(statearr_12835_12879[(2)] = null);
(statearr_12835_12879[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (4)))
{var inst_12762 = (state_12828[(9)]);var inst_12768 = (state_12828[(2)]);var inst_12769 = cljs.core.get.call(null,inst_12768,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12770 = cljs.core.get.call(null,inst_12768,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12771 = cljs.core.get.call(null,inst_12768,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12772 = inst_12762;var state_12828__$1 = (function (){var statearr_12836 = state_12828;(statearr_12836[(11)] = inst_12770);
(statearr_12836[(12)] = inst_12771);
(statearr_12836[(13)] = inst_12769);
(statearr_12836[(7)] = inst_12772);
return statearr_12836;
})();var statearr_12837_12880 = state_12828__$1;(statearr_12837_12880[(2)] = null);
(statearr_12837_12880[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (15)))
{var state_12828__$1 = state_12828;var statearr_12838_12881 = state_12828__$1;(statearr_12838_12881[(2)] = null);
(statearr_12838_12881[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (21)))
{var inst_12780 = (state_12828[(10)]);var inst_12772 = inst_12780;var state_12828__$1 = (function (){var statearr_12839 = state_12828;(statearr_12839[(7)] = inst_12772);
return statearr_12839;
})();var statearr_12840_12882 = state_12828__$1;(statearr_12840_12882[(2)] = null);
(statearr_12840_12882[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (13)))
{var inst_12824 = (state_12828[(2)]);var state_12828__$1 = state_12828;var statearr_12841_12883 = state_12828__$1;(statearr_12841_12883[(2)] = inst_12824);
(statearr_12841_12883[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (22)))
{var inst_12822 = (state_12828[(2)]);var state_12828__$1 = state_12828;var statearr_12842_12884 = state_12828__$1;(statearr_12842_12884[(2)] = inst_12822);
(statearr_12842_12884[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (6)))
{var inst_12826 = (state_12828[(2)]);var state_12828__$1 = state_12828;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12828__$1,inst_12826);
} else
{if((state_val_12829 === (25)))
{var state_12828__$1 = state_12828;var statearr_12843_12885 = state_12828__$1;(statearr_12843_12885[(2)] = null);
(statearr_12843_12885[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (17)))
{var inst_12802 = (state_12828[(14)]);var state_12828__$1 = state_12828;var statearr_12844_12886 = state_12828__$1;(statearr_12844_12886[(2)] = inst_12802);
(statearr_12844_12886[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (3)))
{var inst_12762 = (state_12828[(9)]);var state_12828__$1 = state_12828;var statearr_12845_12887 = state_12828__$1;(statearr_12845_12887[(2)] = inst_12762);
(statearr_12845_12887[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (12)))
{var inst_12783 = (state_12828[(15)]);var inst_12802 = (state_12828[(14)]);var inst_12788 = (state_12828[(16)]);var inst_12802__$1 = inst_12783.call(null,inst_12788);var state_12828__$1 = (function (){var statearr_12846 = state_12828;(statearr_12846[(14)] = inst_12802__$1);
return statearr_12846;
})();if(cljs.core.truth_(inst_12802__$1))
{var statearr_12847_12888 = state_12828__$1;(statearr_12847_12888[(1)] = (17));
} else
{var statearr_12848_12889 = state_12828__$1;(statearr_12848_12889[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (2)))
{var inst_12762 = (state_12828[(9)]);var inst_12765 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12762);var state_12828__$1 = state_12828;var statearr_12849_12890 = state_12828__$1;(statearr_12849_12890[(2)] = inst_12765);
(statearr_12849_12890[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (23)))
{var inst_12813 = (state_12828[(2)]);var state_12828__$1 = state_12828;if(cljs.core.truth_(inst_12813))
{var statearr_12850_12891 = state_12828__$1;(statearr_12850_12891[(1)] = (24));
} else
{var statearr_12851_12892 = state_12828__$1;(statearr_12851_12892[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (19)))
{var inst_12810 = (state_12828[(2)]);var state_12828__$1 = state_12828;if(cljs.core.truth_(inst_12810))
{var statearr_12852_12893 = state_12828__$1;(statearr_12852_12893[(1)] = (20));
} else
{var statearr_12853_12894 = state_12828__$1;(statearr_12853_12894[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (11)))
{var inst_12787 = (state_12828[(8)]);var inst_12793 = (inst_12787 == null);var state_12828__$1 = state_12828;if(cljs.core.truth_(inst_12793))
{var statearr_12854_12895 = state_12828__$1;(statearr_12854_12895[(1)] = (14));
} else
{var statearr_12855_12896 = state_12828__$1;(statearr_12855_12896[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (9)))
{var inst_12780 = (state_12828[(10)]);var inst_12780__$1 = (state_12828[(2)]);var inst_12781 = cljs.core.get.call(null,inst_12780__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12782 = cljs.core.get.call(null,inst_12780__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12783 = cljs.core.get.call(null,inst_12780__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12828__$1 = (function (){var statearr_12856 = state_12828;(statearr_12856[(15)] = inst_12783);
(statearr_12856[(17)] = inst_12782);
(statearr_12856[(10)] = inst_12780__$1);
return statearr_12856;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12828__$1,(10),inst_12781);
} else
{if((state_val_12829 === (5)))
{var inst_12772 = (state_12828[(7)]);var inst_12775 = cljs.core.seq_QMARK_.call(null,inst_12772);var state_12828__$1 = state_12828;if(inst_12775)
{var statearr_12857_12897 = state_12828__$1;(statearr_12857_12897[(1)] = (7));
} else
{var statearr_12858_12898 = state_12828__$1;(statearr_12858_12898[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (14)))
{var inst_12788 = (state_12828[(16)]);var inst_12795 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12788);var state_12828__$1 = state_12828;var statearr_12859_12899 = state_12828__$1;(statearr_12859_12899[(2)] = inst_12795);
(statearr_12859_12899[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (26)))
{var inst_12818 = (state_12828[(2)]);var state_12828__$1 = state_12828;var statearr_12860_12900 = state_12828__$1;(statearr_12860_12900[(2)] = inst_12818);
(statearr_12860_12900[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (16)))
{var inst_12798 = (state_12828[(2)]);var inst_12799 = calc_state.call(null);var inst_12772 = inst_12799;var state_12828__$1 = (function (){var statearr_12861 = state_12828;(statearr_12861[(7)] = inst_12772);
(statearr_12861[(18)] = inst_12798);
return statearr_12861;
})();var statearr_12862_12901 = state_12828__$1;(statearr_12862_12901[(2)] = null);
(statearr_12862_12901[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (10)))
{var inst_12787 = (state_12828[(8)]);var inst_12788 = (state_12828[(16)]);var inst_12786 = (state_12828[(2)]);var inst_12787__$1 = cljs.core.nth.call(null,inst_12786,(0),null);var inst_12788__$1 = cljs.core.nth.call(null,inst_12786,(1),null);var inst_12789 = (inst_12787__$1 == null);var inst_12790 = cljs.core._EQ_.call(null,inst_12788__$1,change);var inst_12791 = (inst_12789) || (inst_12790);var state_12828__$1 = (function (){var statearr_12863 = state_12828;(statearr_12863[(8)] = inst_12787__$1);
(statearr_12863[(16)] = inst_12788__$1);
return statearr_12863;
})();if(cljs.core.truth_(inst_12791))
{var statearr_12864_12902 = state_12828__$1;(statearr_12864_12902[(1)] = (11));
} else
{var statearr_12865_12903 = state_12828__$1;(statearr_12865_12903[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (18)))
{var inst_12783 = (state_12828[(15)]);var inst_12782 = (state_12828[(17)]);var inst_12788 = (state_12828[(16)]);var inst_12805 = cljs.core.empty_QMARK_.call(null,inst_12783);var inst_12806 = inst_12782.call(null,inst_12788);var inst_12807 = cljs.core.not.call(null,inst_12806);var inst_12808 = (inst_12805) && (inst_12807);var state_12828__$1 = state_12828;var statearr_12866_12904 = state_12828__$1;(statearr_12866_12904[(2)] = inst_12808);
(statearr_12866_12904[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12829 === (8)))
{var inst_12772 = (state_12828[(7)]);var state_12828__$1 = state_12828;var statearr_12867_12905 = state_12828__$1;(statearr_12867_12905[(2)] = inst_12772);
(statearr_12867_12905[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6481__auto___12875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6466__auto__,c__6481__auto___12875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6467__auto__ = null;
var state_machine__6467__auto____0 = (function (){var statearr_12871 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12871[(0)] = state_machine__6467__auto__);
(statearr_12871[(1)] = (1));
return statearr_12871;
});
var state_machine__6467__auto____1 = (function (state_12828){while(true){
var ret_value__6468__auto__ = (function (){try{while(true){
var result__6469__auto__ = switch__6466__auto__.call(null,state_12828);if(cljs.core.keyword_identical_QMARK_.call(null,result__6469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6469__auto__;
}
break;
}
}catch (e12872){if((e12872 instanceof Object))
{var ex__6470__auto__ = e12872;var statearr_12873_12906 = state_12828;(statearr_12873_12906[(5)] = ex__6470__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12828);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12872;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12907 = state_12828;
state_12828 = G__12907;
continue;
}
} else
{return ret_value__6468__auto__;
}
break;
}
});
state_machine__6467__auto__ = function(state_12828){
switch(arguments.length){
case 0:
return state_machine__6467__auto____0.call(this);
case 1:
return state_machine__6467__auto____1.call(this,state_12828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6467__auto____0;
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6467__auto____1;
return state_machine__6467__auto__;
})()
;})(switch__6466__auto__,c__6481__auto___12875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6483__auto__ = (function (){var statearr_12874 = f__6482__auto__.call(null);(statearr_12874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6481__auto___12875);
return statearr_12874;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6483__auto__);
});})(c__6481__auto___12875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12909 = {};return obj12909;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3640__auto__,mults){
return (function (p1__12910_SHARP_){if(cljs.core.truth_(p1__12910_SHARP_.call(null,topic)))
{return p1__12910_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12910_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13025 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13025 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13026){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13026 = meta13026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13025.cljs$lang$type = true;
cljs.core.async.t13025.cljs$lang$ctorStr = "cljs.core.async/t13025";
cljs.core.async.t13025.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13025");
});})(mults,ensure_mult))
;
cljs.core.async.t13025.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13025.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13025.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13025.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13025.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13025.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13025.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13027){var self__ = this;
var _13027__$1 = this;return self__.meta13026;
});})(mults,ensure_mult))
;
cljs.core.async.t13025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13027,meta13026__$1){var self__ = this;
var _13027__$1 = this;return (new cljs.core.async.t13025(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13026__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13025 = ((function (mults,ensure_mult){
return (function __GT_t13025(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13026){return (new cljs.core.async.t13025(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13026));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13025(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6481__auto___13139 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6481__auto___13139,mults,ensure_mult,p){
return (function (){var f__6482__auto__ = (function (){var switch__6466__auto__ = ((function (c__6481__auto___13139,mults,ensure_mult,p){
return (function (state_13095){var state_val_13096 = (state_13095[(1)]);if((state_val_13096 === (7)))
{var inst_13091 = (state_13095[(2)]);var state_13095__$1 = state_13095;var statearr_13097_13140 = state_13095__$1;(statearr_13097_13140[(2)] = inst_13091);
(statearr_13097_13140[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13096 === (20)))
{var state_13095__$1 = state_13095;var statearr_13098_13141 = state_13095__$1;(statearr_13098_13141[(2)] = null);
(statearr_13098_13141[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13096 === (1)))
{var state_13095__$1 = state_13095;var statearr_13099_13142 = state_13095__$1;(statearr_13099_13142[(2)] = null);
(statearr_13099_13142[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13096 === (4)))
{var inst_13030 = (state_13095[(7)]);var inst_13030__$1 = (state_13095[(2)]);var inst_13031 = (inst_13030__$1 == null);var state_13095__$1 = (function (){var statearr_13100 = state_13095;(statearr_13100[(7)] = inst_13030__$1);
return statearr_13100;
})();if(cljs.core.truth_(inst_13031))
{var statearr_13101_13143 = state_13095__$1;(statearr_13101_13143[(1)] = (5));
} else
{var statearr_13102_13144 = state_13095__$1;(statearr_13102_13144[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13096 === (15)))
{var inst_13072 = (state_13095[(2)]);var state_13095__$1 = state_13095;var statearr_13103_13145 = state_13095__$1;(statearr_13103_13145[(2)] = inst_13072);
(statearr_13103_13145[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13096 === (21)))
{var inst_13078 = (state_13095[(8)]);var inst_13086 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13078);var state_13095__$1 = state_13095;var statearr_13104_13146 = state_13095__$1;(statearr_13104_13146[(2)] = inst_13086);
(statearr_13104_13146[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13096 === (13)))
{var inst_13054 = (state_13095[(9)]);var inst_13056 = cljs.core.chunked_seq_QMARK_.call(null,inst_13054);var state_13095__$1 = state_13095;if(inst_13056)
{var statearr_13105_13147 = state_13095__$1;(statearr_13105_13147[(1)] = (16));
} else
{var statearr_13106_13148 = state_13095__$1;(statearr_13106_13148[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13096 === (22)))
{var inst_13088 = (state_13095[(2)]);var state_13095__$1 = (function (){var statearr_13107 = state_13095;(statearr_13107[(10)] = inst_13088);
return statearr_13107;
})();var statearr_13108_13149 = state_13095__$1;(statearr_13108_13149[(2)] = null);
(statearr_13108_13149[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13096 === (6)))
{var inst_13078 = (state_13095[(8)]);var inst_13030 = (state_13095[(7)]);var inst_13078__$1 = topic_fn.call(null,inst_13030);var inst_13079 = cljs.core.deref.call(null,mults);var inst_13080 = cljs.core.get.call(null,inst_13079,inst_13078__$1);var inst_13081 = cljs.core.async.muxch_STAR_.call(null,inst_13080);var state_13095__$1 = (function (){var statearr_13109 = state_13095;(statearr_13109[(8)] = inst_13078__$1);
return statearr_13109;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13095__$1,(19),inst_13081,inst_13030);
} else
{if((state_val_13096 === (17)))
{var inst_13054 = (state_13095[(9)]);var inst_13063 = cljs.core.first.call(null,inst_13054);var inst_13064 = cljs.core.async.muxch_STAR_.call(null,inst_13063);var inst_13065 = cljs.core.async.close_BANG_.call(null,inst_13064);var inst_13066 = cljs.core.next.call(null,inst_13054);var inst_13040 = inst_13066;var inst_13041 = null;var inst_13042 = (0);var inst_13043 = (0);var state_13095__$1 = (function (){var statearr_13110 = state_13095;(statearr_13110[(11)] = inst_13041);
(statearr_13110[(12)] = inst_13042);
(statearr_13110[(13)] = inst_13065);
(statearr_13110[(14)] = inst_13043);
(statearr_13110[(15)] = inst_13040);
return statearr_13110;
})();var statearr_13111_13150 = state_13095__$1;(statearr_13111_13150[(2)] = null);
(statearr_13111_13150[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13096 === (3)))
{var inst_13093 = (state_13095[(2)]);var state_13095__$1 = state_13095;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13095__$1,inst_13093);
} else
{if((state_val_13096 === (12)))
{var inst_13074 = (state_13095[(2)]);var state_13095__$1 = state_13095;var statearr_13112_13151 = state_13095__$1;(statearr_13112_13151[(2)] = inst_13074);
(statearr_13112_13151[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13096 === (2)))
{var state_13095__$1 = state_13095;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13095__$1,(4),ch);
} else
{if((state_val_13096 === (19)))
{var inst_13083 = (state_13095[(2)]);var state_13095__$1 = state_13095;if(cljs.core.truth_(inst_13083))
{var statearr_13113_13152 = state_13095__$1;(statearr_13113_13152[(1)] = (20));
} else
{var statearr_13114_13153 = state_13095__$1;(statearr_13114_13153[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13096 === (11)))
{var inst_13054 = (state_13095[(9)]);var inst_13040 = (state_13095[(15)]);var inst_13054__$1 = cljs.core.seq.call(null,inst_13040);var state_13095__$1 = (function (){var statearr_13115 = state_13095;(statearr_13115[(9)] = inst_13054__$1);
return statearr_13115;
})();if(inst_13054__$1)
{var statearr_13116_13154 = state_13095__$1;(statearr_13116_13154[(1)] = (13));
} else
{var statearr_13117_13155 = state_13095__$1;(statearr_13117_13155[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13096 === (9)))
{var inst_13076 = (state_13095[(2)]);var state_13095__$1 = state_13095;var statearr_13118_13156 = state_13095__$1;(statearr_13118_13156[(2)] = inst_13076);
(statearr_13118_13156[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13096 === (5)))
{var inst_13037 = cljs.core.deref.call(null,mults);var inst_13038 = cljs.core.vals.call(null,inst_13037);var inst_13039 = cljs.core.seq.call(null,inst_13038);var inst_13040 = inst_13039;var inst_13041 = null;var inst_13042 = (0);var inst_13043 = (0);var state_13095__$1 = (function (){var statearr_13119 = state_13095;(statearr_13119[(11)] = inst_13041);
(statearr_13119[(12)] = inst_13042);
(statearr_13119[(14)] = inst_13043);
(statearr_13119[(15)] = inst_13040);
return statearr_13119;
})();var statearr_13120_13157 = state_13095__$1;(statearr_13120_13157[(2)] = null);
(statearr_13120_13157[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13096 === (14)))
{var state_13095__$1 = state_13095;var statearr_13124_13158 = state_13095__$1;(statearr_13124_13158[(2)] = null);
(statearr_13124_13158[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13096 === (16)))
{var inst_13054 = (state_13095[(9)]);var inst_13058 = cljs.core.chunk_first.call(null,inst_13054);var inst_13059 = cljs.core.chunk_rest.call(null,inst_13054);var inst_13060 = cljs.core.count.call(null,inst_13058);var inst_13040 = inst_13059;var inst_13041 = inst_13058;var inst_13042 = inst_13060;var inst_13043 = (0);var state_13095__$1 = (function (){var statearr_13125 = state_13095;(statearr_13125[(11)] = inst_13041);
(statearr_13125[(12)] = inst_13042);
(statearr_13125[(14)] = inst_13043);
(statearr_13125[(15)] = inst_13040);
return statearr_13125;
})();var statearr_13126_13159 = state_13095__$1;(statearr_13126_13159[(2)] = null);
(statearr_13126_13159[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13096 === (10)))
{var inst_13041 = (state_13095[(11)]);var inst_13042 = (state_13095[(12)]);var inst_13043 = (state_13095[(14)]);var inst_13040 = (state_13095[(15)]);var inst_13048 = cljs.core._nth.call(null,inst_13041,inst_13043);var inst_13049 = cljs.core.async.muxch_STAR_.call(null,inst_13048);var inst_13050 = cljs.core.async.close_BANG_.call(null,inst_13049);var inst_13051 = (inst_13043 + (1));var tmp13121 = inst_13041;var tmp13122 = inst_13042;var tmp13123 = inst_13040;var inst_13040__$1 = tmp13123;var inst_13041__$1 = tmp13121;var inst_13042__$1 = tmp13122;var inst_13043__$1 = inst_13051;var state_13095__$1 = (function (){var statearr_13127 = state_13095;(statearr_13127[(11)] = inst_13041__$1);
(statearr_13127[(12)] = inst_13042__$1);
(statearr_13127[(16)] = inst_13050);
(statearr_13127[(14)] = inst_13043__$1);
(statearr_13127[(15)] = inst_13040__$1);
return statearr_13127;
})();var statearr_13128_13160 = state_13095__$1;(statearr_13128_13160[(2)] = null);
(statearr_13128_13160[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13096 === (18)))
{var inst_13069 = (state_13095[(2)]);var state_13095__$1 = state_13095;var statearr_13129_13161 = state_13095__$1;(statearr_13129_13161[(2)] = inst_13069);
(statearr_13129_13161[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13096 === (8)))
{var inst_13042 = (state_13095[(12)]);var inst_13043 = (state_13095[(14)]);var inst_13045 = (inst_13043 < inst_13042);var inst_13046 = inst_13045;var state_13095__$1 = state_13095;if(cljs.core.truth_(inst_13046))
{var statearr_13130_13162 = state_13095__$1;(statearr_13130_13162[(1)] = (10));
} else
{var statearr_13131_13163 = state_13095__$1;(statearr_13131_13163[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6481__auto___13139,mults,ensure_mult,p))
;return ((function (switch__6466__auto__,c__6481__auto___13139,mults,ensure_mult,p){
return (function() {
var state_machine__6467__auto__ = null;
var state_machine__6467__auto____0 = (function (){var statearr_13135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13135[(0)] = state_machine__6467__auto__);
(statearr_13135[(1)] = (1));
return statearr_13135;
});
var state_machine__6467__auto____1 = (function (state_13095){while(true){
var ret_value__6468__auto__ = (function (){try{while(true){
var result__6469__auto__ = switch__6466__auto__.call(null,state_13095);if(cljs.core.keyword_identical_QMARK_.call(null,result__6469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6469__auto__;
}
break;
}
}catch (e13136){if((e13136 instanceof Object))
{var ex__6470__auto__ = e13136;var statearr_13137_13164 = state_13095;(statearr_13137_13164[(5)] = ex__6470__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13095);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13136;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13165 = state_13095;
state_13095 = G__13165;
continue;
}
} else
{return ret_value__6468__auto__;
}
break;
}
});
state_machine__6467__auto__ = function(state_13095){
switch(arguments.length){
case 0:
return state_machine__6467__auto____0.call(this);
case 1:
return state_machine__6467__auto____1.call(this,state_13095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6467__auto____0;
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6467__auto____1;
return state_machine__6467__auto__;
})()
;})(switch__6466__auto__,c__6481__auto___13139,mults,ensure_mult,p))
})();var state__6483__auto__ = (function (){var statearr_13138 = f__6482__auto__.call(null);(statearr_13138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6481__auto___13139);
return statearr_13138;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6483__auto__);
});})(c__6481__auto___13139,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6481__auto___13302 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6481__auto___13302,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6482__auto__ = (function (){var switch__6466__auto__ = ((function (c__6481__auto___13302,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13272){var state_val_13273 = (state_13272[(1)]);if((state_val_13273 === (7)))
{var state_13272__$1 = state_13272;var statearr_13274_13303 = state_13272__$1;(statearr_13274_13303[(2)] = null);
(statearr_13274_13303[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13273 === (1)))
{var state_13272__$1 = state_13272;var statearr_13275_13304 = state_13272__$1;(statearr_13275_13304[(2)] = null);
(statearr_13275_13304[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13273 === (4)))
{var inst_13236 = (state_13272[(7)]);var inst_13238 = (inst_13236 < cnt);var state_13272__$1 = state_13272;if(cljs.core.truth_(inst_13238))
{var statearr_13276_13305 = state_13272__$1;(statearr_13276_13305[(1)] = (6));
} else
{var statearr_13277_13306 = state_13272__$1;(statearr_13277_13306[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13273 === (15)))
{var inst_13268 = (state_13272[(2)]);var state_13272__$1 = state_13272;var statearr_13278_13307 = state_13272__$1;(statearr_13278_13307[(2)] = inst_13268);
(statearr_13278_13307[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13273 === (13)))
{var inst_13261 = cljs.core.async.close_BANG_.call(null,out);var state_13272__$1 = state_13272;var statearr_13279_13308 = state_13272__$1;(statearr_13279_13308[(2)] = inst_13261);
(statearr_13279_13308[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13273 === (6)))
{var state_13272__$1 = state_13272;var statearr_13280_13309 = state_13272__$1;(statearr_13280_13309[(2)] = null);
(statearr_13280_13309[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13273 === (3)))
{var inst_13270 = (state_13272[(2)]);var state_13272__$1 = state_13272;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13272__$1,inst_13270);
} else
{if((state_val_13273 === (12)))
{var inst_13258 = (state_13272[(8)]);var inst_13258__$1 = (state_13272[(2)]);var inst_13259 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13258__$1);var state_13272__$1 = (function (){var statearr_13281 = state_13272;(statearr_13281[(8)] = inst_13258__$1);
return statearr_13281;
})();if(cljs.core.truth_(inst_13259))
{var statearr_13282_13310 = state_13272__$1;(statearr_13282_13310[(1)] = (13));
} else
{var statearr_13283_13311 = state_13272__$1;(statearr_13283_13311[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13273 === (2)))
{var inst_13235 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13236 = (0);var state_13272__$1 = (function (){var statearr_13284 = state_13272;(statearr_13284[(7)] = inst_13236);
(statearr_13284[(9)] = inst_13235);
return statearr_13284;
})();var statearr_13285_13312 = state_13272__$1;(statearr_13285_13312[(2)] = null);
(statearr_13285_13312[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13273 === (11)))
{var inst_13236 = (state_13272[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13272,(10),Object,null,(9));var inst_13245 = chs__$1.call(null,inst_13236);var inst_13246 = done.call(null,inst_13236);var inst_13247 = cljs.core.async.take_BANG_.call(null,inst_13245,inst_13246);var state_13272__$1 = state_13272;var statearr_13286_13313 = state_13272__$1;(statearr_13286_13313[(2)] = inst_13247);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13272__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13273 === (9)))
{var inst_13236 = (state_13272[(7)]);var inst_13249 = (state_13272[(2)]);var inst_13250 = (inst_13236 + (1));var inst_13236__$1 = inst_13250;var state_13272__$1 = (function (){var statearr_13287 = state_13272;(statearr_13287[(7)] = inst_13236__$1);
(statearr_13287[(10)] = inst_13249);
return statearr_13287;
})();var statearr_13288_13314 = state_13272__$1;(statearr_13288_13314[(2)] = null);
(statearr_13288_13314[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13273 === (5)))
{var inst_13256 = (state_13272[(2)]);var state_13272__$1 = (function (){var statearr_13289 = state_13272;(statearr_13289[(11)] = inst_13256);
return statearr_13289;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13272__$1,(12),dchan);
} else
{if((state_val_13273 === (14)))
{var inst_13258 = (state_13272[(8)]);var inst_13263 = cljs.core.apply.call(null,f,inst_13258);var state_13272__$1 = state_13272;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13272__$1,(16),out,inst_13263);
} else
{if((state_val_13273 === (16)))
{var inst_13265 = (state_13272[(2)]);var state_13272__$1 = (function (){var statearr_13290 = state_13272;(statearr_13290[(12)] = inst_13265);
return statearr_13290;
})();var statearr_13291_13315 = state_13272__$1;(statearr_13291_13315[(2)] = null);
(statearr_13291_13315[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13273 === (10)))
{var inst_13240 = (state_13272[(2)]);var inst_13241 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13272__$1 = (function (){var statearr_13292 = state_13272;(statearr_13292[(13)] = inst_13240);
return statearr_13292;
})();var statearr_13293_13316 = state_13272__$1;(statearr_13293_13316[(2)] = inst_13241);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13272__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13273 === (8)))
{var inst_13254 = (state_13272[(2)]);var state_13272__$1 = state_13272;var statearr_13294_13317 = state_13272__$1;(statearr_13294_13317[(2)] = inst_13254);
(statearr_13294_13317[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6481__auto___13302,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6466__auto__,c__6481__auto___13302,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6467__auto__ = null;
var state_machine__6467__auto____0 = (function (){var statearr_13298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13298[(0)] = state_machine__6467__auto__);
(statearr_13298[(1)] = (1));
return statearr_13298;
});
var state_machine__6467__auto____1 = (function (state_13272){while(true){
var ret_value__6468__auto__ = (function (){try{while(true){
var result__6469__auto__ = switch__6466__auto__.call(null,state_13272);if(cljs.core.keyword_identical_QMARK_.call(null,result__6469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6469__auto__;
}
break;
}
}catch (e13299){if((e13299 instanceof Object))
{var ex__6470__auto__ = e13299;var statearr_13300_13318 = state_13272;(statearr_13300_13318[(5)] = ex__6470__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13272);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13299;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13319 = state_13272;
state_13272 = G__13319;
continue;
}
} else
{return ret_value__6468__auto__;
}
break;
}
});
state_machine__6467__auto__ = function(state_13272){
switch(arguments.length){
case 0:
return state_machine__6467__auto____0.call(this);
case 1:
return state_machine__6467__auto____1.call(this,state_13272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6467__auto____0;
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6467__auto____1;
return state_machine__6467__auto__;
})()
;})(switch__6466__auto__,c__6481__auto___13302,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6483__auto__ = (function (){var statearr_13301 = f__6482__auto__.call(null);(statearr_13301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6481__auto___13302);
return statearr_13301;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6483__auto__);
});})(c__6481__auto___13302,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6481__auto___13427 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6481__auto___13427,out){
return (function (){var f__6482__auto__ = (function (){var switch__6466__auto__ = ((function (c__6481__auto___13427,out){
return (function (state_13403){var state_val_13404 = (state_13403[(1)]);if((state_val_13404 === (7)))
{var inst_13382 = (state_13403[(7)]);var inst_13383 = (state_13403[(8)]);var inst_13382__$1 = (state_13403[(2)]);var inst_13383__$1 = cljs.core.nth.call(null,inst_13382__$1,(0),null);var inst_13384 = cljs.core.nth.call(null,inst_13382__$1,(1),null);var inst_13385 = (inst_13383__$1 == null);var state_13403__$1 = (function (){var statearr_13405 = state_13403;(statearr_13405[(9)] = inst_13384);
(statearr_13405[(7)] = inst_13382__$1);
(statearr_13405[(8)] = inst_13383__$1);
return statearr_13405;
})();if(cljs.core.truth_(inst_13385))
{var statearr_13406_13428 = state_13403__$1;(statearr_13406_13428[(1)] = (8));
} else
{var statearr_13407_13429 = state_13403__$1;(statearr_13407_13429[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13404 === (1)))
{var inst_13374 = cljs.core.vec.call(null,chs);var inst_13375 = inst_13374;var state_13403__$1 = (function (){var statearr_13408 = state_13403;(statearr_13408[(10)] = inst_13375);
return statearr_13408;
})();var statearr_13409_13430 = state_13403__$1;(statearr_13409_13430[(2)] = null);
(statearr_13409_13430[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13404 === (4)))
{var inst_13375 = (state_13403[(10)]);var state_13403__$1 = state_13403;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13403__$1,(7),inst_13375);
} else
{if((state_val_13404 === (6)))
{var inst_13399 = (state_13403[(2)]);var state_13403__$1 = state_13403;var statearr_13410_13431 = state_13403__$1;(statearr_13410_13431[(2)] = inst_13399);
(statearr_13410_13431[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13404 === (3)))
{var inst_13401 = (state_13403[(2)]);var state_13403__$1 = state_13403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13403__$1,inst_13401);
} else
{if((state_val_13404 === (2)))
{var inst_13375 = (state_13403[(10)]);var inst_13377 = cljs.core.count.call(null,inst_13375);var inst_13378 = (inst_13377 > (0));var state_13403__$1 = state_13403;if(cljs.core.truth_(inst_13378))
{var statearr_13412_13432 = state_13403__$1;(statearr_13412_13432[(1)] = (4));
} else
{var statearr_13413_13433 = state_13403__$1;(statearr_13413_13433[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13404 === (11)))
{var inst_13375 = (state_13403[(10)]);var inst_13392 = (state_13403[(2)]);var tmp13411 = inst_13375;var inst_13375__$1 = tmp13411;var state_13403__$1 = (function (){var statearr_13414 = state_13403;(statearr_13414[(10)] = inst_13375__$1);
(statearr_13414[(11)] = inst_13392);
return statearr_13414;
})();var statearr_13415_13434 = state_13403__$1;(statearr_13415_13434[(2)] = null);
(statearr_13415_13434[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13404 === (9)))
{var inst_13383 = (state_13403[(8)]);var state_13403__$1 = state_13403;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13403__$1,(11),out,inst_13383);
} else
{if((state_val_13404 === (5)))
{var inst_13397 = cljs.core.async.close_BANG_.call(null,out);var state_13403__$1 = state_13403;var statearr_13416_13435 = state_13403__$1;(statearr_13416_13435[(2)] = inst_13397);
(statearr_13416_13435[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13404 === (10)))
{var inst_13395 = (state_13403[(2)]);var state_13403__$1 = state_13403;var statearr_13417_13436 = state_13403__$1;(statearr_13417_13436[(2)] = inst_13395);
(statearr_13417_13436[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13404 === (8)))
{var inst_13384 = (state_13403[(9)]);var inst_13382 = (state_13403[(7)]);var inst_13383 = (state_13403[(8)]);var inst_13375 = (state_13403[(10)]);var inst_13387 = (function (){var c = inst_13384;var v = inst_13383;var vec__13380 = inst_13382;var cs = inst_13375;return ((function (c,v,vec__13380,cs,inst_13384,inst_13382,inst_13383,inst_13375,state_val_13404,c__6481__auto___13427,out){
return (function (p1__13320_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13320_SHARP_);
});
;})(c,v,vec__13380,cs,inst_13384,inst_13382,inst_13383,inst_13375,state_val_13404,c__6481__auto___13427,out))
})();var inst_13388 = cljs.core.filterv.call(null,inst_13387,inst_13375);var inst_13375__$1 = inst_13388;var state_13403__$1 = (function (){var statearr_13418 = state_13403;(statearr_13418[(10)] = inst_13375__$1);
return statearr_13418;
})();var statearr_13419_13437 = state_13403__$1;(statearr_13419_13437[(2)] = null);
(statearr_13419_13437[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6481__auto___13427,out))
;return ((function (switch__6466__auto__,c__6481__auto___13427,out){
return (function() {
var state_machine__6467__auto__ = null;
var state_machine__6467__auto____0 = (function (){var statearr_13423 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13423[(0)] = state_machine__6467__auto__);
(statearr_13423[(1)] = (1));
return statearr_13423;
});
var state_machine__6467__auto____1 = (function (state_13403){while(true){
var ret_value__6468__auto__ = (function (){try{while(true){
var result__6469__auto__ = switch__6466__auto__.call(null,state_13403);if(cljs.core.keyword_identical_QMARK_.call(null,result__6469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6469__auto__;
}
break;
}
}catch (e13424){if((e13424 instanceof Object))
{var ex__6470__auto__ = e13424;var statearr_13425_13438 = state_13403;(statearr_13425_13438[(5)] = ex__6470__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13403);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13424;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13439 = state_13403;
state_13403 = G__13439;
continue;
}
} else
{return ret_value__6468__auto__;
}
break;
}
});
state_machine__6467__auto__ = function(state_13403){
switch(arguments.length){
case 0:
return state_machine__6467__auto____0.call(this);
case 1:
return state_machine__6467__auto____1.call(this,state_13403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6467__auto____0;
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6467__auto____1;
return state_machine__6467__auto__;
})()
;})(switch__6466__auto__,c__6481__auto___13427,out))
})();var state__6483__auto__ = (function (){var statearr_13426 = f__6482__auto__.call(null);(statearr_13426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6481__auto___13427);
return statearr_13426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6483__auto__);
});})(c__6481__auto___13427,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6481__auto___13532 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6481__auto___13532,out){
return (function (){var f__6482__auto__ = (function (){var switch__6466__auto__ = ((function (c__6481__auto___13532,out){
return (function (state_13509){var state_val_13510 = (state_13509[(1)]);if((state_val_13510 === (7)))
{var inst_13491 = (state_13509[(7)]);var inst_13491__$1 = (state_13509[(2)]);var inst_13492 = (inst_13491__$1 == null);var inst_13493 = cljs.core.not.call(null,inst_13492);var state_13509__$1 = (function (){var statearr_13511 = state_13509;(statearr_13511[(7)] = inst_13491__$1);
return statearr_13511;
})();if(inst_13493)
{var statearr_13512_13533 = state_13509__$1;(statearr_13512_13533[(1)] = (8));
} else
{var statearr_13513_13534 = state_13509__$1;(statearr_13513_13534[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13510 === (1)))
{var inst_13486 = (0);var state_13509__$1 = (function (){var statearr_13514 = state_13509;(statearr_13514[(8)] = inst_13486);
return statearr_13514;
})();var statearr_13515_13535 = state_13509__$1;(statearr_13515_13535[(2)] = null);
(statearr_13515_13535[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13510 === (4)))
{var state_13509__$1 = state_13509;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13509__$1,(7),ch);
} else
{if((state_val_13510 === (6)))
{var inst_13504 = (state_13509[(2)]);var state_13509__$1 = state_13509;var statearr_13516_13536 = state_13509__$1;(statearr_13516_13536[(2)] = inst_13504);
(statearr_13516_13536[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13510 === (3)))
{var inst_13506 = (state_13509[(2)]);var inst_13507 = cljs.core.async.close_BANG_.call(null,out);var state_13509__$1 = (function (){var statearr_13517 = state_13509;(statearr_13517[(9)] = inst_13506);
return statearr_13517;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13509__$1,inst_13507);
} else
{if((state_val_13510 === (2)))
{var inst_13486 = (state_13509[(8)]);var inst_13488 = (inst_13486 < n);var state_13509__$1 = state_13509;if(cljs.core.truth_(inst_13488))
{var statearr_13518_13537 = state_13509__$1;(statearr_13518_13537[(1)] = (4));
} else
{var statearr_13519_13538 = state_13509__$1;(statearr_13519_13538[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13510 === (11)))
{var inst_13486 = (state_13509[(8)]);var inst_13496 = (state_13509[(2)]);var inst_13497 = (inst_13486 + (1));var inst_13486__$1 = inst_13497;var state_13509__$1 = (function (){var statearr_13520 = state_13509;(statearr_13520[(8)] = inst_13486__$1);
(statearr_13520[(10)] = inst_13496);
return statearr_13520;
})();var statearr_13521_13539 = state_13509__$1;(statearr_13521_13539[(2)] = null);
(statearr_13521_13539[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13510 === (9)))
{var state_13509__$1 = state_13509;var statearr_13522_13540 = state_13509__$1;(statearr_13522_13540[(2)] = null);
(statearr_13522_13540[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13510 === (5)))
{var state_13509__$1 = state_13509;var statearr_13523_13541 = state_13509__$1;(statearr_13523_13541[(2)] = null);
(statearr_13523_13541[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13510 === (10)))
{var inst_13501 = (state_13509[(2)]);var state_13509__$1 = state_13509;var statearr_13524_13542 = state_13509__$1;(statearr_13524_13542[(2)] = inst_13501);
(statearr_13524_13542[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13510 === (8)))
{var inst_13491 = (state_13509[(7)]);var state_13509__$1 = state_13509;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13509__$1,(11),out,inst_13491);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6481__auto___13532,out))
;return ((function (switch__6466__auto__,c__6481__auto___13532,out){
return (function() {
var state_machine__6467__auto__ = null;
var state_machine__6467__auto____0 = (function (){var statearr_13528 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13528[(0)] = state_machine__6467__auto__);
(statearr_13528[(1)] = (1));
return statearr_13528;
});
var state_machine__6467__auto____1 = (function (state_13509){while(true){
var ret_value__6468__auto__ = (function (){try{while(true){
var result__6469__auto__ = switch__6466__auto__.call(null,state_13509);if(cljs.core.keyword_identical_QMARK_.call(null,result__6469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6469__auto__;
}
break;
}
}catch (e13529){if((e13529 instanceof Object))
{var ex__6470__auto__ = e13529;var statearr_13530_13543 = state_13509;(statearr_13530_13543[(5)] = ex__6470__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13509);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13529;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13544 = state_13509;
state_13509 = G__13544;
continue;
}
} else
{return ret_value__6468__auto__;
}
break;
}
});
state_machine__6467__auto__ = function(state_13509){
switch(arguments.length){
case 0:
return state_machine__6467__auto____0.call(this);
case 1:
return state_machine__6467__auto____1.call(this,state_13509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6467__auto____0;
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6467__auto____1;
return state_machine__6467__auto__;
})()
;})(switch__6466__auto__,c__6481__auto___13532,out))
})();var state__6483__auto__ = (function (){var statearr_13531 = f__6482__auto__.call(null);(statearr_13531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6481__auto___13532);
return statearr_13531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6483__auto__);
});})(c__6481__auto___13532,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6481__auto___13641 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6481__auto___13641,out){
return (function (){var f__6482__auto__ = (function (){var switch__6466__auto__ = ((function (c__6481__auto___13641,out){
return (function (state_13616){var state_val_13617 = (state_13616[(1)]);if((state_val_13617 === (7)))
{var inst_13611 = (state_13616[(2)]);var state_13616__$1 = state_13616;var statearr_13618_13642 = state_13616__$1;(statearr_13618_13642[(2)] = inst_13611);
(statearr_13618_13642[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13617 === (1)))
{var inst_13593 = null;var state_13616__$1 = (function (){var statearr_13619 = state_13616;(statearr_13619[(7)] = inst_13593);
return statearr_13619;
})();var statearr_13620_13643 = state_13616__$1;(statearr_13620_13643[(2)] = null);
(statearr_13620_13643[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13617 === (4)))
{var inst_13596 = (state_13616[(8)]);var inst_13596__$1 = (state_13616[(2)]);var inst_13597 = (inst_13596__$1 == null);var inst_13598 = cljs.core.not.call(null,inst_13597);var state_13616__$1 = (function (){var statearr_13621 = state_13616;(statearr_13621[(8)] = inst_13596__$1);
return statearr_13621;
})();if(inst_13598)
{var statearr_13622_13644 = state_13616__$1;(statearr_13622_13644[(1)] = (5));
} else
{var statearr_13623_13645 = state_13616__$1;(statearr_13623_13645[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13617 === (6)))
{var state_13616__$1 = state_13616;var statearr_13624_13646 = state_13616__$1;(statearr_13624_13646[(2)] = null);
(statearr_13624_13646[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13617 === (3)))
{var inst_13613 = (state_13616[(2)]);var inst_13614 = cljs.core.async.close_BANG_.call(null,out);var state_13616__$1 = (function (){var statearr_13625 = state_13616;(statearr_13625[(9)] = inst_13613);
return statearr_13625;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13616__$1,inst_13614);
} else
{if((state_val_13617 === (2)))
{var state_13616__$1 = state_13616;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13616__$1,(4),ch);
} else
{if((state_val_13617 === (11)))
{var inst_13596 = (state_13616[(8)]);var inst_13605 = (state_13616[(2)]);var inst_13593 = inst_13596;var state_13616__$1 = (function (){var statearr_13626 = state_13616;(statearr_13626[(7)] = inst_13593);
(statearr_13626[(10)] = inst_13605);
return statearr_13626;
})();var statearr_13627_13647 = state_13616__$1;(statearr_13627_13647[(2)] = null);
(statearr_13627_13647[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13617 === (9)))
{var inst_13596 = (state_13616[(8)]);var state_13616__$1 = state_13616;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13616__$1,(11),out,inst_13596);
} else
{if((state_val_13617 === (5)))
{var inst_13593 = (state_13616[(7)]);var inst_13596 = (state_13616[(8)]);var inst_13600 = cljs.core._EQ_.call(null,inst_13596,inst_13593);var state_13616__$1 = state_13616;if(inst_13600)
{var statearr_13629_13648 = state_13616__$1;(statearr_13629_13648[(1)] = (8));
} else
{var statearr_13630_13649 = state_13616__$1;(statearr_13630_13649[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13617 === (10)))
{var inst_13608 = (state_13616[(2)]);var state_13616__$1 = state_13616;var statearr_13631_13650 = state_13616__$1;(statearr_13631_13650[(2)] = inst_13608);
(statearr_13631_13650[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13617 === (8)))
{var inst_13593 = (state_13616[(7)]);var tmp13628 = inst_13593;var inst_13593__$1 = tmp13628;var state_13616__$1 = (function (){var statearr_13632 = state_13616;(statearr_13632[(7)] = inst_13593__$1);
return statearr_13632;
})();var statearr_13633_13651 = state_13616__$1;(statearr_13633_13651[(2)] = null);
(statearr_13633_13651[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6481__auto___13641,out))
;return ((function (switch__6466__auto__,c__6481__auto___13641,out){
return (function() {
var state_machine__6467__auto__ = null;
var state_machine__6467__auto____0 = (function (){var statearr_13637 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13637[(0)] = state_machine__6467__auto__);
(statearr_13637[(1)] = (1));
return statearr_13637;
});
var state_machine__6467__auto____1 = (function (state_13616){while(true){
var ret_value__6468__auto__ = (function (){try{while(true){
var result__6469__auto__ = switch__6466__auto__.call(null,state_13616);if(cljs.core.keyword_identical_QMARK_.call(null,result__6469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6469__auto__;
}
break;
}
}catch (e13638){if((e13638 instanceof Object))
{var ex__6470__auto__ = e13638;var statearr_13639_13652 = state_13616;(statearr_13639_13652[(5)] = ex__6470__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13616);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13638;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13653 = state_13616;
state_13616 = G__13653;
continue;
}
} else
{return ret_value__6468__auto__;
}
break;
}
});
state_machine__6467__auto__ = function(state_13616){
switch(arguments.length){
case 0:
return state_machine__6467__auto____0.call(this);
case 1:
return state_machine__6467__auto____1.call(this,state_13616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6467__auto____0;
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6467__auto____1;
return state_machine__6467__auto__;
})()
;})(switch__6466__auto__,c__6481__auto___13641,out))
})();var state__6483__auto__ = (function (){var statearr_13640 = f__6482__auto__.call(null);(statearr_13640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6481__auto___13641);
return statearr_13640;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6483__auto__);
});})(c__6481__auto___13641,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6481__auto___13788 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6481__auto___13788,out){
return (function (){var f__6482__auto__ = (function (){var switch__6466__auto__ = ((function (c__6481__auto___13788,out){
return (function (state_13758){var state_val_13759 = (state_13758[(1)]);if((state_val_13759 === (7)))
{var inst_13754 = (state_13758[(2)]);var state_13758__$1 = state_13758;var statearr_13760_13789 = state_13758__$1;(statearr_13760_13789[(2)] = inst_13754);
(statearr_13760_13789[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13759 === (1)))
{var inst_13721 = (new Array(n));var inst_13722 = inst_13721;var inst_13723 = (0);var state_13758__$1 = (function (){var statearr_13761 = state_13758;(statearr_13761[(7)] = inst_13723);
(statearr_13761[(8)] = inst_13722);
return statearr_13761;
})();var statearr_13762_13790 = state_13758__$1;(statearr_13762_13790[(2)] = null);
(statearr_13762_13790[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13759 === (4)))
{var inst_13726 = (state_13758[(9)]);var inst_13726__$1 = (state_13758[(2)]);var inst_13727 = (inst_13726__$1 == null);var inst_13728 = cljs.core.not.call(null,inst_13727);var state_13758__$1 = (function (){var statearr_13763 = state_13758;(statearr_13763[(9)] = inst_13726__$1);
return statearr_13763;
})();if(inst_13728)
{var statearr_13764_13791 = state_13758__$1;(statearr_13764_13791[(1)] = (5));
} else
{var statearr_13765_13792 = state_13758__$1;(statearr_13765_13792[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13759 === (15)))
{var inst_13748 = (state_13758[(2)]);var state_13758__$1 = state_13758;var statearr_13766_13793 = state_13758__$1;(statearr_13766_13793[(2)] = inst_13748);
(statearr_13766_13793[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13759 === (13)))
{var state_13758__$1 = state_13758;var statearr_13767_13794 = state_13758__$1;(statearr_13767_13794[(2)] = null);
(statearr_13767_13794[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13759 === (6)))
{var inst_13723 = (state_13758[(7)]);var inst_13744 = (inst_13723 > (0));var state_13758__$1 = state_13758;if(cljs.core.truth_(inst_13744))
{var statearr_13768_13795 = state_13758__$1;(statearr_13768_13795[(1)] = (12));
} else
{var statearr_13769_13796 = state_13758__$1;(statearr_13769_13796[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13759 === (3)))
{var inst_13756 = (state_13758[(2)]);var state_13758__$1 = state_13758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13758__$1,inst_13756);
} else
{if((state_val_13759 === (12)))
{var inst_13722 = (state_13758[(8)]);var inst_13746 = cljs.core.vec.call(null,inst_13722);var state_13758__$1 = state_13758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13758__$1,(15),out,inst_13746);
} else
{if((state_val_13759 === (2)))
{var state_13758__$1 = state_13758;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13758__$1,(4),ch);
} else
{if((state_val_13759 === (11)))
{var inst_13738 = (state_13758[(2)]);var inst_13739 = (new Array(n));var inst_13722 = inst_13739;var inst_13723 = (0);var state_13758__$1 = (function (){var statearr_13770 = state_13758;(statearr_13770[(10)] = inst_13738);
(statearr_13770[(7)] = inst_13723);
(statearr_13770[(8)] = inst_13722);
return statearr_13770;
})();var statearr_13771_13797 = state_13758__$1;(statearr_13771_13797[(2)] = null);
(statearr_13771_13797[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13759 === (9)))
{var inst_13722 = (state_13758[(8)]);var inst_13736 = cljs.core.vec.call(null,inst_13722);var state_13758__$1 = state_13758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13758__$1,(11),out,inst_13736);
} else
{if((state_val_13759 === (5)))
{var inst_13723 = (state_13758[(7)]);var inst_13731 = (state_13758[(11)]);var inst_13722 = (state_13758[(8)]);var inst_13726 = (state_13758[(9)]);var inst_13730 = (inst_13722[inst_13723] = inst_13726);var inst_13731__$1 = (inst_13723 + (1));var inst_13732 = (inst_13731__$1 < n);var state_13758__$1 = (function (){var statearr_13772 = state_13758;(statearr_13772[(11)] = inst_13731__$1);
(statearr_13772[(12)] = inst_13730);
return statearr_13772;
})();if(cljs.core.truth_(inst_13732))
{var statearr_13773_13798 = state_13758__$1;(statearr_13773_13798[(1)] = (8));
} else
{var statearr_13774_13799 = state_13758__$1;(statearr_13774_13799[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13759 === (14)))
{var inst_13751 = (state_13758[(2)]);var inst_13752 = cljs.core.async.close_BANG_.call(null,out);var state_13758__$1 = (function (){var statearr_13776 = state_13758;(statearr_13776[(13)] = inst_13751);
return statearr_13776;
})();var statearr_13777_13800 = state_13758__$1;(statearr_13777_13800[(2)] = inst_13752);
(statearr_13777_13800[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13759 === (10)))
{var inst_13742 = (state_13758[(2)]);var state_13758__$1 = state_13758;var statearr_13778_13801 = state_13758__$1;(statearr_13778_13801[(2)] = inst_13742);
(statearr_13778_13801[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13759 === (8)))
{var inst_13731 = (state_13758[(11)]);var inst_13722 = (state_13758[(8)]);var tmp13775 = inst_13722;var inst_13722__$1 = tmp13775;var inst_13723 = inst_13731;var state_13758__$1 = (function (){var statearr_13779 = state_13758;(statearr_13779[(7)] = inst_13723);
(statearr_13779[(8)] = inst_13722__$1);
return statearr_13779;
})();var statearr_13780_13802 = state_13758__$1;(statearr_13780_13802[(2)] = null);
(statearr_13780_13802[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6481__auto___13788,out))
;return ((function (switch__6466__auto__,c__6481__auto___13788,out){
return (function() {
var state_machine__6467__auto__ = null;
var state_machine__6467__auto____0 = (function (){var statearr_13784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13784[(0)] = state_machine__6467__auto__);
(statearr_13784[(1)] = (1));
return statearr_13784;
});
var state_machine__6467__auto____1 = (function (state_13758){while(true){
var ret_value__6468__auto__ = (function (){try{while(true){
var result__6469__auto__ = switch__6466__auto__.call(null,state_13758);if(cljs.core.keyword_identical_QMARK_.call(null,result__6469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6469__auto__;
}
break;
}
}catch (e13785){if((e13785 instanceof Object))
{var ex__6470__auto__ = e13785;var statearr_13786_13803 = state_13758;(statearr_13786_13803[(5)] = ex__6470__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13758);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13785;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13804 = state_13758;
state_13758 = G__13804;
continue;
}
} else
{return ret_value__6468__auto__;
}
break;
}
});
state_machine__6467__auto__ = function(state_13758){
switch(arguments.length){
case 0:
return state_machine__6467__auto____0.call(this);
case 1:
return state_machine__6467__auto____1.call(this,state_13758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6467__auto____0;
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6467__auto____1;
return state_machine__6467__auto__;
})()
;})(switch__6466__auto__,c__6481__auto___13788,out))
})();var state__6483__auto__ = (function (){var statearr_13787 = f__6482__auto__.call(null);(statearr_13787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6481__auto___13788);
return statearr_13787;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6483__auto__);
});})(c__6481__auto___13788,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6481__auto___13947 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6481__auto___13947,out){
return (function (){var f__6482__auto__ = (function (){var switch__6466__auto__ = ((function (c__6481__auto___13947,out){
return (function (state_13917){var state_val_13918 = (state_13917[(1)]);if((state_val_13918 === (7)))
{var inst_13913 = (state_13917[(2)]);var state_13917__$1 = state_13917;var statearr_13919_13948 = state_13917__$1;(statearr_13919_13948[(2)] = inst_13913);
(statearr_13919_13948[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (1)))
{var inst_13876 = [];var inst_13877 = inst_13876;var inst_13878 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13917__$1 = (function (){var statearr_13920 = state_13917;(statearr_13920[(7)] = inst_13877);
(statearr_13920[(8)] = inst_13878);
return statearr_13920;
})();var statearr_13921_13949 = state_13917__$1;(statearr_13921_13949[(2)] = null);
(statearr_13921_13949[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (4)))
{var inst_13881 = (state_13917[(9)]);var inst_13881__$1 = (state_13917[(2)]);var inst_13882 = (inst_13881__$1 == null);var inst_13883 = cljs.core.not.call(null,inst_13882);var state_13917__$1 = (function (){var statearr_13922 = state_13917;(statearr_13922[(9)] = inst_13881__$1);
return statearr_13922;
})();if(inst_13883)
{var statearr_13923_13950 = state_13917__$1;(statearr_13923_13950[(1)] = (5));
} else
{var statearr_13924_13951 = state_13917__$1;(statearr_13924_13951[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (15)))
{var inst_13907 = (state_13917[(2)]);var state_13917__$1 = state_13917;var statearr_13925_13952 = state_13917__$1;(statearr_13925_13952[(2)] = inst_13907);
(statearr_13925_13952[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (13)))
{var state_13917__$1 = state_13917;var statearr_13926_13953 = state_13917__$1;(statearr_13926_13953[(2)] = null);
(statearr_13926_13953[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (6)))
{var inst_13877 = (state_13917[(7)]);var inst_13902 = inst_13877.length;var inst_13903 = (inst_13902 > (0));var state_13917__$1 = state_13917;if(cljs.core.truth_(inst_13903))
{var statearr_13927_13954 = state_13917__$1;(statearr_13927_13954[(1)] = (12));
} else
{var statearr_13928_13955 = state_13917__$1;(statearr_13928_13955[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (3)))
{var inst_13915 = (state_13917[(2)]);var state_13917__$1 = state_13917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13917__$1,inst_13915);
} else
{if((state_val_13918 === (12)))
{var inst_13877 = (state_13917[(7)]);var inst_13905 = cljs.core.vec.call(null,inst_13877);var state_13917__$1 = state_13917;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13917__$1,(15),out,inst_13905);
} else
{if((state_val_13918 === (2)))
{var state_13917__$1 = state_13917;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13917__$1,(4),ch);
} else
{if((state_val_13918 === (11)))
{var inst_13885 = (state_13917[(10)]);var inst_13881 = (state_13917[(9)]);var inst_13895 = (state_13917[(2)]);var inst_13896 = [];var inst_13897 = inst_13896.push(inst_13881);var inst_13877 = inst_13896;var inst_13878 = inst_13885;var state_13917__$1 = (function (){var statearr_13929 = state_13917;(statearr_13929[(11)] = inst_13897);
(statearr_13929[(7)] = inst_13877);
(statearr_13929[(8)] = inst_13878);
(statearr_13929[(12)] = inst_13895);
return statearr_13929;
})();var statearr_13930_13956 = state_13917__$1;(statearr_13930_13956[(2)] = null);
(statearr_13930_13956[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (9)))
{var inst_13877 = (state_13917[(7)]);var inst_13893 = cljs.core.vec.call(null,inst_13877);var state_13917__$1 = state_13917;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13917__$1,(11),out,inst_13893);
} else
{if((state_val_13918 === (5)))
{var inst_13885 = (state_13917[(10)]);var inst_13881 = (state_13917[(9)]);var inst_13878 = (state_13917[(8)]);var inst_13885__$1 = f.call(null,inst_13881);var inst_13886 = cljs.core._EQ_.call(null,inst_13885__$1,inst_13878);var inst_13887 = cljs.core.keyword_identical_QMARK_.call(null,inst_13878,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13888 = (inst_13886) || (inst_13887);var state_13917__$1 = (function (){var statearr_13931 = state_13917;(statearr_13931[(10)] = inst_13885__$1);
return statearr_13931;
})();if(cljs.core.truth_(inst_13888))
{var statearr_13932_13957 = state_13917__$1;(statearr_13932_13957[(1)] = (8));
} else
{var statearr_13933_13958 = state_13917__$1;(statearr_13933_13958[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (14)))
{var inst_13910 = (state_13917[(2)]);var inst_13911 = cljs.core.async.close_BANG_.call(null,out);var state_13917__$1 = (function (){var statearr_13935 = state_13917;(statearr_13935[(13)] = inst_13910);
return statearr_13935;
})();var statearr_13936_13959 = state_13917__$1;(statearr_13936_13959[(2)] = inst_13911);
(statearr_13936_13959[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (10)))
{var inst_13900 = (state_13917[(2)]);var state_13917__$1 = state_13917;var statearr_13937_13960 = state_13917__$1;(statearr_13937_13960[(2)] = inst_13900);
(statearr_13937_13960[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (8)))
{var inst_13885 = (state_13917[(10)]);var inst_13881 = (state_13917[(9)]);var inst_13877 = (state_13917[(7)]);var inst_13890 = inst_13877.push(inst_13881);var tmp13934 = inst_13877;var inst_13877__$1 = tmp13934;var inst_13878 = inst_13885;var state_13917__$1 = (function (){var statearr_13938 = state_13917;(statearr_13938[(7)] = inst_13877__$1);
(statearr_13938[(8)] = inst_13878);
(statearr_13938[(14)] = inst_13890);
return statearr_13938;
})();var statearr_13939_13961 = state_13917__$1;(statearr_13939_13961[(2)] = null);
(statearr_13939_13961[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6481__auto___13947,out))
;return ((function (switch__6466__auto__,c__6481__auto___13947,out){
return (function() {
var state_machine__6467__auto__ = null;
var state_machine__6467__auto____0 = (function (){var statearr_13943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13943[(0)] = state_machine__6467__auto__);
(statearr_13943[(1)] = (1));
return statearr_13943;
});
var state_machine__6467__auto____1 = (function (state_13917){while(true){
var ret_value__6468__auto__ = (function (){try{while(true){
var result__6469__auto__ = switch__6466__auto__.call(null,state_13917);if(cljs.core.keyword_identical_QMARK_.call(null,result__6469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6469__auto__;
}
break;
}
}catch (e13944){if((e13944 instanceof Object))
{var ex__6470__auto__ = e13944;var statearr_13945_13962 = state_13917;(statearr_13945_13962[(5)] = ex__6470__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13917);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13944;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13963 = state_13917;
state_13917 = G__13963;
continue;
}
} else
{return ret_value__6468__auto__;
}
break;
}
});
state_machine__6467__auto__ = function(state_13917){
switch(arguments.length){
case 0:
return state_machine__6467__auto____0.call(this);
case 1:
return state_machine__6467__auto____1.call(this,state_13917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6467__auto____0;
state_machine__6467__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6467__auto____1;
return state_machine__6467__auto__;
})()
;})(switch__6466__auto__,c__6481__auto___13947,out))
})();var state__6483__auto__ = (function (){var statearr_13946 = f__6482__auto__.call(null);(statearr_13946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6481__auto___13947);
return statearr_13946;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6483__auto__);
});})(c__6481__auto___13947,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map