(this["webpackJsonpgay-of-life"]=this["webpackJsonpgay-of-life"]||[]).push([[0],{21:function(A,g,D){},22:function(A,g,D){},31:function(A,g,D){"use strict";D.r(g);var B=D(0),Y=D.n(B),Q=D(10),s=D.n(Q),i=(D(21),D(11)),E=D(12),I=D(16),O=D(15),e=(D(22),D(3)),x=D(14),H=D(1),c=Object(x.a)({Gameboard:function(A){return{gridColumnStart:1,gridColumnEnd:7,display:"grid",gridTemplateColumns:"1fr repeat(".concat(A.cells[0].length,", 2ex) 1fr"),gridTemplateRows:"repeat(".concat(A.cells.length,", 2ex)"),background:"var(--straight)"}},Queer:function(A){return{backgroundImage:"url(".concat(A.flag,")"),backgroundSize:["100%","100%"],borderRadius:"2px"}}});function t(A){var g=c(A);return Object(H.jsx)("div",{className:g.Gameboard,children:A.cells.map((function(D,B){return[Object(H.jsx)("div",{},"".concat(B,"-pad-left"))].concat(Object(e.a)(D.map((function(D,Y){return Object(H.jsx)("div",{className:D?"queer "+g.Queer:"straight",onClick:function(){return A.toggleCell(Y,B)}},Y)}))),[Object(H.jsx)("div",{},"".concat(B,"-pad-right"))])}))})}function d(A){return Object(H.jsxs)("div",{className:"Game-control",children:[Object(H.jsx)("button",{onClick:A.toggle,children:A.ticking?"Pause":"Play"}),Object(H.jsx)("input",{type:"number",size:"3",min:"1",inputMode:"numeric",value:A.interval,onChange:A.updateInterval}),"ms/generation"]})}function w(A){return Object(H.jsxs)("div",{className:"Game-control",children:[Object(H.jsx)("button",{onClick:A.randomize,children:" Randomize "}),Object(H.jsx)("input",{type:"number",size:"3",min:"0",max:"100",inputMode:"numeric",value:Math.round(A.queerChance),onChange:A.updateQueerChance}),"% gay"]})}var M=D(5);function n(A){return Object(H.jsx)("div",{className:"Game-control",id:"Flag-control",children:Object.entries(A.flags).map((function(g){var D=Object(M.a)(g,2),B=D[0],Y=D[1],Q="Flag-button";return B===A.currentFlag&&(Q+=" active"),Object(H.jsx)("img",{className:Q,alt:"".concat(B," pride flag"),title:B,src:Y,onClick:function(){return A.setCurrent(B)},role:"button"},B)}))})}function G(A){return Object(H.jsxs)("div",{className:"Game-control",children:[Object(H.jsxs)("div",{children:[Object(H.jsx)("label",{htmlFor:"size-control-columns",children:"Width:"}),Object(H.jsx)("input",{id:"size-control-columns",type:"number",size:"3",min:"1",inputMode:"numeric",value:A.cells[0].length,onChange:A.updateCols})]}),Object(H.jsxs)("div",{children:[Object(H.jsx)("label",{htmlFor:"size-control-rows",children:"Height:"}),Object(H.jsx)("input",{id:"size-control-rows",type:"number",size:"3",min:"1",inputMode:"numeric",value:A.cells.length,onChange:A.updateRows})]})]})}function l(A,g){var D=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Math.random;return A.map((function(A){return A.map((function(){return D()<g}))}))}function a(A){return(A=function(A){for(var g=!1,D=!1,B=!1,Y=!1,Q=A.length-1,s=A[0].length-1,i=1;i<s;i++)A[0][i-1]&&A[0][i]&&A[0][i+1]&&(g=!0),A[Q][i-1]&&A[Q][i]&&A[Q][i+1]&&(D=!0);for(var E=1;E<Q;E++)A[E-1][0]&&A[E][0]&&A[E+1][0]&&(B=!0),A[E-1][s]&&A[E][s]&&A[E+1][s]&&(Y=!0);g&&(A=[Array(s+1).fill(!1)].concat(Object(e.a)(A)));D&&(A=[].concat(Object(e.a)(A),[Array(s+1).fill(!1)]));B&&(A=A.map((function(A){return[!1].concat(Object(e.a)(A))})));Y&&(A=A.map((function(A){return[].concat(Object(e.a)(A),[!1])})));return A}(A=function(A){for(var g=A.length>6,D=g,B=A[0].length>6,Y=B,Q=0;g&&Q<3;Q++)for(var s=0;g&&s<A[Q].length;s++)g=!A[Q][s];for(var i=A.length-3;D&&i<A.length;i++)for(var E=0;D&&E<A[i].length;E++)D=!A[i][E];for(var I=0;B&&I<A.length;I++)for(var O=0;B&&O<3;O++)B=!A[I][O];for(var e=0;Y&&e<A.length;e++)for(var x=A[e].length-3;Y&&x<A[e].length;x++)Y=!A[e][x];g&&(A=A.slice(1));D&&(A=A.slice(0,-1));B&&(A=A.map((function(A){return A.slice(1)})));Y&&(A=A.map((function(A){return A.slice(0,-1)})));return A}(A))).map((function(g,D){return g.map((function(g,B){var Y=function(A,g,D){return[[g-1,D-1],[g,D-1],[g+1,D-1],[g-1,D],[g+1,D],[g-1,D+1],[g,D+1],[g+1,D+1]].filter((function(g){var D=Object(M.a)(g,2),B=D[0],Y=D[1];return Y>=0&&Y<A.length&&B>=0&&B<A[Y].length})).map((function(g){var D=Object(M.a)(g,2),B=D[0],Y=D[1];return A[Y][B]})).filter((function(A){return A})).length}(A,B,D);return 3===Y||g&&2===Y}))}))}function r(A,g){var D=A[0].length;return g>D?A.map((function(A){return A.concat(Array(g-D).fill(!1))})):g<D?A.map((function(A){return A.slice(0,g-D)})):A}var C={rainbow:"data:image/png;base64,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",agender:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkCAIAAADxLsZiAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtSoVBTsUEcxQnSyIijhqFYpQodQKrTqYXPohNGlIUlwcBdeCgx+LVQcXZ10dXAVB8APEzc1J0UVK/F9SaBHjwXE/3t173L0DhFqJqWbbGKBqlpGKx8RMdkUMvKIDXehDGEMSM/XZZDIBz/F1Dx9f76I8y/vcn6NHyZkM8InEM0w3LOJ14qlNS+e8TxxiRUkhPiceNeiCxI9cl11+41xwWOCZISOdmiMOEYuFFpZbmBUNlXiSOKKoGuULGZcVzluc1VKFNe7JXxjMactLXKc5iDgWsIgkRMioYAMlWIjSqpFiIkX7MQ//gONPkksm1wYYOeZRhgrJ8YP/we9uzfzEuJsUjAHtL7b9MQwEdoF61ba/j227fgL4n4Errekv14DpT9KrTS1yBPRuAxfXTU3eAy53gPCTLhmSI/lpCvk88H5G35QF+m+B7lW3t8Y+Th+ANHWVuAEODoGRAmWveby7s7W3f880+vsBQ3pylFsM33AAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflBgkRKTuQvCUzAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAA65JREFUeNrt1sEJwDAMBEEruOqUJbXmv1KECIEwU8I9llsLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKnITCsAv3eZABA7ALEDEDsAsQMQOwCxAxA7ALEDxA5A7ADEDkDsAMQOQOwAxA5A7ADEDhA7ALEDEDsAsQMQOwCxAxA7ALEDEDtA7ADEDkDsAMQOQOwAxA5A7ADEDkDsALEDEDsAsQMQOwCxAxA7ALEDEDsAsQPEDkDsAMQOQOwAxA5A7ADEDkDsAMQOEDsAsQMQOwCxAxA7gHdFd1sB8OwAxA5A7ADEDkDsAMQOQOwAxA4QOwCxAxA7ALEDEDsAsQMQOwCxAxA7QOwAxA5A7ADEDkDsAMQOQOwAxA5A7ACxAxA7ALEDEDsAsQMQOwCxAxA7ALEDxA5A7ADEDkDsAMQOQOwAxA5A7ADEDhA7ALEDEDsAsQMQOwCxAxA7ALEDEDtA7ADEDkDsAMQOQOwAxA5gZue5rQB4dgBiByB2AGIHIHYAYgcgdgBiB4gdgNgBiB2A2AGIHYDYAYgdgNgBiB0gdgBiByB2AGIHIHYAYgcgdgBiByB2gNgBiB2A2AGIHYDYAYgdgNgBiB2A2AFiByB2AGIHIHYAYgcgdgBiByB2AGIHiB2A2AGIHYDYAYgdgNgBiB2A2AGIHSB2AGIHIHYAYgcgdgBiBzAT3W0FwLMDEDsAsQMQOwCxAxA7ALEDEDtA7ADEDkDsAMQOQOwAxA5A7ADEDkDsALEDEDsAsQMQOwCxAxA7ALEDEDsAsQPEDkDsAMQOQOwAxA5A7ADEDkDsAMQOEDsAsQMQOwCxAxA7ALEDEDsAsQMQO0DsAMQOQOwAxA5A7ADEDkDsAMQOQOwAsQMQOwCxAxA7ALEDEDuAmV1VVgA8OwCxAxA7ALEDEDsAsQMQOwCxA8QOQOwAxA5A7ADEDkDsAMQOQOwAxA4QOwCxAxA7ALEDEDsAsQMQOwCxAxA7QOwAxA5A7ADEDkDsAMQOQOwAxA5A7ACxAxA7ALEDEDsAsQMQOwCxAxA7ALEDxA5A7ADEDkDsAMQOQOwAxA5A7ADEDhA7ALEDEDsAsQMQOwCxAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgaw8reg6j6mtfIwAAAABJRU5ErkJggg==",aromantic:"data:image/png;base64,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",asexual:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkCAIAAADxLsZiAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtSoVBTsUEcxQnSyIijhqFYpQodQKrTqYXPohNGlIUlwcBdeCgx+LVQcXZ10dXAVB8APEzc1J0UVK/F9SaBHjwXE/3t173L0DhFqJqWbbGKBqlpGKx8RMdkUMvKIDXehDGEMSM/XZZDIBz/F1Dx9f76I8y/vcn6NHyZkM8InEM0w3LOJ14qlNS+e8TxxiRUkhPiceNeiCxI9cl11+41xwWOCZISOdmiMOEYuFFpZbmBUNlXiSOKKoGuULGZcVzluc1VKFNe7JXxjMactLXKc5iDgWsIgkRMioYAMlWIjSqpFiIkX7MQ//gONPkksm1wYYOeZRhgrJ8YP/we9uzfzEuJsUjAHtL7b9MQwEdoF61ba/j227fgL4n4Errekv14DpT9KrTS1yBPRuAxfXTU3eAy53gPCTLhmSI/lpCvk88H5G35QF+m+B7lW3t8Y+Th+ANHWVuAEODoGRAmWveby7s7W3f880+vsBQ3pylFsM33AAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflBgkRMCZouuDyAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAA7dJREFUeNrt1kENACAMBMEWzyCmZouGJrzIjIR7bC4CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICxrCorAN9bJgDEDkDsAMQOQOwAxA5A7ADEDkDsALEDEDsAsQMQOwCxAxA7ALEDEDsAsQPEDkDsAMQOQOwAxA5A7ADEDkDsAMQOEDsAsQMQOwCxAxA7ALEDEDsAsQMQO0DsAMQOQOwAxA5A7ADEDkDsAMQOQOwAsQMQOwCxAxA7ALEDEDsAsQMQOwCxA8QOQOwAxA5A7ADEDkDsAMQOQOwAxA4QOwCxAxA7ALEDEDsAsQMQOwCxAxA7QOwAxA5A7ADEDkDsAMQOQOwAxA5A7ACxAxA7ALEDEDsAsQMQOwCxAxA7QOwAxA5A7ADEDkDsAMQOQOwAxA5A7ACxAxA7ALEDEDsAsQMQO4DHsrutAHh2AGIHIHYAYgcgdgBiByB2AGIHiB2A2AGIHYDYAYgdgNgBiB2A2AGIHSB2AGIHIHYAYgcgdgBiByB2AGIHIHaA2AGIHYDYAYgdgNgBiB2A2AGIHYDYAWIHIHYAYgcgdgBiByB2AGIHIHYAYgeIHYDYAYgdgNgBiB2A2AGIHYDYAYgdIHYAYgcgdgBiByB2AGIHIHYAYgcgdoDYAYgdgNgBiB2A2AGIHYDYAYgdgNgBYgcgdgBiByB2AGIHIHYAYgcgdoDYAYgdgNgBiB2A2AGIHYDYAYgdgNgBYgcgdgBiByB2AGIHIHYAYgcgdgBiB4gdgNgBiB2A2AGIHYDYAYgdwFDudawAeHYAYgcgdgBiByB2AGIHIHYAYgeIHYDYAYgdgNgBiB2A2AGIHYDYAYgdIHYAYgcgdgBiByB2AGIHIHYAYgcgdoDYAYgdgNgBiB2A2AGIHYDYAYgdgNgBYgcgdgBiByB2AGIHIHYAYgcgdgBiB4gdgNgBiB2A2AGIHYDYAYgdgNgBiB0gdgBiByB2AGIHIHYAYgcgdgBiByB2gNgBiB2A2AGIHYDYAYgdgNgBiB2A2AFiByB2AGIHIHYAYgcgdgBiByB2gNgBiB2A2AGIHYDYAYgdgNgBiB2A2AFiByB2AGIHIHYAYgcgdgBiByB2AGIHiB2A2AGIHYDYAYgdgNgBiB3A0AU5gwgs6t5sXQAAAABJRU5ErkJggg==",bi:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkCAIAAADxLsZiAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtSoVBTsUEcxQnSyIijhqFYpQodQKrTqYXPohNGlIUlwcBdeCgx+LVQcXZ10dXAVB8APEzc1J0UVK/F9SaBHjwXE/3t173L0DhFqJqWbbGKBqlpGKx8RMdkUMvKIDXehDGEMSM/XZZDIBz/F1Dx9f76I8y/vcn6NHyZkM8InEM0w3LOJ14qlNS+e8TxxiRUkhPiceNeiCxI9cl11+41xwWOCZISOdmiMOEYuFFpZbmBUNlXiSOKKoGuULGZcVzluc1VKFNe7JXxjMactLXKc5iDgWsIgkRMioYAMlWIjSqpFiIkX7MQ//gONPkksm1wYYOeZRhgrJ8YP/we9uzfzEuJsUjAHtL7b9MQwEdoF61ba/j227fgL4n4Errekv14DpT9KrTS1yBPRuAxfXTU3eAy53gPCTLhmSI/lpCvk88H5G35QF+m+B7lW3t8Y+Th+ANHWVuAEODoGRAmWveby7s7W3f880+vsBQ3pylFsM33AAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflBgkRMxiC9q6aAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAABEBJREFUeNrt1jENACEUREE+QQzdmcAKvrCCBByh4BoqQmYkbPGysaIngNdlEwBiByB2AGIHIHYAYgcgdgBiByB2gNgBiB2A2AGIHYDYAYgdgNgBiB2A2AFiByB2AGIHIHYAYgcgdgBiByB2AGIHiB2A2AGIHYDYAYgdgNgBiB2A2AGIHSB2AGIHIHYAYgcgdgBiByB2AGIHIHaA2AGIHYDYAYgdgNgBiB2A2AGIHYDYAWIHIHYAYgcgdgBiByB2AGIHIHYAYgeIHYDYAYgdgNgBiB2A2AGIHYDYAYgdIHYAYgcgdgBiByB2AGIHIHYAYgcgdoDYAYgdgNgBiB2A2AGIHYDYAYgdIHYAYgcgdgBiByB2AGIHIHYAYgcgdoDYAYgdgNgBiB2A2AGIHYDYAYgdgNgBYgcgdgBiByB2AGIHIHYAYgcgdgBiB4gdgNgBiB2A2AGIHYDYAYgdgNgBiB0gdgBiByB2AGIHIHYAYgcgdgBiByB2gNgBiB2A2AGIHYDYAYgdgNgBiB2A2AFiByB2AGIHIHYAYgcgdgBiByB2AGIHiB2A2AGIHYDYAYgdgNgBiB2A2AGIHSB2AGIHIHYAYgcgdgBiB3CuzFatAHh2AGIHIHYAYgcgdgBiByB2AGIHiB2A2AGIHYDYAYgdgNgBiB2A2AGIHSB2AGIHIHYAYgcgdgBiByB2AGIHIHaA2AGIHYDYAYgdgNgBiB2A2AGIHYDYAWIHIHYAYgcgdgBiByB2AGIHIHYAYgeIHYDYAYgdgNgBiB2A2AGIHYDYAYgdIHYAYgcgdgBiByB2AGIHIHYAYgcgdoDYAYgdgNgBiB2A2AGIHYDYAYgdgNgBYgcgdgBiByB2AGIHIHYAYgcgdoDYAYgdgNgBiB3ATSK+YQXAswMQOwCxAxA7ALEDEDsAsQMQO0DsAMQOQOwAxA5A7ADEDkDsAMQOQOwAsQMQOwCxAxA7ALEDEDsAsQMQOwCxA8QOQOwAxA5A7ADEDkDsAMQOQOwAxA4QOwCxAxA7ALEDEDsAsQMQOwCxAxA7QOwAxA5A7ADEDkDsAMQOQOwAxA5A7ACxAxA7ALEDEDsAsQMQOwCxAxA7ALEDxA5A7ADEDkDsAMQOQOwAxA5A7ADEDhA7ALEDEDsAsQMQOwCxAxA7ALEDxA5A7ADEDkDsAMQOQOwAxA5A7ADEDhA7ALEDEDsAsQMQOwCxAxA7ALEDEDtA7ADEDkDsAMQOQOwAxA5A7ADEDkDsALEDEDsAsQMQOwCxAxA7ALEDEDsAsQPEDkDsAMQOQOwAxA5A7ADEDkDsAMQOEDsAsQMQOwCxAxA7ALEDEDsAsQMQO0DsAMQOQOwAxA5A7ADEDkDsAMQOQOwAsQMQOwCxAxA7ALEDEDsAsQMQOwCxA8QOQOwAxA5A7ADEDkDsAMQOQOwAxA4QOwCxAxA7ALEDEDsAsQMQO4B/G7QTBn3A11cPAAAAAElFTkSuQmCC",genderfluid:"data:image/png;base64,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",genderqueer:"data:image/png;base64,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",nonbinary:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkCAIAAADxLsZiAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtSoVBTsUEcxQnSyIijhqFYpQodQKrTqYXPohNGlIUlwcBdeCgx+LVQcXZ10dXAVB8APEzc1J0UVK/F9SaBHjwXE/3t173L0DhFqJqWbbGKBqlpGKx8RMdkUMvKIDXehDGEMSM/XZZDIBz/F1Dx9f76I8y/vcn6NHyZkM8InEM0w3LOJ14qlNS+e8TxxiRUkhPiceNeiCxI9cl11+41xwWOCZISOdmiMOEYuFFpZbmBUNlXiSOKKoGuULGZcVzluc1VKFNe7JXxjMactLXKc5iDgWsIgkRMioYAMlWIjSqpFiIkX7MQ//gONPkksm1wYYOeZRhgrJ8YP/we9uzfzEuJsUjAHtL7b9MQwEdoF61ba/j227fgL4n4Errekv14DpT9KrTS1yBPRuAxfXTU3eAy53gPCTLhmSI/lpCvk88H5G35QF+m+B7lW3t8Y+Th+ANHWVuAEODoGRAmWveby7s7W3f880+vsBQ3pylFsM33AAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflBgkROwxQ9fDvAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAABENJREFUeNrt1jENwDAMRNE4KhRPpRNwoVUuXT0Ug6VO0XsQbvi6qPceAKebJgDEDkDsAMQOQOwAxA5A7ADEDkDsALEDEDsAsQMQOwCxAxA7ALEDEDsAsQPEDkDsAMQOQOwAxA5A7ADEDkDsAMQOEDsAsQMQOwCxAxA7ALEDEDsAsQMQO0DsAMQOQOwAxA5A7ADEDkDsAMQOQOwAsQMQOwCxAxA7ALEDEDsAsQMQOwCxA8QOQOwAxA5A7ADEDkDsAMQOQOwAxA4QOwCxAxA7ALEDEDsAsQMQOwCxAxA7QOwAxA5A7ADEDkDsAMQOQOwAxA5A7ACxAxA7ALEDEDsAsQMQOwCxAxA7QOwAxA5A7ADEDkDsAMQOQOwAxA5A7ACxAxA7ALEDEDsAsQMQO4CfRVVZAfDsAMQOQOwAxA5A7ADEDkDsAMQOEDsAsQMQOwCxAxA7ALEDEDsAsQMQO0DsAMQOQOwAxA5A7ADEDkDsAMQOQOwAsQMQOwCxAxA7ALEDEDsAsQMQOwCxA8QOQOwAxA5A7ADEDkDsAMQOQOwAxA4QOwCxAxA7ALEDEDsAsQMQOwCxAxA7QOwAxA5A7ADEDkDsAMQOQOwAxA5A7ACxAxA7ALEDEDsAsQMQOwCxAxA7ALEDxA5A7ADEDkDsAMQOQOwAxA5A7ACxAxA7ALEDEDsAsQMQOwCxAxA7ALEDxA5A7ADEDkDsAMQOQOwAxA5A7ADEDhA7ALEDEDsAsQMQOwCxAxA7gKZrr8cKgGcHIHYAYgcgdgBiByB2AGIHIHaA2AGIHYDYAYgdgNgBiB2A2AGIHYDYAWIHIHYAYgcgdgBiByB2AGIHIHYAYgeIHYDYAYgdgNgBiB2A2AGIHYDYAYgdIHYAYgcgdgBiByB2AGIHIHYAYgcgdoDYAYgdgNgBiB2A2AGIHYDYAYgdgNgBYgcgdgBiByB2AGIHIHYAYgcgdgBiB4gdgNgBiB2A2AGIHYDYAYgdgNgBiB0gdgBiByB2AGIHIHYAYgcgdgBiB4gdgNgBiB2A2AGIHYDYAYgdgNgBiB0gdgBiByB2AGIHIHYAYgcgdgBiByB2gNgBiB2A2AGIHYDYAYgdgNgBNEVmWgHw7ADEDkDsAMQOQOwAxA5A7ADEDhA7ALEDEDsAsQMQOwCxAxA7ALEDEDtA7ADEDkDsAMQOQOwAxA5A7ADEDkDsALEDEDsAsQMQOwCxAxA7ALEDEDsAsQPEDkDsAMQOQOwAxA5A7ADEDkDsAMQOEDsAsQMQOwCxAxA7ALEDEDsAsQMQO0DsAMQOQOwAxA5A7ADEDkDsAMQOQOwAsQMQOwCxAxA7ALEDEDsAsQMQOwCxA8QOQOwAxA5A7ADEDkDsAMQOQOwAsQMQOwCxAxA7ALEDEDsAsQMQOwCxA8QOQOwAxA5A7ADEDkDsAMQOQOwAxA4QOwCxAxA7ALEDEDsAsQMQO4CmD3osCnu6/5u3AAAAAElFTkSuQmCC",pan:"data:image/png;base64,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",trans:"data:image/png;base64,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"},k=function(A){Object(I.a)(D,A);var g=Object(O.a)(D);function D(A){var B;Object(i.a)(this,D),B=g.call(this,A);var Y=A.rows||B.constructor.DEFAULT_ROWS,Q=A.cols||B.constructor.DEFAULT_COLS;return B.state={currentFlag:"rainbow",tickerID:null,tickInterval:B.constructor.DEFAULT_TICK_INTERVAL,queerChance:B.constructor.DEFAULT_QUEER_CHANCE,cells:Array(Y).fill(null).map((function(){return Array(Q).fill(!1)}))},B}return Object(E.a)(D,[{key:"tick",value:function(){this.setState({cells:a(this.state.cells)})}},{key:"toggleCell",value:function(A,g){var D=this.state.cells.slice();D[g][A]=!D[g][A],this.setState({cells:D})}},{key:"toggleTicking",value:function(){var A=this;if(null===this.state.tickerID){var g=setInterval((function(){return A.tick()}),this.state.tickInterval);this.setState({tickerID:g})}else clearInterval(this.state.tickerID),this.setState({tickerID:null})}},{key:"randomize",value:function(){this.setState({cells:l(this.state.cells,this.state.queerChance)})}},{key:"updateQueerChance",value:function(A){this.setState({queerChance:A/100})}},{key:"updateTickInterval",value:function(A){var g=this,D=this.state.tickerID;null!==D&&(clearInterval(D),D=setInterval((function(){return g.tick()}),A)),this.setState({tickerID:D,tickInterval:A})}},{key:"updateCols",value:function(A){this.setState({cells:r(this.state.cells,Number(A))})}},{key:"updateRows",value:function(A){var g,D;this.setState({cells:(g=this.state.cells,D=Number(A),D>g.length?Array(D-g.length).fill(null).map((function(){return Array(g[0].length).fill(!1)})).concat(g):D<g.length?g.slice(0,D-g.length):g)})}},{key:"render",value:function(){var A=this;return Object(H.jsxs)("div",{className:"App",children:[Object(H.jsx)("div",{id:"Head-spacer"}),Object(H.jsx)("div",{id:"Title",children:"Gay of Life"}),Object(H.jsx)(w,{randomize:function(){return A.randomize()},queerChance:100*this.state.queerChance,updateQueerChance:function(g){return A.updateQueerChance(g.target.value)}}),Object(H.jsx)(n,{flags:C,currentFlag:this.state.currentFlag,setCurrent:function(g){return A.setState({currentFlag:g})}}),Object(H.jsx)(d,{toggle:function(){return A.toggleTicking()},ticking:null!==this.state.tickerID,interval:this.state.tickInterval,updateInterval:function(g){return A.updateTickInterval(g.target.value)}}),Object(H.jsx)(G,{cells:this.state.cells,updateCols:function(g){return A.updateCols(g.target.value)},updateRows:function(g){return A.updateRows(g.target.value)}}),Object(H.jsx)(t,{cells:this.state.cells,toggleCell:function(g,D){return A.toggleCell(g,D)},flagName:this.state.currentFlag,flag:C[this.state.currentFlag]})]})}}]),D}(Y.a.Component);k.DEFAULT_ROWS=50,k.DEFAULT_COLS=50,k.DEFAULT_QUEER_CHANCE=.25,k.DEFAULT_TICK_INTERVAL=250;var N=k,u=function(A){A&&A instanceof Function&&D.e(3).then(D.bind(null,32)).then((function(g){var D=g.getCLS,B=g.getFID,Y=g.getFCP,Q=g.getLCP,s=g.getTTFB;D(A),B(A),Y(A),Q(A),s(A)}))};s.a.render(Object(H.jsx)(Y.a.StrictMode,{children:Object(H.jsx)(N,{})}),document.getElementById("root")),u()}},[[31,1,2]]]);
//# sourceMappingURL=main.aea6f683.chunk.js.map