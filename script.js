/* ============================================
   HÛDÂ BEŞÂİR - BÖLÜM 1/2 (Veriler)
   ============================================ */

var kisaSureler = [
  { id: 1, isim: "Fâtiha Sûresi" },
  { id: 103, isim: "Asr Sûresi" },
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
  103: "Vel asr. İnnel insâne le fî husr. İllellezîne âmenû ve amilüs sâlihâti ve tevâsav bil hakkı ve tevâsav bis sabr.",
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
  { isim: "Lâ ilâhe illallâh", hedef: 100 },
  { isim: "Sübhânallâh", hedef: 33 },
  { isim: "Elhamdülillâh", hedef: 33 },
  { isim: "Allâhü ekber", hedef: 34 },
  { isim: "Estağfirullâh", hedef: 100 },
  { isim: "Allâhümme salli alâ Muhammed", hedef: 100 },
  { isim: "Lâ havle ve lâ kuvvete illâ billâh", hedef: 100 },
  { isim: "Sübhânallâhi ve bihamdihî", hedef: 100 },
  { isim: "Yâ Latîf", hedef: 100 },
  { isim: "Yâ Vedûd", hedef: 100 },
  { isim: "Yâ Fettâh", hedef: 100 },
  { isim: "Yâ Rezzâk", hedef: 100 },
  { isim: "Yâ Şâfî", hedef: 100 },
  { isim: "Yâ Kâfî", hedef: 100 },
  { isim: "Yâ Hâfız", hedef: 100 },
  { isim: "Yâ Müheymin", hedef: 100 },
  { isim: "Yâ Hakem", hedef: 100 },
  { isim: "Yâ Adl", hedef: 100 },
  { isim: "Yâ Ganî", hedef: 100 },
  { isim: "Yâ Muâfî", hedef: 100 }
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
      icer
