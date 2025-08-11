gdjs.Scord_95Board_95SCode = {};
gdjs.Scord_95Board_95SCode.localVariables = [];
gdjs.Scord_95Board_95SCode.GDScore_9595Board1Objects1= [];
gdjs.Scord_95Board_95SCode.GDScore_9595Board1Objects2= [];
gdjs.Scord_95Board_95SCode.GDNewTiledSpriteObjects1= [];
gdjs.Scord_95Board_95SCode.GDNewTiledSpriteObjects2= [];
gdjs.Scord_95Board_95SCode.GDScore2Objects1= [];
gdjs.Scord_95Board_95SCode.GDScore2Objects2= [];
gdjs.Scord_95Board_95SCode.GDPlay_9595AgainObjects1= [];
gdjs.Scord_95Board_95SCode.GDPlay_9595AgainObjects2= [];
gdjs.Scord_95Board_95SCode.GDNew_9595RecordObjects1= [];
gdjs.Scord_95Board_95SCode.GDNew_9595RecordObjects2= [];
gdjs.Scord_95Board_95SCode.GDLeafObjects1= [];
gdjs.Scord_95Board_95SCode.GDLeafObjects2= [];
gdjs.Scord_95Board_95SCode.GDPointObjects1= [];
gdjs.Scord_95Board_95SCode.GDPointObjects2= [];
gdjs.Scord_95Board_95SCode.GDleft_9595ButtonObjects1= [];
gdjs.Scord_95Board_95SCode.GDleft_9595ButtonObjects2= [];
gdjs.Scord_95Board_95SCode.GDleftwindObjects1= [];
gdjs.Scord_95Board_95SCode.GDleftwindObjects2= [];
gdjs.Scord_95Board_95SCode.GDrightwindObjects1= [];
gdjs.Scord_95Board_95SCode.GDrightwindObjects2= [];
gdjs.Scord_95Board_95SCode.GDright_9595ButtonObjects1= [];
gdjs.Scord_95Board_95SCode.GDright_9595ButtonObjects2= [];
gdjs.Scord_95Board_95SCode.GDScore_9595TextObjects1= [];
gdjs.Scord_95Board_95SCode.GDScore_9595TextObjects2= [];
gdjs.Scord_95Board_95SCode.GDScore_9595Text2Objects1= [];
gdjs.Scord_95Board_95SCode.GDScore_9595Text2Objects2= [];
gdjs.Scord_95Board_95SCode.GDSakura_9595LeafObjects1= [];
gdjs.Scord_95Board_95SCode.GDSakura_9595LeafObjects2= [];
gdjs.Scord_95Board_95SCode.GDShineObjects1= [];
gdjs.Scord_95Board_95SCode.GDShineObjects2= [];
gdjs.Scord_95Board_95SCode.GDDevil_9595LeftObjects1= [];
gdjs.Scord_95Board_95SCode.GDDevil_9595LeftObjects2= [];
gdjs.Scord_95Board_95SCode.GDDevil_9595DownObjects1= [];
gdjs.Scord_95Board_95SCode.GDDevil_9595DownObjects2= [];
gdjs.Scord_95Board_95SCode.GDDevil_9595RightObjects1= [];
gdjs.Scord_95Board_95SCode.GDDevil_9595RightObjects2= [];
gdjs.Scord_95Board_95SCode.GDWaterObjects1= [];
gdjs.Scord_95Board_95SCode.GDWaterObjects2= [];
gdjs.Scord_95Board_95SCode.GDMachine_9595LeafObjects1= [];
gdjs.Scord_95Board_95SCode.GDMachine_9595LeafObjects2= [];


gdjs.Scord_95Board_95SCode.mapOfGDgdjs_9546Scord_959595Board_959595SCode_9546GDPlay_95959595AgainObjects1Objects = Hashtable.newFrom({"Play_Again": gdjs.Scord_95Board_95SCode.GDPlay_9595AgainObjects1});
gdjs.Scord_95Board_95SCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New_Record"), gdjs.Scord_95Board_95SCode.GDNew_9595RecordObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.Scord_95Board_95SCode.GDScore2Objects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Final_Wind.mp3", false, 200, 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("Game_Data", "HighScore", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}{for(var i = 0, len = gdjs.Scord_95Board_95SCode.GDNew_9595RecordObjects1.length ;i < len;++i) {
    gdjs.Scord_95Board_95SCode.GDNew_9595RecordObjects1[i].setPosition(-(493),128);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Scord_95Board_95SCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.Scord_95Board_95SCode.GDScore2Objects1[i].setPosition(230,487);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() > runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("Game_Data", "HighScore", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() < 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.Scord_95Board_95SCode.GDScore2Objects1);
{for(var i = 0, len = gdjs.Scord_95Board_95SCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.Scord_95Board_95SCode.GDScore2Objects1[i].getBehavior("Text").setText("0" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New_Record"), gdjs.Scord_95Board_95SCode.GDNew_9595RecordObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.Scord_95Board_95SCode.GDScore2Objects1);
{for(var i = 0, len = gdjs.Scord_95Board_95SCode.GDNew_9595RecordObjects1.length ;i < len;++i) {
    gdjs.Scord_95Board_95SCode.GDNew_9595RecordObjects1[i].setPosition(7,365);
}
}{for(var i = 0, len = gdjs.Scord_95Board_95SCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.Scord_95Board_95SCode.GDScore2Objects1[i].getBehavior("Text").setText("0" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.Scord_95Board_95SCode.GDScore2Objects1);
{for(var i = 0, len = gdjs.Scord_95Board_95SCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.Scord_95Board_95SCode.GDScore2Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New_Record"), gdjs.Scord_95Board_95SCode.GDNew_9595RecordObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.Scord_95Board_95SCode.GDScore2Objects1);
{for(var i = 0, len = gdjs.Scord_95Board_95SCode.GDNew_9595RecordObjects1.length ;i < len;++i) {
    gdjs.Scord_95Board_95SCode.GDNew_9595RecordObjects1[i].setPosition(37,338);
}
}{for(var i = 0, len = gdjs.Scord_95Board_95SCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.Scord_95Board_95SCode.GDScore2Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.Scord_95Board_95SCode.GDScore2Objects1);
{for(var i = 0, len = gdjs.Scord_95Board_95SCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.Scord_95Board_95SCode.GDScore2Objects1[i].setPosition(180,487);
}
}{for(var i = 0, len = gdjs.Scord_95Board_95SCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.Scord_95Board_95SCode.GDScore2Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Again"), gdjs.Scord_95Board_95SCode.GDPlay_9595AgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scord_95Board_95SCode.mapOfGDgdjs_9546Scord_959595Board_959595SCode_9546GDPlay_95959595AgainObjects1Objects, runtimeScene, true, false);
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
{
}

}


};

gdjs.Scord_95Board_95SCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scord_95Board_95SCode.GDScore_9595Board1Objects1.length = 0;
gdjs.Scord_95Board_95SCode.GDScore_9595Board1Objects2.length = 0;
gdjs.Scord_95Board_95SCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDScore2Objects1.length = 0;
gdjs.Scord_95Board_95SCode.GDScore2Objects2.length = 0;
gdjs.Scord_95Board_95SCode.GDPlay_9595AgainObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDPlay_9595AgainObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDNew_9595RecordObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDNew_9595RecordObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDLeafObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDLeafObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDPointObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDPointObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDleft_9595ButtonObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDleft_9595ButtonObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDleftwindObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDleftwindObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDrightwindObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDrightwindObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDright_9595ButtonObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDright_9595ButtonObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDScore_9595TextObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDScore_9595TextObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDScore_9595Text2Objects1.length = 0;
gdjs.Scord_95Board_95SCode.GDScore_9595Text2Objects2.length = 0;
gdjs.Scord_95Board_95SCode.GDSakura_9595LeafObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDSakura_9595LeafObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDShineObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDShineObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDDevil_9595LeftObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDDevil_9595LeftObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDDevil_9595DownObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDDevil_9595DownObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDDevil_9595RightObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDDevil_9595RightObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDWaterObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDWaterObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDMachine_9595LeafObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDMachine_9595LeafObjects2.length = 0;

gdjs.Scord_95Board_95SCode.eventsList0(runtimeScene);
gdjs.Scord_95Board_95SCode.GDScore_9595Board1Objects1.length = 0;
gdjs.Scord_95Board_95SCode.GDScore_9595Board1Objects2.length = 0;
gdjs.Scord_95Board_95SCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDScore2Objects1.length = 0;
gdjs.Scord_95Board_95SCode.GDScore2Objects2.length = 0;
gdjs.Scord_95Board_95SCode.GDPlay_9595AgainObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDPlay_9595AgainObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDNew_9595RecordObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDNew_9595RecordObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDLeafObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDLeafObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDPointObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDPointObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDleft_9595ButtonObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDleft_9595ButtonObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDleftwindObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDleftwindObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDrightwindObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDrightwindObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDright_9595ButtonObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDright_9595ButtonObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDScore_9595TextObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDScore_9595TextObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDScore_9595Text2Objects1.length = 0;
gdjs.Scord_95Board_95SCode.GDScore_9595Text2Objects2.length = 0;
gdjs.Scord_95Board_95SCode.GDSakura_9595LeafObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDSakura_9595LeafObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDShineObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDShineObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDDevil_9595LeftObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDDevil_9595LeftObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDDevil_9595DownObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDDevil_9595DownObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDDevil_9595RightObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDDevil_9595RightObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDWaterObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDWaterObjects2.length = 0;
gdjs.Scord_95Board_95SCode.GDMachine_9595LeafObjects1.length = 0;
gdjs.Scord_95Board_95SCode.GDMachine_9595LeafObjects2.length = 0;


return;

}

gdjs['Scord_95Board_95SCode'] = gdjs.Scord_95Board_95SCode;
