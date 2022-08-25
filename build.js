"use strict";

function nextInput() {
    const input1 = document.querySelector('#input-1');
    const input2 = document.querySelector('#input-2');

    input1.style.display = 'none';
    input2.style.display = 'block';
}

function backFirst() {
    const input1 = document.querySelector('#input-1');
    const input2 = document.querySelector('#input-2');

    input1.style.display = 'block';
    input2.style.display = 'none';
}

function nextninput() {
    const input2 = document.querySelector('#input-2');
    const input3 = document.querySelector('#input-3');

    input2.style.display = 'none';
    input3.style.display = 'block';
}

function back3rdLast() {
    const input2 = document.querySelector('#input-2');
    const input3 = document.querySelector('#input-3');

    input2.style.display = 'block';
    input3.style.display = 'none';
}

function nextn2input() {
    const input3 = document.querySelector('#input-3');
    const input4 = document.querySelector('#input-4');

    input3.style.display = 'none';
    input4.style.display = 'block';
}

function back2ndLast() {
    const input3 = document.querySelector('#input-3');
    const input4 = document.querySelector('#input-4');

    input3.style.display = 'block';
    input4.style.display = 'none';
}

function nextn3input() {
    const input4 = document.querySelector('#input-4');
    const input5 = document.querySelector('#input-5');

    input4.style.display = 'none';
    input5.style.display = 'block';
}

function backLast() {
    const input4 = document.querySelector('#input-4');
    const input5 = document.querySelector('#input-5');

    input4.style.display = 'block';
    input5.style.display = 'none';
}

function back() {
    const input5 = document.querySelector('#input-5');
    const resume = document.querySelector('#resume');

    input5.style.display = 'block';
    resume.style.display = 'none';
}

function openResume() {
    const input5 = document.querySelector('#input-5');
    const resume = document.querySelector('#resume');

    input5.style.display = 'none';
    resume.style.display = 'block';

    document.getElementById('name').innerHTML = document.getElementById('fname').value + " " + document.getElementById('lname').value;
    document.getElementById('name2').innerHTML = document.getElementById('fname').value + " " + document.getElementById('lname').value;

    document.getElementById('phone').innerHTML = document.getElementById('inphone').value;

    document.getElementById('email').innerHTML = document.getElementById('inemail').value;

    document.getElementById('location').innerHTML = document.getElementById('inarea').value + ", " + document.getElementById('incity').value + ", " + document.getElementById('inzipcode').value + ", " + document.getElementById('incountry').value;

    document.getElementById('objective').innerHTML = document.getElementById('inobjective').value;

    document.getElementById('skill1').innerHTML = document.getElementById('inskill1').value;
    document.getElementById('skill2').innerHTML = document.getElementById('inskill2').value;
    document.getElementById('skill3').innerHTML = document.getElementById('inskill3').value;
    document.getElementById('skill4').innerHTML = document.getElementById('inskill4').value;

    document.getElementById('profession').innerHTML = document.getElementById('inprofession').value;
    document.getElementById('profession2').innerHTML = document.getElementById('inprofession').value;

    document.getElementById('linkedin').innerHTML = document.getElementById('inlinkedin').value;
    document.getElementById('github').innerHTML = document.getElementById('ingithub').value;

    document.getElementById('exp1').innerHTML = document.getElementById('inexp1').value;
    document.getElementById('fromto').innerHTML = document.getElementById('infromto').value;
    document.getElementById('company1').innerHTML = document.getElementById('incompany1').value + " / " + document.getElementById('incityexp1').value;
    document.getElementById('descriptionex').innerHTML = document.getElementById('indescriptionex').value;

    document.getElementById('exp2').innerHTML = document.getElementById('inexp2').value;
    document.getElementById('fromto2').innerHTML = document.getElementById('infromto2').value;
    document.getElementById('company2').innerHTML = document.getElementById('incompany2').value + " / " + document.getElementById('incityexp2').value;
    document.getElementById('descriptionex2').innerHTML = document.getElementById('indescriptionex2').value;

    document.getElementById('degree').innerHTML = document.getElementById('indegree').value + " - " + document.getElementById('inschool').value;
    document.getElementById('scfromto').innerHTML = document.getElementById('inscfromto').value;
    document.getElementById('degree2').innerHTML = document.getElementById('indegree2').value + " - " + document.getElementById('inschool2').value;
    document.getElementById('scfromto2').innerHTML = document.getElementById('inscfromto2').value;

    document.getElementById('pipe1').style.width = document.getElementById('inpipe1').value;
    document.getElementById('pipe2').style.width = document.getElementById('inpipe2').value;
    document.getElementById('pipe3').style.width = document.getElementById('inpipe3').value;
    document.getElementById('pipe4').style.width = document.getElementById('inpipe4').value;


    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };


    $('#downloadPDF').click(function () {
        doc.fromHTML($('body').get(0), 15, 15, {
            'width': 700,
            'elementHandlers': specialElementHandlers
        });
        doc.save('resume.pdf');
    });
}
