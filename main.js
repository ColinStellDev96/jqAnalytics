$(document).ready(function(){

    /*-=-=-= Total Time Spent on Page =-=-=- */

        var startTime = Date.now();
        var endTime;
        $(window).on('beforeunload', function(){
            endTime = Date.now();
            console.log(endTime - startTime);
        });

    /*-=-=-= What Percentage of Page Was Viewed =-=-=-*/

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
            console.log(maxScroll + '% scrolled');
        });

    /*-=-=-= Time Spent Hovering Mouse Over Each Element on Page =-=-=-*/

        var startHover;
        var endHover;
        $('body').hover(function(event){
            startHover = Date.now();
        }, function (event) {
            exitHover = Date.now();
            hoverTime = exitHover - startHover;
            console.log(hoverTime);
        });


    /*-=-=-= How Many Vowels Types Into Text Area =-=-=-*/


        $('#textArea').on('keypress', function (){
            var $textInput = $('#textArea').val().length;
            var vowels = [65, 69, 73, 79, 85, 97, 101, 105, 111, 117];
            var vowelCount = 0;
                for(var i = 0; i < $textInput.length; i++){
                    if ($textInput.indexOf($textInput[i] !== -1)){
                        vowelCount.push($textInput[i]);
                        console.log(vowelCount);
                    }
                }
        });

    /*-=-=-= Left By Link =-=-=-*/

        $('a').click(function(event){
            console.log($(this).attr('href'));
        });

});
