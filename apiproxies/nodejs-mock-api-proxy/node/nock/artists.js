
module.exports = {
  artists : artists
}

function artists(nock){
var options = {allowUnmocked: true};
nock('http://lyrics.wikia.com:80', options)
  .persist()
  .get('/api.php?artist=radiohead&fmt=json')
  .reply(200, {"artist":"Radiohead","albums":[{"album":"Pablo Honey","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Pablo%20Honey","songs":["You","Creep","How Do You?","Stop Whispering","Thinking About You","Anyone Can Play Guitar","Ripcord","Vegetable","Prove Yourself","I Can't","Lurgee","Blow Out","Creep (Clean)"]},{"album":"Itch","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Itch","songs":["Stop Whispering","Thinking About You","Faithless, The Wonder Boy","Banana Co.","Killer Cars","Vegetable","You","Creep"]},{"album":"My Iron Lung","year":"1994","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20My%20Iron%20Lung","songs":["My Iron Lung","The Trickster","Lewis (Mistreated)","Punchdrunk Lovesick Singalong","Permanent Daylight","Lozenge Of Love","You Never Wash Up After Yourself","Creep"]},{"album":"The Bends","year":"1995","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20Bends","songs":["Planet Telex","The Bends","High And Dry","Fake Plastic Trees","Bones","(Nice Dream)","Just","My Iron Lung","Bullet Proof..I Wish I Was","Black Star","Sulk","Street Spirit (Fade Out)"]},{"album":"OK Computer","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20OK%20Computer","songs":["Airbag","Paranoid Android","Subterranean Homesick Alien","Exit Music (For A Film)","Let Down","Karma Police","Fitter Happier","Electioneering","Climbing Up The Walls","No Surprises","Lucky","The Tourist"]},{"album":"No Surprises/Running From Demons","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20No%20Surprises/Running%20From%20Demons","songs":["No Surprises","Pearly*","Melatonin","Meeting In The Aisle","Bishop's Robes","A Reminder"]},{"album":"Airbag/How Am I Driving?","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Airbag/How%20Am%20I%20Driving?","songs":["Airbag","Pearly*","Meeting In The Aisle","A Reminder","Polyethylene (Parts 1 & 2)","Melatonin","Palo Alto"]},{"album":"Kid A","year":"2000","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Kid%20A","songs":["Everything In Its Right Place","Kid A","The National Anthem","How To Disappear Completely","Treefingers","Optimistic","In Limbo","Idioteque","Morning Bell","Motion Picture Soundtrack"]},{"album":"Amnesiac","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Amnesiac","songs":["Packt Like Sardines In A Crushd Tin Box","Pyramid Song","Pulk/Pull Revolving Doors","You And Whose Army?","I Might Be Wrong","Knives Out","Morning Bell/Amnesiac","Dollars & Cents","Hunting Bears","Like Spinning Plates","Life In A Glasshouse"]},{"album":"Hail To The Thief","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Hail%20To%20The%20Thief","songs":["2 + 2 = 5 (The Lukewarm.)","Sit Down. Stand Up. (Snakes & Ladders.)","Sail To The Moon. (Brush The Cobwebs Out Of The Sky.)","Backdrifts. (Honeymoon Is Over.)","Go To Sleep. (Little Man Being Erased.)","Where I End And You Begin. (The Sky Is Falling In.)","We Suck Young Blood. (Your Time Is Up.)","The Gloaming. (Softly Open Our Mouths In The Cold.)","There There. (The Boney King Of Nowhere.)","I Will. (No Man's Land.)","A Punchup At A Wedding. (No No No No No No No No.)","Myxomatosis. (Judge, Jury & Executioner.)","Scatterbrain. (As Dead As Leaves.)","A Wolf At The Door. (It Girl. Rag Doll.)"]},{"album":"In Rainbows","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20In%20Rainbows","songs":["15 Step","Bodysnatchers","Nude","Weird Fishes/Arpeggi","All I Need","Faust Arp","Reckoner","House Of Cards","Jigsaw Falling Into Place","Videotape","MK 1","Down Is The New Up","Go Slowly","MK 2","Last Flowers","Up On The Ladder","Bangers + Mash","4 Minute Warning"]},{"album":"The King Of Limbs","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20The%20King%20Of%20Limbs","songs":["Bloom","Morning Mr Magpie","Little By Little","Feral","Lotus Flower","Codex","Give Up The Ghost","Separator"]},{"album":"B-Sides","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20B-Sides","songs":["Inside My Head","Million Dollar Question","Yes I Am","Coke Babies","Maquiladora","India Rubber","How Can You Be Sure?","Talk Show Host","Bishop's Robes","Molasses","Lull","How I Made My Millions","The Amazing Sounds Of Orgy","Trans-Atlantic Drawl","Kinetic","Fast-Track","Cuttooth","Worrywort","Fog","Paperbag Writer","Where Bluebirds Fly","Fog (Again)","Gagging Order","I Am A Wicked Child","I Am Citizen Insane"]},{"album":"Unreleased","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Unreleased","songs":["Big Boots","The Chains","Climbing Up A Bloody Great Hill","Cut A Hole","The Daily Mail","Feeling Pulled Apart By Horses (AKA Reckoner Old Version)","Follow Me Around","Give It Up","Happy Song","Identikit","I Froze Up","Innocents Civilian","I Promise","I Want None Of This","Lift","Nobody Does It Better","No Surprises Please","Nothing Touches Me","Phillipa Chicken","The Present Tense","Rattlesnake","The Rip","Sinking Ship","Spooks","Staircase","Stupid Car","Tell Me Why","To Be A Brilliant Light","True Love Waits","Union City Blue","Unravel"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Radiohead%20Other%20Songs","songs":["Cinnamon Girl (Neil Young Cover)","Good Evening Mrs. Magpie","Harry Patch (In Memory Of)","Man-O-War","Pop Is Dead","Remyxomatosis","Supercollider","The Butcher","These Are My Twisted Words","What Is It That You Say"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '7476',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 16:14:40 GMT',
  age: '18',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6220-ATL',
  'x-cache': 'HIT, MISS',
  'x-cache-hits': '1, 0',
  'x-timer': 'S1427818479.991385,VS0,VE64',
  'x-nock' : 'true',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=VXdGsVIqGL; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 16:14:40 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

nock('http://lyrics.wikia.com:80', options)
  .persist()
  .get('/api.php?artist=depeche%20mode&fmt=json')
  .reply(200, {"artist":"Depeche Mode","albums":[{"album":"Speak & Spell","year":"1981","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche%20Mode%20Speak%20&%20Spell","songs":["New Life","I Sometimes Wish I Was Dead","Puppets","Boys Say Go!","Nodisco","What's Your Name","Photographic","Tora! Tora! Tora!","Big Muff","Any Second Now (Voices)","Just Can't Get Enough","Dreaming Of Me","Ice Machine","Shout","Any Second Now","Just Can't Get Enough"]},{"album":"A Broken Frame","year":"1982","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche%20Mode%20A%20Broken%20Frame","songs":["Leave In Silence","My Secret Garden","Monument","Nothing To Fear","See You","Satellite","The Meaning Of Love","Further Excerpts From: My Secret Garden","A Photograph Of You","Shouldn't Have Done That","The Sun And The Rainfall"]},{"album":"Construction Time Again","year":"1983","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche%20Mode%20Construction%20Time%20Again","songs":["Love, In Itself","More Than A Party","Pipeline","Everything Counts","Two Minute Warning","Shame","The Landscape Is Changing","Told You So","And Then...","Everything Counts (Reprise)","Everything Counts (Long Version)"]},{"album":"Some Great Reward","year":"1984","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche%20Mode%20Some%20Great%20Reward","songs":["Something To Do","Lie To Me","People Are People","It Doesn't Matter","Stories Of Old","Somebody","Master And Servant","If You Want","Blasphemous Rumours"]},{"album":"The Singles 81-85","year":"1985","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche%20Mode%20The%20Singles%2081-85","songs":["Dreaming Of Me","New Life","Just Can't Get Enough","See You","The Meaning Of Love","Leave In Silence","Get The Balance Right","Everything Counts","Love, In Itself","People Are People","Master And Servant","Blasphemous Rumours","Somebody","Shake The Disease","It's Called A Heart","Photographic (Some Bizzare Version)"]},{"album":"Catching Up With Depeche Mode","year":"1985","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche%20Mode%20Catching%20Up%20With%20Depeche%20Mode","songs":["Dreaming Of Me","New Life","Just Can't Get Enough","See You","The Meaning Of Love","Love, In Itself","Master And Servant","Blasphemous Rumours","Somebody","Shake The Disease","Flexible","It's Called A Heart","Fly On The Windscreen"]},{"album":"Black Celebration","year":"1986","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche%20Mode%20Black%20Celebration","songs":["Black Celebration","Fly On The Windscreen","A Question Of Lust","Sometimes","It Doesn't Matter Two","A Question Of Time","Stripped","Here Is The House","World Full Of Nothing","Dressed In Black","New Dress","But Not Tonight","Breathing In Fumes","Black Day"]},{"album":"Music For The Masses","year":"1987","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche%20Mode%20Music%20For%20The%20Masses","songs":["Never Let Me Down Again","The Things You Said","Strangelove","Sacred","Little 15","Behind The Wheel","I Want You Now","To Have And To Hold","Nothing","Pimpf","Agent Orange","Never Let Me Down Again (Aggro Mix)","To Have And To Hold (Spanish Taster)","Pleasure Little Treasure"]},{"album":"101","year":"1989","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche%20Mode%20101","songs":["Pimpf","Behind The Wheel","Strangelove","Sacred","Something To Do","Blasphemous Rumours","Stripped","Somebody","The Things You Said","Black Celebration","Shake The Disease","Nothing","Pleasure Little Treasure","People Are People","A Question Of Time","Never Let Me Down Again","A Question Of Lust","Master And Servant","Just Can't Get Enough","Everything Counts"]},{"album":"Violator","year":"1990","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche%20Mode%20Violator","songs":["World In My Eyes","Sweetest Perfection","Personal Jesus","Halo","Waiting For The Night","Enjoy The Silence","Policy Of Truth","Blue Dress","Clean"]},{"album":"Singles Box","year":"1991","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche%20Mode%20Singles%20Box","songs":["Dreaming Of Me","New Life","Just Can't Get Enough","See You","The Meaning Of Love","Leave In Silence","Little 15"]},{"album":"Songs Of Faith And Devotion","year":"1993","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche%20Mode%20Songs%20Of%20Faith%20And%20Devotion","songs":["I Feel You","Walking In My Shoes","Condemnation","Mercy In You","Judas","In Your Room","Get Right With Me","Rush","One Caress","Higher Love"]},{"album":"Ultra","year":"1997","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche%20Mode%20Ultra","songs":["Barrel Of A Gun","The Love Thieves","Home","It's No Good","Uselink","Useless","Sister Of Night","Jazz Thieves","Freestate","The Bottom Line","Insight","Junior Painkiller"]},{"album":"The Singles 86-98","year":"1998","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche%20Mode%20The%20Singles%2086-98","songs":["Stripped","A Question Of Lust","A Question Of Time","Strangelove","Never Let Me Down Again","Behind The Wheel","Personal Jesus","Enjoy The Silence","Policy Of Truth","World In My Eyes","I Feel You","Walking In My Shoes","Condemnation","In Your Room","Barrel Of A Gun","It's No Good","Home","Useless","Only When I Lose Myself","Little 15","Everything Counts (Live)"]},{"album":"Exciter","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche%20Mode%20Exciter","songs":["Dream On","Shine","The Sweetest Condition","When The Body Speaks","The Dead Of Night","Lovetheme","Freelove","Comatose","I Feel Loved","Breathe","Easy Tiger","I Am You","Goodnight Lovers"]},{"album":"Playing The Angel","year":"2005","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche%20Mode%20Playing%20The%20Angel","songs":["A Pain That I'm Used To","John The Revelator","Suffer Well","The Sinner In Me","Precious","Macro","I Want It All","Nothing's Impossible","Introspectre","Damaged People","Lilian","The Darkest Star"]},{"album":"The Best Of, Volume 1","year":"2006","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche%20Mode%20The%20Best%20Of,%20Volume%201","songs":["Personal Jesus","Just Can't Get Enough","Everything Counts","Enjoy The Silence","Shake The Disease","See You","It's No Good","Strangelove","Suffer Well","Dream On","People Are People","Martyr","Walking In My Shoes","I Feel You","Precious","Master And Servant","New Life","Never Let Me Down Again"]},{"album":"Sounds Of The Universe","year":"2009","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche%20Mode%20Sounds%20Of%20The%20Universe","songs":["In Chains","Hole To Feed","Wrong","Fragile Tension","Little Soul","In Sympathy","Peace","Come Back","Spacewalker","Perfect","Miles Away/The Truth Is","Jezebel","Corrupt","Light","The Sun And The Moon And The Stars","Ghost","Esque","Oh Well"]},{"album":"Delta Machine","year":"2013","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche%20Mode%20Delta%20Machine","songs":["Welcome To My World","Angel","Heaven","Secret To The End","My Little Universe","Slow","Broken","The Child Inside","Soft Touch/Raw Nerve","Should Be Higher","Alone","Soothe My Soul","Goodbye","Long Time Lie","Happens All The Time","Always","All That's Mine"]},{"album":" Songs from Compilations and Soundtracks","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche_Mode%20%20Songs%20from%20Compilations%20and%20Soundtracks","songs":["Death's Door","So Cruel"]},{"album":"B-Sides and Unreleased Tracks","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche_Mode%20B-Sides%20and%20Unreleased%20Tracks","songs":["Are People People?","Better Days","Christmas Island","Dangerous","Dirt","Excerpt From: My Secret Garden","Fools","Fpmip","Free","Further Excerpts From: My Secret Garden","Happiest Girl","Headstar","I Like It","In Your Memory","Junior Painkiller","Kaleid","Memphisto","My Joy","Newborn","Now, This Is Fun","Oberkorn (It's A Small Town)","Painkiller","Pleasure, Little Treasure","Reason Man","Route 66","Sea Of Sin","(Set Me Free) Remotivate Me","Sibeling","Slowblow","Sonata No. 14 In C Sharp Minor \"Moonlight Sonata\"","Stjarna","Surrender","Television Set","The Great Outdoors!","The Price Of Love","Zenstation"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Depeche_Mode%20Other%20Songs","songs":["A Question Of Lust (Minimal)","Addiction","Behind The Wheel/Route 66","Enjoy The Silence 2004","Enjoy The Silence Dance Mix","I Promise You I Will","It Doesn't Matter Two (Instrumental)","Now This Is Fun (Extended Version)","Tomorrow's Dance","Word In My Eyes","Work Hard"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '11329',
  'accept-ranges': 'bytes',
  date: 'Tue, 31 Mar 2015 17:35:59 GMT',
  age: '6031',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3161-WIKIA, cache-atl6234-ATL',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '1, 1',
  'x-timer': 'S1427823359.607343,VS0,VE2',
  'x-nock' : 'true',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=G0iD6EFpAX; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 17:35:59 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

nock('http://lyrics.wikia.com:80', options)
  .persist()
  .get('/api.php?artist=juanes&fmt=json')
  .reply(200, {"artist_fake":"Juanes","albums":[{"album":"Fijate Bien","year":"2001","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Juanes%20Fijate%20Bien","songs":["Ahí Le Va","Para Ser Eterno","Volcán","Podemos Hacernos Daño","Destino","Nada","Fíjate Bien","Vulnerable","Soñador","Ficción","Para Que","Me Da Igual","De Madrugada","Sin Rencores","Solo","Raza","La Decisión","La Tierra"]},{"album":"Un Día Normal","year":"2003","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Juanes%20Un%20Día%20Normal","songs":["A Dios Le Pido","Es Por Tí","Un Día Normal","La Paga","La Unica","Luna","Día Lejano","Mala Gente","Fotografía","Desde Que Despierto","La Historia De Juan","La Noche"]},{"album":"Mi Sangre","year":"2004","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Juanes%20Mi%20Sangre","songs":["Amame","Para Tu Amor","Sueños","La Camisa Negra","Nada Valgo Sin Tu Amor","No Siento Penas","Dámelo","Lo Que Me Gusta A Mí","Rosario Tijeras","¿Qué Pasa?","Volverte A Ver","Tu Guardián"]},{"album":"La Vida... Es Un Ratico","year":"2007","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Juanes%20La%20Vida...%20Es%20Un%20Ratico","songs":["No Creo En El Jamás","Clase De Amor","Me Enamora","Hoy Me Voy","La Vida Es Un Ratico","Gotas De Agua Dulce","La Mejor Parte De Mi","Minas Piedras","Tú Y Yo","Báilala","Difícil","Tres","Bandera De Manos","Hoy Me Voy"]},{"album":"La Vida... Es Un Ratico En Vivo","year":"2008","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Juanes%20La%20Vida...%20Es%20Un%20Ratico%20En%20Vivo","songs":["Odio Por Amor","Falsas Palabras","No Creo En El Jamás","Clase De Amor","Me Enamora","Hoy Me Voy","La Vida... Es Un Ratico","Gotas De Agua Dulce","La Mejor Parte De Mí","Minas Piedras","Tú Y Yo","Báilala","Difícil","Tres","Bandera De Manos","Bandera De Manos","Hoy Me Voy","Clase De Amor","Bandera De Manos","Nada Valgo Sin Tu Amor","Me Enamora","Báilala","Hoy Me Voy","Rebelión"]},{"album":"P.A.R.C.E.","year":"2011","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Juanes%20P.A.R.C.E.","songs":["Amigos","Yerbatero","La Soledad","La Razón","Segovia","El Amor Lo Cura Todo","Todos Los Días","Y No Regresas","Lo Nuestro","Esta Noche","Quimera","Regalito"]},{"album":"Loco De Amor","year":"2014","amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Juanes%20Loco%20De%20Amor","songs":["Mil Pedazos","Loco De Amor","La Luz","La Verdad","Una Flor","Delirio","Laberinto","Persiguiendo El Sol","Corazón Invisible","Me Enamoré De Ti","Radio Elvis","Laberinto","Fenix"]},{"album":"Songs Featuring Juanes","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Juanes%20Songs%20Featuring%20Juanes","songs":["Herbie Hancock:La Tierra"]},{"album":"Other Songs","year":null,"amazonLink":"http://www.amazon.com/exec/obidos/redirect?link_code=ur2&tag=wikia-20&camp=1789&creative=9325&path=external-search%3Fsearch-type=ss%26index=music%26keyword=Juanes%20Other%20Songs","songs":["Ave María","Azul Sabina","Colombia Tierra Querida","Desde Que Despierto Hasta Que Duermo","Dificil","El Abrigo","Fotografï¿½a","La Calle","La Señal","La Vida....Es Un Ratico","La Vida...Es Un Ratico","Lo Que Importa","Mentira","Mi Libre Cancion","Mujeriego","Nada Particular","No Creo En EL Jamás","No Creo En El Jamas","Odio Oor Amor","Por Verte Otra Vez","Powerless","Soï¿½ador","Te Busque","Todo En Mi Vida Eres Tú"]}]}, { server: 'Apache',
  'x-content-type-options': 'nosniff',
  'cache-control': 'max-age=86400, s-maxage=86400, public',
  'content-type': 'text/javascript; charset=UTF-8',
  'x-cacheable': 'YES',
  'content-length': '4531',
  'accept-ranges': 'bytes',
  date: 'Tue, 30 Mar 2015 18:16:20 GMT',
  age: '961',
  connection: 'close',
  'x-served-by': 'cache-wk-sjc3160-WIKIA, cache-atl6229-ATL',
  'x-cache': 'HIT, HIT',
  'x-cache-hits': '2, 1',
  'x-timer': 'S1427825780.960399,VS0,VE0',
  'x-nock' : 'true',
  vary: 'Accept-Encoding',
  'set-cookie': 
   [ 'wikia_beacon_id=tNr8K9Kj1p; domain=.wikia.com; path=/; expires=Sun, 27 Sep 2015 18:16:20 GMT;',
     'Geo={%22city%22:%22FIXME%22%2C%22country%22:%22CA%22%2C%22continent%22:%22NA%22}; path=/' ] });

}