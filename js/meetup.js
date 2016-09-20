$(function() {
    $.ajax({
        url: 'https://whera.com.br/phpsc/index.json',
        type: 'GET',
        success: callbackSuccess,
        error: function(e) {
            //called when there is an error
            //console.log(e.message);
        }
    });
});


function callbackSuccess(json) {
    $('#text-load').remove();

    $.each(json, function (index, meetup) {
        var html  = '';
            html += '<div class="col-lg-4">';
            html +=     '<div class="panel panel-default">';
            html +=         '<div class="panel-body">';
            html +=             '<h4 class="text-center">';
            html +=                 '<i class="fa fa-users fa-4x col-md-12"></i>';
            html +=                 '<a href="'+meetup.link+'" target="_blank">'+meetup.name+'</a>';
            html +=             '</h4>';
            html +=             '<b>Local:</b> '+meetup.venue+'<br>';
            html +=             '<b>Data:</b> '+meetup.date+'<br>';

            if (meetup.status == 'past') {
                html += '<b>Participantes:</b> ' + meetup.members;
            }

            html += '</div>';

            if (meetup.status == 'upcoming') {
                html += '<div class="panel-footer">';
                html += '<a title="Junte-se a nós!" class="btn btn-block btn-primary" href="'+meetup.link+'" role="button">Junte-se a nós!</a>';
                html += '</div>';
            }
            html += '</div>';
            html += '</div>';

        $('#meetups').append(html);
    });

}