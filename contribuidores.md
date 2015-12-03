---
layout: page
title: Contribuidores
permalink: /contribuidores/
---
O PHPSC existe graças a uma comunidade ativa e empenhada no crescimento da linguagem para todos.

Nosso site não poderia ser diferente, ele é feito de forma colaborativa, onde todos podem enviar suas contribuições através 
de um pull request ou cadastrando novas issues. Abaixo, os contribuidores a quem agradecemos do fundo do S2.

<div class="row">
    {% for contributor in site.github.contributors %}
    <div class="col-md-4">
        <div class="panel panel-default">
          <div class="panel-body">
            <a href="https://github.com/{{ contributor.login }}" target="_blank">
              <img src="{{ contributor.avatar_url }}" class="img-rounded img-responsive" alt="@{{ contributor.login }}">
            </a>
                
            <a href="https://github.com/{{ contributor.login }}" target="_blank">@{{ contributor.login }}</a> <br>
            <b>Contribuições:</b> {{ contributor.contributions }} <br>
          </div>
        </div>
    </div>
    {% endfor %}
</div>
