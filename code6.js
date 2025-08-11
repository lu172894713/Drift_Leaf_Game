gdjs.Desert_95ScoreCode = {};
gdjs.Desert_95ScoreCode.localVariables = [];
gdjs.Desert_95ScoreCode.GDNewTiledSpriteObjects1= [];
gdjs.Desert_95ScoreCode.GDNewTiledSpriteObjects2= [];
gdjs.Desert_95ScoreCode.GDMummyObjects1= [];
gdjs.Desert_95ScoreCode.GDMummyObjects2= [];
gdjs.Desert_95ScoreCode.GDPlay_9595AgainObjects1= [];
gdjs.Desert_95ScoreCode.GDPlay_9595AgainObjects2= [];
gdjs.Desert_95ScoreCode.GDHandObjects1= [];
gdjs.Desert_95ScoreCode.GDHandObjects2= [];
gdjs.Desert_95ScoreCode.GDNew_9595RecordObjects1= [];
gdjs.Desert_95ScoreCode.GDNew_9595RecordObjects2= [];
gdjs.Desert_95ScoreCode.GDScore2Objects1= [];
gdjs.Desert_95ScoreCode.GDScore2Objects2= [];
gdjs.Desert_95ScoreCode.GDLeafObjects1= [];
gdjs.Desert_95ScoreCode.GDLeafObjects2= [];
gdjs.Desert_95ScoreCode.GDPointObjects1= [];
gdjs.Desert_95ScoreCode.GDPointObjects2= [];
gdjs.Desert_95ScoreCode.GDleft_9595ButtonObjects1= [];
gdjs.Desert_95ScoreCode.GDleft_9595ButtonObjects2= [];
gdjs.Desert_95ScoreCode.GDleftwindObjects1= [];
gdjs.Desert_95ScoreCode.GDleftwindObjects2= [];
gdjs.Desert_95ScoreCode.GDrightwindObjects1= [];
gdjs.Desert_95ScoreCode.GDrightwindObjects2= [];
gdjs.Desert_95ScoreCode.GDright_9595ButtonObjects1= [];
gdjs.Desert_95ScoreCode.GDright_9595ButtonObjects2= [];
gdjs.Desert_95ScoreCode.GDScore_9595TextObjects1= [];
gdjs.Desert_95ScoreCode.GDScore_9595TextObjects2= [];
gdjs.Desert_95ScoreCode.GDScore_9595Text2Objects1= [];
gdjs.Desert_95ScoreCode.GDScore_9595Text2Objects2= [];
gdjs.Desert_95ScoreCode.GDSakura_9595LeafObjects1= [];
gdjs.Desert_95ScoreCode.GDSakura_9595LeafObjects2= [];
gdjs.Desert_95ScoreCode.GDShineObjects1= [];
gdjs.Desert_95ScoreCode.GDShineObjects2= [];
gdjs.Desert_95ScoreCode.GDDevil_9595LeftObjects1= [];
gdjs.Desert_95ScoreCode.GDDevil_9595LeftObjects2= [];
gdjs.Desert_95ScoreCode.GDDevil_9595DownObjects1= [];
gdjs.Desert_95ScoreCode.GDDevil_9595DownObjects2= [];
gdjs.Desert_95ScoreCode.GDDevil_9595RightObjects1= [];
gdjs.Desert_95ScoreCode.GDDevil_9595RightObjects2= [];
gdjs.Desert_95ScoreCode.GDWaterObjects1= [];
gdjs.Desert_95ScoreCode.GDWaterObjects2= [];
gdjs.Desert_95ScoreCode.GDMachine_9595LeafObjects1= [];
gdjs.Desert_95ScoreCode.GDMachine_9595LeafObjects2= [];


gdjs.Desert_95ScoreCode.asyncCallback13886972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Desert_95ScoreCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Hand"), gdjs.Desert_95ScoreCode.GDHandObjects2);

{for(var i = 0, len = gdjs.Desert_95ScoreCode.GDHandObjects2.length ;i < len;++i) {
    gdjs.Desert_95ScoreCode.GDHandObjects2[i].getBehavior("Tween").addObjectPositionYTween2("Upping", 1281, "easeInOutQuad", 4, false);
}
}gdjs.Desert_95ScoreCode.localVariables.length = 0;
}
gdjs.Desert_95ScoreCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Desert_95ScoreCode.localVariables);
for (const obj of gdjs.Desert_95ScoreCode.GDHandObjects1) asyncObjectsList.addObject("Hand", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Desert_95ScoreCode.asyncCallback13886972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Desert_95ScoreCode.mapOfGDgdjs_9546Desert_959595ScoreCode_9546GDHandObjects1Objects = Hashtable.newFrom({"Hand": gdjs.Desert_95ScoreCode.GDHandObjects1});
gdjs.Desert_95ScoreCode.mapOfGDgdjs_9546Desert_959595ScoreCode_9546GDPlay_95959595AgainObjects1Objects = Hashtable.newFrom({"Play_Again": gdjs.Desert_95ScoreCode.GDPlay_9595AgainObjects1});
gdjs.Desert_95ScoreCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hand"), gdjs.Desert_95ScoreCode.GDHandObjects1);
gdjs.copyArray(runtimeScene.getObjects("New_Record"), gdjs.Desert_95ScoreCode.GDNew_9595RecordObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.Desert_95ScoreCode.GDScore2Objects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Final_Wind.mp3", false, 200, 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("Game_Data", "HighScore", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Desert_95ScoreCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.Desert_95ScoreCode.GDScore2Objects1[i].setPosition(367,235);
}
}{for(var i = 0, len = gdjs.Desert_95ScoreCode.GDHandObjects1.length ;i < len;++i) {
    gdjs.Desert_95ScoreCode.GDHandObjects1[i].setPosition(44,1281);
}
}{for(var i = 0, len = gdjs.Desert_95ScoreCode.GDNew_9595RecordObjects1.length ;i < len;++i) {
    gdjs.Desert_95ScoreCode.GDNew_9595RecordObjects1[i].setPosition(-(493),128);
}
}{for(var i = 0, len = gdjs.Desert_95ScoreCode.GDHandObjects1.length ;i < len;++i) {
    gdjs.Desert_95ScoreCode.GDHandObjects1[i].getBehavior("Tween").addObjectPositionYTween2("Upping", 881, "easeInOutQuad", 0.5, false);
}
}
{ //Subevents
gdjs.Desert_95ScoreCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hand"), gdjs.Desert_95ScoreCode.GDHandObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Desert_95ScoreCode.mapOfGDgdjs_9546Desert_959595ScoreCode_9546GDHandObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Mummy.mp3", false, 300, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
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
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.Desert_95ScoreCode.GDScore2Objects1);
{for(var i = 0, len = gdjs.Desert_95ScoreCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.Desert_95ScoreCode.GDScore2Objects1[i].getBehavior("Text").setText("0" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
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
gdjs.copyArray(runtimeScene.getObjects("New_Record"), gdjs.Desert_95ScoreCode.GDNew_9595RecordObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.Desert_95ScoreCode.GDScore2Objects1);
{for(var i = 0, len = gdjs.Desert_95ScoreCode.GDNew_9595RecordObjects1.length ;i < len;++i) {
    gdjs.Desert_95ScoreCode.GDNew_9595RecordObjects1[i].setPosition(296,-(28));
}
}{for(var i = 0, len = gdjs.Desert_95ScoreCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.Desert_95ScoreCode.GDScore2Objects1[i].getBehavior("Text").setText("0" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
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
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.Desert_95ScoreCode.GDScore2Objects1);
{for(var i = 0, len = gdjs.Desert_95ScoreCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.Desert_95ScoreCode.GDScore2Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
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
gdjs.copyArray(runtimeScene.getObjects("New_Record"), gdjs.Desert_95ScoreCode.GDNew_9595RecordObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.Desert_95ScoreCode.GDScore2Objects1);
{for(var i = 0, len = gdjs.Desert_95ScoreCode.GDNew_9595RecordObjects1.length ;i < len;++i) {
    gdjs.Desert_95ScoreCode.GDNew_9595RecordObjects1[i].setPosition(296,-(28));
}
}{for(var i = 0, len = gdjs.Desert_95ScoreCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.Desert_95ScoreCode.GDScore2Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
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
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.Desert_95ScoreCode.GDScore2Objects1);
{for(var i = 0, len = gdjs.Desert_95ScoreCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.Desert_95ScoreCode.GDScore2Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New_Record"), gdjs.Desert_95ScoreCode.GDNew_9595RecordObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.Desert_95ScoreCode.GDScore2Objects1);
{for(var i = 0, len = gdjs.Desert_95ScoreCode.GDNew_9595RecordObjects1.length ;i < len;++i) {
    gdjs.Desert_95ScoreCode.GDNew_9595RecordObjects1[i].setPosition(296,-(28));
}
}{for(var i = 0, len = gdjs.Desert_95ScoreCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.Desert_95ScoreCode.GDScore2Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Again"), gdjs.Desert_95ScoreCode.GDPlay_9595AgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Desert_95ScoreCode.mapOfGDgdjs_9546Desert_959595ScoreCode_9546GDPlay_95959595AgainObjects1Objects, runtimeScene, true, false);
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


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Desert_95ScoreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Desert_95ScoreCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDMummyObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDMummyObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDPlay_9595AgainObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDPlay_9595AgainObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDHandObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDHandObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDNew_9595RecordObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDNew_9595RecordObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDScore2Objects1.length = 0;
gdjs.Desert_95ScoreCode.GDScore2Objects2.length = 0;
gdjs.Desert_95ScoreCode.GDLeafObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDLeafObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDPointObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDPointObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDleft_9595ButtonObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDleft_9595ButtonObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDleftwindObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDleftwindObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDrightwindObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDrightwindObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDright_9595ButtonObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDright_9595ButtonObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDScore_9595TextObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDScore_9595TextObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDScore_9595Text2Objects1.length = 0;
gdjs.Desert_95ScoreCode.GDScore_9595Text2Objects2.length = 0;
gdjs.Desert_95ScoreCode.GDSakura_9595LeafObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDSakura_9595LeafObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDShineObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDShineObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDDevil_9595LeftObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDDevil_9595LeftObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDDevil_9595DownObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDDevil_9595DownObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDDevil_9595RightObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDDevil_9595RightObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDWaterObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDWaterObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDMachine_9595LeafObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDMachine_9595LeafObjects2.length = 0;

gdjs.Desert_95ScoreCode.eventsList1(runtimeScene);
gdjs.Desert_95ScoreCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDMummyObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDMummyObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDPlay_9595AgainObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDPlay_9595AgainObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDHandObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDHandObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDNew_9595RecordObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDNew_9595RecordObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDScore2Objects1.length = 0;
gdjs.Desert_95ScoreCode.GDScore2Objects2.length = 0;
gdjs.Desert_95ScoreCode.GDLeafObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDLeafObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDPointObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDPointObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDleft_9595ButtonObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDleft_9595ButtonObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDleftwindObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDleftwindObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDrightwindObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDrightwindObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDright_9595ButtonObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDright_9595ButtonObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDScore_9595TextObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDScore_9595TextObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDScore_9595Text2Objects1.length = 0;
gdjs.Desert_95ScoreCode.GDScore_9595Text2Objects2.length = 0;
gdjs.Desert_95ScoreCode.GDSakura_9595LeafObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDSakura_9595LeafObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDShineObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDShineObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDDevil_9595LeftObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDDevil_9595LeftObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDDevil_9595DownObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDDevil_9595DownObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDDevil_9595RightObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDDevil_9595RightObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDWaterObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDWaterObjects2.length = 0;
gdjs.Desert_95ScoreCode.GDMachine_9595LeafObjects1.length = 0;
gdjs.Desert_95ScoreCode.GDMachine_9595LeafObjects2.length = 0;


return;

}

gdjs['Desert_95ScoreCode'] = gdjs.Desert_95ScoreCode;
