
var Datastore = require('react-native-local-mongodb');
db = new Datastore({ filename: 'asyncStorageKey' });
db.loadDatabase(function (err) { 
  if (err){
    console.log(err);
  }
  else{
    console.log("success");
  }


});

// import Communications from 'react-native-communications';

import SendSMS from 'react-native-sms'
 
//some stuff
 



var catArray=["https://static.pexels.com/photos/127028/pexels-photo-127028.jpeg","https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg","http://s1.dmcdn.net/Jyj5s.jpg",
"https://i.ytimg.com/vi/dGFSjKuJfrI/maxresdefault.jpg","https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAfiAAAAJDM4NWFjMDM3LTE0MmMtNGQxYi1hNDBjLWQ1NGJiZDBiNzdlYQ.png",
"https://i.ytimg.com/vi/gtoknSe54gs/maxresdefault.jpg","http://www.bandofcats.com/wp-content/uploads/2012/05/funny-cats_169.jpg","http://images5.fanpop.com/image/photos/29000000/Funny-Cats-cats-29074471-500-378.jpg",
"https://i.pinimg.com/736x/d5/79/ab/d579ab393e1fecae3d71f72a39d34094--so-funny-funny-shit.jpg","https://i.pinimg.com/originals/35/55/4f/35554fda567b98efef9fc8c636abf3c7.jpg",
"https://pbs.twimg.com/profile_images/664431526004789248/OMKVNHEi.jpg","https://i.pinimg.com/736x/0a/9b/10/0a9b10cc6ce519533071c2448fe8adaa--breads-cat-cat.jpg","http://friskymongoose.com/wp-content/uploads/2013/02/Breadcat.jpg","https://media0.giphy.com/media/yAqdjThdDEMF2/200_s.gif"
,"https://i.ytimg.com/vi/MhjtimkRQts/maxresdefault.jpg","http://1.bp.blogspot.com/-KjKDXP9N8-w/T8phbk9KiKI/AAAAAAAAMok/V6cR_KHjcRQ/s640/funny-cats-wearing-fruit-helmets-005.jpg",
"https://i.ytimg.com/vi/ZH0s0Sl3QMw/hqdefault.jpg","https://www.youtube.com/watch?v=WP4Uh66FA3A","https://www.youtube.com/watch?v=cNycdfFEgBc","https://www.youtube.com/watch?v=1Wh8RzcQZr4","https://www.youtube.com/watch?v=O1KW3ZkLtuo",
"https://www.youtube.com/watch?v=79EvGkXHF9I","https://www.youtube.com/watch?v=hY7m5jjJ9mM","https://www.youtube.com/watch?v=jlNvOWDfMYo","https://www.youtube.com/watch?v=G4qVF1cTqdk","https://www.youtube.com/watch?v=XD_e7T5WCqw",
"https://www.youtube.com/watch?v=R81pgRSQ2XQ","https://www.youtube.com/watch?v=aGcsDJzcPos","https://www.youtube.com/watch?v=p5Vsg1CrhrI","http://www.petsworld.in/blog/wp-content/uploads/2014/09/adorable-cat.jpg","http://i.imgur.com/1AI2YTD.gifv","http://i.imgur.com/EB4DTRA.gifv",
"https://gfycat.com/PiercingHomelyArchaeocete","https://i.imgur.com/7iK6I28.gifv","https://gfycat.com/OffbeatRashItaliangreyhound","https://streamable.com/rq975","http://i.imgur.com/pAezVcf.gif","http://i.imgur.com/ID79oWu.gifv","https://www.youtube.com/watch?v=0DKQCZ9bg60","https://www.youtube.com/watch?v=5dsGWM5XGdg",
"https://www.youtube.com/watch?v=PMxggj3Cok0&feature=share","https://imgur.com/gallery/2RidL","https://www.youtube.com/watch?v=a4vJCc-qonM","https://www.youtube.com/watch?v=0jIwSmdwOLA","https://imgur.com/t/cat_gifs/krhP0m4",
"https://www.youtube.com/watch?v=MOvShrlzkiY&feature=share","https://www.youtube.com/watch?v=6vNg22CyjOk&feature=youtu.be","https://www.youtube.com/watch?v=Awf45u6zrP0","https://www.buzzfeed.com/copyranter/20-funny-cat-gifs?utm_term=.htKGYylXZ#.bvVw2869Q","https://giphy.com/gifs/funny-cat-SBIDrovnm0wOA","https://giphy.com/search/cute-kitten","http://www.cutecatgifs.com/"
,"http://themetapicture.com/media/picture.jpe","http://www.bandofcats.com/wp-content/uploads/2009/05/funny-cats_14.jpg","https://i.pinimg.com/736x/62/c0/84/62c0844b2efc19f68a4791ff64d33faa--new-music-gods-love.jpg"
,"https://s-media-cache-ak0.pinimg.com/originals/4d/e3/07/4de307d16a2e7b185339f492bcf95c2d.jpg","https://s-media-cache-ak0.pinimg.com/originals/d9/4f/7a/d94f7aaad784d9c7475e5d7f63363e40.jpg","https://www.askideas.com/media/15/Cat-Smiling-Funny-Cake.jpg"
,"https://i.ytimg.com/vi/EYd_6I9NI_s/hqdefault.jpg","http://starecat.com/content/wp-content/uploads/its-cool-man-shes-18-cats.jpg","https://i.ytimg.com/vi/lUaNo_L7AKU/hqdefault.jpg","https://i.ytimg.com/vi/PK2939Jji3M/hqdefault.jpg","https://s-media-cache-ak0.pinimg.com/originals/af/b4/3d/afb43d61fc41817143e58c597b2eea11.jpg"
,"https://i.ytimg.com/vi/IX7pdpm1gp8/hqdefault.jpg","https://i.ytimg.com/vi/hNY78GaJmGE/hqdefault.jpg","https://i.ytimg.com/vi/3bXgcX6dwTY/hqdefault.jpg","https://i.ytimg.com/vi/9e2QJ-VTeKY/hqdefault.jpg","https://www.youtube.com/watch?v=Xz6yBbBRr8Y","https://www.youtube.com/watch?v=OqQPv78AMw0","https://www.youtube.com/watch?v=QZjAuRdB5Qk","https://www.youtube.com/watch?v=zGcYabz3hYg","https://www.youtube.com/watch?v=L6EwZWWRA-U"
,"https://www.youtube.com/watch?v=9C1leq--_wM","https://www.youtube.com/watch?v=O5rD9Gma_Z8","https://www.youtube.com/watch?v=vP8RbfSgZtw","https://www.youtube.com/watch?v=5VBriRtl_aM","https://www.reddit.com/r/lolcats/comments/6scc31/yoga_cat/","http://i.imgur.com/9MxV5tu.gifv","http://i.imgur.com/WyCbgvQ.gifv","http://i.imgur.com/sMXbiwp.gif","http://i.imgur.com/sMXbiwp.gif","https://media.giphy.com/media/I1BkcMnMaMxna/giphy.gif","https://www.reddit.com/r/catreactiongifs/comments/6427yb/mrw_russia_tests_out_their_new_space_program/","https://i.imgur.com/TvaEN5q.gifv"
,"https://i.imgur.com/TvaEN5q.gifv","http://i.imgur.com/1MsVWCq.gifv","http://i.imgur.com/dkE18rf.gif","https://giphy.com/gifs/cat-kitten-Ha7WgQuQNHUTm","http://10pm.com/gifs/when-you-think-your-invincible/"
,"http://i.imgur.com/D6q3UMU.gifv","http://i.giphy.com/3o6ZtmIvJQTtYlpWuc.gif","http://i.imgur.com/efQk9L6.gif","http://imgur.com/a/bzNgL"
,"http://i.imgur.com/fe43I9j.gifv","http://i.imgur.com/ns5sOym.gifv","https://i.imgur.com/zoIyrRK.gifv","http://i.imgur.com/BYFWkm8.gifv","https://www.youtube.com/watch?v=-5Rka0TyrYw","https://www.youtube.com/watch?v=9sxMr4IdXaU","https://www.youtube.com/watch?v=rZBtOCIYiQE"
,"https://www.youtube.com/watch?v=-Wq35QXLiW8","http://www.huffingtonpost.com/entry/cat-brain-freeze_us_576ab611e4b0c0252e77edc8","http://i.imgur.com/pbNzRYR.gifv"
,"https://i.imgur.com/0ZtPEwl.gifv","http://i.imgur.com/1VVy6jA.gifv","http://i.imgur.com/273los4.gifv","http://i.imgur.com/uWv0rim.gifv","http://i.imgur.com/NG3Wm.gif","https://gfycat.com/MeagerEmbellishedJabiru",
"http://i.imgur.com/WrX2XBC.gifv","http://i.imgur.com/JfdDKAQ.gifv","https://gfycat.com/carelessripebarbet","http://i.imgur.com/S4H1j4b.gifv","https://gfycat.com/silentreliablegrouper","https://i.imgur.com/mQN25Ha.gifv","http://i.imgur.com/x1pI1Tz.gifv"
,"http://i.imgur.com/1Mh8yhv.gifv","https://gfycat.com/dependentreliablehyracotherium","http://i.imgur.com/WpPtWdc.gifv","http://i.imgur.com/JUoTWhO.jpg","http://i.imgur.com/UBof6EJ.gifv","http://i.imgur.com/hR0GAoR.gifv"
,"https://giphy.com/gifs/cat-funny-cats-l3q2D1oOzNlZ93ixy","http://i.imgur.com/9XMuIQG.gifv","http://i.imgur.com/xg6iVvx.gifv","http://i.imgur.com/NUyttbn.gifv"
,"http://i.imgur.com/v0lBzIa.gif","https://gfycat.com/jauntyshadygoose","http://i.imgur.com/R2fAdiy.gifv","http://i.imgur.com/tRwUb4B.gifv","https://i.imgur.com/eVBsAdA.gifv"
,"http://i.imgur.com/gS9acdD.gif","https://imgur.com/P71TpKJ","http://i.imgur.com/zaJQLB7.gifv","https://www.reddit.com/r/kittengifs/comments/6wbtzr/let_me_go/","https://i.imgur.com/uSBehS3.gifv","http://i.imgur.com/WAL4gJL.gifv"
,"https://www.reddit.com/r/kittengifs/comments/6wsbgc/please_dont_take_my_girlfriends_picture/","http://i.imgur.com/S7dxHL5.gifv","https://gfycat.com/definiteplayfulguineapig"
,"http://i.imgur.com/y6xJEsS.gifv","http://i.imgur.com/9z40Fab.gifv","https://static.pexels.com/photos/127028/pexels-photo-127028.jpeg","https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg","http://s1.dmcdn.net/Jyj5s.jpg",
"https://i.ytimg.com/vi/dGFSjKuJfrI/maxresdefault.jpg","https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAfiAAAAJDM4NWFjMDM3LTE0MmMtNGQxYi1hNDBjLWQ1NGJiZDBiNzdlYQ.png",
"https://i.ytimg.com/vi/gtoknSe54gs/maxresdefault.jpg","http://www.bandofcats.com/wp-content/uploads/2012/05/funny-cats_169.jpg","http://images5.fanpop.com/image/photos/29000000/Funny-Cats-cats-29074471-500-378.jpg",
"https://i.pinimg.com/736x/d5/79/ab/d579ab393e1fecae3d71f72a39d34094--so-funny-funny-shit.jpg","https://i.pinimg.com/originals/35/55/4f/35554fda567b98efef9fc8c636abf3c7.jpg",
"https://pbs.twimg.com/profile_images/664431526004789248/OMKVNHEi.jpg","https://i.pinimg.com/736x/0a/9b/10/0a9b10cc6ce519533071c2448fe8adaa--breads-cat-cat.jpg","http://friskymongoose.com/wp-content/uploads/2013/02/Breadcat.jpg","https://media0.giphy.com/media/yAqdjThdDEMF2/200_s.gif"
,"https://i.ytimg.com/vi/MhjtimkRQts/maxresdefault.jpg","http://1.bp.blogspot.com/-KjKDXP9N8-w/T8phbk9KiKI/AAAAAAAAMok/V6cR_KHjcRQ/s640/funny-cats-wearing-fruit-helmets-005.jpg",
"https://i.ytimg.com/vi/ZH0s0Sl3QMw/hqdefault.jpg","https://www.youtube.com/watch?v=WP4Uh66FA3A","https://www.youtube.com/watch?v=cNycdfFEgBc","https://www.youtube.com/watch?v=1Wh8RzcQZr4","https://www.youtube.com/watch?v=O1KW3ZkLtuo",
"https://www.youtube.com/watch?v=79EvGkXHF9I","https://www.youtube.com/watch?v=hY7m5jjJ9mM","https://www.youtube.com/watch?v=jlNvOWDfMYo","https://www.youtube.com/watch?v=G4qVF1cTqdk","https://www.youtube.com/watch?v=XD_e7T5WCqw",
"https://www.youtube.com/watch?v=R81pgRSQ2XQ","https://www.youtube.com/watch?v=aGcsDJzcPos","https://www.youtube.com/watch?v=p5Vsg1CrhrI","http://www.petsworld.in/blog/wp-content/uploads/2014/09/adorable-cat.jpg","http://i.imgur.com/1AI2YTD.gifv","http://i.imgur.com/EB4DTRA.gifv",
"https://gfycat.com/PiercingHomelyArchaeocete","https://i.imgur.com/7iK6I28.gifv","https://gfycat.com/OffbeatRashItaliangreyhound","https://streamable.com/rq975","http://i.imgur.com/pAezVcf.gif","http://i.imgur.com/ID79oWu.gifv","https://www.youtube.com/watch?v=0DKQCZ9bg60","https://www.youtube.com/watch?v=5dsGWM5XGdg",
"https://www.youtube.com/watch?v=PMxggj3Cok0&feature=share","https://imgur.com/gallery/2RidL","https://www.youtube.com/watch?v=a4vJCc-qonM","https://www.youtube.com/watch?v=0jIwSmdwOLA","https://imgur.com/t/cat_gifs/krhP0m4",
"https://www.youtube.com/watch?v=MOvShrlzkiY&feature=share","https://www.youtube.com/watch?v=6vNg22CyjOk&feature=youtu.be","https://www.youtube.com/watch?v=Awf45u6zrP0","https://www.buzzfeed.com/copyranter/20-funny-cat-gifs?utm_term=.htKGYylXZ#.bvVw2869Q","https://giphy.com/gifs/funny-cat-SBIDrovnm0wOA","https://giphy.com/search/cute-kitten","http://www.cutecatgifs.com/"
,"http://themetapicture.com/media/picture.jpe","http://www.bandofcats.com/wp-content/uploads/2009/05/funny-cats_14.jpg","https://i.pinimg.com/736x/62/c0/84/62c0844b2efc19f68a4791ff64d33faa--new-music-gods-love.jpg"
,"https://s-media-cache-ak0.pinimg.com/originals/4d/e3/07/4de307d16a2e7b185339f492bcf95c2d.jpg","https://s-media-cache-ak0.pinimg.com/originals/d9/4f/7a/d94f7aaad784d9c7475e5d7f63363e40.jpg","https://www.askideas.com/media/15/Cat-Smiling-Funny-Cake.jpg"
,"https://i.ytimg.com/vi/EYd_6I9NI_s/hqdefault.jpg","http://starecat.com/content/wp-content/uploads/its-cool-man-shes-18-cats.jpg","https://i.ytimg.com/vi/lUaNo_L7AKU/hqdefault.jpg","https://i.ytimg.com/vi/PK2939Jji3M/hqdefault.jpg","https://s-media-cache-ak0.pinimg.com/originals/af/b4/3d/afb43d61fc41817143e58c597b2eea11.jpg"
,"https://i.ytimg.com/vi/IX7pdpm1gp8/hqdefault.jpg","https://i.ytimg.com/vi/hNY78GaJmGE/hqdefault.jpg","https://i.ytimg.com/vi/3bXgcX6dwTY/hqdefault.jpg","https://i.ytimg.com/vi/9e2QJ-VTeKY/hqdefault.jpg","https://www.youtube.com/watch?v=Xz6yBbBRr8Y","https://www.youtube.com/watch?v=OqQPv78AMw0","https://www.youtube.com/watch?v=QZjAuRdB5Qk","https://www.youtube.com/watch?v=zGcYabz3hYg","https://www.youtube.com/watch?v=L6EwZWWRA-U"
,"https://www.youtube.com/watch?v=9C1leq--_wM","https://www.youtube.com/watch?v=O5rD9Gma_Z8","https://www.youtube.com/watch?v=vP8RbfSgZtw","https://www.youtube.com/watch?v=5VBriRtl_aM","https://www.reddit.com/r/lolcats/comments/6scc31/yoga_cat/","http://i.imgur.com/9MxV5tu.gifv","http://i.imgur.com/WyCbgvQ.gifv","http://i.imgur.com/sMXbiwp.gif","http://i.imgur.com/sMXbiwp.gif","https://media.giphy.com/media/I1BkcMnMaMxna/giphy.gif","https://www.reddit.com/r/catreactiongifs/comments/6427yb/mrw_russia_tests_out_their_new_space_program/","https://i.imgur.com/TvaEN5q.gifv"
,"https://i.imgur.com/TvaEN5q.gifv","http://i.imgur.com/1MsVWCq.gifv","http://i.imgur.com/dkE18rf.gif","https://giphy.com/gifs/cat-kitten-Ha7WgQuQNHUTm","http://10pm.com/gifs/when-you-think-your-invincible/"
,"http://i.imgur.com/D6q3UMU.gifv","http://i.giphy.com/3o6ZtmIvJQTtYlpWuc.gif","http://i.imgur.com/efQk9L6.gif","http://imgur.com/a/bzNgL"
,"http://i.imgur.com/fe43I9j.gifv","http://i.imgur.com/ns5sOym.gifv","https://i.imgur.com/zoIyrRK.gifv","http://i.imgur.com/BYFWkm8.gifv","https://www.youtube.com/watch?v=-5Rka0TyrYw","https://www.youtube.com/watch?v=9sxMr4IdXaU","https://www.youtube.com/watch?v=rZBtOCIYiQE"
,"https://www.youtube.com/watch?v=-Wq35QXLiW8","http://www.huffingtonpost.com/entry/cat-brain-freeze_us_576ab611e4b0c0252e77edc8","http://i.imgur.com/pbNzRYR.gifv"
,"https://i.imgur.com/0ZtPEwl.gifv","http://i.imgur.com/1VVy6jA.gifv","http://i.imgur.com/273los4.gifv","http://i.imgur.com/uWv0rim.gifv","http://i.imgur.com/NG3Wm.gif","https://gfycat.com/MeagerEmbellishedJabiru",
"http://i.imgur.com/WrX2XBC.gifv","http://i.imgur.com/JfdDKAQ.gifv","https://gfycat.com/carelessripebarbet","http://i.imgur.com/S4H1j4b.gifv","https://gfycat.com/silentreliablegrouper","https://i.imgur.com/mQN25Ha.gifv","http://i.imgur.com/x1pI1Tz.gifv"
,"http://i.imgur.com/1Mh8yhv.gifv","https://gfycat.com/dependentreliablehyracotherium","http://i.imgur.com/WpPtWdc.gifv","http://i.imgur.com/JUoTWhO.jpg","http://i.imgur.com/UBof6EJ.gifv","http://i.imgur.com/hR0GAoR.gifv"
,"https://giphy.com/gifs/cat-funny-cats-l3q2D1oOzNlZ93ixy","http://i.imgur.com/9XMuIQG.gifv","http://i.imgur.com/xg6iVvx.gifv","http://i.imgur.com/NUyttbn.gifv"
,"http://i.imgur.com/v0lBzIa.gif","https://gfycat.com/jauntyshadygoose","http://i.imgur.com/R2fAdiy.gifv","http://i.imgur.com/tRwUb4B.gifv","https://i.imgur.com/eVBsAdA.gifv"
,"http://i.imgur.com/gS9acdD.gif","https://imgur.com/P71TpKJ","http://i.imgur.com/zaJQLB7.gifv","https://www.reddit.com/r/kittengifs/comments/6wbtzr/let_me_go/","https://i.imgur.com/uSBehS3.gifv","http://i.imgur.com/WAL4gJL.gifv"
,"https://www.reddit.com/r/kittengifs/comments/6wsbgc/please_dont_take_my_girlfriends_picture/","http://i.imgur.com/S7dxHL5.gifv","https://gfycat.com/definiteplayfulguineapig"
,"http://i.imgur.com/y6xJEsS.gifv","http://i.imgur.com/9z40Fab.gifv","https://static.pexels.com/photos/127028/pexels-photo-127028.jpeg","https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg","http://s1.dmcdn.net/Jyj5s.jpg",
"https://i.ytimg.com/vi/dGFSjKuJfrI/maxresdefault.jpg","https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAfiAAAAJDM4NWFjMDM3LTE0MmMtNGQxYi1hNDBjLWQ1NGJiZDBiNzdlYQ.png",
"https://i.ytimg.com/vi/gtoknSe54gs/maxresdefault.jpg","http://www.bandofcats.com/wp-content/uploads/2012/05/funny-cats_169.jpg","http://images5.fanpop.com/image/photos/29000000/Funny-Cats-cats-29074471-500-378.jpg",
"https://i.pinimg.com/736x/d5/79/ab/d579ab393e1fecae3d71f72a39d34094--so-funny-funny-shit.jpg","https://i.pinimg.com/originals/35/55/4f/35554fda567b98efef9fc8c636abf3c7.jpg",
"https://pbs.twimg.com/profile_images/664431526004789248/OMKVNHEi.jpg","https://i.pinimg.com/736x/0a/9b/10/0a9b10cc6ce519533071c2448fe8adaa--breads-cat-cat.jpg","http://friskymongoose.com/wp-content/uploads/2013/02/Breadcat.jpg","https://media0.giphy.com/media/yAqdjThdDEMF2/200_s.gif"
,"https://i.ytimg.com/vi/MhjtimkRQts/maxresdefault.jpg","http://1.bp.blogspot.com/-KjKDXP9N8-w/T8phbk9KiKI/AAAAAAAAMok/V6cR_KHjcRQ/s640/funny-cats-wearing-fruit-helmets-005.jpg",
"https://i.ytimg.com/vi/ZH0s0Sl3QMw/hqdefault.jpg","https://www.youtube.com/watch?v=WP4Uh66FA3A","https://www.youtube.com/watch?v=cNycdfFEgBc","https://www.youtube.com/watch?v=1Wh8RzcQZr4","https://www.youtube.com/watch?v=O1KW3ZkLtuo",
"https://www.youtube.com/watch?v=79EvGkXHF9I","https://www.youtube.com/watch?v=hY7m5jjJ9mM","https://www.youtube.com/watch?v=jlNvOWDfMYo","https://www.youtube.com/watch?v=G4qVF1cTqdk","https://www.youtube.com/watch?v=XD_e7T5WCqw",
"https://www.youtube.com/watch?v=R81pgRSQ2XQ","https://www.youtube.com/watch?v=aGcsDJzcPos","https://www.youtube.com/watch?v=p5Vsg1CrhrI","http://www.petsworld.in/blog/wp-content/uploads/2014/09/adorable-cat.jpg","http://i.imgur.com/1AI2YTD.gifv","http://i.imgur.com/EB4DTRA.gifv",
"https://gfycat.com/PiercingHomelyArchaeocete","https://i.imgur.com/7iK6I28.gifv","https://gfycat.com/OffbeatRashItaliangreyhound","https://streamable.com/rq975","http://i.imgur.com/pAezVcf.gif","http://i.imgur.com/ID79oWu.gifv","https://www.youtube.com/watch?v=0DKQCZ9bg60","https://www.youtube.com/watch?v=5dsGWM5XGdg",
"https://www.youtube.com/watch?v=PMxggj3Cok0&feature=share","https://imgur.com/gallery/2RidL","https://www.youtube.com/watch?v=a4vJCc-qonM","https://www.youtube.com/watch?v=0jIwSmdwOLA","https://imgur.com/t/cat_gifs/krhP0m4",
"https://www.youtube.com/watch?v=MOvShrlzkiY&feature=share","https://www.youtube.com/watch?v=6vNg22CyjOk&feature=youtu.be","https://www.youtube.com/watch?v=Awf45u6zrP0","https://www.buzzfeed.com/copyranter/20-funny-cat-gifs?utm_term=.htKGYylXZ#.bvVw2869Q","https://giphy.com/gifs/funny-cat-SBIDrovnm0wOA","https://giphy.com/search/cute-kitten","http://www.cutecatgifs.com/"
,"http://themetapicture.com/media/picture.jpe","http://www.bandofcats.com/wp-content/uploads/2009/05/funny-cats_14.jpg","https://i.pinimg.com/736x/62/c0/84/62c0844b2efc19f68a4791ff64d33faa--new-music-gods-love.jpg"
,"https://s-media-cache-ak0.pinimg.com/originals/4d/e3/07/4de307d16a2e7b185339f492bcf95c2d.jpg","https://s-media-cache-ak0.pinimg.com/originals/d9/4f/7a/d94f7aaad784d9c7475e5d7f63363e40.jpg","https://www.askideas.com/media/15/Cat-Smiling-Funny-Cake.jpg"
,"https://i.ytimg.com/vi/EYd_6I9NI_s/hqdefault.jpg","http://starecat.com/content/wp-content/uploads/its-cool-man-shes-18-cats.jpg","https://i.ytimg.com/vi/lUaNo_L7AKU/hqdefault.jpg","https://i.ytimg.com/vi/PK2939Jji3M/hqdefault.jpg","https://s-media-cache-ak0.pinimg.com/originals/af/b4/3d/afb43d61fc41817143e58c597b2eea11.jpg"
,"https://i.ytimg.com/vi/IX7pdpm1gp8/hqdefault.jpg","https://i.ytimg.com/vi/hNY78GaJmGE/hqdefault.jpg","https://i.ytimg.com/vi/3bXgcX6dwTY/hqdefault.jpg","https://i.ytimg.com/vi/9e2QJ-VTeKY/hqdefault.jpg","https://www.youtube.com/watch?v=Xz6yBbBRr8Y","https://www.youtube.com/watch?v=OqQPv78AMw0","https://www.youtube.com/watch?v=QZjAuRdB5Qk","https://www.youtube.com/watch?v=zGcYabz3hYg","https://www.youtube.com/watch?v=L6EwZWWRA-U"
,"https://www.youtube.com/watch?v=9C1leq--_wM","https://www.youtube.com/watch?v=O5rD9Gma_Z8","https://www.youtube.com/watch?v=vP8RbfSgZtw","https://www.youtube.com/watch?v=5VBriRtl_aM","https://www.reddit.com/r/lolcats/comments/6scc31/yoga_cat/","http://i.imgur.com/9MxV5tu.gifv","http://i.imgur.com/WyCbgvQ.gifv","http://i.imgur.com/sMXbiwp.gif","http://i.imgur.com/sMXbiwp.gif","https://media.giphy.com/media/I1BkcMnMaMxna/giphy.gif","https://www.reddit.com/r/catreactiongifs/comments/6427yb/mrw_russia_tests_out_their_new_space_program/","https://i.imgur.com/TvaEN5q.gifv"
,"https://i.imgur.com/TvaEN5q.gifv","http://i.imgur.com/1MsVWCq.gifv","http://i.imgur.com/dkE18rf.gif","https://giphy.com/gifs/cat-kitten-Ha7WgQuQNHUTm","http://10pm.com/gifs/when-you-think-your-invincible/"
,"http://i.imgur.com/D6q3UMU.gifv","http://i.giphy.com/3o6ZtmIvJQTtYlpWuc.gif","http://i.imgur.com/efQk9L6.gif","http://imgur.com/a/bzNgL"
,"http://i.imgur.com/fe43I9j.gifv","http://i.imgur.com/ns5sOym.gifv","https://i.imgur.com/zoIyrRK.gifv","http://i.imgur.com/BYFWkm8.gifv","https://www.youtube.com/watch?v=-5Rka0TyrYw","https://www.youtube.com/watch?v=9sxMr4IdXaU","https://www.youtube.com/watch?v=rZBtOCIYiQE"
,"https://www.youtube.com/watch?v=-Wq35QXLiW8","http://www.huffingtonpost.com/entry/cat-brain-freeze_us_576ab611e4b0c0252e77edc8","http://i.imgur.com/pbNzRYR.gifv"
,"https://i.imgur.com/0ZtPEwl.gifv","http://i.imgur.com/1VVy6jA.gifv","http://i.imgur.com/273los4.gifv","http://i.imgur.com/uWv0rim.gifv","http://i.imgur.com/NG3Wm.gif","https://gfycat.com/MeagerEmbellishedJabiru",
"http://i.imgur.com/WrX2XBC.gifv","http://i.imgur.com/JfdDKAQ.gifv","https://gfycat.com/carelessripebarbet","http://i.imgur.com/S4H1j4b.gifv","https://gfycat.com/silentreliablegrouper","https://i.imgur.com/mQN25Ha.gifv","http://i.imgur.com/x1pI1Tz.gifv"
,"http://i.imgur.com/1Mh8yhv.gifv","https://gfycat.com/dependentreliablehyracotherium","http://i.imgur.com/WpPtWdc.gifv","http://i.imgur.com/JUoTWhO.jpg","http://i.imgur.com/UBof6EJ.gifv","http://i.imgur.com/hR0GAoR.gifv"
,"https://giphy.com/gifs/cat-funny-cats-l3q2D1oOzNlZ93ixy","http://i.imgur.com/9XMuIQG.gifv","http://i.imgur.com/xg6iVvx.gifv","http://i.imgur.com/NUyttbn.gifv"
,"http://i.imgur.com/v0lBzIa.gif","https://gfycat.com/jauntyshadygoose","http://i.imgur.com/R2fAdiy.gifv","http://i.imgur.com/tRwUb4B.gifv","https://i.imgur.com/eVBsAdA.gifv"
,"http://i.imgur.com/gS9acdD.gif","https://imgur.com/P71TpKJ","http://i.imgur.com/zaJQLB7.gifv","https://www.reddit.com/r/kittengifs/comments/6wbtzr/let_me_go/","https://i.imgur.com/uSBehS3.gifv","http://i.imgur.com/WAL4gJL.gifv"
,"https://www.reddit.com/r/kittengifs/comments/6wsbgc/please_dont_take_my_girlfriends_picture/","http://i.imgur.com/S7dxHL5.gifv","https://gfycat.com/definiteplayfulguineapig"
,"http://i.imgur.com/y6xJEsS.gifv","http://i.imgur.com/9z40Fab.gifv"]
console.log("cat array number",catArray.length);



  catArray[Math.floor(Math.random()*426)];



import React from 'react';
import { 
StyleSheet,
Text,
View,
Button,
Image,
TextInput,
TouchableOpacity,
AsyncStorage
 } from 'react-native';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      phone: '',
      name: '',
      region: ''

    };
  }
  someFunction() {
 
    SendSMS.send({
        body: 'The default body of the SMS!',
        recipients: ['0123456789', '9876543210'],
        successTypes: ['sent', 'queued']
    }, (completed, cancelled, error) => {
 
        console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
 
    });
}

  dbfind(){
    db.find({}, function (err, docs) {
      if(err){
        console.log(err);
      }
      else{
        console.log(docs);
        for(let i=0;i<docs.length;i++){
          var names = docs[i].name;
          var numbers = docs[i].phone;
          var region = docs[i].region;
          console.log(numbers + " " + names);
          var catMessage = "Hello " + names + " Click the link right Meow and enjoy your cat content for today! " +   catArray[Math.floor(Math.random()*426)];
          console.log(catMessage);
          SendSMS.send(myOptionsObject, callback);
	        }
        




        // text.sendText(numbers, catMessage, opts, cb)

      }
 
    });

  }

   setMessage() {
    this.setState({
      name: this.state.name,
      phone: this.state.phone,
      region: this.state.region,



    });
    
    console.log(this.state.phone);
    console.log(this.state.name);
    console.log(this.state.region);
    var doc = {
      name: this.state.name,
      phone: this.state.phone,
      region: this.state.region
    }
    // console.log(doc);
    db.insert(doc, function (err, newDoc) { 
      if(err){
        console.log(err);
      }
      else{
        console.log(newDoc);
      }
  });
  }



  render() {
   let pic = {
    uri:"http://s1.dmcdn.net/Jyj5s.jpg"
   }
    return (
         <Image source={pic} style={styles.background}>
      <View style={styles.container}>
      <View style={styles.textcontainer}>
      <Text style={styles.title}>Cat-Dicted</Text>
      <TextInput style={styles.header} placeholder="Please Enter Your Name" onChangeText={(name) => this.setState({ name: name })}
            value={this.state.inputText}  ></TextInput>
        <TextInput style={styles.header} placeholder="Please Enter Phone Number" onChangeText={(number) => this.setState({ phone: number })}
            value={this.state.inputText}  ></TextInput>
            <TextInput style={styles.header} placeholder="Type Region: us, canada, or intl" onChangeText={(region) => this.setState({ region: region })}
            value={this.state.inputText}  ></TextInput>
        <TouchableOpacity style={styles.button} onPress={this.setMessage.bind(this)}>
        <Text style={styles.revealerText}>GIMME CAT CONTENT!</Text>
     </TouchableOpacity>
      </View>
        <Text>Cat-Dicted will send you a daily </Text>
        <Text>text containing cat content</Text>
        <TouchableOpacity style={styles.button2} onPress={this.dbfind}>
        <Text style={styles.revealerText}>DB</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button3} onPress={this.setMessage.bind(this)}>
        <Text style={styles.revealerText2}>Unsubscribe</Text>
     </TouchableOpacity>

      </View>
            </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
flex: 1,
width: undefined,
height: undefined,
backgroundColor:'transparent',
justifyContent: 'flex-start',
alignItems: 'center',
  },
  holder: {
    flex: 0.25,
    justifyContent: 'center',
  },
title:{
  fontSize:60,
  alignItems:'center',
  justifyContent:'center',
  letterSpacing: 2,
  fontFamily: 'Chalkduster',
  marginBottom: 30
},
 text: {
    fontSize: 32,
  },
  header: {
    fontSize:20,
    borderColor: 'black',
    borderStyle: 'solid',
    marginBottom:10
  },
  button:{
    marginTop:10,
    marginLeft:100,
    width:160,
    height:35,
    backgroundColor:'black',
    borderRadius:40

  },
    button2:{
    marginTop:10,
    marginLeft:0,
    width:60,
    height:35,
    backgroundColor:'black',
    borderRadius:40

  },
  button3:{
    marginLeft:0,
    width:100,
    height:30,
    backgroundColor:'black',
    borderRadius:40,
    justifyContent:'flex-end',
    marginTop:200

  },
   revealerText: {
    marginTop:10,
    marginLeft:6,
    color:'white',
    fontSize:15
  },
  revealerText2: {
    marginBottom:5,
    marginLeft:8,
    color:'white',
    fontSize:15
  },
  background:{
     flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'

  },
  textcontainer:{
    marginTop:50
  }
});
