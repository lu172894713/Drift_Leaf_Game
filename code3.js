gdjs.SakuraCode = {};
gdjs.SakuraCode.localVariables = [];
gdjs.SakuraCode.GDFish2Objects1_2final = [];

gdjs.SakuraCode.GDFishObjects1_2final = [];

gdjs.SakuraCode.GDLeafObjects1_2final = [];

gdjs.SakuraCode.GDPointObjects1_2final = [];

gdjs.SakuraCode.GDWall2Objects1_2final = [];

gdjs.SakuraCode.GDWallObjects1_2final = [];

gdjs.SakuraCode.GDNewTiledSpriteObjects1= [];
gdjs.SakuraCode.GDNewTiledSpriteObjects2= [];
gdjs.SakuraCode.GDNewTiledSpriteObjects3= [];
gdjs.SakuraCode.GDBrach1Objects1= [];
gdjs.SakuraCode.GDBrach1Objects2= [];
gdjs.SakuraCode.GDBrach1Objects3= [];
gdjs.SakuraCode.GDFishObjects1= [];
gdjs.SakuraCode.GDFishObjects2= [];
gdjs.SakuraCode.GDFishObjects3= [];
gdjs.SakuraCode.GDFish2Objects1= [];
gdjs.SakuraCode.GDFish2Objects2= [];
gdjs.SakuraCode.GDFish2Objects3= [];
gdjs.SakuraCode.GDBirdObjects1= [];
gdjs.SakuraCode.GDBirdObjects2= [];
gdjs.SakuraCode.GDBirdObjects3= [];
gdjs.SakuraCode.GDWallObjects1= [];
gdjs.SakuraCode.GDWallObjects2= [];
gdjs.SakuraCode.GDWallObjects3= [];
gdjs.SakuraCode.GDWaveObjects1= [];
gdjs.SakuraCode.GDWaveObjects2= [];
gdjs.SakuraCode.GDWaveObjects3= [];
gdjs.SakuraCode.GDWall2Objects1= [];
gdjs.SakuraCode.GDWall2Objects2= [];
gdjs.SakuraCode.GDWall2Objects3= [];
gdjs.SakuraCode.GDGateObjects1= [];
gdjs.SakuraCode.GDGateObjects2= [];
gdjs.SakuraCode.GDGateObjects3= [];
gdjs.SakuraCode.GDFadeInObjects1= [];
gdjs.SakuraCode.GDFadeInObjects2= [];
gdjs.SakuraCode.GDFadeInObjects3= [];
gdjs.SakuraCode.GDFadeIn2Objects1= [];
gdjs.SakuraCode.GDFadeIn2Objects2= [];
gdjs.SakuraCode.GDFadeIn2Objects3= [];
gdjs.SakuraCode.GDLeafObjects1= [];
gdjs.SakuraCode.GDLeafObjects2= [];
gdjs.SakuraCode.GDLeafObjects3= [];
gdjs.SakuraCode.GDPointObjects1= [];
gdjs.SakuraCode.GDPointObjects2= [];
gdjs.SakuraCode.GDPointObjects3= [];
gdjs.SakuraCode.GDleft_9595ButtonObjects1= [];
gdjs.SakuraCode.GDleft_9595ButtonObjects2= [];
gdjs.SakuraCode.GDleft_9595ButtonObjects3= [];
gdjs.SakuraCode.GDleftwindObjects1= [];
gdjs.SakuraCode.GDleftwindObjects2= [];
gdjs.SakuraCode.GDleftwindObjects3= [];
gdjs.SakuraCode.GDrightwindObjects1= [];
gdjs.SakuraCode.GDrightwindObjects2= [];
gdjs.SakuraCode.GDrightwindObjects3= [];
gdjs.SakuraCode.GDright_9595ButtonObjects1= [];
gdjs.SakuraCode.GDright_9595ButtonObjects2= [];
gdjs.SakuraCode.GDright_9595ButtonObjects3= [];
gdjs.SakuraCode.GDScore_9595TextObjects1= [];
gdjs.SakuraCode.GDScore_9595TextObjects2= [];
gdjs.SakuraCode.GDScore_9595TextObjects3= [];
gdjs.SakuraCode.GDScore_9595Text2Objects1= [];
gdjs.SakuraCode.GDScore_9595Text2Objects2= [];
gdjs.SakuraCode.GDScore_9595Text2Objects3= [];
gdjs.SakuraCode.GDSakura_9595LeafObjects1= [];
gdjs.SakuraCode.GDSakura_9595LeafObjects2= [];
gdjs.SakuraCode.GDSakura_9595LeafObjects3= [];
gdjs.SakuraCode.GDShineObjects1= [];
gdjs.SakuraCode.GDShineObjects2= [];
gdjs.SakuraCode.GDShineObjects3= [];
gdjs.SakuraCode.GDDevil_9595LeftObjects1= [];
gdjs.SakuraCode.GDDevil_9595LeftObjects2= [];
gdjs.SakuraCode.GDDevil_9595LeftObjects3= [];
gdjs.SakuraCode.GDDevil_9595DownObjects1= [];
gdjs.SakuraCode.GDDevil_9595DownObjects2= [];
gdjs.SakuraCode.GDDevil_9595DownObjects3= [];
gdjs.SakuraCode.GDDevil_9595RightObjects1= [];
gdjs.SakuraCode.GDDevil_9595RightObjects2= [];
gdjs.SakuraCode.GDDevil_9595RightObjects3= [];
gdjs.SakuraCode.GDWaterObjects1= [];
gdjs.SakuraCode.GDWaterObjects2= [];
gdjs.SakuraCode.GDWaterObjects3= [];
gdjs.SakuraCode.GDMachine_9595LeafObjects1= [];
gdjs.SakuraCode.GDMachine_9595LeafObjects2= [];
gdjs.SakuraCode.GDMachine_9595LeafObjects3= [];


gdjs.SakuraCode.asyncCallback13618756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SakuraCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects2);

{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects2.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects2[i].getBehavior("Animation").setAnimationName("Leaf_L");
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Sakura_Skin");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Sakura_Time");
}gdjs.SakuraCode.localVariables.length = 0;
}
gdjs.SakuraCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SakuraCode.localVariables);
for (const obj of gdjs.SakuraCode.GDLeafObjects1) asyncObjectsList.addObject("Leaf", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.SakuraCode.asyncCallback13618756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects1Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDSakura_95959595LeafObjects1Objects = Hashtable.newFrom({"Sakura_Leaf": gdjs.SakuraCode.GDSakura_9595LeafObjects1});
gdjs.SakuraCode.asyncCallback13626988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SakuraCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.SakuraCode.GDFishObjects2);
gdjs.copyArray(runtimeScene.getObjects("Fish2"), gdjs.SakuraCode.GDFish2Objects2);
gdjs.copyArray(asyncObjectsList.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects2);

gdjs.copyArray(runtimeScene.getObjects("Point"), gdjs.SakuraCode.GDPointObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("Wave"), gdjs.SakuraCode.GDWaveObjects2);

{for(var i = 0, len = gdjs.SakuraCode.GDFishObjects2.length ;i < len;++i) {
    gdjs.SakuraCode.GDFishObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDFish2Objects2.length ;i < len;++i) {
    gdjs.SakuraCode.GDFish2Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDPointObjects2.length ;i < len;++i) {
    gdjs.SakuraCode.GDPointObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDWaveObjects2.length ;i < len;++i) {
    gdjs.SakuraCode.GDWaveObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDWaveObjects2.length ;i < len;++i) {
    gdjs.SakuraCode.GDWaveObjects2[i].setPosition(-(69),17);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDWaveObjects2.length ;i < len;++i) {
    gdjs.SakuraCode.GDWaveObjects2[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "linear", 2.5, false);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects2.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects2[i].getBehavior("Animation").setAnimationName("Sakura_L");
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Sakura_Skin");
}gdjs.SakuraCode.localVariables.length = 0;
}
gdjs.SakuraCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SakuraCode.localVariables);
for (const obj of gdjs.SakuraCode.GDLeafObjects1) asyncObjectsList.addObject("Leaf", obj);
for (const obj of gdjs.SakuraCode.GDWaveObjects1) asyncObjectsList.addObject("Wave", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.SakuraCode.asyncCallback13626988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDleft_95959595ButtonObjects1Objects = Hashtable.newFrom({"left_Button": gdjs.SakuraCode.GDleft_9595ButtonObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDright_95959595ButtonObjects1Objects = Hashtable.newFrom({"right_Button": gdjs.SakuraCode.GDright_9595ButtonObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDleft_95959595ButtonObjects1Objects = Hashtable.newFrom({"left_Button": gdjs.SakuraCode.GDleft_9595ButtonObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDleft_95959595ButtonObjects1Objects = Hashtable.newFrom({"left_Button": gdjs.SakuraCode.GDleft_9595ButtonObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDright_95959595ButtonObjects1Objects = Hashtable.newFrom({"right_Button": gdjs.SakuraCode.GDright_9595ButtonObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDright_95959595ButtonObjects1Objects = Hashtable.newFrom({"right_Button": gdjs.SakuraCode.GDright_9595ButtonObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects1Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFish2Objects1Objects = Hashtable.newFrom({"Fish2": gdjs.SakuraCode.GDFish2Objects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects1Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.SakuraCode.GDWallObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects1Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFishObjects1Objects = Hashtable.newFrom({"Fish": gdjs.SakuraCode.GDFishObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects1Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDWall2Objects1Objects = Hashtable.newFrom({"Wall2": gdjs.SakuraCode.GDWall2Objects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFishObjects2Objects = Hashtable.newFrom({"Fish": gdjs.SakuraCode.GDFishObjects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFish2Objects2Objects = Hashtable.newFrom({"Fish2": gdjs.SakuraCode.GDFish2Objects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.SakuraCode.GDWallObjects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDWall2Objects2Objects = Hashtable.newFrom({"Wall2": gdjs.SakuraCode.GDWall2Objects2});
gdjs.SakuraCode.asyncCallback13662724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SakuraCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sakura_Score", false);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Servie");
}gdjs.SakuraCode.localVariables.length = 0;
}
gdjs.SakuraCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SakuraCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.SakuraCode.asyncCallback13662724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFishObjects2Objects = Hashtable.newFrom({"Fish": gdjs.SakuraCode.GDFishObjects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFish2Objects2Objects = Hashtable.newFrom({"Fish2": gdjs.SakuraCode.GDFish2Objects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.SakuraCode.GDWallObjects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDWall2Objects2Objects = Hashtable.newFrom({"Wall2": gdjs.SakuraCode.GDWall2Objects2});
gdjs.SakuraCode.asyncCallback13666500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SakuraCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sakura_Score", false);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Servie");
}gdjs.SakuraCode.localVariables.length = 0;
}
gdjs.SakuraCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SakuraCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.SakuraCode.asyncCallback13666500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFishObjects2Objects = Hashtable.newFrom({"Fish": gdjs.SakuraCode.GDFishObjects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDPointObjects2Objects = Hashtable.newFrom({"Point": gdjs.SakuraCode.GDPointObjects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFish2Objects2Objects = Hashtable.newFrom({"Fish2": gdjs.SakuraCode.GDFish2Objects2});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects1Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDPointObjects1Objects = Hashtable.newFrom({"Point": gdjs.SakuraCode.GDPointObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects1Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.SakuraCode.GDWallObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects1Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDWall2Objects1Objects = Hashtable.newFrom({"Wall2": gdjs.SakuraCode.GDWall2Objects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects1Objects = Hashtable.newFrom({"Leaf": gdjs.SakuraCode.GDLeafObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDGateObjects1Objects = Hashtable.newFrom({"Gate": gdjs.SakuraCode.GDGateObjects1});
gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFadeInObjects2Objects = Hashtable.newFrom({"FadeIn": gdjs.SakuraCode.GDFadeInObjects2});
gdjs.SakuraCode.asyncCallback13677156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SakuraCode.localVariables);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Servie");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Desert", false);
}gdjs.SakuraCode.localVariables.length = 0;
}
gdjs.SakuraCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SakuraCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.SakuraCode.asyncCallback13677156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFadeIn2Objects1Objects = Hashtable.newFrom({"FadeIn2": gdjs.SakuraCode.GDFadeIn2Objects1});
gdjs.SakuraCode.asyncCallback13679236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SakuraCode.localVariables);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Servie");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}gdjs.SakuraCode.localVariables.length = 0;
}
gdjs.SakuraCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SakuraCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.SakuraCode.asyncCallback13679236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SakuraCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.SakuraCode.GDFadeInObjects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Egypt2.mp3", false, 2000, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFadeInObjects2Objects, -(160), -(32), "");
}{for(var i = 0, len = gdjs.SakuraCode.GDFadeInObjects2.length ;i < len;++i) {
    gdjs.SakuraCode.GDFadeInObjects2[i].getBehavior("Tween").addObjectScaleTween3("fadeout1", 780, "easeInQuad", 2, false, true);
}
}
{ //Subevents
gdjs.SakuraCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.SakuraCode.GDFadeIn2Objects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Forest_Shift.mp3", false, 2000, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFadeIn2Objects1Objects, -(160), -(32), "");
}{for(var i = 0, len = gdjs.SakuraCode.GDFadeIn2Objects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDFadeIn2Objects1[i].getBehavior("Tween").addObjectScaleTween3("fadeout1", 780, "easeInQuad", 2, false, true);
}
}
{ //Subevents
gdjs.SakuraCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.SakuraCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score_Text"), gdjs.SakuraCode.GDScore_9595TextObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "JP Town Sound.mp3", true, 20, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Branch");
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Servie");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Sakura_Time");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Gate_Time");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Sakura_Skin");
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.SakuraCode.GDScore_9595TextObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDScore_9595TextObjects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Sakura_Skin") >= 10;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);
{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].getBehavior("Animation").setAnimationName("Transfer");
}
}
{ //Subevents
gdjs.SakuraCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SakuraCode.GDLeafObjects1.length;i<l;++i) {
    if ( gdjs.SakuraCode.GDLeafObjects1[i].getBehavior("Animation").getAnimationName() == "Sakura_L" ) {
        isConditionTrue_0 = true;
        gdjs.SakuraCode.GDLeafObjects1[k] = gdjs.SakuraCode.GDLeafObjects1[i];
        ++k;
    }
}
gdjs.SakuraCode.GDLeafObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Sakura_Leaf"), gdjs.SakuraCode.GDSakura_9595LeafObjects1);
{for(var i = 0, len = gdjs.SakuraCode.GDSakura_9595LeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDSakura_9595LeafObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sakura_Leaf"), gdjs.SakuraCode.GDSakura_9595LeafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects1Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDSakura_95959595LeafObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.SakuraCode.GDSakura_9595LeafObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(2);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wpeed3.mp3", false, 300, 1);
}{for(var i = 0, len = gdjs.SakuraCode.GDSakura_9595LeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDSakura_9595LeafObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Devil_Down"), gdjs.SakuraCode.GDDevil_9595DownObjects1);
gdjs.copyArray(runtimeScene.getObjects("Devil_Left"), gdjs.SakuraCode.GDDevil_9595LeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Devil_Right"), gdjs.SakuraCode.GDDevil_9595RightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wave"), gdjs.SakuraCode.GDWaveObjects1);
{for(var i = 0, len = gdjs.SakuraCode.GDWaveObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDWaveObjects1[i].setPosition(-(1204),482);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDWaveObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDWaveObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDDevil_9595LeftObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDDevil_9595LeftObjects1[i].setPosition(-(1184),-(37));
}
}{for(var i = 0, len = gdjs.SakuraCode.GDDevil_9595LeftObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDDevil_9595LeftObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDDevil_9595RightObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDDevil_9595RightObjects1[i].setPosition(-(1184),-(37));
}
}{for(var i = 0, len = gdjs.SakuraCode.GDDevil_9595RightObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDDevil_9595RightObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDDevil_9595DownObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDDevil_9595DownObjects1[i].setPosition(-(1142),-(245));
}
}{for(var i = 0, len = gdjs.SakuraCode.GDDevil_9595DownObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDDevil_9595DownObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].getBehavior("Animation").setAnimationName("Devil");
}
}{for(var i = 0, len = gdjs.SakuraCode.GDDevil_9595LeftObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDDevil_9595LeftObjects1[i].setPosition((( gdjs.SakuraCode.GDLeafObjects1.length === 0 ) ? 0 :gdjs.SakuraCode.GDLeafObjects1[0].getPointX("")) - 162,(( gdjs.SakuraCode.GDLeafObjects1.length === 0 ) ? 0 :gdjs.SakuraCode.GDLeafObjects1[0].getPointY("")) - 92);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDDevil_9595LeftObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDDevil_9595LeftObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "linear", 0.1, false);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDDevil_9595RightObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDDevil_9595RightObjects1[i].setPosition((( gdjs.SakuraCode.GDLeafObjects1.length === 0 ) ? 0 :gdjs.SakuraCode.GDLeafObjects1[0].getPointX("")) + 15,(( gdjs.SakuraCode.GDLeafObjects1.length === 0 ) ? 0 :gdjs.SakuraCode.GDLeafObjects1[0].getPointY("")) - 92);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDDevil_9595RightObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDDevil_9595RightObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "linear", 0.1, false);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDDevil_9595DownObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDDevil_9595DownObjects1[i].setPosition((( gdjs.SakuraCode.GDLeafObjects1.length === 0 ) ? 0 :gdjs.SakuraCode.GDLeafObjects1[0].getPointX("")) - 104,(( gdjs.SakuraCode.GDLeafObjects1.length === 0 ) ? 0 :gdjs.SakuraCode.GDLeafObjects1[0].getPointY("")) - 307);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDDevil_9595DownObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDDevil_9595DownObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "linear", 0.1, false);
}
}
{ //Subevents
gdjs.SakuraCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("left_Button"), gdjs.SakuraCode.GDleft_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDleft_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);
{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("right_Button"), gdjs.SakuraCode.GDright_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDright_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);
{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
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
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Branch") >= 0.2;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Sakura_Branch", 200 - gdjs.random(330), (( gdjs.SakuraCode.GDLeafObjects1.length === 0 ) ? 0 :gdjs.SakuraCode.GDLeafObjects1[0].getPointY("")) + 700, 0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Branch");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.SakuraCode.GDFishObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fish2"), gdjs.SakuraCode.GDFish2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Point"), gdjs.SakuraCode.GDPointObjects1);
{for(var i = 0, len = gdjs.SakuraCode.GDFishObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDFishObjects1[i].addForce(0, -(200) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Servie") * 100, 0);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDFish2Objects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDFish2Objects1[i].addForce(-(Math.pow(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Servie"), 1.3)) / 10, -(200) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Servie") * 100, 0);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDPointObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDPointObjects1[i].addForce(0, -(200) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Servie") * 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("left_Button"), gdjs.SakuraCode.GDleft_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDleft_95959595ButtonObjects1Objects, runtimeScene, true, false);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);
gdjs.copyArray(runtimeScene.getObjects("leftwind"), gdjs.SakuraCode.GDleftwindObjects1);
gdjs.copyArray(runtimeScene.getObjects("rightwind"), gdjs.SakuraCode.GDrightwindObjects1);
{for(var i = 0, len = gdjs.SakuraCode.GDleftwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDleftwindObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDrightwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDrightwindObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDrightwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDrightwindObjects1[i].setPosition((( gdjs.SakuraCode.GDLeafObjects1.length === 0 ) ? 0 :gdjs.SakuraCode.GDLeafObjects1[0].getPointX("")) + 60,(( gdjs.SakuraCode.GDLeafObjects1.length === 0 ) ? 0 :gdjs.SakuraCode.GDLeafObjects1[0].getPointY("")) - 20);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDrightwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDrightwindObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDrightwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDrightwindObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "linear", 0.5, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Left_Wind.mp3", false, 300, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("left_Button"), gdjs.SakuraCode.GDleft_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDleft_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);
gdjs.copyArray(runtimeScene.getObjects("leftwind"), gdjs.SakuraCode.GDleftwindObjects1);
gdjs.copyArray(runtimeScene.getObjects("rightwind"), gdjs.SakuraCode.GDrightwindObjects1);
{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].addForce(-(90), 0, 0);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDleftwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDleftwindObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDrightwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDrightwindObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDrightwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDrightwindObjects1[i].setPosition((( gdjs.SakuraCode.GDLeafObjects1.length === 0 ) ? 0 :gdjs.SakuraCode.GDLeafObjects1[0].getPointX("")) + 35,(( gdjs.SakuraCode.GDLeafObjects1.length === 0 ) ? 0 :gdjs.SakuraCode.GDLeafObjects1[0].getPointY("")) - 45);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDrightwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDrightwindObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDrightwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDrightwindObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "linear", 0.5, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Left_Wind.mp3", false, 300, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("right_Button"), gdjs.SakuraCode.GDright_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDright_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);
gdjs.copyArray(runtimeScene.getObjects("leftwind"), gdjs.SakuraCode.GDleftwindObjects1);
gdjs.copyArray(runtimeScene.getObjects("rightwind"), gdjs.SakuraCode.GDrightwindObjects1);
{for(var i = 0, len = gdjs.SakuraCode.GDrightwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDrightwindObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDleftwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDleftwindObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDleftwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDleftwindObjects1[i].setPosition((( gdjs.SakuraCode.GDLeafObjects1.length === 0 ) ? 0 :gdjs.SakuraCode.GDLeafObjects1[0].getPointX("")) - 90,(( gdjs.SakuraCode.GDLeafObjects1.length === 0 ) ? 0 :gdjs.SakuraCode.GDLeafObjects1[0].getPointY("")) - 20);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDleftwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDleftwindObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDleftwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDleftwindObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "linear", 0.5, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Right_Wind.mp3", false, 300, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("right_Button"), gdjs.SakuraCode.GDright_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDright_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);
gdjs.copyArray(runtimeScene.getObjects("leftwind"), gdjs.SakuraCode.GDleftwindObjects1);
gdjs.copyArray(runtimeScene.getObjects("rightwind"), gdjs.SakuraCode.GDrightwindObjects1);
{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].addForce(-(90), 0, 0);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDrightwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDrightwindObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDleftwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDleftwindObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDleftwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDleftwindObjects1[i].setPosition((( gdjs.SakuraCode.GDLeafObjects1.length === 0 ) ? 0 :gdjs.SakuraCode.GDLeafObjects1[0].getPointX("")) - 105,(( gdjs.SakuraCode.GDLeafObjects1.length === 0 ) ? 0 :gdjs.SakuraCode.GDLeafObjects1[0].getPointY("")) - 45);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDleftwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDleftwindObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDleftwindObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDleftwindObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "linear", 0.5, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Right_Wind.mp3", false, 300, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.SakuraCode.GDBirdObjects1);
{for(var i = 0, len = gdjs.SakuraCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDBirdObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Sakura_Leaf"), gdjs.SakuraCode.GDSakura_9595LeafObjects1);
{for(var i = 0, len = gdjs.SakuraCode.GDSakura_9595LeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDSakura_9595LeafObjects1[i].addForce(gdjs.randomInRange(-(20), 20), -(200) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Servie"), 0);
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
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Branch") >= 2.5;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Sakura_Branch", 200 - gdjs.random(330), (( gdjs.SakuraCode.GDLeafObjects1.length === 0 ) ? 0 :gdjs.SakuraCode.GDLeafObjects1[0].getPointY("")) + 700, 0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Branch");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Branch") >= 2.5;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Sakura_Branch", 200 - gdjs.random(330), (( gdjs.SakuraCode.GDLeafObjects1.length === 0 ) ? 0 :gdjs.SakuraCode.GDLeafObjects1[0].getPointY("")) + 700, 0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Branch");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Gate_Time") >= gdjs.randomInRange(70, 110);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Desert_Gate", 300 - gdjs.random(330), (( gdjs.SakuraCode.GDLeafObjects1.length === 0 ) ? 0 :gdjs.SakuraCode.GDLeafObjects1[0].getPointY("")) + 700, 0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Gate_Time");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Sakura_Time") >= gdjs.randomInRange(20, 40);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13654732);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Sakura_Skin", 300 - gdjs.random(330), (( gdjs.SakuraCode.GDLeafObjects1.length === 0 ) ? 0 :gdjs.SakuraCode.GDLeafObjects1[0].getPointY("")) + 700, 0);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Sakura_Time");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.SakuraCode.GDFishObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fish2"), gdjs.SakuraCode.GDFish2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.SakuraCode.GDWallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall2"), gdjs.SakuraCode.GDWall2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects1Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFish2Objects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects1Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDWallObjects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects1Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFishObjects1Objects, true, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects1Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDWall2Objects1Objects, true, runtimeScene, true);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.SakuraCode.GDFishObjects1 */
/* Reuse gdjs.SakuraCode.GDFish2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Point"), gdjs.SakuraCode.GDPointObjects1);
{for(var i = 0, len = gdjs.SakuraCode.GDFishObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDFishObjects1[i].addForce(0, -(200) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Servie") * 4, 0);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDFish2Objects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDFish2Objects1[i].addForce(-(Math.pow(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Servie"), 1.3)) / 100, -(200) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Servie") * 4, 0);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDPointObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDPointObjects1[i].addForce(0, -(200) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Servie") * 4, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() <= 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gate"), gdjs.SakuraCode.GDGateObjects1);
{for(var i = 0, len = gdjs.SakuraCode.GDGateObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDGateObjects1[i].addForce(gdjs.randomInRange(-(20), 20), -(200) - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Servie"), 0);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.SakuraCode.GDFishObjects1.length = 0;

gdjs.SakuraCode.GDFish2Objects1.length = 0;

gdjs.SakuraCode.GDLeafObjects1.length = 0;

gdjs.SakuraCode.GDWallObjects1.length = 0;

gdjs.SakuraCode.GDWall2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.SakuraCode.GDFishObjects1_2final.length = 0;
gdjs.SakuraCode.GDFish2Objects1_2final.length = 0;
gdjs.SakuraCode.GDLeafObjects1_2final.length = 0;
gdjs.SakuraCode.GDWallObjects1_2final.length = 0;
gdjs.SakuraCode.GDWall2Objects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.SakuraCode.GDFishObjects2);
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects2);
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFishObjects2Objects, false, runtimeScene, true);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.SakuraCode.GDFishObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDFishObjects1_2final.indexOf(gdjs.SakuraCode.GDFishObjects2[j]) === -1 )
            gdjs.SakuraCode.GDFishObjects1_2final.push(gdjs.SakuraCode.GDFishObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.SakuraCode.GDLeafObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDLeafObjects1_2final.indexOf(gdjs.SakuraCode.GDLeafObjects2[j]) === -1 )
            gdjs.SakuraCode.GDLeafObjects1_2final.push(gdjs.SakuraCode.GDLeafObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Fish2"), gdjs.SakuraCode.GDFish2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects2);
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFish2Objects2Objects, false, runtimeScene, true);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.SakuraCode.GDFish2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDFish2Objects1_2final.indexOf(gdjs.SakuraCode.GDFish2Objects2[j]) === -1 )
            gdjs.SakuraCode.GDFish2Objects1_2final.push(gdjs.SakuraCode.GDFish2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.SakuraCode.GDLeafObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDLeafObjects1_2final.indexOf(gdjs.SakuraCode.GDLeafObjects2[j]) === -1 )
            gdjs.SakuraCode.GDLeafObjects1_2final.push(gdjs.SakuraCode.GDLeafObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.SakuraCode.GDWallObjects2);
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDWallObjects2Objects, false, runtimeScene, true);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.SakuraCode.GDLeafObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDLeafObjects1_2final.indexOf(gdjs.SakuraCode.GDLeafObjects2[j]) === -1 )
            gdjs.SakuraCode.GDLeafObjects1_2final.push(gdjs.SakuraCode.GDLeafObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.SakuraCode.GDWallObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDWallObjects1_2final.indexOf(gdjs.SakuraCode.GDWallObjects2[j]) === -1 )
            gdjs.SakuraCode.GDWallObjects1_2final.push(gdjs.SakuraCode.GDWallObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wall2"), gdjs.SakuraCode.GDWall2Objects2);
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDWall2Objects2Objects, false, runtimeScene, true);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.SakuraCode.GDLeafObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDLeafObjects1_2final.indexOf(gdjs.SakuraCode.GDLeafObjects2[j]) === -1 )
            gdjs.SakuraCode.GDLeafObjects1_2final.push(gdjs.SakuraCode.GDLeafObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.SakuraCode.GDWall2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDWall2Objects1_2final.indexOf(gdjs.SakuraCode.GDWall2Objects2[j]) === -1 )
            gdjs.SakuraCode.GDWall2Objects1_2final.push(gdjs.SakuraCode.GDWall2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.SakuraCode.GDFishObjects1_2final, gdjs.SakuraCode.GDFishObjects1);
gdjs.copyArray(gdjs.SakuraCode.GDFish2Objects1_2final, gdjs.SakuraCode.GDFish2Objects1);
gdjs.copyArray(gdjs.SakuraCode.GDLeafObjects1_2final, gdjs.SakuraCode.GDLeafObjects1);
gdjs.copyArray(gdjs.SakuraCode.GDWallObjects1_2final, gdjs.SakuraCode.GDWallObjects1);
gdjs.copyArray(gdjs.SakuraCode.GDWall2Objects1_2final, gdjs.SakuraCode.GDWall2Objects1);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13660908);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.SakuraCode.GDLeafObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "LB.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].addForce(0, 50, 0);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].getBehavior("Animation").setAnimationName("Death");
}
}{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "linear", 0.25, true);
}
}
{ //Subevents
gdjs.SakuraCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.SakuraCode.GDFishObjects1.length = 0;

gdjs.SakuraCode.GDFish2Objects1.length = 0;

gdjs.SakuraCode.GDLeafObjects1.length = 0;

gdjs.SakuraCode.GDWallObjects1.length = 0;

gdjs.SakuraCode.GDWall2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.SakuraCode.GDFishObjects1_2final.length = 0;
gdjs.SakuraCode.GDFish2Objects1_2final.length = 0;
gdjs.SakuraCode.GDLeafObjects1_2final.length = 0;
gdjs.SakuraCode.GDWallObjects1_2final.length = 0;
gdjs.SakuraCode.GDWall2Objects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.SakuraCode.GDFishObjects2);
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects2);
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFishObjects2Objects, false, runtimeScene, true);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.SakuraCode.GDFishObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDFishObjects1_2final.indexOf(gdjs.SakuraCode.GDFishObjects2[j]) === -1 )
            gdjs.SakuraCode.GDFishObjects1_2final.push(gdjs.SakuraCode.GDFishObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.SakuraCode.GDLeafObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDLeafObjects1_2final.indexOf(gdjs.SakuraCode.GDLeafObjects2[j]) === -1 )
            gdjs.SakuraCode.GDLeafObjects1_2final.push(gdjs.SakuraCode.GDLeafObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Fish2"), gdjs.SakuraCode.GDFish2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects2);
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFish2Objects2Objects, false, runtimeScene, true);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.SakuraCode.GDFish2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDFish2Objects1_2final.indexOf(gdjs.SakuraCode.GDFish2Objects2[j]) === -1 )
            gdjs.SakuraCode.GDFish2Objects1_2final.push(gdjs.SakuraCode.GDFish2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.SakuraCode.GDLeafObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDLeafObjects1_2final.indexOf(gdjs.SakuraCode.GDLeafObjects2[j]) === -1 )
            gdjs.SakuraCode.GDLeafObjects1_2final.push(gdjs.SakuraCode.GDLeafObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.SakuraCode.GDWallObjects2);
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDWallObjects2Objects, false, runtimeScene, true);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.SakuraCode.GDLeafObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDLeafObjects1_2final.indexOf(gdjs.SakuraCode.GDLeafObjects2[j]) === -1 )
            gdjs.SakuraCode.GDLeafObjects1_2final.push(gdjs.SakuraCode.GDLeafObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.SakuraCode.GDWallObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDWallObjects1_2final.indexOf(gdjs.SakuraCode.GDWallObjects2[j]) === -1 )
            gdjs.SakuraCode.GDWallObjects1_2final.push(gdjs.SakuraCode.GDWallObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wall2"), gdjs.SakuraCode.GDWall2Objects2);
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDWall2Objects2Objects, false, runtimeScene, true);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.SakuraCode.GDLeafObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDLeafObjects1_2final.indexOf(gdjs.SakuraCode.GDLeafObjects2[j]) === -1 )
            gdjs.SakuraCode.GDLeafObjects1_2final.push(gdjs.SakuraCode.GDLeafObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.SakuraCode.GDWall2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDWall2Objects1_2final.indexOf(gdjs.SakuraCode.GDWall2Objects2[j]) === -1 )
            gdjs.SakuraCode.GDWall2Objects1_2final.push(gdjs.SakuraCode.GDWall2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.SakuraCode.GDFishObjects1_2final, gdjs.SakuraCode.GDFishObjects1);
gdjs.copyArray(gdjs.SakuraCode.GDFish2Objects1_2final, gdjs.SakuraCode.GDFish2Objects1);
gdjs.copyArray(gdjs.SakuraCode.GDLeafObjects1_2final, gdjs.SakuraCode.GDLeafObjects1);
gdjs.copyArray(gdjs.SakuraCode.GDWallObjects1_2final, gdjs.SakuraCode.GDWallObjects1);
gdjs.copyArray(gdjs.SakuraCode.GDWall2Objects1_2final, gdjs.SakuraCode.GDWall2Objects1);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13664684);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.SakuraCode.GDLeafObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "LB.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].addForce(0, 50, 0);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].getBehavior("Animation").setAnimationName("Sakura_Death");
}
}{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "linear", 0.25, true);
}
}
{ //Subevents
gdjs.SakuraCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.SakuraCode.GDFishObjects1.length = 0;

gdjs.SakuraCode.GDFish2Objects1.length = 0;

gdjs.SakuraCode.GDLeafObjects1.length = 0;

gdjs.SakuraCode.GDPointObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.SakuraCode.GDFishObjects1_2final.length = 0;
gdjs.SakuraCode.GDFish2Objects1_2final.length = 0;
gdjs.SakuraCode.GDLeafObjects1_2final.length = 0;
gdjs.SakuraCode.GDPointObjects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.SakuraCode.GDFishObjects2);
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects2);
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFishObjects2Objects, false, runtimeScene, true);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.SakuraCode.GDFishObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDFishObjects1_2final.indexOf(gdjs.SakuraCode.GDFishObjects2[j]) === -1 )
            gdjs.SakuraCode.GDFishObjects1_2final.push(gdjs.SakuraCode.GDFishObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.SakuraCode.GDLeafObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDLeafObjects1_2final.indexOf(gdjs.SakuraCode.GDLeafObjects2[j]) === -1 )
            gdjs.SakuraCode.GDLeafObjects1_2final.push(gdjs.SakuraCode.GDLeafObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects2);
gdjs.copyArray(runtimeScene.getObjects("Point"), gdjs.SakuraCode.GDPointObjects2);
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDPointObjects2Objects, false, runtimeScene, true);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.SakuraCode.GDLeafObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDLeafObjects1_2final.indexOf(gdjs.SakuraCode.GDLeafObjects2[j]) === -1 )
            gdjs.SakuraCode.GDLeafObjects1_2final.push(gdjs.SakuraCode.GDLeafObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.SakuraCode.GDPointObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDPointObjects1_2final.indexOf(gdjs.SakuraCode.GDPointObjects2[j]) === -1 )
            gdjs.SakuraCode.GDPointObjects1_2final.push(gdjs.SakuraCode.GDPointObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Fish2"), gdjs.SakuraCode.GDFish2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects2);
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects2Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDFish2Objects2Objects, false, runtimeScene, true);
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.SakuraCode.GDFish2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDFish2Objects1_2final.indexOf(gdjs.SakuraCode.GDFish2Objects2[j]) === -1 )
            gdjs.SakuraCode.GDFish2Objects1_2final.push(gdjs.SakuraCode.GDFish2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.SakuraCode.GDLeafObjects2.length; j < jLen ; ++j) {
        if ( gdjs.SakuraCode.GDLeafObjects1_2final.indexOf(gdjs.SakuraCode.GDLeafObjects2[j]) === -1 )
            gdjs.SakuraCode.GDLeafObjects1_2final.push(gdjs.SakuraCode.GDLeafObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.SakuraCode.GDFishObjects1_2final, gdjs.SakuraCode.GDFishObjects1);
gdjs.copyArray(gdjs.SakuraCode.GDFish2Objects1_2final, gdjs.SakuraCode.GDFish2Objects1);
gdjs.copyArray(gdjs.SakuraCode.GDLeafObjects1_2final, gdjs.SakuraCode.GDLeafObjects1);
gdjs.copyArray(gdjs.SakuraCode.GDPointObjects1_2final, gdjs.SakuraCode.GDPointObjects1);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13669244);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score_Text"), gdjs.SakuraCode.GDScore_9595TextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.SakuraCode.GDScore_9595TextObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDScore_9595TextObjects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);
gdjs.copyArray(runtimeScene.getObjects("Point"), gdjs.SakuraCode.GDPointObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects1Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDPointObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13670252);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score_Text"), gdjs.SakuraCode.GDScore_9595TextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.SakuraCode.GDScore_9595TextObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDScore_9595TextObjects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.SakuraCode.GDWallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
{isConditionTrue_2 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
{isConditionTrue_2 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
{isConditionTrue_2 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
}
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects1Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDWallObjects1Objects, false, runtimeScene, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.SakuraCode.GDLeafObjects1 */
{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].addForce(400, 0, 0);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall2"), gdjs.SakuraCode.GDWall2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
{isConditionTrue_2 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
{isConditionTrue_2 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
{isConditionTrue_2 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
}
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects1Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDWall2Objects1Objects, false, runtimeScene, false);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.SakuraCode.GDLeafObjects1 */
{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].addForce(-(400), 0, 0);
}
}{for(var i = 0, len = gdjs.SakuraCode.GDLeafObjects1.length ;i < len;++i) {
    gdjs.SakuraCode.GDLeafObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gate"), gdjs.SakuraCode.GDGateObjects1);
gdjs.copyArray(runtimeScene.getObjects("Leaf"), gdjs.SakuraCode.GDLeafObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDLeafObjects1Objects, gdjs.SakuraCode.mapOfGDgdjs_9546SakuraCode_9546GDGateObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13675916);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(gdjs.randomInRange(1, 2));
}
{ //Subevents
gdjs.SakuraCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.SakuraCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SakuraCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.SakuraCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.SakuraCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.SakuraCode.GDBrach1Objects1.length = 0;
gdjs.SakuraCode.GDBrach1Objects2.length = 0;
gdjs.SakuraCode.GDBrach1Objects3.length = 0;
gdjs.SakuraCode.GDFishObjects1.length = 0;
gdjs.SakuraCode.GDFishObjects2.length = 0;
gdjs.SakuraCode.GDFishObjects3.length = 0;
gdjs.SakuraCode.GDFish2Objects1.length = 0;
gdjs.SakuraCode.GDFish2Objects2.length = 0;
gdjs.SakuraCode.GDFish2Objects3.length = 0;
gdjs.SakuraCode.GDBirdObjects1.length = 0;
gdjs.SakuraCode.GDBirdObjects2.length = 0;
gdjs.SakuraCode.GDBirdObjects3.length = 0;
gdjs.SakuraCode.GDWallObjects1.length = 0;
gdjs.SakuraCode.GDWallObjects2.length = 0;
gdjs.SakuraCode.GDWallObjects3.length = 0;
gdjs.SakuraCode.GDWaveObjects1.length = 0;
gdjs.SakuraCode.GDWaveObjects2.length = 0;
gdjs.SakuraCode.GDWaveObjects3.length = 0;
gdjs.SakuraCode.GDWall2Objects1.length = 0;
gdjs.SakuraCode.GDWall2Objects2.length = 0;
gdjs.SakuraCode.GDWall2Objects3.length = 0;
gdjs.SakuraCode.GDGateObjects1.length = 0;
gdjs.SakuraCode.GDGateObjects2.length = 0;
gdjs.SakuraCode.GDGateObjects3.length = 0;
gdjs.SakuraCode.GDFadeInObjects1.length = 0;
gdjs.SakuraCode.GDFadeInObjects2.length = 0;
gdjs.SakuraCode.GDFadeInObjects3.length = 0;
gdjs.SakuraCode.GDFadeIn2Objects1.length = 0;
gdjs.SakuraCode.GDFadeIn2Objects2.length = 0;
gdjs.SakuraCode.GDFadeIn2Objects3.length = 0;
gdjs.SakuraCode.GDLeafObjects1.length = 0;
gdjs.SakuraCode.GDLeafObjects2.length = 0;
gdjs.SakuraCode.GDLeafObjects3.length = 0;
gdjs.SakuraCode.GDPointObjects1.length = 0;
gdjs.SakuraCode.GDPointObjects2.length = 0;
gdjs.SakuraCode.GDPointObjects3.length = 0;
gdjs.SakuraCode.GDleft_9595ButtonObjects1.length = 0;
gdjs.SakuraCode.GDleft_9595ButtonObjects2.length = 0;
gdjs.SakuraCode.GDleft_9595ButtonObjects3.length = 0;
gdjs.SakuraCode.GDleftwindObjects1.length = 0;
gdjs.SakuraCode.GDleftwindObjects2.length = 0;
gdjs.SakuraCode.GDleftwindObjects3.length = 0;
gdjs.SakuraCode.GDrightwindObjects1.length = 0;
gdjs.SakuraCode.GDrightwindObjects2.length = 0;
gdjs.SakuraCode.GDrightwindObjects3.length = 0;
gdjs.SakuraCode.GDright_9595ButtonObjects1.length = 0;
gdjs.SakuraCode.GDright_9595ButtonObjects2.length = 0;
gdjs.SakuraCode.GDright_9595ButtonObjects3.length = 0;
gdjs.SakuraCode.GDScore_9595TextObjects1.length = 0;
gdjs.SakuraCode.GDScore_9595TextObjects2.length = 0;
gdjs.SakuraCode.GDScore_9595TextObjects3.length = 0;
gdjs.SakuraCode.GDScore_9595Text2Objects1.length = 0;
gdjs.SakuraCode.GDScore_9595Text2Objects2.length = 0;
gdjs.SakuraCode.GDScore_9595Text2Objects3.length = 0;
gdjs.SakuraCode.GDSakura_9595LeafObjects1.length = 0;
gdjs.SakuraCode.GDSakura_9595LeafObjects2.length = 0;
gdjs.SakuraCode.GDSakura_9595LeafObjects3.length = 0;
gdjs.SakuraCode.GDShineObjects1.length = 0;
gdjs.SakuraCode.GDShineObjects2.length = 0;
gdjs.SakuraCode.GDShineObjects3.length = 0;
gdjs.SakuraCode.GDDevil_9595LeftObjects1.length = 0;
gdjs.SakuraCode.GDDevil_9595LeftObjects2.length = 0;
gdjs.SakuraCode.GDDevil_9595LeftObjects3.length = 0;
gdjs.SakuraCode.GDDevil_9595DownObjects1.length = 0;
gdjs.SakuraCode.GDDevil_9595DownObjects2.length = 0;
gdjs.SakuraCode.GDDevil_9595DownObjects3.length = 0;
gdjs.SakuraCode.GDDevil_9595RightObjects1.length = 0;
gdjs.SakuraCode.GDDevil_9595RightObjects2.length = 0;
gdjs.SakuraCode.GDDevil_9595RightObjects3.length = 0;
gdjs.SakuraCode.GDWaterObjects1.length = 0;
gdjs.SakuraCode.GDWaterObjects2.length = 0;
gdjs.SakuraCode.GDWaterObjects3.length = 0;
gdjs.SakuraCode.GDMachine_9595LeafObjects1.length = 0;
gdjs.SakuraCode.GDMachine_9595LeafObjects2.length = 0;
gdjs.SakuraCode.GDMachine_9595LeafObjects3.length = 0;

gdjs.SakuraCode.eventsList7(runtimeScene);
gdjs.SakuraCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.SakuraCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.SakuraCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.SakuraCode.GDBrach1Objects1.length = 0;
gdjs.SakuraCode.GDBrach1Objects2.length = 0;
gdjs.SakuraCode.GDBrach1Objects3.length = 0;
gdjs.SakuraCode.GDFishObjects1.length = 0;
gdjs.SakuraCode.GDFishObjects2.length = 0;
gdjs.SakuraCode.GDFishObjects3.length = 0;
gdjs.SakuraCode.GDFish2Objects1.length = 0;
gdjs.SakuraCode.GDFish2Objects2.length = 0;
gdjs.SakuraCode.GDFish2Objects3.length = 0;
gdjs.SakuraCode.GDBirdObjects1.length = 0;
gdjs.SakuraCode.GDBirdObjects2.length = 0;
gdjs.SakuraCode.GDBirdObjects3.length = 0;
gdjs.SakuraCode.GDWallObjects1.length = 0;
gdjs.SakuraCode.GDWallObjects2.length = 0;
gdjs.SakuraCode.GDWallObjects3.length = 0;
gdjs.SakuraCode.GDWaveObjects1.length = 0;
gdjs.SakuraCode.GDWaveObjects2.length = 0;
gdjs.SakuraCode.GDWaveObjects3.length = 0;
gdjs.SakuraCode.GDWall2Objects1.length = 0;
gdjs.SakuraCode.GDWall2Objects2.length = 0;
gdjs.SakuraCode.GDWall2Objects3.length = 0;
gdjs.SakuraCode.GDGateObjects1.length = 0;
gdjs.SakuraCode.GDGateObjects2.length = 0;
gdjs.SakuraCode.GDGateObjects3.length = 0;
gdjs.SakuraCode.GDFadeInObjects1.length = 0;
gdjs.SakuraCode.GDFadeInObjects2.length = 0;
gdjs.SakuraCode.GDFadeInObjects3.length = 0;
gdjs.SakuraCode.GDFadeIn2Objects1.length = 0;
gdjs.SakuraCode.GDFadeIn2Objects2.length = 0;
gdjs.SakuraCode.GDFadeIn2Objects3.length = 0;
gdjs.SakuraCode.GDLeafObjects1.length = 0;
gdjs.SakuraCode.GDLeafObjects2.length = 0;
gdjs.SakuraCode.GDLeafObjects3.length = 0;
gdjs.SakuraCode.GDPointObjects1.length = 0;
gdjs.SakuraCode.GDPointObjects2.length = 0;
gdjs.SakuraCode.GDPointObjects3.length = 0;
gdjs.SakuraCode.GDleft_9595ButtonObjects1.length = 0;
gdjs.SakuraCode.GDleft_9595ButtonObjects2.length = 0;
gdjs.SakuraCode.GDleft_9595ButtonObjects3.length = 0;
gdjs.SakuraCode.GDleftwindObjects1.length = 0;
gdjs.SakuraCode.GDleftwindObjects2.length = 0;
gdjs.SakuraCode.GDleftwindObjects3.length = 0;
gdjs.SakuraCode.GDrightwindObjects1.length = 0;
gdjs.SakuraCode.GDrightwindObjects2.length = 0;
gdjs.SakuraCode.GDrightwindObjects3.length = 0;
gdjs.SakuraCode.GDright_9595ButtonObjects1.length = 0;
gdjs.SakuraCode.GDright_9595ButtonObjects2.length = 0;
gdjs.SakuraCode.GDright_9595ButtonObjects3.length = 0;
gdjs.SakuraCode.GDScore_9595TextObjects1.length = 0;
gdjs.SakuraCode.GDScore_9595TextObjects2.length = 0;
gdjs.SakuraCode.GDScore_9595TextObjects3.length = 0;
gdjs.SakuraCode.GDScore_9595Text2Objects1.length = 0;
gdjs.SakuraCode.GDScore_9595Text2Objects2.length = 0;
gdjs.SakuraCode.GDScore_9595Text2Objects3.length = 0;
gdjs.SakuraCode.GDSakura_9595LeafObjects1.length = 0;
gdjs.SakuraCode.GDSakura_9595LeafObjects2.length = 0;
gdjs.SakuraCode.GDSakura_9595LeafObjects3.length = 0;
gdjs.SakuraCode.GDShineObjects1.length = 0;
gdjs.SakuraCode.GDShineObjects2.length = 0;
gdjs.SakuraCode.GDShineObjects3.length = 0;
gdjs.SakuraCode.GDDevil_9595LeftObjects1.length = 0;
gdjs.SakuraCode.GDDevil_9595LeftObjects2.length = 0;
gdjs.SakuraCode.GDDevil_9595LeftObjects3.length = 0;
gdjs.SakuraCode.GDDevil_9595DownObjects1.length = 0;
gdjs.SakuraCode.GDDevil_9595DownObjects2.length = 0;
gdjs.SakuraCode.GDDevil_9595DownObjects3.length = 0;
gdjs.SakuraCode.GDDevil_9595RightObjects1.length = 0;
gdjs.SakuraCode.GDDevil_9595RightObjects2.length = 0;
gdjs.SakuraCode.GDDevil_9595RightObjects3.length = 0;
gdjs.SakuraCode.GDWaterObjects1.length = 0;
gdjs.SakuraCode.GDWaterObjects2.length = 0;
gdjs.SakuraCode.GDWaterObjects3.length = 0;
gdjs.SakuraCode.GDMachine_9595LeafObjects1.length = 0;
gdjs.SakuraCode.GDMachine_9595LeafObjects2.length = 0;
gdjs.SakuraCode.GDMachine_9595LeafObjects3.length = 0;


return;

}

gdjs['SakuraCode'] = gdjs.SakuraCode;
