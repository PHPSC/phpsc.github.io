$(function() {
    $.ajax({
        url: 'https://api.meetup.com/PHPSC-Floripa/events?photo-host=public&sig_id=191017439&status=upcoming%2Cpast&sig=6ac83f3cf516dd85b3e35cc48a2786b121f6e7da',
        type: 'GET',
        dataType:'jsonp',
        success: callbackSuccess,
        error: callbackError
    });
});

/**
 * @returns void
 */
function callbackError() {
    $('#text-load').remove();
    msgError  = '';
    msgError += '<div class="alert alert-danger text-center" role="alert">';
    msgError += '<strong>Ops!!!</strong> Não foi possível carregar os meetups. Tente novamente mais tarde.';
    msgError += '</div>';
    $('#meetups').html(msgError);
}

/**
 *
 * @param json
 * @returns void
 */
function callbackSuccess(json) {
    $('#text-load').remove();
    var total = json.data.length - 1;

    for (i = total; i >= 0; i--) {
        var html = createHtml(json.data[i]);
        $('#meetups').append(html);
    }
}

/**
 *
 * @param meetup
 * @returns {string}
 */
function createHtml(meetup) {
    var options = {
        weekday: "long", year: "numeric", month: "long",
        day: "numeric", hour: "2-digit", minute: "2-digit"
    };

    venue     = (typeof meetup.venue == 'undefined') ? '(Precisa de um lugar)' : meetup.venue.name;
    dateEvent = new Date(meetup.time);

    var html  = '';
    html += '<div class="col-lg-4">';
    html += '<div class="panel panel-default">';
    html += '<div class="panel-body">';
    html += '<h4 class="text-center">';
    html += '<i class="fa fa-users fa-4x col-md-12"></i>';
    html += '<a href="'+meetup.link+'" target="_blank">'+meetup.name+'</a>';
    html += '</h4>';
    html += '<b>Local:</b> '+venue+'<br>';
    html += '<b>Data:</b> '+dateEvent.toLocaleDateString('pt-BR', options)+'<br>';

    if (meetup.status == 'past') {
        html += '<b>Participantes:</b> ' + meetup.yes_rsvp_count;
    }

    html += '</div>';

    if (meetup.status == 'upcoming') {
        html += '<div class="panel-footer">';
        html += '<a title="Junte-se a nós!" class="btn btn-block btn-primary" href="'+meetup.link+'" role="button">Junte-se a nós!</a>';
        html += '</div>';
    }
    html += '</div>';
    html += '</div>';

    delete dateEvent;
    return html;
}
