gdjs.Sakura_95ScoreCode = {};
gdjs.Sakura_95ScoreCode.localVariables = [];
gdjs.Sakura_95ScoreCode.GDNewSpriteObjects1= [];
gdjs.Sakura_95ScoreCode.GDNewSpriteObjects2= [];
gdjs.Sakura_95ScoreCode.GDNewTiledSpriteObjects1= [];
gdjs.Sakura_95ScoreCode.GDNewTiledSpriteObjects2= [];
gdjs.Sakura_95ScoreCode.GDPlay_9595AgainObjects1= [];
gdjs.Sakura_95ScoreCode.GDPlay_9595AgainObjects2= [];
gdjs.Sakura_95ScoreCode.GDScoreObjects1= [];
gdjs.Sakura_95ScoreCode.GDScoreObjects2= [];
gdjs.Sakura_95ScoreCode.GDNewTiledSprite2Objects1= [];
gdjs.Sakura_95ScoreCode.GDNewTiledSprite2Objects2= [];
gdjs.Sakura_95ScoreCode.GDlightObjects1= [];
gdjs.Sakura_95ScoreCode.GDlightObjects2= [];
gdjs.Sakura_95ScoreCode.GDCarObjects1= [];
gdjs.Sakura_95ScoreCode.GDCarObjects2= [];
gdjs.Sakura_95ScoreCode.GDTireObjects1= [];
gdjs.Sakura_95ScoreCode.GDTireObjects2= [];
gdjs.Sakura_95ScoreCode.GDTire2Objects1= [];
gdjs.Sakura_95ScoreCode.GDTire2Objects2= [];
gdjs.Sakura_95ScoreCode.GDNew_9595RecordObjects1= [];
gdjs.Sakura_95ScoreCode.GDNew_9595RecordObjects2= [];
gdjs.Sakura_95ScoreCode.GDLeafObjects1= [];
gdjs.Sakura_95ScoreCode.GDLeafObjects2= [];
gdjs.Sakura_95ScoreCode.GDPointObjects1= [];
gdjs.Sakura_95ScoreCode.GDPointObjects2= [];
gdjs.Sakura_95ScoreCode.GDleft_9595ButtonObjects1= [];
gdjs.Sakura_95ScoreCode.GDleft_9595ButtonObjects2= [];
gdjs.Sakura_95ScoreCode.GDleftwindObjects1= [];
gdjs.Sakura_95ScoreCode.GDleftwindObjects2= [];
gdjs.Sakura_95ScoreCode.GDrightwindObjects1= [];
gdjs.Sakura_95ScoreCode.GDrightwindObjects2= [];
gdjs.Sakura_95ScoreCode.GDright_9595ButtonObjects1= [];
gdjs.Sakura_95ScoreCode.GDright_9595ButtonObjects2= [];
gdjs.Sakura_95ScoreCode.GDScore_9595TextObjects1= [];
gdjs.Sakura_95ScoreCode.GDScore_9595TextObjects2= [];
gdjs.Sakura_95ScoreCode.GDScore_9595Text2Objects1= [];
gdjs.Sakura_95ScoreCode.GDScore_9595Text2Objects2= [];
gdjs.Sakura_95ScoreCode.GDSakura_9595LeafObjects1= [];
gdjs.Sakura_95ScoreCode.GDSakura_9595LeafObjects2= [];
gdjs.Sakura_95ScoreCode.GDShineObjects1= [];
gdjs.Sakura_95ScoreCode.GDShineObjects2= [];
gdjs.Sakura_95ScoreCode.GDDevil_9595LeftObjects1= [];
gdjs.Sakura_95ScoreCode.GDDevil_9595LeftObjects2= [];
gdjs.Sakura_95ScoreCode.GDDevil_9595DownObjects1= [];
gdjs.Sakura_95ScoreCode.GDDevil_9595DownObjects2= [];
gdjs.Sakura_95ScoreCode.GDDevil_9595RightObjects1= [];
gdjs.Sakura_95ScoreCode.GDDevil_9595RightObjects2= [];
gdjs.Sakura_95ScoreCode.GDWaterObjects1= [];
gdjs.Sakura_95ScoreCode.GDWaterObjects2= [];
gdjs.Sakura_95ScoreCode.GDMachine_9595LeafObjects1= [];
gdjs.Sakura_95ScoreCode.GDMachine_9595LeafObjects2= [];


gdjs.Sakura_95ScoreCode.mapOfGDgdjs_9546Sakura_959595ScoreCode_9546GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs.Sakura_95ScoreCode.GDCarObjects1});
gdjs.Sakura_95ScoreCode.mapOfGDgdjs_9546Sakura_959595ScoreCode_9546GDPlay_95959595AgainObjects1Objects = Hashtable.newFrom({"Play_Again": gdjs.Sakura_95ScoreCode.GDPlay_9595AgainObjects1});
gdjs.Sakura_95ScoreCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.Sakura_95ScoreCode.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("New_Record"), gdjs.Sakura_95ScoreCode.GDNew_9595RecordObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Sakura_95ScoreCode.GDScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tire"), gdjs.Sakura_95ScoreCode.GDTireObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tire2"), gdjs.Sakura_95ScoreCode.GDTire2Objects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "3ce9d14f25a45b613cbf0f6c2f3eddbd.mp3", false, 200, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "light_falsh");
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDCarObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDTireObjects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDTireObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDTire2Objects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDTire2Objects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDCarObjects1[i].setPosition(-(643),601);
}
}{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDTireObjects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDTireObjects1[i].setPosition((( gdjs.Sakura_95ScoreCode.GDCarObjects1.length === 0 ) ? 0 :gdjs.Sakura_95ScoreCode.GDCarObjects1[0].getPointX("")) + 112,(( gdjs.Sakura_95ScoreCode.GDCarObjects1.length === 0 ) ? 0 :gdjs.Sakura_95ScoreCode.GDCarObjects1[0].getPointY("")) + 258);
}
}{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDTire2Objects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDTire2Objects1[i].setPosition((( gdjs.Sakura_95ScoreCode.GDCarObjects1.length === 0 ) ? 0 :gdjs.Sakura_95ScoreCode.GDCarObjects1[0].getPointX("")) + 461,(( gdjs.Sakura_95ScoreCode.GDCarObjects1.length === 0 ) ? 0 :gdjs.Sakura_95ScoreCode.GDCarObjects1[0].getPointY("")) + 260);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDScoreObjects1[i].setPosition(293,412);
}
}{gdjs.evtTools.storage.readNumberFromJSONFile("Game_Data", "HighScore", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDNew_9595RecordObjects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDNew_9595RecordObjects1[i].setPosition(-(493),128);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.Sakura_95ScoreCode.GDCarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sakura_95ScoreCode.mapOfGDgdjs_9546Sakura_959595ScoreCode_9546GDCarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Horn.mp3", false, 300, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("light"), gdjs.Sakura_95ScoreCode.GDlightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "light_falsh") >= 0.8;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sakura_95ScoreCode.GDlightObjects1.length;i<l;++i) {
    if ( gdjs.Sakura_95ScoreCode.GDlightObjects1[i].getBehavior("Tween").getProgress("fadeout") != 225 ) {
        isConditionTrue_0 = true;
        gdjs.Sakura_95ScoreCode.GDlightObjects1[k] = gdjs.Sakura_95ScoreCode.GDlightObjects1[i];
        ++k;
    }
}
gdjs.Sakura_95ScoreCode.GDlightObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sakura_95ScoreCode.GDlightObjects1 */
{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDlightObjects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDlightObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 225, "linear", 0.5, false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "light_falsh");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("light"), gdjs.Sakura_95ScoreCode.GDlightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "light_falsh") >= 0.8;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sakura_95ScoreCode.GDlightObjects1.length;i<l;++i) {
    if ( gdjs.Sakura_95ScoreCode.GDlightObjects1[i].getBehavior("Tween").getProgress("fadeout") == 225 ) {
        isConditionTrue_0 = true;
        gdjs.Sakura_95ScoreCode.GDlightObjects1[k] = gdjs.Sakura_95ScoreCode.GDlightObjects1[i];
        ++k;
    }
}
gdjs.Sakura_95ScoreCode.GDlightObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sakura_95ScoreCode.GDlightObjects1 */
{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDlightObjects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDlightObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "linear", 0.5, false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "light_falsh");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Again"), gdjs.Sakura_95ScoreCode.GDPlay_9595AgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Sakura_95ScoreCode.mapOfGDgdjs_9546Sakura_959595ScoreCode_9546GDPlay_95959595AgainObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Beginning", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() > runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("Game_Data", "HighScore", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() < 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New_Record"), gdjs.Sakura_95ScoreCode.GDNew_9595RecordObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Sakura_95ScoreCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDNew_9595RecordObjects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDNew_9595RecordObjects1[i].setPosition(266,219);
}
}{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDScoreObjects1[i].getBehavior("Text").setText("0" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() < 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Sakura_95ScoreCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDScoreObjects1[i].getBehavior("Text").setText("0" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() < 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New_Record"), gdjs.Sakura_95ScoreCode.GDNew_9595RecordObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Sakura_95ScoreCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDNew_9595RecordObjects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDNew_9595RecordObjects1[i].setPosition(266,219);
}
}{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDScoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() < 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Sakura_95ScoreCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDScoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() >= 100);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New_Record"), gdjs.Sakura_95ScoreCode.GDNew_9595RecordObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Sakura_95ScoreCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDScoreObjects1[i].setPosition(252,412);
}
}{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDNew_9595RecordObjects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDNew_9595RecordObjects1[i].setPosition(266,219);
}
}{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDScoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() >= 100);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Sakura_95ScoreCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDScoreObjects1[i].setPosition(252,412);
}
}{for(var i = 0, len = gdjs.Sakura_95ScoreCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Sakura_95ScoreCode.GDScoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


};

gdjs.Sakura_95ScoreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sakura_95ScoreCode.GDNewSpriteObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDNewSpriteObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDPlay_9595AgainObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDPlay_9595AgainObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDScoreObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDScoreObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Sakura_95ScoreCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.Sakura_95ScoreCode.GDlightObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDlightObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDCarObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDCarObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDTireObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDTireObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDTire2Objects1.length = 0;
gdjs.Sakura_95ScoreCode.GDTire2Objects2.length = 0;
gdjs.Sakura_95ScoreCode.GDNew_9595RecordObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDNew_9595RecordObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDLeafObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDLeafObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDPointObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDPointObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDleft_9595ButtonObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDleft_9595ButtonObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDleftwindObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDleftwindObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDrightwindObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDrightwindObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDright_9595ButtonObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDright_9595ButtonObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDScore_9595TextObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDScore_9595TextObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDScore_9595Text2Objects1.length = 0;
gdjs.Sakura_95ScoreCode.GDScore_9595Text2Objects2.length = 0;
gdjs.Sakura_95ScoreCode.GDSakura_9595LeafObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDSakura_9595LeafObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDShineObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDShineObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDDevil_9595LeftObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDDevil_9595LeftObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDDevil_9595DownObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDDevil_9595DownObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDDevil_9595RightObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDDevil_9595RightObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDWaterObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDWaterObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDMachine_9595LeafObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDMachine_9595LeafObjects2.length = 0;

gdjs.Sakura_95ScoreCode.eventsList0(runtimeScene);
gdjs.Sakura_95ScoreCode.GDNewSpriteObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDNewSpriteObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDPlay_9595AgainObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDPlay_9595AgainObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDScoreObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDScoreObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Sakura_95ScoreCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.Sakura_95ScoreCode.GDlightObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDlightObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDCarObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDCarObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDTireObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDTireObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDTire2Objects1.length = 0;
gdjs.Sakura_95ScoreCode.GDTire2Objects2.length = 0;
gdjs.Sakura_95ScoreCode.GDNew_9595RecordObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDNew_9595RecordObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDLeafObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDLeafObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDPointObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDPointObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDleft_9595ButtonObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDleft_9595ButtonObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDleftwindObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDleftwindObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDrightwindObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDrightwindObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDright_9595ButtonObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDright_9595ButtonObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDScore_9595TextObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDScore_9595TextObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDScore_9595Text2Objects1.length = 0;
gdjs.Sakura_95ScoreCode.GDScore_9595Text2Objects2.length = 0;
gdjs.Sakura_95ScoreCode.GDSakura_9595LeafObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDSakura_9595LeafObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDShineObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDShineObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDDevil_9595LeftObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDDevil_9595LeftObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDDevil_9595DownObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDDevil_9595DownObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDDevil_9595RightObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDDevil_9595RightObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDWaterObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDWaterObjects2.length = 0;
gdjs.Sakura_95ScoreCode.GDMachine_9595LeafObjects1.length = 0;
gdjs.Sakura_95ScoreCode.GDMachine_9595LeafObjects2.length = 0;


return;

}

gdjs['Sakura_95ScoreCode'] = gdjs.Sakura_95ScoreCode;
