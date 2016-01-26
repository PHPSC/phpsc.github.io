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