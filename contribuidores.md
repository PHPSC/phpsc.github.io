---
layout: page
permalink: /contribuidores/
---
# Contribuidores

O PHPSC existe graças a uma comunidade ativa e empenhada no crescimento da linguagem para todos.

Nosso site não poderia ser diferente, ele é feito de forma colaborativa, onde todos podem enviar suas contribuições através 
de um pull request ou cadastrando novas issues. Abaixo, os contribuidores a quem agradecemos do fundo do S2.

<ul>
    {% for contributor in site.github.contributors %}
    <li>
        <a href="https://github.com/{{ contributor.login }}" target="_blank>
            <img src="{{ contributor.avatar_url }}" class="img-thumbnail img-rounded" alt="Github Avatar">
        </a>
        <a href="https://github.com/{{ contributor.login }}" target="_blank>@{{ contributor.login }}</a>
    </li>
    {% endfor %}
</ul>
        