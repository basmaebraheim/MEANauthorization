var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if (token === 'null') {
    return res.status(401).send('unauthorized request')
  }
  let payload = jwt.verify(token, 'secretkey')
  if (!payload) {
    return res.status(401).send('unauthorized request')
  }
  req.userId = payload.subject
  next()
  

}
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/events', function(req, res) {
  let events = [
    {
      "" : 0 ,
      "business_id": "CtYWpX_cy1YdZgoKtS0Tqg",
      "cool": 0,
      "date": "2015-09-23",
      "funny": 0,
      "review_id": "TrxOJOb1UfAaetanTBID0Q",
      "stars": 5,
      "text": "Quite frankly I don't see what the problem is with this place. The food is good, the location is right in the middle of town and there is delivery so I love it.",
      "useful": 0,
      "user_id": "rMlXCitJ_5p1GcsGBnhE2g"
    },
    {
      "" : 1 ,
      "business_id": "CtYWpX_cy1YdZgoKtS0Tqg",
      "cool": 0,
      "date": "2012-11-29",
      "funny": 0,
      "review_id": "xTBeQ4qfhKhUTIOZPyhHVg",
      "stars": 1,
      "text": "Who could give this a good  review? For the first couple of months the place was ok, food was cheap and  pizza is clearly premade frozen. Georgios is not. The only good food here is fried. Their staff consists of rude teenagers. This is pretty much the formula for every Happys. Garbage.",
      "useful": 0,
      "user_id": "dqfCjksa09IAWvnUObGhPQ"
    },
    {
      "": 2,
      "business_id": "CtYWpX_cy1YdZgoKtS0Tqg",
      "cool": 1,
      "date": "2014-01-05",
      "funny": 0,
      "review_id": "zVT2IBrQsxhEzkoSL3VKeQ",
      "stars": 1,
      "text": "This place is awful. I live three minutes away and wait at least an hour for my order each time. When I get my pizza it looks like it has been sitting under a heat lamp all day. It's so disappointing because I've had great Happy's Pizza before. Someone needs to come in and take control of this place. There is no excuse for running a garbage business. It's time to stop making excuses and put this place out of business.  Stop allowing people the belief of entitlement.",
      "useful": 1,
      "user_id": "zjJp_PK3GUO2jcDG4Q1-0Q"
    },
    {
      "": 3,
      "business_id": "CtYWpX_cy1YdZgoKtS0Tqg",
      "cool": 0,
      "date": "2012-04-27",
      "funny": 0,
      "review_id": "evyF4JQhl7UGa_bhz3utHw",
      "stars": 4,
      "text": "My first contact with Happy's Pizza did not bode well for a good experience. When they first opened their Detroit Avenue location someone came buy and put a delivery menu on my front door. I live off of Detroit Avenue.. In Lakewood. Since we basically live on the same street as the restaurant and someone from Happy's placed the menu on my door, I naturally assumed that they would deliver to my house. Wishing to try them out, I called and was told they don't deliver to Lakewood (which is five minutes from them) to which I pondered why did you put menus on every door in a town you don't deliver to? But I digress.\n\n\n\n\n\n\n\n\n\nLast night I was in the mood for something new and had just got (another) menu for Happy's, this time in the mail. I decided to order the deep dish pizza with an order of BBQ rib tips. I even decided to take the five minute drive to pick it up. \n\n\n\n\n\n\n\n\n\nMy order was ready when I arrived and I headed home (skeptically)  to try it out. \n\n\n\n\n\n\n\n\n\nI have to admit I was not that disappointed. I reminded me of a slightly more robust Donato's (which I like) and definitely quenched my appetite for some new pizza. The rib tips were hot and sloppy (that's a good thing) maybe slightly overcooked and not very tender, but not bad for a \"fast food\" kind of place. \n\n\n\n\n\n\n\n\n\nThey have a very large and eclectic menu and very reasonable prices, some of the deals are downright crazy. I am sure I will repeat again if I get tired of the few places to choose from in Lakewood.",
      "useful": 3,
      "user_id": "C37CnhZ4hrpHT1PIHIbA-w"
    },
    {
      "": 4,
      "business_id": "CtYWpX_cy1YdZgoKtS0Tqg",
      "cool": 0,
      "date": "2012-02-19",
      "funny": 0,
      "review_id": "L_UG00bcT4J2RI2xMix0-A",
      "stars": 2,
      "text": "We ordered from the new Happy's on Puritas. My boyfriend loved his rib tips and for $8, we found it to be a good value. My veggie sub was pretty bland and lacking in veggies. Great sandwich if you like just bread with little filling. We'll probably not be regulars as there are many other pizza/sub places that offer better food in the area. Not the worst food we've ever had though.",
      "useful": 0,
      "user_id": "xvlDWTotsFmvJ0TH-4kNyw"
    },
    {
      "": 5,
      "business_id": "CtYWpX_cy1YdZgoKtS0Tqg",
      "cool": 0,
      "date": "2011-09-30",
      "funny": 1,
      "review_id": "FKbEWs1fueoTO8bQ9Typew",
      "stars": 1,
      "text": "I don't know! Happys Pizza, what do I say its not bad but its not the best. First thing I have to say is the menu is so big for a place that has pizza in it's name, I can understand the wings and even the sandwiches. But shrimp, fish, burgers, fried chicken, hot dogs (or as they call them Happy Dogs) etc.\n\n\n\n\n\n\n\n\n\nAnd with such a big menu I know that about 100% of it is all frozen food. Yes even the pizza tastes like it was frozen. But I did get some things you might not find on a pizza shops menu, like fried shrooms and chili cheese fries. First of all the shrooms had heavy breading and watered down ranch dressing. The fries are good, but something you can do at home with some frozen fries a can of chili and some frito lay nacho cheese sauce. \n\n\n\n\n\n\n\n\n\nI also ordered a steak sub (that came with fries and about 1/2oz of cole slaw, that I did not touch), and some wings with two diffrent flavor sauces. I opened the box that the sub came in, and the thick white styrafoam container the wings came in and just like everything else frozen food. The sub bread was nice and soft and was still soft even after a good heating in the micro. But it was nothing but pressed together beef, with un-cooked red onions and un-melted cheese, and super sweet steak sauce.\n\n\n\n\n\n\n\n\n\nThe wings, well................ again something they cooked out of a bag from out of the freezer. Heavy breading I couldn't find any of the chicken on the bone, and when I could it wasn't much. The sauce was ok but because of the heavy breading on them you couldn't taste the sauce. The sauce in the bottom of the container was good if only it could have made the breading taste that way. \n\n\n\n\n\n\n\n\n\nSo maybe I will order Happys pizza again if my freezer is empty, and if I need super fast delivery of food. But other than that I will keep my money in my purse. And cook even on the nights I don't want to.",
      "useful": 3,
      "user_id": "n-tsY_GE27GVu0ne1OoMWA"
    }
  ]
  res.json(events);
});

router.get('/special', verifyToken,  function(req, res) {
  let events = [
    {
      "" : 0 ,
      "business_id": "CtYWpX_cy1YdZgoKtS0Tqg",
      "cool": 0,
      "date": "2015-09-23",
      "funny": 0,
      "review_id": "TrxOJOb1UfAaetanTBID0Q",
      "stars": 5,
      "text": "Quite frankly I don't see what the problem is with this place. The food is good, the location is right in the middle of town and there is delivery so I love it.",
      "useful": 0,
      "user_id": "rMlXCitJ_5p1GcsGBnhE2g"
    },
    {
      "" : 1 ,
      "business_id": "CtYWpX_cy1YdZgoKtS0Tqg",
      "cool": 0,
      "date": "2012-11-29",
      "funny": 0,
      "review_id": "xTBeQ4qfhKhUTIOZPyhHVg",
      "stars": 1,
      "text": "Who could give this a good  review? For the first couple of months the place was ok, food was cheap and  pizza is clearly premade frozen. Georgios is not. The only good food here is fried. Their staff consists of rude teenagers. This is pretty much the formula for every Happys. Garbage.",
      "useful": 0,
      "user_id": "dqfCjksa09IAWvnUObGhPQ"
    },
    {
      "": 2,
      "business_id": "CtYWpX_cy1YdZgoKtS0Tqg",
      "cool": 1,
      "date": "2014-01-05",
      "funny": 0,
      "review_id": "zVT2IBrQsxhEzkoSL3VKeQ",
      "stars": 1,
      "text": "This place is awful. I live three minutes away and wait at least an hour for my order each time. When I get my pizza it looks like it has been sitting under a heat lamp all day. It's so disappointing because I've had great Happy's Pizza before. Someone needs to come in and take control of this place. There is no excuse for running a garbage business. It's time to stop making excuses and put this place out of business.  Stop allowing people the belief of entitlement.",
      "useful": 1,
      "user_id": "zjJp_PK3GUO2jcDG4Q1-0Q"
    },
    {
      "": 3,
      "business_id": "CtYWpX_cy1YdZgoKtS0Tqg",
      "cool": 0,
      "date": "2012-04-27",
      "funny": 0,
      "review_id": "evyF4JQhl7UGa_bhz3utHw",
      "stars": 4,
      "text": "My first contact with Happy's Pizza did not bode well for a good experience. When they first opened their Detroit Avenue location someone came buy and put a delivery menu on my front door. I live off of Detroit Avenue.. In Lakewood. Since we basically live on the same street as the restaurant and someone from Happy's placed the menu on my door, I naturally assumed that they would deliver to my house. Wishing to try them out, I called and was told they don't deliver to Lakewood (which is five minutes from them) to which I pondered why did you put menus on every door in a town you don't deliver to? But I digress.\n\n\n\n\n\n\n\n\n\nLast night I was in the mood for something new and had just got (another) menu for Happy's, this time in the mail. I decided to order the deep dish pizza with an order of BBQ rib tips. I even decided to take the five minute drive to pick it up. \n\n\n\n\n\n\n\n\n\nMy order was ready when I arrived and I headed home (skeptically)  to try it out. \n\n\n\n\n\n\n\n\n\nI have to admit I was not that disappointed. I reminded me of a slightly more robust Donato's (which I like) and definitely quenched my appetite for some new pizza. The rib tips were hot and sloppy (that's a good thing) maybe slightly overcooked and not very tender, but not bad for a \"fast food\" kind of place. \n\n\n\n\n\n\n\n\n\nThey have a very large and eclectic menu and very reasonable prices, some of the deals are downright crazy. I am sure I will repeat again if I get tired of the few places to choose from in Lakewood.",
      "useful": 3,
      "user_id": "C37CnhZ4hrpHT1PIHIbA-w"
    },
    {
      "": 4,
      "business_id": "CtYWpX_cy1YdZgoKtS0Tqg",
      "cool": 0,
      "date": "2012-02-19",
      "funny": 0,
      "review_id": "L_UG00bcT4J2RI2xMix0-A",
      "stars": 2,
      "text": "We ordered from the new Happy's on Puritas. My boyfriend loved his rib tips and for $8, we found it to be a good value. My veggie sub was pretty bland and lacking in veggies. Great sandwich if you like just bread with little filling. We'll probably not be regulars as there are many other pizza/sub places that offer better food in the area. Not the worst food we've ever had though.",
      "useful": 0,
      "user_id": "xvlDWTotsFmvJ0TH-4kNyw"
    },
    {
      "": 5,
      "business_id": "CtYWpX_cy1YdZgoKtS0Tqg",
      "cool": 0,
      "date": "2011-09-30",
      "funny": 1,
      "review_id": "FKbEWs1fueoTO8bQ9Typew",
      "stars": 1,
      "text": "I don't know! Happys Pizza, what do I say its not bad but its not the best. First thing I have to say is the menu is so big for a place that has pizza in it's name, I can understand the wings and even the sandwiches. But shrimp, fish, burgers, fried chicken, hot dogs (or as they call them Happy Dogs) etc.\n\n\n\n\n\n\n\n\n\nAnd with such a big menu I know that about 100% of it is all frozen food. Yes even the pizza tastes like it was frozen. But I did get some things you might not find on a pizza shops menu, like fried shrooms and chili cheese fries. First of all the shrooms had heavy breading and watered down ranch dressing. The fries are good, but something you can do at home with some frozen fries a can of chili and some frito lay nacho cheese sauce. \n\n\n\n\n\n\n\n\n\nI also ordered a steak sub (that came with fries and about 1/2oz of cole slaw, that I did not touch), and some wings with two diffrent flavor sauces. I opened the box that the sub came in, and the thick white styrafoam container the wings came in and just like everything else frozen food. The sub bread was nice and soft and was still soft even after a good heating in the micro. But it was nothing but pressed together beef, with un-cooked red onions and un-melted cheese, and super sweet steak sauce.\n\n\n\n\n\n\n\n\n\nThe wings, well................ again something they cooked out of a bag from out of the freezer. Heavy breading I couldn't find any of the chicken on the bone, and when I could it wasn't much. The sauce was ok but because of the heavy breading on them you couldn't taste the sauce. The sauce in the bottom of the container was good if only it could have made the breading taste that way. \n\n\n\n\n\n\n\n\n\nSo maybe I will order Happys pizza again if my freezer is empty, and if I need super fast delivery of food. But other than that I will keep my money in my purse. And cook even on the nights I don't want to.",
      "useful": 3,
      "user_id": "n-tsY_GE27GVu0ne1OoMWA"
    }
  ]
  res.json(events);
});



module.exports = router;
