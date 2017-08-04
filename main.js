$(document).ready(function(){

    /*-=-=-= Total Time Spent on Page =-=-=- */
    /* Will Fire on Unload */

        var startTime = Date.now();
        var endTime;
        $(window).on('beforeunload', function(){
            endTime = Date.now();
            console.log("Time on Page: " + (endTime - startTime));
        });

    /*-=-=-= What Percentage of Page Was Viewed =-=-=-*/
    /* Will Fire on Unload */

        var maxScroll = 0;
        var windowH = $(window).height();
        var docH = $(document).height();
        var scroll = $(window).scrollTop();
        var length = docH - windowH;
        var percentScroll = Math.round(scroll / length * 100);
        if (percentScroll > maxScroll) {
            maxScroll = percentScroll;
        }
        $(window).on('beforeunload', function() {
            // console.log(maxScroll + '% scrolled');
        });

    /*-=-=-= Time Spent Hovering Mouse Over Each Element on Page =-=-=-*/
    /* Will appear in console.log as you hover over element */

        var startHover;
        var endHover;
        $('body').hover(function(event){
            startHover = Date.now();
        }, function (event) {
            exitHover = Date.now();
            hoverTime = exitHover - startHover;
            // console.log("hover time: " + hoverTime);
        });


    /*-=-=-= How Many Vowels Types Into Text Area =-=-=-*/
    /* Will appear in console.log as after you click out of text area */

    var textInput = [];

    var findVowels = function (array) {
        var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        var vowelCount = 0;
        for(var i = 0; i < array.length; i++) {
            if (vowels.indexOf(array[i]) !== -1) {
                vowelCount += 1;
            }
        } return vowelCount;
    };

    $('#textArea').on('blur', function (){
            console.log(findVowels(textInput) + " vowels");
    });

    $('#textArea').keypress(function (){
        var text = $('#textArea').val();
        textInput.push(text[text.length - 1]);
    });

    /*-=-=-= Left By Link =-=-=-*/
    /* will appear in preserve console log as you leave page via link */

        $('a').click(function(event){
            // console.log("User Left Via:" + ($(this).attr('href')));
        });

});
