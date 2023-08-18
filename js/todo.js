// add text function
function addText(){
    const inputType =getInputValue('input-type');
    const outputResult =inputType;
    // get the value as output
    setElementInnerText('output-result', outputResult)
    // add the output to the list
    addToList('Text', outputResult)
}
// reuseable input value function (for all)
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;

    // to clear value
    inputField.value= " ";

    const value = inputValueText;
    return value; 
}
// reuseable set span, p, div etc text (for all)
    function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.value = area;
    }
//  add to the list
function addToList(outputResult, action){
    console.log(outputResult+ " " +action);
    const outputValue = document.getElementById('output-result');
    // creating element
    const count = outputValue.childElementCount;
    const li = document.createElement('li');
    // li.classList.add('my-4');
    // li.innerText = `${count +1}. ${outputResult} ${action}`;
    li.classList.add('my-4');
    li.innerHTML = `${count + 1}. ${outputResult} ${action}`;
    outputValue.appendChild(li);
}