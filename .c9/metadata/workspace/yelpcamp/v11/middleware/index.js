{"filter":false,"title":"index.js","tooltip":"/yelpcamp/v11/middleware/index.js","undoManager":{"mark":51,"position":51,"stack":[[{"start":{"row":31,"column":50},"end":{"row":31,"column":71},"action":"remove","lines":["checkCommentOwnership"],"id":2}],[{"start":{"row":58,"column":44},"end":{"row":58,"column":45},"action":"remove","lines":["I"],"id":3}],[{"start":{"row":58,"column":44},"end":{"row":58,"column":45},"action":"remove","lines":["n"],"id":4}],[{"start":{"row":58,"column":43},"end":{"row":58,"column":44},"action":"remove","lines":["d"],"id":5}],[{"start":{"row":58,"column":42},"end":{"row":58,"column":43},"action":"remove","lines":["e"],"id":6}],[{"start":{"row":58,"column":41},"end":{"row":58,"column":42},"action":"remove","lines":["g"],"id":7}],[{"start":{"row":58,"column":40},"end":{"row":58,"column":41},"action":"remove","lines":["g"],"id":8}],[{"start":{"row":58,"column":39},"end":{"row":58,"column":40},"action":"remove","lines":["o"],"id":9}],[{"start":{"row":58,"column":38},"end":{"row":58,"column":39},"action":"remove","lines":["L"],"id":10}],[{"start":{"row":58,"column":37},"end":{"row":58,"column":38},"action":"remove","lines":["s"],"id":11}],[{"start":{"row":58,"column":36},"end":{"row":58,"column":37},"action":"remove","lines":["i"],"id":12}],[{"start":{"row":58,"column":35},"end":{"row":58,"column":36},"action":"remove","lines":[" "],"id":13}],[{"start":{"row":58,"column":35},"end":{"row":58,"column":36},"action":"insert","lines":[" "],"id":14}],[{"start":{"row":58,"column":35},"end":{"row":58,"column":36},"action":"remove","lines":[" "],"id":15}],[{"start":{"row":31,"column":49},"end":{"row":31,"column":50},"action":"remove","lines":[" "],"id":16}],[{"start":{"row":58,"column":35},"end":{"row":58,"column":36},"action":"insert","lines":[" "],"id":17}],[{"start":{"row":58,"column":36},"end":{"row":58,"column":37},"action":"insert","lines":["i"],"id":18}],[{"start":{"row":58,"column":36},"end":{"row":58,"column":37},"action":"remove","lines":["i"],"id":19},{"start":{"row":58,"column":36},"end":{"row":58,"column":46},"action":"insert","lines":["isLoggedIn"]}],[{"start":{"row":58,"column":45},"end":{"row":58,"column":46},"action":"remove","lines":["n"],"id":20}],[{"start":{"row":58,"column":44},"end":{"row":58,"column":45},"action":"remove","lines":["I"],"id":21}],[{"start":{"row":58,"column":43},"end":{"row":58,"column":44},"action":"remove","lines":["d"],"id":22}],[{"start":{"row":58,"column":42},"end":{"row":58,"column":43},"action":"remove","lines":["e"],"id":23}],[{"start":{"row":58,"column":41},"end":{"row":58,"column":42},"action":"remove","lines":["g"],"id":24}],[{"start":{"row":58,"column":40},"end":{"row":58,"column":41},"action":"remove","lines":["g"],"id":25}],[{"start":{"row":58,"column":39},"end":{"row":58,"column":40},"action":"remove","lines":["o"],"id":26}],[{"start":{"row":58,"column":38},"end":{"row":58,"column":39},"action":"remove","lines":["L"],"id":27}],[{"start":{"row":58,"column":37},"end":{"row":58,"column":38},"action":"remove","lines":["s"],"id":28}],[{"start":{"row":58,"column":36},"end":{"row":58,"column":37},"action":"remove","lines":["i"],"id":29}],[{"start":{"row":58,"column":35},"end":{"row":58,"column":36},"action":"remove","lines":[" "],"id":30}],[{"start":{"row":31,"column":28},"end":{"row":31,"column":29},"action":"remove","lines":["d"],"id":31}],[{"start":{"row":31,"column":27},"end":{"row":31,"column":28},"action":"remove","lines":["n"],"id":32}],[{"start":{"row":31,"column":26},"end":{"row":31,"column":27},"action":"remove","lines":["u"],"id":33}],[{"start":{"row":31,"column":25},"end":{"row":31,"column":26},"action":"remove","lines":["o"],"id":34}],[{"start":{"row":31,"column":24},"end":{"row":31,"column":25},"action":"remove","lines":["r"],"id":35}],[{"start":{"row":31,"column":23},"end":{"row":31,"column":24},"action":"remove","lines":["g"],"id":36}],[{"start":{"row":31,"column":22},"end":{"row":31,"column":23},"action":"remove","lines":["p"],"id":37}],[{"start":{"row":31,"column":21},"end":{"row":31,"column":22},"action":"remove","lines":["m"],"id":38}],[{"start":{"row":31,"column":20},"end":{"row":31,"column":21},"action":"remove","lines":["a"],"id":39}],[{"start":{"row":31,"column":20},"end":{"row":31,"column":21},"action":"insert","lines":["o"],"id":40}],[{"start":{"row":31,"column":21},"end":{"row":31,"column":22},"action":"insert","lines":["m"],"id":41}],[{"start":{"row":31,"column":22},"end":{"row":31,"column":23},"action":"insert","lines":["m"],"id":42}],[{"start":{"row":31,"column":22},"end":{"row":31,"column":23},"action":"remove","lines":["m"],"id":43}],[{"start":{"row":31,"column":22},"end":{"row":31,"column":23},"action":"insert","lines":["m"],"id":44}],[{"start":{"row":31,"column":23},"end":{"row":31,"column":24},"action":"insert","lines":["e"],"id":45}],[{"start":{"row":31,"column":24},"end":{"row":31,"column":25},"action":"insert","lines":["n"],"id":46}],[{"start":{"row":31,"column":25},"end":{"row":31,"column":26},"action":"insert","lines":["t"],"id":47}],[{"start":{"row":65,"column":0},"end":{"row":66,"column":0},"action":"insert","lines":["",""],"id":48}],[{"start":{"row":66,"column":0},"end":{"row":72,"column":5},"action":"insert","lines":["isLoggedIn: function(req, res, next){","        if(req.isAuthenticated()){","            return next();","        }","        req.flash(\"error\", \"You must be signed in to do that!\");","        res.redirect(\"/login\");","    }"],"id":49}],[{"start":{"row":66,"column":0},"end":{"row":72,"column":5},"action":"remove","lines":["isLoggedIn: function(req, res, next){","        if(req.isAuthenticated()){","            return next();","        }","        req.flash(\"error\", \"You must be signed in to do that!\");","        res.redirect(\"/login\");","    }"],"id":50}],[{"start":{"row":65,"column":0},"end":{"row":66,"column":0},"action":"remove","lines":["",""],"id":51}],[{"start":{"row":62,"column":6},"end":{"row":62,"column":7},"action":"remove","lines":["s"],"id":52}],[{"start":{"row":62,"column":6},"end":{"row":62,"column":7},"action":"insert","lines":["q"],"id":53}]]},"ace":{"folds":[],"scrolltop":613.6666898727417,"scrollleft":0,"selection":{"start":{"row":63,"column":27},"end":{"row":63,"column":27},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":47,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1492401386876,"hash":"a734579f2d72ccbc87dbdfad7a11da94f6988b97"}