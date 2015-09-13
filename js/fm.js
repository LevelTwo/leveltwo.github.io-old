var checkOptions = {
    id: "",
    checkedSquare: "fa-check-square-o",
    unCheckedSquare: "fa-square-o",
    checkedBtnClass: "btn-success",
    unCheckedBtnClass: "btn-danger",
    defaultBtnClass: "btn-default",
    checkedCircle: "fa-check-circle-o",
    unCheckedCircle: "fa-times-circle-o",
    defaultCircle: "fa-circle-o"
};

var totalScore = {
    totalScore: 0,
    totalAnswers: 0,
    score: '#score',
    scorePercentage: '#score-percentage',
};

function setCorrectSquare(ctl) {
    $(ctl)
    .removeClass(checkOptions.defaultBtnClass)
    .addClass(checkOptions.checkedBtnClass);
}

function setIncorrectSquare(ctl) {
    $(ctl)
    .removeClass(checkOptions.defaultBtnClass)
    .addClass(checkOptions.unCheckedBtnClass);

    $(ctl).addClass('btn-wrong-answer');
}

function checkSquare(ctl) {
    $(ctl).children('i')
    .removeClass(checkOptions.unCheckedSquare)
    .addClass(checkOptions.checkedSquare);
}

function getOccupation(name) {
    for (var i in questions) {
        if (questions[i].name == name) {
            return questions[i].occupation;
        }
    }
}

function getDescription(name) {
    for (var i in questions) {
        if (questions[i].name == name) {
            return questions[i].description;
        }
    }
}

function getImage(name) {
    for (var i in questions) {
        if (questions[i].name == name) {
            return questions[i].image;
        }
    }
}

function setCheckedResult(question) {
    var btnResult = $(".btn-result[href=\"" + "#" + question +"\"]");

    btnResult.children('i')
    .removeClass(checkOptions.defaultCircle)
    .addClass(checkOptions.checkedCircle);
    btnResult
    .removeClass(checkOptions.defaultBtnClass)
    .addClass(checkOptions.checkedBtnClass);
}

function setUncheckedResult(question) {
    var btnResult = $(".btn-result[href=\"" + "#" + question +"\"]");

    btnResult.children('i')
    .removeClass(checkOptions.defaultCircle)
    .addClass(checkOptions.unCheckedCircle);
    btnResult
    .removeClass(checkOptions.defaultBtnClass)
    .addClass(checkOptions.unCheckedBtnClass);
}

function calculateScore() {
    $(totalScore.score).text(totalScore.totalAnswers);
    $(totalScore.scorePercentage).text(totalScore.totalScore.toString() + ' / ' + totalScore.totalAnswers.toString() + ' (' + Math.trunc(totalScore.totalScore / totalScore.totalAnswers * 100).toString() + '%)');
}

function updateMessage() {
    var percentage = Math.trunc(totalScore.totalScore / totalScore.totalAnswers * 100);
    if (percentage < 33) {
        $("#message").text('You may need to brush up on your footballing + mathematical knowledge.');
    } else if (percentage < 66) {
        $("#message").text('You probably guessed your way to this stage.');
    } else {
        $("#message").text('Impressive. You probably know many footballers or mathematicians.');
    }
}

function injectStyles(question, image) {
    var rule = '.' + question + ' { background: url("' + image + '") no-repeat center center; background-size: cover; }';
    var div = $("<div />", {
        html: '&shy;<style>' + rule + '</style>'
    }).appendTo("body");
}

function buttonHandler(inputSelector, button) {
    inputSelector.off('click');
    inputSelector.prev().off('click');
    var name = inputSelector.parent().attr('name');
    var occupation = getOccupation(name);
    var question = inputSelector.closest('section').attr('id');
    var description = getDescription(name);
    var image = getImage(name);

    totalScore.totalAnswers += 1;

    if (button == 'btn-mathematician') {
        if (occupation == 'mathematician') {
            setCorrectSquare(inputSelector);
            setIncorrectSquare(inputSelector.prev());
            setCheckedResult(question);
            totalScore.totalScore += 1;
        } else {
            setCorrectSquare(inputSelector.prev());
            setIncorrectSquare(inputSelector);
            setUncheckedResult(question);
        }

        inputSelector.addClass('disabled');
        inputSelector.prev().addClass('disabled');
    } else {
        if (occupation == 'footballer') {
            setCorrectSquare(inputSelector);
            setIncorrectSquare(inputSelector.next());
            setCheckedResult(question);
            totalScore.totalScore += 1;
        } else {
            setCorrectSquare(inputSelector.next());
            setIncorrectSquare(inputSelector);
            setUncheckedResult(question);
        }

        inputSelector.next().addClass('disabled');
        inputSelector.addClass('disabled');
    }

    checkSquare(inputSelector);
    injectStyles(question, image);
    $('#' + question).children('.container').children('.description').text(description);

    calculateScore();
    updateMessage();
}

$(document).ready(function () {
    $(".btn-mathematician").on('click', function() {
        buttonHandler($(this), 'btn-mathematician');
    });

    $(".btn-footballer").on('click', function() {
        buttonHandler($(this), 'btn-footballer');
    });
});
