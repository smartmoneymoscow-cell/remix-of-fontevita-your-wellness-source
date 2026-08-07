/* FonteVita — Blog Data & Render */
(function() {
'use strict';

const POSTS = [
  {
    slug:'kollagen-dlya-chego-nuzhen-i-kak-prinimat', cat:'kollagen',
    title:'Коллаген: для чего он нужен организму и как его правильно принимать',
    metaDesc:'Зачем организму коллаген, какие типы бывают и как принимать капсулы, чтобы поддержать кожу, волосы и суставы.',
    excerpt:'Разбираемся, зачем организму коллаген, чем отличаются его типы и как принимать добавку, чтобы почувствовать результат.',
    date:'2026-06-02', updated:'2026-07-18', time:7, products:['collagen'],
    related:['sovmestimost-kollagen-magniy-omega-3','kogda-nachinayut-deystvovat-vitaminy','kak-vybrat-vitaminy-i-bady'],
    content:[
      {t:'p',x:'Коллаген — самый обсуждаемый белок последних лет: его добавляют в кремы, порошки и капсулы, обещая упругую кожу и крепкие суставы. Но что коллаген делает в организме на самом деле, зачем принимать его в виде добавки и как выбрать рабочую дозировку — разбираемся по порядку.'},
      {t:'h2',id:'chto-takoe-kollagen',x:'Что такое коллаген и зачем он нужен организму'},
      {t:'p',x:'Коллаген — структурный белок, на который приходится около трети всего белка в теле человека. Он формирует своего рода каркас: удерживает клетки кожи, сухожилий, связок, хрящей и стенок сосудов в единой упругой структуре.'},
      {t:'ul',items:['Кожа — поддерживает упругость и эластичность, замедляет появление морщин','Суставы и связки — участвует в восстановлении хрящевой ткани','Волосы и ногти — служит строительным материалом для кератиновых структур','Сосуды — укрепляет стенки капилляров и крупных сосудов']},
      {t:'h2',id:'pochemu-menshe-s-vozrastom',x:'Почему собственного коллагена становится меньше'},
      {t:'p',x:'Примерно после 25 лет естественная выработка коллагена начинает снижаться на 1–1,5% в год, а к 40 годам организм производит его заметно меньше. Ускоряют этот процесс избыток сахара, ультрафиолет, курение и хронический стресс.'},
      {t:'h2',id:'vidy-kollagena',x:'Какие бывают типы коллагена'},
      {t:'table',headers:['Тип','Где преимущественно находится','На что влияет'],rows:[['Тип I','Кожа, волосы, ногти, сухожилия','Упругость и эластичность кожи'],['Тип II','Хрящевая ткань суставов','Подвижность и амортизация суставов'],['Тип III','Стенки сосудов, внутренние органы','Эластичность сосудов и тканей']]},
      {t:'p',x:'Большинство добавок на рынке, включая коллаген FonteVita, — это гидролизованный коллаген типа I: он получен из натурального сырья и расщеплён на короткие пептиды заранее.'},
      {t:'h2',id:'gidrolizovanny-kollagen',x:'Почему гидролизованный коллаген усваивается лучше'},
      {t:'p',x:'Молекула цельного коллагена слишком крупная, чтобы усвоиться через стенки кишечника. Гидролиз расщепляет её на короткие пептиды и аминокислоты, которые организм может всасывать напрямую.'},
      {t:'callout',variant:'tip',title:'Витамин C — не бонус, а необходимость',text:'Организм не может синтезировать собственный коллаген без витамина C: он запускает ключевой фермент этого процесса.'},
      {t:'h2',id:'kak-prinimat-kollaged',x:'Как принимать коллаген: дозировка и схема'},
      {t:'p',x:'В исследованиях используют дозировки от 2,5 до 10–15 г коллагена в сутки. Коллаген FonteVita содержит 2000 мг гидролизованного коллагена и 160 мг витамина C на дневную порцию.'},
      {t:'ul',items:['Принимайте капсулы во время еды — так активные вещества усваиваются стабильнее','Не ждите разового эффекта: коллаген работает на курсовом приёме','Минимальный курс — 8 недель','Курсы можно повторять 2–3 раза в год с перерывами']},
      {t:'h2',id:'kogda-zhdat-effekt',x:'Когда ждать первый результат'},
      {t:'p',x:'Коллаген не действует мгновенно: новые волокна формируются постепенно, поэтому кожа и волосы меняются не за неделю, а за месяцы регулярного приёма.'},
      {t:'h2',id:'komu-nuzhna-konsultatsiya',x:'Когда стоит проконсультироваться с врачом'},
      {t:'ul',items:['Беременность и период грудного вскармливания','Аллергия на рыбу или морепродукты','Хронические заболевания почек или печени','Регулярный приём рецептурных препаратов']},
      {t:'callout',variant:'warn',title:'Важно',text:'Коллаген — биологически активная добавка к пище, а не лекарственное средство. Перед началом приёма посоветуйтесь со специалистом.'}
    ],
    faq:[
      {q:'Коллаген подходит мужчинам или это только «женская» добавка?',a:'Коллаген нужен любому организму независимо от пола: он участвует в восстановлении суставов, связок и сосудов.'},
      {q:'Морской или животный коллаген — какой выбрать?',a:'Оба источника дают преимущественно коллаген типа I. Морской чуть лучше усваивается, животный доступнее по цене.'},
      {q:'Можно ли принимать коллаген постоянно?',a:'Обычно рекомендуют курсовой приём — 2–3 месяца с перерывом на 1–2 месяца.'},
      {q:'С какими добавками хорошо сочетается коллаген?',a:'Коллаген совместим с омега-3 и магнием B6 — эти добавки не конкурируют за усвоение.'}
    ]
  },
  {
    slug:'magniy-v6-dlya-chego-nuzhen-kogda-pit', cat:'magniy',
    title:'Магний + B6: для чего нужен организму и когда его лучше принимать',
    metaDesc:'Разбираем роль магния и витамина B6 в нервной системе и сне, какую форму магния выбрать и когда его принимать.',
    excerpt:'Роль магния в нервной системе и сне, какую форму выбрать и когда пить — утром или на ночь.',
    date:'2026-06-09', updated:'2026-07-18', time:7, products:['magnesium'],
    related:['sovmestimost-kollagen-magniy-omega-3','kogda-nachinayut-deystvovat-vitaminy','bad-ili-lekarstvo-v-chem-raznitsa'],
    content:[
      {t:'p',x:'Магний — один из самых массовых дефицитов в рационе современного человека: его вымывают стресс, кофе, сахар и недосып. Разбираемся, зачем он нужен, какую форму выбрать и когда принимать.'},
      {t:'h2',id:'rol-magniya',x:'Роль магния в организме'},
      {t:'p',x:'Магний — кофактор более 300 ферментативных реакций. Он участвует в передаче нервных импульсов, сокращении и расслаблении мышц, выработке энергии и регуляции сердечного ритма.'},
      {t:'h2',id:'priznaki-nehvatki',x:'Признаки нехватки магния'},
      {t:'ul',items:['Раздражительность и трудности с расслаблением вечером','Судороги или подёргивания в икроножных мышцах','Поверхностный, тревожный сон','Повышенная утомляемость даже после отдыха']},
      {t:'h2',id:'zachem-b6',x:'Зачем магний идёт в паре с витамином B6'},
      {t:'p',x:'Витамин B6 помогает магнию проникать внутрь клеток, а не оставаться в плазме крови — именно там магний и включается в работу.'},
      {t:'h2',id:'kakuyu-formu-vybrat',x:'Какую форму магния выбрать'},
      {t:'table',headers:['Форма магния','Биодоступность','Особенность'],rows:[['Оксид магния','Низкая','Дешёвый, но чаще вызывает послабляющий эффект'],['Цитрат магния','Средняя–высокая','Хорошо усваивается'],['Хелат (бисглицинат)','Высокая','Наиболее бережно усваивается']]},
      {t:'h2',id:'kogda-prinimat',x:'Когда лучше принимать: утром или на ночь'},
      {t:'p',x:'Магний способствует расслаблению нервной и мышечной систем, поэтому вечерний приём — логичный выбор для тех, кто хочет поддержать спокойный сон.'},
      {t:'callout',variant:'tip',title:'Практическая схема',text:'При трёхразовом приёме удобно распределить дозы на завтрак, обед и ужин.'},
      {t:'h2',id:'s-chem-sochetaetsya',x:'С чем сочетается и с чем — осторожно'},
      {t:'ul',items:['Хорошо сочетается с омега-3','Не конфликтует с коллагеном и витамином C','Кальций и магний конкурируют за усвоение — разносите приём']},
      {t:'callout',variant:'warn',title:'Важно',text:'При заболеваниях почек магний может накапливаться — приём нужно согласовать с врачом.'}
    ],
    faq:[
      {q:'Можно ли принимать магний B6 каждый день?',a:'Да, курсовой приём в рекомендованной дозировке считается безопасным для большинства взрослых.'},
      {q:'Магний B6 вызывает сонливость днём?',a:'В рекомендованных дозировках выраженной сонливости обычно не вызывает.'},
      {q:'Чем хелат магния отличается от обычного?',a:'Хелатная форма связана с аминокислотой, что облегчает её всасывание.'},
      {q:'Можно ли пить магний B6 с кофе?',a:'Кофеин ускоряет выведение магния — разносите приём на 1–2 часа.'}
    ]
  },
  {
    slug:'omega-3-polza-i-vred-kak-vybrat', cat:'omega-3',
    title:'Омега-3: польза и вред, как выбрать качественный рыбий жир',
    metaDesc:'Честно разбираем пользу и возможный вред омега-3 и как отличить свежую добавку от окисленной.',
    excerpt:'Честный разбор пользы и возможного вреда омега-3 и того, как отличить свежую добавку от окисленной.',
    date:'2026-06-16', updated:'2026-07-19', time:8, products:['omega'],
    related:['pochemu-nam-nuzhna-omega-3','sovmestimost-kollagen-magniy-omega-3','kak-vybrat-vitaminy-i-bady'],
    content:[
      {t:'p',x:'Омега-3 — одна из немногих добавок, полезность которой подтверждена десятилетиями исследований. Разбираемся, зачем она нужна и как отличить свежий продукт от окисленного.'},
      {t:'h2',id:'chto-takoe-omega-3',x:'Что такое омега-3 и зачем она нужна'},
      {t:'p',x:'Омега-3 — группа полиненасыщенных жирных кислот, главные из которых — EPA и DHA. Организм не способен синтезировать их самостоятельно.'},
      {t:'h2',id:'tri-istochnika',x:'Три источника омега-3'},
      {t:'table',headers:['Источник','Основные кислоты','Особенность'],rows:[['Рыбий жир','EPA, DHA','Самая изученная форма'],['Льняное масло','ALA','Растительный, но ALA усваивается ограниченно'],['Масло водорослей','DHA','Подходит для веганов']]},
      {t:'h2',id:'est-li-vred',x:'Есть ли вред от омега-3'},
      {t:'p',x:'В рекомендованных дозировках омега-3 считается безопасной. Из возможных эффектов — лёгкий дискомфорт в желудке или «рыбная отрыжка».'},
      {t:'h2',id:'kak-ponyat-kachestvo',x:'Как понять, что омега-3 качественная'},
      {t:'ul',items:['Непрозрачная упаковка — защищает от окисления на свету','Лабораторный протокол на партию','Показатель ТОТОХ — чем ниже, тем свежее; в норме до 26','Отсутствие резкого рыбного запаха при вскрытии']},
      {t:'callout',variant:'info',title:'Для примера',text:'У Омега-3 FonteVita показатель ТОТОХ составляет 17,94 при допустимой норме до 26.'},
      {t:'h2',id:'kak-vybrat-dozirovku',x:'Как выбрать дозировку'},
      {t:'p',x:'Для общей поддержки здоровья обычно достаточно 250–500 мг EPA и DHA в сутки. Омега-3 FonteVita содержит 3000 мг общего комплекса в сутки.'},
      {t:'h2',id:'kak-prinimat',x:'Как принимать: время суток и сочетания'},
      {t:'ul',items:['Принимайте во время еды, содержащей жиры','Не принимайте натощак','Хорошо сочетается с витамином D3+K2','Совместим с магнием B6 и коллагеном']},
      {t:'callout',variant:'warn',title:'Важно',text:'Если вы принимаете антикоагулянты, приём омега-3 нужно обсудить с врачом.'}
    ],
    faq:[
      {q:'Почему после омега-3 бывает рыбная отрыжка?',a:'Чаще всего связано с качеством жира или приёмом натощак. Приём во время еды обычно снимает проблему.'},
      {q:'Подходит ли рыбий жир веганам?',a:'Нет. Веганская альтернатива — омега-3 на основе масла водорослей.'},
      {q:'Можно ли давать омега-3 детям?',a:'Детские дозировки отличаются от взрослых — подберите вместе с педиатром.'},
      {q:'Можно ли совмещать омега-3 с коллагеном и магнием?',a:'Да, эти три добавки не конкурируют за усвоение.'}
    ]
  },
  {
    slug:'sovmestimost-kollagen-magniy-omega-3', cat:'guide',
    title:'Можно ли принимать коллаген, магний и омега-3 вместе: правила совместимости',
    metaDesc:'Разбираем, можно ли совмещать коллаген, магний B6 и омега-3 в один день и как выстроить расписание.',
    excerpt:'Можно ли совмещать коллаген, магний B6 и омега-3 в один день — и как выстроить расписание приёма.',
    date:'2026-06-23', updated:'2026-07-19', time:6, products:['collagen','magnesium','omega'],
    related:['magniy-v6-dlya-chego-nuzhen-kogda-pit','omega-3-polza-i-vred-kak-vybrat','kak-vybrat-vitaminy-i-bady'],
    content:[
      {t:'p',x:'Один из самых частых вопросов: можно ли пить несколько БАДов одновременно. Короткий ответ — можно, если добавки не дублируют одно и то же вещество в избыточной дозе.'},
      {t:'h2',id:'obshy-printsip',x:'Можно ли пить несколько БАДов одновременно'},
      {t:'p',x:'Добавки безопасно сочетать, если у них нет прямого взаимодействия и вы не превышаете суммарную суточную норму.'},
      {t:'h2',id:'kollagen-omega',x:'Коллаген + Омега-3'},
      {t:'p',x:'Эта пара работает синергично для кожи и суставов: коллаген даёт строительный материал, а омега-3 снижает воспалительные процессы.'},
      {t:'h2',id:'magniy-omega',x:'Магний B6 + Омега-3'},
      {t:'p',x:'Обе добавки поддерживают сердечно-сосудистую и нервную системы с разных сторон.'},
      {t:'h2',id:'kollagen-magniy',x:'Коллаген + Магний B6'},
      {t:'p',x:'Прямого взаимодействия нет: витамин C из формулы коллагена не мешает усвоению магния.'},
      {t:'h2',id:'raspisanie-na-den',x:'Как выстроить расписание приёма на день'},
      {t:'table',headers:['Время','Приём','Комментарий'],rows:[['Завтрак','Омега-3 + коллаген (1-я доза)','Жиры из завтрака улучшают усвоение'],['Обед','Коллаген (2-я доза) + магний B6 (1-я доза)','Равномерно распределяет дневную дозу'],['Ужин','Магний B6 (оставшиеся дозы)','Поддерживает расслабление к вечеру']]},
      {t:'callout',variant:'tip',title:'Не уверены, какая формула нужна вам?',text:'Пройдите короткий тест на главной странице — три вопроса помогут понять, с чего начать.'}
    ],
    faq:[
      {q:'Не много ли это — три добавки в день?',a:'Коллаген, магний B6 и омега-3 закрывают разные потребности и не дублируют друг друга.'},
      {q:'Нужно ли делать перерыв?',a:'Да, 2–3 месяца приёма, затем пауза на 3–4 недели.'},
      {q:'Что будет, если выпить все капсулы за один приём?',a:'Ничего критичного, но распределение доз даёт более стабильный эффект.'}
    ]
  },
  {
    slug:'kogda-nachinayut-deystvovat-vitaminy', cat:'guide',
    title:'Когда начинают действовать витамины и БАДы: сроки и признаки эффекта',
    metaDesc:'Через сколько недель виден эффект от коллагена, магния B6 и омега-3.',
    excerpt:'Через сколько недель ждать эффект от коллагена, магния B6 и омега-3 — и что на это влияет.',
    date:'2026-06-30', updated:'2026-07-20', time:6, products:['collagen','magnesium','omega'],
    related:['kollagen-dlya-chego-nuzhen-i-kak-prinimat','magniy-v6-dlya-chego-nuzhen-kogda-pit','bad-ili-lekarstvo-v-chem-raznitsa'],
    content:[
      {t:'p',x:'«Когда будет эффект?» — самый частый вопрос про любые витамины и БАДы. Добавки работают по накопительному принципу.'},
      {t:'h2',id:'pochemu-ne-mgnovenno',x:'Почему БАДы не действуют мгновенно'},
      {t:'p',x:'Лекарство нацелено на быстрое изменение показателя. БАД восполняет дефицит, а организму нужно время, чтобы использовать этот ресурс.'},
      {t:'h2',id:'sroki-po-dobavkam',x:'Средние сроки по популярным добавкам'},
      {t:'table',headers:['Добавка','Когда заметны изменения','Что чувствуется в первую очередь'],rows:[['Коллаген','6–8 недель','Улучшение кожи, волос, ногтей'],['Магний B6','2–3 недели','Более спокойный сон, меньше раздражительности'],['Омега-3','4–6 недель','Более увлажнённая кожа, общее самочувствие']]},
      {t:'h2',id:'chto-vliyaet-na-skorost',x:'Что влияет на скорость результата'},
      {t:'ul',items:['Регулярность приёма','Соблюдение дозировки','Качество рациона','Исходный уровень дефицита','Индивидуальный метаболизм и возраст']},
      {t:'callout',variant:'warn',title:'Без магии',text:'БАД не является лекарственным средством и не даёт мгновенного результата. Реалистичный ориентир — курс от 2 месяцев.'}
    ],
    faq:[
      {q:'Если через месяц эффекта нет, бросать?',a:'Не обязательно — многим добавкам нужно 2–3 месяца. Если после курса изменений нет, обсудите со специалистом.'},
      {q:'Можно ли ускорить эффект, увеличив дозу?',a:'Нет, превышение дозировки не ускоряет эффект и может быть небезопасно.'},
      {q:'Эффект сохраняется после отмены?',a:'Отчасти да, но постепенно снижается. Курсы повторяют 2–3 раза в год.'}
    ]
  },
  {
    slug:'bad-ili-lekarstvo-v-chem-raznitsa', cat:'guide',
    title:'БАД или лекарство: в чём разница и как это влияет на приём',
    metaDesc:'Чем БАД отличается от лекарства с точки зрения регистрации, назначения и ожиданий.',
    excerpt:'Чем БАД отличается от лекарства с точки зрения регистрации, назначения и того, чего от него ждать.',
    date:'2026-07-07', updated:'2026-07-20', time:6, products:[],
    related:['kak-proverit-chestny-znak','kak-vybrat-vitaminy-i-bady','kogda-nachinayut-deystvovat-vitaminy'],
    content:[
      {t:'p',x:'Формулировка «БАД не является лекарственным средством» встречается на каждой упаковке — но что она означает на практике?'},
      {t:'h2',id:'chto-takoe-bad',x:'Что такое БАД'},
      {t:'p',x:'БАД — биологически активная добавка к пище: концентрированный источник нутриентов, который принимают вместе с рационом. По закону БАД регистрируется как пищевой продукт.'},
      {t:'h2',id:'chem-otlichaetsya',x:'Чем БАД отличается от лекарства'},
      {t:'table',headers:['Критерий','БАД','Лекарство'],rows:[['Назначение','Профилактика, поддержка','Диагностика, лечение'],['Регистрация','Как пищевой продукт','С полным пакетом исследований'],['Клинические испытания','Не обязательны','Обязательны на всех фазах'],['Дозировка','Умеренная, безопасная','Терапевтическая'],['Продажа','Свободная','Может требовать рецепта']]},
      {t:'h2',id:'znachit-li-eto-bespolezen',x:'Значит ли это, что БАД бесполезен'},
      {t:'p',x:'Нет — многие компоненты БАДов изучены в независимых исследованиях. Разница не в «работает/не работает», а в формате.'},
      {t:'callout',variant:'warn',title:'Важно',text:'БАД не заменяет назначенное лечение. Если вы принимаете рецептурные препараты, обсудите приём добавок с врачом.'}
    ],
    faq:[
      {q:'Можно ли заменить лекарство БАДом?',a:'Нет, БАД не предназначен для лечения заболеваний.'},
      {q:'Почему у БАДов нет строгих испытаний?',a:'Потому что БАД регистрируется как пищевой продукт с безопасными дозировками уже изученных нутриентов.'},
      {q:'Как понять, что БАД безопасен?',a:'Смотрите на номер государственной регистрации, полный состав и маркировку «Честный знак».'}
    ]
  },
  {
    slug:'kak-proverit-chestny-znak', cat:'guide',
    title:'Как проверить подлинность БАД через «Честный знак»: пошаговая инструкция',
    metaDesc:'Как найти код Data Matrix на упаковке и проверить подлинность в приложении «Честный знак».',
    excerpt:'Как найти код Data Matrix на упаковке и проверить подлинность БАД в приложении «Честный знак».',
    date:'2026-07-14', updated:'2026-07-21', time:5, products:[],
    related:['bad-ili-lekarstvo-v-chem-raznitsa','kak-vybrat-vitaminy-i-bady'],
    content:[
      {t:'p',x:'«Честный знак» — государственная система маркировки товаров, которая позволяет проверить происхождение упаковки за несколько секунд.'},
      {t:'h2',id:'chto-eto',x:'Что такое «Честный знак» и зачем он нужен'},
      {t:'p',x:'Цифровая система прослеживаемости товаров: каждая единица получает уникальный код, фиксируемый на всех этапах — от производства до продажи.'},
      {t:'h2',id:'gde-iskat-kod',x:'Где искать код Data Matrix на упаковке'},
      {t:'p',x:'Код выглядит как QR-подобный узор и обычно расположен на дне банки, боковой этикетке или крышке.'},
      {t:'h2',id:'kak-proverit',x:'Как проверить подлинность за 3 шага'},
      {t:'ol',items:['Найдите код Data Matrix на упаковке','Отсканируйте в бесплатном приложении «Честный знак»','Изучите результат: приложение покажет производителя, дату и статус']},
      {t:'h2',id:'chto-oznachayut-statusy',x:'Что означают статусы в приложении'},
      {t:'table',headers:['Статус','Что означает'],rows:[['В обороте','Товар легален, ещё не продан'],['Выведен из оборота','Код уже использован при продаже — повод насторожиться'],['Код не найден','Данные отсутствуют — возможна подделка']]},
      {t:'callout',variant:'tip',title:'У FonteVita',text:'Все продукты промаркированы в «Честном знаке» и дополнительно защищены: крышкой с защитой от детей, мембраной, непрозрачной банкой и плёнкой.'}
    ],
    faq:[
      {q:'Приложение «Честный знак» платное?',a:'Нет, бесплатно для скачивания и использования.'},
      {q:'Что делать, если кода нет на упаковке?',a:'Отсутствие маркировки — повод усомниться в легальности. Уточните происхождение у продавца.'},
      {q:'Можно ли проверить без приложения?',a:'Официальный способ — сканирование в приложении «Честный знак».'}
    ]
  },
  {
    slug:'kak-vybrat-vitaminy-i-bady', cat:'guide',
    title:'Как выбрать витамины и БАДы: на что смотреть на этикетке',
    metaDesc:'Пошаговый гид по выбору БАД: от цели приёма до защиты упаковки и красных флагов.',
    excerpt:'Пошаговый гид по выбору БАД: от цели приёма до защиты упаковки и красных флагов на этикетке.',
    date:'2026-07-21', updated:'2026-07-27', time:7, products:['collagen','magnesium','omega'],
    related:['bad-ili-lekarstvo-v-chem-raznitsa','kak-proverit-chestny-znak','sovmestimost-kollagen-magniy-omega-3'],
    content:[
      {t:'p',x:'Полки с витаминами растут быстрее, чем понимание, как в них ориентироваться. Собрали пошаговый гид.'},
      {t:'h2',id:'s-chego-nachat',x:'С чего начать выбор'},
      {t:'p',x:'Определите цель: что хотите поддержать — энергию, сон, кожу, суставы или иммунитет.'},
      {t:'h2',id:'sostav-i-dozirovki',x:'Изучите состав и дозировки'},
      {t:'p',x:'Хорошая этикетка указывает точное количество действующего вещества на порцию, а не расплывчатую «фирменную смесь».'},
      {t:'h2',id:'forma-veshchestva',x:'Проверьте форму действующего вещества'},
      {t:'ul',items:['Магний — хелатные формы усваиваются лучше оксида','Коллаген — гидролизованный усваивается лучше цельного','Омега-3 — триглицеридная форма лучше этиловых эфиров']},
      {t:'h2',id:'zashita-upakovki',x:'Обратите внимание на защиту упаковки'},
      {t:'ul',items:['Крышка с защитой от детей','Защитная мембрана под крышкой','Непрозрачный пластик банки','Термоусадочная плёнка на крышке']},
      {t:'h2',id:'krasnye-flagi',x:'Не ведитесь на громкие обещания'},
      {t:'p',x:'«Мгновенный эффект», «лечит за 3 дня», «100% гарантия» — красный флаг. Ответственный производитель говорит на языке поддержки, а не лечения.'},
      {t:'callout',variant:'tip',title:'Итоговый чек-лист',text:'Точные дозировки → правильная форма → защищённая упаковка → «Честный знак» → реалистичные формулировки.'}
    ],
    faq:[
      {q:'Дороже — значит качественнее?',a:'Не обязательно. Цена часто отражает маркетинг. Ориентируйтесь на дозировки и форму вещества.'},
      {q:'Нужно ли смотреть на страну производства?',a:'Важнее происхождение сырья, лабораторный протокол и государственная регистрация.'},
      {q:'Можно ли ориентироваться только на отзывы?',a:'Отзывы полезны, но не заменяют проверку состава и дозировок.'}
    ]
  },
  {
    slug:'pochemu-nam-nuzhna-omega-3', cat:'omega-3',
    title:'Почему современному человеку не хватает омега-3 и что с этим делать',
    metaDesc:'Наш рацион сильно изменился, а тело осталось тем же. Разбираем, почему омега-3 так важна.',
    excerpt:'Наше тело по-прежнему нуждается в тех же нутриентах — но рацион стал совсем другим.',
    date:'2026-08-04', updated:'2026-08-04', time:7, products:['omega'],
    related:['omega-3-polza-i-vred-kak-vybrat','kak-vybrat-vitaminy-i-bady','kogda-nachinayut-deystvovat-vitaminy'],
    content:[
      {t:'p',x:'Наша окружающая среда сильно изменилась с момента появления Homo sapiens. Изменился рацион — и один из критически важных элементов, который исчез из него, — омега-3.'},
      {t:'h2',id:'evolyutsionny-rasklad',x:'Что ели наши предки — и что едим мы'},
      {t:'p',x:'Для большинства истории человечества рацион включал дикую рыбу, дичь, водоросли, семена и орехи. Соотношение омега-6 к омега-3 составляло 1:1. Сегодня — до 15:1 и выше.'},
      {t:'h2',id:'pochemu-defitsit',x:'Почему дефицит омега-3 стал массовым'},
      {t:'ul',items:['Промышленные масла содержат много омега-6 и мало омега-3','Рыба на столе появляется 1–2 раза в неделю, а не ежедневно','Мясной рацион сместился к животных на зерновых кормах','Готовая еда содержит трансжиры и избыток омега-6']},
      {t:'h2',id:'chto-nuzhno-telu',x:'Что нужно телу, которое не изменилось за тысячи лет'},
      {t:'p',x:'Организм эволюционировал в условиях ежедневного поступления омега-3. Тело не может синтезировать их самостоятельно — оно ждёт их извне.'},
      {t:'callout',variant:'info',title:'Факт',text:'По данным ВОЗ, дефицит омега-3 — один из десяти основных факторов риска смертности в мире.'},
      {t:'h2',id:'kompensatsiya',x:'Как компенсировать дефицит'},
      {t:'p',x:'Увеличить потребление жирной рыбы до 2–3 порций в неделю, сократить промышленные масла, рассмотреть добавку омега-3.'},
      {t:'callout',variant:'tip',title:'Практический совет',text:'Принимайте омега-3 во время еды, содержащей жиры — так жирные кислоты усваиваются значительно лучше.'}
    ],
    faq:[
      {q:'Как понять, что мне не хватает омега-3?',a:'Специфических симптомов на ранних стадиях практически нет. Косвенные — сухая кожа, ломкие ногти, утомляемость.'},
      {q:'Можно ли получить достаточно только из рыбы?',a:'Теоретически да, если есть жирную рыбу 3–4 раза в неделю. На практике大多数人 не делают так.'},
      {q:'Омега-3 — это навсегда?',a:'Курсовой приём 2–3 раза в год помогает поддерживать адекватный уровень.'}
    ]
  }
];

window.__BLOG_POSTS = POSTS;

/* ====== Blog Render Functions ====== */

function renderBreadcrumbs(items) {
  return `<nav class="breadcrumbs"><a href="/" data-spa>${icons.home}</a>${items.map((item,i) => {
    const isLast = i === items.length - 1;
    return `${icons.chevRight}${isLast ? `<span class="current">${item.label}</span>` : `<a href="${item.to}" data-spa>${item.label}</a>`}`;
  }).join('')}</nav>`;
}

function catPill(cat, asLink) {
  const cls = `cat-pill cat-${cat.accent}`;
  const inner = `${icons[cat.icon]} ${cat.short}`;
  return asLink !== false ? `<a href="/blog/category/${cat.slug}" data-spa class="${cls}">${inner}</a>` : `<span class="${cls}">${inner}</span>`;
}

function renderContentBlock(block) {
  switch(block.t) {
    case 'p': return `<p>${block.x}</p>`;
    case 'h2': return `<h2 id="${block.id}">${block.x}</h2>`;
    case 'h3': return `<h3 id="${block.id}">${block.x}</h3>`;
    case 'ul': return `<ul>${block.items.map(i=>`<li>${icons.check}<span>${i}</span></li>`).join('')}</ul>`;
    case 'ol': return `<ol>${block.items.map((i,idx)=>`<li><span class="step-num">${idx+1}</span><span>${i}</span></li>`).join('')}</ol>`;
    case 'table': return `<div class="table-wrap"><table><thead><tr>${block.headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${block.rows.map((r,ri)=>`<tr class="${ri%2===1?'alt':''}">${r.map((c,ci)=>`<td${ci===0?' style="font-weight:700"':''}>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    case 'callout': {
      const icon = block.variant==='tip'?icons.lightbulb:block.variant==='warn'?icons.alertTriangle:icons.info;
      return `<div class="callout callout-${block.variant}"><div class="callout-icon">${icon}</div><div><p class="callout-title">${block.title}</p><p class="callout-text">${block.text}</p></div></div>`;
    }
    case 'link': return `<a href="${block.to}" data-spa class="internal-link"><span>${block.text}</span><span class="link-label">${block.label} ${icons.arrowRight}</span></a>`;
    default: return '';
  }
}

/* Main page render */
window.renderMainPage = function(app) {
  // Re-render main page from the static HTML
  const mainContent = document.getElementById('main-page-content');
  if(mainContent) {
    app.innerHTML = mainContent.innerHTML;
    // Re-init
    setTimeout(() => {
      initBottles2();
      initReveal2();
      updateCartUI();
      renderQuiz();
      initFaq2();
    }, 10);
  }
};

function initBottles2() {
  const stage = document.querySelector('#bottles-stage');
  if(!stage) return;
  const items = stage.querySelectorAll('.bottle-item');
  const dots = document.querySelectorAll('.bottle-dot');
  let active=0, paused=false;
  function setActive(i) {
    active=i;
    items.forEach((el,idx) => {
      const offset=((idx-active+items.length)%items.length);
      el.style.transform=`translate(-50%,-50%) translateX(${offset===0?'0%':offset===1?'30%':'-30%'}) scale(${offset===0?1:.58}) rotateY(${offset===0?'0deg':offset===1?'6deg':'-6deg'})`;
      el.style.zIndex=offset===0?30:10;
      el.dataset.pos=offset===0?'front':'back';
    });
    dots.forEach((d,idx)=>d.classList.toggle('active',idx===active));
  }
  setInterval(()=>{if(!paused)setActive((active+1)%items.length)},4200);
  stage.parentElement.addEventListener('mouseenter',()=>paused=true);
  stage.parentElement.addEventListener('mouseleave',()=>paused=false);
  dots.forEach((d,i)=>d.addEventListener('click',()=>setActive(i)));
}

function initReveal2() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});
  },{threshold:.15});
  els.forEach(el=>io.observe(el));
}

function initFaq2() {
  document.querySelectorAll('.faq-item').forEach((item,i) => {
    item.querySelector('.faq-question')?.addEventListener('click', () => item.classList.toggle('open'));
  });
}

/* Blog index render */
window.renderBlogIndex = function(app) {
  const search = window.__blogSearch || '';
  const activeCat = window.__blogCat || null;
  let filtered = [...POSTS].sort((a,b)=>+new Date(b.date)-+new Date(a.date));
  if(activeCat) filtered = filtered.filter(p=>p.cat===activeCat);
  if(search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(p=>p.title.toLowerCase().includes(q)||p.excerpt.toLowerCase().includes(q));
  }

  app.innerHTML = `
    <header class="header"><div class="header-inner">
      <a href="/" data-spa class="header-logo"><img src="${LOGO}" alt="FonteVita"></a>
      <nav class="header-nav">
        <a href="/" data-spa>Главная</a>
        <a href="/#products" data-spa>Продукты</a>
        <a href="/#quiz" data-spa>Подбор</a>
        <a href="/#quality" data-spa>Качество</a>
        <a href="/#reviews" data-spa>Отзывы</a>
        <a href="/#faq" data-spa>Вопросы</a>
        <a href="/blog" data-spa>Блог</a>
      </nav>
      <div class="header-actions">
        <button class="cart-btn" id="cart-btn" onclick="window._openCart()">${icons.shoppingBag}<span class="label">Корзина</span><span class="cart-badge" id="cart-badge" style="display:none">0</span></button>
      </div>
    </div></header>

    <main>
      <section class="blog-hero">
        <div class="blog-hero-glow-1"></div>
        <div class="blog-hero-glow-2"></div>
        <div class="blog-hero-content">
          ${renderBreadcrumbs([{label:'Блог'}])}
          <span style="display:inline-flex;align-items:center;gap:.5rem;border-radius:9999px;background:var(--card);padding:.5rem 1rem;font-size:.75rem;font-weight:700;box-shadow:var(--shadow-soft);margin-top:1.5rem">${icons.sparkles} Блог FonteVita</span>
          <h1 class="blog-title" style="margin-top:1.25rem">Витамины и БАДы<br><span class="muted"> — простыми словами</span></h1>
          <p class="blog-subtitle">Разбираем коллаген, магний B6 и омега-3: как принимать, сочетать и выбирать.</p>
        </div>
      </section>

      <section class="blog-filters">
        <div class="blog-filters-inner">
          <div class="search-wrap">
            ${icons.search}
            <input type="text" class="search-input" placeholder="Поиск по статьям..." value="${search}" oninput="window.__blogSearch=this.value;window.renderBlogIndex(document.getElementById('app'))">
            ${search?`<button class="search-clear" onclick="window.__blogSearch='';window.renderBlogIndex(document.getElementById('app'))">${icons.x}</button>`:''}
          </div>
          <div class="filter-chips">
            <button class="filter-chip ${!activeCat?'active':''}" onclick="window.__blogCat=null;window.renderBlogIndex(document.getElementById('app'))">Все</button>
            ${BLOG_CATEGORIES.map(c=>`<button class="filter-chip ${activeCat===c.slug?'active':''}" onclick="window.__blogCat='${c.slug}';window.renderBlogIndex(document.getElementById('app'))">${icons[c.icon]} ${c.short}</button>`).join('')}
          </div>
        </div>
      </section>

      <section class="blog-feed">
        ${filtered.length>0?`<div class="blog-feed-grid">${filtered.map(p=>{
          const cat=getCatBySlug(p.cat);
          return `<article class="blog-feed-card">
            <a href="/blog/${p.slug}" data-spa class="blog-feed-cover"><img src="${BLOG_COVERS[p.slug]||''}" alt="" loading="lazy"></a>
            <div class="blog-feed-body">
              <div class="blog-feed-meta">${catPill(cat)}<span class="meta-dot">·</span><span class="meta-text"><time>${formatDate(p.date)}</time></span><span class="meta-dot">·</span><span class="meta-text">${icons.clock} ${p.time} мин</span></div>
              <h3><a href="/blog/${p.slug}" data-spa class="blog-feed-title">${p.title}</a></h3>
              <p class="blog-feed-excerpt">${p.excerpt}</p>
              <a href="/blog/${p.slug}" data-spa class="blog-feed-link">Читать →</a>
            </div>
          </article>`;
        }).join('')}</div>`:`<div class="empty-results"><div class="empty-results-icon">${icons.search}</div><p>Ничего не найдено</p><p class="desc">Попробуйте изменить запрос или выбрать другую категорию.</p></div>`}
      </section>
    </main>

    <footer class="footer"><div class="footer-inner">
      <a href="/" data-spa><img src="${LOGO}" alt="FonteVita" class="footer-logo"></a>
      <nav class="footer-nav"><a href="/" data-spa>Главная</a><a href="/blog" data-spa>Блог</a><a href="/#faq" data-spa>Вопросы</a></nav>
      <p class="footer-disclaimer">БАД. Не является лекарственным средством. Перед применением проконсультируйтесь со специалистом.</p>
      <p class="footer-copy">© 2026 FonteVita</p>
    </div></footer>

    <div class="cart-overlay" id="cart-overlay"></div>
    <aside class="cart-panel" id="cart-panel">
      <div class="cart-header"><div class="cart-header-left">${icons.shoppingBag}<h2>Корзина</h2><span class="cart-count-badge" id="cart-count-badge">0</span></div><button class="cart-close" id="cart-close" onclick="window._closeCart()">${icons.x}</button></div>
      <div class="cart-body" id="cart-body"></div>
      <div class="cart-footer" id="cart-footer" style="display:none"><div class="cart-delivery"><span>Доставка</span><span id="cart-delivery-val">от 350 ₽</span></div><div class="cart-total"><span class="cart-total-label">Итого</span><span class="cart-total-value" id="cart-total-val">0 ₽</span></div><button class="checkout-btn" id="checkout-btn">Оформить заказ</button></div>
    </aside>
  `;
  updateCartUI();
  renderCart();
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);
  document.getElementById('cart-close')?.addEventListener('click', closeCart);
};

/* Blog category render */
window.renderBlogCategory = function(app, catSlug) {
  const cat = getCatBySlug(catSlug);
  if(!cat) { app.innerHTML='<div style="padding:5rem;text-align:center"><h1>Категория не найдена</h1></div>'; return; }
  const posts = POSTS.filter(p=>p.cat===catSlug).sort((a,b)=>+new Date(b.date)-+new Date(a.date));
  const others = BLOG_CATEGORIES.filter(c=>c.slug!==catSlug);

  app.innerHTML = `
    <header class="header"><div class="header-inner">
      <a href="/" data-spa class="header-logo"><img src="${LOGO}" alt="FonteVita"></a>
      <nav class="header-nav"><a href="/" data-spa>Главная</a><a href="/blog" data-spa>Блог</a></nav>
      <div class="header-actions"><button class="cart-btn" id="cart-btn" onclick="window._openCart()">${icons.shoppingBag}<span class="label">Корзина</span><span class="cart-badge" id="cart-badge" style="display:none">0</span></button></div>
    </div></header>
    <main>
      <section class="blog-hero"><div class="blog-hero-content">
        ${renderBreadcrumbs([{label:'Блог',to:'/blog'},{label:cat.short}])}
        <span style="display:inline-flex;align-items:center;gap:.5rem;border-radius:9999px;background:var(--card);padding:.5rem 1rem;font-size:.75rem;font-weight:700;box-shadow:var(--shadow-soft);margin-top:1.5rem">${icons[cat.icon]} Раздел блога</span>
        <h1 style="font-size:2.5rem;font-weight:700;margin-top:1.25rem">${cat.name}</h1>
        <p class="blog-subtitle">${cat.desc}</p>
        <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:.625rem;margin-top:2rem">${others.map(c=>catPill(c)).join('')}</div>
      </div></section>
      <section style="max-width:72rem;margin:0 auto;padding:0 1rem 5rem">
        ${posts.length>0?`<div style="display:grid;gap:1.5rem" class="related-grid">${posts.map(p=>`
          <article class="related-card"><a href="/blog/${p.slug}" data-spa class="related-card-cover"><img src="${BLOG_COVERS[p.slug]||''}" alt="" loading="lazy"></a><div class="related-card-body"><div class="blog-feed-meta">${catPill(getCatBySlug(p.cat))}</div><h3 class="related-card-title"><a href="/blog/${p.slug}" data-spa>${p.title}</a></h3><p class="related-card-excerpt">${p.excerpt}</p><div class="related-card-meta"><time>${formatDate(p.date)}</time>·${icons.clock} ${p.time} мин</div><a href="/blog/${p.slug}" data-spa class="related-card-link">Читать статью →</a></div></article>
        `).join('')}</div>`:'<p style="text-align:center;color:var(--muted-foreground)">В этом разделе пока нет статей.</p>'}
      </section>
    </main>
    <footer class="footer"><div class="footer-inner"><a href="/" data-spa><img src="${LOGO}" alt="FonteVita" class="footer-logo"></a><nav class="footer-nav"><a href="/" data-spa>Главная</a><a href="/blog" data-spa>Блог</a></nav><p class="footer-disclaimer">БАД. Не является лекарственным средством.</p><p class="footer-copy">© 2026 FonteVita</p></div></footer>
    ${cartPanelHTML()}
  `;
  updateCartUI(); renderCart(); initCartEvents();
};

/* Blog article render */
window.renderBlogArticle = function(app, slug) {
  const post = POSTS.find(p=>p.slug===slug);
  if(!post) { app.innerHTML='<div style="padding:5rem;text-align:center"><h1>Статья не найдена</h1></div>'; return; }
  const cat = getCatBySlug(post.cat);
  const related = post.related.map(s=>POSTS.find(p=>p.slug===s)).filter(Boolean).slice(0,3);
  const headings = post.content.filter(b=>b.t==='h2');
  const relatedProds = post.products.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean);

  app.innerHTML = `
    <header class="header"><div class="header-inner">
      <a href="/" data-spa class="header-logo"><img src="${LOGO}" alt="FonteVita"></a>
      <nav class="header-nav"><a href="/" data-spa>Главная</a><a href="/blog" data-spa>Блог</a></nav>
      <div class="header-actions"><button class="cart-btn" id="cart-btn" onclick="window._openCart()">${icons.shoppingBag}<span class="label">Корзина</span><span class="cart-badge" id="cart-badge" style="display:none">0</span></button></div>
    </div></header>
    <main>
      <section class="article-header">
        ${renderBreadcrumbs([{label:'Блог',to:'/blog'},{label:cat.short,to:`/blog/category/${cat.slug}`},{label:post.title}])}
        <div style="margin-top:1.5rem">${catPill(cat,false)}</div>
        <h1 class="article-title">${post.title}</h1>
        <div class="article-meta"><span>FonteVita</span><span class="meta-dot">·</span><time>${formatDate(post.date)}</time><span class="meta-dot">·</span><span class="meta-text">${icons.clock} ${post.time} мин чтения</span></div>
      </section>
      <section class="article-cover"><div class="cover-card"><img src="${BLOG_COVERS[slug]||''}" alt=""></div></section>
      <section class="article-layout">
        <div class="article-prose">
          ${post.content.map(renderContentBlock).join('')}
          ${post.faq.length>0?`
            <div class="article-faq"><h2>Частые вопросы</h2>
              <div class="article-faq-list">${post.faq.map((f,i)=>`<div class="faq-item" id="afaq-${i}"><button class="faq-question" onclick="document.getElementById('afaq-${i}').classList.toggle('open')"><span class="faq-question-text">${f.q}</span><span class="faq-toggle">${icons.plus}</span></button><div class="faq-answer"><div class="faq-answer-inner"><p class="faq-answer-text">${f.a}</p></div></div></div>`).join('')}</div>
            </div>`:''}
          ${related.length>0?`<div class="related-articles"><h2>Читайте также</h2><div class="related-grid">${related.map(p=>{
            const rc=getCatBySlug(p.cat);
            return `<article class="related-card"><a href="/blog/${p.slug}" data-spa class="related-card-cover"><img src="${BLOG_COVERS[p.slug]||''}" alt="" loading="lazy"></a><div class="related-card-body"><div class="blog-feed-meta">${catPill(rc)}</div><h3 class="related-card-title"><a href="/blog/${p.slug}" data-spa>${p.title}</a></h3><p class="related-card-excerpt">${p.excerpt}</p><div class="related-card-meta"><time>${formatDate(p.date)}</time>·${icons.clock} ${p.time} мин</div><a href="/blog/${p.slug}" data-spa class="related-card-link">Читать статью →</a></div></article>`;
          }).join('')}</div></div>`:''}
        </div>
        <aside class="article-sidebar">
          ${headings.length>=2?`<nav class="toc-card"><p class="toc-label">${icons.list} Содержание</p><ul class="toc-list">${headings.map(h=>`<li><a href="#${h.id}" class="toc-link">${h.x}</a></li>`).join('')}</ul></nav>`:''}
          ${relatedProds.length>0?`<div class="related-prods"><p class="related-prods-label">Упомянутые продукты</p>${relatedProds.map(p=>`<a href="/#product-${p.id}" class="related-prod-row"><img src="${p.img}" alt="${p.name}"><div style="min-width:0"><p class="related-prod-name">${p.name}</p><p class="related-prod-price">${formatPrice(p.price)}</p></div><span class="related-prod-arrow">${icons.arrowRight}</span></a>`).join('')}</div>`:''}
        </aside>
      </section>
    </main>
    <footer class="footer"><div class="footer-inner"><a href="/" data-spa><img src="${LOGO}" alt="FonteVita" class="footer-logo"></a><nav class="footer-nav"><a href="/" data-spa>Главная</a><a href="/blog" data-spa>Блог</a></nav><p class="footer-disclaimer">БАД. Не является лекарственным средством.</p><p class="footer-copy">© 2026 FonteVita</p></div></footer>
    ${cartPanelHTML()}
  `;
  updateCartUI(); renderCart(); initCartEvents();
  // TOC active highlight
  const tocLinks = document.querySelectorAll('.toc-link');
  if(headings.length>=2) {
    const els = headings.map(h=>document.getElementById(h.id)).filter(Boolean);
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{if(e.isIntersecting){tocLinks.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));}});
    },{rootMargin:'-100px 0px -70% 0px',threshold:0});
    els.forEach(el=>io.observe(el));
  }
};

function cartPanelHTML() {
  return `<div class="cart-overlay" id="cart-overlay"></div><aside class="cart-panel" id="cart-panel"><div class="cart-header"><div class="cart-header-left">${icons.shoppingBag}<h2>Корзина</h2><span class="cart-count-badge" id="cart-count-badge">0</span></div><button class="cart-close" id="cart-close" onclick="window._closeCart()">${icons.x}</button></div><div class="cart-body" id="cart-body"></div><div class="cart-footer" id="cart-footer" style="display:none"><div class="cart-delivery"><span>Доставка</span><span id="cart-delivery-val">от 350 ₽</span></div><div class="cart-total"><span class="cart-total-label">Итого</span><span class="cart-total-value" id="cart-total-val">0 ₽</span></div><button class="checkout-btn" id="checkout-btn">Оформить заказ</button></div></aside>`;
}

function initCartEvents() {
  document.getElementById('cart-overlay')?.addEventListener('click', window._closeCart);
  document.getElementById('cart-close')?.addEventListener('click', window._closeCart);
  document.getElementById('checkout-btn')?.addEventListener('click', ()=>alert('Заказ оформлен! Спасибо!'));
}

})();
