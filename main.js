

//Общие данные пациента
let name = document.getElementById('name');
let age = document.getElementById('age');
let genderRadios = document.getElementsByName('gender');
let gender;
let height = document.getElementById('height');
let weight = document.getElementById('weight');
let diagnosis = document.getElementById('diagnosis');
let surfaceArea;
//Левое предсердие
let leftAuricle = document.getElementById('leftAuricle');
let leftAuricleIndex;
let KSO = document.getElementById('KSO');
let indexKSO;
let KDR = document.getElementById('KDR');
let indexKDR;
let KSR = document.getElementById('KSR');
//Левый желудочек
let leftVentricleVolume = Number(document.getElementById('leftVentricleVolume').value);
let leftVentricleVolumeIndex;
let TeichholzEF;
let SimpsonEF = Number(document.getElementById('SimpsonEF').value);
let symmetricHypertrophia = document.getElementById('symmetricHypertrophia');
let asymmetricHypertrophia = document.getElementById('asymmetricHypertrophia');
let hypertrophiaRadios = document.getElementsByName('hypertrophia');
let hypertrophia;
let asymmetricHypertrophiaTypeRadios = document.getElementsByName('asymmetricHypertrophiaType');
let asymmetricHypertrophiaType;
let heartSeptumThickness = document.getElementById('heartSeptumThickness');
let leftAuricleWallThickness = document.getElementById('leftAuricleWallThickness');
let RWT;
let myocardiumMass;
let myocardiumMassIndex;
let leftVentricleOutputGradient = document.getElementById('leftVentricleOutputGradient');
let leftVentricleComment = document.getElementById('leftVentricleComment');
let leftVentricleCommentAddPhrase = document.getElementById('leftVentricleCommentAddPhrase');
//Митральный клапан
let mitralValveRegurgitationRadios = document.getElementsByName('mitralValveRegurgitation');
let mitralValveRegurgitation;
let mitralValveRegurgitationIsRelativeRadios = document.getElementsByName('mitralValveRegurgitationIsRelative');
let mitralValveRegurgitationIsRelative;
//Аортальный клапан
let aorticValveRegurgitationRadios = document.getElementsByName('aorticValveRegurgitation');
let aorticValveRegurgitation;
let aorticValveRegurgitationIsRelativeRadios = document.getElementsByName('aorticValveRegurgitationIsRelative');
let aorticValveRegurgitationIsRelative;
let aorticValveFibrousRing = document.getElementById('aorticValveFibrousRing');
let aorticBase = document.getElementById('aorticBase');
let aorticBaseToSurfaceAreaRatio;
let ascendingAorta = document.getElementById('ascendingAorta');
let ascendingAortaToSurfaceAreaRatio;
let aorticWallsRadios = document.getElementsByName('aorticWalls');
let aorticWalls;
//Правое предсердие
let rightAtriumEnlargementRadios = document.getElementsByName('rightAtriumEnlargement');
let rightAtriumEnlargement;
let rightAtriumLongitudinalSize = document.getElementById('rightAtriumLongitudinalSize');
let rightAtriumLongitudinalSizeIndex;
let rightAtriumTransverseSize = document.getElementById('rightAtriumTransverseSize');
let rightAtriumTransverseSizeIndex;
let rightAtriumVolume = document.getElementById('rightAtriumVolume');
let rightAtriumVolumeIndex;
//Правый желудочек
let rightVentricleParasternalSize = document.getElementById('rightVentricleParasternalSize');
let rightVentricleApicalBasalSize = document.getElementById('rightVentricleApicalBasalSize');
let rightVentricleApicalMedianSize = document.getElementById('rightVentricleApicalMedianSize');
let rightVentricleApicalLongitudinalSize = document.getElementById('rightVentricleApicalLongitudinalSize');
let rightVentricleEndDiastolicVolume = document.getElementById('rightVentricleEndDiastolicVolume');
let rightVentricleEndDiastolicVolumeIndex;
let rightVentricleWallThickness = document.getElementById('rightVentricleWallThickness');
//Легочной клапан
let pulmonaryValveStateRadios = document.getElementsByName('pulmonaryValveState');
let pulmonaryValveState;
let pulmonaryValveComment = document.getElementById('pulmonaryValveComment');
//Легочная артерия
let pulmonaryArteryStateRadios = document.getElementsByName('pulmonaryArteryState');
let pulmonaryArteryState;
//Трикуспидальный клапан
let tricuspidValveRegurgitationRadios = document.getElementsByName('tricuspidValveRegurgitation');
let tricuspidValveRegurgitation;
let tricuspidValveRegurgitationIsRelativeRadios = document.getElementsByName('tricuspidValveRegurgitationIsRelative');
let tricuspidValveRegurgitationIsRelative;
let tricuspidValveRegurgitationGradient = document.getElementById('tricuspidValveRegurgitationGradient');
let inferiorVenaCavaRadios = document.getElementsByName('inferiorVenaCava');
let inferiorVenaCava;
let rightAtriumPressureRadios = document.getElementsByName('rightAtriumPressure');
let rightAtriumPressure;
let rightAtriumSystolicPressure;
//Межжелудочковая перегородка
let interventricularSeptumStateRadios = document.getElementsByName('interventricularSeptumState');
let interventricularSeptumState;
let interventricularSeptumDefectRadios = document.getElementsByName('interventricularSeptumDefect');
let interventricularSeptumDefect;
let interventricularSeptumOutflowGradient = document.getElementById('interventricularSeptumOutflowGradient');
//Межпредсердная перегородка
let interatrialSeptumStateRadios = document.getElementsByName('interatrialSeptumState');
let interatrialSeptumState;
let interatrialSeptumDefectRadios = document.getElementsByName('interatrialSeptumDefect');
let interatrialSeptumDefect;
let interatrialSeptumOutflowGradient = document.getElementById('interatrialSeptumOutflowGradient');
//Перикардиальный выпот
let pericardialEffusionValue = document.getElementById('pericardialEffusionValue');
//Дополнительные особенности ЭХОКГ
let earlyDiastolicFillingVelocity = document.getElementById('earlyDiastolicFillingVelocity');
let lateDiastolicFillingVelocity = document.getElementById('lateDiastolicFillingVelocity');
let earlyToLateFillingVelocityRatio;
let decelerationTime = document.getElementById('decelerationTime');
let earlyDiastolicMovementVelocity = document.getElementById('earlyDiastolicMovementVelocity');
let earlyDiastolicFillingVelocityToMovementRatio;
let segmentalViolationContractionRadios = document.getElementsByName('segmentalViolationContraction');
let segmentalViolationContraction;
var segViolationTypeRadios = document.getElementsByName('segmentalViolationContractionType');
var segViolationType;
var segViolationWallRadios = document.getElementsByName('segmentalViolationContractionWall');
var segViolationWall = [];
var segViolationDivisionRadios = document.getElementsByName('segViolationDivision');
var segViolationDivision = [];
let additionalChordsRadios = document.getElementsByName('additionalChords');
let additionalChords;

// -------------------------------------------------------------------------------------------------------------------------------
//Отображения
var sideNavigation = document.getElementById('sidenav');
let asymmetricHypertrophiaTypeView = document.getElementById('asymmetricHypertrophiaTypeView');
let resultAsymmetricHypertrophiaTypeView = document.getElementById('resultAsymmetricHypertrophiaTypeView');
let surveyView = document.getElementById('surveyView');
let resultView = document.getElementById('resultView');
var segmentalViolationContractionTypeContainer = document.getElementById('segmentalViolationContractionType');
var segmentalViolationContractionWallContainer = document.getElementById('segmentalViolationContractionWall');
var segmentalViolationContractionDivisionContainer = document.getElementById('segmentalViolationContractionDivision');
var segViolationAddButton = document.getElementById('segViolationAddButton');
var segViolationListCounter = 0;
//var segViolationList = document.getElementById('segViolationList');
//segmentalViolationContractionWallContainer.style.display = 'none';
//segmentalViolationContractionDivisionContainer.style.display = 'none';
//Кнопки
let resultButton = document.getElementById('resultButton');
let resultHideButton = document.getElementById('resultHideButton');
let resultPrintButton = document.getElementById('resultPrintButton');

// Результаты для вывода в заключение --------------------------------------------------------------------------------------------

// Личные данные пациента
let nameResult = document.getElementById('nameResult');
let ageResult = document.getElementById('ageResult');
let genderResult = document.getElementById('genderResult');
let heightResult = document.getElementById('heightResult');
let weightResult = document.getElementById('weightResult');
let diagnosisResult = document.getElementById('diagnosisResult');
let surfaceAreaResult = document.getElementById('surfaceAreaResult');
// Левое предсердие
let leftAuricleResult = document.getElementById('leftAuricleResult');
let leftAuricleIndexResult = document.getElementById('leftAuricleIndexResult');
let resultKSO = document.getElementById('resultKSO');
let resultKDR = document.getElementById('resultKDR');
let resultKSR = document.getElementById('resultKSR');
let resultIndexKSO = document.getElementById('resultIndexKSO');
let resultIndexKDR = document.getElementById('resultIndexKDR');
// Левый желудочек
let resultLeftVentricleVolume = document.getElementById('resultLeftVentricleVolume');
let resultLeftVentricleVolumeIndex = document.getElementById('resultLeftVentricleVolumeIndex');
let resultTeichholzEF = document.getElementById('resultTeichholzEF');
let resultSimpsonEF = document.getElementById('resultSimpsonEF');
let resultHypertrophia = document.getElementById('resultHypertrophia');
let resultAsymmetricHypertrophiaType = document.getElementById('resultAsymmetricHypertrophiaType');
let resultHeartSeptumThickness = document.getElementById('resultHeartSeptumThickness');
let resultLeftAuricleWallThickness = document.getElementById('resultLeftAuricleWallThickness');
let resultRWT = document.getElementById('resultRWT');
let resultMyocardiumMass = document.getElementById('resultMyocardiumMass');
let resultMyocardiumMassIndex = document.getElementById('resultMyocardiumMassIndex');
let resultLeftVentricleOutputGradient = document.getElementById('resultLeftVentricleOutputGradient');
let resultLeftVentricleComment = document.getElementById('resultLeftVentricleComment');
// Митральный клапан
let resultMitralValveRegurgitation = document.getElementById('resultMitralValveRegurgitation');
let resultMitralValveRegurgitationIsRelative = document.getElementById('resultMitralValveRegurgitationIsRelative');
// Аортальный клапан
let resultAorticValveRegurgitation = document.getElementById('resultAorticValveRegurgitation');
let resultAorticValveRegurgitationIsRelative = document.getElementById('resultAorticValveRegurgitationIsRelative');
let resultAorticValveFibrousRing = document.getElementById('resultAorticValveFibrousRing');
let resultAorticBase = document.getElementById('resultAorticBase');
let resultAscendingAorta = document.getElementById('resultAscendingAorta');
let resultAorticWalls = document.getElementById('resultAorticWalls');
// Правое предсердие
let resultRightAtriumEnlargement = document.getElementById('resultRightAtriumEnlargement');
let resultRightAtriumLongitudinalSize = document.getElementById('resultRightAtriumLongitudinalSize');
let resultRightAtriumLongitudinalSizeIndex;
let resultRightAtriumTransverseSize = document.getElementById('resultRightAtriumTransverseSize');
let resultRightAtriumTransverseSizeIndex = document.getElementById('resultRightAtriumVolume');
let resultRightAtriumVolume = document.getElementById('resultRightAtriumVolume');
let resultRightAtriumVolumeIndex = document.getElementById('resultRightAtriumVolumeIndex');
// Правый желудочек
let resultRightVentricleParasternalSize = document.getElementById('resultRightVentricleParasternalSize');
let resultRightVentricleApicalBasalSize = document.getElementById('resultRightVentricleApicalBasalSize');
let resultRightVentricleApicalMedianSize = document.getElementById('resultRightVentricleApicalMedianSize');
let resultRightVentricleApicalLongitudinalSize = document.getElementById('resultRightVentricleApicalLongitudinalSize');
let resultRightVentricleEndDiastolicVolume = document.getElementById('resultRightVentricleEndDiastolicVolume');
let resultRightVentricleEndDiastolicVolumeIndex = document.getElementById('resultRightVentricleEndDiastolicVolumeIndex');
let resultRightVentricleWallThickness = document.getElementById('resultRightVentricleWallThickness');
// Легочной клапан
let resultPulmonaryValveState = document.getElementById('resultPulmonaryValveState');
let resultPulmonaryValveComment = document.getElementById('resultPulmonaryValveComment');
// Легочная артерия
let resultPulmonaryArteryState = document.getElementById('resultPulmonaryArteryState');
// Трикуспидальный клапан
let resultTricuspidValveRegurgitation = document.getElementById('resultTricuspidValveRegurgitation');
let resultTricuspidValveRegurgitationIsRelative = document.getElementById('resultTricuspidValveRegurgitationIsRelative');
let resultTricuspidValveRegurgitationGradient = document.getElementById('resultTricuspidValveRegurgitationGradient');
let resultInferiorVenaCava = document.getElementById('resultInferiorVenaCava');
let resultRightAtriumPressure = document.getElementById('resultRightAtriumPressure');
let resultRightVentricleSystolicPressure = document.getElementById('resultRightVentricleSystolicPressure');
// Межжелудочковая перегородка
let resultInterventricularSeptumState = document.getElementById('resultInterventricularSeptumState');
let resultInterventricularSeptumDefect = document.getElementById('resultInterventricularSeptumDefect');
let resultInterventricularSeptumOutflowGradient = document.getElementById('resultInterventricularSeptumOutflowGradient');
// Межпредсердная перегородка
let resultInteratrialSeptumState = document.getElementById('resultInteratrialSeptumState');
let resultInteratrialSeptumDefect = document.getElementById('resultInteratrialSeptumDefect');
let resultInteratrialSeptumOutflowGradient = document.getElementById('resultInteratrialSeptumOutflowGradient');
// Перикардиальный выпот
let resultPericardialEffusionValue = document.getElementById('resultPericardialEffusionValue');
let conclusionResult = document.getElementById('conclusion');
// Дополнительные особенности ЭХОКГ
let resultEarlyDiastolicFillingVelocity = document.getElementById('resultEarlyDiastolicFillingVelocity');
let resultLateDiastolicFillingVelocity = document.getElementById('resultLateDiastolicFillingVelocity');
let resultEarlyToLateFillingVelocityRatio = document.getElementById('resultEarlyToLateFillingVelocityRatio');
let resultDecelerationTime = document.getElementById('resultDecelerationTime');
let resultEarlyDiastolicMovementVelocity = document.getElementById('resultEarlyDiastolicMovementVelocity');
let resultEarlyDiastolicFillingVelocityToMovementRatio = document.getElementById('resultEarlyDiastolicFillingVelocityToMovementRatio');
let resultSegmentalViolationContraction = document.getElementById('resultSegmentalViolationContraction');
let resultAdditionalChords = document.getElementById('resultAdditionalChords');

// Заключения для добавления к общему заключению --------------------------------------------------------------------------------------
let leftAuricleConclusion = '';
let indexKSOConclusion = '';
let indexKDRconclusion = '';
let leftVentricleConclusion = '';
let conclusionTeichholzEF = '';
let conclusionSimpsonEF = '';
let conclusionMyocardiumMass = '';
let conclusionLeftVentricleGeometry = '';
let conclusionLeftVentricleObstruction = '';
let conclusionAorticRootEnlargement = '';
let conclusionAorticAneurysm = '';
let conclusionRightAtriumEnlargementByLongitudinalSize = '';
let conclusionRightAtriumEnlargementByTransverseSize = '';
let conclusionRightAtriumEnlargementByVolume = '';
// Правый желудочек
let conclusionRightVentricleEnlargementByParasternalSize = '';
let conclusionRightVentricleEnlargementByApicalBasalSize = '';
let conclusionRightVentricleEnlargementByApicalMedianSize = '';
let conclusionRightVentricleEnlargementByApicalLongitudinalSize = '';
let conclusionRightVentricleEnlargementByEndDiastolicVolume = '';
// Трикуспидальный клапан
let conclusionPulmonaryHypertension = '';
// Перикардиальный выпот
let conclusionPericardialLiquid = '';
// Дополнительные особенности ЭХОКГ
// Снижение диастолической функции методом допплерографии
let conclusionDiastolicFunction = '';
var conclusionSegViolation = '';
// Общее заключение
let conclusion = ''; 

// -----------------------------------------------------------------------------------------------------------------------------------

symmetricHypertrophia.onchange = showAsymmetricHypertrophiaType;
asymmetricHypertrophia.onchange = showAsymmetricHypertrophiaType;
segViolationAddButton.onclick = segViolationAdd;
segViolationAddButton.disabled = true;

for(let i = 0; i < segViolationTypeRadios.length; i++){
	segViolationTypeRadios[i].onchange = segViolationAddButtonStates;
}

for(let i = 0; i < segViolationWallRadios.length; i++){
	segViolationWallRadios[i].onchange = segViolationAddButtonStates;
}

for(let i = 0; i < segViolationDivisionRadios.length; i++){
	segViolationDivisionRadios[i].onchange = segViolationAddButtonStates;
}

// Обработка радиокнопок --------------------------------------------------------------------------------------------------------

function getGenderValue(){
	for(var i = 0; i < genderRadios.length; i++){
		if(genderRadios[i].checked){
			gender = genderRadios[i].value;
			break;
		}
		else {gender = 'Не указан'; }
	}
	
}

function getHypertrophiaValue(){
	for(var i = 0; i < hypertrophiaRadios.length; i++){
		if(hypertrophiaRadios[i].checked){
			hypertrophia = hypertrophiaRadios[i].value;
			break
		}
		else {hypertrophia = 'Тип гипертрофии не указан.'}
	}
}

function getAsymmericHypertrophiaTypeValue(){
	for(var i = 0; i < asymmetricHypertrophiaTypeRadios.length; i++){
		if(asymmetricHypertrophiaTypeRadios[i].checked){
			asymmetricHypertrophiaType = asymmetricHypertrophiaTypeRadios[i].value;
			resultAsymmetricHypertrophiaTypeView.style.display = 'inline-block';
			break
		}
		else {asymmetricHypertrophiaType = 'Подтип ассиметрической гипертрофии не указан.'}
	}
}

function getMitralValveRegurgitationValue(){
	for (let i = 0; i < mitralValveRegurgitationRadios.length; i++) {
		if(mitralValveRegurgitationRadios[i].checked){
			mitralValveRegurgitation = mitralValveRegurgitationRadios[i].value;
			break;
		}
		else {mitralValveRegurgitation = 'не указана.'}
	}
}

function getMitralValveRegurgitationIsRelativeValue(){
	for (var i = 0; i < mitralValveRegurgitationIsRelativeRadios.length; i++) {
		if(mitralValveRegurgitationIsRelativeRadios[i].checked){
			mitralValveRegurgitationIsRelative = mitralValveRegurgitationIsRelativeRadios[i].value;
			break;
		}
		else {mitralValveRegurgitationIsRelative = 'Относительность регургитации не указана'};
	}
}

function getAorticValveRegurgitationValue(){
	for (var i = 0; i < aorticValveRegurgitationRadios.length; i++) {
		if(aorticValveRegurgitationRadios[i].checked){
			aorticValveRegurgitation = aorticValveRegurgitationRadios[i].value;
			break;
		}
		else {aorticValveRegurgitation = 'Тип регургитации не указан.'}
	}
}

function getAorticValveRegurgitationIsRelativeValue(){
	for (var i = 0; i < aorticValveRegurgitationIsRelativeRadios.length; i++) {
		if(aorticValveRegurgitationIsRelativeRadios[i].checked){
			aorticValveRegurgitationIsRelative = aorticValveRegurgitationIsRelativeRadios[i].value;
			break;
		}
		else {aorticValveRegurgitationIsRelative = 'Относительность регургитации не указана'};
	}
}

function getRightAtriumPressureValue() {
	for (let i = 0; i < rightAtriumPressureRadios.length; i++) {
		if(rightAtriumPressureRadios[i].checked){
			rightAtriumPressure = Number(mitralValveRegurgitationRadios[i].value);
			break;
		}
		else {rightAtriumPressure = null;}
	}
}

function segViolationShowWalls() {
	if(segmentalViolationContractionWallContainer.style.display == 'none'){
		segmentalViolationContractionWallContainer.style.display = 'block';
	}
}

function segViolationShowDivisions() {
	if(segmentalViolationContractionDivisionContainer.style.display == 'none'){
		segmentalViolationContractionDivisionContainer.style.display = 'block';
	}
}

function segViolationGetTypeValue() {
	for(let i = 0; i < segmentalViolationContractionTypeRadios.length; i++){
		if(segmentalViolationContractionTypeRadios[i].checked){
			segmentalViolationContractionType = segmentalViolationContractionTypeRadios[i].value;
			break;
		}
	}
}

function segViolationGetWallValue() {
	for(let i = 0; i < segmentalViolationContractionWallRadios.length; i++){
		if(segmentalViolationContractionWallRadios[i].checked){
			segmentalViolationContractionWall = segmentalViolationContractionWallRadios[i].value;
			break;
		}
	}
}

function segViolationAddButtonStates (){
	if(isChecked(segViolationTypeRadios) && isChecked(segViolationWallRadios) && isChecked(segViolationDivisionRadios)){
		segViolationAddButton.disabled = false;
	}
}

function isChecked(arr) {
	
	for(let i = 0; i < arr.length; i++){
		if(arr[i].checked){
			
			return true;
		}
	}
	return false;
}

function uncheck (arr){
	for(let i = 0; i < arr.length; i++){
		if(arr[i].checked){
			arr[i].checked = false;
		}
	}
}

function segViolationGetTypeValue() {
	for(let i = 0; i < segViolationTypeRadios.length; i++){
		if(segViolationTypeRadios[i].checked){
			conclusionSegViolation += segViolationTypeRadios[i].value;
			console.log(conclusionSegViolation);
			return conclusionSegViolation;
		}
	}
}

function segViolationGetWallValue() {
	conclusionSegViolation = '';
	for(let i = 0 ; i < segViolationWallRadios.length ; i++){
		if(segViolationWallRadios[i].checked){
				segViolationWall.push(segViolationWallRadios[i].value);
				//console.log('Длина массива ' + segViolationDivision.length);
			}
		}

	if (segViolationWall.length == 1){
		if(segViolationWall[0] == 'верхушки'){
			conclusionSegViolation += segViolationWall[0];
			segViolationWall = [];
			return conclusionSegViolation;
		}
		else {
			conclusionSegViolation += segViolationWall[0] + ' стенки';
			segViolationWall = [];
			return conclusionSegViolation;
		}
		segViolationWall = [];
		return conclusionSegViolation;
	}

	else if ( segViolationWall.length == 2 ){
		if(segViolationWall[1] == 'верхушки'){
			conclusionSegViolation += segViolationWall[0] + ' стенки и ' +  segViolationWall[1];
			segViolationWall = [];
			return conclusionSegViolation;
		}
		else{
			conclusionSegViolation += segViolationWall[0] + ' и ' + segViolationWall[1] + ' стенок';
			segViolationWall = [];
			return conclusionSegViolation;
		}
	}

	else if (segViolationWall.length > 2) {
		for(let i = 0; i < segViolationWall.length - 2; i++){
			conclusionSegViolation += segViolationWall[i] + ', ';
		}
		if(segViolationWall[segViolationWall.length - 1] == 'верхушки'){
			conclusionSegViolation += segViolationWall[segViolationWall.length - 2] + ' стенок и ' + segViolationWall[segViolationWall.length - 1];
			segViolationWall = [];
			return conclusionSegViolation;
		}
		else{
			conclusionSegViolation += segViolationWall[segViolationWall.length - 2] + ' и ' + segViolationWall[segViolationWall.length - 1] + ' стенок';
			segViolationWall = [];
			return conclusionSegViolation;
		}
	}

}

function segViolationGetDivisionValue() {
	conclusionSegViolation = '';
	for(let i = 0 ; i < segViolationDivisionRadios.length ; i++){
		if(segViolationDivisionRadios[i].checked){
				segViolationDivision.push(segViolationDivisionRadios[i].value);
				//console.log('Длина массива ' + segViolationDivision.length);
			}
		}
	
	if (segViolationDivision.length == 1){
		conclusionSegViolation += segViolationDivision[0] + ' отделе.';
		segViolationDivision = [];
		return conclusionSegViolation;
	}
	else if(segViolationDivision.length == 2){
		conclusionSegViolation += segViolationDivision[0] + ' и ' + segViolationDivision[1] + ' отделах.';
		segViolationDivision = [];
		return conclusionSegViolation;
	}
	else if(segViolationDivision.length > 2){
		for(let i = 0; i < segViolationDivision.length - 2; i++ ){
			conclusionSegViolation += segViolationDivision[i] + ', ';
		}
		conclusionSegViolation += segViolationDivision[segViolationDivision.length - 2] + ' и ' + segViolationDivision[segViolationDivision.length - 1] + ' отделах.'; 
		segViolationDivision = [];
		return conclusionSegViolation;
	}
	
}

function segViolationRemoveListItem () {
	let target = this.name;
	document.getElementById(target).remove();
}

function segViolationAdd() {
	
	var segViolationListItem = document.createElement('li');
	var segViolationListRemoveItem = document.createElement('input');
	segViolationListItem.id = 'segViolationItem' + segViolationListCounter;
	segViolationListRemoveItem.type = 'button';
	segViolationListRemoveItem.value = 'Удалить';
	segViolationListRemoveItem.name = 'segViolationItem' + segViolationListCounter;
	segViolationListRemoveItem.onclick = segViolationRemoveListItem;
	if(isChecked(segViolationDivisionRadios)){
		segViolationListItem.innerHTML = segViolationGetTypeValue() + ' ' + segViolationGetWallValue() + ' в ' + segViolationGetDivisionValue();
	}
	segViolationList.appendChild(segViolationListItem);
	segViolationListItem.appendChild(segViolationListRemoveItem);
	conclusionSegViolation = '';
	uncheck(segViolationTypeRadios);
	uncheck(segViolationWallRadios);
	uncheck(segViolationDivisionRadios);
	segViolationListCounter++;
	segViolationAddButton.disabled = true;
}

function segViolationTypeSelect(){}

function calcComment(){
	if(leftVentricleCommentAddPhrase.checked){
		resultLeftVentricleComment.innerHTML = leftVentricleComment.value + ' Межжелудочковая перегородка имеет сигмовидную форму; для пожилого возраста это вариант нормы.';
	}
	else{resultLeftVentricleComment.innerHTML = leftVentricleComment.value}
}

function showAsymmetricHypertrophiaType(){
	if (asymmetricHypertrophia.checked) {
		asymmetricHypertrophiaTypeView.style.display = 'flex';
		resultAsymmetricHypertrophiaTypeView.style.display = 'block';}
	else {asymmetricHypertrophiaTypeView.style.display = 'none'
			resultAsymmetricHypertrophiaTypeView.style.display = 'none';}
}

function calcSurfaceArea(){
	if(weight.value && height.value){
		surfaceArea = 0.007184 * Math.pow(Number(weight.value), 0.425) * Math.pow(Number(height.value), 0.725);
	}
	else {
			surfaceArea = 0;
		}	
}

function calcLeftAuricleIndex(){
	leftAuricleIndex = Number(leftAuricle.value) / surfaceArea;
}

function calcIndexKSO(){
	indexKSO = Number(KSO.value) / surfaceArea;
}

function calcIndexKDR(){
	indexKDR = Number(KDR.value) / surfaceArea;
}

function calcLeftVentricleVolumeIndex(){
	leftVentricleVolumeIndex = leftVentricleVolume / surfaceArea;
	
}

function calcTeichholzEF(){
	TeichholzEF = (7 * Math.pow(Number(KDR.value), 3) / (Number(KDR.value) + 2.4) - 7 * Math.pow(Number(KSR.value), 3) / (Number(KSR.value) + 2.4)) / (7 * Math.pow(Number(KDR.value), 3) / (Number(KDR.value) + 2.4)) * 100;	
}

function calcRWT(){
	RWT = 2 * Number(leftAuricleWallThickness.value) / Number(KDR.value);
}

function calcMyocardiumMass(){
	myocardiumMass = (0.8 * (1.04 * Math.pow((Number(heartSeptumThickness.value) + Number(KDR.value) + Number(leftAuricleWallThickness.value)), 3) - Math.pow(Number(KDR.value), 3)) + 0.6) * 1e-3;
}

function calcMyocardiumMassIndex(){
	myocardiumMassIndex = myocardiumMass / surfaceArea;
}

function calcAorticBaseToSurfaceAreaRatio() {
	aorticBaseToSurfaceAreaRatio = Number(aorticBase.value) / surfaceArea;
}

function calcAscendingAortaToSurfaceAreaRatio(){
	ascendingAortaToSurfaceAreaRatio = Number(ascendingAorta.value) / surfaceArea;
}

function calcRightAtriumLongitudinalSizeIndex(){
	rightAtriumLongitudinalSizeIndex = Number(rightAtriumLongitudinalSize.value) / surfaceArea;
}

function calcRightAtriumTransverseSizeIndex(){
	rightAtriumTransverseSizeIndex = Number(rightAtriumTransverseSize.value) / surfaceArea;
}

function calcRightAtriumVolumeIndex(){
	rightAtriumVolumeIndex = Number(rightAtriumVolume.value) / surfaceArea;
}

function calcRightVentricleEndDiastolicVolumeIndex(){
	rightVentricleEndDiastolicVolumeIndex = Number(rightVentricleEndDiastolicVolume.value) / surfaceArea;
}

function calcRightVentricleSystolicPressure(){
	rightVentricleSystolicPressure = Number(tricuspidValveRegurgitationGradient.value) + rightAtriumPressure;
}

function calcEarlyToLateFillingVelocityRatio(){
	earlyToLateFillingVelocityRatio = Number(earlyDiastolicFillingVelocity.value) / Number(lateDiastolicFillingVelocity.value);
}

function calcEarlyDiastolicFillingVelocityToMovementRatio(){
	earlyDiastolicFillingVelocityToMovementRatio = Number(earlyDiastolicFillingVelocity.value) / Number(earlyDiastolicMovementVelocity);
}

function calcLeftAuricleConclusion(){
	if(gender == 'Мужской'){
		if(leftAuricleIndex < 23){return 'Нормальный размер ЛП на основании индекса размера (ASE/EAE, 2005).'}
		else if(leftAuricleIndex >= 24 && leftAuricleIndex < 26){return 'Незначительное увеличение ЛП на основании индекса размера (ASE/EAE, 2005).'}
		else if(leftAuricleIndex >= 26 && leftAuricleIndex < 29){return 'Умеренное увеличение ЛП на основании индекса размера (ASE/EAE, 2005).'}
		else {return 'Значительное увеличение ЛП на основании индекса размера (ASE/EAE, 2005).'}
	}
	else if(gender == 'Женский'){
		if(leftAuricleIndex < 23){return 'Нормальный размер ЛП на основании индекса размера (ASE/EAE, 2005).'}
		else if(leftAuricleIndex >= 24 && leftAuricleIndex < 26){return 'Незначительное увеличение ЛП на основании индекса размера (ASE/EAE, 2005).'}
		else if(leftAuricleIndex >= 26 && leftAuricleIndex < 29){return 'Умеренное увеличение ЛП на основании индекса размера (ASE/EAE, 2005).'}
		else {return 'Значительное увеличение ЛП на основании индекса размера (ASE/EAE, 2005).'}
	}
	else{
		return 'Невозможно дать заключение о размерах ЛП. Не указан пол.'
	}
}

function calcIndexKSOconclusion(){
	if(indexKSO <= 28){indexKSOConclusion = 'Нормальный размер ЛП на основании индекса КСО.'}
	else if(indexKSO > 28 && indexKSO <= 33){indexKSOConclusion = 'Незначительное увеличение ЛП на основании индекса КСО.'}
	else if(indexKSO > 33 && indexKSO <= 39){indexKSOConclusion ='Умеренное увеличение ЛП на основании индекса КСО.'}
	else if(indexKSO > 39 && indexKSO <= 150){indexKSOConclusion = 'Значительное увеличение ЛП на основании индекса КСО.'}
	else { indexKSOConclusion = 'Гигантское левое предсердие на основании индекса КСО.'}
}

function calcIndexKDRconclusion(){
	if(gender == 'Мужской'){
		if(indexKDR < 30){indexKDRconclusion = 'Нормальный размер левого желудочка на основании индекса КДР.'}
		else if(indexKDR >= 30 && indexKDR < 33){indexKDRconclusion = 'Незначительное увеличение левого желудочка на основании индекса КДР.'}
		else if(indexKDR >= 33 && indexKDR < 36){indexKDRconclusion = 'Умеренное увеличение левого желудочка на основании индекса КДР.'}
		else {indexKDRconclusion = 'Значительное увеличение левого желудочка на основании индекса КДР.' }
	}
	else if(gender == 'Женский'){
		if(indexKDR < 31){indexKDRconclusion = 'Нормальный размер левого желудочка на основании индекса КДР.'}
		else if(indexKDR >= 31 && indexKDR < 34){indexKDRconclusion = 'Незначительное увеличение левого желудочка на основании индекса КДР.'}
		else if(indexKDR >= 34 && indexKDR < 37){indexKDRconclusion = 'Умеренное увеличение левого желудочка на основании индекса КДР.'}
		else {indexKDRconclusion = 'Значительное увеличение левого желудочка на основании индекса КДР.' }
	}
	else {indexKDRconclusion = 'Не указан пол для заключения по КДР.'}
}

function calcLeftVentricleConclusion(){
	if(gender == 'Мужской'){
		if(leftVentricleVolumeIndex <= 74){leftVentricleConclusion = 'Нормальный размер левого желудочка.'}
		else if(leftVentricleVolumeIndex > 74 && leftVentricleVolumeIndex <= 89){leftVentricleConclusion = 'Незначительное увеличение левого желудочка.'}
		else if(leftVentricleVolumeIndex > 89 && leftVentricleVolumeIndex <= 100){leftVentricleConclusion = 'Умеренное увеличение левого желудочка.'}
		else {'Значительное увеличение левого желудочка.'}
	}
	else if(gender == 'Женский'){
		if(leftVentricleVolumeIndex <= 61){leftVentricleConclusion = 'Нормальный размер левого желудочка.'}
		else if(leftVentricleVolumeIndex > 62 && leftVentricleVolumeIndex <= 70){leftVentricleConclusion = 'Незначительное увеличение левого желудочка.'}
		else if(leftVentricleVolumeIndex > 71 && leftVentricleVolumeIndex <= 80){leftVentricleConclusion = 'Умеренное увеличение левого желудочка.'}
		else {'Значительное увеличение левого желудочка.'}
	}
	else {leftVentricleConclusion = 'Невозможно дать заключение об индексе объема ЛЖ. Не указан пол.'}
}

function conclusionCalcTeichholzEF(){
	if(TeichholzEF < 35){conclusionTeichholzEF = 'Выраженное снижение сократимости миокарда ЛЖ по Тейхольцу.'}
	else if (TeichholzEF >= 35 && TeichholzEF < 55){conclusionTeichholzEF = 'Умеренное снижение сократимости миокарда ЛЖ по Тейхольцу.'}
	else if (TeichholzEF >= 55 && TeichholzEF < 60){conclusionTeichholzEF = 'Небольшое снижение сократимости миокарда ЛЖ по Тейхольцу.'}
	else {conclusionTeichholzEF = 'Нормальная сократимость миокарда ЛЖ по Тейхольцу.'}
}

function conclusionCalcSimpsonEF(){
	if (SimpsonEF >= 55) {conclusionSimpsonEF = 'Нормальная сократимость миокарда ЛЖ по Симпсону.'}
	else if (SimpsonEF >= 45 && SimpsonEF < 55) {conclusionSimpsonEF = 'Незначительное снижение сократимости миокарда ЛЖ по Симпсону.'}
	else if (SimpsonEF >= 30 && SimpsonEF < 45) {conclusionSimpsonEF = 'Умеренное снижение сократимости миокарда ЛЖ по Симпсону.'}
	else {conclusionSimpsonEF = 'Выраженное снижение сократимости миокарда ЛЖ по Симпсону.'}
}

function conclusionCalcMyocardiumMass(){
	if (gender == 'Мужской') {
		if (myocardiumMassIndex < 115) {conclusionMyocardiumMass = 'Нормальная масса миокарда ЛЖ на основании индекса массы'}
		else if (myocardiumMassIndex >= 115 && myocardiumMassIndex < 131) {conclusionMyocardiumMass = 'Незначительное увеличение массы миокарда ЛЖ на основании индекса массы'}
		else if (myocardiumMassIndex >= 131 && myocardiumMassIndex < 148) {conclusionMyocardiumMass = 'Умеренное увеличение массы миокарда ЛЖ на основании индекса массы'}
		else {conclusionMyocardiumMass = 'Значительное увеличение массы миокарда ЛЖ на основании индекса массы'}
		conclusionMyocardiumMass += ' (АSE/ЕАCVI, 2015).';
	}
	else if (gender == 'Женский') {
		if (myocardiumMassIndex < 95) {conclusionMyocardiumMass = 'Нормальная масса миокарда ЛЖ на основании индекса массы'}
		else if (myocardiumMassIndex >= 95 && myocardiumMassIndex < 108) {conclusionMyocardiumMass = 'Незначительное увеличение массы миокарда ЛЖ на основании индекса массы'}
		else if (myocardiumMassIndex >= 108 && myocardiumMassIndex < 121) {conclusionMyocardiumMass = 'Умеренное увеличение массы миокарда ЛЖ на основании индекса массы'}
		else {conclusionMyocardiumMass = 'Значительное увеличение массы миокарда ЛЖ на основании индекса массы'}
		conclusionMyocardiumMass += ' (АSE/ЕАCVI, 2015).';
	}
	else {conclusionMyocardiumMass = 'Невозможно дать заключение о массе миокарда ЛЖ. Не указан пол.'}
}

function conclusionCalcLeftVentricleGeometry(){
	if (gender == 'Мужской'){
		if(RWT > 0.42){
			if(myocardiumMassIndex > 115){conclusionLeftVentricleGeometry = 'Концентрическая гипертрофия ЛЖ согласно ОТС и индексу массы миокарда.'}
			else {conclusionLeftVentricleGeometry = 'Концентрическое ремоделирование ЛЖ согласно ОТС и индексу массы миокарда.'}
		}
		else {
			if(myocardiumMassIndex > 115){conclusionLeftVentricleGeometry = 'Эксцентрическая гипертрофия ЛЖ согласно ОТС и индексу массы миокарда.'}
			else {conclusionLeftVentricleGeometry = 'Нормальная геометрия ЛЖ согласно ОТС и индексу массы миокарда.'}
		}
	}
	else if (gender == 'Женский'){
		if(RWT > 0.42){
			if(myocardiumMassIndex > 95){conclusionLeftVentricleGeometry = 'Концентрическая гипертрофия ЛЖ согласно ОТС и индексу массы миокарда.'}
			else {conclusionLeftVentricleGeometry = 'Концентрическое ремоделирование ЛЖ согласно ОТС и индексу массы миокарда.'}
		}
		else {
			if(myocardiumMassIndex > 95){conclusionLeftVentricleGeometry = 'Эксцентрическая гипертрофия ЛЖ согласно ОТС и индексу массы миокарда.'}
			else {conclusionLeftVentricleGeometry = 'Нормальная геометрия ЛЖ согласно ОТС и индексу массы миокарда.'}
		}
	}
}

function conclusionCalcLeftVentricleObstruction(){
	var gradientValue = Number(leftVentricleOutputGradient.value);
	if (gradientValue < 16){conclusionLeftVentricleObstruction = 'Нормальная степень обструкции ВОЛЖ на основании значения градиента.'}
	else if (gradientValue >= 16 && gradientValue < 20){conclusionLeftVentricleObstruction = 'Незначимая степень обструкции ВОЛЖ на основании значения градиента.'}
	else if (gradientValue >= 20 && gradientValue < 50){conclusionLeftVentricleObstruction = 'Небольшая степень обструкции ВОЛЖ на основании значения градиента.'}
	else if (gradientValue >= 50 && gradientValue < 80){conclusionLeftVentricleObstruction = 'Умеренная степень обструкции ВОЛЖ на основании значения градиента.'}
	else {conclusionLeftVentricleObstruction = 'Выраженная степень обструкции ВОЛЖ на основании значения градиента.'}
}

function conclusionCalcAorticRootEnlargement(){
	if(gender == 'Мужской'){
		if(aorticBaseToSurfaceAreaRatio >= 15 && aorticBaseToSurfaceAreaRatio < 19){
			conclusionAorticRootEnlargement = 'Нормальный корень аорты.';
		}
		else{conclusionAorticRootEnlargement = 'Корень аорты расширен.' };
	}
	else if(gender == 'Женский'){
		if(aorticBaseToSurfaceAreaRatio >= 16 && aorticBaseToSurfaceAreaRatio < 20){
			conclusionAorticRootEnlargement = 'Нормальный корень аорты.';
		}
		else{conclusionAorticRootEnlargement = 'Корень аорты расширен.' };
	}
	else{conclusionAorticRootEnlargement = 'Не указан пол.'};
}

function conclusionCalcAorticAneurysm(){
	if(gender == 'Мужской'){
		if(ascendingAortaToSurfaceAreaRatio >= 13 && ascendingAortaToSurfaceAreaRatio < 17){
			conclusionAorticAneurysm = 'Нормальная восходящая аорта.';
		}
		else{conclusionAorticAneurysm = 'Расширение восходящей аорты.';}
	}
	else if(gender == 'Женский'){
		if(ascendingAortaToSurfaceAreaRatio >= 13 && ascendingAortaToSurfaceAreaRatio < 19){
			conclusionAorticAneurysm = 'Нормальная восходящая аорта.';
		}
		else{conclusionAorticAneurysm = 'Расширение восходящей аорты.';}
	}
	else{conclusionAorticAneurysm = 'Не указан пол.';}
}

function conclusionCalcRightAtriumEnlargementByLongitudinalSize(){
	if(gender == 'Мужской'){
		if(rightAtriumLongitudinalSizeIndex >= 21 && rightAtriumLongitudinalSizeIndex < 27){
			conclusionRightAtriumEnlargementByLongitudinalSize = 'Нормальный продольный размер правого предсердия.';
		}
		else{conclusionRightAtriumEnlargementByLongitudinalSize = 'Увеличение размера правого предсердия на основании индекса продольного размера.';}
	}
	else if(gender == 'Женский'){
		if(rightAtriumLongitudinalSizeIndex >= 22 && rightAtriumLongitudinalSizeIndex < 28){
			conclusionRightAtriumEnlargementByLongitudinalSize = 'Нормальный продольный размер правого предсердия.';
		}
		else{conclusionRightAtriumEnlargementByLongitudinalSize = 'Увеличение размера правого предсердия на основании индекса продольного размера.';}
	}
	else{conclusionRightAtriumEnlargementByLongitudinalSize = 'Не указан пол.';}
}

function conclusionCalcRightAtriumEnlargementByTransverseSize(){
	if(gender == 'Мужской'){ 
		if(rightAtriumTransverseSizeIndex >= 16 && rightAtriumTransverseSizeIndex < 22){
			conclusionRightAtriumEnlargementByTransverseSize = 'Нормальный поперечный размер правого предсердия.';
		}
		else{conclusionRightAtriumEnlargementByTransverseSize = 'Увеличение размера правого предсердия на основании индекса поперечного размера.';}
	}
	else if(gender == 'Женский'){
		if(rightAtriumTransverseSizeIndex >= 16 && rightAtriumTransverseSizeIndex < 22){
			conclusionRightAtriumEnlargementByTransverseSize = 'Нормальный поперечный размер правого предсердия.';
		}
		else{conclusionRightAtriumEnlargementByTransverseSize = 'Увеличение размера правого предсердия на основании индекса поперечного размера.';}
	}
	else{conclusionRightAtriumEnlargementByTransverseSize = 'Не указан пол.';}
}

function conclusionCalcRightAtriumEnlargementByVolume(){
	if(gender == 'Мужской'){ 
		if( rightAtriumVolumeIndex >= 18 && rightAtriumVolumeIndex < 32){
			conclusionRightAtriumEnlargementByVolume = 'Нормальный объем правого предсердия.';
		}
		else{conclusionRightAtriumEnlargementByVolume = 'Увеличение объема предсердия на основании индекса объема.';}
	}
	else if(gender == 'Женский'){
		if(rightAtriumVolumeIndex >= 15 && rightAtriumVolumeIndex < 27){
			conclusionRightAtriumEnlargementByVolume = 'Нормальный объем правого предсердия.';
		}
		else{conclusionRightAtriumEnlargementByVolume = 'Увеличение объема правого предсердия на основании индекса объема.';}
	}
	else{conclusionRightAtriumEnlargementByVolume = 'Не указан пол.';}
}

function conclusionCalcRightVentricleEnlargementByParasternalSize(){
	let size = Number(rightVentricleParasternalSize.value);
	if(size){
		if(size < 30){
			conclusionRightVentricleEnlargementByParasternalSize = 'Нормальный размер правого желудочка в парастернальном сечении.';
		}
		else {
			conclusionRightVentricleEnlargementByParasternalSize = 'Увеличение размера правого желудочка в парастернальном сечении.';
		}
	}
}

function conclusionCalcRightVentricleEnlargementByApicalBasalSize(){
	let size = Number(rightVentricleApicalBasalSize.value); 
	if(size){
		if(size < 41){
			conclusionRightVentricleEnlargementByApicalBasalSize = 'Нормальный размер правого желудочка в апикальной позиции на базальном уровне.';
		}
		else {
			conclusionRightVentricleEnlargementByApicalBasalSize = 'Увеличение размера правого желудочка в апикальной позиции на базальном уровне.';
		}
	}
}

function conclusionCalcRightVentricleEnlargementByApicalMedianSize(){
	let size = Number(rightVentricleApicalMedianSize.value);  
	if(size){
		if(size < 35){
			conclusionRightVentricleEnlargementByApicalMedianSize = 'Нормальный размер правого желудочка в апикальной позиции на срединном уровне.';
		}
		else {
			conclusionRightVentricleEnlargementByApicalMedianSize = 'Увеличение размера правого желудочка в апикальной позиции на срединном уровне.';
		}
	}
}

function conclusionCalcRightVentricleEnlargementByApicalLongitudinalSize(){
	let size = Number(rightVentricleApicalLongitudinalSize.value);  
	if(size){
		if(size < 83){
			conclusionRightVentricleEnlargementByApicalLongitudinalSize = 'Нормальный продольный размер правого желудочка в апикальной позиции.';
		}
		else {
			conclusionRightVentricleEnlargementByApicalLongitudinalSize = 'Увеличение продольного размера правого желудочка в апикальной позиции.';
		}
	}	
}

function conclusionCalcRightVentricleEnlargementByEndDiastolicVolumeIndex(){
	if(gender == 'Мужской'){
		if(rightVentricleEndDiastolicVolumeIndex >= 35 && rightVentricleEndDiastolicVolumeIndex < 87){
			conclusionRightVentricleEnlargementByEndDiastolicVolume = 'Нормальный индекс конечно-диастолического объема правого желудочка.';
		}
		else{conclusionRightVentricleEnlargementByEndDiastolicVolume = 'Увеличение объема правого желудочка на основании индекса конечно-диастолического объема.';}
	}
	else if(gender == 'Женский'){
		if(rightVentricleEndDiastolicVolumeIndex >= 32 && rightVentricleEndDiastolicVolumeIndex < 74){
			conclusionRightVentricleEnlargementByEndDiastolicVolume = 'Нормальный индекс конечно-диастолического объема правого желудочка.';
		}
		else{conclusionRightVentricleEnlargementByEndDiastolicVolume = 'Увеличение объема правого желудочка на основании индекса конечно-диастолического объема.';}
	}
	else{conclusionRightVentricleEnlargementByEndDiastolicVolume = 'Не указан пол.';}
}

function conclusionCalcPulmonaryHypertension(){
	if( rightVentricleSystolicPressure < 30 ){
		conclusionPulmonaryHypertension = 'Нормальная легочная гипертензия.';
	}
	else if ( rightVentricleSystolicPressure >= 30 && rightVentricleSystolicPressure < 50 ){
		conclusionPulmonaryHypertension = 'Небольшая легочная гипертензия.';
	}
	else if( rightVentricleSystolicPressure >= 50 && rightVentricleSystolicPressure < 80 ) {
		conclusionPulmonaryHypertension = 'Умеренная легочная гипертензия.';
	}
	else{conclusionPulmonaryHypertension = 'Выраженная легочная гипертензия.';}
}

function conclusionCalcPericardialLiquid() {
	let value = Number(pericardialEffusionValue.value);
	if(value < 10){
		conclusionPericardialLiquid = 'Незначительное количество жидкости в перикарде';
	}
	else if (value >= 10 && value < 20){
		conclusionPericardialLiquid = 'Умеренное количество жидкости в перикарде';
	}
	else{conclusionPericardialLiquid = 'Большое количество жидкости в перикарде';}
}

function conclusionCalcDiastolicFunction() {
	let DT = Number(decelerationTime.value);
	let e = Number(earlyDiastolicMovementVelocity.value);
	if ( ( earlyToLateFillingVelocityRatio >= 0.8 && earlyToLateFillingVelocityRatio < 2 ) && ( DT > 160 && DT < 220 ) ) {
		if ( e > 8 && earlyDiastolicFillingVelocityToMovementRatio < 8 ) {
			conclusionDiastolicFunction = 'Снижения диастолической функции нет.';
		}
		else if( e < 8 && (earlyDiastolicFillingVelocityToMovementRatio >= 8 && earlyDiastolicFillingVelocityToMovementRatio <= 15) ){
			conclusionDiastolicFunction = 'Снижение диастолической функции: псевдонормальный тип.';
		}
	}
	else if ( earlyToLateFillingVelocityRatio < 0.8 && DT >= 220 ) {
			conclusionDiastolicFunction = 'Снижения диастолической функции: обструктивный тип.';
	}
	else if ( earlyToLateFillingVelocityRatio >= 2 && DT <= 160 ) {
			conclusionDiastolicFunction = 'Снижения диастолической функции: рестриктивный тип.';
	}
	else{conclusionDiastolicFunction = 'Не удалось определить тип снижения диастолической функции.';}
}

function setResultValues(){
	getGenderValue();
	getHypertrophiaValue();
	getAsymmericHypertrophiaTypeValue();
	getMitralValveRegurgitationValue();
	getMitralValveRegurgitationIsRelativeValue();
	getAorticValveRegurgitationValue();
	getAorticValveRegurgitationIsRelativeValue();
	getRightAtriumPressureValue();

	calcComment();
	calcSurfaceArea();
	calcIndexKSO();
	calcIndexKDR();
	calcLeftAuricleIndex();
	calcLeftVentricleVolumeIndex();
	calcTeichholzEF();
	calcRWT();
	calcMyocardiumMass();
	calcMyocardiumMassIndex();
	calcAorticBaseToSurfaceAreaRatio();
	calcAscendingAortaToSurfaceAreaRatio();
	calcRightAtriumLongitudinalSizeIndex();
	calcRightAtriumTransverseSizeIndex();
	calcRightAtriumVolumeIndex();
	calcRightVentricleEndDiastolicVolumeIndex();
	calcRightVentricleSystolicPressure();
	calcEarlyToLateFillingVelocityRatio();
	calcEarlyDiastolicFillingVelocityToMovementRatio();

	calcConclusion();

	writeResultHTML();

}

function calcConclusion(){
	calcIndexKSOconclusion();
	calcIndexKDRconclusion();
	calcLeftVentricleConclusion();
	conclusionCalcTeichholzEF();
	conclusionCalcSimpsonEF();
	conclusionCalcMyocardiumMass();
	conclusionCalcLeftVentricleGeometry();
	conclusionCalcLeftVentricleObstruction();
	conclusionCalcAorticRootEnlargement();
	conclusionCalcAorticAneurysm();
	conclusionCalcRightAtriumEnlargementByLongitudinalSize();
	conclusionCalcRightAtriumEnlargementByTransverseSize();
	conclusionCalcRightAtriumEnlargementByVolume();
	conclusionCalcRightVentricleEnlargementByParasternalSize();
	conclusionCalcRightVentricleEnlargementByApicalBasalSize();
	conclusionCalcRightVentricleEnlargementByApicalMedianSize();
	conclusionCalcRightVentricleEnlargementByApicalLongitudinalSize();
	conclusionCalcRightVentricleEnlargementByEndDiastolicVolumeIndex();
	conclusionCalcPulmonaryHypertension();
	conclusionCalcPericardialLiquid();
	conclusionCalcDiastolicFunction();

	conclusion += calcLeftAuricleConclusion() + ' ';
	conclusion += indexKSOConclusion + ' ';
	conclusion += indexKDRconclusion + ' ';
	conclusion += leftVentricleConclusion + ' ';
	conclusion += conclusionTeichholzEF + ' ';
	conclusion += conclusionSimpsonEF + ' ';
	conclusion += conclusionMyocardiumMass + ' ';
	conclusion += conclusionLeftVentricleGeometry + ' ';
	conclusion += conclusionLeftVentricleObstruction + ' ';
	conclusion += conclusionAorticRootEnlargement + ' ';
	conclusion += conclusionAorticAneurysm + ' ';
	conclusion += conclusionRightAtriumEnlargementByLongitudinalSize + ' ';
	conclusion += conclusionRightAtriumEnlargementByTransverseSize + ' ';
	conclusion += conclusionRightAtriumEnlargementByVolume + ' ';
	conclusion += conclusionRightVentricleEnlargementByParasternalSize + ' ';
	conclusion += conclusionRightVentricleEnlargementByApicalBasalSize + ' ';
	conclusion += conclusionRightVentricleEnlargementByApicalMedianSize + ' ';
	conclusion += conclusionRightVentricleEnlargementByApicalLongitudinalSize + ' ';
	conclusion += conclusionRightVentricleEnlargementByEndDiastolicVolume + ' ';
	conclusion += conclusionPulmonaryHypertension + ' ';
	conclusion += conclusionPericardialLiquid + ' ';
	conclusion += conclusionDiastolicFunction;
}

function clearConclusion(){
	conclusion = '';
}

function writeResultHTML(){
	nameResult.innerHTML = name.value;
	ageResult.innerHTML = age.value;
	genderResult.innerHTML = gender;
	heightResult.innerHTML = height.value;
	weightResult.innerHTML = weight.value;
	diagnosisResult.innerHTML = diagnosis.value;
	surfaceAreaResult.innerHTML = surfaceArea.toPrecision(4);
	leftAuricleResult.innerHTML = leftAuricle.value;
	leftAuricleIndexResult.innerHTML = leftAuricleIndex.toPrecision(4);
	resultKSO.innerHTML = KSO.value;
	resultKDR.innerHTML = KDR.value;
	resultKSR.innerHTML = KSR.value;
	resultIndexKSO.innerHTML = indexKSO.toPrecision(4);
	resultIndexKDR.innerHTML = indexKDR.toPrecision(4); 
	resultLeftVentricleVolume.innerHTML = leftVentricleVolume;
	resultLeftVentricleVolumeIndex.innerHTML = leftVentricleVolumeIndex.toPrecision(4);
	resultTeichholzEF.innerHTML = TeichholzEF.toPrecision(4);
	resultSimpsonEF.innerHTML = SimpsonEF;
	resultHeartSeptumThickness.innerHTML = heartSeptumThickness.value;
	resultLeftAuricleWallThickness.innerHTML = leftAuricleWallThickness.value;
	resultRWT.innerHTML = RWT;
	resultMyocardiumMass.innerHTML = myocardiumMass.toPrecision(4);
	resultMyocardiumMassIndex.innerHTML = myocardiumMassIndex.toPrecision(4);
	resultHypertrophia.innerHTML = hypertrophia;
	resultAsymmetricHypertrophiaType.innerHTML = asymmetricHypertrophiaType;
	resultLeftVentricleOutputGradient.innerHTML = leftVentricleOutputGradient.value;
	resultMitralValveRegurgitation.innerHTML = mitralValveRegurgitation;
	resultMitralValveRegurgitationIsRelative.innerHTML = mitralValveRegurgitationIsRelative;
	resultAorticValveRegurgitation.innerHTML = aorticValveRegurgitation;
	resultAorticValveRegurgitationIsRelative.innerHTML = aorticValveRegurgitationIsRelative;

	conclusionResult.innerHTML = conclusion;
}

function showResult(){

	//sidenav.style.display = 'none';
	surveyView.style.display = 'none';
	resultButton.style.display = 'none';
	resultView.style.display = 'block';
	resultHideButton.style.display = 'block';
	resultPrintButton.style.display = 'block';
	setResultValues();

}

function hideResult(){
	//sidenav.style.display = 'block';
	resultView.style.display = 'none';
	resultHideButton.style.display = 'none';
	resultPrintButton.style.display = 'none';
	surveyView.style.display = 'block';
	resultButton.style.display = 'block';

	clearConclusion();
}

var printableHidden = document.getElementById('printable-hidden');

function printResult(){
	printableHidden.style.display = 'block';
	window.print();
	printableHidden.style.display = 'none';
}

resultButton.onclick = showResult;
resultHideButton.onclick = hideResult;
resultPrintButton.onclick = printResult;
