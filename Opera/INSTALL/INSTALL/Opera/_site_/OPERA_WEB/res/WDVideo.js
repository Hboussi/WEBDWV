/*! 24.0.3.0 */
/*! VersionVI: 01F250052j x */
var WDVideo=function(){function n(n,i,r,u,f){if(arguments.length){WDChamp.prototype.constructor.apply(this,arguments);var e=f[0];this.m_oParamVideoInitial=e;this.m_oPlayer=new t(this)}}function ni(n){if(o===n.ePlayerDefaut)return o;if(undefined!==n.m_tabVideos||undefined!==n.m_tabSousTitres&&0<n.m_tabSousTitres.length)return i;switch(n.eType){case et:if(g(n))return i;case rt:if(ii())return w;n.ePlayerDefaut;break;case ut:var t=d();return t!=r?t:n.ePlayerDefaut;case ft:if(bIEQuirks&&d()==f)return f;if(g(n))return i;case ot:return fi()?b:n.ePlayerDefaut;case st:return oi(n)?i:n.ePlayerDefaut;case ht:case ct:case lt:default:return n.ePlayerDefaut;case at:return i;case vt:return o}}function ti(n,t,u){switch(t){case w:return bIEAvec11?new v(n,u):bWK?new yt(n,u):new pt(n,u);case f:case l:return new wt(n,u);case b:return new bt(n,u);case i:return new y(n,u);default:case r:case it:return new gt(n,u);case a:return new kt(n,u);case o:return new dt(n,u)}}function k(n){return!clWDUtil.bForEach(navigator.plugins||[],function(t){return 0<=t.name.indexOf(n)?!1:!0})}function ii(){return bIEAvec11||k("Windows Media")}function d(){var n=ri();return n!==r?n:(n=ui(),n!==r)?n:r}function ri(){var t,e,i,n,u;if(navigator.plugins)for(e=navigator.plugins.length,t=0;t<e;t++)if(i=navigator.plugins[t].description,i&&(n=i.split(" "),n.length>=3&&n[0].toLowerCase()=="shockwave"&&n[1].toLowerCase()=="flash")){if(u=parseInt(n[2],10),u>9)return f;if(u===8)return l}return r}function ui(){var n;try{if(n=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.9"),n)return f}catch(t){}try{if(n=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.8"),n)return l}catch(t){}return r}function fi(){return k("QuickTime")||ei()}function ei(){try{var n=new ActiveXObject("QuickTimeCheckObject.QuickTimeCheck.1");if(n&&n.IsQuickTimeAvailable(0))return!0}catch(t){}return!1}function g(n){return n.ePlayerDefaut===i||!bIE||10<=nIE&&!bIEQuirks}function oi(n){return n.ePlayerDefaut===i||!bIE}var u=1,h=2,c=3,p=0,nt=1,tt=2,r=0,w=1,f=2,l=3,b=4,i=5,it=6,a=7,o=8,rt=0,ut=1,ft=2,et=3,ot=4,st=5,ht=6,ct=7,lt=8,at=9,vt=10,s=function(){function n(n,i){i&&(this.m_oChampVideo=n,this.m_tabFichiers=t(i),this.m_tabSousTitres=i.m_tabSousTitres,this.m_sImage=i.sImage,this.m_sLibelle=i.sLibelle,this.m_bPleinEcran=i.bPleinEcran,this.m_bBoucle=i.bBoucle,this.m_eControles=i.eControles,this.m_sHTMLDefaut=i.sHTMLDefaut,this.m_bDemarrageAuto=i.bDemarrageAuto)}function t(n){var i,t;return i=undefined!==n.sFichier?[n]:undefined!==n.m_tabVideos?n.m_tabVideos:[],t=[],clWDUtil.bForEach(i,function(n){return t.push({m_sFichier:n.sFichier,m_sTypeMIME:n.m_sTypeMIME}),!0}),t}return n.prototype.vbJoue=function(){return!1},n.prototype.vbPause=function(){return!1},n.prototype.vbArret=function(){return!1},n.prototype.vnGetEtat=function(){return u},n.prototype.vbVaDebut=function(){return this.vbSetPosition(0)},n.prototype.vbVaFin=function(){return this.vbSetPosition(this.vnGetDuree())},n.prototype.vnGetPosition=function(){return 0},n.prototype.vbSetPosition=function(){return!1},n.prototype.vnGetDuree=function(){return 0},n.prototype.vnGetHauteur=function(){return 0},n.prototype.vnGetLargeur=function(){return 0},n.prototype.vnGetVolume=function(){return 100},n.prototype.vbSetVolume=function(){return!1},n.prototype._vsGetAttributsObject=function(){return""},n.prototype._vsGetParamsObject=function(){return""},n.prototype._vsGetAttributsEmbed=function(){return""},n.prototype._vsGetParamsEmbed=function(){return""},n.prototype._sGetFichier=function(n){return this.m_tabFichiers[n].m_sFichier},n}(),t=function(){function n(n){n&&(s.prototype.constructor.apply(this,arguments),this.m_oObjet=null)}function t(n){return'name="'+n+'" width="100%" height="100%" '}return n.prototype=new s,n.prototype.constructor=n,n.prototype.vConstruitPlayer=function(n,t){n.innerHTML=this._vsGetPlayerHTML(n);this.m_oObjet=this.m_oChampVideo.oGetObjectEmbed(this.m_oChampVideo.m_sAliasChamp,t,!0)},n.prototype._sGetEmbed=function(){return"<embed "+t(this.m_oChampVideo.m_sAliasChamp)+this._vsGetAttributsEmbed()+" "+this._vsGetParamsEmbed()+"><\/embed>"},n.prototype._vsGetPlayerHTML=function(){var n=this.m_oChampVideo.m_sAliasChamp;return'<object id="'+n+'" '+t(n)+this._vsGetAttributsObject()+">"+this._vsGetParamsObject()+this._sGetEmbed()+"<\/object>"},n.prototype._vsGetAttributsObject=function(){return""},n.prototype._vsGetParamsObject=function(){return""},n.prototype._vsGetAttributsEmbed=function(){return""},n.prototype._vsGetParamsEmbed=function(){return""},n.prototype._sGetFichier=function(n){return this.m_tabFichiers[n].m_sFichier},n}(),e=function(){function n(n){n&&t.prototype.constructor.apply(this,arguments)}return n.prototype=new t,n.prototype.constructor=n,n.prototype.vbJoue=function(){return this.m_oObjet.controls.play(),!0},n.prototype.vbPause=function(){return this.m_oObjet.controls.pause(),!0},n.prototype.vbArret=function(){return this.m_oObjet.controls.stop(),!0},n.prototype.vnGetEtat=function(){return this.m_oObjet.playState},n.prototype.vnGetPosition=function(){return Math.floor(this.m_oObjet.controls.currentPosition*1e3)},n.prototype.vbSetPosition=function(n){return this.m_oObjet.controls.currentPosition=n/1e3,!0},n.prototype.vnGetDuree=function(){return this.m_oObjet.controls.currentItem.duration*1e3},n.prototype.vnGetHauteur=function(){return this.m_oObjet.controls.currentItem.imageSourceHeight},n.prototype.vnGetLargeur=function(){return this.m_oObjet.controls.currentItem.imageSourceWidth},n.prototype.vnGetVolume=function(){return this.m_oObjet.settings.volume},n.prototype.vbSetVolume=function(n){return this.m_oObjet.settings.volume=n,!0},n.prototype._sGetUiMode=function(){switch(this.m_eControles){case p:return"none";default:case nt:return"mini";case tt:return"full"}},n}(),v=function(){function n(n){n&&e.prototype.constructor.apply(this,arguments)}return n.prototype=new e,n.prototype.constructor=n,n.prototype._vsGetAttributsObject=function(){return'CLASSID="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" type="application/x-oleobject" '},n.prototype._vsGetParamsObject=function(){return'<param name="url" value="'+this._sGetFichier(0)+'"><param name="AutoStart" value="false"><param name="uiMode" value="'+this._sGetUiMode()+'">'+(this.m_bBoucle?'<param name="playCount" value="1000">':"")},n.prototype._vsGetAttributsEmbed=function(){return'type="application/x-mplayer2" pluginspage="http://microsoft.com/windows/mediaplayer/en/download/" '},n.prototype._vsGetParamsEmbed=function(){return'uiMode="'+this._sGetUiMode()+'" src="'+this._sGetFichier(0)+'" autostart="false" '+(this.m_bBoucle?'playCount="1000" ':"")},n}(),yt=function(){function n(n){n&&v.prototype.constructor.apply(this,arguments)}return n.prototype=new v,n.prototype.constructor=n,n}(),pt=function(){function n(n){n&&e.prototype.constructor.apply(this,arguments)}return n.prototype=new e,n.prototype.constructor=n,n.prototype.vConstruitPlayer=function(n){return e.prototype.vConstruitPlayer.apply(this,[n,!0])},n.prototype._vsGetPlayerHTML=function(){return this.m_sHTMLDefaut},n}(),wt=function(){function n(n){n&&(t.prototype.constructor.apply(this,arguments),this.m_sMsgErreur=STD_ERREUR_MESSAGE_VIDEO.replace(/\%1/g,this._sGetFichier(0)),this.m_sFichier=this._sGetFichier(0),this.m_sCheminSWF=clWDUtil.sCheminImageRes(undefined,"WDVideo.swf",!0))}return n.prototype=new t,n.prototype.constructor=n,n.prototype.vbJoue=function(){return this.m_oObjet.bJoue()},n.prototype.vbPause=function(){return this.m_oObjet.bPause()},n.prototype.vbArret=function(){return this.m_oObjet.bArret()},n.prototype.vnGetEtat=function(){return this.m_oObjet.nGetEtat()},n.prototype.vnGetPosition=function(){return this.m_oObjet.nGetPosition()},n.prototype.vbSetPosition=function(n){return this.m_oObjet.bSetPosition(n)},n.prototype.vnGetDuree=function(){return this.m_oObjet.nGetDuree()},n.prototype.vnGetHauteur=function(){return this.m_oObjet.nGetHauteur()},n.prototype.vnGetLargeur=function(){return this.m_oObjet.nGetLargeur()},n.prototype.vnGetVolume=function(){return this.m_oObjet.nGetVolume()},n.prototype.vbSetVolume=function(n){return this.m_oObjet.bSetVolume(n)},n.prototype._vsGetPlayerHTML=function(){return bWK||bCrm?this._sGetEmbed():t.prototype._vsGetPlayerHTML.apply(this,arguments)},n.prototype._vsGetAttributsObject=function(){return'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" type="application/x-shockwave-flash" '},n.prototype._vsGetParamsObject=function(){return'<param name="Movie" value="'+this.m_sCheminSWF+'"><param name="src" value="'+this.m_sCheminSWF+'"><param name="FlashVars" VALUE="sAlias='+this.m_oChampVideo.m_sAliasChamp+'"><param name="WMode" value="Window"><param name="Play" value="0"><param name="Loop" value="-1"><param name="Quality" value="high"><param name="AllowScriptAccess" value="sameDomain"><param name="AllowFullScreen" value="'+(this.m_bPleinEcran?"true":"false")+'">'},n.prototype._vsGetAttributsEmbed=function(){return'type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" '},n.prototype._vsGetParamsEmbed=function(){return'src="'+this.m_sCheminSWF+'" flashVars="sAlias='+this.m_oChampVideo.m_sAliasChamp+'" play="true" loop="false" quality="high" allowScriptAccess="sameDomain" allowFullScreen="'+(this.m_bPleinEcran?"true":"false")+'" '},n}(),bt=function(){function n(n){n&&(t.prototype.constructor.apply(this,arguments),this.m_nEtat=u)}return n.prototype=new t,n.prototype.constructor=n,n.prototype.vbJoue=function(){return this.m_oObjet.Play(),this.m_nEtat=c,!0},n.prototype.vbPause=function(){return this.m_oObjet.Stop(),this.m_nEtat=h,!0},n.prototype.vbArret=function(){return this.m_oObjet.Stop(),this.m_oObjet.Rewind(),this.m_nEtat=u,!0},n.prototype.vnGetEtat=function(){return this.m_nEtat},n.prototype.vnGetPosition=function(){return this.__nUnitToMs(this.m_oObjet.GetTime())},n.prototype.vbSetPosition=function(n){return this.m_oObjet.SetTime(this.__nMsToUnit(n)),!0},n.prototype.vnGetDuree=function(){return this.__nUnitToMs(this.m_oObjet.GetDuration())},n.prototype.vnGetHauteur=function(){return this.__nGetDimension(!0)},n.prototype.vnGetLargeur=function(){return this.__nGetDimension(!1)},n.prototype.vnGetVolume=function(){return parseInt(this.m_oObjet.GetVolume()*100/255,10)},n.prototype.vbSetVolume=function(n){return this.m_oObjet.SetVolume(n*255/100),!0},n.prototype.__nMsToUnit=function(n){return n/1e3*this.m_oObjet.GetTimeScale()},n.prototype.__nUnitToMs=function(n){return n*1e3/this.m_oObjet.GetTimeScale()},n.prototype.__nGetDimension=function(n){var i=this.m_oObjet.GetRectangle(),t=i.split(",");return parseInt(t[n?3:2],10)-parseInt(t[n?1:0],10)},n.prototype._vsGetPlayerHTML=function(){return this.m_sHTMLDefaut},n}(),y=function(){function n(n){n&&t.prototype.constructor.apply(this,arguments)}return n.prototype=new t,n.prototype.constructor=n,n.prototype.vbJoue=function(){return this.m_oObjet.play(),!0},n.prototype.vbPause=function(){return this.m_oObjet.pause(),!0},n.prototype.vbArret=function(){return this.vbPause(),this.m_oObjet.currentTime=0,this.vbPause(),!0},n.prototype.vnGetEtat=function(){return this.m_oObjet.paused?h:c},n.prototype.vnGetPosition=function(){return Math.round(this.m_oObjet.currentTime*1e3)},n.prototype.vbSetPosition=function(n){return this.m_oObjet.currentTime=n/1e3,!0},n.prototype.vnGetDuree=function(){var n=this.m_oObjet.duration;return isNaN(n)||!isFinite(n)?0:Math.round(n*1e3)},n.prototype.vnGetHauteur=function(){return this.m_oObjet.videoHeight},n.prototype.vnGetLargeur=function(){return this.m_oObjet.videoWidth},n.prototype.vnGetVolume=function(){return Math.round(this.m_oObjet.volume*100)},n.prototype.vbSetVolume=function(n){this.m_oObjet.volume=n/100},n.prototype._vsGetBalise=function(){return"video"},n.prototype._vsGetPlayerHTML=function(n){var i=this._vsGetBalise(),t="<"+i+' preload="metadata" ';return bIEAvec11?t+='style="width:100%;':bWK?(t+='style="width:100%;height:100%;top:50%;left:50%;transform:translate(-50%, -50%);position: absolute;',n.style.position="relative"):t+='width="100%" height="100%',t+='" id="'+this.m_oChampVideo.m_sAliasChamp,this.m_bDemarrageAuto&&(t+='" autoplay="autoplay'),this.m_bBoucle&&(t+='" loop="loop'),this.m_eControles!=p&&(t+='" controls="controls'),t+='">',clWDUtil.bForEach(this.m_tabFichiers,function(n){return t+='<source src="'+n.m_sFichier+'" type="'+n.m_sTypeMIME+'" />',!0}),this.m_tabSousTitres&&clWDUtil.bForEach(this.m_tabSousTitres,function(n){return t+='<track kind="'+n.m_sKind+'" src="'+n.m_sSrc+(undefined!==n.m_sSrclang?'" srclang="'+n.m_sSrclang:"")+(undefined!==n.m_sLabel?'" label="'+n.m_sLabel:"")+(n.m_bDefaut?'" default="default':"")+'" />',!0}),t+="<\/"+i+">"},n}(),kt=function(){function n(n){n&&y.prototype.constructor.apply(this,arguments)}return n.prototype=new y,n.prototype.constructor=n,n.prototype._vsGetBalise=function(){return"audio"},n}(),dt=function(){function r(n,t){var i=o[n.getPlaybackQuality()];return i?i[t?0:1]:0}function n(n){n&&(s.prototype.constructor.apply(this,arguments),this.m_oPlayer=null)}function l(n,r){t?e(n,r):i.push({m_oVideoYouTube:n,m_oConteneur:r})}function e(n,t){n.ChargementVideo(t)}var o={tiny:[256,144],small:[426,240],medium:[640,360],large:[854,480],hd720:[1280,720],hd1080:[1920,1080],hd1440:[2560,1440],hd2160:[3840,2160],highres:[7680,4320]};n.prototype=new s;n.prototype.constructor=n;n.prototype.vbJoue=function(){return this.m_oPlayer.playVideo(),!0};n.prototype.vbPause=function(){return this.m_oPlayer.pauseVideo(),!0};n.prototype.vbArret=function(){return this.m_oPlayer.stopVideo(),!0};n.prototype.vnGetEtat=function(){switch(this.m_oPlayer.getPlayerState()){case-1:case YT.PlayerState.ENDED:case YT.PlayerState.CUED:default:return u;case YT.PlayerState.PLAYING:case YT.PlayerState.BUFFERING:return c;case YT.PlayerState.PAUSED:return h}};n.prototype.vnGetPosition=function(){return this.m_oPlayer.getCurrentTime()*1e3};n.prototype.vbSetPosition=function(n){return this.m_oPlayer.seekTo(n/1e3,!0),!0};n.prototype.vnGetDuree=function(){return this.m_oPlayer.getDuration()*1e3};n.prototype.vnGetHauteur=function(){return r(this.m_oPlayer,!1)};n.prototype.vnGetLargeur=function(){return r(this.m_oPlayer,!0)};n.prototype.vnGetVolume=function(){return this.m_oPlayer.getVolume()};n.prototype.vbSetVolume=function(n){return this.m_oPlayer.setVolume(n),!0};n.prototype.vConstruitPlayer=function(n){l(this,n);f()};n.prototype.ChargementVideo=function(){this.m_oPlayer=new YT.Player(this.m_oChampVideo.m_sAliasChamp+"_YT",{})};var t=!1,f=function(){function o(){t=!0;clWDUtil.bForEach(i,function(n){return e(n.m_oVideoYouTube,n.m_oConteneur),!0});i=[];n&&n()}var n=null,r,u;f=clWDUtil.m_pfVide;window.YT&&window.YT.Player?o():(n=window.onYouTubeIframeAPIReady,window.onYouTubeIframeAPIReady=o,r=document.createElement("script"),r.src="https://www.youtube.com/iframe_api",u=document.getElementsByTagName("script")[0],u.parentNode.insertBefore(r,u))},i=[];return n}(),gt=function(){function n(n){n&&t.prototype.constructor.apply(this,arguments)}return n.prototype=new t,n.prototype.constructor=n,n.prototype._vsGetPlayerHTML=function(){return this.m_sHTMLDefaut},n}();return n.prototype=new WDChamp,n.prototype.constructor=n,n.prototype.Init=function(){WDChamp.prototype.Init.apply(this,arguments);this.m_oConteneur=document.getElementById("tz"+this.m_sAliasChamp);this.__InitPlayer(this.m_oParamVideoInitial)},n.prototype.sGetVariable=function(n){return this.m_oPlayer[n]},n.prototype.bGetVariable=function(n){return this.m_oPlayer[n]},n.prototype.nGetVariable=function(n){return this.m_oPlayer[n]},n.prototype.bJoue=function(){try{return this.m_oPlayer.vbJoue(arguments)}catch(n){return!1}},n.prototype.bPause=function(){try{return this.m_oPlayer.vbPause()}catch(n){return!1}},n.prototype.bArret=function(){try{return this.m_oPlayer.vbArret()}catch(n){return!1}},n.prototype.nGetEtat=function(){try{return this.m_oPlayer.vnGetEtat()}catch(n){return u}},n.prototype.bDebut=function(){try{return this.m_oPlayer.vbVaDebut()}catch(n){return!1}},n.prototype.bFin=function(){try{return this.m_oPlayer.vbVaFin()}catch(n){return!1}},n.prototype.nGetPosition=function(){try{return this.m_oPlayer.vnGetPosition()}catch(n){return 0}},n.prototype.bSetPosition=function(n){try{return this.m_oPlayer.vbSetPosition(n)}catch(t){return!1}},n.prototype.nGetDuree=function(){try{return this.m_oPlayer.vnGetDuree()}catch(n){return 0}},n.prototype.nGetHauteur=function(){try{return this.m_oPlayer.vnGetHauteur()}catch(n){return 0}},n.prototype.nGetLargeur=function(){try{return this.m_oPlayer.vnGetLargeur()}catch(n){return 0}},n.prototype.nGetVolume=function(){try{return this.m_oPlayer.vnGetVolume()}catch(n){return 100}},n.prototype.bSetVolume=function(n){try{return this.m_oPlayer.vbSetVolume(n)}catch(t){return!1}},n.prototype._vDeduitParam=function(n){WDChamp.prototype._vDeduitParam.apply(this,arguments);this.__InitPlayer(n)},n.prototype.__InitPlayer=function(n){var t=ni(n);i==t&&a==n.ePlayerDefaut&&(t=a);this.m_oPlayer=ti(this,t,n);this.m_oConteneur&&clWDUtil.bEstDisplay(this.m_oConteneur,document,!1)&&this.__InitPlayerInterne()},n.prototype.__InitPlayerInterne=function(){this.m_oPlayer.vConstruitPlayer(this.m_oConteneur,bIEAvec11);this.m_oPlayer.m_bDemarrageAuto&&this.nSetTimeoutUnique("bJoue",500)},n}()