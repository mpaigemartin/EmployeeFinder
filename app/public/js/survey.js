const answers = [];

const e = document.getElementById('select');
const strUser = e.options[e.selectedIndex].value

const results = function(){
    answers.push(document.getElementById("strUser").value)
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
    };
$.post('/api/employees', strUser)

}

$('#submit').on('click', submit)