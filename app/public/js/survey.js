const answers = [];

const e = document.getElementById('select');
const strUser = e.options[e.selectedIndex].value

const results = function(){
    answers.push(document.getElementById("strUser").value)
    employeeSelection.push(`${newEmployee}`)
}

const submit = function(e){
    e.preventDefault();
    const strUser = {
        name: $('#name').val(),
        photo: $('#link').val(),
        scores: [
            $('question1').val(),
            $('question2').val(),
            $('question3').val(),
            $('question4').val(),
            $('question5').val(),
            $('question6').val(),
            $('question7').val(),
            $('question8').val(),
            $('question9').val(),
            $('question10').val(),
        ]
    }};


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

const employeeSelection = function (selection, submit) {

}

const employeeEquation = function (){
const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const sum = function(strUser){
        let scores = strUser.scores
        let reducedScores = scores.map(Number)
        let userSum = reducedScores.reduce(reducer)
        return userSum
    

    let userSum = sum(strUser)
    let lowestDifference = 100;
    let employeeRank = 100;
    let employeeSelection;
    let employeeSum = 0;

    for (let i = 0; i < employeeList.length; i++) {
        employeeSum = employeesList[i].scores.reduce(reducer);
        employeeRank =  Math.abs(parseInt(userSum) - parseInt(employeeSum));

        if (employeeRank<=lowestDifference){
            lowestDifference=employeeRank;
            employeeSelection=i;
        }
    }
    const selection = {
        "name": employeesList[i].name,
        "photo": employeesList[i].link,
        "rank": employeeRank
    }}};

    

$('#submit').on('click', submit)