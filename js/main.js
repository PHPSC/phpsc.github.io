$(document).ready(function() {

    /**
     * Loading buttons to share on social networks
     */
    if( $("#share").length ) {

        $("#share").jsSocials({
            showCount: false,
            showLabel: false,
            shares: ["twitter", "facebook", "googleplus", "linkedin"]
        });
    }

});