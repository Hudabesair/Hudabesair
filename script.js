/* ============================================
   HÛDÂ BEŞÂİR - BÖLÜM 1/2 (Veriler)
   ============================================ */

var kisaSureler = [
  { id: 1, isim: "Fâtiha Sûresi" },
  { id: 93, isim: "Duhâ Sûresi" },
  { id: 94, isim: "İnşirâh Sûresi" },
  { id: 95, isim: "Tîn Sûresi" },
  { id: 96, isim: "Alak Sûresi" },
  { id: 97, isim: "Kadir Sûresi" },
  { id: 99, isim: "Zilzâl Sûresi" },
  { id: 100, isim: "Âdiyât Sûresi" },
  { id: 101, isim: "Kāria Sûresi" },
  { id: 102, isim: "Tekâsür Sûresi" },
  { id: 103, isim: "Asr Sûresi" },
  { id: 104, isim: "Hümeze Sûresi" },
  { id: 105, isim: "Fîl Sûresi" },
  { id: 106, isim: "Kureyş Sûresi" },
  { id: 107, isim: "Mâûn Sûresi" },
  { id: 108, isim: "Kevser Sûresi" },
  { id: 109, isim: "Kâfirûn Sûresi" },
  { id: 110, isim: "Nasr Sûresi" },
  { id: 111, isim: "Tebbet Sûresi" },
  { id: 112, isim: "İhlâs Sûresi" },
  { id: 113, isim: "Felak Sûresi" },
  { id: 114, isim: "Nâs Sûresi" }
];
var okunuslar = {
  1: "Bismillâhirrahmânirrahîm. Elhamdülillâhi rabbil âlemîn. Errahmânirrahîm. Mâliki yevmiddîn. İyyâke na'büdü ve iyyâke neste'în. İhdinas-sırâtal müstakîm. Sırâtallezîne en'amte aleyhim, gayril mağdûbi aleyhim ve led-dâllîn. Âmîn.",
  93: "Ved duhâ. Vel leyli izâ secâ. Mâ veddeake rabbüke ve mâ kalâ. Ve lel âhiratü hayrun leke minel ûlâ. Ve le sevfe yu'tîke rabbüke fe terdâ. Elem yecidke yetîmen fe âvâ. Ve vecedeke dâllen fe hedâ. Ve vecedeke âilen fe ağnâ. Fe emmel yetîme felâ takhar. Ve emmes sâile felâ tenhar. Ve emmâ bi ni'meti rabbike fe haddis.",
  94: "Elem neşrah leke sadrak. Ve vada'nâ anke vizrak. Ellezî enkada zahrak. Ve refa'nâ leke zikrak. Fe inne maal usri yüsrâ. İnne maal usri yüsrâ. Fe izâ feragte fensab. Ve ilâ rabbike ferğab.",
  95: "Vet tîni vez zeytûn. Ve tûri sînîn. Ve hâzel beledil emîn. Lekad halaknel insâne fî ahseni takvîm. Sümme radednâhü esfele sâfilîn. İllellezîne âmenû ve amilüs sâlihâti fe lehüm ecrun gayru memnûn.",
  96: "Ikra' bismi rabbikellezî halak. Halakal insâne min alak. Ikra' ve rabbükel ekram. Ellezî alleme bil kalem. Allemel insâne mâ lem ya'lem. Kellâ inne insâne le yatgâ. En raâhüstag nâ. İnne ilâ rabbiker ruc'â. E raeyte in kâne alel hüdâ. Ev emera bil takvâ. E raeyte in kezzebe ve tevellâ. E lem ya'lem bi ennallâhe yerâ. Kellâ le in lem yentehi le nesfean bin nâsiyeh. Nâsiyetin kâzibetin hâtıeh. Fe l yed'u nâdiyh. Se ned'uz zebâniyeh. Kellâ lâ tütı'hü vescüd vakterib.",
  97: "İnnâ enzelnâhü fî leyletil kadr. Ve mâ edrâke mâ leyletül kadr. Leyletül kadri hayrun min elfi şehr. Tenezzelül melâiketü ver rûhu fîhâ bi izni rabbihim min külli emr. Selâmun hiye hattâ matla'il fecr.",
  99: "İzâ zülziletil ardu zilzâlehâ. Ve ahracetil ardu eskâlehâ. Ve kâlel insânü mâ lehâ. Yevmeizin tühaddisü ahbârahâ. Bi enne rabbeke evhâ lehâ. Yevmeizin yasdurun nâsu eştâten li yürav a'mâlehüm. Fe men ya'mel miskâle zerratin hayran yerah. Ve men ya'mel miskâle zerratin şerran yerah.",
  100: "Vel âdiyâti dabhâ. Fel mûriyâti kadhâ. Fel muğîrâti subhâ. Fe eserne bihî nak'â. Fe vesatne bihî cem'â. İnnel insâne li rabbihî le kenûd. Ve innehû alâ zâlike le şehîd. Ve innehû li hubbil hayri le şedîd. E felâ ya'lemü izâ bu'sira mâ fil kubûr. Ve hussıle mâ fis sudûr. İnne rabbehüm bihim yevmeizin le habîr.",
  101: "El kāria. Mel kāria. Ve mâ edrâke mel kāria. Yevme yekûnün nâsi kel ferâşil mebsûs. Ve tekûnül cibâlü kel ıhnil menfûş. Fe emmâ men sekulet mevâzînüh. Fe hüve fî îşetin râdıyeh. Ve emmâ men haffet mevâzînüh. Fe ümmühû hâviyeh. Ve mâ edrâke mâ hiyeh. Nârün hâmiyeh.",
  102: "Elhâkümüt tekâsür. Hattâ zürtümül mekâbir. Kellâ sevfe ta'lemûn. Sümme kellâ sevfe ta'lemûn. Kellâ lev ta'lemûne ilmel yakîn. Le teravünnel cahîm. Sümme le teravünnehâ aynel yakîn. Sümme le tüs'elünne yevmeizin anin naîm.",
  103: "Vel asr. İnnel insâne le fî husr. İllellezîne âmenû ve amilüs sâlihâti ve tevâsav bil hakkı ve tevâsav bis sabr.",
  104: "Veylün li külli hümezetin lümezeh. Ellezî cemea mâlen ve addedeh. Yahsebü enne mâlehû ahledeh. Kellâ le yünbezenne fil hutameh. Ve mâ edrâke mel hutameh. Nârullâhil mûkadeh. Elletî tettaliu alel ef'ideh. İnnehâ aleyhim mü'sadeh. Fî amedin mümeddedeh.",
  105: "Elem tera keyfe fe'ale rabbüke bi ashâbil fîl. Elem yec'al keydehüm fî tadlîl. Ve ersele aleyhim tayran ebâbîl. Termîhim bi hıcâratin min siccîl. Fe ce'alehüm ke asfin me'kûl.",
  106: "Li îlâfi Kureyş. Îlâfihim rihleteş şitâi ves sayf. Fel ya'büdü rabbe hâzel beyt. Ellezî et'amehüm min cû'in ve âmenehüm min havf.",
  107: "E raeytellezî yükezzibü bid dîn. Fe zâlikellezî yedu'ul yetîm. Ve lâ yehuddu alâ taâmil miskîn. Fe veylün lil musallîn. Ellezîne hüm an salâtihim sâhûn. Ellezîne hüm yürâûn. Ve yemne'ûnel mâûn.",
  108: "İnnâ a'taynâkel kevser. Fe salli li rabbike venhar. İnne şânieke hüvel ebter.",
  109: "Kul yâ eyyühel kâfirûn. Lâ a'büdü mâ ta'büdûn. Ve lâ entüm âbidûne mâ a'büd. Ve lâ ene âbidün mâ abedtüm. Ve lâ entüm âbidûne mâ a'büd. Leküm dînüküm ve liye dîn.",
  110: "İzâ câe nasrullâhi vel feth. Ve raeyten nâse yedhulûne fî dînillâhi efvâcâ. Fe sebbih bi hamdi rabbike vestagfirh. İnnehû kâne tevvâbâ.",
  111: "Tebbet yedâ ebî lehebin ve tebb. Mâ agnâ anhü mâlühû ve mâ keseb. Seyaslâ nâran zâte leheb. Vemraetühû hammâletel hatab. Fî cîdihâ hablün min mesed.",
  112: "Kul hüvallâhü ehad. Allâhüs samed. Lem yelid ve lem yûled. Ve lem yekün lehû küfüven ehad.",
  113: "Kul e'ûzü bi rabbil felak. Min şerri mâ halak. Ve min şerri gâsikın izâ vekab. Ve min şerrin neffâsâti fil ukad. Ve min şerri hâsidin izâ hased.",
  114: "Kul e'ûzü bi rabbin nâs. Melikin nâs. İlâhin nâs. Min şerril vesvâsil hannâs. Ellezî yüvesvisü fî sudûrin nâs. Minel cinneti ven nâs."
};
var zikirler = [
  { id: 1, isim: "🌅 Sabah Zikirleri", icerik: "<p><strong>1. Sabah Kalkınca:</strong><br>Elhamdülillâhillezî ahyânâ ba'de mâ emâtenâ ve ileyhin nüşûr.<br><em>(Bizi öldürdükten sonra dirilten Allah'a hamdolsun. Dönüş yalnız O'nadır.)</em></p><p><strong>2. Sabah Namazından Sonra:</strong><br>Sübhânallâhi ve bihamdihî, sübhânallâhil azîm.<br><em>(Allah'ı tesbih ve hamd ederim. Yüce Allah'ı tesbih ederim.)</em></p><p><strong>3. Ayetel Kürsî:</strong> Sabah okuyan akşama kadar korunur.</p><p><strong>4. İhlâs, Felak, Nâs:</strong> 3 kere okuyan her şeyden korunur.</p>" },
  { id: 2, isim: "🌙 Akşam Zikirleri", icerik: "<p><strong>1. Akşam Olunca:</strong><br>Allâhümme bike emseynâ ve bike asbahnâ ve bike nahyâ ve bike nemûtü ve ileykel masîr.<br><em>(Allah'ım! Seninle akşama erdik, Seninle sabaha erdik. Seninle yaşar, Seninle ölürüz. Dönüş yalnız Sanadır.)</em></p><p><strong>2. Akşam Namazından Sonra:</strong><br>Sübhânallâhi ve bihamdihî, sübhânallâhil azîm.<br><em>(Allah'ı tesbih ve hamd ederim. Yüce Allah'ı tesbih ederim.)</em></p><p><strong>3. Ayetel Kürsî:</strong> Akşam okuyan sabaha kadar korunur.</p>" },
  { id: 3, isim: "🕌 Namaz Sonrası Zikirler", icerik: "<p><strong>1. İstiğfar (3 kere):</strong><br>Estağfirullâhe'l-azîm.<br><em>(Yüce Allah'tan bağışlanma dilerim.)</em></p><p><strong>2. Ayetel Kürsî</strong></p><p><strong>3. Sübhanallah (33 kere):</strong><br>Sübhânallâh.<br><em>(Allah'ı tenzih ederim.)</em></p><p><strong>4. Elhamdülillah (33 kere):</strong><br>Elhamdülillâh.<br><em>(Hamd Allah'a mahsustur.)</em></p><p><strong>5. Allahu Ekber (33 kere):</strong><br>Allâhü ekber.<br><em>(Allah en büyüktür.)</em></p><p><strong>6. Tehlil:</strong><br>Lâ ilâhe illallâhü vahdehû lâ şerîke leh. Lehül mülkü ve lehül hamdü ve hüve alâ külli şey'in kadîr.<br><em>(Allah'tan başka ilâh yoktur. O birdir, ortağı yoktur. Mülk O'nundur, hamd O'na mahsustur. O her şeye kadirdir.)</em></p>" },
  { id: 4, isim: "🌹 Peygamberimize Salavat", icerik: "<p><strong>1. Salavat:</strong><br>Allâhümme salli alâ Muhammedin ve alâ âli Muhammed.<br><em>(Allah'ım! Muhammed'e ve Muhammed'in âline rahmet et.)</em></p><p><strong>2. Salli Duası:</strong><br>Allâhümme salli alâ Muhammedin ve alâ âli Muhammed. Kemâ salleyte alâ İbrâhîme ve alâ âli İbrâhîm. İnneke hamîdün mecîd.<br><em>(Allah'ım! Muhammed'e ve Muhammed'in âline rahmet et. İbrâhim'e ve İbrâhim'in âline rahmet ettiğin gibi. Şüphesiz Sen övülmeye lâyıksın, şan ve şeref sahibisin.)</em></p><p><strong>3. Barik Duası:</strong><br>Allâhümme bârik alâ Muhammedin ve alâ âli Muhammed. Kemâ bârekte alâ İbrâhîme ve alâ âli İbrâhîm. İnneke hamîdün mecîd.<br><em>(Allah'ım! Muhammed'e ve Muhammed'in âline bereket ver. İbrâhim'e ve İbrâhim'in âline bereket verdiğin gibi. Şüphesiz Sen övülmeye lâyıksın, şan ve şeref sahibisin.)</em></p><p><strong>4. En Kısa Salavat:</strong><br>Allâhümme salli alâ seyyidinâ Muhammed.<br><em>(Allah'ım! Efendimiz Muhammed'e rahmet et.)</em></p><p><strong>5. Salevât-ı Şerîfe:</strong><br>Allâhümme salli ve sellim alâ seyyidinâ Muhammedin ve alâ âlihî ve sahbihî ecmaîn.<br><em>(Allah'ım! Efendimiz Muhammed'e, onun âline ve bütün ashâbına rahmet ve selâm et.)</em></p>" },
  { id: 5, isim: "💚 İstiğfar ve Tevbe", icerik: "<p><strong>1. Estağfirullah:</strong><br>Estağfirullâhe'l-azîm.<br><em>(Yüce Allah'tan bağışlanma dilerim.)</em></p><p><strong>2. Seyyidül İstiğfar:</strong><br>Allâhümme ente rabbî lâ ilâhe illâ ente. Halaktenî ve ene abdüke ve ene alâ ahdike ve va'dike mesteta'tü. Eûzü bike min şerri mâ sana'tü. Ebûü leke bi ni'metike aleyye ve ebûü bi zenbî fağfirlî fe innehû lâ yağfiruz zünûbe illâ ente.<br><em>(Allah'ım! Sen benim Rabbimsin, Senden başka ilâh yoktur. Beni Sen yarattın, ben Senin kulunum. Gücüm yettiğince Sana verdiğim sözde durmaya çalışıyorum. İşlediğim kötülüklerin şerrinden Sana sığınırım. Üzerimdeki nimetini de, işlediğim günahları da itiraf ediyorum. Beni bağışla. Şüphesiz günahları Senden başka bağışlayacak yoktur.)</em></p><p><strong>3. Tövbe Duası:</strong><br>Rabbenâ zalemnâ enfüsenâ ve in lem tağfir lenâ ve terhamnâ le nekûnenne minel hâsirîn.<br><em>(Rabbimiz! Biz kendimize zulmettik. Eğer bizi bağışlamaz ve bize acımazsan mutlaka ziyana uğrayanlardan oluruz.)</em></p>" },
  { id: 6, isim: "🤲 Hastalık ve Şifa Duası", icerik: "<p><strong>1. Şifa Duası:</strong><br>Allâhümme rabben nâsi ezhibil be'se işfi enteş şâfî lâ şifâe illâ şifâük. Şifâen lâ yügâdiru sekamâ.<br><em>(Allah'ım! İnsanların Rabbi! Sıkıntıyı gider, şifa ver. Sen şifa verensin. Senin şifandan başka şifa yoktur. Hiçbir hastalık bırakmayan bir şifa ver.)</em></p><p><strong>2. Fâtiha:</strong> 7 kere oku, hastaya üfle.</p><p><strong>3. İhlâs, Felak, Nâs:</strong> 3 kere oku, hastaya üfle.</p><p><strong>4. Ayetel Kürsî</strong></p><p><strong>5. Şifa İçin Zikir:</strong><br>Yâ Şâfî, Yâ Kâfî, Yâ Muâfî.<br><em>(Ey şifa veren, ey yeten, ey afiyet veren Allah'ım!)</em></p>" },
  { id: 7, isim: "🛡️ Bela ve Nazara Karşı", icerik: "<p><strong>1. Nazar Duası:</strong><br>Eûzü bi kelimâtillâhit tâmmeti min şerri mâ halak.<br><em>(Yarattıklarının şerrinden Allah'ın eksiksiz kelimelerine sığınırım.)</em></p><p><strong>2. Felak ve Nâs:</strong> 3 kere oku, üfle.</p><p><strong>3. Ayetel Kürsî</strong></p><p><strong>4. Nazar İçin:</strong><br>Allâhümme bârik fîhî ve lâ tedarruhû.<br><em>(Allah'ım! Ona bereket ver ve ona zarar verme.)</em></p><p><strong>5. Kalem Sûresi 51-52. Ayetler:</strong> Nazara karşı okunur.</p>" },
  { id: 8, isim: "👨‍👩‍👧 Aile ve Çocuklar İçin", icerik: "<p><strong>1. Aile İçin Dua:</strong><br>Rabbenâ heb lenâ min ezvâcinâ ve zürriyyâtinâ kurrate a'yünin vec'alnâ lil müttekîne imâmâ.<br><em>(Rabbimiz! Bize eşlerimizden ve çocuklarımızdan gözümüzü aydınlatacak kimseler ver ve bizi takvâ sahiplerine önder eyle.)</em></p><p><strong>2. Çocuk İçin Dua:</strong><br>Rabbi heb lî min ledünke zürriyyeten tayyibeten inneke semîud duâ.<br><em>(Rabbim! Bana katından temiz bir nesil ver. Şüphesiz Sen duayı işitensin.)</em></p><p><strong>3. Eş İçin Dua:</strong><br>Allâhümme ellif beyne kulûbinâ ve aslih zâte beyninâ.<br><em>(Allah'ım! Kalplerimizi kaynaştır ve aramızı düzelt.)</em></p>" },
  { id: 9, isim: "🕊️ Rahmetli Olanlar İçin", icerik: "<p><strong>1. Vefat Eden İçin:</strong><br>Allâhümmağfir lehû verhamhü ve âfihî va'fü anhü.<br><em>(Allah'ım! Onu bağışla, ona merhamet et, ona afiyet ver ve onu affet.)</em></p><p><strong>2. Kabir Ziyareti Duası:</strong><br>Esselâmü aleyküm yâ ehled diyâri minel mü'minîne vel müslimîn. Ve innâ inşâallâhü biküm lâhikûn. Nes'elüllâhe lenâ ve lekümül âfiyete.<br><em>(Ey mü'min ve müslüman diyarının halkı! Selâm sizin üzerinize olsun. İnşallah biz de size katılacağız. Allah'tan bizim için de sizin için de afiyet dileriz.)</em></p><p><strong>3. Ölüye Dua:</strong><br>Allâhümmağfir lehû verhamhü ve nevvir kabrehû ve vessi' medhalehû.<br><em>(Allah'ım! Onu bağışla, ona merhamet et, kabrini nurlandır ve girdiği yeri genişlet.)</em></p><p><strong>4. Yâsîn Sûresi:</strong> Vefat edenin arkasından okunur.</p>" },
  { id: 10, isim: "💰 Rızık ve Bereket", icerik: "<p><strong>1. Rızık Duası:</strong><br>Allâhümme'kfinî bi halâlike an harâmike ve ağninî bi fadlike ammen sivâk.<br><em>(Allah'ım! Helâlinle yetinip haramına düşmekten koru, lütfunla beni başkalarına muhtaç etme.)</em></p><p><strong>2. Vâkıa Sûresi:</strong> Her gece okuyan fakirlik görmez.</p><p><strong>3. Bereket İçin:</strong><br>Allâhümme bârik lenâ fîmâ razaktenâ ve kınâ azâben nâr.<br><em>(Allah'ım! Bize verdiğin rızıkları bereketli kıl ve bizi cehennem azabından koru.)</em></p><p><strong>4. Rızık İçin Zikir:</strong><br>Yâ Rezzâk, Yâ Fettâh, Yâ Ganî.<br><em>(Ey rızık veren, ey kapıları açan, ey zengin kılan Allah'ım!)</em></p>" },
  { id: 11, isim: "🕋 Hac ve Umre Duası", icerik: "<p><strong>1. Yola Çıkarken:</strong><br>Sübhânellezî sahhara lenâ hâzâ ve mâ künnâ lehû mukrinîn. Ve innâ ilâ rabbinâ le münkalibûn.<br><em>(Bunu bizim hizmetimize veren Allah'ı tenzih ederim. Yoksa biz buna güç yetiremezdik. Şüphesiz biz Rabbimize döneceğiz.)</em></p><p><strong>2. Telbiye:</strong><br>Lebbeyk Allâhümme lebbeyk. Lebbeyke lâ şerîke leke lebbeyk. İnnel hamde ven ni'mete leke vel mülk. Lâ şerîke lek.<br><em>(Buyur Allah'ım buyur! Buyur, Senin ortağın yoktur, buyur! Şüphesiz hamd, nimet ve mülk Senindir. Senin ortağın yoktur.)</em></p><p><strong>3. Kâbe'yi Görünce:</strong><br>Allâhümme zid hâzel beyte teşrîfen ve ta'zîmen ve tekrîmen ve mehâbeten.<br><em>(Allah'ım! Bu Beyt'in şerefini, azametini, hürmetini ve heybetini artır.)</em></p>" },
  { id: 12, isim: "😊 Sıkıntı ve Keder Anında", icerik: "<p><strong>1. Sıkıntı Duası:</strong><br>Lâ ilâhe illallâhül azîmül halîm. Lâ ilâhe illallâhü rabbül arşil azîm. Lâ ilâhe illallâhü rabbüs semâvâti ve rabbül ardı ve rabbül arşil kerîm.<br><em>(Yüce ve Halîm olan Allah'tan başka ilâh yoktur. Yüce Arş'ın Rabbi olan Allah'tan başka ilâh yoktur. Göklerin Rabbi, yerin Rabbi ve yüce Arş'ın Rabbi olan Allah'tan başka ilâh yoktur.)</em></p><p><strong>2. Ferahlık İçin:</strong><br>Hasbünallâhü ve ni'mel vekîl.<br><em>(Allah bize yeter, O ne güzel vekildir.)</em></p><p><strong>3. İnşirâh Sûresi:</strong> Her zorlukla beraber bir kolaylık vardır.</p><p><strong>4. Duhâ Sûresi</strong></p><p><strong>5. Zikir:</strong><br>Yâ Latîf, Yâ Vedûd, Yâ Fettâh.<br><em>(Ey lütfeden, ey çok seven, ey kapıları açan Allah'ım!)</em></p>" },
  { id: 13, isim: "🌿 Kolaylık ve Zorluk İçin", icerik: "<p><strong>1. Zorluk Anında:</strong><br>Allâhümme lâ sehle illâ mâ cealtehû sehlâ. Ve ente tec'alül hazne izâ şi'te sehlâ.<br><em>(Allah'ım! Senin kolay kıldığından başka kolay yoktur. Sen istediğinde zoru da kolay kılarsın.)</em></p><p><strong>2. İnşirâh Sûresi:</strong><br>Elem neşrah leke sadrak...<br><em>(Biz senin göğsünü açıp genişletmedik mi?..)</em></p><p><strong>3. Tâhâ Sûresi 25-28:</strong><br>Rabbişrah lî sadrî ve yessir lî emrî.<br><em>(Rabbim! Göğsümü genişlet ve işimi kolaylaştır.)</em></p>" },
  { id: 14, isim: "🔥 Büyü ve Sihir İçin", icerik: "<p><strong>1. Felak ve Nâs:</strong> 7 kere sabah-akşam oku.</p><p><strong>2. Ayetel Kürsî:</strong> Her namazdan sonra oku.</p><p><strong>3. Bakara Sûresi 102. Ayet:</strong> Büyüyü bozan ayet.</p><p><strong>4. Kalem 51-52:</strong> Nazara ve büyüye karşı.</p><p><strong>5. Zikir:</strong><br>Yâ Kâfî, Yâ Hâfız, Yâ Müheymin.<br><em>(Ey yeten, ey koruyan, ey gözetleyen Allah'ım!)</em></p>" },
  { id: 15, isim: "🛡️ İftira ve Haksızlığa Karşı", icerik: "<p><strong>1. İftira Karşısında:</strong><br>Hasbünallâhü ve ni'mel vekîl.<br><em>(Allah bize yeter, O ne güzel vekildir.)</em></p><p><strong>2. Haksızlığa Uğrayınca:</strong><br>Allâhümme innî eûzü bike min şerri men zalemenî.<br><em>(Allah'ım! Bana zulmedenin şerrinden Sana sığınırım.)</em></p><p><strong>3. Yûsuf Sûresi:</strong> İftiraya karşı okunur.</p><p><strong>4. Zikir:</strong><br>Yâ Hakem, Yâ Adl, Yâ Kahhâr.<br><em>(Ey hükmeden, ey adaletli olan, ey kahreden Allah'ım!)</em></p>" },
  { id: 16, isim: "🤲 Kadir Gecesi ve Ramazan", icerik: "<p><strong>1. Kadir Gecesi Duası:</strong><br>Allâhümme inneke afüvvün kerîmün tuhibbül afve fa'fü annî.<br><em>(Allah'ım! Sen çok affedici ve cömertsin, affı seversin, beni affet.)</em></p><p><strong>2. İftar Duası:</strong><br>Allâhümme leke sumtü ve bike âmentü ve aleyke tevekkeltü ve alâ rızkıke eftartü.<br><em>(Allah'ım! Senin için oruç tuttum, Sana iman ettim, Sana güvendim ve Senin rızkınla iftar ettim.)</em></p><p><strong>3. Sahur Duası:</strong><br>Ve bis savmi ğadin neveytü min şehri ramadâne.<br><em>(Ramazan ayının yarınki orucuna niyet ettim.)</em></p>" },
  { id: 17, isim: "🕊️ Vefat Anında Okunacaklar", icerik: "<p><strong>1. Ölüm Döşeğinde:</strong><br>Lâ ilâhe illallâh.<br><em>(Allah'tan başka ilâh yoktur.)</em></p><p><strong>2. Yâsîn Sûresi:</strong> Ölünün yanında okunur.</p><p><strong>3. Vefat Haberi Gelince:</strong><br>İnnâ lillâhi ve innâ ileyhi râciûn.<br><em>(Muhakkak biz Allah'a aidiz ve muhakkak O'na döneceğiz.)</em></p><p><strong>4. Ölüye Telkin:</strong><br>Kul lâ ilâhe illallâh.<br><em>(De ki: Allah'tan başka ilâh yoktur.)</em></p>" },
  { id: 18, isim: "⚡ Umumi Zikirler", icerik: "<p><strong>1. En Faziletli Zikir:</strong><br>Lâ ilâhe illallâh.<br><em>(Allah'tan başka ilâh yoktur.)</em></p><p><strong>2. En Faziletli Tesbih:</strong><br>Sübhânallâh.<br><em>(Allah'ı tenzih ederim.)</em></p><p><strong>3. En Faziletli Hamd:</strong><br>Elhamdülillâh.<br><em>(Hamd Allah'a mahsustur.)</em></p><p><strong>4. En Faziletli Tekbir:</strong><br>Allâhü ekber.<br><em>(Allah en büyüktür.)</em></p><p><strong>5. Havle:</strong><br>Lâ havle ve lâ kuvvete illâ billâh.<br><em>(Güç ve kuvvet ancak Allah'tandır.)</em></p><p><strong>6. Kapsamlı Zikir:</strong><br>Sübhânallâhi ve bihamdihî sübhânallâhil azîm.<br><em>(Allah'ı tesbih ve hamd ederim. Yüce Allah'ı tesbih ederim.)</em></p>" },
  { id: 19, isim: "🕌 Cuma Günü Zikirleri", icerik: "<p><strong>1. Salavat:</strong> Cuma günü 100 kere salavat getir.</p><p><strong>2. Kehf Sûresi:</strong> Cuma günü okuyan iki cuma arası nurla aydınlanır.</p><p><strong>3. Cuma Duası:</strong><br>Allâhümme salli alâ Muhammedin ve alâ âli Muhammed.<br><em>(Allah'ım! Muhammed'e ve Muhammed'in âline rahmet et.)</em></p><p><strong>4. Duhâ Sûresi:</strong> Cuma günü okunması faziletlidir.</p>" },
  { id: 20, isim: "🌙 Yatmadan Önce Zikirler", icerik: "<p><strong>1. Yatarken:</strong><br>Bismikellâhümme emûtü ve ahyâ.<br><em>(Allah'ım! Senin adınla ölür ve dirilirim.)</em></p><p><strong>2. Ayetel Kürsî</strong></p><p><strong>3. İhlâs, Felak, Nâs:</strong> 3 kere oku, üfle.</p><p><strong>4. Sübhanallah (33), Elhamdülillah (33), Allahu Ekber (34)</strong></p><p><strong>5. Mülk Sûresi:</strong> Kabir azabından korur.</p><p><strong>6. Secde Sûresi:</strong> Yatmadan önce okunması faziletlidir.</p>" }
];
var sayacZikirleri = [
  { isim: "Lâ ilâhe illallâh", anlam: "Allah'tan başka ilâh yoktur." },
  { isim: "Sübhânallâh", anlam: "Allah'ı tenzih ederim (her türlü eksiklikten uzaktır)." },
  { isim: "Elhamdülillâh", anlam: "Hamd Allah'a mahsustur." },
  { isim: "Allâhü ekber", anlam: "Allah en büyüktür." },
  { isim: "Estağfirullâh", anlam: "Allah'tan bağışlanma dilerim." },
  { isim: "Allâhümme salli alâ Muhammed", anlam: "Allah'ım! Muhammed'e rahmet et." },
  { isim: "Lâ havle ve lâ kuvvet İllâ billâh", anlam: "Güç ve kuvvet ancak Allah'tandır." },
  { isim: "Sübhânallâhi ve bihamdihî", anlam: "Allah'ı tesbih ve hamd ederim." },
  { isim: "Yâ Latîf", anlam: "Ey lütfeden, ey en ince işlerin içini bilen Allah'ım!" },
  { isim: "Yâ Vedûd", anlam: "Ey çok seven ve çok sevilen Allah'ım!" },
  { isim: "Yâ Fettâh", anlam: "Ey kapalı kapıları açan, zorlukları kolaylaştıran Allah'ım!" },
  { isim: "Yâ Rezzâk", anlam: "Ey bütün canlıların rızkını veren Allah'ım!" },
  { isim: "Yâ Şâfî", anlam: "Ey hastalara şifa veren Allah'ım!" },
  { isim: "Yâ Kâfî", anlam: "Ey her şeye yeten, kullarının ihtiyaçlarını karşılayan Allah'ım!" },
  { isim: "Yâ Hâfız", anlam: "Ey koruyan, gözeten Allah'ım!" },
  { isim: "Yâ Müheymin", anlam: "Ey her şeyi gözetleyen, koruyup kollayan Allah'ım!" },
  { isim: "Yâ Hakem", anlam: "Ey hükmeden, hakkı yerine getiren Allah'ım!" },
  { isim: "Yâ Adl", anlam: "Ey mutlak adaletli olan Allah'ım!" },
  { isim: "Yâ Ganî", anlam: "Ey zengin, hiçbir şeye ihtiyacı olmayan Allah'ım!" },
  { isim: "Yâ Muâfî", anlam: "Ey afiyet veren, hastalıklardan koruyan Allah'ım!" },
  { isim: "Leyse lehamın dünillahi kaşifeh", anlam: "Allah'tan başka onun sıkıntısını giderecek yoktur." },
{ isim: "Sübhânallâhi vel hamdülillâhi ve lâ ilâhe illallâhü vallâhü ekber", anlam: "Allah'ı tenzih ederim, hamd Allah'a mahsustur, Allah'tan başka ilâh yoktur, Allah en büyüktür." },
{ isim: "Allâhümme Rabben-nâs, ezhibi'l-be's, işfi ente'ş-Şâfî, lâ şifâe illâ şifâük, şifâen lâ yugâdiru sekamâ", anlam: "Allah'ım! Ey insanların Rabbi! Sıkıntıyı gider, şifa ver! Sen şifa verensin, Senin şifandan başka şifa yoktur. Hiçbir hastalık bırakmayan bir şifa ver." }
];
var onbellek = {};  // Kullanılmıyor ama dursun
var sayacDeger = 0;
var sayacAktifZikir = 0;
var sayacBaslatildi = false;

function showPage(isim) {
  if (isim === 'sayac') sayacBaslat();
if (isim === 'favoriler') favoriListesiOlustur();
  var sayfalar = document.querySelectorAll('.page');
  for (var i = 0; i < sayfalar.length; i++) sayfalar[i].classList.remove('active');
  var hedef = document.getElementById('page-' + isim);
  if (hedef) hedef.classList.add('active');

  var butonlar = document.querySelectorAll('.menu button');
  for (var j = 0; j < butonlar.length; j++) butonlar[j].classList.remove('active');
  if (isim === 'home') document.getElementById('btn-home').classList.add('active');
  if (isim === 'sureler' || isim === 'detail') document.getElementById('btn-sureler').classList.add('active');
  if (isim === 'zikirler' || isim === 'zikirDetay') document.getElementById('btn-zikirler').classList.add('active');
  if (isim === 'sayac') document.getElementById('btn-sayac').classList.add('active');
  if (isim === 'esma' || isim === 'esmaDetay') document.getElementById('btn-esma').classList.add('active');
  if (isim === 'favoriler') document.getElementById('btn-favoriler').classList.add('active');
  if (isim === 'kible') document.getElementById('btn-kible').classList.add('active');
if (isim === 'sartlar') document.getElementById('btn-sartlar').classList.add('active');
  window.scrollTo(0, 0);
  guvercinUcur();
  if (isim === 'hadisler' || isim === 'hadisDetay') document.getElementById('btn-hadisler').classList.add('active');
}

function listeyiOlustur() {
  var liste = document.getElementById('sureList');
  if (!liste) return;
  liste.innerHTML = '';

  for (var i = 0; i < kisaSureler.length; i++) {
    var s = kisaSureler[i];
    var btn = document.createElement('button');
    btn.className = 'sure-item';

    var spanNum = document.createElement('span');
    spanNum.className = 'num';
    spanNum.textContent = (i + 1);
    btn.appendChild(spanNum);

    var spanIsim = document.createElement('span');
    spanIsim.textContent = s.isim;
    btn.appendChild(spanIsim);

    btn.onclick = (function(sure) {
      return function() { sureAc(sure.id); };
    })(s);

    liste.appendChild(btn);
  }
}

function sureAc(sira) {
  var isim = "";
  for (var i = 0; i < kisaSureler.length; i++) {
    if (kisaSureler[i].id === sira) { isim = kisaSureler[i].isim; break; }
  }
  var html = '';
  html += '<h2 class="sure-title">' + isim + '</h2>';
  html += '<div style="text-align:right; margin-bottom:10px;">' + favoriButonu('sureler', sira) + '</div>';
  html += '<div id="sureIcerik"><p class="loading">⏳ Yükleniyor...</p></div>';

  document.getElementById('sureContent').innerHTML = html;
  showPage('detail');

  var mealUrl = 'https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/chapters/tr/' + sira + '.json';

  fetch(mealUrl)
    .then(function(c) {
      if (!c.ok) throw new Error('Meal alınamadı');
      return c.json();
    })
    .then(function(mealData) {
      icerikGoster(sira, isim, mealData);
    })
    .catch(function(hata) {
      console.log('Hata:', hata);
      var icerik = document.getElementById('sureIcerik');
      if (icerik) {
        icerik.innerHTML = '<p class="loading">⚠️ Veri yüklenemedi.</p>';
      }
    });
}
function icerikGoster(sira, isim, mealData) {
  // ÖZEL MEAL KONTROLÜ
  if (typeof ozelMealler !== 'undefined' && ozelMealler[sira]) {
    var ozelAyetler = [];
    for (var oi = 0; oi < ozelMealler[sira].length; oi++) {
      ozelAyetler.push({ translation: ozelMealler[sira][oi] });
    }
    mealData = { verses: ozelAyetler };
  }

  var ayetler = mealData.verses || [];
  var html = '';

  html += '<div class="section">';
  html += '<h3>🔤 Türkçe Okunuşu</h3>';
  html += '<div class="reading">';
  if (okunuslar[sira]) {
    html += okunuslar[sira];
  } else {
    html += '<p style="color:#a8a88a; font-style:normal;">Bu sûrenin okunuşu eklenmedi.</p>';
  }
  html += '</div></div>';

  html += '<div class="section">';
  html += '<h3>💡 Meâli (Anlamı)</h3>';
  html += '<div class="meaning">';
  for (var j = 0; j < ayetler.length; j++) {
    if (ayetler[j].translation) {
      html += '<p><span class="ayet-num">' + (j + 1) + '.</span> ' + ayetler[j].translation + '</p>';
    }
  }
  html += '</div></div>';

  document.getElementById('sureIcerik').innerHTML = html;
}

function zikirListesiOlustur() {
  var liste = document.getElementById('zikirList');
  if (!liste) return;
  liste.innerHTML = '';

  for (var i = 0; i < zikirler.length; i++) {
    var z = zikirler[i];
    var btn = document.createElement('button');
    btn.className = 'sure-item';

    var spanNum = document.createElement('span');
    spanNum.className = 'num';
    spanNum.textContent = z.id;
    btn.appendChild(spanNum);

    var spanIsim = document.createElement('span');
    spanIsim.textContent = z.isim;
    btn.appendChild(spanIsim);

    btn.onclick = (function(zikir) {
      return function() { zikirAc(zikir.id); };
    })(z);

    liste.appendChild(btn);
  }
     }
      function zikirAc(id) {
  var z = null;
  for (var i = 0; i < zikirler.length; i++) {
    if (zikirler[i].id === id) { z = zikirler[i]; break; }
  }
  if (!z) return;

  var html = '';
  html += '<h2 class="sure-title">' + z.isim + '</h2>';
  html += '<div class="section">';
  html += '<div class="meaning">' + z.icerik + '</div>';
  html += '</div>';

  document.getElementById('zikirContent').innerHTML = html;
  showPage('zikirDetay');
}
function sayacBaslat() {
  if (sayacBaslatildi) return;
  sayacBaslatildi = true;

  sayacAktifZikir = 0;
  sayacDeger = 0;
  sayacGuncelle();
  sayacButonGuncelle();
}

/* Buton yazısını güncelle */
function sayacButonGuncelle() {
  var buton = document.getElementById('sayacZikirButon');
  if (!buton) return;
  var z = sayacZikirleri[sayacAktifZikir];
  if (!z) return;
  buton.innerHTML = z.isim + ' <span class="ok">▼</span>';
}

/* Pencereyi aç */
function sayacZikirPencereAc() {
  var pencere = document.getElementById('sayacZikirPencere');
  var liste = document.getElementById('sayacZikirPencereListe');
  if (!pencere || !liste) return;

  liste.innerHTML = '';
  for (var i = 0; i < sayacZikirleri.length; i++) {
    (function(index) {
      var btn = document.createElement('button');
      btn.className = 'sayac-pencere-item';
      if (index === sayacAktifZikir) btn.classList.add('aktif');
      btn.textContent = sayacZikirleri[index].isim;
      btn.onclick = function() {
        sayacAktifZikir = index;
        sayacDeger = 0;
        sayacButonGuncelle();
        sayacGuncelle();
        sayacZikirPencereKapat();
      };
      liste.appendChild(btn);
    })(i);
  }

  pencere.classList.add('acik');
}

/* Pencereyi kapat */
function sayacZikirPencereKapat() {
  var pencere = document.getElementById('sayacZikirPencere');
  if (pencere) pencere.classList.remove('acik');
}
function sayacArttir() {
  sayacDeger++;
  sayacGuncelle();
}

function sayacSifirla() {
  sayacDeger = 0;
  sayacGuncelle();
}

function sayacGeriAl() {
  if (sayacDeger > 0) sayacDeger--;
  sayacGuncelle();
}

function sayacGuncelle() {
  var z = sayacZikirleri[sayacAktifZikir];
  if (!z) return;
  var isimEl = document.getElementById('sayacIsim');
  var rakamEl = document.getElementById('sayacRakam');
  var hedefEl = document.getElementById('sayacHedef');
  if (isimEl) isimEl.textContent = z.isim;
  if (rakamEl) rakamEl.textContent = sayacDeger;
  if (hedefEl) {
    hedefEl.innerHTML = "<span style='color:#c9c9a8; font-style:italic; font-size:0.95rem; display:block; margin-bottom:10px;'>" + (z.anlam || "") + "</span><span style='font-size:0.85rem;'>İstediğiniz kadar zikredebilirsiniz 🤲</span>";
  }
}
function guvercinUcur() {
  var g = document.getElementById('guvercin');
  if (!g) return;
  g.classList.remove('ucus');
  void g.offsetWidth;
  g.classList.add('ucus');
  setTimeout(function() { g.classList.remove('ucus'); }, 2600);
}
/* ============================================
   ÖZEL MEAL VERİLERİ
   (API'de hatalı olan sûreler için)
   ============================================ */
var ozelMealler = {
  106: [
    "Kureyş'i alıştırdığı için,",
    "Onları kışın ve yazın yolculuklarına alıştırdığı için,",
    "Öyleyse bu Ev'in (Kâbe'nin) Rabbine kulluk etsinler.",
    "O, kendilerini açlıktan doyuran ve korkudan güvene kavuşturandır."
  ],
  107: [
    "Gördün mü, o hesap ve ceza gününü yalanlayanı!",
    "İşte o, yetimi itip kakar;",
    "Yoksulu doyurmaya teşvik etmez;",
    "Yazıklar olsun o namaz kılanlara ki,",
    "Onlar namazlarını ciddiye almazlar.",
    "Onlar (namazlarıyla) gösteriş yaparlar.",
    "Ufacık bir yardıma bile engel olurlar."
  ],
  110: [
    "Allah'ın yardımı ve fetih geldiğinde,",
    "İnsanların bölük bölük Allah'ın dinine girdiklerini gördüğünde,",
    "Rabbini hamd ile tesbih et ve O'ndan bağışlanma dile. Çünkü O, tövbeleri çok kabul edendir."
  ],
  111: [
    "Ebû Leheb'in elleri kurusun; kurudu da.",
    "Malı ve kazandığı kendisine fayda vermedi.",
    "Alevli ateşe yaslanacaktır.",
    "Karısı da, boynunda bir ip olduğu halde ona odun taşıyacaktır.",
    "Onun boynunda bükülmüş bir ip olacaktır."
  ],
  113: [
    "De ki: Yarattığı şeylerin kötülüğünden sabah aydınlığının Rabbine sığınırım,",
    "Karanlığı çöktüğü zaman gecenin kötülüğünden,",
    "Düğümlere üfleyenlerin kötülüğünden,",
    "Haset ettiği zaman hasetçinin kötülüğünden."
  ],
  114: [
    "De ki: İnsanların Rabbine sığınırım,",
    "İnsanların Melik'ine (mutlak hükümdarına),",
    "İnsanların İlâh'ına,",
    "O sinsi vesvesecinin şerrinden,",
    "O ki, insanların göğüslerine vesvese verir,",
    "Gerek cinlerden, gerek insanlardan (olan bütün vesvesecilerin şerrinden Allah'a sığınırım)."
  ]
};
window.onload = function() {
  listeyiOlustur();
  zikirListesiOlustur();
  esmaListesiOlustur();
  favoriListesiOlustur();
  hadisListesiOlustur();
};
/* ============================================
   📖 40 HADİS (Kütüb-i Sitte'den)
   ============================================ */
var hadisler = [
  {
    id: 1,
    okunus: "İnnemel a'mâlü bin niyyât. Ve innemâ li küllimriin mâ nevâ.",
    anlam: "Ameller niyetlere göredir. Herkese ancak niyet ettiği şey vardır.",
    kaynak: "Buhârî, Müslim"
  },
  {
    id: 2,
    okunus: "El müslimü men selimel müslimûne min lisânihî ve yedih.",
    anlam: "Müslüman, dilinden ve elinden Müslümanların emin olduğu kimsedir.",
    kaynak: "Buhârî, Müslim"
  },
  {
    id: 3,
    okunus: "Lâ yü'minü ehadüküm hattâ yühibbe li ahîhi mâ yühibbü li nefsih.",
    anlam: "Sizden biriniz kendisi için sevdiğini kardeşi için de sevmedikçe (gerçek) iman etmiş olmaz.",
    kaynak: "Buhârî, Müslim"
  },
  {
    id: 4,
    okunus: "Men kâne yü'minü billâhi vel yevmil âhiri fel yükrim câreh.",
    anlam: "Kim Allah'a ve âhiret gününe inanıyorsa, komşusuna ikram etsin.",
    kaynak: "Buhârî, Müslim"
  },
  {
    id: 5,
    okunus: "Yessirû ve lâ tu'assirû. Beşşirû ve lâ tüneffirû.",
    anlam: "Kolaylaştırın, zorlaştırmayın. Müjdeleyin, nefret ettirmeyin.",
    kaynak: "Buhârî, Müslim"
  },
  {
    id: 6,
    okunus: "Ed dînü nasîha. Kulnâ: Li men? Kâle: Lillâhi ve li kitâbihî ve li rasûlihî ve li eimmetil müslimîne ve âmmetihim.",
    anlam: "Din nasihattir (samimiyettir). 'Kime karşı?' diye sorduk. 'Allah'a, Kitabına, Rasûlüne, Müslümanların idarecilerine ve bütün Müslümanlara' buyurdu.",
    kaynak: "Müslim"
  },
  {
    id: 7,
    okunus: "Men lâ yerhamin nâse lâ yerhamhullâh.",
    anlam: "İnsanlara merhamet etmeyene Allah da merhamet etmez.",
    kaynak: "Buhârî, Müslim"
  },
  {
    id: 8,
    okunus: "Lâ yedhulül cennete kâtilün. Ve lâ yedhulül cennete nemmâm.",
    anlam: "Cennete katil (öldüren) girmez. Cennete söz taşıyan (koğuculuk yapan) da girmez.",
    kaynak: "Müslim"
  },
  {
    id: 9,
    okunus: "İttekuş şühha. Fe inneş şühha ehlekel men kâne kableküm.",
    anlam: "Cimrilikten sakının. Çünkü cimrilik sizden öncekileri helâk etmiştir.",
    kaynak: "Müslim"
  },
  {
    id: 10,
    okunus: "El cennetü tahte ezlâfil ümmehât.",
    anlam: "Cennet annelerin ayakları altındadır.",
    kaynak: "Nesâî, Ahmed bin Hanbel"
  },
   id: 11,
  okunus: "Men kâne yü'minü billâhi vel yevmil âhiri fel yekul hayran ev li yashut.",
  anlam: "Kim Allah'a ve âhiret gününe inanıyorsa ya hayır söylesin ya da sussun.",
  kaynak: "Buhârî, Müslim"
},
{
  id: 12,
  okunus: "Men nefese an mü'minin kürbeten min kürabid dünyâ nefesallâhü anhü kürbeten min kürabi yevmil kıyâme.",
  anlam: "Kim bir mü'minin dünya sıkıntılarından birini giderirse, Allah da onun kıyamet günü sıkıntılarından birini giderir.",
  kaynak: "Müslim"
},
{
  id: 13,
  okunus: "Men setera mü'minen seterallâhü fîd dünyâ vel âhıra.",
  anlam: "Kim bir mü'minin ayıbını örterse, Allah da onun dünya ve âhiretteki ayıbını örter.",
  kaynak: "Müslim"
},
{
  id: 14,
  okunus: "Allâhü fî aynil abdî mâ kâne abdün fî ayni ahîh.",
  anlam: "Kul, kardeşinin yardımında olduğu sürece Allah da kulun yardımındadır.",
  kaynak: "Müslim"
},
{
  id: 15,
  okunus: "Men nehece tarîkan yeltenisü fîhi ilmen nehecellâhü lehû tarîkan ilel cenneh.",
  anlam: "Kim bir ilim öğrenmek için yola çıkarsa, Allah ona cennete giden bir yol kolaylaştırır.",
  kaynak: "Müslim"
},
{
  id: 16,
  okunus: "Men kâle lâ ilâhe illallâhü muhlis an kalbihî dehale l cenneh.",
  anlam: "Kim kalpten ihlasla 'Lâ ilâhe illallâh' derse cennete girer.",
  kaynak: "Buhârî, Müslim"
},
{
  id: 17,
  okunus: "El kelimetüt tayyibetü sadakah.",
  anlam: "Güzel söz sadakadır.",
  kaynak: "Buhârî, Müslim"
},
{
  id: 18,
  okunus: "Küllü ma'rûfin sadakah.",
  anlam: "Her iyilik sadakadır.",
  kaynak: "Buhârî"
},
{
  id: 19,
  okunus: "Men dellilâ hayrin fe lehû mislü ecri fâilih.",
  anlam: "Kim bir hayra vesile olursa, ona o hayrı yapanın sevabı kadar sevap vardır.",
  kaynak: "Müslim"
},
{
  id: 20,
  okunus: "Lâ yeşkürullâhe men lâ yeşkürün nâs.",
  anlam: "İnsanlara teşekkür etmeyen, Allah'a da şükretmez.",
  kaynak: "Ebû Dâvûd, Tirmizî"
},
{
      id: 21,
  okunus: "El mü'minü lil mü'mini kel bunyâni y eşüddü şükkehû ba'dahû ba'dâ.",
  anlam: "Mü'min, mü'min için birbirini destekleyen bir bina gibidir.",
  kaynak: "Buhârî, Müslim"
},
{
  id: 22,
  okunus: "Men lâ yü'minü bi hakkıl mü'mini felâ yü'minü billâhi.",
  anlam: "Kim mü'minin hakkına riayet etmezse, Allah'a iman etmiş olmaz.",
  kaynak: "Tirmizî"
},
{
  id: 23,
  okunus: "Lâ yü'minü abdün hattâ yü'minü li cârihî mâ yü'minü li nefsih.",
  anlam: "Kişi, komşusu için kendisi için istediğini istemedikçe iman etmiş olmaz.",
  kaynak: "Buhârî"
},
{
  id: 24,
  okunus: "El hayyâü şü'betün minel îmân.",
  anlam: "Utanmak (hayâ), imanın bir şubesidir.",
  kaynak: "Buhârî, Müslim"
},
{
  id: 25,
  okunus: "Men kâle lâ ilâhe illallâhü ve kefera bimâ yü'bedü min dûnillâhi harume mâlühû ve demühû.",
  anlam: "Kim 'Lâ ilâhe illallâh' der ve Allah'tan başka tapılanları inkâr ederse, malı ve kanı haram olur.",
  kaynak: "Müslim"
},
{
  id: 26,
  okunus: "İnnel ılme yü'tâhü li yüntefe'a bih.",
  anlam: "İlim, faydalanılmak için verilir.",
  kaynak: "Buhârî"
},
{
  id: 27,
  okunus: "Men talebe ılmen li yücâriye bihıl ulemâe ve li yümâriye bihıs süfehâe ve li yestecilbe bihî vücûhen nâsi edhalehullâhün nâr.",
  anlam: "Kim ilmi, âlimlere karşı gelmek, cahillerle tartışmak ve insanların yüzünü kendisine çevirmek için öğrenirse, Allah onu cehenneme koyar.",
  kaynak: "Tirmizî, İbn Mâce"
},
{
  id: 28,
  okunus: "El cennetü dârül mü'minîn.",
  anlam: "Cennet, mü'minlerin yurdudur.",
  kaynak: "Buhârî"
},
{
  id: 29,
  okunus: "Lâ tatrukün nâse alel ebvâbi. Fe inne fîhim men lâ yecidü mâ yüf'ilü bih.",
  anlam: "İnsanların kapılarını çalmayın. Çünkü içlerinde yapacak bir şey bulamayanlar vardır.",
  kaynak: "Buhârî"
},
{
  id: 30,
  okunus: "El müslimûne şürâtü...",
  anlam: "Müslümanlar, birbirinin aynasıdır.",
  kaynak: "Ebû Dâvûd"
},
{
  id: 31,
  okunus: "İnne fîl cesedi mudgaten izâ salühat salühal cesedü küllüh. E lâ ve hiye l kalb.",
  anlam: "Bedende bir et parçası vardır. O iyi olursa bütün beden iyi olur. İyi bilin ki o, kalptir.",
  kaynak: "Buhârî, Müslim"
},
{
  id: 32,
  okunus: "El birru hüsnül huluk.",
  anlam: "İyilik, güzel ahlaktır.",
  kaynak: "Müslim"
},
{
  id: 33,
  okunus: "Men lâ yerhamü lâ yürham.",
  anlam: "Merhamet etmeyene merhamet edilmez.",
  kaynak: "Buhârî, Müslim"
},
{
  id: 34,
  okunus: "El kibrü besarun li hakk.",
  anlam: "Kibir, hakkı kabul etmemektir.",
  kaynak: "Müslim"
},
{
  id: 35,
  okunus: "İtteku nâre ve lev bi şıkkı temrah.",
  anlam: "Yarım hurmayla da olsa cehennem ateşinden korunun.",
  kaynak: "Buhârî, Müslim"
},
{
  id: 36,
  okunus: "Men kâne âhıru kelâmihî lâ ilâhe illallâhü dehale l cenneh.",
  anlam: "Son sözü 'Lâ ilâhe illallâh' olan kimse cennete girer.",
  kaynak: "Ebû Dâvûd"
},
{
  id: 37,
  okunus: "Lâ teğdab.",
  anlam: "Öfkelenme!",
  kaynak: "Buhârî"
},
{
  id: 38,
  okunus: "El yemînü l yemîn.",
  anlam: "Yemin, ancak Allah adına yapılır.",
  kaynak: "Nesâî"
},
{
  id: 39,
  okunus: "Sılaür rahmi ve hüsnül huluk.",
  anlam: "Akrabalık bağını korumak ve güzel ahlak.",
  kaynak: "Tirmizî"
},
{
  id: 40,
  okunus: "Ed dünyâ sicnül mü'mini ve cennetül kâfir.",
  anlam: "Dünya, mü'minin zindanı, kâfirin cennetidir.",
  kaynak: "Müslim"
},
];
     /* 📖 HADİSLER LİSTESİ */
function hadisListesiOlustur() {
  var liste = document.getElementById('hadisList');
  if (!liste) return;
  liste.innerHTML = '';

  for (var i = 0; i < hadisler.length; i++) {
    var h = hadisler[i];
    var btn = document.createElement('button');
    btn.className = 'sure-item';

    var spanNum = document.createElement('span');
    spanNum.className = 'num';
    spanNum.textContent = h.id;
    btn.appendChild(spanNum);

    var spanIsim = document.createElement('span');
    var kisaAnlam = h.anlam.length > 55 ? h.anlam.substring(0, 55) + "..." : h.anlam;
    spanIsim.textContent = kisaAnlam;
    btn.appendChild(spanIsim);

    btn.onclick = (function(hadis) {
      return function() { hadisAc(hadis.id); };
    })(h);

    liste.appendChild(btn);
  }
}

/* 📖 HADİS AÇ */
function hadisAc(id) {
  var h = null;
  for (var i = 0; i < hadisler.length; i++) {
    if (hadisler[i].id === id) { h = hadisler[i]; break; }
  }
  if (!h) return;

  var html = '';
  html += '<h2 class="sure-title">📖 ' + h.id + '. Hadis</h2>';

  html += '<div class="section">';
  html += '<h3>🔤 Okunuş</h3>';
  html += '<div class="reading">' + h.okunus + '</div>';
  html += '</div>';

  html += '<div class="section">';
  html += '<h3>💡 Anlam</h3>';
  html += '<div class="meaning">' + h.anlam + '</div>';
  html += '</div>';

  html += '<div class="section" style="border-left-color:#a8a88a;">';
  html += '<h3>📚 Kaynak</h3>';
  html += '<div class="meaning" style="color:#a8a88a;">' + h.kaynak + '</div>';
  html += '</div>';

  document.getElementById('hadisContent').innerHTML = html;
  showPage('hadisDetay');
}
/* ============================================
   🕌 ESMA-ÜL HÜSNA - 99 İsim
   ============================================ */

var esmaListesi = [
  { id: 1, isim: "Allah", anlam: "Bütün eksikliklerden uzak, eşi benzeri bulunmayan, bütün isimleri kapsayan tek isim, tek ilah. İsimlerin sultanı." },
  { id: 2, isim: "Er-Rahmân", anlam: "Dünyadaki bütün yaratılmışlara merhamet eden." },
  { id: 3, isim: "Er-Rahîm", anlam: "Ahirette, müminlere sonsuz ihsanda, lütufta ve ikramda bulunan." },
  { id: 4, isim: "El-Melik", anlam: "Kainatın sahibi, mülk ve saltanatı sürekli olan." },
  { id: 5, isim: "El-Kuddûs", anlam: "Her türlü eksiklikten uzak olan." },
  { id: 6, isim: "Es-Selâm", anlam: "Her tehlikeden selamete çıkaran." },
  { id: 7, isim: "El-Mü'min", anlam: "Güven veren, koruyan." },
  { id: 8, isim: "El-Müheymin", anlam: "Her şeyi gören gözeten." },
  { id: 9, isim: "El-Azîz", anlam: "İzzet sahibi, her şeyin galibi." },
  { id: 10, isim: "El-Cebbâr", anlam: "Kudret ve azamet sahibi." },
  { id: 11, isim: "El-Mütekebbir", anlam: "Büyüklükte eşi ve benzeri olmayan." },
  { id: 12, isim: "El-Hâlık", anlam: "Yaratan." },
  { id: 13, isim: "El-Bâri", anlam: "Her şeyi uyumlu ve kusursuz yaratan." },
  { id: 14, isim: "El-Musavvir", anlam: "Varlıklara şekillerini veren." },
  { id: 15, isim: "El-Gaffâr", anlam: "Çok mağfiret eden." },
  { id: 16, isim: "El-Kahhâr", anlam: "Her şeye hakim ve galip olan." },
  { id: 17, isim: "El-Vehhâb", anlam: "Karşılıksız hibeler veren." },
  { id: 18, isim: "Er-Rezzâk", anlam: "Rızkını veren." },
  { id: 19, isim: "El-Fettâh", anlam: "Darlıktan kurtaran." },
  { id: 20, isim: "El-Alîm", anlam: "Her şeyi en küçük detaylarını bilen." },
  { id: 21, isim: "El-Kâbıd", anlam: "Dilediğine darlık veren." },
  { id: 22, isim: "El-Bâsıt", anlam: "Dilediğine bolluk veren." },
  { id: 23, isim: "El-Hâfıd", anlam: "Dereceleri alçaltan." },
  { id: 24, isim: "Er-Râfi", anlam: "Şeref vererek yükselten." },
  { id: 25, isim: "El-Mu'ız", anlam: "Dilediğini aziz eden." },
  { id: 26, isim: "El-Müzil", anlam: "Dilediğini zillete düşüren." },
  { id: 27, isim: "Es-Semî", anlam: "Her şeyi işiten." },
  { id: 28, isim: "El-Basîr", anlam: "Her şeyi en iyi gören." },
  { id: 29, isim: "El-Hakem", anlam: "Mutlak hakim olan, hikmetle hükmeden." },
  { id: 30, isim: "El-Adl", anlam: "Mutlak adil olan." },
  { id: 31, isim: "El-Latîf", anlam: "Bütün incelikleri bilen." },
  { id: 32, isim: "El-Habîr", anlam: "Her şeyden haberdar." },
  { id: 33, isim: "El-Halîm", anlam: "Cezada acele etmeyen." },
  { id: 34, isim: "El-Azîm", anlam: "Pek yüce." },
  { id: 35, isim: "El-Gafûr", anlam: "Mağfireti bol." },
  { id: 36, isim: "Eş-Şekûr", anlam: "Çok sevap veren." },
  { id: 37, isim: "El-Aliyy", anlam: "Yüceler yücesi." },
  { id: 38, isim: "El-Kebîr", anlam: "Çok büyük olan." },
  { id: 39, isim: "El-Hafîz", anlam: "Her şeyi koruyup gözeten." },
  { id: 40, isim: "El-Mukît", anlam: "Her canlının rızkını veren." },
  { id: 41, isim: "El-Hasîb", anlam: "Her şeyin hesabını gören." },
  { id: 42, isim: "El-Celîl", anlam: "Celâl ve azamet sahibi." },
  { id: 43, isim: "El-Kerîm", anlam: "Cömertliği bol olan." },
  { id: 44, isim: "Er-Rakîb", anlam: "Her şeyi gözetleyen." },
  { id: 45, isim: "El-Mucîb", anlam: "Dualara cevap veren." },
  { id: 46, isim: "El-Vâsi'", anlam: "İlmi ve rahmeti geniş olan." },
  { id: 47, isim: "El-Hakîm", anlam: "Hikmet sahibi." },
  { id: 48, isim: "El-Vedûd", anlam: "Kullarını çok seven, sevilmeye layık olan." },
  { id: 49, isim: "El-Mecîd", anlam: "Şanı yüce olan." },
  { id: 50, isim: "El-Bâis", anlam: "Ölüleri dirilten." },
  { id: 51, isim: "Eş-Şehîd", anlam: "Her şeye şahit olan." },
  { id: 52, isim: "El-Hakk", anlam: "Varlığı hak olan." },
  { id: 53, isim: "El-Vekîl", anlam: "Kendisine tevekkül edilen." },
  { id: 54, isim: "El-Kaviyy", anlam: "Çok güçlü olan." },
  { id: 55, isim: "El-Metîn", anlam: "Çok sağlam olan." },
  { id: 56, isim: "El-Veliyy", anlam: "Dost ve yardımcı olan." },
  { id: 57, isim: "El-Hamîd", anlam: "Övgüye layık olan." },
  { id: 58, isim: "El-Muhsî", anlam: "Her şeyi tek tek sayan." },
  { id: 59, isim: "El-Mübdî", anlam: "Yaratmaya başlayan." },
  { id: 60, isim: "El-Muîd", anlam: "Yaratılışı tekrar eden." },
  { id: 61, isim: "El-Muhyî", anlam: "Hayat veren." },
  { id: 62, isim: "El-Mümît", anlam: "Ölümü yaratan." },
  { id: 63, isim: "El-Hayy", anlam: "Diri olan." },
  { id: 64, isim: "El-Kayyûm", anlam: "Her şeyi ayakta tutan." },
  { id: 65, isim: "El-Vâcid", anlam: "Dilediğini bulan." },
  { id: 66, isim: "El-Mâcid", anlam: "Şanı yüce olan." },
  { id: 67, isim: "El-Vâhid", anlam: "Tek olan." },
  { id: 68, isim: "Es-Samed", anlam: "Her şeyin kendisine muhtaç olduğu." },
  { id: 69, isim: "El-Kâdir", anlam: "Gücü yeten." },
  { id: 70, isim: "El-Muktedir", anlam: "Dilediğini yapan." },
  { id: 71, isim: "El-Mukaddim", anlam: "Dilediğini öne alan." },
  { id: 72, isim: "El-Muahhir", anlam: "Dilediğini geriye bırakan." },
  { id: 73, isim: "El-Evvel", anlam: "Başlangıcı olmayan." },
  { id: 74, isim: "El-Âhir", anlam: "Sonu olmayan." },
  { id: 75, isim: "Ez-Zâhir", anlam: "Varlığı apaçık olan." },
  { id: 76, isim: "El-Bâtın", anlam: "Gizli olan." },
  { id: 77, isim: "El-Vâlî", anlam: "Kainatı yöneten." },
  { id: 78, isim: "El-Müteâlî", anlam: "Yüceler yücesi." },
  { id: 79, isim: "El-Berr", anlam: "İyilik ve ihsan sahibi." },
  { id: 80, isim: "Et-Tevvâb", anlam: "Tövbeleri kabul eden." },
  { id: 81, isim: "El-Müntakim", anlam: "Zalimlerden intikam alan." },
  { id: 82, isim: "El-Afüvv", anlam: "Affı çok olan." },
  { id: 83, isim: "Er-Raûf", anlam: "Çok şefkatli olan." },
  { id: 84, isim: "Mâlikü'l-Mülk", anlam: "Mülkün gerçek sahibi." },
  { id: 85, isim: "Zü'l-Celâli ve'l-İkrâm", anlam: "Azamet ve ikram sahibi." },
  { id: 86, isim: "El-Muksit", anlam: "Adaletle hükmeden." },
  { id: 87, isim: "El-Câmi'", anlam: "Toplayan." },
  { id: 88, isim: "El-Ganiyy", anlam: "Zengin olan." },
  { id: 89, isim: "El-Muğnî", anlam: "Zengin kılan." },
  { id: 90, isim: "El-Mâni'", anlam: "Engelleyen." },
  { id: 91, isim: "Ed-Dârr", anlam: "Zarar verebilen." },
  { id: 92, isim: "En-Nâfi'", anlam: "Fayda veren." },
  { id: 93, isim: "En-Nûr", anlam: "Nur veren." },
  { id: 94, isim: "El-Hâdî", anlam: "Hidayet veren." },
  { id: 95, isim: "El-Bedî'", anlam: "Örneksiz yaratan." },
  { id: 96, isim: "El-Bâkî", anlam: "Varlığı sonsuz olan." },
  { id: 97, isim: "El-Vâris", anlam: "Her şeyin gerçek sahibi." },
  { id: 98, isim: "Er-Reşîd", anlam: "Doğru yolu gösteren." },
  { id: 99, isim: "Es-Sabûr", anlam: "Çok sabırlı olan." }
];
   function esmaListesiOlustur() {
  var liste = document.getElementById('esmaList');
  if (!liste) return;
  liste.innerHTML = '';

  for (var i = 0; i < esmaListesi.length; i++) {
    var e = esmaListesi[i];
    var btn = document.createElement('button');
    btn.className = 'sure-item';

    var spanNum = document.createElement('span');
    spanNum.className = 'num';
    spanNum.textContent = e.id;
    btn.appendChild(spanNum);

    var spanIsim = document.createElement('span');
    spanIsim.textContent = e.isim;
    btn.appendChild(spanIsim);

    btn.onclick = (function(esma) {
      return function() { esmaAc(esma.id); };
    })(e);

    liste.appendChild(btn);
  }
}

function esmaAc(id) {
  var e = null;
  for (var i = 0; i < esmaListesi.length; i++) {
    if (esmaListesi[i].id === id) { e = esmaListesi[i]; break; }
  }
  if (!e) return;

  var html = '';
  html += '<h2 class="sure-title">' + e.isim + '</h2>';
  html += '<div class="section">';
  html += '<h3>💡 Anlamı</h3>';
  html += '<div class="meaning">' + e.anlam + '</div>';
  html += '</div>';

  document.getElementById('esmaContent').innerHTML = html;
  showPage('esmaDetay');
}
/* ============================================
   🔗 PAYLAŞIM
   ============================================ */

function paylasimAc() {
  var menu = document.getElementById('paylasMenu');
  if (menu) menu.classList.add('acik');
}

function paylasimKapat() {
  var menu = document.getElementById('paylasMenu');
  if (menu) menu.classList.remove('acik');
}

function sayfaLinki() {
  return window.location.href;
}

function sayfaBasligi() {
  return "Hûdâ Beşâir - Hidayet Müjdecisi";
}

function paylasWhatsApp() {
  var url = "https://wa.me/?text=" + encodeURIComponent(sayfaBasligi() + "\n" + sayfaLinki());
  window.open(url, '_blank');
  paylasimKapat();
}

function paylasTelegram() {
  var url = "https://t.me/share/url?url=" + encodeURIComponent(sayfaLinki()) + "&text=" + encodeURIComponent(sayfaBasligi());
  window.open(url, '_blank');
  paylasimKapat();
}

function paylasTwitter() {
  var url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(sayfaBasligi()) + "&url=" + encodeURIComponent(sayfaLinki());
  window.open(url, '_blank');
  paylasimKapat();
}

function paylasFacebook() {
  var url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(sayfaLinki());
  window.open(url, '_blank');
  paylasimKapat();
}

function paylasKopyala() {
  var link = sayfaLinki();

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(link).then(function() {
      toastGoster("📋 Bağlantı kopyalandı!");
      paylasimKapat();
    }).catch(function() {
      kopyalaEskiYontem(link);
    });
  } else {
    kopyalaEskiYontem(link);
  }
}

function kopyalaEskiYontem(metin) {
  var input = document.createElement('input');
  input.value = metin;
  input.style.position = 'fixed';
  input.style.opacity = '0';
  document.body.appendChild(input);
  input.select();
  try {
    document.execCommand('copy');
    toastGoster("📋 Bağlantı kopyalandı!");
  } catch (e) {
    alert("Bağlantı: " + metin);
  }
  document.body.removeChild(input);
  paylasimKapat();
}

function toastGoster(mesaj) {
  var eski = document.querySelector('.toast');
  if (eski) eski.remove();

  var toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = mesaj;
  document.body.appendChild(toast);

  setTimeout(function() { toast.classList.add('goster'); }, 50);

  setTimeout(function() {
    toast.classList.remove('goster');
    setTimeout(function() { toast.remove(); }, 400);
  }, 2200);
     }
/* Menüye tıklayınca kapatma (arka plana tıklayınca) */
document.addEventListener('click', function(e) {
  var menu = document.getElementById('paylasMenu');
  if (menu && e.target === menu) {
    paylasimKapat();
  }
});
/* ============================================
   ⭐ FAVORİLER SİSTEMİ
   ============================================ */

var favoriAnahtar = "hudaBesairFavoriler";

function favorileriAl() {
  try {
    var kayit = localStorage.getItem(favoriAnahtar);
    if (kayit) return JSON.parse(kayit);
  } catch (e) {}
  return { sureler: [], zikirler: [], esma: [] };
}

function favorileriKaydet(fav) {
  try {
    localStorage.setItem(favoriAnahtar, JSON.stringify(fav));
  } catch (e) {}
}

function favoriMi(tur, id) {
  var fav = favorileriAl();
  if (!fav[tur]) return false;
  for (var i = 0; i < fav[tur].length; i++) {
    if (fav[tur][i] == id) return true;
  }
  return false;
}

function favoriDegistir(tur, id, isim, buton) {
  var fav = favorileriAl();
  if (!fav[tur]) fav[tur] = [];

  var index = -1;
  for (var i = 0; i < fav[tur].length; i++) {
    if (fav[tur][i] == id) { index = i; break; }
  }

  if (index >= 0) {
    fav[tur].splice(index, 1);
    if (buton) buton.textContent = "☆";
    toastGoster("☆ Favoriden çıkarıldı");
  } else {
    fav[tur].push(id);
    if (buton) buton.textContent = "⭐";
    toastGoster("⭐ Favorilere eklendi");
  }

  favorileriKaydet(fav);
}

function favoriButonu(tur, id) {
  var aktif = favoriMi(tur, id);
  var yildiz = aktif ? "⭐" : "☆";
  return '<button class="favori-btn" onclick="event.stopPropagation(); favoriTikla(\'' + tur + '\', ' + id + ', this)" title="Favorilere ekle">' + yildiz + '</button>';
}

function favoriTikla(tur, id, buton) {
  favoriDegistir(tur, id, "", buton);
}

/* Favoriler sayfasını oluştur */
function favoriListesiOlustur() {
  var liste = document.getElementById('favoriList');
  var bosMesaj = document.getElementById('favoriBos');
  if (!liste) return;

  var fav = favorileriAl();
  liste.innerHTML = '';

  var toplam = 0;

  // Sûreler
  if (fav.sureler && fav.sureler.length > 0) {
    for (var i = 0; i < fav.sureler.length; i++) {
      var id = fav.sureler[i];
      var isim = "";
      for (var j = 0; j < kisaSureler.length; j++) {
        if (kisaSureler[j].id == id) { isim = kisaSureler[j].isim; break; }
      }
      if (isim) {
        var btn = document.createElement('button');
        btn.className = 'sure-item';
        btn.innerHTML = '<span class="num">📖</span><span>' + isim + '</span>' + favoriButonu('sureler', id);
        btn.onclick = (function(sira) {
          return function() { sureAc(sira); };
        })(id);
        liste.appendChild(btn);
        toplam++;
      }
    }
  }

  // Zikirler
  if (fav.zikirler && fav.zikirler.length > 0) {
    for (var k = 0; k < fav.zikirler.length; k++) {
      var zid = fav.zikirler[k];
      var zisim = "";
      for (var m = 0; m < zikirler.length; m++) {
        if (zikirler[m].id == zid) { zisim = zikirler[m].isim; break; }
      }
      if (zisim) {
        var zbtn = document.createElement('button');
        zbtn.className = 'sure-item';
        zbtn.innerHTML = '<span class="num">📿</span><span>' + zisim + '</span>' + favoriButonu('zikirler', zid);
        zbtn.onclick = (function(zikirId) {
          return function() { zikirAc(zikirId); };
        })(zid);
        liste.appendChild(zbtn);
        toplam++;
      }
    }
  }

  // Esma
  if (fav.esma && fav.esma.length > 0) {
    for (var n = 0; n < fav.esma.length; n++) {
      var eid = fav.esma[n];
      var eisim = "";
      for (var p = 0; p < esmaListesi.length; p++) {
        if (esmaListesi[p].id == eid) { eisim = esmaListesi[p].isim; break; }
      }
      if (eisim) {
        var ebtn = document.createElement('button');
        ebtn.className = 'sure-item';
        ebtn.innerHTML = '<span class="num">🕌</span><span>' + eisim + '</span>' + favoriButonu('esma', eid);
        ebtn.onclick = (function(esmaId) {
          return function() { esmaAc(esmaId); };
        })(eid);
        liste.appendChild(ebtn);
        toplam++;
      }
    }
  }

  if (toplam === 0) {
    liste.style.display = 'none';
    if (bosMesaj) bosMesaj.style.display = 'block';
  } else {
    liste.style.display = 'grid';
    if (bosMesaj) bosMesaj.style.display = 'none';
  }
}
