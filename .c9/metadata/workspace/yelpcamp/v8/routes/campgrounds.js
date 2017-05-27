{"filter":false,"title":"campgrounds.js","tooltip":"/yelpcamp/v8/routes/campgrounds.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":89,"column":13},"end":{"row":89,"column":14},"action":"insert","lines":["E"],"id":1647}],[{"start":{"row":89,"column":14},"end":{"row":89,"column":15},"action":"insert","lines":["d"],"id":1648}],[{"start":{"row":89,"column":15},"end":{"row":89,"column":16},"action":"insert","lines":["i"],"id":1649}],[{"start":{"row":89,"column":16},"end":{"row":89,"column":17},"action":"insert","lines":["t"],"id":1650}],[{"start":{"row":89,"column":17},"end":{"row":89,"column":18},"action":"insert","lines":[" "],"id":1651}],[{"start":{"row":89,"column":18},"end":{"row":89,"column":19},"action":"insert","lines":["r"],"id":1652}],[{"start":{"row":89,"column":19},"end":{"row":89,"column":20},"action":"insert","lines":["o"],"id":1653}],[{"start":{"row":89,"column":20},"end":{"row":89,"column":21},"action":"insert","lines":["u"],"id":1654}],[{"start":{"row":89,"column":21},"end":{"row":89,"column":22},"action":"insert","lines":["t"],"id":1655}],[{"start":{"row":89,"column":22},"end":{"row":89,"column":23},"action":"insert","lines":["e"],"id":1656}],[{"start":{"row":89,"column":23},"end":{"row":89,"column":24},"action":"insert","lines":[" "],"id":1657}],[{"start":{"row":89,"column":24},"end":{"row":89,"column":25},"action":"insert","lines":["f"],"id":1658}],[{"start":{"row":89,"column":25},"end":{"row":89,"column":26},"action":"insert","lines":["o"],"id":1659}],[{"start":{"row":89,"column":26},"end":{"row":89,"column":27},"action":"insert","lines":["r"],"id":1660}],[{"start":{"row":89,"column":27},"end":{"row":89,"column":28},"action":"insert","lines":[" "],"id":1661}],[{"start":{"row":89,"column":28},"end":{"row":89,"column":29},"action":"insert","lines":["c"],"id":1662}],[{"start":{"row":89,"column":29},"end":{"row":89,"column":30},"action":"insert","lines":["o"],"id":1663}],[{"start":{"row":89,"column":30},"end":{"row":89,"column":31},"action":"insert","lines":["m"],"id":1664}],[{"start":{"row":89,"column":31},"end":{"row":89,"column":32},"action":"insert","lines":["m"],"id":1665}],[{"start":{"row":89,"column":32},"end":{"row":89,"column":33},"action":"insert","lines":["e"],"id":1666}],[{"start":{"row":89,"column":33},"end":{"row":89,"column":34},"action":"insert","lines":["n"],"id":1667}],[{"start":{"row":89,"column":34},"end":{"row":89,"column":35},"action":"insert","lines":["t"],"id":1668}],[{"start":{"row":89,"column":35},"end":{"row":89,"column":36},"action":"insert","lines":["s"],"id":1669}],[{"start":{"row":89,"column":35},"end":{"row":89,"column":36},"action":"remove","lines":["s"],"id":1670}],[{"start":{"row":89,"column":35},"end":{"row":89,"column":36},"action":"insert","lines":["!"],"id":1671}],[{"start":{"row":89,"column":36},"end":{"row":89,"column":37},"action":"insert","lines":["!"],"id":1672}],[{"start":{"row":89,"column":39},"end":{"row":89,"column":40},"action":"insert","lines":[";"],"id":1673}],[{"start":{"row":88,"column":21},"end":{"row":88,"column":22},"action":"insert","lines":["s"],"id":1674}],[{"start":{"row":88,"column":21},"end":{"row":88,"column":22},"action":"remove","lines":["s"],"id":1675}],[{"start":{"row":88,"column":21},"end":{"row":88,"column":22},"action":"insert","lines":["s"],"id":1676}],[{"start":{"row":88,"column":21},"end":{"row":88,"column":22},"action":"remove","lines":["s"],"id":1677}],[{"start":{"row":88,"column":0},"end":{"row":90,"column":3},"action":"remove","lines":["router.get(\"/:comment_id/edit\", function(req, res) {","   res.send(\"Edit route for comment!!\"); ","});"],"id":1678}],[{"start":{"row":15,"column":3},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":1679}],[{"start":{"row":99,"column":0},"end":{"row":119,"column":1},"action":"remove","lines":["function checkCampgroundOwnership(req,res,next){"," //is user logged in","        if(req.isAuthenticated()){","            Campground.findById(req.params.id, function(err, foundCampground){","                 if(err){","                    res.redirect(\"/campgrounds\");","                } else{","                     //does user own the campground??","                     if(foundCampground.author.id .equals(req.user._id)){","                        next();","                     }else{","                         res.redirect(\"back\");","                     }","            }","    });","            ","        }else{","            res.redirect(\"back\");","        }","    ","}"],"id":1680}],[{"start":{"row":91,"column":0},"end":{"row":98,"column":0},"action":"remove","lines":["//==============middleware==========","function isLoggedIn(req,res,next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}",""],"id":1681}],[{"start":{"row":2,"column":50},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":1682}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["v"],"id":1683}],[{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["a"],"id":1684}],[{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["r"],"id":1685}],[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":[" "],"id":1686}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["m"],"id":1687}],[{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["i"],"id":1688}],[{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["d"],"id":1689}],[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["d"],"id":1690}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":8},"action":"remove","lines":["midd"],"id":1691},{"start":{"row":3,"column":4},"end":{"row":3,"column":14},"action":"insert","lines":["middleware"]}],[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":[" "],"id":1692}],[{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["="],"id":1693}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":[" "],"id":1694}],[{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["r"],"id":1695}],[{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["e"],"id":1696}],[{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["q"],"id":1697}],[{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"insert","lines":["u"],"id":1698}],[{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"insert","lines":["i"],"id":1699}],[{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"insert","lines":["r"],"id":1700}],[{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"insert","lines":["e"],"id":1701}],[{"start":{"row":3,"column":24},"end":{"row":3,"column":26},"action":"insert","lines":["()"],"id":1702}],[{"start":{"row":3,"column":25},"end":{"row":3,"column":27},"action":"insert","lines":["\"\""],"id":1703}],[{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["."],"id":1704}],[{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["."],"id":1705}],[{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["/"],"id":1706}],[{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["m"],"id":1707}],[{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":["i"],"id":1708}],[{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"insert","lines":["d"],"id":1709}],[{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"insert","lines":["d"],"id":1710}],[{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"insert","lines":["l"],"id":1711}],[{"start":{"row":3,"column":34},"end":{"row":3,"column":35},"action":"insert","lines":["e"],"id":1712}],[{"start":{"row":3,"column":35},"end":{"row":3,"column":36},"action":"insert","lines":["w"],"id":1713}],[{"start":{"row":3,"column":36},"end":{"row":3,"column":37},"action":"insert","lines":["a"],"id":1714}],[{"start":{"row":3,"column":37},"end":{"row":3,"column":38},"action":"insert","lines":["r"],"id":1715}],[{"start":{"row":3,"column":38},"end":{"row":3,"column":39},"action":"insert","lines":["e"],"id":1716}],[{"start":{"row":3,"column":39},"end":{"row":3,"column":40},"action":"insert","lines":["/"],"id":1717}],[{"start":{"row":3,"column":40},"end":{"row":3,"column":41},"action":"insert","lines":["i"],"id":1718}],[{"start":{"row":3,"column":41},"end":{"row":3,"column":42},"action":"insert","lines":["n"],"id":1719}],[{"start":{"row":3,"column":42},"end":{"row":3,"column":43},"action":"insert","lines":["d"],"id":1720}],[{"start":{"row":3,"column":43},"end":{"row":3,"column":44},"action":"insert","lines":["e"],"id":1721}],[{"start":{"row":3,"column":44},"end":{"row":3,"column":45},"action":"insert","lines":["x"],"id":1722}],[{"start":{"row":3,"column":45},"end":{"row":3,"column":46},"action":"insert","lines":["."],"id":1723}],[{"start":{"row":3,"column":46},"end":{"row":3,"column":47},"action":"insert","lines":["j"],"id":1724}],[{"start":{"row":3,"column":47},"end":{"row":3,"column":48},"action":"insert","lines":["s"],"id":1725}],[{"start":{"row":3,"column":50},"end":{"row":3,"column":51},"action":"insert","lines":[";"],"id":1726}],[{"start":{"row":3,"column":46},"end":{"row":3,"column":48},"action":"remove","lines":["js"],"id":1727}],[{"start":{"row":3,"column":45},"end":{"row":3,"column":46},"action":"remove","lines":["."],"id":1728}],[{"start":{"row":3,"column":44},"end":{"row":3,"column":45},"action":"remove","lines":["x"],"id":1729}],[{"start":{"row":3,"column":43},"end":{"row":3,"column":44},"action":"remove","lines":["e"],"id":1730}],[{"start":{"row":3,"column":42},"end":{"row":3,"column":43},"action":"remove","lines":["d"],"id":1731}],[{"start":{"row":3,"column":41},"end":{"row":3,"column":42},"action":"remove","lines":["n"],"id":1732}],[{"start":{"row":3,"column":40},"end":{"row":3,"column":41},"action":"remove","lines":["i"],"id":1733}],[{"start":{"row":3,"column":39},"end":{"row":3,"column":40},"action":"remove","lines":["/"],"id":1734}],[{"start":{"row":3,"column":42},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":1735}],[{"start":{"row":20,"column":16},"end":{"row":20,"column":17},"action":"insert","lines":["m"],"id":1736}],[{"start":{"row":20,"column":17},"end":{"row":20,"column":18},"action":"insert","lines":["i"],"id":1737}],[{"start":{"row":20,"column":18},"end":{"row":20,"column":19},"action":"insert","lines":["d"],"id":1738}],[{"start":{"row":20,"column":19},"end":{"row":20,"column":20},"action":"insert","lines":["d"],"id":1739}],[{"start":{"row":20,"column":20},"end":{"row":20,"column":21},"action":"insert","lines":["l"],"id":1740}],[{"start":{"row":20,"column":21},"end":{"row":20,"column":22},"action":"insert","lines":["e"],"id":1741}],[{"start":{"row":20,"column":16},"end":{"row":20,"column":22},"action":"remove","lines":["middle"],"id":1742},{"start":{"row":20,"column":16},"end":{"row":20,"column":26},"action":"insert","lines":["middleware"]}],[{"start":{"row":20,"column":26},"end":{"row":20,"column":27},"action":"insert","lines":["."],"id":1743}],[{"start":{"row":41,"column":18},"end":{"row":41,"column":29},"action":"insert","lines":["middleware."],"id":1744}],[{"start":{"row":60,"column":23},"end":{"row":60,"column":34},"action":"insert","lines":["middleware."],"id":1745}],[{"start":{"row":67,"column":18},"end":{"row":67,"column":29},"action":"insert","lines":["middleware."],"id":1746}],[{"start":{"row":81,"column":22},"end":{"row":81,"column":33},"action":"insert","lines":["middleware."],"id":1747}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1492050782492,"hash":"dcdbc3eeccc22528991dcc6fe10c438ddb46cced"}