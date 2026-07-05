// MEAT_QUIZ — вопросы викторины «угадай отруб по фото».
// Сгенерировано из meat_quiz.json. Формат совместим с движком ctest
// (см. CIVICS в index.html): { id, number, question, image, correct, wrong, hint, comment }.
// Картинки: pictures/<ID>.jpg|.png|.webp (имя файла = ID элемента).
window.MEAT_QUIZ = [
  {
    "id": "NEW_YORK_STRIP_ROAST",
    "number": 1,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/NEW_YORK_STRIP_ROAST",
    "correct": [
      "New_York_Strip_Roast"
    ],
    "wrong": [
      "Boneless_Ribeye_Roast",
      "Tenderloin_Roast_(Chateaubriand)",
      "Sirloin_Tip_Roast"
    ],
    "hint": "Тот же отруб, что и у знаменитого стейка имени большого города, но целиком — для духовки, а не для сковороды.",
    "comment": "Целый отруб тонкого края (стриплойна) для запекания. Готовится в духовке целиком: обжарка корочки при высокой температуре, затем доведение при 120–150°C до внутренней температуры 52–57°C, обязательный отдых 15–20 минут. В отличие от стейка Нью-Йорк это не порционный кусок, а жаркое на несколько человек; в отличие от рибай-ростбифа мясо плотнее и постнее, без крупного жирового «глазка»."
  },
  {
    "id": "BONELESS_NEW_YORK_STRIP_STEAK",
    "number": 2,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BONELESS_NEW_YORK_STRIP_STEAK",
    "correct": [
      "Boneless_New_York_Strip_Steak"
    ],
    "wrong": [
      "Boneless_Ribeye_Steak",
      "Boneless_Top_Sirloin_Steak",
      "T-Bone_Steak"
    ],
    "hint": "Порционный стейк, названный в честь города, который никогда не спит; жирная кромка у него только с одной стороны.",
    "comment": "Классический стейк из тонкого края без кости, толщиной около 2,5 см. Жарится на гриле или чугунной сковороде по 3–4 минуты с каждой стороны до medium rare, солится крупной солью перед жаркой. От рибая отличается меньшей мраморностью и более плотной, «мясной» текстурой; жировая полоска идёт только по одному краю, а не внутри куска."
  },
  {
    "id": "STEAKHOUSE_CUT_BONELESS_NEW_YORK_STRIP_STEAK",
    "number": 3,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/STEAKHOUSE_CUT_BONELESS_NEW_YORK_STRIP_STEAK",
    "correct": [
      "Steakhouse_Cut_Boneless_New_York_Strip_Steak"
    ],
    "wrong": [
      "Boneless_New_York_Strip_Steak",
      "Steakhouse_Cut_Boneless_Ribeye_Steak",
      "Steakhouse_Cut_Porterhouse_Steak"
    ],
    "hint": "Очень толстая версия «городского» стейка — такую подают в дорогих мясных ресторанах и готовят методом обратной обжарки.",
    "comment": "Утолщённая «ресторанная» нарезка стейка Нью-Йорк (4–5 см). Из-за толщины лучший способ — reverse sear: сначала духовка при 110–120°C до 48–50°C внутри, затем быстрая обжарка на раскалённой сковороде для корочки. Отличается от обычного Нью-Йорка только толщиной, а от стейкхаус-рибая — меньшим количеством внутреннего жира."
  },
  {
    "id": "THIN-SLICED_BONELESS_NEW_YORK_STRIP_STEAK",
    "number": 4,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/THIN-SLICED_BONELESS_NEW_YORK_STRIP_STEAK",
    "correct": [
      "Thin-Sliced_Boneless_New_York_Strip_Steak"
    ],
    "wrong": [
      "Boneless_New_York_Strip_Steak",
      "Thin-Sliced_Boneless_Ribeye_Steak",
      "Thin-Sliced_Top_Sirloin_Steak"
    ],
    "hint": "«Городской» стейк, раскатанный почти в лист бумаги — на сковороде проводит меньше времени, чем вы читаете эту подсказку.",
    "comment": "Тонкая нарезка стриплойна (0,5–1 см). Жарится очень быстро — по 1–1,5 минуты с каждой стороны на максимальном огне, идеальна для сэндвичей, чизстейков и завтраков «стейк и яйца». Главное отличие от обычного стейка Нью-Йорк — толщина: тонкий кусок невозможно приготовить до классического medium rare с корочкой, он готовится почти мгновенно."
  },
  {
    "id": "PORTERHOUSE_STEAK",
    "number": 5,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/PORTERHOUSE_STEAK",
    "correct": [
      "Porterhouse_Steak"
    ],
    "wrong": [
      "T-Bone_Steak",
      "Bone-In_Ribeye_Steak",
      "Standing_Rib_Roast"
    ],
    "hint": "Король стейков на кости: по одну сторону кости — один знаменитый стейк, по другую — второй, и оба размером «на двоих».",
    "comment": "Большой стейк на Т-образной кости, объединяющий два мяса: тонкий край (стриплойн) с одной стороны кости и крупный кусок вырезки с другой. Жарится на гриле по 4–5 минут на сторону, вырезку держат дальше от сильного жара, чтобы не пересушить. От ти-боуна отличается размером вырезки: у портерхауса её диаметр не менее 32 мм — фактически это «два стейка в одном»."
  },
  {
    "id": "STEAKHOUSE_CUT_PORTERHOUSE_STEAK",
    "number": 6,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/STEAKHOUSE_CUT_PORTERHOUSE_STEAK",
    "correct": [
      "Steakhouse_Cut_Porterhouse_Steak"
    ],
    "wrong": [
      "Porterhouse_Steak",
      "Steakhouse_Cut_T-Bone_Steak",
      "Bone-In_Steakhouse_Cut_Ribeye_Steak"
    ],
    "hint": "Огромная «двойная» версия стейка на Т-кости — во Флоренции похожий кусок считают национальным достоянием.",
    "comment": "Портерхаус ресторанной толщины (5 см и более), часто весом более килограмма. Готовится как во флорентийском стейке бистекка: сильный жар для корочки, затем непрямой жар или духовка до medium rare, отдых 10 минут, мясо срезают с кости и нарезают ломтями. Отличие от обычного портерхауса — только толщина и вес; такую нарезку обычно подают на компанию."
  },
  {
    "id": "THIN-SLICED_PORTERHOUSE_STEAK",
    "number": 7,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/THIN-SLICED_PORTERHOUSE_STEAK",
    "correct": [
      "Thin-Sliced_Porterhouse_Steak"
    ],
    "wrong": [
      "Thin-Sliced_T-Bone_Steak",
      "Porterhouse_Steak",
      "Thin-Sliced_Bone-In_Ribeye_Steak"
    ],
    "hint": "Тонкий, как блин, но всё с той же знаменитой костью в форме буквы алфавита и двумя видами мяса по бокам.",
    "comment": "Тонко нарезанный портерхаус: та же Т-образная кость со стриплойном и вырезкой, но толщиной около 1 см. Жарится стремительно на очень горячей поверхности по минуте на сторону; из-за тонкости вырезка легко пересушивается, поэтому снимать нужно раньше. От обычного портерхауса отличается только толщиной, от тонкого ти-боуна — большим сегментом вырезки."
  },
  {
    "id": "T-BONE_STEAK",
    "number": 8,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/T-BONE_STEAK",
    "correct": [
      "T-Bone_Steak"
    ],
    "wrong": [
      "Porterhouse_Steak",
      "Bone-In_Ribeye_Steak",
      "Beef_Shank"
    ],
    "hint": "Назван в честь буквы алфавита, которую образует его кость; у его «старшего брата» кусок вырезки крупнее.",
    "comment": "Стейк на кости в форме буквы T: с одной стороны стриплойн, с другой — небольшой кусок вырезки. Жарится на гриле 3–5 минут на сторону; кость замедляет прогрев мяса рядом с ней, поэтому у кости мясо сочнее. Главное отличие от портерхауса — размер вырезки: у ти-боуна она заметно меньше (менее 32 мм в диаметре), так как отруб берётся ближе к переду поясничной части."
  },
  {
    "id": "STEAKHOUSE_CUT_T-BONE_STEAK",
    "number": 9,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/STEAKHOUSE_CUT_T-BONE_STEAK",
    "correct": [
      "Steakhouse_Cut_T-Bone_Steak"
    ],
    "wrong": [
      "Steakhouse_Cut_Porterhouse_Steak",
      "T-Bone_Steak",
      "Steakhouse_Cut_Boneless_Ribeye_Steak"
    ],
    "hint": "Утолщённая ресторанная версия стейка с «буквенной» костью и маленьким кусочком самого нежного мяса сбоку.",
    "comment": "Толстый ти-боун ресторанной нарезки (4–5 см). Готовится комбинированно: обжарка на сильном жаре, доведение на непрямом жаре гриля или в духовке; вырезку располагают к более холодной зоне. От обычного ти-боуна отличается лишь толщиной, от стейкхаус-портерхауса — меньшей долей вырезки."
  },
  {
    "id": "THIN-SLICED_T-BONE_STEAK",
    "number": 10,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/THIN-SLICED_T-BONE_STEAK",
    "correct": [
      "Thin-Sliced_T-Bone_Steak"
    ],
    "wrong": [
      "Thin-Sliced_Porterhouse_Steak",
      "T-Bone_Steak",
      "Thin-Sliced_Bone-In_Ribeye_Steak"
    ],
    "hint": "Кость в форме буквы есть, а вот толщины почти нет — готовится быстрее яичницы.",
    "comment": "Тонкая нарезка ти-боуна (около 1 см) с костью. Жарится очень быстро на раскалённой сковороде или гриле — по минуте на сторону; популярна в латиноамериканской кухне для быстрой жарки. Отличается от обычного ти-боуна только толщиной, от тонкого портерхауса — меньшим сегментом вырезки при той же Т-образной кости."
  },
  {
    "id": "STANDING_RIB_ROAST",
    "number": 11,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/STANDING_RIB_ROAST",
    "correct": [
      "Standing_Rib_Roast"
    ],
    "wrong": [
      "Boneless_Ribeye_Roast",
      "New_York_Strip_Roast",
      "Shoulder_Roast"
    ],
    "hint": "Праздничное жаркое, которое запекают «стоя» на собственных костях — на Рождество в США оно главный герой стола.",
    "comment": "Рёберное жаркое на костях, он же прайм-риб — праздничное блюдо американской кухни. Запекается «стоя» на рёбрах, которые служат естественной подставкой: сначала 220°C для корочки, затем 120–150°C до 52–55°C внутри, отдых 20–30 минут. Отличается от бескостного рибай-ростбифа наличием рёберных костей, которые дают дополнительный вкус, а от стейка рибай — тем, что это целый отруб на несколько рёбер, а не порционный кусок."
  },
  {
    "id": "BONE-IN_RIBEYE_STEAK",
    "number": 12,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BONE-IN_RIBEYE_STEAK",
    "correct": [
      "Bone-In_Ribeye_Steak"
    ],
    "wrong": [
      "Boneless_Ribeye_Steak",
      "T-Bone_Steak",
      "Porterhouse_Steak"
    ],
    "hint": "Самый мраморный из классических стейков, но с «ручкой» из кости — в удлинённой версии его сравнивают с индейским оружием.",
    "comment": "Рибай на рёберной кости (при длинной зачищенной кости его называют «ковбой» или «томагавк»). Жарится на гриле или сковороде 4–5 минут на сторону до medium rare; кость замедляет приготовление мяса рядом с собой и добавляет вкуса. От бескостного рибая отличается наличием кости и чуть большим временем приготовления; от ти-боуна — тем, что здесь одна мышца рибая, а не два вида мяса вокруг Т-кости."
  },
  {
    "id": "BONE-IN_STEAKHOUSE_CUT_RIBEYE_STEAK",
    "number": 13,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BONE-IN_STEAKHOUSE_CUT_RIBEYE_STEAK",
    "correct": [
      "Bone-In_Steakhouse_Cut_Ribeye_Steak"
    ],
    "wrong": [
      "Bone-In_Ribeye_Steak",
      "Steakhouse_Cut_Boneless_Ribeye_Steak",
      "Steakhouse_Cut_Porterhouse_Steak"
    ],
    "hint": "Гигантская ресторанная версия самого «жирного» классического стейка, да ещё и с костью — одному такой не осилить.",
    "comment": "Толстый рибай на кости ресторанной нарезки (5 см и более, часто больше килограмма). Из-за толщины готовится методом reverse sear или на двухзонном гриле: медленный прогрев, затем корочка на сильном жаре, отдых 10 минут. Отличается от обычного рибая на кости только толщиной; от стейкхаус-портерхауса — отсутствием вырезки и Т-образной кости."
  },
  {
    "id": "THIN-SLICED_BONE-IN_RIBEYE_STEAK",
    "number": 14,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/THIN-SLICED_BONE-IN_RIBEYE_STEAK",
    "correct": [
      "Thin-Sliced_Bone-In_Ribeye_Steak"
    ],
    "wrong": [
      "Thin-Sliced_Boneless_Ribeye_Steak",
      "Thin-Sliced_T-Bone_Steak",
      "Bone-In_Ribeye_Steak"
    ],
    "hint": "Мраморный «глазок» и косточка на месте, но толщина — почти как у бекона.",
    "comment": "Тонко нарезанный рибай на кости (около 1 см). Жарится молниеносно — по минуте на сторону на максимальном жаре; благодаря высокой мраморности даже тонкий кусок остаётся сочным. Отличается от обычного рибая на кости только толщиной, а от тонкого ти-боуна — одной мышцей с жировым «глазком» вместо двух видов мяса."
  },
  {
    "id": "BEEF_BACK_RIBS",
    "number": 15,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BEEF_BACK_RIBS",
    "correct": [
      "Beef_Back_Ribs"
    ],
    "wrong": [
      "Chuck_Short_Ribs",
      "Flanken_Style_Ribs",
      "Fresh_Beef_Neckbones"
    ],
    "hint": "Эти кости «отдали» почти всё мясо знаменитому мраморному стейку, а сами стали классикой барбекю-коптилен.",
    "comment": "Спинные рёбра — кости, остающиеся после отделения рибай-ростбифа, с мясом между рёбер. Готовятся низко и медленно: копчение или запекание при 120–140°C 3–4 часа с сухой обсыпкой специями, часто финишируются соусом барбекю. От коротких рёбер (short ribs) отличаются меньшим слоем мяса поверх кости — основное мясо у них между рёбрами; варить или жарить их как стейк бессмысленно."
  },
  {
    "id": "BONELESS_RIBEYE_ROAST",
    "number": 16,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BONELESS_RIBEYE_ROAST",
    "correct": [
      "Boneless_Ribeye_Roast"
    ],
    "wrong": [
      "Standing_Rib_Roast",
      "New_York_Strip_Roast",
      "Top_Blade_Roast"
    ],
    "hint": "Праздничное жаркое из самого мраморного отруба, но кости уже удалили — нарезать сможет даже новичок.",
    "comment": "Бескостный рибай-ростбиф — тот же прайм-риб, но без рёбер. Запекается целиком: корочка при высокой температуре, затем томление при 120°C до 52–55°C внутри, отдых 20 минут; благодаря мраморности прощает небольшой перегрев. От Standing Rib Roast отличается отсутствием костей (проще резать, быстрее готовится), от стриплойн-ростбифа — заметно большей жирностью и мраморностью."
  },
  {
    "id": "BONELESS_RIBEYE_STEAK",
    "number": 17,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BONELESS_RIBEYE_STEAK",
    "correct": [
      "Boneless_Ribeye_Steak"
    ],
    "wrong": [
      "Boneless_New_York_Strip_Steak",
      "Boneless_Chuck_Eye_Steak",
      "Boneless_Top_Sirloin_Steak"
    ],
    "hint": "Его название буквально описывает жировой «глаз» в центре куска; считается самым сочным из классической четвёрки стейков.",
    "comment": "Рибай без кости — эталон мраморного стейка с характерным жировым «глазком» в центре. Жарится на сильном жаре 3–4 минуты на сторону до medium rare; вытапливающийся внутренний жир сам «поливает» мясо, делая его самым сочным из классических стейков. От стейка Нью-Йорк отличается обилием внутренних жировых прослоек, от чак-ай-стейка — расположением ближе к середине туши и более равномерной нежностью."
  },
  {
    "id": "STEAKHOUSE_CUT_BONELESS_RIBEYE_STEAK",
    "number": 18,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/STEAKHOUSE_CUT_BONELESS_RIBEYE_STEAK",
    "correct": [
      "Steakhouse_Cut_Boneless_Ribeye_Steak"
    ],
    "wrong": [
      "Boneless_Ribeye_Steak",
      "Steakhouse_Cut_Boneless_New_York_Strip_Steak",
      "Bone-In_Steakhouse_Cut_Ribeye_Steak"
    ],
    "hint": "Очень толстая версия «глазастого» мраморного стейка — жарить его в лоб нельзя, нужна обратная обжарка.",
    "comment": "Толстая ресторанная нарезка бескостного рибая (4–5 см). Оптимален reverse sear: духовка при 110°C до 48–50°C внутри, затем корочка на раскалённой чугунной сковороде со сливочным маслом, тимьяном и чесноком. От обычного рибая отличается только толщиной — при прямой жарке такой кусок сгорит снаружи раньше, чем прогреется внутри."
  },
  {
    "id": "THIN-SLICED_BONELESS_RIBEYE_STEAK",
    "number": 19,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/THIN-SLICED_BONELESS_RIBEYE_STEAK",
    "correct": [
      "Thin-Sliced_Boneless_Ribeye_Steak"
    ],
    "wrong": [
      "Thin-Sliced_Boneless_New_York_Strip_Steak",
      "Boneless_Ribeye_Steak",
      "Thin-Sliced_Bone-In_Ribeye_Steak"
    ],
    "hint": "Любимая нарезка для знаменитого сэндвича из Филадельфии — мраморное мясо, тонкое, как лепесток.",
    "comment": "Тонкая нарезка бескостного рибая (0,5–1 см) — идеальна для филадельфийского чизстейка, японских блюд якинику и сукияки. Жарится секунды на очень горячей поверхности; из-за мраморности остаётся мягкой даже при полной прожарке. Отличие от обычного рибая — только толщина и способ применения: это мясо для быстрых блюд, а не для «стейка на тарелке»."
  },
  {
    "id": "BONELESS_TOP_SIRLOIN_STEAK",
    "number": 20,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BONELESS_TOP_SIRLOIN_STEAK",
    "correct": [
      "Boneless_Top_Sirloin_Steak"
    ],
    "wrong": [
      "Boneless_Ribeye_Steak",
      "Top_Round_Steak",
      "Sirloin_Tip_Steak"
    ],
    "hint": "«Народный» стейк: недорогой, постный и вкусный, но ошибок в прожарке не прощает — жира в нём почти нет.",
    "comment": "Стейк из верхней части сирлойна (кострец) — постный, ароматный и доступный по цене. Жарится на гриле 3–4 минуты на сторону строго до medium rare; из-за малого количества жира пережаривание делает его сухим, полезно предварительное маринование. От рибая отличается почти полным отсутствием мраморности, от стейков из round (задней ноги) — заметно большей мягкостью при похожей постности."
  },
  {
    "id": "THIN-SLICED_TOP_SIRLOIN_STEAK",
    "number": 21,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/THIN-SLICED_TOP_SIRLOIN_STEAK",
    "correct": [
      "Thin-Sliced_Top_Sirloin_Steak"
    ],
    "wrong": [
      "Thin-Sliced_Top_Round_Steak",
      "Boneless_Top_Sirloin_Steak",
      "Thin-Sliced_Sirloin_Tip_Steak"
    ],
    "hint": "Тонкая версия «народного» постного стейка из костреца — минута на сторону, и на стол.",
    "comment": "Тонкая нарезка топ-сирлойна (около 1 см). Жарится по минуте на сторону на сильном огне, отлично подходит для сэндвичей, тако и быстрых ужинов; из-за постности важно не передержать. От обычного топ-сирлойна отличается только толщиной, от тонкого раунд-стейка — большей мягкостью."
  },
  {
    "id": "SIRLOIN_CAP_STEAK",
    "number": 22,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/SIRLOIN_CAP_STEAK",
    "correct": [
      "Sirloin_Cap_Steak"
    ],
    "wrong": [
      "Boneless_Top_Sirloin_Steak",
      "Sirloin_Tri-Tip_Steak",
      "Flat_Iron_Steak"
    ],
    "hint": "Гордость бразильских грилей: узнать его можно по толстой жировой «шапке» с одной стороны куска.",
    "comment": "Стейк из «шапки» сирлойна — знаменитая бразильская пиканья (кулот). Классика — жарка на шампурах или гриле жировой шапкой вверх, чтобы жир пропитывал мясо; нарезается поперёк волокон после отдыха. Главное отличие от обычного топ-сирлойна — толстый слой наружного жира с одной стороны, который даёт особый вкус; в бразильских чурраскариях это коронное блюдо."
  },
  {
    "id": "SIRLOIN_FILLET",
    "number": 23,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/SIRLOIN_FILLET",
    "correct": [
      "Sirloin_Fillet"
    ],
    "wrong": [
      "Tenderloin_Steak_(Filet_Mignon)",
      "Shoulder_Tender_Medallions",
      "Mock_Tender_Steak"
    ],
    "hint": "Выглядит как знаменитый «миньон», стоит в разы дешевле, но вырезкой при этом не является.",
    "comment": "Медальон округлой формы из центра сирлойна — бюджетная альтернатива филе-миньону. Жарится на сковороде 3–4 минуты на сторону до medium rare, хорошо сочетается со сливочными соусами. От настоящего филе-миньона отличается происхождением (кострец, а не вырезка), чуть более плотной текстурой и заметно меньшей ценой; от рибая — постностью."
  },
  {
    "id": "STEAKHOUSE_CUT_SIRLOIN_FILLET",
    "number": 24,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/STEAKHOUSE_CUT_SIRLOIN_FILLET",
    "correct": [
      "Steakhouse_Cut_Sirloin_Fillet"
    ],
    "wrong": [
      "Steakhouse_Cut_Tenderloin_Steak_(Filet_Mignon)",
      "Sirloin_Fillet",
      "Shoulder_Tender"
    ],
    "hint": "Высокий «бочонок» постного мяса, притворяющийся дорогой вырезкой — ресторанная толщина требует духовки.",
    "comment": "Толстый медальон из сирлойна ресторанной нарезки (4–5 см). Готовится комбинированно: обжарка со всех сторон, включая бока, затем доведение в духовке при 150°C до 54–57°C внутри. От обычного сирлойн-филе отличается лишь толщиной; от стейкхаус-версии филе-миньона — более плотной текстурой и постным вкусом костреца."
  },
  {
    "id": "TOP_SIRLOIN_FOR_STIR_FRY",
    "number": 25,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/TOP_SIRLOIN_FOR_STIR_FRY",
    "correct": [
      "Top_Sirloin_for_Stir_Fry"
    ],
    "wrong": [
      "Sirloin_Cubes_for_Kabobs",
      "Top_Round_for_Stir_Fry",
      "Tenderloin_Tips"
    ],
    "hint": "Полоски постного мяса из костреца, созданные для раскалённого вока и азиатских блюд «на скорую руку».",
    "comment": "Топ-сирлойн, нарезанный тонкими полосками поперёк волокон специально для стир-фрая. Готовится в воке или на сковороде на максимальном огне 2–3 минуты небольшими порциями, чтобы мясо жарилось, а не тушилось; часто предварительно маринуется в соевом соусе с крахмалом (велветинг). От кубиков для кебабов отличается формой нарезки (полоски, а не кубики) и назначением — азиатская жарка вместо шампуров."
  },
  {
    "id": "SIRLOIN_CUBES_FOR_KABOBS",
    "number": 26,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/SIRLOIN_CUBES_FOR_KABOBS",
    "correct": [
      "Sirloin_Cubes_for_Kabobs"
    ],
    "wrong": [
      "Beef_for_Stew",
      "Top_Sirloin_for_Stir_Fry",
      "Tenderloin_Tips"
    ],
    "hint": "Аккуратные кубики, чья судьба — маринад, шампур и открытый огонь.",
    "comment": "Кубики топ-сирлойна размером 3–4 см для шашлыков и кебабов. Маринуются 2–8 часов, нанизываются на шампуры и жарятся на гриле 8–10 минут с поворотами до medium; кострец достаточно мягок, чтобы не требовать долгого тушения. От полосок для стир-фрая отличаются формой и способом готовки; от Beef for Stew — принципиально: кубики из костреца жарят быстро, а гуляшное мясо из лопатки тушат часами."
  },
  {
    "id": "BACON-WRAPPED_SIRLOIN_FILLET",
    "number": 27,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BACON-WRAPPED_SIRLOIN_FILLET",
    "correct": [
      "Bacon-Wrapped_Sirloin_Fillet"
    ],
    "wrong": [
      "Bacon-Wrapped_Tenderloin_Steak_(Filet_Mignon)",
      "Sirloin_Fillet",
      "Shoulder_Tender_Medallions"
    ],
    "hint": "Постный медальон, которому «одолжили» жирный свиной пояс — бюджетная версия классики со свининой снаружи.",
    "comment": "Медальон из сирлойна, обёрнутый полоской бекона и скреплённый шпажкой. Бекон компенсирует постность костреца: жарится на сковороде по 3–4 минуты на сторону плюс обжарка «бочком» для хрустящего бекона, можно довести в духовке. От беконового филе-миньона отличается тем, что внутри — кострец, а не вырезка: текстура плотнее, цена ниже."
  },
  {
    "id": "SIRLOIN_TRI-TIP_ROAST",
    "number": 28,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/SIRLOIN_TRI-TIP_ROAST",
    "correct": [
      "Sirloin_Tri-Tip_Roast"
    ],
    "wrong": [
      "Sirloin_Tip_Roast",
      "Rump_Roast",
      "Mock_Tender_Roast"
    ],
    "hint": "Треугольный кусок, прославивший одно калифорнийское барбекю; резать его нужно, следя за меняющимся направлением волокон.",
    "comment": "Треугольный ростбиф из нижней части сирлойна весом около килограмма — звезда калифорнийского барбекю Санта-Мария. Готовится на гриле на непрямом жаре или в духовке до 54–57°C внутри с финальной корочкой; обязательно нарезается поперёк волокон, причём направление волокон в треугольнике меняется. От других ростбифов отличается характерной треугольной формой и относительно быстрым приготовлением."
  },
  {
    "id": "SIRLOIN_TRI-TIP_STEAK",
    "number": 29,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/SIRLOIN_TRI-TIP_STEAK",
    "correct": [
      "Sirloin_Tri-Tip_Steak"
    ],
    "wrong": [
      "Sirloin_Tip_Steak",
      "Sirloin_Cap_Steak",
      "Boneless_Top_Sirloin_Steak"
    ],
    "hint": "Порционная нарезка «треугольника» с западного побережья США; его тёзку из задней ноги путают с ним постоянно.",
    "comment": "Стейк, нарезанный из треугольного три-типа. Жарится на гриле 3–4 минуты на сторону до medium rare, любит сухие маринады с чесноком и паприкой в стиле Санта-Мария; подаётся нарезанным поперёк волокон. От три-тип-ростбифа отличается порционной нарезкой; от сирлойн-тип-стейка (из ноги) — происхождением из нижнего сирлойна и большей сочностью, их часто путают из-за похожих названий."
  },
  {
    "id": "TENDERLOIN_ROAST_(CHATEAUBRIAND)",
    "number": 30,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/TENDERLOIN_ROAST_(CHATEAUBRIAND)",
    "correct": [
      "Tenderloin_Roast_(Chateaubriand)"
    ],
    "wrong": [
      "New_York_Strip_Roast",
      "Boneless_Ribeye_Roast",
      "Eye_Round_Roast"
    ],
    "hint": "Жаркое с французским аристократическим именем: самая нежная мышца туши, запечённая целиком для романтического ужина на двоих.",
    "comment": "Центральная часть вырезки целиком — шатобриан, самое нежное жаркое из говядины. Запекается после обжарки корочки при 200°C всего 15–25 минут до 52–54°C внутри; классическая подача — с соусом беарнез. От филе-миньона отличается тем, что это цельный кусок на двоих-четверых, а не порционный медальон; от рибай-ростбифа — почти полным отсутствием жира и максимальной нежностью."
  },
  {
    "id": "TENDERLOIN_STEAK_(FILET_MIGNON)",
    "number": 31,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/TENDERLOIN_STEAK_(FILET_MIGNON)",
    "correct": [
      "Tenderloin_Steak_(Filet_Mignon)"
    ],
    "wrong": [
      "Sirloin_Fillet",
      "Mock_Tender_Steak",
      "Shoulder_Tender_Medallions"
    ],
    "hint": "Самый дорогой и нежный из классических стейков: мышца, которая при жизни быка почти не напрягалась.",
    "comment": "Филе-миньон — медальон из вырезки, самое нежное мясо туши: мышца почти не работает при жизни животного. Жарится на сковороде 3–4 минуты на сторону до rare/medium rare, часто доводится сливочным маслом; пережаривать — преступление, жира внутри почти нет. От сирлойн-филе отличается происхождением (вырезка) и тающей текстурой «как масло», от рибая — постностью и деликатным, а не насыщенным вкусом."
  },
  {
    "id": "STEAKHOUSE_CUT_TENDERLOIN_STEAK_(FILET_MIGNON)",
    "number": 32,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/STEAKHOUSE_CUT_TENDERLOIN_STEAK_(FILET_MIGNON)",
    "correct": [
      "Steakhouse_Cut_Tenderloin_Steak_(Filet_Mignon)"
    ],
    "wrong": [
      "Steakhouse_Cut_Sirloin_Fillet",
      "Tenderloin_Steak_(Filet_Mignon)",
      "Tenderloin_Roast_(Chateaubriand)"
    ],
    "hint": "Высокий «бочонок» из самой нежной мышцы — визитная карточка дорогих ресторанов.",
    "comment": "Высокий филе-миньон ресторанной нарезки (5 см и выше). Обжаривается со всех сторон, включая бока, затем доводится в духовке при 180°C до 50–54°C; из-за высоты куску обязательно нужен отдых 8–10 минут. Отличается от обычного филе-миньона только толщиной — это тот самый «бочонок», который подают в дорогих стейкхаусах."
  },
  {
    "id": "TENDERLOIN_TIPS",
    "number": 33,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/TENDERLOIN_TIPS",
    "correct": [
      "Tenderloin_Tips"
    ],
    "wrong": [
      "Beef_for_Stew",
      "Sirloin_Cubes_for_Kabobs",
      "Round_Chunks"
    ],
    "hint": "Маленькие кусочки «королевской» мышцы: выглядят как гуляш, но тушить их — только портить.",
    "comment": "Кончики и обрезки вырезки — небольшие кусочки самого нежного мяса. Жарятся молниеносно на сильном огне 2–3 минуты, идеальны для бефстроганова, стир-фрая и стейк-боулов; тушить их не нужно — они и так мягкие. От Beef for Stew отличаются принципиально: несмотря на похожий вид кусочков, это нежная вырезка для быстрой жарки, а не жёсткое мясо для долгого тушения."
  },
  {
    "id": "BACON-WRAPPED_TENDERLOIN_STEAK_(FILET_MIGNON)",
    "number": 34,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BACON-WRAPPED_TENDERLOIN_STEAK_(FILET_MIGNON)",
    "correct": [
      "Bacon-Wrapped_Tenderloin_Steak_(Filet_Mignon)"
    ],
    "wrong": [
      "Bacon-Wrapped_Sirloin_Fillet",
      "Tenderloin_Steak_(Filet_Mignon)",
      "Sirloin_Fillet"
    ],
    "hint": "Самый нежный стейк, «одетый» в копчёный свиной пояс — постному аристократу одолжили немного жира.",
    "comment": "Филе-миньон в поясе из бекона — классика стейкхаусов. Бекон добавляет постной вырезке жир и аромат копчения: жарится по 3–4 минуты на сторону плюс прокатка на боку для хрустящего бекона, при необходимости доводится в духовке. От беконового сирлойн-филе отличается тем, что внутри настоящая вырезка — самое нежное и дорогое мясо."
  },
  {
    "id": "BOTTOM_SIRLOIN_FLAP_STEAK",
    "number": 35,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BOTTOM_SIRLOIN_FLAP_STEAK",
    "correct": [
      "Bottom_Sirloin_Flap_Steak"
    ],
    "wrong": [
      "Flank_Steak",
      "Outside_Skirt_Steak",
      "Inside_Skirt_Steak"
    ],
    "hint": "Французы зовут его «бавет»: рыхлые крупные волокна, обязательный маринад и нарезка строго поперёк — иначе не прожуёшь.",
    "comment": "Флэп-стейк (бавет) из нижней части сирлойна — рыхлый, волокнистый, с ярким говяжьим вкусом. Обязательно маринуется, жарится на сильном жаре до medium rare и нарезается тонко строго поперёк волокон — иначе будет жёстким. От фланк-стейка отличается более рыхлой, открытой структурой волокон и большей жирностью; от скёрт-стейка — большей толщиной."
  },
  {
    "id": "BOTTOM_SIRLOIN_FLAP_STEAK_ROLLS",
    "number": 36,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BOTTOM_SIRLOIN_FLAP_STEAK_ROLLS",
    "correct": [
      "Bottom_Sirloin_Flap_Steak_Rolls"
    ],
    "wrong": [
      "Bottom_Sirloin_Flap_Steak",
      "Flank_Steak",
      "Thin-Sliced_Top_Round_Steak"
    ],
    "hint": "Волокнистое мясо «бавет», свёрнутое в трубочки — внутрь так и просится начинка.",
    "comment": "Рулетики из тонко нарезанного флэп-стейка, часто с начинкой (сыр, овощи, зелень), скреплённые шпажками. Обжариваются на сковороде или гриле со всех сторон 6–8 минут; тонкое волокнистое мясо хорошо держит форму рулета и пропитывается начинкой. Отличие от обычного флэп-стейка — форма и способ подачи: это уже полуфабрикат для фаршированного блюда, а не плоский стейк."
  },
  {
    "id": "FLANK_STEAK",
    "number": 37,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/FLANK_STEAK",
    "correct": [
      "Flank_Steak"
    ],
    "wrong": [
      "Bottom_Sirloin_Flap_Steak",
      "Inside_Skirt_Steak",
      "Shoulder_London_Broil"
    ],
    "hint": "Плоский «полосатый» кусок из живота — король фахитас; его волокна видно невооружённым глазом.",
    "comment": "Плоский широкий стейк из пашины с выраженными длинными волокнами. Маринуется (соевый соус, лайм, чеснок), жарится на сильном жаре 3–4 минуты на сторону до medium rare и нарезается тонко поперёк волокон под углом; классика для фахитас и лондон-бройла. От флэп-стейка отличается более плотной и упорядоченной структурой волокон, от скёрт-стейка — большей толщиной и шириной, меньшей жирностью."
  },
  {
    "id": "INSIDE_SKIRT_STEAK",
    "number": 38,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/INSIDE_SKIRT_STEAK",
    "correct": [
      "Inside_Skirt_Steak"
    ],
    "wrong": [
      "Outside_Skirt_Steak",
      "Flank_Steak",
      "Bottom_Sirloin_Flap_Steak"
    ],
    "hint": "Длинная тонкая «лента» из-под рёбер, внутренняя из двух сестёр-диафрагм — любимица мексиканской кухни.",
    "comment": "Внутренняя диафрагма — длинный тонкий лоскут мяса с грубым волокном. Маринуется, жарится буквально по 2–3 минуты на сторону на максимальном жаре до medium rare, режется тонко поперёк волокон; передержка мгновенно делает его резиновым. От наружного скёрта отличается большей шириной, меньшей толщиной и чуть более жёсткой текстурой; от фланка — ещё более выраженным волокном и интенсивным вкусом."
  },
  {
    "id": "OUTSIDE_SKIRT_STEAK",
    "number": 39,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/OUTSIDE_SKIRT_STEAK",
    "correct": [
      "Outside_Skirt_Steak"
    ],
    "wrong": [
      "Inside_Skirt_Steak",
      "Flank_Steak",
      "Bottom_Sirloin_Flap_Steak"
    ],
    "hint": "Наружная из двух «юбок» — толще, нежнее и дороже своей внутренней сестры; шефы охотятся именно за ней.",
    "comment": "Наружная диафрагма — более толстая, узкая и нежная из двух «юбок», считается лучшей; именно её традиционно берут для фахитас. Жарится на очень сильном жаре 2–3 минуты на сторону до medium rare, нарезается поперёк волокон; маринад желателен, но не обязателен. От внутреннего скёрта отличается большей толщиной, нежностью и сочностью, а также более высокой ценой."
  },
  {
    "id": "BONELESS_CHUCK_ROAST",
    "number": 40,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BONELESS_CHUCK_ROAST",
    "correct": [
      "Boneless_Chuck_Roast"
    ],
    "wrong": [
      "Boneless_Ribeye_Roast",
      "Bottom_Round_Roast",
      "Rump_Roast"
    ],
    "hint": "Классика воскресного семейного ужина в США: несколько часов в жидкости — и мясо разбирается вилкой.",
    "comment": "Бескостное жаркое из лопаточно-шейной части (чак) — главный отруб для американского пот-роуста. Готовится только медленно: тушение в жидкости 3–4 часа при 150°C или в мультиварке 8 часов, пока коллаген не превратится в желатин и мясо не начнёт распадаться на волокна. От рибай-ростбифа отличается принципиально: запекать его до medium rare нельзя — будет жёстким, ему нужно именно долгое тушение."
  },
  {
    "id": "BONELESS_CHUCK_STEAK",
    "number": 41,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BONELESS_CHUCK_STEAK",
    "correct": [
      "Boneless_Chuck_Steak"
    ],
    "wrong": [
      "Boneless_Chuck_Eye_Steak",
      "Shoulder_Steak",
      "Boneless_Top_Sirloin_Steak"
    ],
    "hint": "Порционный кусок из «рабочей» передней части туши: вкус богатый, цена низкая, но жилы требуют уважения.",
    "comment": "Стейк из лопаточной части — бюджетный кусок с хорошей мраморностью, но множеством соединительной ткани. Лучше всего тушить или брейзить; для жарки требует маринада и прожарки не выше medium rare. От чак-ай-стейка отличается менее удачным расположением: чак-ай — это «продолжение» рибая, а обычный чак-стейк более жилистый; от чак-роуста — порционной нарезкой."
  },
  {
    "id": "BONELESS_CHUCK_EYE_STEAK",
    "number": 42,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BONELESS_CHUCK_EYE_STEAK",
    "correct": [
      "Boneless_Chuck_Eye_Steak"
    ],
    "wrong": [
      "Boneless_Ribeye_Steak",
      "Boneless_Chuck_Steak",
      "Mock_Tender_Steak"
    ],
    "hint": "Его называют стейком «бедняка», намекая на знаменитого мраморного соседа: та же мышца, соседнее ребро, вдвое меньшая цена.",
    "comment": "Чак-ай — «рибай бедняка»: продолжение той же мышцы longissimus dorsi, что и рибай, но из лопаточной части (5-я рёберная позиция вместо 6–12). Жарится как рибай: сильный жар, 3–4 минуты на сторону, до medium rare. От настоящего рибая отличается чуть большей жёсткостью и ценой в полтора-два раза ниже; от обычного чак-стейка — заметно большей нежностью, из одной лопатки таких стейков получается всего пара штук."
  },
  {
    "id": "THIN-SLICED_BONELESS_CHUCK_STEAK",
    "number": 43,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/THIN-SLICED_BONELESS_CHUCK_STEAK",
    "correct": [
      "Thin-Sliced_Boneless_Chuck_Steak"
    ],
    "wrong": [
      "Boneless_Chuck_Steak",
      "Thin-Sliced_Shoulder_Steak",
      "Thin-Sliced_Bottom_Round_Steak"
    ],
    "hint": "Жилистый «работяга» из передка, нарезанный тонко — так его жёсткость почти незаметна; корейцы делают из такого бульгоги.",
    "comment": "Тонкая нарезка чак-стейка (около 1 см). После маринования жарится 1–2 минуты на сторону на сильном огне; также хороша для корейского бульгоги и филиппинского бистека. От обычного чак-стейка отличается толщиной: тонкий срез частично решает проблему жёсткости, так как жилы легче прожёвываются в тонком куске."
  },
  {
    "id": "CHUCK_SHORT_RIBS",
    "number": 44,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/CHUCK_SHORT_RIBS",
    "correct": [
      "Chuck_Short_Ribs"
    ],
    "wrong": [
      "Beef_Back_Ribs",
      "Flanken_Style_Ribs",
      "Fresh_Beef_Oxtails"
    ],
    "hint": "Короткие кости, на которых лежит толстая «подушка» мраморного мяса — после долгого тушения она тает, как тушёнка мечты.",
    "comment": "Короткие рёбра из лопаточной части — толстый слой мраморного мяса поверх коротких кусков кости. Готовятся низко и медленно: брейзинг в вине или бульоне 3 часа, копчение 6–8 часов или су-вид 48 часов; результат — тающее желатинистое мясо. От спинных рёбер (back ribs) отличаются тем, что мясо лежит толстым слоем НА кости, а не между костями; от фланкен-рёбер — нарезкой вдоль кости, а не поперёк."
  },
  {
    "id": "BONELESS_CHUCK_SHORT_RIBS",
    "number": 45,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BONELESS_CHUCK_SHORT_RIBS",
    "correct": [
      "Boneless_Chuck_Short_Ribs"
    ],
    "wrong": [
      "Chuck_Short_Ribs",
      "Boneless_Flanken_Style_Ribs",
      "Boneless_Chuck_Roast"
    ],
    "hint": "Вся мраморная роскошь коротких рёбер, но грызть и обгладывать уже нечего — кость забрали.",
    "comment": "Мясо коротких рёбер без кости — те же мраморные жирные пласты, но уже отделённые от костей. Тушатся 2,5–3 часа, коптятся или готовятся су-вид; также популярны в корейской кухне для жарки после тонкой нарезки. От рёбер на кости отличаются только отсутствием кости — готовятся чуть быстрее и удобнее в подаче, но теряют часть «костного» вкуса."
  },
  {
    "id": "FLANKEN_STYLE_RIBS",
    "number": 46,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/FLANKEN_STYLE_RIBS",
    "correct": [
      "Flanken_Style_Ribs"
    ],
    "wrong": [
      "Chuck_Short_Ribs",
      "Beef_Back_Ribs",
      "Fresh_Beef_Neckbones"
    ],
    "hint": "Рёбра, распиленные «неправильно» — поперёк костей: корейцы маринуют такие полосы с грушей и бросают на гриль.",
    "comment": "Рёбра фланкен — короткие рёбра, распиленные ПОПЕРЁК костей тонкими полосами: в каждой полосе несколько овальных срезов кости. Это классика корейского гальби: маринад из соевого соуса, груши и кунжута, затем быстрая жарка на гриле 2–3 минуты на сторону. Главное отличие от обычных коротких рёбер — направление распила: поперёк, а не вдоль кости, что позволяет жарить их быстро вместо многочасового тушения."
  },
  {
    "id": "BONELESS_FLANKEN_STYLE_RIBS",
    "number": 47,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BONELESS_FLANKEN_STYLE_RIBS",
    "correct": [
      "Boneless_Flanken_Style_Ribs"
    ],
    "wrong": [
      "Flanken_Style_Ribs",
      "Boneless_Chuck_Short_Ribs",
      "Thin-Sliced_Boneless_Chuck_Steak"
    ],
    "hint": "Длинные тонкие мраморные ленты для гриля по-корейски, из которых уже убрали все овальные косточки.",
    "comment": "Фланкен-нарезка без костей — тонкие длинные полосы мяса коротких рёбер. Маринуются и жарятся на сильном жаре 2–3 минуты на сторону; удобны тем, что едятся без возни с косточками. От фланкена на кости отличаются только отсутствием овальных срезов кости; от тонкого чак-стейка — большей мраморностью и характерной длинной формой полос."
  },
  {
    "id": "MOCK_TENDER_ROAST",
    "number": 48,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/MOCK_TENDER_ROAST",
    "correct": [
      "Mock_Tender_Roast"
    ],
    "wrong": [
      "Tenderloin_Roast_(Chateaubriand)",
      "Eye_Round_Roast",
      "Boneless_Chuck_Roast"
    ],
    "hint": "Великий самозванец: формой притворяется самым нежным жарким туши, но без долгого тушения его не прожевать.",
    "comment": "«Ложная вырезка» — мышца лопатки, по форме напоминающая настоящую вырезку, но по текстуре совсем другая: много соединительной ткани. Готовится только медленным тушением 2,5–3 часа в жидкости или в мультиварке; запекать до medium rare, как шатобриан, нельзя — будет жёстким. Главное отличие от настоящей вырезки — обманчивость: похожая коническая форма при жёсткой «рабочей» текстуре, отсюда и слово «mock» (ложный) в названии."
  },
  {
    "id": "MOCK_TENDER_STEAK",
    "number": 49,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/MOCK_TENDER_STEAK",
    "correct": [
      "Mock_Tender_Steak"
    ],
    "wrong": [
      "Tenderloin_Steak_(Filet_Mignon)",
      "Boneless_Chuck_Eye_Steak",
      "Sirloin_Fillet"
    ],
    "hint": "Стейк-обманщик: кругленький, как дорогой медальон, но слово в его английском названии честно предупреждает о подделке.",
    "comment": "Стейк из «ложной вырезки» лопатки. Несмотря на нежное название, требует либо тушения, либо механического размягчения и маринада с последующей быстрой жаркой не выше medium rare; в чистом виде на гриле разочарует. Отличие от филе-миньона — в самой сути: похожая округлая форма, но жёсткая текстура работающей мышцы; от чак-ай-стейка — заметно меньшей нежностью."
  },
  {
    "id": "THIN-SLICED_MOCK_TENDER_STEAK",
    "number": 50,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/THIN-SLICED_MOCK_TENDER_STEAK",
    "correct": [
      "Thin-Sliced_Mock_Tender_Steak"
    ],
    "wrong": [
      "Mock_Tender_Steak",
      "Thin-Sliced_Boneless_Chuck_Steak",
      "Thin-Sliced_Shoulder_Steak"
    ],
    "hint": "Тонкие овальные ломтики мышцы-самозванки: в таком виде её жёсткий характер почти не чувствуется.",
    "comment": "Тонкая нарезка «ложной вырезки» (около 1 см). Тонкий срез частично компенсирует жёсткость: после маринада жарится 1–2 минуты на сторону или используется для быстрого тушения и сэндвичей. От обычного mock tender отличается толщиной, от других тонких лопаточных нарезок — характерной овальной формой срезов конической мышцы."
  },
  {
    "id": "SHOULDER_ROAST",
    "number": 51,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/SHOULDER_ROAST",
    "correct": [
      "Shoulder_Roast"
    ],
    "wrong": [
      "Boneless_Chuck_Roast",
      "Bottom_Round_Roast",
      "Top_Blade_Roast"
    ],
    "hint": "Жаркое из той части, которой бык «машет» всю жизнь — постное, требует либо часов в жидкости, либо очень тонкой нарезки.",
    "comment": "Жаркое из плечевой части лопатки — постнее классического чак-роуста. Лучше всего тушится 2,5–3 часа в жидкости; более постные экземпляры можно медленно запекать до medium с последующей тонкой нарезкой. От чак-роуста отличается меньшей жирностью и чуть меньшей «разваливаемостью» после тушения; от раунд-роустов из задней ноги — расположением в передней части туши."
  },
  {
    "id": "SHOULDER_STEAK",
    "number": 52,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/SHOULDER_STEAK",
    "correct": [
      "Shoulder_Steak"
    ],
    "wrong": [
      "Top_Blade_Steak",
      "Boneless_Chuck_Steak",
      "Top_Round_Steak"
    ],
    "hint": "Постный «трудяга» из плеча: маринад, сильный огонь, нарезка поперёк волокон — только так он раскрывается.",
    "comment": "Стейк из плечевой мышцы — постный и плотный. Требует маринада минимум 4 часа, затем быстрая жарка на сильном жаре до medium rare и нарезка тонко поперёк волокон; без маринада и правильной нарезки будет жёстким. От топ-блейд-стейка отличается отсутствием центральной жилы, от чак-стейка — меньшей жирностью."
  },
  {
    "id": "THIN-SLICED_SHOULDER_STEAK",
    "number": 53,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/THIN-SLICED_SHOULDER_STEAK",
    "correct": [
      "Thin-Sliced_Shoulder_Steak"
    ],
    "wrong": [
      "Shoulder_Steak",
      "Thin-Sliced_Boneless_Chuck_Steak",
      "Thin-Sliced_Top_Round_Steak"
    ],
    "hint": "Плечевой «трудяга», нарезанный тонко — минус жёсткость, плюс скорость.",
    "comment": "Тонкая нарезка плечевого стейка (до 1 см). После короткого маринада жарится по минуте на сторону; хороша для сэндвичей, тако и азиатских блюд. От обычного плечевого стейка отличается только толщиной — тонкий срез делает постное плотное мясо ощутимо мягче на укус."
  },
  {
    "id": "SHOULDER_TENDER",
    "number": 54,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/SHOULDER_TENDER",
    "correct": [
      "Shoulder_Tender"
    ],
    "wrong": [
      "Tenderloin_Roast_(Chateaubriand)",
      "Mock_Tender_Roast",
      "Flat_Iron_Steak"
    ],
    "hint": "Маленький секрет мясников: крошечная мышца из лопатки, уступающая в нежности только «королеве» стейков, но не в цене.",
    "comment": "Терес-мейджор (petite tender) — маленькая мышца лопатки, вторая по нежности во всей туше после вырезки. Целиком обжаривается со всех сторон и доводится в духовке до 52–55°C, отдых 8–10 минут, нарезка медальонами. От настоящей вырезки отличается размером (весит всего 250–400 г) и ценой в разы ниже при почти той же нежности — секретный любимец мясников."
  },
  {
    "id": "SHOULDER_TENDER_MEDALLIONS",
    "number": 55,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/SHOULDER_TENDER_MEDALLIONS",
    "correct": [
      "Shoulder_Tender_Medallions"
    ],
    "wrong": [
      "Tenderloin_Steak_(Filet_Mignon)",
      "Sirloin_Fillet",
      "Mock_Tender_Steak"
    ],
    "hint": "Мини-«миньоны» из лопатки: гости не отличат от дорогой классики, а кошелёк скажет спасибо.",
    "comment": "Медальоны, нарезанные из терес-мейджора — маленькие круглые кусочки, внешне почти неотличимые от филе-миньона. Жарятся на сковороде по 2–3 минуты на сторону до medium rare, отлично дружат со сливочными и винными соусами. От филе-миньона отличаются меньшим диаметром и ценой; от медальонов из mock tender — настоящей, а не «ложной» нежностью."
  },
  {
    "id": "TOP_BLADE_ROAST",
    "number": 56,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/TOP_BLADE_ROAST",
    "correct": [
      "Top_Blade_Roast"
    ],
    "wrong": [
      "Boneless_Chuck_Roast",
      "Shoulder_Roast",
      "Mock_Tender_Roast"
    ],
    "hint": "Мраморное лопаточное жаркое с «дефектом» — жёсткой жилой посередине, которая после долгого тушения превращается в желе.",
    "comment": "Жаркое из верхней лопаточной мышцы (топ-блейд) — мраморное мясо с плотной жилой, проходящей по центру. Тушится 2,5–3 часа: за это время центральная соединительная ткань размягчается и превращается в желатин. От флэт-айрона отличается тем, что жила ещё на месте (флэт-айрон — это тот же отруб, но с удалённой жилой); от чак-роуста — большей мраморностью и характерной плоской формой."
  },
  {
    "id": "TOP_BLADE_STEAK",
    "number": 57,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/TOP_BLADE_STEAK",
    "correct": [
      "Top_Blade_Steak"
    ],
    "wrong": [
      "Flat_Iron_Steak",
      "Shoulder_Steak",
      "Boneless_Chuck_Eye_Steak"
    ],
    "hint": "Мраморный лопаточный стейк с «линией разлома» посередине; его знаменитый брат — это он же, только без жилы.",
    "comment": "Стейк из верхней лопаточной мышцы с центральной жилой, делящей кусок пополам. Жарится на сильном жаре до medium rare; жилу либо обрезают при еде, либо стейк предварительно тушат. Главное отличие от флэт-айрона: это та же мышца, но нарезанная ПОПЕРЁК жилы (жила внутри куска), тогда как флэт-айрон нарезают вдоль, полностью удаляя жилу."
  },
  {
    "id": "THIN-SLICED_TOP_BLADE_STEAK",
    "number": 58,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/THIN-SLICED_TOP_BLADE_STEAK",
    "correct": [
      "Thin-Sliced_Top_Blade_Steak"
    ],
    "wrong": [
      "Top_Blade_Steak",
      "Flat_Iron_Steak",
      "Thin-Sliced_Shoulder_Steak"
    ],
    "hint": "Тонкие мраморные ломтики с едва заметной «ниточкой» посередине — в таком виде жила уже не помеха.",
    "comment": "Тонкая нарезка топ-блейда (до 1 см) с тонкой полоской жилы в каждом ломтике. Жарится 1–2 минуты на сторону; в тонком срезе жила почти не мешает, а мраморность даёт сочность. От обычного топ-блейд-стейка отличается толщиной, от тонкого флэт-айрона — наличием центральной жилки."
  },
  {
    "id": "FLAT_IRON_STEAK",
    "number": 59,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/FLAT_IRON_STEAK",
    "correct": [
      "Flat_Iron_Steak"
    ],
    "wrong": [
      "Top_Blade_Steak",
      "Flank_Steak",
      "Shoulder_Steak"
    ],
    "hint": "Назван в честь старинного утюга: плоский, мраморный, второй по нежности в туше — а всего лишь лопатка, из которой убрали одну жилу.",
    "comment": "Флэт-айрон — топ-блейд, из которого мясники полностью удалили центральную жилу, разрезав мышцу вдоль на два плоских стейка. Второй по нежности стейк туши после вырезки при отличной мраморности: жарится на сильном жаре 3–4 минуты на сторону до medium rare, маринад не обязателен. От топ-блейд-стейка отличается отсутствием жилы и направлением нарезки (вдоль, а не поперёк мышцы); форма напоминает старинный утюг — отсюда название."
  },
  {
    "id": "SHOULDER_LONDON_BROIL",
    "number": 60,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/SHOULDER_LONDON_BROIL",
    "correct": [
      "Shoulder_London_Broil"
    ],
    "wrong": [
      "Top_Round_London_Broil",
      "Flank_Steak",
      "Shoulder_Roast"
    ],
    "hint": "Кусок для блюда, названного в честь британской столицы, хотя там его никто не готовит; этот вариант — из передней части туши.",
    "comment": "Толстый плоский кусок из лопатки для блюда «лондон-бройл»: длительное маринование (6–24 часа), жарка на сильном жаре или под грилем до medium rare и обязательная тонкая нарезка поперёк волокон под углом. Важно: London Broil — это метод приготовления, а не отруб. От топ-раунд-версии отличается происхождением из лопатки — чуть больше жира и соединительной ткани."
  },
  {
    "id": "FLAT_CUT_BRISKET",
    "number": 61,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/FLAT_CUT_BRISKET",
    "correct": [
      "Flat_Cut_Brisket"
    ],
    "wrong": [
      "Flank_Steak",
      "Boneless_Chuck_Roast",
      "Shoulder_London_Broil"
    ],
    "hint": "Постная плоская половина отруба, ради которого техасцы топят коптильни по 12 часов; из неё же делают пастрами.",
    "comment": "Плоская часть грудинки (флэт) — постная половина брискета с ровным слоем жира сверху. Готовится только низко и медленно: копчение 10–12 часов при 110–120°C до 92–96°C внутри, брейзинг в духовке 3–4 часа, а также классика для пастрами и солонины. От жирной части грудинки (поинт) отличается постностью и ровной формой, удобной для нарезки ломтями; жарить её как стейк нельзя категорически."
  },
  {
    "id": "BEEF_FOR_STEW",
    "number": 62,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BEEF_FOR_STEW",
    "correct": [
      "Beef_for_Stew"
    ],
    "wrong": [
      "Sirloin_Cubes_for_Kabobs",
      "Tenderloin_Tips",
      "Round_Chunks"
    ],
    "hint": "Кубики, чьё призвание — кастрюля и долгие часы: на шампуре они мстят жёсткостью, а в гуляше становятся бархатом.",
    "comment": "Гуляшное мясо — кубики из жёстких рабочих отрубов (обычно лопатка или нога) с большим количеством коллагена. Готовится только долгим тушением: обжарка кубиков до корочки, затем 2–3 часа томления в бульоне или вине, пока коллаген не превратится в желатин. От кубиков для кебабов отличается принципиально: жарить его быстро нельзя — будет резиновым, его сила раскрывается только в супах, гуляшах и рагу."
  },
  {
    "id": "TOP_ROUND_LONDON_BROIL",
    "number": 63,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/TOP_ROUND_LONDON_BROIL",
    "correct": [
      "Top_Round_London_Broil"
    ],
    "wrong": [
      "Shoulder_London_Broil",
      "Flank_Steak",
      "Top_Round_Roast"
    ],
    "hint": "Толстый постный пласт из задней ноги для «британского» блюда, которое придумали американцы: сутки в маринаде, потом под раскалённый гриль.",
    "comment": "Толстый плоский пласт из верхней части задней ноги для метода «лондон-бройл». Маринуется 6–24 часа (кислота в маринаде размягчает плотные волокна), жарится под грилем или на углях до строго medium rare и нарезается тонко поперёк волокон. От лопаточной версии лондон-бройла отличается происхождением из ноги: мясо постнее и плотнее; от топ-раунд-роуста — плоской формой пласта под жарку, а не запекание."
  },
  {
    "id": "TOP_ROUND_ROAST",
    "number": 64,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/TOP_ROUND_ROAST",
    "correct": [
      "Top_Round_Roast"
    ],
    "wrong": [
      "Bottom_Round_Roast",
      "Eye_Round_Roast",
      "Sirloin_Tip_Roast"
    ],
    "hint": "Именно из него делают то самое тонко нарезанное розовое мясо для деликатесных сэндвичей — постный ростбиф из ноги.",
    "comment": "Ростбиф из верхней части задней ноги — самый нежный из «ножных» роустов, классика для ростбифа деликатесных лавок. Запекается медленно при 120–135°C до 52–55°C внутри (строго не выше medium rare) и нарезается максимально тонко — именно так делают мясо для сэндвичей. От нижнего раунд-роуста отличается большей нежностью, от лондон-бройла из той же части — назначением: духовка вместо гриля."
  },
  {
    "id": "TOP_ROUND_STEAK",
    "number": 65,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/TOP_ROUND_STEAK",
    "correct": [
      "Top_Round_Steak"
    ],
    "wrong": [
      "Boneless_Top_Sirloin_Steak",
      "Bottom_Round_Steak",
      "Shoulder_Steak"
    ],
    "hint": "Постный и упрямый стейк из самой «ходовой» части туши — без маринада и правильной нарезки поперёк волокон с ним не подружиться.",
    "comment": "Стейк из верхней части задней ноги — очень постный и плотный. Требует маринада и жарки не выше medium rare с тонкой нарезкой поперёк волокон; чаще используется для швейцарского стейка (тушение) или отбивных. От топ-сирлойн-стейка отличается большей жёсткостью и сухостью (нога работает больше костреца), от нижнего раунд-стейка — всё же чуть большей нежностью."
  },
  {
    "id": "THIN-SLICED_TOP_ROUND_STEAK",
    "number": 66,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/THIN-SLICED_TOP_ROUND_STEAK",
    "correct": [
      "Thin-Sliced_Top_Round_Steak"
    ],
    "wrong": [
      "Top_Round_Steak",
      "Thin-Sliced_Bottom_Round_Steak",
      "Thin-Sliced_Top_Sirloin_Steak"
    ],
    "hint": "Тонкие постные листы из ноги — немцы заворачивают в такие огурчик с горчицей и тушат рулетики.",
    "comment": "Тонкая нарезка топ-раунда (0,5–1 см). Жарится молниеносно — по минуте на сторону после маринада; популярна для сэндвичей, ростбифных рулетиков и немецких руладенов (мясных рулетов с начинкой). Тонкий срез — главный способ «победить» плотность этого постного мяса; от толстого варианта отличается только этим."
  },
  {
    "id": "TOP_ROUND_FOR_STIR_FRY",
    "number": 67,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/TOP_ROUND_FOR_STIR_FRY",
    "correct": [
      "Top_Round_for_Stir_Fry"
    ],
    "wrong": [
      "Top_Sirloin_for_Stir_Fry",
      "Beef_for_Stew",
      "Thin-Sliced_Top_Round_Steak"
    ],
    "hint": "Бюджетные полоски из ноги для вока: без «бархатного» крахмального маринада по-китайски их лучше даже не начинать жарить.",
    "comment": "Полоски топ-раунда для стир-фрая. Обязателен велветинг (маринад с крахмалом и соевым соусом), затем жарка в воке 2–3 минуты на максимальном огне порциями. От сирлойн-версии для стир-фрая отличается большей плотностью и меньшей ценой — именно поэтому предварительный крахмальный маринад тут не рекомендация, а необходимость."
  },
  {
    "id": "BOTTOM_ROUND_ROAST",
    "number": 68,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BOTTOM_ROUND_ROAST",
    "correct": [
      "Bottom_Round_Roast"
    ],
    "wrong": [
      "Top_Round_Roast",
      "Rump_Roast",
      "Eye_Round_Roast"
    ],
    "hint": "Жёсткий постный кусок из внешней стороны ноги — немцы неделю вымачивают его в уксусе ради своего знаменитого кисло-сладкого жаркого.",
    "comment": "Ростбиф из нижней (внешней) части задней ноги — плотный, постный, с грубым волокном. Два пути: медленное запекание до medium rare с бритвенно-тонкой нарезкой либо тушение 3 часа; также классическая основа для немецкого зауэрбратена (маринование в уксусе несколько дней). От топ-раунда отличается большей жёсткостью, от рамп-роуста — соседним расположением, их часто продают под общим именем."
  },
  {
    "id": "RUMP_ROAST",
    "number": 69,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/RUMP_ROAST",
    "correct": [
      "Rump_Roast"
    ],
    "wrong": [
      "Bottom_Round_Roast",
      "Top_Round_Roast",
      "Sirloin_Tip_Roast"
    ],
    "hint": "Жаркое с «пятой точки» туши — в русской кухне эту часть зовут огузком и любят за навар в тушёных блюдах.",
    "comment": "Огузок — жаркое со стыка задней ноги и крестца, чуть более вкусное и сочное, чем остальной bottom round. Лучше всего тушится 2,5–3 часа в жидкости до состояния «разбирается вилкой»; постные экземпляры можно медленно запечь до medium rare с тонкой нарезкой. От bottom round roast отличается расположением ближе к крестцу и чуть более насыщенным вкусом; в магазинах их часто путают."
  },
  {
    "id": "BOTTOM_ROUND_STEAK",
    "number": 70,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BOTTOM_ROUND_STEAK",
    "correct": [
      "Bottom_Round_Steak"
    ],
    "wrong": [
      "Top_Round_Steak",
      "Beef_Cubed_Steak",
      "Eye_Round_Steak"
    ],
    "hint": "Самый суровый из «ножных» стейков: молоток для отбивания и час в томатном соусе — его лучшие друзья.",
    "comment": "Стейк из нижней части ноги — один из самых жёстких «стейков» туши. В чистом виде на гриль не годится: либо отбивается и маринуется с последующей быстрой жаркой, либо тушится как швейцарский стейк в томатном соусе 1,5 часа. От топ-раунд-стейка отличается ещё большей плотностью, от кубед-стейка — тем, что его ещё не прогнали через тендерайзер."
  },
  {
    "id": "THIN-SLICED_BOTTOM_ROUND_STEAK",
    "number": 71,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/THIN-SLICED_BOTTOM_ROUND_STEAK",
    "correct": [
      "Thin-Sliced_Bottom_Round_Steak"
    ],
    "wrong": [
      "Bottom_Round_Steak",
      "Thin-Sliced_Top_Round_Steak",
      "Thin-Sliced_Eye_Round_Steak"
    ],
    "hint": "Жёсткий боец из ноги, нарезанный почти прозрачно — в горячем бульоне такие ломтики готовятся за секунды.",
    "comment": "Тонкая нарезка нижнего раунда (около 0,5 см). Тонкость — единственное спасение этого жёсткого мяса при быстрой готовке: маринад и минута на сторону, либо использование в чизстейках и азиатских супах (шабу-шабу стиль). От толстого bottom round отличается только нарезкой, которая делает волокна короткими и жевабельными."
  },
  {
    "id": "EYE_ROUND_ROAST",
    "number": 72,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/EYE_ROUND_ROAST",
    "correct": [
      "Eye_Round_Roast"
    ],
    "wrong": [
      "Tenderloin_Roast_(Chateaubriand)",
      "Bottom_Round_Roast",
      "Mock_Tender_Roast"
    ],
    "hint": "Идеальный цилиндр, притворяющийся вырезкой: красив на витрине, но нежности в нём — как в подошве, если не знать секретный трюк с выключенной духовкой.",
    "comment": "Глазной мускул ноги — идеально цилиндрический постный ростбиф, внешне похожий на вырезку, но по текстуре её полная противоположность. Классический метод: духовка 260°C 20–25 минут, затем выключить и не открывать 2,5 часа — мясо доходит на остаточном тепле до medium rare; нарезка бумажно-тонкая. От шатобриана отличается кардинально: та же красивая цилиндрическая форма, но одна из самых жёстких мышц туши; от других раунд-роустов — правильной округлой формой."
  },
  {
    "id": "EYE_ROUND_STEAK",
    "number": 73,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/EYE_ROUND_STEAK",
    "correct": [
      "Eye_Round_Steak"
    ],
    "wrong": [
      "Tenderloin_Steak_(Filet_Mignon)",
      "Bottom_Round_Steak",
      "Mock_Tender_Steak"
    ],
    "hint": "Ровные кругляши из ноги, косящие под дорогие медальоны — но их «глаз» не имеет ничего общего с мраморным тёзкой из передней части.",
    "comment": "Аккуратные круглые стейки из глазного мускула ноги — постные, плотные, с минимумом вкуса жира. Требуют отбивания или маринада и жарки строго до medium rare тонкими кусками; чаще идут на тушение, бефстроганов или отбивные. От филе-миньона отличаются обманчиво: похожая круглая форма при в разы более жёсткой текстуре; от других раунд-стейков — ровной круглой формой срезов."
  },
  {
    "id": "THIN-SLICED_EYE_ROUND_STEAK",
    "number": 74,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/THIN-SLICED_EYE_ROUND_STEAK",
    "correct": [
      "Thin-Sliced_Eye_Round_Steak"
    ],
    "wrong": [
      "Eye_Round_Steak",
      "Thin-Sliced_Bottom_Round_Steak",
      "Thin-Sliced_Top_Round_Steak"
    ],
    "hint": "Тонкие постные кругляши: латиноамериканцы панируют такие и жарят до хруста — получается миланеза.",
    "comment": "Тонкая нарезка глазного мускула (около 0,5 см) — ровные тонкие кругляши. После маринада жарится по 30–60 секунд на сторону; отлично подходит для миланезы (панировка и фритюр), сэндвичей и вяленого мяса джерки. Тонкий срез — главный способ сделать эту жёсткую постную мышцу съедобной при быстрой готовке."
  },
  {
    "id": "SIRLOIN_TIP_ROAST",
    "number": 75,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/SIRLOIN_TIP_ROAST",
    "correct": [
      "Sirloin_Tip_Roast"
    ],
    "wrong": [
      "Sirloin_Tri-Tip_Roast",
      "Top_Round_Roast",
      "Rump_Roast"
    ],
    "hint": "Его название нагло врёт: слово «сирлойн» в нём есть, а сам он — из ноги; постное жаркое для тонкой нарезки.",
    "comment": "Ростбиф из «кончика сирлойна» — несмотря на название, это часть ноги (knuckle), а не сирлойна. Постный и умеренно жёсткий: медленно запекается при 120–135°C до 52–55°C с тонкой нарезкой либо тушится. От настоящих сирлойн-отрубов отличается происхождением из ноги и меньшей нежностью — название исторически вводит покупателей в заблуждение; от три-тип-роуста — формой и текстурой."
  },
  {
    "id": "SIRLOIN_TIP_SIDE_STEAK",
    "number": 76,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/SIRLOIN_TIP_SIDE_STEAK",
    "correct": [
      "Sirloin_Tip_Side_Steak"
    ],
    "wrong": [
      "Sirloin_Tip_Steak",
      "Sirloin_Tri-Tip_Steak",
      "Boneless_Top_Sirloin_Steak"
    ],
    "hint": "Боковой срез мышцы-обманщицы из ноги, которая лишь называется в честь костреца.",
    "comment": "Стейк из боковой мышцы «кончика сирлойна» (ноги) — постный, с заметным волокном. Маринуется и жарится быстро до medium rare с нарезкой поперёк волокон, либо тушится. От обычного sirloin tip steak отличается тем, что вырезан из боковой части мускула — волокна грубее; от три-тип-стейка — принадлежностью к ноге, а не нижнему сирлойну."
  },
  {
    "id": "SIRLOIN_TIP_STEAK",
    "number": 77,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/SIRLOIN_TIP_STEAK",
    "correct": [
      "Sirloin_Tip_Steak"
    ],
    "wrong": [
      "Sirloin_Tri-Tip_Steak",
      "Boneless_Top_Sirloin_Steak",
      "Sirloin_Tip_Side_Steak"
    ],
    "hint": "Бюджетный постный стейк с обманчивым именем: к настоящему кострецу отношения не имеет, а с «треугольным» тёзкой их путают даже продавцы.",
    "comment": "Стейк из центральной части «кончика сирлойна» — постный бюджетный кусок из ноги. После маринада жарится на сильном жаре до medium rare и нарезается поперёк волокон; также хорош для стир-фрая и кебабов. От топ-сирлойн-стейка отличается происхождением (нога, а не кострец) и большей плотностью; от три-тип-стейка, с которым его вечно путают из-за названий, — постностью и меньшей сочностью."
  },
  {
    "id": "THIN-SLICED_SIRLOIN_TIP_SIDE_STEAK",
    "number": 78,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/THIN-SLICED_SIRLOIN_TIP_SIDE_STEAK",
    "correct": [
      "Thin-Sliced_Sirloin_Tip_Side_Steak"
    ],
    "wrong": [
      "Thin-Sliced_Sirloin_Tip_Steak",
      "Sirloin_Tip_Side_Steak",
      "Thin-Sliced_Top_Round_Steak"
    ],
    "hint": "Тонкие ломтики бокового среза «ложного сирлойна» из ноги — быстрая жарка и сразу на стол.",
    "comment": "Тонкая нарезка боковой мышцы кончика сирлойна (около 0,5–1 см). Жарится после маринада по минуте на сторону; подходит для сэндвичей, фахитас и быстрых обжарок. Отличие от толстой версии — только нарезка, укорачивающая грубые волокна боковой мышцы."
  },
  {
    "id": "THIN-SLICED_SIRLOIN_TIP_STEAK",
    "number": 79,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/THIN-SLICED_SIRLOIN_TIP_STEAK",
    "correct": [
      "Thin-Sliced_Sirloin_Tip_Steak"
    ],
    "wrong": [
      "Thin-Sliced_Sirloin_Tip_Side_Steak",
      "Thin-Sliced_Top_Sirloin_Steak",
      "Sirloin_Tip_Steak"
    ],
    "hint": "Тонкие постные ломтики мышцы, которая «прикидывается» кострецом — дешёвая рабочая лошадка для сэндвичей.",
    "comment": "Тонкая нарезка центральной части кончика сирлойна. Жарится молниеносно после маринада, популярна для чизстейков, тако и азиатской кухни; тонкий срез компенсирует постность и плотность мяса из ноги. От толстой версии отличается только нарезкой, от тонкого топ-сирлойна — происхождением из ноги и меньшей мягкостью."
  },
  {
    "id": "ROUND_CHUNKS",
    "number": 80,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/ROUND_CHUNKS",
    "correct": [
      "Round_Chunks"
    ],
    "wrong": [
      "Beef_for_Stew",
      "Sirloin_Cubes_for_Kabobs",
      "Tenderloin_Tips"
    ],
    "hint": "Постные куски из ноги для кастрюли: суховаты сами по себе, но в наваристом бульоне отрабатывают на все сто.",
    "comment": "Крупные куски мяса задней ноги — постная альтернатива классическому гуляшному мясу. Готовятся долгим тушением 2–2,5 часа в супах, рагу и карри; из-за постности выигрывают от добавления жира или наваристого бульона. От Beef for Stew отличаются гарантированным происхождением из ноги (постнее и суше лопаточного), от кубиков для кебабов — необходимостью именно тушения, а не жарки."
  },
  {
    "id": "BEEF_CUBED_STEAK",
    "number": 81,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BEEF_CUBED_STEAK",
    "correct": [
      "Beef_Cubed_Steak"
    ],
    "wrong": [
      "Bottom_Round_Steak",
      "Beef_for_Stew",
      "Thin-Sliced_Top_Round_Steak"
    ],
    "hint": "Его уже «избила» специальная машина: узор из квадратиков на поверхности выдаёт его с головой; южане панируют его и жарят, как курицу.",
    "comment": "Кубед-стейк — кусок из ноги или лопатки, механически размягчённый тендерайзером: на поверхности видны характерные квадратные насечки-«кубики». Классика для жареного стейка по-деревенски (chicken fried steak): панировка и жарка 3–4 минуты на сторону, либо быстрое тушение в подливе. От обычного раунд-стейка отличается тем, что уже отбит машиной; название происходит от узора насечек, а не от формы куска."
  },
  {
    "id": "BEEF_SHANK",
    "number": 82,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/BEEF_SHANK",
    "correct": [
      "Beef_Shank"
    ],
    "wrong": [
      "Fresh_Beef_Oxtails",
      "Fresh_Beef_Neckbones",
      "Chuck_Short_Ribs"
    ],
    "hint": "Поперечный «спил» ноги с косточкой-колечком в центре: миланцы тушат его часами и назвали блюдо в честь «кости с дыркой».",
    "comment": "Голяшка — поперечный срез ноги с мозговой костью в центре и очень жилистым мясом вокруг. Готовится только долгим тушением 3–4 часа: классика — оссобуко по-милански и наваристые бульоны; коллаген превращается в желатин, а костный мозг обогащает соус. От любого стейка отличается кардинально: жарить голяшку бессмысленно, зато для холодца и бульона ей нет равных."
  },
  {
    "id": "FRESH_BEEF_HEART",
    "number": 83,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/FRESH_BEEF_HEART",
    "correct": [
      "Fresh_Beef_Heart"
    ],
    "wrong": [
      "Fresh_Beef_Kidney",
      "Fresh_Beef_Tongue",
      "Fresh_Honeycomb_Tripe"
    ],
    "hint": "Главная «мышца» организма в прямом смысле: перуанцы маринуют её, нанизывают на шампуры и жарят на углях.",
    "comment": "Говяжье сердце — плотная мышца с насыщенным «железистым» вкусом, при этом технически это мясо, а не типичный субпродукт по текстуре. Два пути: тонкая нарезка, маринад и быстрая жарка до medium rare (перуанские антикучос на шампурах) либо долгое тушение 2–3 часа. От печени и почек отличается мышечной, «стейковой» текстурой без характерного субпродуктового привкуса."
  },
  {
    "id": "FRESH_BEEF_KIDNEY",
    "number": 84,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/FRESH_BEEF_KIDNEY",
    "correct": [
      "Fresh_Beef_Kidney"
    ],
    "wrong": [
      "Fresh_Beef_Heart",
      "Fresh_Honeycomb_Tripe",
      "Fresh_Beef_Tongue"
    ],
    "hint": "Самый «ароматный» субпродукт, который сначала долго купают в молоке; британцы прячут его в знаменитый пирог вместе с мясом.",
    "comment": "Говяжьи почки — субпродукт с сильным специфическим запахом, который требует подготовки: вымачивание в воде или молоке 2–4 часа со сменой жидкости, удаление протоков. Затем тушатся: классика — британский пирог «стейк и почки» и русский рассольник. От сердца отличаются дольчатой структурой и резким запахом, от печени — плотностью и необходимостью длительного вымачивания."
  },
  {
    "id": "FRESH_BEEF_NECKBONES",
    "number": 85,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/FRESH_BEEF_NECKBONES",
    "correct": [
      "Fresh_Beef_Neckbones"
    ],
    "wrong": [
      "Fresh_Beef_Oxtails",
      "Beef_Shank",
      "Beef_Back_Ribs"
    ],
    "hint": "Позвонки с остатками мяса — южане в США томят их часами с листовой капустой, а хозяйки варят на них суп.",
    "comment": "Шейные кости с остатками мяса — основа для наваристых бульонов и блюд соул-фуда американского Юга. Готовятся долгим томлением 3–4 часа с зеленью и специями; мясо между позвонками становится нежным, а кости дают густой навар. От бычьих хвостов отличаются меньшим количеством мяса и желатина, от голяшки — отсутствием мозговой кости; жарить их бессмысленно."
  },
  {
    "id": "FRESH_BEEF_OXTAILS",
    "number": 86,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/FRESH_BEEF_OXTAILS",
    "correct": [
      "Fresh_Beef_Oxtails"
    ],
    "wrong": [
      "Fresh_Beef_Neckbones",
      "Beef_Shank",
      "Chuck_Short_Ribs"
    ],
    "hint": "«Шайбы» уменьшающегося диаметра с задней оконечности быка: ямайцы тушат их с бобами, и соус липнет к губам от желатина.",
    "comment": "Бычьи хвосты — сегменты хвоста с большим количеством желатина и насыщенным вкусом. Готовятся исключительно долгим тушением 3,5–4 часа (ямайский тушёный оксейл, корейский суп ккори-гомтан, итальянская кода алла ваччинара); соус получается густым и «липким» от коллагена. От шейных костей отличаются характерной формой сегментов-«шайб» уменьшающегося размера и максимальным содержанием желатина."
  },
  {
    "id": "FRESH_BEEF_TONGUE",
    "number": 87,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/FRESH_BEEF_TONGUE",
    "correct": [
      "Fresh_Beef_Tongue"
    ],
    "wrong": [
      "Fresh_Beef_Heart",
      "Fresh_Beef_Kidney",
      "Fresh_Honeycomb_Tripe"
    ],
    "hint": "Деликатес, которым бык при жизни пробовал еду: сначала долгая варка, потом с него «снимают чулок», а мексиканцы кладут его в тако.",
    "comment": "Говяжий язык — деликатесный субпродукт с нежной однородной текстурой после правильной готовки. Отваривается 3–3,5 часа с кореньями, затем горячим очищается от жёсткой кожи; подаётся нарезкой, заливным, а в мексиканской кухне идёт в тако де ленгуа. От сердца отличается тем, что становится по-настоящему нежным и бархатным, а не плотным; жарить его сырым нельзя — сначала только варка."
  },
  {
    "id": "FRESH_HONEYCOMB_TRIPE",
    "number": 88,
    "number_for_id": 1,
    "section": "",
    "isStar": false,
    "question": "",
    "image": "pictures/FRESH_HONEYCOMB_TRIPE",
    "correct": [
      "Fresh_Honeycomb_Tripe"
    ],
    "wrong": [
      "Fresh_Beef_Kidney",
      "Fresh_Beef_Tongue",
      "Fresh_Beef_Heart"
    ],
    "hint": "Кусок, будто украденный у пчёл: узор из шестиугольных ячеек ни с чем не спутать; мексиканцы варят с ним «антипохмельный» суп.",
    "comment": "Сотовый рубец — второй отдел коровьего желудка с характерной поверхностью в виде пчелиных сот, самый ценимый вид рубца. Требует тщательной промывки и долгой варки 2–3 часа до мягкости; затем идёт в мексиканский суп менудо, итальянскую триппу, вьетнамский фо и китайские димсамы. От прочих субпродуктов отличается уникальной «сотовой» текстурой, которая отлично впитывает соусы и бульоны."
  }
];
