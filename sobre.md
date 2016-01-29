---
layout: page
title: O Grupo
permalink: /sobre/
---
O Grupo de Usuários de PHP do Estado de Santa Catarina (PHPSC) é uma entidade aberta de
profissionais da área de TI criada em 2007, que possui entre os seus participantes empresários,
professores, profissionais de desenvolvimento, alunos e entusiastas de tecnologia. E que tem
por objetivo promover o uso da tecnologia PHP e seus correspondentes no campo de software
livre em todo o estado de Santa Catarina. Além de fomentar discussões sobre melhores práticas
no desenvolvimento de software, testes de software e qualidade no desenvolvimento de
sistemas. Outros objetivos específicos de atuação do grupo também incluem:

- Promover metodologias ágeis de desenvolvimento, bem como fomentar o uso de
padrões de projeto voltados à qualidade de software;
- Realizar eventos regionais no estado buscando a troca de experiência entre profissionais;
- Facilitar a procura por profissionais por empresas que necessitem de mão-de-obra;
- Divulgar vagas de trabalho existentes no estado;
- Atuar junto a outros grupos do Brasil para auxiliar na adoção do PHP como base
- tecnológica para o desenvolvimento de sistemas;
- Atuar junto ao PHP.net na correção de problemas e sugestões de melhorias da
linguagem;
- Auxiliar entidades públicas e privadas que buscam utilizar software livre e ter um contato
com PHP;
- Buscar oportunidades de negócios entre os seus participantes.

<hr>

<h4>Core Members</h4>

<div class="row">
    {% for contributor in site.github.organization_members %}
        {% assign member = site.data.members[contributor.login] %}
        <div class="col-md-2">
            <div class="panel panel-default">
              <div class="panel-body">
                <a href="https://github.com/{{ contributor.github }}" target="_blank">
                  <img src="{{ contributor.avatar_url }}" class="img-rounded img-responsive" alt="@{{ contributor.login }}">
                </a>
                    
                <b>{{ member.name }}</b><br>
                <a href="https://github.com/{{ contributor.login }}" target="_blank">@{{ contributor.login }}</a>
              </div>
            </div>
        </div>
    {% endfor %}
</div>

<hr>

<h4>Contribuidores</h4>
<p>O PHPSC existe graças a uma comunidade ativa e empenhada no crescimento da linguagem para todos.</p>
<p>
    Nosso site não poderia ser diferente, ele é feito de forma colaborativa, onde todos podem enviar suas contribuições 
    através de um pull request ou cadastrando novas issues. Abaixo, os contribuidores a quem agradecemos do fundo do S2.
</p>

<div class="row">
    {% for contributor in site.github.contributors %}
        {% assign member = site.data.members[contributor.login] %}
        <div class="col-md-2">
            <div class="panel panel-default">
              <div class="panel-body">
                <a href="https://github.com/{{ contributor.login }}" target="_blank">
                  <img src="{{ contributor.avatar_url }}" class="img-rounded img-responsive" alt="@{{ contributor.login }}">
                </a>
                    
                <b>{{ member.name }}</b><br>
                <a href="https://github.com/{{ contributor.login }}" target="_blank">@{{ contributor.login }}</a> <br>
              </div>
            </div>
        </div>
    {% endfor %}
    <div class="col-md-2">
        <div class="panel panel-default">
          <div class="panel-body text-center">
            <h3><a href="https://github.com/PHPSC/phpsc.github.io#fork-destination-box" target="_blank"><i class="fa fa-code-fork fa-4x"></i></a></h3>
                
            <b>Você aqui!</b>
          </div>
        </div>
    </div>
</div>
