---
layout: page
title: Reuniões
permalink: /reunioes/
---
As reuniões são sempre marcadas pelo nosso <a href="http://www.meetup.com/pt/PHPSC-Floripa/" target="_blank">Meetup</a> 
e são mensais, alternando entre <b>InCompany</b> e <b>PHPSC Pub</b>.

<div class="row">
    {% for meetup in site.data.meetups reversed %}
        <div class="col-lg-4">
            <div class="panel panel-default">
              <div class="panel-body">
                <h4 class="text-center">
                    <i class="fa fa-users fa-4x col-md-12"></i>
                    <a href="{{ meetup.url }}" target="_blank">{{ meetup.titulo }}</a>
                </h4>
                
                <b>Local:</b> {{ meetup.local }}<br>
                <b>Data:</b> {{ meetup.data }}<br>
                <b>Participantes:</b> {{ meetup.publico }}
              </div>
            </div>
        </div>
    {% endfor %}
</div>
