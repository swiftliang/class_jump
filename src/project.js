__require=function e(t,n,o){function i(r,a){if(!n[r]){if(!t[r]){var s=r.split("/");if(s=s[s.length-1],!t[s]){var l="function"==typeof __require&&__require;if(!a&&l)return l(s,!0);if(c)return c(s,!0);throw new Error("Cannot find module '"+r+"'")}}var d=n[r]={exports:{}};t[r][0].call(d.exports,function(e){return i(t[r][1][e]||e)},d,d.exports,e,t,n,o)}return n[r].exports}for(var c="function"==typeof __require&&__require,r=0;r<o.length;r++)i(o[r]);return i}({ConstValue:[function(e,t,n){"use strict";cc._RF.push(t,"4f578AePkZFkpfO+uSSmwuu","ConstValue"),Object.defineProperty(n,"__esModule",{value:!0});n.LEADERBOARD_SOCRE_WORLD="score_world";cc._RF.pop()},{}],PlayerItem:[function(e,t,n){"use strict";cc._RF.push(t,"d4a40H7rANEeLrdimsBVgJX","PlayerItem");var o=e("UtilsFB"),i=e("UtilsCommon"),c=e("game_scene"),r=e("ScreenMgr");cc.Class({extends:cc.Component,properties:{rank:{default:null,type:cc.Label},portrait:{default:null,type:cc.Sprite},playerName:{default:null,type:cc.Label},score:{default:null,type:cc.Label},btnPlay:{default:null,type:cc.Node},btnPlayLabel:{default:null,type:cc.Label}},onLoad:function(){this.node.on("click",this.onBtnClick,this),this.defaultPortraitSprite=this.portrait.spriteFrame},onBtnClick:function(){var e=i.getScreenshotBase64(i.getCameraMain());this.playerData.isSelf?o.chooseAsync(e).catch(function(e){}):o.invitePlayerAsync(this.playerData.id,e).then(function(){this.playGame()}.bind(this)).catch(function(e){this.playGame()}.bind(this))},playGame:function(){r.instance.closeScreen("ScreenHomeLeaderboard"),r.instance.closeScreen("ScreenGameOver"),c.instance.onGameStart(!0,!1)},updatePlayerInfo:function(e){this.playerData=e,this.rank.string=e.rank,this.playerName.string=e.playerName,this.score.string=e.score,o.getPlayerPhotoAsync(e).then(function(){null!=e.photoTexture&&(this.portrait.spriteFrame=new cc.SpriteFrame,this.portrait.spriteFrame.setTexture(e.photoTexture))}.bind(this)).catch(function(e){}),this.btnPlayLabel.string=this.playerData.isSelf?"Share":"Play"}}),cc._RF.pop()},{ScreenMgr:"ScreenMgr",UtilsCommon:"UtilsCommon",UtilsFB:"UtilsFB",game_scene:"game_scene"}],ScoreFXMgr:[function(e,t,n){"use strict";cc._RF.push(t,"abfceRHxotDsqiepyn4350M","ScoreFXMgr"),cc.Class({extends:cc.Component,properties:{scoreFXPrefab:{default:null,type:cc.Prefab}},onLoad:function(){this.scoreFXPool=new cc.NodePool("scoreFX")},playScoreFX:function(e,t){var n=this.spawnScoreFX(),o=this.node.convertToNodeSpaceAR(e);n.node.position=o,n.setScore(t),n.play()},spawnScoreFX:function(){var e=null;e=this.scoreFXPool.size()>0?this.scoreFXPool.get():cc.instantiate(this.scoreFXPrefab),this.node.addChild(e);var t=e.getComponent("ScoreFX");return t.init(this),t},despawnScoreFX:function(e){this.scoreFXPool.put(e.node)}}),cc._RF.pop()},{}],ScoreFX:[function(e,t,n){"use strict";cc._RF.push(t,"951b4qYbopG47UgLcRT9b/Y","ScoreFX"),cc.Class({extends:cc.Component,properties:{animation:{default:null,type:cc.Animation},scoreLabel:{default:null,type:cc.Label}},onLoad:function(){this.animation.on("finished",this.onPlayFinished,this)},init:function(e){this.mgr=e},play:function(){this.animation.play("score_pop")},setScore:function(e){this.scoreLabel.string="+"+e},onPlayFinished:function(e,t){this.mgr.despawnScoreFX(this)}}),cc._RF.pop()},{}],ScoreOvertakeMgr:[function(e,t,n){"use strict";cc._RF.push(t,"4b3baEshgdFrptv+x52jE9P","ScoreOvertakeMgr"),cc.Class({extends:cc.Component,properties:{scoreOvertakePrefab:{default:null,type:cc.Prefab}},onLoad:function(){this.scoreOvertakePool=new cc.NodePool("scoreOvertake")},play:function(e,t){if(t.length>0){var n=this.spawn(),o=this.node.convertToNodeSpaceAR(e);n.node.position=o,n.setPlayerInfo(t[0]),n.play()}},spawn:function(){var e=null;e=this.scoreOvertakePool.size()>0?this.scoreOvertakePool.get():cc.instantiate(this.scoreOvertakePrefab),this.node.addChild(e);var t=e.getComponent("ScoreOvertake");return t.init(this),t},despawn:function(e){this.scoreOvertakePool.put(e.node)}}),cc._RF.pop()},{}],ScoreOvertake:[function(e,t,n){"use strict";cc._RF.push(t,"61c1cZEtg9JWr4aXhhEoB4+","ScoreOvertake");var o=e("UtilsFB");cc.Class({extends:cc.Component,properties:{overtakeLabel:{default:null,type:cc.Label},photo:{default:null,type:cc.Sprite},animation:{default:null,type:cc.Animation}},onLoad:function(){this.animation.on("finished",this.onPlayFinished,this)},init:function(e){this.mgr=e},play:function(){this.animation.play("overtake_fade")},setPlayerInfo:function(e){e.isSelf?this.overtakeLabel.string="New revord!":this.overtakeLabel.string="Overtake "+e.playerName,o.getPlayerPhotoAsync(e).then(function(){null!=e.photoTexture&&(this.photo.spriteFrame=new cc.SpriteFrame,this.photo.spriteFrame.setTexture(e.photoTexture))}.bind(this)).catch(function(e){})},onPlayFinished:function(e,t){this.mgr.despawn(this)}}),cc._RF.pop()},{UtilsFB:"UtilsFB"}],ScreenGameOver:[function(e,t,n){"use strict";cc._RF.push(t,"57f64yVe21GxKROflaTRrT6","ScreenGameOver");var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(e("./ConstValue"));var i=e("ScreenMgr"),c=e("UtilsCommon"),r=e("UtilsFB"),a=e("game_scene");cc.Class({extends:cc.Component,properties:{titleNewScore:{default:null,type:cc.Node},labelScore:{default:null,type:cc.Label},labelScoreMax:{default:null,type:cc.Label},screenLeaderboard:{default:null,type:e("ScreenLeaderboard")}},start:function(){},onEnable:function(){var e=a.instance.score,t=r.getSelfLeaderboardScore(o.LEADERBOARD_SOCRE_WORLD);this.titleNewScore.active=e>0&&e>t,t=Math.max(t,e),this.labelScore.string=""+e,this.labelScoreMax.string="Max Score: "+t,this.screenLeaderboard.clearLeaderboard(),r.setLeaderboardAsync(o.LEADERBOARD_SOCRE_WORLD,this.score).then(function(){this.screenLeaderboard.showLeaderboard(o.LEADERBOARD_SOCRE_WORLD)}.bind(this)).catch(function(e){console.log("setleaderboardasync error: "+JSON.stringify(e))})},onBtnClickHome:function(){i.instance.showScreen("ScreenHome"),this.node.active=!1},onBtnClickShare:function(){var e=c.getScreenshotBase64(c.getCameraMain());r.chooseAsync(e).catch(function(e){})},onBtnClickPlayAgain:function(){a.instance.onGameStart(!0,!1)},onBtnClickContinue:function(){var e=c.getScreenshotBase64(c.getCameraMain());r.chooseAsync(e).then(function(){a.instance.onGameStart(!0,!0)}).catch(function(e){})}}),cc._RF.pop()},{"./ConstValue":"ConstValue",ScreenLeaderboard:"ScreenLeaderboard",ScreenMgr:"ScreenMgr",UtilsCommon:"UtilsCommon",UtilsFB:"UtilsFB",game_scene:"game_scene"}],ScreenHomeLeaderboard:[function(e,t,n){"use strict";cc._RF.push(t,"29fbcOLfZdOHL4ZXxPShgwg","ScreenHomeLeaderboard");var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(e("./ConstValue"));var i=e("UtilsFB"),c=e("UtilsCommon");cc.Class({extends:cc.Component,properties:{screenLeaderboard:{default:null,type:e("ScreenLeaderboard")}},start:function(){},onEnable:function(){this.screenLeaderboard.clearLeaderboard(),i.setLeaderboardAsync(o.LEADERBOARD_SOCRE_WORLD,this.score).then(function(){this.screenLeaderboard.showLeaderboard(o.LEADERBOARD_SOCRE_WORLD)}.bind(this)).catch(function(e){console.log("setleaderboardasync error: "+JSON.stringify(e))})},onBtnClickInvite:function(){var e=c.getScreenshotBase64(c.getCameraMain());i.chooseAsync2(e).catch(function(e){})}}),cc._RF.pop()},{"./ConstValue":"ConstValue",ScreenLeaderboard:"ScreenLeaderboard",UtilsCommon:"UtilsCommon",UtilsFB:"UtilsFB"}],ScreenHome:[function(e,t,n){"use strict";cc._RF.push(t,"009ddJbVedO7YsbYf5Tsthb","ScreenHome");var o=e("ScreenMgr"),i=e("game_scene");cc.Class({extends:cc.Component,properties:{screenHomeLeaderboard:{default:null,type:cc.Node},screenLeaderboard:{default:null,type:e("ScreenLeaderboard")}},start:function(){},onEnable:function(){i.instance.onGameStart(!1,!1)},onBtnClickPlay:function(){this.node.active=!1,i.instance.showLabelScore(!0)},onBtnClickLeaderboard:function(){this.node.active=!1,this.screenHomeLeaderboard.active=!0},onBtnClickLeaderboardClose:function(){this.screenHomeLeaderboard.active=!1,this.node.active=!0},onBtnClickSkinShop:function(){o.instance.showScreen("ScreenSkinShop"),o.instance.closeScreen("ScreenHome")}}),cc._RF.pop()},{ScreenLeaderboard:"ScreenLeaderboard",ScreenMgr:"ScreenMgr",game_scene:"game_scene"}],ScreenLeaderboard:[function(e,t,n){"use strict";cc._RF.push(t,"8081bzy7CJEPYJsaU/vIwa4","ScreenLeaderboard");var o=e("UtilsFB");e("UtilsCommon");cc.Class({extends:cc.Component,properties:{playerItemPrefab:{default:null,type:cc.Prefab},content:{default:null,type:cc.Node}},onLoad:function(){this.playerItemPool=new cc.NodePool("playerItem"),this.canvasNode=cc.find("Canvas")},showLeaderboard:function(e){"undefined"==typeof FBInstant&&this.showLeaderboardDebug(),o.getLeaderboardAsync(e).then(function(e){this.showLeaderboardInternal(e)}.bind(this)).catch(function(e){})},showLeaderboardInternal:function(e){this.node.active=!0,this.updateLeaderboard(e)},showLeaderboardDebug:function(){for(var e=new Array,t=0;t<15;t++){var n={id:"2127737910604444"};n.playerName="player "+t,n.score=10+2*t,n.rank=t+1,n.portraitUrl=t%2==0?"https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=2127737910604444&height=256&width=256&ext=1542184412&hash=AeRpQBaamgXpc3fM":"https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=2445785048770311&height=256&width=256&ext=1542255362&hash=AeQ_-nxXrs2f6OE4",e.push(n)}this.showLeaderboardInternal(e)},show:function(){var e=cc.v2(0,-(this.canvasNode.height+this.node.height)/2),t=cc.v2(0,0),n=cc.moveTo(.5,t).easing(cc.easeCubicActionOut());this.node.position=e,this.node.runAction(n)},hide:function(){var e=cc.v2(0,-(this.canvasNode.height+this.node.height)/2),t=cc.moveTo(.5,e).easing(cc.easeCubicActionIn());this.node.runAction(t)},updateLeaderboard:function(e){this.clearLeaderboard();for(var t=0;t<e.length;t++){var n=this.spawnPlayerItem();n.getComponent("PlayerItem").updatePlayerInfo(e[t]),n.setParent(this.content)}},clearLeaderboard:function(){for(var e=this.content.childrenCount-1;e>=0;e--)this.despawnPlayerItem(this.content.children[e])},spawnPlayerItem:function(){return this.playerItemPool.size()>0?this.playerItemPool.get(this):cc.instantiate(this.playerItemPrefab)},despawnPlayerItem:function(e){this.playerItemPool.put(e)}}),cc._RF.pop()},{UtilsCommon:"UtilsCommon",UtilsFB:"UtilsFB"}],ScreenMgr:[function(e,t,n){"use strict";cc._RF.push(t,"3e3d3uk/+xJdZgDNuHQMr34","ScreenMgr");var o=cc.Class({extends:cc.Component,properties:{screens:{default:[],type:[cc.Node]}},statics:{instance:null},onLoad:function(){o.instance=this,this.screensMap=new Map;for(var e=0;e<this.screens.length;e++)this.screensMap.set(this.screens[e].name,this.screens[e])},closeScreen:function(e){this.screensMap.has(e)&&(this.screensMap.get(e).active=!1)},showScreen:function(e){this.screensMap.has(e)&&(this.screensMap.get(e).active=!0)}});cc._RF.pop()},{}],ScreenSkinShop:[function(e,t,n){"use strict";cc._RF.push(t,"57bffBFUrhN1raxXs38dm03","ScreenSkinShop");var o=e("SkinMgr"),i=e("game_scene"),c=e("ScreenMgr"),r=e("UtilsFB"),a=e("UtilsCommon"),s=cc.Class({extends:cc.Component,properties:{skinItemPrefab:{default:null,type:cc.Prefab},content:{default:null,type:cc.Node},processBar:{default:null,type:cc.Node},processTitle:{default:null,type:cc.Label}},statics:{instance:null},onLoad:function(){s.instance=this,this.skinItemPool=new cc.NodePool("SkinItem")},start:function(){for(var e=[0,1,2,5],t=0;t<o.instance.getSkinSpriteFrameCount();t++){var n=o.instance.getSkinSpriteFrame(t),c=this.spawnSkinItem();c.node.setParent(this.content);var r=t==i.instance.currentSkinIndex,a=0;a=t<e.length?e[t]:e[e.length-1]+5*(t-e.length+1),c.init(n,r,a)}this.updateLockState()},onEnable:function(){this.updateLockState()},onChoose:function(e){i.instance.onSkinChange(e);for(var t=0;t<this.content.childrenCount;t++){var n=this.content.children[t].getComponent("SkinItem");t!=e&&n.onUnchoose()}},spawnSkinItem:function(){return(this.skinItemPool.size()>0?this.skinItemPool.get():cc.instantiate(this.skinItemPrefab)).getComponent("SkinItem")},despawnSkinItem:function(e){this.skinItemPool.put(e.node)},onBtnClickHome:function(){c.instance.showScreen("ScreenHome"),c.instance.closeScreen("ScreenSkinShop")},onBtnClickInvite:function(){var e=a.getScreenshotBase64(a.getCameraMain());r.chooseAsync(e,["NEW_CONTEXT_ONLY"]).then(function(){o.instance.incrementInvitedCount(),this.updateLockState()}.bind(this)).catch(function(e){})},updateLockState:function(){for(var e=0,t=this.content.childrenCount,n=0;n<this.content.childrenCount;n++){this.content.children[n].getComponent("SkinItem").updateLockState()&&(e+=1)}var o=this.processBar.width;this.processBar.position=cc.v2(o*e/t-o,0),this.processTitle.string=e+"/"+t}});cc._RF.pop()},{ScreenMgr:"ScreenMgr",SkinMgr:"SkinMgr",UtilsCommon:"UtilsCommon",UtilsFB:"UtilsFB",game_scene:"game_scene"}],SkinItem:[function(e,t,n){"use strict";cc._RF.push(t,"c8148FzawZJg58tXk0uob66","SkinItem");var o=e("ScreenSkinShop"),i=e("SkinMgr");cc.Class({extends:cc.Component,properties:{skin:{default:null,type:cc.Sprite},spriteChoose:{default:null,type:cc.Sprite},spriteFrameChoose:{default:null,type:cc.SpriteFrame},spriteFrameUnchoose:{default:null,type:cc.SpriteFrame},labelInviteCount:{default:null,type:cc.Label}},onLoad:function(){this.node.on("click",this.onBtnClick,this),this.unlockCount=0,this.unlocked=!0},start:function(){},init:function(e,t,n){this.skin.spriteFrame=e,this.spriteChoose.spriteFrame=t?this.spriteFrameChoose:this.spriteFrameUnchoose,this.unlockCount=n},onBtnClick:function(){this.unlocked?this.onChoose():o.instance.onBtnClickInvite()},onChoose:function(){this.spriteChoose.spriteFrame=this.spriteFrameChoose,o.instance.onChoose(this.node.getSiblingIndex())},onUnchoose:function(){this.spriteChoose.spriteFrame=this.spriteFrameUnchoose},updateLockState:function(){var e=i.instance.getInvitedCount();return e>=this.unlockCount?(this.unlocked=!0,this.labelInviteCount.node.active=!1):(this.unlocked=!1,this.labelInviteCount.node.active=!0,this.labelInviteCount.string=e+"/"+this.unlockCount),this.unlocked}}),cc._RF.pop()},{ScreenSkinShop:"ScreenSkinShop",SkinMgr:"SkinMgr"}],SkinMgr:[function(e,t,n){"use strict";cc._RF.push(t,"8fee9JgiFJD/LE6AoB4KkCA","SkinMgr");var o=cc.Class({extends:cc.Component,properties:{skinSpriteFrames:{default:[],type:[cc.SpriteFrame]}},statics:{instance:null},onLoad:function(){o.instance=this,this.invitedCount=0},start:function(){"undefined"!=typeof FBInstant&&FBInstant.player.getStatsAsync(["invitedCount"]).then(function(e){this.invitedCount=e.invitedCount,console.log("getStatsAsync success: "+JSON.stringify(e)+" invitedCount: "+this.invitedCount)}.bind(this)).catch(function(e){console.log("getStatsAsync error: "+JSON.stringify(e))})},getSkinSpriteFrame:function(e){return this.skinSpriteFrames[e]},getSkinSpriteFrameCount:function(){return this.skinSpriteFrames.length},getInvitedCount:function(){return this.invitedCount},incrementInvitedCount:function(){this.invitedCount+=1,"undefined"!=typeof FBInstant&&FBInstant.player.incrementStatsAsync({invitedCount:1}).then(function(e){console.log("incrementStatsAsync success: "+JSON.stringify(e)),this.invitedCount=e.invitedCount}.bind(this)).catch(function(e){console.log("incrementStatsAsync error: "+JSON.stringify(e))})}});cc._RF.pop()},{}],UtilsCommon:[function(e,t,n){"use strict";cc._RF.push(t,"9d958AFPlJCn6gdYfD/DmfP","UtilsCommon");var o=cc.Class({extends:cc.Component,statics:{_cameraMain:null,getCameraMain:function(){return null==o._cameraMain&&(o._cameraMain=cc.find("Canvas/Main Camera").getComponent(cc.Camera)),o._cameraMain},getScreenshotBase64:function(e){var t=new cc.RenderTexture,n=cc.game._renderContext;t.initWithSize(cc.visibleRect.width,cc.visibleRect.height,n.STENCIL_INDEX8),e.targetTexture=t,e.render(),e.targetTexture=null;var o=t.readPixels(),i=document.createElement("canvas"),c=i.getContext("2d");i.width=t.width,i.height=t.height;for(var r=t.width,a=t.height,s=4*r,l=0;l<a;l++){for(var d=a-1-l,u=c.createImageData(r,1),h=d*r*4,p=0;p<s;p++)u.data[p]=o[h+p];c.putImageData(u,0,l)}return i.toDataURL("image/jpeg")}}});cc._RF.pop()},{}],UtilsFB:[function(e,t,n){"use strict";cc._RF.push(t,"4c07a2iBFhL0rdTlIXKUvUn","UtilsFB");var o=cc.Class({extends:cc.Component,statics:{leaderboardMapLocal:{},init:function(e){o.getLeaderboardAsync(e).catch(function(e){})},invitePlayerRandomAsync:function(e){return new Promise(function(t,n){"undefined"!=typeof FBInstant?FBInstant.player.getConnectedPlayersAsync().then(function(i){if(i.length){var c=i[Math.floor(Math.random()*i.length)].getID();o.invitePlayerAsync(c,e).then(function(){t()}).catch(function(e){n(e)})}else o.debugLog("getConnectedPlayersAsync error: player count 0."),n("Player count is 0.")}).catch(function(e){o.debugLog("getConnectedPlayersAsync error: "+JSON.stringify(e)),n(e)}):n("FBInstant undefined")})},invitePlayerAsync:function(e,t){return new Promise(function(n,i){"undefined"!=typeof FBInstant?FBInstant.context.createAsync(e).then(function(){FBInstant.updateAsync({action:"CUSTOM",cta:"Join the Game",image:t,text:{default:"Play with me",localizations:{}},template:"VILLAGE_INVASION",strategy:"IMMEDIATE",notification:"NO_PUSH",data:{createId:e}}).then(function(){n()}).catch(function(e){o.debugLog("updateAsync error: "+JSON.stringify(e)),i(e)})}).catch(function(e){o.debugLog("createAsync error: "+JSON.stringify(e)),i(e)}):i("FBInstant undefined")})},getLeaderboardAsync:function(e){return o.debugLog("getLeaderboardAsync"),new Promise(function(t,n){if("undefined"!=typeof FBInstant){var i=o.getLeaderboardLocal(e);null!=i&&(o.debugLog("getLeaderboardAsync local"),t(i)),FBInstant.getLeaderboardAsync(e).then(function(e){return o.debugLog("getLeaderboardAsync leaderboard: "+JSON.stringify(e)),e.getConnectedPlayerEntriesAsync(10,0)}).then(function(n){o.debugLog("getConnectedPlayerEntriesAsync entries: "+JSON.stringify(n));for(var i=new Array,c=o.getSelfLeaderboardScore(),r=0;r<n.length;r++){var a={},s=n[r].getPlayer();a.isSelf=s.getID()==FBInstant.player.getID(),a.id=s.getID(),a.playerName=s.getName(),a.photoUrl=s.getPhoto(),a.isSelf?a.score=Math.max(c,n[r].getScore()):a.score=n[r].getScore(),a.rank=n[r].getRank(),a.photoTexture=null,i.push(a)}o.updateLeaderboardLocal(e,i),t(i)}).catch(function(e){o.debugLog("getLeaderboardAsync error: "+JSON.stringify(e)),n(e)})}else n("FBInstant undefined")})},loadPlayerArrayPhoto:function(e){if(o.debugLog("loadPlayerArrayPhoto"),null!=e)for(var t=0;t<e.length;t++)o.loadPlayerPhotoAsync(e[t]).catch(function(e){})},loadPlayerPhotoAsync:function(e){return new Promise(function(t,n){cc.loader.load({url:e.photoUrl,type:"jpg"},function(i,c){null!=c?(e.photoTexture=c,t()):(o.debugLog("loadPlayerPhotoAsync error: "+JSON.stringify(i)),n(i))})})},setLeaderboardAsync:function(e,t){return o.debugLog("setLeaderboardAsync"),new Promise(function(n,i){"undefined"!=typeof FBInstant?(o.setLeaderboardLocal(e,t)&&n(),FBInstant.getLeaderboardAsync(e).then(function(e){return e.setScoreAsync(t)}).then(function(){n()}).catch(function(e){o.debugLog("setLeaderboardAsync error: "+JSON.stringify(e)),i(e)})):i("FBInstant undefined")})},getPlayerPhotoAsync:function(e){return new Promise(function(t,n){null!=e.photoTexture?t():o.loadPlayerPhotoAsync(e).then(function(){t()}).catch(function(e){o.debugLog("getPlayerPhotoAsync error: "+JSON.stringify(e)),n(e)})})},getLeaderboardLocal:function(e){return e in o.leaderboardMapLocal?o.leaderboardMapLocal[e].playerArray:null},updateLeaderboardLocal:function(e,t){o.debugLog("updateLeaderboardLocal: "+e),e in o.leaderboardMapLocal||(o.leaderboardMapLocal[e]={}),o.leaderboardMapLocal[e].playerArray=t,o.loadPlayerArrayPhoto(o.leaderboardMapLocal[e].playerArray)},setLeaderboardLocal:function(e,t){var n=!1;if(e in o.leaderboardMapLocal){var i=o.leaderboardMapLocal[e].playerArray,c=!1;if(null!=i)for(var r=0;r<i.length;r++){var a=i[r];a.isSelf&&(t>a.score&&(a.score=t,c=!0),n=!0)}if(c){i.sort(function(e,t){var n=e.score,o=t.score;return n<o?1:n>o?-1:0});for(var s=0;s<i.length;s++)i[s].rank=s+1}}return n},getPlayerInfoScoreOvertake:function(e,t,n){var i=[],c=o.getLeaderboardLocal(e);if(null!=c)for(var r=0;r<c.length;r++){var a=c[r],s=a.score;t<=s&&s<n&&i.push(a)}return i},getSelfLeaderboardScore:function(e){var t=o.getLeaderboardLocal(e);if(null!=t)for(var n=0;n<t.length;n++){var i=t[n];if(i.isSelf)return i.score}return-1},shareAsync:function(e,t){return new Promise(function(n,i){"undefined"!=typeof FBInstant?FBInstant.shareAsync({intent:"SHARE",image:t,text:e,data:{myReplayData:"..."}}).then(function(){n()}).catch(function(e){o.debugLog("shareAsync error: "+JSON.stringify(e)),i(e)}):i("FBInstant undefined")})},chooseAsync:function(e,t){return new Promise(function(n,i){"undefined"!=typeof FBInstant?(t=t||[],FBInstant.context.chooseAsync({filters:t}).then(function(){FBInstant.updateAsync({action:"CUSTOM",cta:"Join the Game",image:e,text:{default:"Play with me",localizations:{}},template:"VILLAGE_INVASION",strategy:"IMMEDIATE",notification:"NO_PUSH",data:{}}).then(function(){o.debugLog("chooseAsync success."),n()}).catch(function(e){o.debugLog("chooseAsync updateAsync error: "+JSON.stringify(e)),i(e)})}).catch(function(e){o.debugLog("chooseAsync error: "+JSON.stringify(e)),i(e)})):i("FBInstant undefined")})},debugLog:function(e){}}});cc._RF.pop()},{}],block:[function(e,t,n){"use strict";cc._RF.push(t,"98313d7bZFJqKdxyYnvxjBm","block"),cc.Class({extends:cc.Component,properties:{},start:function(){this.icon=this.node.getChildByName("icon"),this.mid=this.node.getChildByName("mid"),this.up=this.node.getChildByName("up"),this.down=this.node.getChildByName("down"),this.left=this.node.getChildByName("left"),this.right=this.node.getChildByName("right")},is_jump_on_block:function(e,t){var n=this.mid.convertToWorldSpaceAR(cc.v2(0,0)),o=e.sub(n),i=o.mag(),c=n,r=2;if(1===t){var a=this.up.convertToWorldSpaceAR(cc.v2(0,0));i>(d=(o=e.sub(a)).mag())&&(i=d,c=a,r=1);var s=this.down.convertToWorldSpaceAR(cc.v2(0,0));i>(d=(o=e.sub(s)).mag())&&(i=d,c=s,r=1)}else{var l=this.left.convertToWorldSpaceAR(cc.v2(0,0));i>(d=(o=e.sub(l)).mag())&&(i=d,c=l,r=1);var d,u=this.right.convertToWorldSpaceAR(cc.v2(0,0));i>(d=(o=e.sub(u)).mag())&&(i=d,c=u,r=1)}return(o=e.sub(c)).mag()<100?(e.x=c.x,e.y=c.y,r):0}}),cc._RF.pop()},{}],game_scene:[function(e,t,n){"use strict";cc._RF.push(t,"0fd31d27O1JdLPDqO4p8XV+","game_scene");var o=e("UtilsFB"),i=e("UtilsCommon"),c=e("SkinMgr"),r=e("ScreenMgr"),a=cc.Class({extends:cc.Component,properties:{player:{type:cc.Node,default:null},block_prefab:{default:[],type:cc.Prefab},block_root:{type:cc.Node,default:null},left_org:cc.v2(0,0),map_root:{type:cc.Node,default:null},y_radio:.5560472,checkout:{type:cc.Node,default:null},scoreFXMgr:{default:null,type:e("ScoreFXMgr")},scoreOvertakeMgr:{default:null,type:e("ScoreOvertakeMgr")},scoreLabel:{default:null,type:cc.Label},hintControlLabel:{default:null,type:cc.Label},btnShare:{default:null,type:cc.Node},screenLeaderboard:{default:null,type:e("ScreenLeaderboard")},playerSkinSprite:{default:null,type:cc.Sprite}},statics:{instance:null},onLoad:function(){a.instance=this,this.mapMoving=!1,this.isGameOver=!0,this.gaming=!1,this.mapRootInitPos=this.map_root.getPosition(),this.score=0,this.player_com=this.player.getComponent("player"),this.playerArray=null,this.currentSkinIndex=0},start:function(){o.init("score_world")},onGameStart:function(e,t){this.map_root.setPosition(this.mapRootInitPos),this.block_root.removeAllChildren(!0),t||(this.score=0),this.updateScoreDisplay(),this.checkout.active=!1,this.player_com.direction=1,this.cur_block=cc.instantiate(this.block_prefab[Math.floor(3*Math.random())]),this.block_root.addChild(this.cur_block),this.cur_block.setPosition(this.block_root.convertToNodeSpaceAR(this.left_org));var n=this.cur_block.getChildByName("mid").convertToWorldSpaceAR(cc.v2(0,0));this.player.setPosition(this.map_root.convertToNodeSpaceAR(n)),this.next_block=this.cur_block,this.block_zorder=-1,this.add_block(),this.showLabelScore(e),this.isGameOver=!1},showLabelScore:function(e){this.scoreLabel.node.active=e,this.hintControlLabel.node.active=e,this.btnShare.active=e},add_block:function(){this.cur_block=this.next_block,this.next_block=cc.instantiate(this.block_prefab[Math.floor(3*Math.random())]),this.block_root.addChild(this.next_block),this.next_block.zIndex=this.block_zorder,this.block_zorder--;var e=200+200*Math.random(),t=e*this.y_radio,n=this.cur_block.getPosition();n.x+=e*this.player_com.direction,n.y+=t,this.next_block.setPosition(n),this.player_com.set_next_block(this.next_block.getComponent("block"));for(var o=this.block_root.childrenCount-1;o>=0;o--)this.destroyOutBlock(this.block_root.children[o])},destroyOutBlock:function(e){e.getComponent("block");var t=e.parent.convertToWorldSpaceAR(e.getPosition()),n=this.node.getPosition(),o=t.sub(n),i=this.node.width/2+e.width/2,c=this.node.height/2+e.height/2;Math.abs(o.x)>i&&Math.abs(o.y)>c&&e.destroy()},move_map:function(e,t){this.mapMoving=!0;var n=cc.moveBy(.5,e,t),o=cc.callFunc(function(){this.mapMoving=!1,this.add_block()}.bind(this)),i=cc.sequence([n,o]);this.map_root.runAction(i)},on_checkout_game:function(){this.isGameOver=!0,this.showLabelScore(!1),r.instance.showScreen("ScreenGameOver")},gainScore:function(e,t){this.score+=t,this.updateScoreDisplay(),this.scoreFXMgr.playScoreFX(e,t);var n=o.getPlayerInfoScoreOvertake("score_world",this.score-t,this.score);n.length>0&&this.scoreOvertakeMgr.play(e,n)},updateScoreDisplay:function(){this.scoreLabel.string="Score: "+this.score},onShowLeaderboard:function(){this.screenLeaderboard.showLeaderboard("score_world")},onShare:function(){var e=i.getScreenshotBase64(i.getCameraMain());o.chooseAsync(e).catch(function(e){})},onSkinChange:function(e){this.currentSkinIndex!=e&&(this.currentSkinIndex=e,this.playerSkinSprite.spriteFrame=c.instance.getSkinSpriteFrame(e))}});cc._RF.pop()},{ScoreFXMgr:"ScoreFXMgr",ScoreOvertakeMgr:"ScoreOvertakeMgr",ScreenLeaderboard:"ScreenLeaderboard",ScreenMgr:"ScreenMgr",SkinMgr:"SkinMgr",UtilsCommon:"UtilsCommon",UtilsFB:"UtilsFB"}],player:[function(e,t,n){"use strict";cc._RF.push(t,"21c8axcsehOF7uRiV385w6I","player");var o=e("game_scene");cc.Class({extends:cc.Component,properties:{init_speed:150,a_power:600,y_radio:.5560472,game_manager:{type:o,default:null},audioJumpPressOnce:{default:null,type:cc.AudioClip},audioJumpPressRepeat:{default:null,type:cc.AudioClip},audioJumpSuccess:{default:null,type:cc.AudioClip},audioJumpFail:{default:null,type:cc.AudioClip},pressParticle:{default:null,type:cc.ParticleSystem}},onLoad:function(){this.next_block=null,this.direction=1,this.jumping=!1,this.motionStreak=this.getComponent(cc.MotionStreak)},player_jump:function(){this.motionStreak.enabled=!0,this.jumping=!0;var e=this.x_distance*this.direction,t=this.x_distance*this.y_radio,n=this.node.getPosition();n.x+=e,n.y+=t,this.rot_node.runAction(cc.rotateBy(.5,360*this.direction));var o=this.node.parent.convertToWorldSpaceAR(n),i=!1,c=this.next_block.is_jump_on_block(o,this.direction);c>0?(n=this.node.parent.convertToNodeSpaceAR(o),t=n.sub(this.node.getPosition()).y):i=!0;var r=cc.jumpTo(.5,n,200,1);this.direction=Math.random()<.5?-1:1;var a=cc.callFunc(function(){if(this.motionStreak.enabled=!1,this.jumping=!1,i)this.game_manager.on_checkout_game(),cc.audioEngine.playEffect(this.audioJumpFail);else{-1===this.direction?this.game_manager.move_map(580-o.x,-t):this.game_manager.move_map(180-o.x,-t);var e=this.node.parent.convertToWorldSpaceAR(this.node.getPosition());this.game_manager.gainScore(e,c),cc.audioEngine.playEffect(this.audioJumpSuccess)}}.bind(this)),s=cc.sequence(r,a);this.node.runAction(s)},set_next_block:function(e){this.next_block=e},start:function(){this.rot_node=this.node.getChildByName("rotate"),this.anim_node=this.rot_node.getChildByName("anim"),this.is_power_mode=!1,this.speed=0,this.x_distance=0,this.game_manager.node.on(cc.Node.EventType.TOUCH_START,function(e){this.onTouchStart()}.bind(this),this),this.game_manager.node.on(cc.Node.EventType.TOUCH_END,function(e){this.onTouchEnd()}.bind(this),this),this.game_manager.node.on(cc.Node.EventType.TOUCH_CANCEL,function(e){this.onTouchEnd()}.bind(this),this)},onTouchStart:function(){this.game_manager.mapMoving||this.jumping||(this.is_power_mode=!0,this.x_distance=0,this.speed=this.init_speed,this.anim_node.stopAllActions(),this.anim_node.runAction(cc.scaleTo(2,1,.5)),this.pressParticle.enabled=!0,this.pressParticle.resetSystem(),this.playTouchSound())},onTouchEnd:function(){this.is_power_mode&&(this.is_power_mode=!1,this.anim_node.stopAllActions(),this.anim_node.runAction(cc.scaleTo(.5,1,1)),this.player_jump(),this.pressParticle.enabled=!1,this.stopTouchSound())},playTouchSound:function(){this.audioIDPressOnce=cc.audioEngine.playEffect(this.audioJumpPressOnce,!1);var e=cc.audioEngine.getDuration(this.audioIDPressOnce);this.audioPressRepeatAlreadyPlay=!1,this.audioPressRepeatCallback=function(){this.audioPressRepeatAlreadyPlay=!0,this.audioIDPressRepeat=cc.audioEngine.playEffect(this.audioJumpPressRepeat,!0)},this.scheduleOnce(this.audioPressRepeatCallback,e)},stopTouchSound:function(){this.audioPressRepeatAlreadyPlay?cc.audioEngine.stopEffect(this.audioIDPressRepeat):(cc.audioEngine.stopEffect(this.audioIDPressOnce),this.unschedule(this.audioPressRepeatCallback))},update:function(e){this.is_power_mode&&(this.speed+=this.a_power*e,this.x_distance+=this.speed*e)}}),cc._RF.pop()},{game_scene:"game_scene"}]},{},["ConstValue","PlayerItem","ScoreFX","ScoreFXMgr","ScoreOvertake","ScoreOvertakeMgr","ScreenGameOver","ScreenHome","ScreenHomeLeaderboard","ScreenLeaderboard","ScreenMgr","ScreenSkinShop","SkinItem","SkinMgr","UtilsCommon","UtilsFB","block","game_scene","player"]);