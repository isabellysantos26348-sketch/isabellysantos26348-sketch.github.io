(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var characters = [
    {
      name: "Rachel Green",
      tag: "A que saiu do casamento e entrou na moda",
      emoji: "\uD83D\uDC85",
      badge: "A fashionista",
      cc: "#d8568b",
      cc2: "#f097b9",
      personality: "Carismática, teimosa e sonhadora. Saiu da zona de conforto para construir a própria vida.",
      profession: "De garçonete no Central Perk a executiva da Ralph Lauren.",
      facts: [
        "Cortou o cartão de crédito do pai no dia em que chegou",
        "Deu à luz Emma, filha de Ross",
        "Perdeu o avião que a levaria embora para sempre",
        "Chegou ao Central Perk ainda de vestido de noiva"
      ],
      quote: "Bem-vinda ao mundo real. É horrível, mas você vai amar."
    },
    {
      name: "Ross Geller",
      tag: "O paleontólogo coração de manteiga",
      emoji: "\uD83E\uDD96",
      badge: "O cientista",
      cc: "#2f8f83",
      cc2: "#7ec3b8",
      personality: "Inteligente, romântico e um pouco neurótico. Nem sempre sai do paleontológico para o romântico.",
      profession: "Paleontólogo com doutorado e professor universitário.",
      facts: [
        "Tem três divórcios no currículo e muito a explicar",
        "Já teve um macaquinho chamado Marcel",
        "Toca teclado e canta 'Baby Got Back' no pior dia de Phoebe",
        "Estava apaixonado por Rachel desde o colégio"
      ],
      quote: "PIVOT! PIVOT! PIVOT!"
    },
    {
      name: "Monica Geller",
      tag: "Chef, competitiva e dona do apartamento",
      emoji: "\uD83E\uDDF9",
      badge: "A chef",
      cc: "#e07a3f",
      cc2: "#f0a578",
      personality: "Organizada, generosa e extremamente competitiva. A 'mãe' que todo grupo precisa.",
      profession: "Chef premiada — começou servindo sanduíches e terminou nos restaurantes mais badalados.",
      facts: [
        "Arruma e limpa tudo, inclusive quando não precisa",
        "Coleciona prêmios de brigas de vaga de estacionamento",
        "Escondeu o namoro com Chandler dos amigos",
        "Sonhou (e realizou!) o casamento dos sonhos"
      ],
      quote: "I KNOW!"
    },
    {
      name: "Chandler Bing",
      tag: "O profissional do sarcasmo",
      emoji: "\uD83C\uDCCF",
      badge: "O engraçado",
      cc: "#7a5ea8",
      cc2: "#b7a1dd",
      personality: "Irônico, inseguro com piadas na manga e um coração gigante escondido atrás do humor.",
      profession: "Começou em estatística 'processando dados' e virou redator publicitário.",
      facts: [
        "Namorou... uma banheira? Não, essa é outra história",
        "Perdeu um pedaço do dedo do pé numa aposta na faculdade",
        "Nunca dançava... até precisar encarar um 'happy dance'",
        "Escreve cartas românticas que derretem qualquer coração"
      ],
      quote: "Poderia EU estar mais apaixonado?"
    },
    {
      name: "Joey Tribbiani",
      tag: "O ator que ama comida e amizade",
      emoji: "\uD83C\uDF55",
      badge: "O ator",
      cc: "#c8932a",
      cc2: "#e3bd6f",
      personality: "Charmoso, inocente e leal como poucos. O coração maior que o próprio ego.",
      profession: "Ator premiado... em 'Days of Our Lives', como Dr. Drake Ramoray.",
      facts: [
        "Nunca, jamais, em hipótese nenhuma, divide comida",
        "Criou o inesquecível 'How you doin'?'",
        "Dorme abraçado no pinguim Hugsy",
        "Fala francês fluente... na cabeça dele"
      ],
      quote: "Joey doesn't share food! Que tal um sanduíche?"
    },
    {
      name: "Phoebe Buffay",
      tag: "A alma livre que canta Smelly Cat",
      emoji: "\uD83C\uDFB8",
      badge: "A livre",
      cc: "#4d9e6a",
      cc2: "#8cc59e",
      personality: "Excêntrica, doce e profundamente sábia. Vê o mundo de um jeito que ninguém mais vê.",
      profession: "Massagista, compositora e cantora de rua autodidata.",
      facts: [
        "Compôs 'Smelly Cat' e cantou no Central Perk",
        "Tem uma irmã gêmea, Ursula, com a cara (e cara de pau) dela",
        "Morou na rua quando jovem e conhece a cidade como ninguém",
        "Dirige um táxi amarelo nas horas vagas"
      ],
      quote: "Smelly Cat, Smelly Cat, o que eles estão alimentando você?"
    }
  ];

  var episodes = [
    { s: 1, ep: 1, title: "Piloto", desc: "Rachel foge do próprio casamento e chega ao Central Perk sem planos. A turma já começa com chá de algumas reviravoltas." },
    { s: 1, ep: 5, title: "O Detergente Alemão", desc: "Ross e Rachel se encontram na lavanderia e aprendem que até sabão em pó pode virar dia de troca de olhares." },
    { s: 1, ep: 10, title: "A Onde há Macaco", desc: "Marcel, o macacaquinho de Ross, rouba a cena — e as moedas. O pager de Chandler vira paranoia coletiva." },
    { s: 1, ep: 24, title: "Quando Rachel Descobre", desc: "Uma mensagem gravada na secretária eletrônica revela o segredo de Ross, e Rachel corre para o aeroporto decidida." },
    { s: 2, ep: 1, title: "A Nova Namorada do Ross", desc: "Rachel volta do aeroporto e encontra a notícia que não queria: Ross tem namorada. A guerra silenciosa (e nada silenciosa) começa." },
    { s: 2, ep: 7, title: "Quando Ross Descobre", desc: "Na festa, os DVDs e as confissões se misturam: Ross finalmente entende o que Rachel sentia por ele." },
    { s: 2, ep: 14, title: "O Vídeo do Baile", desc: "Um vídeo antigo do baile de formatura muda tudo: o gesto de Ross que Rachel nunca imaginou." },
    { s: 3, ep: 2, title: "Quando Ninguém Está Pronto", desc: "Ross está atrasado para um evento importante e ninguém colabora. A pergunta do milhão: cadê o vestido?" },
    { s: 3, ep: 6, title: "O Flashback", desc: "A turma mergulha nos 'e se...' e descobre que o destino e a sorte andam de mãos dadas nos cafés da esquina." },
    { s: 3, ep: 16, title: "A Manhã Seguinte", desc: "A briga entre Ross e Rachel ganha novos capítulos, e os amigos precisam escolher lados no campo minado da sala." },
    { s: 4, ep: 1, title: "A Água-viva", desc: "A viagem à praia termina em maré confusa: uma água-viva, um segredo revelado e segundos de puro pavor." },
    { s: 4, ep: 13, title: "Os Embriões", desc: "Um quiz sobre quem conhece melhor os amigos vira aposta e coloca o apartamento mais arrumado de Nova York na linha." },
    { s: 4, ep: 24, title: "O Casamento do Ross", desc: "A família Geller, e meio mundo, desembarcam em Londres para o grande dia. E um 'sim' inesperado acontece num quarto de hotel." },
    { s: 5, ep: 14, title: "Quando Todos Descobrem", desc: "Chandler e Monica juraram segredo, mas Phoebe tem certeza quase... e resolve se divertir espiando o espião." },
    { s: 5, ep: 16, title: "O Sofá", desc: "Uma escada estreita, um sofá gigante e a palavra mais gritada do ano: PIVOT! E um uniforme policial 'emprestado'." },
    { s: 5, ep: 24, title: "Em Las Vegas", desc: "A turma inteira desembarca em Las Vegas com vestidos novos, chapéus extravagantes e um casamento de brincadeira que esquenta." },
    { s: 6, ep: 8, title: "Os Dentes do Ross", desc: "Uma sessão de clareamento escapa do controle, e Ross passa a brilhar tanto que até o escuro agradece." },
    { s: 6, ep: 9, title: "Quando Ross Puxa o Saco", desc: "O jantar da família Geller vira um tribunal do passado: segredos à mesa e a confissão que Monica mais queria ouvir." },
    { s: 6, ep: 24, title: "A Proposta", desc: "No fim da temporada, uma pontinha de medo, um pedido improvisado e o 'sim' que muda a vida de todos para sempre." },
    { s: 7, ep: 3, title: "As Bolachas da Phoebe", desc: "Roubada por ancestrais, a receita secreta de biscoitos vira guerra na cozinha mais competitiva do prédio." },
    { s: 7, ep: 24, title: "O Casamento de Monica e Chandler", desc: "O grande dia chegou: anel perdido, banda inusitada e Rachel grávida. A cerimônia vira história para sempre." },
    { s: 8, ep: 9, title: "O Boato", desc: "Um colega de faculdade ressuscita a maior mentira que Ross já contou sobre Rachel. A verdade dói de tanto rir." },
    { s: 8, ep: 20, title: "O Chá de Bebê", desc: "Rachel prepara o chá de bebê com a ajuda (e a ansiedade) de Monica. As revelações cabem em uma única caixa." },
    { s: 8, ep: 23, title: "Quando Rachel Ganha a Baby", desc: "Trabalho de parto em plena virada de ano, atrasos no shopping e apostas no nome do bebê: a família cresce." },
    { s: 9, ep: 8, title: "A Irmã da Rachel", desc: "No Natal, a irmã caçula de Rachel aparece e vira, ao mesmo tempo, a estrela e a tempestade da véspera." },
    { s: 9, ep: 15, title: "O Babá", desc: "Rachel contrata um babá tão gentil que Ross engole o orgulho e questiona o que é 'normal'. Spoiler: é." },
    { s: 9, ep: 24, title: "Em Barbados", desc: "Na conferência à beira-mar, Ross palestra sobre cadeias alimentares (e o mundo ri) enquanto Monica domina a pista." },
    { s: 10, ep: 2, title: "Ross Está Bem", desc: "Ross insiste que está 'muito bem' ao ver Rachel saindo com outra pessoa. A negação nunca foi tão elaborada." },
    { s: 10, ep: 5, title: "Quando Joey Fala Francês", desc: "Joey tenta impressionar em francês e transforma uma gravação numa obra-prima do absurdo. Oui." },
    { s: 10, ep: 18, title: "O Último", desc: "Apartamento quase vazio, uma chave deixada de propósito na mesa e a despedida mais emocionante que o aparelho de som já tocou." }
  ];

  var places = [
    {
      title: "Central Perk",
      kicker: "O quarto ponto de encontro",
      emoji: "\u2615",
      pc1: "#f2b22e",
      pc2: "#e07a3f",
      desc: "Sofás laranja, bolinho de canela e aquele palquinho que revelou bandas (e o talento peculiar de Phoebe). É onde a turma se resolve — ou finge que não é problema.",
      tag: "Onde tudo acontece"
    },
    {
      title: "Apartamento da Monica",
      kicker: "Porta roxa, 2º andar",
      emoji: "\uD83D\uDEDF",
      pc1: "#d8568b",
      pc2: "#7a5ea8",
      desc: "O coração da série: cozinha sempre limpa (ou quase), mesa de jantar, e o ponto onde todo mundo aparece — mesmo sem convite.",
      tag: "O quartel-general"
    },
    {
      title: "Apartamento do Joey",
      kicker: "Porta amarela, em frente",
      emoji: "\uD83C\uDF55",
      pc1: "#3f8fbb",
      pc2: "#2f8f83",
      desc: "Um pouco mais bagunçado, com TV gigante e costeletas favoritas. Do outro lado do corredor, as portas roxa e amarela definem fronteiras amigáveis.",
      tag: "Do outro lado do corredor"
    },
    {
      title: "O Museu",
      kicker: "Território de dinossauros",
      emoji: "\uD83E\uDD96",
      pc1: "#4d9e6a",
      pc2: "#8cc59e",
      desc: "Lar profissional de Ross, entre fósseis, museus e corredores de confusão paleontológica. Se algo pode dar errado com um esqueleto, dá aqui.",
      tag: "Onde Ross é rei"
    },
    {
      title: "Mundo da Moda",
      kicker: "O império de Rachel",
      emoji: "\uD83D\uDCD0",
      pc1: "#e76f9a",
      pc2: "#f2b22e",
      desc: "Da Bloomingdale's à Ralph Lauren, Rachel transformou o medo de não dar certo em coleções inteiras — e uma carreira deslumbrante.",
      tag: "Onde Rachel brilhou"
    },
    {
      title: "Nova York",
      kicker: "A cidade que é do elenco",
      emoji: "\uD83C\uDF07",
      pc1: "#3f8fbb",
      pc2: "#7a5ea8",
      desc: "Esquina atrás de esquina: o verde Village, praças, táxis amarelos e a atmosfera que virou a sexta personagem da história.",
      tag: "A capital do grupo"
    }
  ];

  var quiz = [
    {
      q: "Qual personagem grita a lendária palavra \"PIVOT!\" enquanto um sofá sobe a escada?",
      opts: ["Chandler", "Ross", "Joey", "Monica"],
      a: 1,
      fb: "Foi Ross quem suou — e gritou muito — carregando o sofá da escada."
    },
    {
      q: "De qual cafeteria os seis são clientes fiéis?",
      opts: ["Central Perk", "Java Luxe", "Café de Monica", "Starbucks da esquina"],
      a: 0,
      fb: "Central Perk, com o sofá laranja de sempre, é o quarto componente do grupo."
    },
    {
      q: "Qual é o nome da música mais famosa composta por Phoebe?",
      opts: ["Smelly Cat", "Purple Rain do café", "Demente e deliciosa", "Sofá que abraça"],
      a: 0,
      fb: "\"Smelly Cat, Smelly Cat, o que eles estão alimentando você?\""
    },
    {
      q: "O que Joey NUNCA, jamais, divide?",
      opts: ["Segredos", "Comida", "O sofá", "A TV"],
      a: 1,
      fb: "\"Joey doesn't share food!\" — regra sagrada do Tribbiani."
    },
    {
      q: "Em qual cidade a série acontece?",
      opts: ["Los Angeles", "Chicago", "Nova York", "Boston"],
      a: 2,
      fb: "Nova York é praticamente a personagem número sete."
    },
    {
      q: "Qual amigo trabalha com paleontologia?",
      opts: ["Chandler", "Ross", "Joey", "Phoebe"],
      a: 1,
      fb: "Ross e os dinossauros: uma paixão escolar que virou carreira."
    },
    {
      q: "Onde Rachel trabalha quando chega ao grupo?",
      opts: ["Bloomingdale's", "Ralph Lauren", "Central Perk", "No museu"],
      a: 2,
      fb: "Rachel foi garçonete no Central Perk antes de conquistar a moda."
    },
    {
      q: "Quem mora no apartamento em frente ao de Monica?",
      opts: ["Ross e Phoebe", "Joey e Chandler", "Somente Chandler", "Ninguém"],
      a: 1,
      fb: "Joey e Chandler, do outro lado do corredor — portas roxa e amarela."
    },
    {
      q: "Qual casal mantém o segredo do namoro por quase uma temporada inteira?",
      opts: ["Ross e Rachel", "Chandler e Monica", "Joey e Phoebe", "Chandler e Rachel"],
      a: 1,
      fb: "Chandler e Monica, até Phoebe descobrir tudo com um tênis bem observador."
    },
    {
      q: "Qual frase virou marca registrada do coração mole do Ross por Rachel?",
      opts: ["\"I got off the plane\"", "\"We were on a break!\"", "\"Save the date\"", "\"How you doin'?\""],
      a: 0,
      fb: "\"Eu desci do avião\" — o gesto que coroou o final da série."
    }
  ];

  var charsGrid = document.getElementById("charsGrid");
  var epsGrid = document.getElementById("epsGrid");
  var epsNote = document.getElementById("epsNote");
  var filtersEl = document.getElementById("seasonFilters");
  var placesTrack = document.getElementById("placesTrack");
  var carDots = document.getElementById("carDots");
  var carPrev = document.getElementById("carPrev");
  var carNext = document.getElementById("carNext");
  var quizCard = document.getElementById("quizCard");
  var year = document.getElementById("year");
  var toTop = document.getElementById("toTop");
  var nav = document.querySelector(".nav");
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  /* ---------- Characters ---------- */
  charsGrid.innerHTML = characters.map(function (c) {
    return (
      '<article class="char-card" style="--cc:' + c.cc + ';--cc2:' + c.cc2 + '">' +
        '<div class="char-top"><span class="char-badge">' + c.badge + "</span><span class=\"char-emoji\" aria-hidden=\"true\">" + c.emoji + "</span></div>" +
        '<div class="char-body">' +
          '<h3 class="char-name">' + c.name + "</h3>" +
          '<p class="char-tag">' + c.tag + "</p>" +
          '<p class="char-row"><strong>Personalidade:</strong> ' + c.personality + "</p>" +
          '<p class="char-row"><strong>Profissão:</strong> ' + c.profession + "</p>" +
          '<ul class="char-facts">' + c.facts.map(function (f) { return "<li>" + f + "</li>"; }).join("") + "</ul>" +
          '<blockquote class="char-quote">“' + c.quote + '”</blockquote>' +
        "</div>" +
      "</article>"
    );
  }).join("");

  /* ---------- Episodes ---------- */
  var seasons = [];
  for (var i = 0; i < episodes.length; i++) {
    if (seasons.indexOf(episodes[i].s) === -1) seasons.push(episodes[i].s);
  }
  seasons.sort(function (a, b) { return a - b; });

  filtersEl.innerHTML = '<button class="filter-chip active" data-season="all">Todas as temporadas</button>' +
    seasons.map(function (s) {
      return '<button class="filter-chip" data-season="' + s + '">Temporada ' + s + "</button>";
    }).join("");

  function renderEpisodes(season) {
    var list = season === "all" ? episodes : episodes.filter(function (e) { return e.s === season; });
    var single = list.length === 1;
    epsGrid.className = "eps-grid" + (single ? " grid-1" : "");
    epsGrid.innerHTML = list.map(function (e) {
      return (
        '<article class="ep-card">' +
          '<span class="ep-num">S' + pad(e.s) + " · E" + pad(e.ep) + "</span>" +
          '<h4 class="ep-title">' + e.title + "</h4>" +
          '<p class="ep-desc">' + e.desc + "</p>" +
          '<span class="ep-meta">Temporada ' + e.s + "</span>" +
        "</article>"
      );
    }).join("");
    epsNote.textContent = single
      ? "Só um episódio nesta temporada? Então maratonou pouco. ☕"
      : season === "all"
        ? "Exibindo os momentos mais marcantes de todas as 10 temporadas."
        : "Exibindo épicos da temporada " + season + ".";
  }

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  filtersEl.addEventListener("click", function (ev) {
    var chip = ev.target.closest(".filter-chip");
    if (!chip) return;
    Array.prototype.forEach.call(filtersEl.querySelectorAll(".filter-chip"), function (c) {
      c.classList.remove("active");
    });
    chip.classList.add("active");
    renderEpisodes(chip.getAttribute("data-season"));
  });

  renderEpisodes("all");

  /* ---------- Places carousel ---------- */
  placesTrack.innerHTML = places.map(function (p) {
    return (
      '<article class="place-card" style="--pc1:' + p.pc1 + ";--pc2:" + p.pc2 + '">' +
        '<div class="place-top"><span aria-hidden="true">' + p.emoji + "</span></div>" +
        '<div class="place-body">' +
          '<span class="place-kicker">' + p.kicker + "</span>" +
          '<h3 class="place-title">' + p.title + "</h3>" +
          '<p class="place-desc">' + p.desc + "</p>" +
          '<span class="place-tag">' + p.tag + "</span>" +
        "</div>" +
      "</article>"
    );
  }).join("");

  var cards = Array.prototype.slice.call(placesTrack.children);
  carDots.innerHTML = cards.map(function (_, i) {
    return '<button class="car-dot' + (i === 0 ? " active" : "") + '" data-i="' + i + '" aria-label="Vá para o local ' + (i + 1) + '"></button>';
  }).join("");

  function dotFor(scrollLeft) {
    var max = placesTrack.scrollWidth - placesTrack.clientWidth;
    if (max <= 0) return 0;
    return Math.round((scrollLeft / max) * (cards.length - 1));
  }

  function slideTo(i) {
    var card = cards[i];
    if (!card) return;
    placesTrack.scrollTo({ left: card.offsetLeft - (placesTrack.clientWidth - card.offsetWidth) / 2, behavior: reduceMotion ? "auto" : "smooth" });
  }

  function updateDots() {
    var i = dotFor(placesTrack.scrollLeft);
    Array.prototype.forEach.call(carDots.children, function (d, di) {
      d.classList.toggle("active", di === i);
    });
  }

  carPrev.addEventListener("click", function () {
    var current = dotFor(placesTrack.scrollLeft);
    slideTo(Math.max(0, current - 1));
  });
  carNext.addEventListener("click", function () {
    var current = dotFor(placesTrack.scrollLeft);
    slideTo(Math.min(cards.length - 1, current + 1));
  });
  carDots.addEventListener("click", function (ev) {
    var d = ev.target.closest(".car-dot");
    if (d) slideTo(Number(d.getAttribute("data-i")));
  });
  placesTrack.addEventListener("scroll", function () {
    updateDots();
    window.clearTimeout(placesTrack._t);
    placesTrack._t = window.setTimeout(updateDots, 60);
  });
  window.addEventListener("resize", updateDots);

  /* ---------- Quiz ---------- */
  var qi = 0, score = 0, locked = false;

  function renderQuestion() {
    var item = quiz[qi];
    locked = false;
    var progress = ((qi + 1) / quiz.length) * 100;
    quizCard.innerHTML =
      '<div class="quiz-top">' +
        '<span class="quiz-count">Pergunta ' + (qi + 1) + " de " + quiz.length + "</span>" +
        '<span class="quiz-score">Acertos: ' + score + "</span>" +
      "</div>" +
      '<div class="quiz-bar"><div class="quiz-bar-fill" style="width:' + progress + '%"></div></div>' +
      '<h3 class="quiz-question">' + item.q + "</h3>" +
      '<div class="quiz-options">' +
        item.opts.map(function (o, i) {
          return '<button class="quiz-opt" data-i="' + i + '">' + String.fromCharCode(65 + i) + ") " + o + "</button>";
        }).join("") +
      "</div>" +
      '<div class="quiz-feedback" id="quizFb"></div>';
  }

  function renderResult() {
    var msg, icon, sub;
    if (score === quiz.length) {
      icon = "🎉";
      msg = "Você é oficialmente parte do grupo!";
      sub = "Perfeito: você conhece o Central Perk melhor que o próprio Chandler. Pode sentar no sofá laranja.";
    } else if (score >= 8) {
      icon = "☕";
      msg = "Quase um coffee buddy!";
      sub = "Incrível! Você sabe onde cada um senta — só esqueceu o nome de alguns capítulos.";
    } else if (score >= 5) {
      icon = "🛋️";
      msg = "Você tem lugar no sofá!";
      sub = "Muito bom! Dá para assistir qualquer episódio com o grupo sem perder a piada.";
    } else {
      icon = "🦖";
      msg = "Hora de maratonar!";
      sub = "Nada de pânico: é só dar o play na primeira temporada e apertar o café. Ross espera por você.";
    }
    confetti(icon);
    var total = quiz.length;
    quizCard.innerHTML =
      '<div class="quiz-result">' +
        '<span class="quiz-result-icon">' + icon + "</span>" +
        "<h3>" + msg + "</h3>" +
        "<p>" + sub + "</p>" +
        "<p>Você acertou <strong>" + score + " de " + total + "</strong> perguntas.</p>" +
        '<button class="quiz-restart">Jogar de novo</button>' +
      "</div>";
  }

  quizCard.addEventListener("click", function (ev) {
    var opt = ev.target.closest(".quiz-opt");
    if (opt && !locked) {
      locked = true;
      var chosen = Number(opt.getAttribute("data-i"));
      var item = quiz[qi];
      var options = Array.prototype.slice.call(quizCard.querySelectorAll(".quiz-opt"));
      options.forEach(function (o) {
        o.disabled = true;
        var i = Number(o.getAttribute("data-i"));
        if (i === item.a) o.classList.add("correct");
        else if (i === chosen) o.classList.add("wrong");
      });
      if (chosen === item.a) score++;
      document.getElementById("quizFb").innerHTML =
        '<p class="quiz-fb-text"><strong>' + (chosen === item.a ? "Acertou!" : "Errou...") + "</strong> " + item.fb + "</p>" +
        '<button class="quiz-next">' + (qi + 1 === quiz.length ? "Ver resultado" : "Próxima pergunta") + "</button>";
    }
    var next = ev.target.closest(".quiz-next");
    if (next) {
      qi++;
      if (qi >= quiz.length) renderResult();
      else renderQuestion();
    }
    var restart = ev.target.closest(".quiz-restart");
    if (restart) {
      qi = 0; score = 0;
      renderQuestion();
    }
  });

  renderQuestion();

  function confetti(icon) {
    if (reduceMotion || icon !== "🎉") return;
    var pieces = 26;
    for (var i = 0; i < pieces; i++) {
      (function (i) {
        var el = document.createElement("span");
        el.className = "confetti-piece";
        el.textContent = ["☕", "🎉", "⭐", "💛", "🎊"][i % 5];
        el.style.left = Math.random() * 100 + "vw";
        el.style.fontSize = 14 + Math.random() * 18 + "px";
        el.style.animationDuration = 2.6 + Math.random() * 2.2 + "s";
        el.style.animationDelay = Math.random() * 0.7 + "s";
        document.body.appendChild(el);
        setTimeout(function () { el.remove(); }, 5600);
      })(i);
    }
  }

  /* ---------- Nav / misc ---------- */
  navToggle.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  Array.prototype.forEach.call(navLinks.querySelectorAll("a"), function (a) {
    a.addEventListener("click", function () {
      navLinks.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("scroll", function () {
    var y = window.scrollY;
    nav.classList.toggle("scrolled", y > 20);
    toTop.classList.toggle("show", y > 600);
  }, { passive: true });

  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });

  year.textContent = new Date().getFullYear();

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (r) { io.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add("in"); });
  }

  /* ---------- Active nav link ---------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  if ("IntersectionObserver" in window) {
    var navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        Array.prototype.forEach.call(navLinks.querySelectorAll("a"), function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { navIo.observe(s); });
  }

  /* ---------- Ticker duplication for seamless loop ---------- */
  var track = document.getElementById("tickerTrack");
  track.innerHTML += track.innerHTML;
})();