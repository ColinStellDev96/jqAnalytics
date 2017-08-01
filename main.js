$(document).ready(function(){

    /*-=-=-= Total Time Spent on Page =-=-=- */

        var startTime = Date.now();
        var endTime;
        $(window).on('beforeunload', function(){
            endTime = Date.now();
            console.log(endTime - startTime);
        });

    /*-=-=-= What Percentage of Page Was Viewed =-=-=-*/

        var windowH = $(window).height();
        var docH = $(document).height();
        var scroll = $(window).scrollTop();
        var length = docH - windowH;
        var percentScroll = scroll / length * 100;
        var finalPercent = percentScroll + '% scrolled';
        $(window).on('beforeunload', function() {
            console.log(finalPercent);
        });

    /*-=-=-= Time Spent Hovering Mouse Over Each Element on Page =-=-=-*/
    

    /*-=-=-= How Many Vowels Types Into Text Area =-=-=-*/


    /*-=-=-= Left By Link =-=-=-*/

});
