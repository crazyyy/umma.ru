!function(){for(var e,t=function(){},i=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],a=i.length,n=window.console=window.console||{};a--;)e=i[a],n[e]||(n[e]=t)}(),"undefined"==typeof jQuery?console.warn("jQuery hasn't loaded"):console.log("jQuery has loaded"),$(function(){var e=$(".container--main").height();$("aside.sidebar").height(e),$(".hardis--title span").on("click",function(e){$(this).hasClass("hardis--title-a")||($(".hardis--title-a").removeClass("hardis--title-a"),$(this).addClass("hardis--title-a"),$(".hardis-content--item-a").fadeOut("fast"),$(".hardis-content--item").each(function(e,t){$(this).hasClass("hardis-content--item-a")?$(this).removeClass("hardis-content--item-a"):($(this).addClass("hardis-content--item-a"),$(this).fadeIn("fast"))}))}),$(".featured-video--desshort").on("click",function(e){$(this).fadeOut("fast",function(){$(".featured-video--desfull").fadeIn("fast")})}),$(".featured-video--desfull").on("click",function(e){$(this).fadeOut("fast",function(){$(".featured-video--desshort").fadeIn("fast")})}),$(".widget--asidenav a").click(function(){console.log(this)})});
//# sourceMappingURL=maps/scripts.js.map
