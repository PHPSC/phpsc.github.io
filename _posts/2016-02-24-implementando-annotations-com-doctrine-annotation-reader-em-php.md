---
title: Implementando annotations com doctrine annotation reader em PHP
author: leonardorifeli
layout: post
comments: true
slug: implementando-annotations-com-doctrine-annotation-reader-em-php
categories:
  - Desenvolvimento
  - PHPSC
tags:
  - Desenvolvimento
  - PHPSC
---

Saudações méros mortais, este é um artigo que escrevi e publiquei, inicialmente no meu blog, estou republicando-o no PHPSC, meu primeiro artigo publicado aqui. Neste artigo mostrarei sobre **annotations** (é claro, está no título).

Como disse meu amigo [Guilherme Diego](https://medium.com/@guidiego) no artigo [Código Limpo é uma Responsabilidade — Blocos](https://medium.com/@guidiego/c%C3%B3digo-limpo-%C3%A9-uma-responsabilidade-blocos-5be1fdd8d341#.gbx5keq0s):

![alt text](/uploads/2016/02/24-annotations/ler-curtir-compartilhar.png "Share the post.")

Enquanto escrevo, vou ouvindo o álbum [As Daylight Dies](https://open.spotify.com/album/6iJEtgHTEbVlSS5isIS71z) da banda Killswitch Engage, é um banda muito bacana.

Enfim, vamos ao que interessa, vem comigo.

## Introdução

Em um projeto recente do qual participei do processo de **refactoring**, o que me auxiliou bastante, foi a implementação de **annotations**, onde foi possível segregar informações estáticas e até atingir algumas práticas de **clean code**, salientando que isso foi uma solução que funcionou bem no respectivo projeto.

Neste artigo eu não discutirei se é o correto, ou não, apenas demonstrarei como implementar **custom annotations** com o **doctrine reader**. Fica sobre teu critério meu chapa!

## Escopo

No exemplo que mostrarei, utilizaremos os seguintes arquivos:

1. **compose.json**: Dependência e informações do projeto;
2. **PeopleAnnotation.php**: Será a nossa annotation, utilizaremos os atributos para receber valores de quem irá consumir a **annotation**;
3. **People.php**: Iremos consumir nossa annotation e informar os respectivos valores para segregarmos informações;
4. **ReaderAnnotation.php**: Neste arquivo iremos juntar tudo e fazer uma sopa de letrinhas.

Irei demonstrar os códigos no artigo, caso necessário, você poderá verificar no [Gist](https://gist.github.com/leonardorifeli/9c12f94b109cb7859ca9).

## Dependência, sim você precisará dela.

Para trabalhar com o **Doctrine Annotation Reader**, será necessário possuir a dependência **"doctrine/common"**, conforme o arquivo **composer.json** abaixo:

<script src="https://gist.github.com/leonardorifeli/9c12f94b109cb7859ca9.js?file=composer.json"></script>
<span class="space">&nbsp;</span>

## Desenvolvendo a classe da annotation.

Resumindo, esta classe será responsável pela **annotation**, ou seja, os atributos **públicos** da classe armazenarão informações que poderão ser informadas por quem irá consumir a **annotation** em questão. Segue abaixo o arquivo **PeopleAnnotation.php**, é a nossa annotation:

<script src="https://gist.github.com/leonardorifeli/9c12f94b109cb7859ca9.js?file=PeopleAnnotation.php"></script>
<span class="space">&nbsp;</span>

Repare que, a classe em questão possui uma **annotation**, sendo ela **@Annotation**, isto é necessário para informar ao **Doctrine Annotation Reader** que a classe em questão, realmente é uma **annotation**.

## Consumindo a annotation


![alt text](/uploads/2016/02/24-annotations/consumindo.gif "Using the annotation PeopleAnnotation")

Nesta etapa, iremos consumir a annotation **PeopleAnnotation** e informaremos os valores que a annotation disponibiliza.

Salientando, é possível consumir a annotation em:

* classes;
* atributos;
* métodos.

No exemplo abaixo, temos a classe **People**, que comsumirá a **PeopleAnnotation**:

<script src="https://gist.github.com/leonardorifeli/9c12f94b109cb7859ca9.js?file=People.php"></script>
<span class="space">&nbsp;</span>

Repare que, a classe **People** está consumindo a **annotation** tanto na respectiva classe, quanto nos atributos e métodos.

## Vamos verificar a **People**. Finalizando a sopa de letrinhas

Nesta etapa final, iremos instanciar a classe **AnnotationReader** para lermos as **annotations** extraídas da classe **People** (que está consumindo a **PeopleAnnotation**).

Classes nativas utilizadas no exemplo:

* **[ReflectionClass()](http://php.net/manual/pt_BR/class.reflectionclass.php)**;
* **[ReflectionObject()](http://php.net/manual/pt_BR/class.reflectionobject.php)**;
* **[ReflectionProperty()](http://php.net/manual/pt_BR/class.reflectionproperty.php)**;
* **[ReflectionMethod()](http://php.net/manual/pt_BR/class.reflectionmethod.php)**.

Abaixo o exemplo:

<script src="https://gist.github.com/leonardorifeli/9c12f94b109cb7859ca9.js?file=ReaderAnnotation.php"></script>
<span class="space">&nbsp;</span>

## Resultado (você já deve ter executado os exemplos)


![alt text](/uploads/2016/02/24-annotations/happy.gif "Using the annotation PeopleAnnotation")

<script src="https://gist.github.com/leonardorifeli/9c12f94b109cb7859ca9.js?file=result.txt"></script>
<span class="space">&nbsp;</span>

## Referências

1. [Artigo sobre o assunto em inglês](http://masnun.com/2012/08/12/using-annotations-in-php-with-doctrine-annotation-reader.html)
2. [Doctrine - Documentação oficial](http://doctrine-common.readthedocs.org/en/latest/reference/annotations.html)
3. [Documentação oficial PHP.net](http://php.net/)

## Conclusão

A utilização de **annotation** pode facilitar diversas condições, salientando que, a necessidade de implementar **custom annotation** varia de situação. Use o bom senso de programador.

Quaisquer feedbacks serão bem-vindos, fique à vontade para comentar e/ou implementar alguma informação.

Até breve méros mortais e eternos aprendizes (todos somos).
