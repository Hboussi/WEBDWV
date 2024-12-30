/*! 25.0.0.0 */
/*! VersionVI: 01F250052j x */
function oCreerCanvas(){return document.createElement("canvas")}function oDCCanvas(n){return n==null||n.getContext==null?null:n.getContext("2d")}function RVB(n,t,i){return i*FACTEUR_BLEU+t*FACTEUR_VERT+n}function RVBBleu(n){return(n&16711680)/FACTEUR_BLEU}function RVBVert(n){return(n&65280)/FACTEUR_VERT}function RVBRouge(n){return n&255}function nWLVersOpacite(n){return n/OPACITE_MAX}function WDDessin(n){if(this.m_oImg=n,this.m_oCanvas=oCreerCanvas(),this.m_oDC=oDCCanvas(this.m_oCanvas),this.m_bOpacite=!1,this.m_nOpaciteFond=OPACITE_MAX,this.m_nOpaciteTrait=OPACITE_MAX,n!=null){this.m_oCanvas.width=n.clientWidth;this.m_oCanvas.height=n.clientHeight;this.m_dAffichageManuel=!1;this.m_bAffichageAsynchrone=!1;this.m_fAngle=0;try{this.m_oDC.drawImage(n,0,0)}catch(t){}this.m_oObserver=function(){function r(n){i&&n.forEach(function(n){"src"==n.attributeName&&__FinDessinImage(n.target,!1)})}function u(n,t){n.src=t}var i=!0,t;return window.MutationObserver?(t=new MutationObserver(r),{Connecte:function(){t.observe(n,{attributes:!0,attributeFilter:["src"]})},Deconnecte:function(){t.disconnect()},AffecteSrc:function(n,t){this.ForceMutation();try{var r=i;i=!1;u(n,t);this.ForceMutation()}finally{i=r}},ForceMutation:function(){r(t.takeRecords(),t)}}):{Connecte:clWDUtil.m_pfVide,Deconnecte:clWDUtil.m_pfVide,AffecteSrc:u,ForceMutation:clWDUtil.m_pfVide}}();this.m_oObserver.Connecte()}}function sWDComposanteCouleur(n){var t=n.toString(16);return t.length<2?"0"+t:t}function sWDCouleurVersChaine(n){return clWDUtil.WDDinoCouleur.s_oGetDinoCouleur(n).toString()}function nWDCouleurVersEntier(n){return null!=n?clWDUtil.WDDinoCouleur.s_oGetDinoCouleur(n).toNumber():n}function nWDIndiceImage(n){for(var t=0,t=0;t<gTabDessin.length;t++)if(gTabDessin[t]!=null&&gTabDessin[t].m_oImg==n)break;return t}function bWDIndiceOK(n){return n<gTabDessin.length}function bWDTestFlag(n,t){return(n&t)==t}function oWDCreateGetDessin(n,t,i){var r,u,f;if(!DessinDisponible())return null;for(r=0;r<gTabDessin.length;r++)gTabDessin[r]&&gTabDessin[r].m_oObserver.ForceMutation();if(r=nWDIndiceImage(n),!bWDIndiceOK(r)){for(r=0;r<gTabDessin.length;r++)if(gTabDessin[r]==null)break;gTabDessin[r]=new WDDessin(n);i=!0}return u=gTabDessin[r],u.m_bOpacite=bWDTestFlag(t,dAvecOpacite),u.m_dAffichageManuel=bWDTestFlag(t,dAffichageManuel),u.m_bAffichageAsynchrone=bWDTestFlag(t,nAffichageAsynchrone),i&&(f=u.m_oDC,f.fillStyle=f.strokeStyle=TRANSPARENT),bWDTestFlag(t,dSansEffacer)||u.Effacer(!0),u}function oWDInitDessin(n,t,i){var r=oWDCreateGetDessin(n,t,i);return r?(goDessin=r,goDC=r.m_oDC):null}function dDebutDessin(n,t){return oWDInitDessin(n,t,!0)}function bWDDessinOK(){return goDC!=null}function WDInitCouleurTrait(n){n!=null&&(goDC.strokeStyle=sWDCouleurVersChaine(n))}function WDInitCouleurFond(n){n!=null&&(goDC.fillStyle=sWDCouleurVersChaine(n))}function WDInitEpaisseurTrait(n){n!=null&&(goDC.lineWidth=n)}function bWDInitTrace(n,t,i,r,u){return bWDDessinOK()?(goDC.save(),WDInitCouleurTrait(i),WDInitCouleurFond(r),WDInitEpaisseurTrait(u),goDC.beginPath(),goDC.moveTo(n,t),!0):!1}function WDChangeOpacite(n,t){n&&(goDC.save(),goDC.globalAlpha=nWLVersOpacite(t))}function WDRestaureOpacite(n){n&&goDC.restore()}function WDFinTrace(n,t,i){var r=!n&&goDessin.m_bOpacite&&goDessin.m_nOpaciteTrait<OPACITE_MAX,u;WDChangeOpacite(r,goDessin.m_nOpaciteTrait);n||i||goDC.stroke();WDRestaureOpacite(r);u=i||!n&&!t;r=u&&goDessin.m_bOpacite&&goDessin.m_nOpaciteFond<OPACITE_MAX;WDChangeOpacite(r,goDessin.m_nOpaciteFond);u&&goDC.fill();WDRestaureOpacite(r);goDC.restore();goDessin.MajImage(null,null,goDessin.m_bAffichageAsynchrone)}function dAffiche(){goDessin.AfficheImage(undefined,!1)}function nWDDistance(n,t){return Math.abs(t-n)}function nWDCentre(n,t){return(n+t)/2}function nWDAngle(n,t,i,r){return Math.PI/2-Math.atan2(i-n,r-t)}function WDArcEchelle(n,t,i,r,u,f,e,o){var h=nWDCentre(n,t),c=nWDCentre(i,r),l=nWDDistance(n,t),a=nWDDistance(i,r),s=Math.min(l,a),v=l/s,y=a/s;goDC.beginPath();o&&goDC.moveTo(h,c);goDC.save();goDC.scale(v,y);goDC.arc(h/v,c/y,s/2,u,f,e);goDC.restore()}function WDArc(n,t,i,r,u,f,e,o,s){var h=nWDCentre(n,i),c=nWDCentre(t,r);WDArcEchelle(n,i,t,r,nWDAngle(h,c,u,f),nWDAngle(h,c,e,o),!0,s)}function dArc(n,t,i,r,u,f,e,o,s,h){bWDInitTrace(n,t,s,null,h)&&(WDArc(n,t,i,r,u,f,e,o),WDFinTrace(!1,!0))}function dCercle(n,t,i,r,u,f){bWDInitTrace(n,t,f,u)&&(WDArcEchelle(n,i,t,r,0,Math.PI*2,!1),WDFinTrace())}function dChangeMode(n){bWDDessinOK()&&(goDC.globalCompositeOperation=n==7?"xor":"source-over")}function __oWDTemporaire(n){return oWDCreateGetDessin(n,dSansEffacer+(bWDDessinOK()&&goDessin.m_bOpacite?dAvecOpacite:0),!1)}function dCopie(n,t,i,r,u,f,e,o,s,h){dCopieImage(n,t,-2,i,r,f,u,e,o,h,s)}function dCopieImage(n,t,i,r,u,f,e,o,s,h,c){function y(t,i){t.save();t.beginPath();t.rect(p,w,a,v);t.clip();t.globalCompositeOperation=i;t.drawImage(n,ut,ft,it,rt,p,w,a,v);t.restore()}function g(n,t){n.save();n.fillStyle=t;n.fillRect(p,w,a,v);n.restore()}function d(n){for(var t,u,r=n.getImageData(p,w,a,v),e=r.width*r.width,i=r.data,f=0;f<e;f++)t=f*4,u=0==i[t+3]?0:~RVB(i[t],i[t+1],i[t+2]),i[t]=RVBRouge(u),i[t+1]=RVBVert(u),i[t+2]=RVBBleu(u),r.data[t+3]=OPACITE_MAX;n.putImageData(r,p,w)}function b(n){return isNaN(n)?0:n}function nt(n,t){var i=n.clientWidth;return isNaN(t)?i:Math.min(t,i)}function tt(n,t){var i=n.clientHeight;return isNaN(t)?i:Math.min(t,i)}var k=__oWDTemporaire(t);if(k){var l=k.m_oDC,ut=b(r),ft=b(u),it=nt(n,e),rt=tt(n,f),p=b(o),w=b(s),a=nt(t,c),v=tt(t,h);switch(i){case-2:y(l,"source-over");break;case-1:a=Math.min(it,a);v=Math.min(rt,v);y(l,"source-over");break;case 0:g(l,"#000");break;case 1:d(l);break;case 4:y(l,"copy");d(l);break;default:case 10:y(l,"copy");break;case 12:y(l,"xor");d(l);break;case 14:g(l,"#fff")}k.MajImage(null,null,k.m_bAffichageAsynchrone)}}function WDTrait(n,t,i,r){goDC.moveTo(n,t);goDC.lineTo(i,r)}function dCorde(n,t,i,r,u,f,e,o,s,h){bWDInitTrace(n,t,h,s)&&(WDArc(n,t,i,r,u,f,e,o),goDC.closePath(),WDFinTrace())}function WDDetruit(n,t){gTabDessin[n]!=null&&(gTabDessin[n].Effacer(t),gTabDessin[n].m_oObserver.Deconnecte(),gTabDessin[n].destructor(),gTabDessin[n]=null)}function dFinDessin(n){if(n)__FinDessinImage(n,!0);else for(var t=0;t<gTabDessin.length;t++)WDDetruit(t,!0)}function __FinDessinImage(n,t){var i=nWDIndiceImage(n);bWDIndiceOK(i)&&WDDetruit(i,t)}function dFond(n,t,i,r){bWDDessinOK()&&(WDInitCouleurFond(t==1?TRANSPARENT:n),r!=null&&(goDessin.m_nOpaciteFond=r))}function dInverseCouleur(n){return __oSwapActionRestaure(n,function(){for(var i=goDessin.oImage(),t=0;t<goDessin.nNbPixel();t++)goDessin.ModifCouleurIndice(i,t,~goDessin.nCouleurIndice(i,t));return goDessin.ModifImage(i,n,goDessin.m_bAffichageAsynchrone),!0})}function dLigne(n,t,i,r,u,f){bWDInitTrace(n,t,u,null,f)&&(goDC.lineTo(i,r),WDFinTrace())}function dModifieTSL(n,t,i,r,u){return __oSwapActionRestaure(n,function(){var l,o,a,c,f,e,s,h;for(i=Math.max(-100,Math.min(100,i)),r=Math.max(-100,Math.min(100,r)),l=Math.max(-255,Math.min(255,r*255/100)),o=goDessin,u&&n!=u&&(o=oWDCreateGetDessin(u,0)),a=goDessin.oImage(),c=o.oImage(),s=0;s<goDessin.nNbPixel();s++){if(f=goDessin.tabCouleurRVBAIndice(a,s),e=clWDUtil.tabRVBA2TSLA(f),e[0]=(e[0]+t)%360,e[1]=Math.max(0,Math.min(1,e[1]+i/100)),clWDUtil.TSLA2RVBA(e,f),r!=0)for(h=0;h<3;h++)f[h]=Math.max(0,Math.min(255,Math.floor(f[h]+l)));goDessin.ModifCouleurIndice(c,s,clWDUtil.nRVBA2Int(f),f[3],!1)}return o.ModifImage(c,u,o.m_bAffichageAsynchrone),!0})}function dModifieLuminosite(n,t,i){return dModifieTSL(n,0,0,t,i)}function dModifieSaturation(n,t,i){return dModifieTSL(n,0,t,0,i)}function dModifieTeinte(n,t,i){return dModifieTSL(n,t,0,0,i)}function dPixelCouleur(n,t,i){return __dPixel(n,t,i,function(n,t,i){return clWDUtil.WDDinoCouleur.s_oGetDinoCouleur(goDessin.nCouleurXY(n,t,i))})}function dPixelOpacite(n,t,i){return __dPixel(n,t,i,function(n,t,i){return goDessin.nOpaciteXY(n,t,i)})}function __dPixel(n,t,i,r){function u(){if(t=Math.round(t),i=Math.round(i),bWDDessinOK()&&t>=0&&i>=0&&t<goDessin.nLargeur()&&i<goDessin.nHauteur()){var n=goDessin.oImage(),u=r(n,t,i);return delete n,u}return 0}return n?__oSwapActionRestaure(n,u):u()}function dPoint(n,t,i){if(n=Math.round(n),t=Math.round(t),bWDDessinOK()){var r=goDessin.oImage();goDessin.ModifCouleurXY(r,n,t,nWDCouleurVersEntier(i!=null?i:goDC.strokeStyle));goDessin.ModifImage(r,null,goDessin.m_bAffichageAsynchrone)}}function dPolice(n,t,i,r){function u(n,t){n&&f.push(t)}var f;bWDDessinOK()&&(f=[],u(bWDTestFlag(i,4),"italic"),u(bWDTestFlag(i,8),"bold"),u(null!=t,String(t)+"pt"),u(null!=n,n),goDC.font=f.join(" "),goDessin.m_fAngle=-fWDDegreVersRadian(r))}function dPolygone(){var t,f,i;if(!(arguments.length<1)&&(t=arguments.length<4,!t||!(arguments[0].length<4))){var n=t?arguments[0]:arguments,r=t?n.length/2:n[0],u=2*r+1;if((!t||bWDInitTrace(n[0],n[1],arguments[2],arguments[1]))&&(t||!(n.length<5||!bWDInitTrace(n[1],n[2],n[u+1],n[u])))){for(f=t?0:1,i=f;i<2*r;i+=2)goDC.lineTo(n[i],n[i+1]);goDC.closePath();WDFinTrace()}}}function dPortion(n,t,i,r,u,f,e,o,s,h){bWDInitTrace(n,t,h,s)&&(WDArc(n,t,i,r,u,f,e,o,!0),goDC.closePath(),WDFinTrace())}function dRectangle(n,t,i,r,u,f){bWDInitTrace(n,t,f,u)&&(goDC.rect(Math.min(n,i),Math.min(t,r),nWDDistance(n,i),nWDDistance(t,r)),WDFinTrace())}function WDAjoutCouleurDegrade(n,t,i){t!=null&&n.addColorStop(i/100,sWDCouleurVersChaine(t))}function fWDDegreVersRadian(n){return n*(Math.PI/180)}function dRectangleDegrade(n,t,i,r,u,f,e,o,s,h,c){var y,p,d,a;if(bWDInitTrace(n,t)){var l=fWDDegreVersRadian(e%360),w=l==Math.PI/2||l==3*Math.PI/2,b=w?0:Math.tan(l),g=l==0||l==Math.PI,nt=g?0:Math.tan(l+Math.PI/2),v=n,k=i;l>Math.PI/2&&l<=3*Math.PI/2&&(v=i,k=n);y=t;p=r;l>Math.PI&&(y=r,p=t);d=g?k:w?v:(b*v-nt*k+p-y)/(b-nt);a=goDC.createLinearGradient(v,y,d,b*(d-v)+(w?p:y));WDAjoutCouleurDegrade(a,u,0);WDAjoutCouleurDegrade(a,f,100);WDAjoutCouleurDegrade(a,o,s);WDAjoutCouleurDegrade(a,h,c);goDC.fillStyle=a;goDC.rect(Math.min(n,i),Math.min(t,r),nWDDistance(n,i),nWDDistance(t,r));WDFinTrace(!1,!1,!0)}}function oWDCanvaCopie(){var n=oCreerCanvas();return n.width=goDessin.nLargeur(),n.height=goDessin.nHauteur(),n}function dRedimensionne(n,t,i){return __bSwapCopieActionRestaure(n,function(n){n.scale(t/goDessin.nLargeur(),i/goDessin.nHauteur())})}function dRemplissage(n,t,i,r){if(n=Math.round(n),t=Math.round(t),bWDDessinOK()){var u=goDessin.oImage();goDessin.PropageCouleur(u,n,t,nWDCouleurVersEntier(i!=null?i:goDC.fillStyle),nWDCouleurVersEntier(r));goDessin.ModifImage(u,null,goDessin.m_bAffichageAsynchrone)}}function dRotation(n,t){return __bSwapCopieActionRestaure(n,function(n){var r=fWDDegreVersRadian(t),u=goDessin.nLargeur()/2,i=goDessin.nHauteur()/2,f=Math.atan(u/i),e=f-r,o=i/Math.cos(f);n.translate(u-o*Math.sin(e),i-o*Math.cos(e));n.rotate(r)})}function dTexte(n,t,i,r,u){(r==null&&(r=goDC.strokeStyle!=TRANSPARENT&&goDC.strokeStyle!="rgba(0, 0, 0, 0.0)"?goDC.strokeStyle:0),bWDInitTrace(n,t,r,r))&&(goDessin.Texte(n,t,i,u),WDFinTrace())}function dSauveImage(n,t,i,r){return __oSwapActionRestaure(n,function(){try{return goDessin.m_oCanvas.toDataURL("image/"+r.toLowerCase())}catch(n){return""}})}function dSauveImageBMP(n,t,i){return dSauveImage(n,t,i,"bmp")}function dSauveImageGIF(n,t,i){return dSauveImage(n,t,i,"gif")}function dSauveImageJPEG(n,t,i){return dSauveImage(n,t,null,"jpeg",(i==null?80:i)/100)}function dSauveImagePNG(n,t){return dSauveImage(n,t,null,"png")}function dStylo(n,t,i,r){bWDDessinOK()&&(WDInitCouleurTrait(t==5?TRANSPARENT:n),WDInitEpaisseurTrait(i),r!=null&&(goDessin.m_nOpaciteTrait=r))}function dSymetrieHorizontale(n){return __bSwapCopieActionRestaure(n,function(n){n.transform(1,0,0,-1,0,goDessin.nHauteur())})}function dSymetrieVerticale(n){return __bSwapCopieActionRestaure(n,function(n){n.transform(-1,0,0,1,goDessin.nLargeur(),0)})}function __oSwapActionRestaure(n,t){function u(n){return DessinDisponible()?(i=goDessin,oWDInitDessin(n,dSansEffacer+(bWDDessinOK()&&goDessin.m_bOpacite?dAvecOpacite:0)),bWDDessinOK()):!1}function f(){i&&(goDessin=i,goDC=goDessin.m_oDC)}var i=null,r;return u(n)?(r=t(),f(),r):!1}function __bSwapCopieActionRestaure(n,t){return __oSwapActionRestaure(n,function(){var n=oWDCanvaCopie();return t(oDCCanvas(n)),goDessin.MajImage(null,n,goDessin.m_bAffichageAsynchrone),!0})}function InfoBitmap(n){var r="BAD",u=r+"\t\t\t",t,i;return n&&(t=new Image,t.src=n,i=n.lastIndexOf("."),0<t.width&&0<t.height&&(u=(Math.max(n.lastIndexOf("\\"),n.lastIndexOf("/"))<i?n.substr(i+1):r)+"\t"+t.width+"\t"+t.height+"\t0"),delete t),u}var dSansEffacer=1,dAvecOpacite=2,dAffichageManuel=16,nAffichageAsynchrone=32,OPACITE_MAX=255,FACTEUR_BLEU=65536,FACTEUR_VERT=256,SOULIGNE=" underline",TRANSPARENT="transparent",gTabDessin=[],goDessin=null,goDC=null,DessinDisponible=function(){var n=function(){var n=oCreerCanvas(),t=null!=oDCCanvas(n);return delete n,t}();return function(){return n}}();WDDessin.prototype.__AfficheCanvas=function(){function n(n,t){this.m_bChargement=!1;this.m_oCanvasSuivant=null;var i=this;clWDUtil.AttacheDetacheEvent(!0,t,"load",function(){URL.revokeObjectURL(t.src);i.m_bChargement=!1;i.m_oCanvasSuivant&&(i.__AfficheCanvas(n,t,i.m_oCanvasSuivant),i.m_oCanvasSuivant=null)})}n.prototype.AfficheCanvas=function(n,t,i){this.m_bChargement?this.m_oCanvasSuivant=i:this.__AfficheCanvas(n,t,i)};n.prototype.__AfficheCanvas=function(n,t,i){this.m_bChargement=!0;i.toBlob(function(i){n.__AffecteSrc(t,URL.createObjectURL(i))})};var t={};return function(i,r){var u=t[i.id];u||(u=new n(this,i),t[i.id]=u);u.AfficheCanvas(this,i,r)}}();WDDessin.prototype.__AffecteSrc=function(n,t){this.m_oObserver&&this.m_oObserver.AffecteSrc(n,t)};WDDessin.prototype.AfficheImage=function(n,t){var i=this.m_oCanvas;n=n||this.m_oImg;t&&""!=n.id&&i.toBlob&&window.URL&&URL.createObjectURL?this.__AfficheCanvas(n,i):this.__AffecteSrc(n,i.toDataURL())};WDDessin.prototype.MajImage=function(n,t,i){if(t){var r=oDCCanvas(t);r.drawImage(this.m_oCanvas,0,0);this.Effacer(!0);this.m_oDC.drawImage(t,0,0);delete t}this.m_dAffichageManuel||this.AfficheImage(n,i)};WDDessin.prototype.destructor=function(){delete this.m_oCanvas;delete this.m_oDC;delete this.m_oObserver;delete this};WDDessin.prototype.nLargeur=function(){return this.m_oCanvas.width};WDDessin.prototype.nHauteur=function(){return this.m_oCanvas.height};WDDessin.prototype.oImage=function(){return this.m_oDC.getImageData(0,0,goDessin.nLargeur(),goDessin.nHauteur())};WDDessin.prototype.ModifImage=function(n,t,i){this.m_oDC.putImageData(n,0,0);delete n;this.MajImage(t,null,i)};WDDessin.prototype.nIndice=function(n){return n*4};WDDessin.prototype.nIndiceXY=function(n,t){return this.nIndice(n+this.nLargeur()*t)};WDDessin.prototype.nIndiceRouge=function(n){return n};WDDessin.prototype.nIndiceVert=function(n){return n+1};WDDessin.prototype.nIndiceBleu=function(n){return n+2};WDDessin.prototype.nIndiceOpacite=function(n){return n+3};WDDessin.prototype.nCouleur=function(n,t){var i=n.data;return RVB(i[this.nIndiceRouge(t)],i[this.nIndiceVert(t)],i[this.nIndiceBleu(t)])};WDDessin.prototype.tabCouleurRVBA=function(n,t){var i=n.data;return[i[this.nIndiceRouge(t)],i[this.nIndiceVert(t)],i[this.nIndiceBleu(t)],i[this.nIndiceOpacite(t)]]};WDDessin.prototype.nCouleurIndice=function(n,t){return this.nCouleur(n,this.nIndice(t))};WDDessin.prototype.tabCouleurRVBAIndice=function(n,t){return this.tabCouleurRVBA(n,this.nIndice(t))};WDDessin.prototype.nCouleurXY=function(n,t,i){return this.nCouleur(n,this.nIndiceXY(t,i))};WDDessin.prototype.nOpacite=function(n,t){return n.data[this.nIndiceOpacite(t)]};WDDessin.prototype.nOpaciteXY=function(n,t,i){return this.nOpacite(n,this.nIndiceXY(t,i))};WDDessin.prototype.ModifCouleur=function(n,t,i,r,u){var f=n.data;f[this.nIndiceRouge(t)]=RVBRouge(i);f[this.nIndiceVert(t)]=RVBVert(i);f[this.nIndiceBleu(t)]=RVBBleu(i);u||r==null&&this.nOpacite(n,t)!=0||this.ModifOpacite(n,t,r!=null?r:OPACITE_MAX)};WDDessin.prototype.ModifCouleurIndice=function(n,t,i,r,u){this.ModifCouleur(n,this.nIndice(t),i,r,u)};WDDessin.prototype.ModifCouleurXY=function(n,t,i,r,u,f){this.ModifCouleur(n,this.nIndiceXY(t,i),r,u,f)};WDDessin.prototype.PropageCouleur=function(n,t,i,r,u){function e(n,t,i){n.push(t);n.push(i)}var c=[],f=[],o;e(f,t,i);for(var l=this.nLargeur(),a=this.nHauteur(),h=null;f.length;){var i=f.pop(),t=f.pop(),s=this.nIndiceXY(t,i);c[s]||t>=0&&t<l&&i>=0&&i<a&&(c[s]=!0,o=this.nCouleur(n,s),u==null&&h==null&&(h=o),(u!=null?o!=u:o==h)&&(o!=r&&this.ModifCouleur(n,s,r),e(f,t-1,i-1),e(f,t,i-1),e(f,t+1,i-1),e(f,t-1,i),e(f,t+1,i),e(f,t-1,i+1),e(f,t,i+1),e(f,t+1,i+1)))}};WDDessin.prototype.ModifOpacite=function(n,t,i){n.data[this.nIndiceOpacite(t)]=i};WDDessin.prototype.nNbPixel=function(){return this.m_oCanvas.width*this.m_oCanvas.height};WDDessin.prototype.nFinTexteAffiche=function(n,t,i,r,u){var f=n.substring(t,i);return this.m_oDC.textBaseline="top",this.m_oDC.fillText(f,r,u),r+this.m_oDC.measureText(f).width};WDDessin.prototype.Texte=function(n,t,i,r){var o=(r===undefined||!r)&&this.m_oDC.font.indexOf(SOULIGNE)<0,f=0,e,u;for(i.length===undefined&&(i=i.toString()),e=i.length,u=e,this.m_oDC.save(),this.m_oDC.translate(n,t),n=t=0,this.m_oDC.rotate(this.m_fAngle);f<e;)o&&(u=i.indexOf("&",f),u<0&&(u=e)),u>f&&(n=this.nFinTexteAffiche(i,f,u,n,t),f=u+1,u=f+1),f<e&&(this.m_oDC.save(),n=this.nFinTexteAffiche(i,f,u,n,t),this.m_oDC.restore(),f=u,u=f+1);this.m_oDC.restore()};WDDessin.prototype.Effacer=function(n){this.m_oDC&&this.m_oDC.clearRect(0,0,this.nLargeur(),this.nHauteur());n&&this.MajImage(null,null,!1)}