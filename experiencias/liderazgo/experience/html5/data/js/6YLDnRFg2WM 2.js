window.globalProvideData('slide', '{"title":"¿Tú qué piensas? ","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide4","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6YLDnRFg2WM","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6Qn0iTB2cU9.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6nFcs5BnS9B.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.5hl22aLscWv"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"655QqXJ7qR1","typea":"string","valueb":"_this.6Qn0iTB2cU9.$DropTargetId","typeb":"property"}}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"655QqXJ7qR1","typea":"string","valueb":"_this.6nFcs5BnS9B.$DropTargetId","typeb":"property"}}}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_604fMObKkBL.InvalidPromptSlide"}}]}]},"ActGrpOnPrevButtonClick":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.69jkwi4aAQG.5aCkzJ49oH3"}}]},"ReviewInt_5kGDMl26iJK":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6Qn0iTB2cU9"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6nFcs5BnS9B"},"enabled":{"type":"boolean","value":false}}]},"ReviewIntCorrectIncorrect_5kGDMl26iJK":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6Qn0iTB2cU9"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6nFcs5BnS9B"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_5kGDMl26iJK":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5kGDMl26iJK"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_5kGDMl26iJK":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6Qn0iTB2cU9"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6nFcs5BnS9B"},"enabled":{"type":"boolean","value":false}}]},"5kGDMl26iJK_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5hl22aLscWv.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5kGDMl26iJK"}]}]},"NavigationRestrictionNextSlide_6YLDnRFg2WM":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6j8cL4K4Ssd"}}]},"NavigationRestrictionPreviousSlide_6YLDnRFg2WM":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnPrevButtonClick"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pnxanbsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pnxanbsnfns00000000001"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6YLDnRFg2WM"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_604fMObKkBL","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_604fMObKkBL","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"exe_actiongroup","id":"5kGDMl26iJK_CheckAnswered"}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5kGDMl26iJK","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6j8cL4K4Ssd"}}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6YLDnRFg2WM"}]}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":64825,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6AwKc4snwo6"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6S1GCuRZhtn"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6WEPXtPmV7r"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Qn0iTB2cU9"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ef1X4Latpa"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6g7YfdB9FNm"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"655QqXJ7qR1"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6nFcs5BnS9B"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5as0X9JZtsO"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5zqIEaYNqko"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5sxO8upg9LS"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":0,"id":"01","url":"story_content/6hKdpxg88vw_80_DX1440_DY1440.swf","type":"normal","altText":"Light-Bg2.jpg","width":1440,"height":1080,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":270,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":540,"altText":"Light-Bg2.jpg","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":540,"strokewidth":0}},"width":720,"height":540,"resume":true,"useHandCursor":true,"id":"5sxO8upg9LS"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":627,"yPos":164,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":-0.5,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":2,"bottom":53,"altText":"Line 1","pngfb":false,"pr":{"l":"Lib","i":26}},"html5data":{"xPos":-1,"yPos":-1,"width":1,"height":52,"strokewidth":1}},"width":0,"height":51,"resume":true,"useHandCursor":true,"id":"6AwKc4snwo6"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":366,"yPos":173,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":-0.5,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":2,"bottom":53,"altText":"Line 1","pngfb":false,"pr":{"l":"Lib","i":26}},"html5data":{"xPos":-1,"yPos":-1,"width":1,"height":52,"strokewidth":1}},"width":0,"height":51,"resume":true,"useHandCursor":true,"id":"6S1GCuRZhtn"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":109,"yPos":173,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":-0.5,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":2,"bottom":53,"altText":"Line 1","pngfb":false,"pr":{"l":"Lib","i":26}},"html5data":{"xPos":-1,"yPos":-1,"width":1,"height":52,"strokewidth":1}},"width":0,"height":51,"resume":true,"useHandCursor":true,"id":"6WEPXtPmV7r"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6Qn0iTB2cU9_-866195439","id":"01","linkId":"txt__default_6Qn0iTB2cU9","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":165,"bottom":22,"pngfb":false,"pr":{"l":"Lib","i":38}}}],"shapemaskId":"","xPos":151,"yPos":184,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":89.5,"rotateYPos":14,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":90,"snapy":14,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5kGDMl26iJK"],"dragoverids":["_drop_5kGDMl26iJK"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":180,"bottom":29,"altText":"Se nace siendo líder","pngfb":false,"pr":{"l":"Lib","i":37}},"html5data":{"xPos":-1,"yPos":-1,"width":180,"height":29,"strokewidth":0}},"width":179,"height":28,"resume":true,"useHandCursor":true,"id":"6Qn0iTB2cU9","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5ef1X4Latpa_-1070197108","id":"01","linkId":"txt__default_5ef1X4Latpa","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":157,"bottom":24,"pngfb":false,"pr":{"l":"Lib","i":30}}}],"shapemaskId":"","xPos":88,"yPos":96,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":101,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":202,"bottom":50,"altText":"Arrastra tu respuesta ","pngfb":false,"pr":{"l":"Lib","i":39}},"html5data":{"xPos":-1,"yPos":-1,"width":203,"height":51,"strokewidth":0}},"width":202,"height":50,"resume":true,"useHandCursor":true,"id":"5ef1X4Latpa"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6g7YfdB9FNm_745042958","id":"01","linkId":"txt__default_6g7YfdB9FNm","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":275,"bottom":64,"pngfb":false,"pr":{"l":"Lib","i":40}}}],"shapemaskId":"","xPos":47,"yPos":22,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":319,"rotateYPos":45,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":638,"bottom":90,"altText":"¿Tú qué piensas? ","pngfb":false,"pr":{"l":"Lib","i":5}},"html5data":{"xPos":-1,"yPos":-1,"width":639,"height":91,"strokewidth":0}},"width":638,"height":90,"resume":true,"useHandCursor":true,"id":"6g7YfdB9FNm"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":269,"yPos":316,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":96.5,"rotateYPos":105.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":96,"snapy":105,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5kGDMl26iJK"],"dragoverids":["_drop_5kGDMl26iJK"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":193,"bottom":211,"altText":"brain ícono 1","pngfb":false,"pr":{"l":"Lib","i":33}},"html5data":{"xPos":-1,"yPos":-1,"width":194,"height":212,"strokewidth":0}},"width":193,"height":211,"resume":true,"useHandCursor":true,"id":"655QqXJ7qR1"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6nFcs5BnS9B_-1416475011","id":"01","linkId":"txt__default_6nFcs5BnS9B","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":208,"bottom":43,"pngfb":false,"pr":{"l":"Lib","i":42}}}],"shapemaskId":"","xPos":386,"yPos":184,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":111.5,"rotateYPos":23.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":111,"snapy":23,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_5kGDMl26iJK"],"dragoverids":["_drop_5kGDMl26iJK"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":223,"bottom":47,"altText":"Se puede aprender a ser líder","pngfb":false,"pr":{"l":"Lib","i":41}},"html5data":{"xPos":-1,"yPos":-1,"width":224,"height":48,"strokewidth":0}},"width":223,"height":47,"resume":true,"useHandCursor":true,"id":"6nFcs5BnS9B","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5bWEh7HLBKF_1336593907","id":"01","linkId":"txt__default_5as0X9JZtsO","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":91,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":24}}}],"shapemaskId":"","xPos":602,"yPos":491,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":56,"rotateYPos":22,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":114,"bottom":45,"altText":"¡SEGUIR!","pngfb":false,"pr":{"l":"Lib","i":21}},"html5data":{"xPos":-1,"yPos":-1,"width":114,"height":45,"strokewidth":1}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":114,"bottom":45,"altText":"¡SEGUIR!","pngfb":false,"pr":{"l":"Lib","i":21}},"html5data":{"xPos":-2,"yPos":-2,"width":116,"height":47,"strokewidth":1}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":115,"bottom":46,"altText":"¡SEGUIR!","pngfb":false,"pr":{"l":"Lib","i":22}},"html5data":{"xPos":-3,"yPos":-3,"width":118,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":114,"bottom":45,"altText":"¡SEGUIR!","pngfb":false,"pr":{"l":"Lib","i":21}},"html5data":{"xPos":-2,"yPos":-2,"width":116,"height":47,"strokewidth":1}}},{"kind":"state","name":"_default_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":114,"bottom":45,"altText":"¡SEGUIR!","pngfb":false,"pr":{"l":"Lib","i":21}},"html5data":{"xPos":-2,"yPos":-2,"width":116,"height":47,"strokewidth":1}}},{"kind":"state","name":"_default_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":115,"bottom":46,"altText":"¡SEGUIR!","pngfb":false,"pr":{"l":"Lib","i":22}},"html5data":{"xPos":-3,"yPos":-3,"width":118,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":114,"bottom":45,"altText":"¡SEGUIR!","pngfb":false,"pr":{"l":"Lib","i":23}},"html5data":{"xPos":-2,"yPos":-2,"width":116,"height":47,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":114,"bottom":45,"altText":"¡SEGUIR!","pngfb":false,"pr":{"l":"Lib","i":23}},"html5data":{"xPos":-2,"yPos":-2,"width":116,"height":47,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":115,"bottom":46,"altText":"¡SEGUIR!","pngfb":false,"pr":{"l":"Lib","i":22}},"html5data":{"xPos":-3,"yPos":-3,"width":118,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":114,"bottom":45,"altText":"¡SEGUIR!","pngfb":false,"pr":{"l":"Lib","i":23}},"html5data":{"xPos":-2,"yPos":-2,"width":116,"height":47,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":114,"bottom":45,"altText":"¡SEGUIR!","pngfb":false,"pr":{"l":"Lib","i":23}},"html5data":{"xPos":-2,"yPos":-2,"width":116,"height":47,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":115,"bottom":46,"altText":"¡SEGUIR!","pngfb":false,"pr":{"l":"Lib","i":22}},"html5data":{"xPos":-3,"yPos":-3,"width":118,"height":49,"strokewidth":3}}}],"width":112,"height":44,"resume":true,"useHandCursor":true,"id":"5as0X9JZtsO","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetVisitedState","scopeRef":{"type":"string","value":"_this"}},{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.69jkwi4aAQG.6j8cL4K4Ssd"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6gzxgPVrPTh_-1623048907","id":"01","linkId":"txt__default_5zqIEaYNqko","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":77,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":25}}}],"shapemaskId":"","xPos":16,"yPos":480,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":56,"rotateYPos":22,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":114,"bottom":45,"altText":"Atrás","pngfb":false,"pr":{"l":"Lib","i":21}},"html5data":{"xPos":-1,"yPos":-1,"width":114,"height":45,"strokewidth":1}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":114,"bottom":45,"altText":"Atrás","pngfb":false,"pr":{"l":"Lib","i":21}},"html5data":{"xPos":-2,"yPos":-2,"width":116,"height":47,"strokewidth":1}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":115,"bottom":46,"altText":"Atrás","pngfb":false,"pr":{"l":"Lib","i":22}},"html5data":{"xPos":-3,"yPos":-3,"width":118,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":114,"bottom":45,"altText":"Atrás","pngfb":false,"pr":{"l":"Lib","i":21}},"html5data":{"xPos":-2,"yPos":-2,"width":116,"height":47,"strokewidth":1}}},{"kind":"state","name":"_default_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":114,"bottom":45,"altText":"Atrás","pngfb":false,"pr":{"l":"Lib","i":21}},"html5data":{"xPos":-2,"yPos":-2,"width":116,"height":47,"strokewidth":1}}},{"kind":"state","name":"_default_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":115,"bottom":46,"altText":"Atrás","pngfb":false,"pr":{"l":"Lib","i":22}},"html5data":{"xPos":-3,"yPos":-3,"width":118,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":114,"bottom":45,"altText":"Atrás","pngfb":false,"pr":{"l":"Lib","i":23}},"html5data":{"xPos":-2,"yPos":-2,"width":116,"height":47,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":114,"bottom":45,"altText":"Atrás","pngfb":false,"pr":{"l":"Lib","i":23}},"html5data":{"xPos":-2,"yPos":-2,"width":116,"height":47,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":115,"bottom":46,"altText":"Atrás","pngfb":false,"pr":{"l":"Lib","i":22}},"html5data":{"xPos":-3,"yPos":-3,"width":118,"height":49,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":114,"bottom":45,"altText":"Atrás","pngfb":false,"pr":{"l":"Lib","i":23}},"html5data":{"xPos":-2,"yPos":-2,"width":116,"height":47,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":114,"bottom":45,"altText":"Atrás","pngfb":false,"pr":{"l":"Lib","i":23}},"html5data":{"xPos":-2,"yPos":-2,"width":116,"height":47,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":115,"bottom":46,"altText":"Atrás","pngfb":false,"pr":{"l":"Lib","i":22}},"html5data":{"xPos":-3,"yPos":-3,"width":118,"height":49,"strokewidth":3}}}],"width":112,"height":44,"resume":true,"useHandCursor":true,"id":"5zqIEaYNqko","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetVisitedState","scopeRef":{"type":"string","value":"_this"}},{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.69jkwi4aAQG.5aCkzJ49oH3"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');