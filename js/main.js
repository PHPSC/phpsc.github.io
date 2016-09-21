$(window).bind("load", function() {

    /**
     * Loading buttons to share on social networks
     */
    if($("#share").length) {

        $("#share").jsSocials({
            showCount: false,
            showLabel: false,
            shares: ["twitter", "facebook", "googleplus", "linkedin"]
        });
    }

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.async = true;
        js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.3";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    !function (d, s, id) {
        var js,
            fjs = d.getElementsByTagName(s)[0],
            p = /^http:/.test(d.location) ? 'http' : 'https';

        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.async = true;
            js.src = p + "://platform.twitter.com/widgets.js";

            fjs.parentNode.insertBefore(js, fjs);
        }
    } (document, "script", "twitter-wjs");

    if ($("#comments-page").length) {
        var disqus_shortname = 'phpsc';

        (function() {
            var dsq = document.createElement('script');
                dsq.type = 'text/javascript';
                dsq.async = true;
                dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    }

});

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;

    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();

    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = true;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-70468787-1', 'auto');
ga('send', 'pageview');