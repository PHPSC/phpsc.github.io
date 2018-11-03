---
layout: page
title: Projetos
permalink: /projetos/
---
<div class="row">
    <div class="text-left col-md-10">
        <p>Sinta-se a vontade para criar uma Issue ou fazer um fork de um dos nossos projetos, contribua e ajude a comunidade a se fortalecer.</p>
        <p>Veja abaixo alguns projetos mantidos pelo Grupo PHP-SC</p>
    </div>
    <p class="clearfix"></p>
</div>
<div class="row">
    
    {% for project in site.data.projects %}
        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">{{ project.title }}</h3>
                </div>
                <div class="panel-body">
                    <p>{{ project.description }}</p>
                    <a href="https://github.com/{{ project.github }}" target="_blank" class="btn btn-block btn-social btn-github"><i class="fa fa-github"></i>Veja no GitHub</a>
                </div>
            </div>
        </div>
    {% endfor %}
            
</div>