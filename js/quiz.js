var checkOptions = {
    correctBtnClass: "mdl-button--correct",
    incorrectBtnClass: "mdl-button--incorrect",
    defaultIcon: "remove",
    checkedIcon: "check",
    uncheckedIcon: "close"
};

var totalScore = {
    totalScore: 0,
    totalAnswers: 0,
    totalQuestions: 12,
    score: '.score',
    scorePercentage: '.score-percentage',
    answered: '.answered'
};

// jQuery plug-in, adds timeout to .scroll()
(function($) {
    var uniqueCntr = 0;
    $.fn.scrolled = function (waitTime, fn) {
        if (typeof waitTime === "function") {
            fn = waitTime;
            waitTime = 500;
        }
        var tag = "scrollTimer" + uniqueCntr++;
        this.scroll(function () {
            var self = $(this);
            var timer = self.data(tag);
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                self.removeData(tag);
                fn.call(self[0]);
            }, waitTime);
            self.data(tag, timer);
        });
    };
})(jQuery);

function getOccupation(name) {
  for (var i in questions) {
    if (questions[i].name == name) {
        return questions[i].occupation;
    }
  }
}

function getNationality(name) {
  for (var i in questions) {
    if (questions[i].name == name) {
        return questions[i].nationality;
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

function setCheckedButton(correct, incorrect) {
  correct
  .addClass(checkOptions.correctBtnClass);

  incorrect
  .addClass(checkOptions.incorrectBtnClass);
}

function updateMessage(imageCard) {
  var percentage = Math.trunc(totalScore.totalScore / totalScore.totalQuestions * 100);
  if (imageCard) {
    if (percentage < 33) {
      $(".message").text('You may need to brush up on your identification ability.');
    } else if (percentage < 66) {
      $(".message").text('You probably guessed your way to this stage.');
    } else {
      $(".message").text('Impressive. You are probably very familiar with the Thai or Chinese.');
    }
  } else {
    if (percentage < 33) {
      $(".message").text('You may need to brush up on your footballing + mathematical knowledge.');
    } else if (percentage < 66) {
      $(".message").text('You probably guessed your way to this stage.');
    } else {
      $(".message").text('Impressive. You probably know many footballers or mathematicians.');
    }
  }
}

function calculateScore() {
    $(totalScore.score).text(totalScore.totalScore);
    $(totalScore.answered).text(totalScore.totalAnswers);
    $(totalScore.scorePercentage).text(Math.trunc(totalScore.totalScore / totalScore.totalQuestions * 100).toString() + '%');
}

$(document).ready(function() {
  // $(function() {
  //     var navHeight = $('.mdl-layout__content').outerHeight();
  //     $('a.page-scroll').bind('click', function(event) {
  //         var $anchor = $(this);
  //         console.log($($anchor.attr('href')).offset().top);
  //         $('.mdl-layout__content').stop().animate({
  //             scrollTop: $($anchor.attr('href')).offset().top
  //         }, 1500, 'easeInOutExpo');
  //         event.preventDefault();
  //     });
  // });

  var lastId,
  topMenu = $(".mdl-menu"),
  topMenuHeight = $('.mdl-layout__header').outerHeight(),
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
      var item = $($(this).attr('href'));
      if (item.length) {
          return item;
      }
  });

  $(".mdl-more-info").on("click", function() {
    var moreInfo = $(this).children('.more-info');
    if (moreInfo.text() == "More Info") {
      moreInfo.text("Less Info");
      $('.more-info-icon').text('expand_less');
      $(this).parent().next().removeAttr('style');
    } else {
      moreInfo.text("More Info");
      $('.more-info-icon').text('expand_more');
      $(this).parent().next().attr('style', 'display: none;');
    }
  });

  // Bind to scroll
  $(".mdl-layout__content").scrolled(function () {
    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      // console.log($(this));
      // console.log($(this).offset().top - topMenuHeight);
      if ($(this).offset().top - topMenuHeight < 30) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (id && lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems.children().removeAttr('disabled');
      $("a[href=#" + id + "]").children().attr('disabled', true);
      $('#question-number').text(id);
    }
  });


  $(".mdl-button--question").on("click", function() {
    var imageCard = $(this).hasClass('mdl-button--image');
    var button = $(this).children(".mdl-checkbox__label").text().toLowerCase();
    var name = $(this).parent().prev().children().text();
    var description = getDescription(name);
    var image = getImage(name);
    var question = $(this).closest('.mdl-cell').attr('id');
    var result = $('#' + question + "-result").children().children().children().children();

    $(this).removeClass('mdl-button--colored');
    $(this).children(".material-icons")
    .text(checkOptions.checkedIcon);
    totalScore.totalAnswers += 1;


    if (!imageCard) {
      var occupation = getOccupation(name);
      $(this).parent().prev().attr('style',
                                   "background-image: url('"+ image + "'); background-repeat: no-repeat; background-position: center; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;");
      if (button == "footballer") {
        var mathematicianButton = $(this).next();
        if (occupation == "footballer") {
          setCheckedButton($(this), mathematicianButton);
          totalScore.totalScore += 1;
          result.text(checkOptions.checkedIcon);
        } else {
          setCheckedButton(mathematicianButton, $(this));
          result.text(checkOptions.uncheckedIcon);
        }
        mathematicianButton.attr('style', 'pointer-events: none;');
        mathematicianButton.removeClass('mdl-button--colored');
      } else {
        var footballerButton = $(this).prev();
        if (occupation == "mathematician") {
          setCheckedButton($(this), footballerButton);
          totalScore.totalScore += 1;
          result.text(checkOptions.checkedIcon);
        } else {
          setCheckedButton(footballerButton, $(this));
          result.text(checkOptions.uncheckedIcon);
        }
        footballerButton.attr('style', 'pointer-events: none;');
        footballerButton.removeClass('mdl-button--colored');
      }
    } else {
      var nationality = getNationality(name);
      console.log(name);
      console.log(nationality);
      $(this).parent().prev().children().removeAttr('style');
      if (button == "chinese") {
        var thaiButton = $(this).prev();
        if (nationality == "Chinese") {
          setCheckedButton($(this), thaiButton);
          totalScore.totalScore += 1;
          result.text(checkOptions.checkedIcon);
        } else {
          setCheckedButton(thaiButton, $(this));
          result.text(checkOptions.uncheckedIcon);
        }
        thaiButton.attr('style', 'pointer-events: none;');
        thaiButton.removeClass('mdl-button--colored');
      } else {
        var chineseButton = $(this).next();
        console.log(chineseButton);
        if (nationality == "Thai") {
          setCheckedButton($(this), chineseButton);
          totalScore.totalScore += 1;
          result.text(checkOptions.checkedIcon);
        } else {
          setCheckedButton(chineseButton, $(this));
          result.text(checkOptions.uncheckedIcon);
        }
        chineseButton.attr('style', 'pointer-events: none;');
        chineseButton.removeClass('mdl-button--colored');
      }
    }

    $(this).parent().children(".mdl-more-info").removeAttr('style');
    // disable buttons
    $(this).attr('style', 'pointer-events: none;');
    calculateScore();
    updateMessage(imageCard);
  });
});

// var scrollTo = function(top) {
//   var content = $(".mdl-layout__content");
//   var target = top ? 0 : $(".mdl-layout__content").height();
//   content.stop().animate({ scrollTop: target }, "slow");
// };

// var scrollToTop = function() {
//   scrollTo(true);
// };

// var scrollToBottom = function() {
//   scrollTo(false);
// };

// $(function() {
//   $("#scroll-up-btn").click(scrollToTop);
//   $("#scroll-down-btn").click(scrollToBottom);
// });
