var r=["string","number"],n=function(t,a){if(t){var c=typeof t;r.includes(c)?a.add("".concat(t).trim()):Array.isArray(t)?t.forEach((function(r){return n(r,a)})):"object"===c&&Object.keys(t).forEach((function(r){return t[r]&&a.add("".concat(r).trim())}))}};function t(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var a=new Set;return Array.from(r).forEach((function(r){return n(r,a)})),Array.from(a).filter((function(r){return r})).join(" ")}export{t as classes,t as classnames,t as clsx,t as default,t as joinclass};