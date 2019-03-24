var categorie, appunti;
function caricaDaAppuntiJS() {
categorie = {"*":"*","html":"HTML","css":"CSS","bootstrap":"Bootstrap","js":"JavaScript","javascript":"JavaScript","ng":"Angular","angular":"Angular","php":"PHP","sql":"SQL","oop":"OOP","java":"Java","javafx":"JavaFX","cs":"C#","c#":"C#","git":"Git"}
appunti = {"JavaScript":[[["console","messaggio","debug"],"<mark>console.log(stringa1,&nbsp;stringa2,&nbsp;stringaN);</mark>"],[["alert","avviso","messaggio"],"<mark>window.alert(stringa);</mark>"]],"PHP":[[["echo","stampa","stringa"],"Stampa una stringa nella pagina in uscita:<br><br><mark>echo('stringa');</mark>"],[["autoload","class","spl","register"],"<mark>spl_autoload_register()</mark> permette di caricare automaticamente tutte le classi che vengono usate con la sintassi \"new Class()\". Così, non serve specificare ogni volta \"require a; require b; ...\", basta specificare una sola volta \"require '__autoload.php';\" (questo file speciale solitamente viene scritto con due underscore __ all'inizio).<br><br>N.B. Convenzione da rispettare: ciascuna classe deve stare in un singolo file ed il file deve avere lo stesso nome della classe.<br><br><h3>File:&nbsp;__autoload.php</h3><mark>&lt;?php<br>spl_autoload_register(function($nome_classe)&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Convenzione:&nbsp;un&nbsp;file&nbsp;per&nbsp;ogni&nbsp;classe,&nbsp;e&nbsp;file&nbsp;con&nbsp;stesso&nbsp;nome&nbsp;della&nbsp;classe<br>&nbsp;&nbsp;&nbsp;&nbsp;$path&nbsp;=&nbsp;$_SERVER['DOCUMENT_ROOT']&nbsp;.&nbsp;'/class/'&nbsp;.&nbsp;$nome_classe&nbsp;.&nbsp;'.php';<br>&nbsp;&nbsp;&nbsp;&nbsp;require&nbsp;$path;<br>});</mark><br><br><h3>File:&nbsp;esempio.php</h3><mark>&lt;?php<br>require&nbsp;'__autoload.php';<br><br>$esempio&nbsp;=&nbsp;new&nbsp;Esempio();<br>$istanza&nbsp;=&nbsp;new&nbsp;ClasseAutomaticamenteInclusa();<br>$unAltro&nbsp;=&nbsp;new&nbsp;NonServeIncludermi();</mark>"]],"Git":[[["utilizzo","uso","scopo"],"Git è un CVS (Sistema di Controllo di Versione) che è utile localmente ed in remoto:<br><br>- In locale: permette di avere copie di backup, mentre il lavoro avanza con nuove funzionalità. Quindi offre possibilità di recuperare versioni precedenti ed avere uno storico con tutte le modifiche commentate.<br><br>- In remoto: più sviluppatori possono collaborare e sincronizzare i loro lavori con il deposito in remoto, fondamentalmente ciò avviene tramite una logica a rami, ogni serie di modifiche viene realizzata su un ramo e questo può essere innestato sul progetto principale insieme ad altri rami. Possono coesistere anche dei rami principali dedicati alla versione stabile, di testing e di sviluppo.<br>"],[["installazione","download"],"Git è multipiattaforma e può essere scaricato dal sito ufficiale:<br><a href=\"https://git-scm.com/download\" target=\"_blank\">https://git-scm.com/download</a><br><br>In linux è disponibile nel software center.<br>"],[["configurazione"],"Ci sono 3 livelli di configurazione: tutti gli utenti (--system), singolo utente (--global), singolo progetto (cartella .git del progetto). Il livello più specifico sovrascrive quello più generale.<br><br>L'identità definita da nome ed email va inserita come prima cosa a livello utente:<br><br><mark>git config --global user.name \"Mio nome\"<br>git config --global user.email \"mia@email.it\"</mark><br><br>Per controllare le configurazioni:<br><br><mark>git config --list</mark><br><br>È possibile attivare una cache di breve durata (pochi minuti) per le credenziali, così che in una serie di invii successivi non devono essere specificate ogni volta:<br><br><mark>git config --global credential.helper cache</mark><br><br>Di default Git usa l'editor Vim, probabilmente è preferibile usare nano:<br><br><mark>git config --global core.editor \"nano\"</mark><br><br>È comodo usare delle abbreviazioni per alcuni comandi molto usati, al posto di 'commit', potremo scrivere 'cm'; al posto di 'branch', 'br'; 'checkout', 'co' e 'status', 'st':<br><br><mark>git config --global alias.co checkout<br>git config --global alias.br branch<br>git config --global alias.cm commit<br>git config --global alias.st status</mark>"],[["avviare","progetto","nuovo","init"],"Creare una cartella con il nome del progetto, collocarsi al suo interno e partire con:<br><br><mark>git init</mark><br><br>Se la cartella contiene già dei file sarà possibile inserirli come prima modifica. Per inviare il progetto e le successive modifiche ad un deposito remoto, occorre specificare l'URL del deposito:<br><br><mark>git remote add origin https://github.com/Autore/NomeDeposito</mark><br><br>- origin è il nome del deposito, può essere modificato, così da averne più di uno.<br><br>Se serve forzare un primo commit su un deposito quasi vuoto che ospiterà il progetto, possiamo cancellare tutti i commit in remoto, sovrascrivendo con il progetto locale così:<br><br><mark>git push origin master --force</mark><br>(non è un metodo elegante, bisognerebbe approfondire le tecniche di rebase)<br>"],[["clonare","progetto"],"Recuperare l'URL del progetto da clonare (copiare in locale) e usare:<br><br><mark>git clone https://github.com/Autore/Progetto</mark><br><br>Verrà creata una cartella con il nome del progetto, per personalizzare il nome della cartella:<br><br><mark>git clone https://github.com/Autore/Progetto NomeCartella</mark>"],[["rimuovere","file","modifica","staging"],"<h2>Escludere un file dalla fase di modifica</h2><br>Se il file è segnato come modificato dobbiamo escluderlo dall'albero inserendo il suo nome in \".git/info/exclude\", ma questo avrà effetto solo per le prossime volte. Per la situazione corrente usare:<br><br><mark>git rm --cached nome_file</mark><br><br><h2>Escludere un file dalla fase di staging</h2><br>Se il file è già stato allestito per un commit e vogliamo continuare a monitorarlo, ma escluderlo dal commit preparato (e non ancora eseguito), usare:<br><br><mark>git reset HEAD nome_file</mark>"]],"*":[],"Java":[[["web","enterprise","edition","ee","introduzione"],"<h1>Java&nbsp;e&nbsp;Web</h1><br>JavaEE (Enterprise Edition) è un contenitore di librerie Java:<br><br>- JDBC (Java DataBase Connectivity)<br>- JSP (Java Server Pages) tradotti in istanze tramite classe Servlet<br>- EJB (Enterprise&nbsp;JavaBean)<br>- JSF (Java Server Faces)<br><br>= Servlet =<br>Classe java che gestisce un sistema client-server di richieste e risposte.<br>Funziona all'interno di un contenitore java che fa da Server Application / Web Server (alcuni esempi: Tomcat, JBoss, Glassfish, ecc.). Questi fanno funzionare le servlet.<br><br>I Server Java si dividono in due gruppi:<br><br>-- Application Server<br>container java per tutto il container EE compresi gli EJB<br>(es. JBoss)<br><br>-- Web Server<br>container java per servlet e JSP e JSF<br>(es. Tomcat)<br>"],[["preparare","apache","tomcat"],"In Eclipse occorre dedicare un Workspace per JavaEE ed avere la giusta perspective. Serve aver scaricato il file zip <a href=\"https://tomcat.apache.org/download-90.cgi\" target=\"_blank\">Apache&nbsp;Tomcat</a> che contiene il server.<br><br>- C'è una scheda dei server (in basso)<br>- Tasto destro &gt; Proprietà - Scegliere \"Switch Location\" per non legare il server ad Eclipse<br>- Sul server con doppio click si apre la finestra Overview, qui impostiamo la porta 8081 (per evitare eventuali conflitti col database Oracle o altro) e la deploy path dovrebbe essere: /opt/apache-tomcat/webapps<br>- Definire gli utenti, la configurazione essenziale in <mark>tomcatusers.xml</mark> è:<br><br><mark>&lt;role&nbsp;rolename=\"tomcat\"/&gt;<br>&lt;role&nbsp;rolename=\"admin\"/&gt;<br>&lt;role&nbsp;rolename=\"admin-gui\"/&gt;<br>&lt;role&nbsp;rolename=\"manager-gui\"/&gt;<br>&lt;user&nbsp;username=\"tomcat\"&nbsp;password=\"password\"&nbsp;roles=\"tomcat,admin,admin-gui,manager-gui\"/&gt;</mark><br><br>ovvero 4 ruoli essenziali tutti attribuiti ad un super utente tomcat.<br><br>- Avviando il server si potrà visitare: <a href=\"http://localhost:8081\" target=\"_blank\">http://localhost:8081</a><br>- Il passo successivo è solitamente creare un nuovo Dynamic Web Project<br>"],[["servlet","definizione"],"La Servlet è una classe Java che gestisce il traffico http. Questa viene istanziata con la prima chiamata di un utente qualsiasi. Per ogni chiamata di un utente viene aperto un thread parallelo (multi-threading).<br><br>È possibile istanziare le Servlet all'avvio dell'applicazione Web, specificando l'ordine di istanziazione (0, 1, 2...) o se aspettare il momento della prima chiamata (-1).<br>"],[["jsp","jstl","el","definizione"],"<h2>JSP&nbsp;(Java&nbsp;Server&nbsp;Page)</h2><br>File contenenti codice html e codice java (scriptlet, simile ai file php)<br><br>Le JSP sono tradotte in Servlet da un motore jsp presente nell'Application / Web Server<br>(in Tomcat questo motore si chiama Jasper, in ?? motore delle Servlet è Catalina)<br><br>JSP hanno 3 componenti:<br><br><h3>--&nbsp;direttive</h3>(istruzioni generali alla servlet:<br>- page: informazioni per la generazione della pagina<br>- include: include codice statico lato client<br>- taglib: include librerie di tag<br>)<br><br><h3>--&nbsp;azioni</h3>(tag che compiono azioni particolari richiamando metodi o oggetti per la servlet sottostante)<br><br><h3>--&nbsp;oggetti&nbsp;impliciti</h3>(sono variabili con nomi riservati per gli oggetti: request, response, session, application, ecc.)<br><br><h2>JSTL</h2><br>Libreria di tag lato server che incapsula codice Java:<br>core, fn, xml, sql<br><br><h2>EL&nbsp;(Expression&nbsp;Language)</h2><br>Specificato così: <mark>${}</mark> linguaggio minimale per interagire con gli attributi dei tag JSTL<br>"],[["direttiva","page","superflua"],"Questa riga di codice è una direttiva page:<br><mark>&lt;%@&nbsp;page&nbsp;language=\"java\"&nbsp;contentType=\"text/html;&nbsp;charset=UTF-8\"&nbsp;pageEncoding=\"UTF-8\"%&gt;</mark><br><br>Viene posta all'inizio di un nuovo file JSP, ma è superflua perché specifica aspetti predefiniti, quindi si può eliminare.<br>"]],"SQL":[[["creare","eliminare","database","namespace"],"<mark>CREATE&nbsp;DATABASE&nbsp;nome_database;</mark><br><br>Se in seguito si devono fare varie operazioni sul database si può usare un namespace:<br><br><mark>USE&nbsp;nome_database;</mark><br><br>Per eliminare:<br><br><mark>DROP&nbsp;DATABASE&nbsp;nome_database;</mark>"]],"Angular":[[["preparare","installare","dipendenze"],"<h1>Installare&nbsp;Angular</h1><br>Angular dipende da NodeJS<br>N.B. AngularJS è la vecchia versione, adesso si chiama Angular (angular.io).<br><br>- Installare NodeJS, si tratta di un'applicazione che esegue JS (arricchito con qualche potenzialità) fuori dal browser e quindi anche lato server. NodeJS è una dipendenza/componente di Chrome.<br>- Installare Git perché è usato per recuperare le dipendenze di volta in volta necessarie.<br>- La presenza di NodeJS mette a disposizione il comando 'npm' che è un gestore di pacchetti.<br>- angular-cli, installarlo con: <mark>npm&nbsp;install&nbsp;-g&nbsp;@angular/cli</mark> (permessi di root)<br>- Ora è disponibile il comando 'ng' che sarebbe l'abbreviazione di angular.<br>- Per installare una nuova applicazione: <mark>ng&nbsp;new&nbsp;nome_progetto</mark><br>- Si lavora principalmente in: nome_progetto/src<br>- Collocarsi su: <mark>cd&nbsp;nome_progetto</mark> ed eseguire: <mark>ng&nbsp;serve</mark> (così avremo un server in locale)<br><br>"]],"HTML":[[["elementi","semantici","generici"],"<mark>&lt;header&gt;</mark><br>Specifica una intestazione del sito o di un contenuto o di una scheda e simili.<br>Non può essere usato dentro header o dentro footer.<br><br><mark>&lt;section&gt;</mark><br>Raggruppa elementi omogenei oppure specifica un contenuto articolato in cui vogliamo inserire un'intestazione, un corpo, informazioni di contatto, ecc. Serve anche per indicare una parte del sito che non rientra in altre categorie semantiche predefinite.<br><br><mark>&lt;main&gt;</mark><br>Deve essere unico. È come un section, ma più specifico ed indica il contenuto principale di un sito (tale contenuto può consistere anche in un elenco di sommari o risultati di una ricerca).<br><br><mark>&lt;article&gt;</mark><br>Specifica un contenuto che da solo (indipendentemente dal contesto offerto dal sito) ha un senso e può essere ripresentato altrove.<br><br>N.B. &lt;section&gt; e &lt;article&gt; possono annidarsi tra loro liberamente. Es.: una sezione di articoli e un articolo con una sezione tecnica.<br><br><mark>&lt;footer&gt;</mark><br>Solitamente contiene meta-informazioni sui contenuti, può essere inserito nel documento o nelle sezioni.<br><br><mark>&lt;nav&gt;</mark><br>Indica i menu, insiemi di link di importanza rilevante per la navigazione del sito.<br><br><mark>&lt;aside&gt;</mark><br>Indica parti secondarie del sito dedicate a contenuti correlati, extra, curiosità, ecc.<br><br><br>"],[["elementi","semantici","specifici"],"<mark>&lt;figure&gt;</mark><br>Serve a descrivere semanticamente un'immagine. Esempio:<br> <br><mark>&lt;figure&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;img&nbsp;src=\"nome_file.jpg\"&nbsp;alt=\"Descrizione&nbsp;immagine\"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;figcaption&gt;Fig.&nbsp;1&nbsp;-&nbsp;Titolo,&nbsp;località,&nbsp;fotografo.&lt;/figcaption&gt;<br>&lt;/figure&gt;</mark><br><br><mark>&lt;mark&gt;</mark><br>Evidenzia porzioni di testo o parole chiave attribuendogli una rilevanza semantica.<br><br><mark>&lt;time&gt;</mark><br>Attribuisce un giorno ed un ora ad un evento scritto per umani:<br><br><mark>&lt;time&nbsp;datetime=\"2020-02-14&nbsp;00:00\"&gt;Giorno&nbsp;di&nbsp;San&nbsp;Valentino&lt;/time&gt;</mark><br><br>N.B.<br>Ci sono altri tag specifici ma spesso sono parzialmente supportati o sperimentali.<br> "],[["comandi","http","principali"],"Ci sono alcuni comandi principali che però, quando giungono al server, questo decide cosa fare con queste informazioni e spesso si usano unicamente GET e POST per comunicare ogni operazione.<br><br><mark>http&nbsp;get</mark> : lettura dati<br>(spedisce dati via URL mediante querystring)<br><br><mark>http&nbsp;post</mark> : inserimento dati<br>(spedisce dati via header http)<br><br>Ci sono anche due comandi previsti dal protocollo Http 2.0, ma non sono implementati dai browser.<br><br><mark>http&nbsp;put</mark> : aggiornamento dati<br><br><mark>http&nbsp;delete</mark> : eliminazione dati<br>"]],"Bootstrap":[[["inserimento","link","css","js"],"HEAD:<br><br><mark>&lt;link&nbsp;rel=\"stylesheet\"&nbsp;href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"&nbsp;integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\"&nbsp;crossorigin=\"anonymous\"&gt;</mark><br><br>SCRIPT (in fondo a BODY):<br><br><mark>&lt;script&nbsp;src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"&nbsp;integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"&nbsp;crossorigin=\"anonymous\"&gt;&lt;/script&gt;<br>&lt;script&nbsp;src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"&nbsp;integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\"&nbsp;crossorigin=\"anonymous\"&gt;&lt;/script&gt;<br>&lt;script&nbsp;src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"&nbsp;integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\"&nbsp;crossorigin=\"anonymous\"&gt;&lt;/script&gt;</mark><br><br>"]],"CSS":[[["transizioni","animate"],"Innumerevoli effetti di transizione si possono realizzare con CSS. Il metodo più semplice consiste nel definire due classi, una con lo stile iniziale, una con lo stile finale. L'elemento che passerà da una classe all'altra deve possedere:<br><mark>transition:&nbsp;all&nbsp;.5s&nbsp;ease&nbsp;1s;</mark><br><br><mark>all</mark>: tutte le proprietà cercheranno di fare una transizione, ma si può limitare: es. width.<br><mark>.5s</mark>: mezzo secondo, è il tempo di durata della transizione.<br><mark>ease</mark>: sono modalità della transizione per ammorbidire inizio e fine o averla lineare.<br><mark>1s</mark>: è il ritardo facoltativo prima di far partire la transizione."],[["grid","spazi","dimensionamento"],"La direttiva grid viene data ad un box genitore insieme al numero e alla dimensione delle colonne e delle righe:<br><mark>display:&nbsp;grid;<br>grid-template-columns:&nbsp;1fr&nbsp;1fr&nbsp;1fr&nbsp;1fr;<br>grid-template-rows:&nbsp;10vh&nbsp;20vh&nbsp;20vh&nbsp;50vh;</mark><br><br>fr è una frazione, nel caso precedente corrisponde al 25%.<br><br>Quasi sempre servirà dare direttive ai figli. Questi cercano di occupare i primi posti liberi in relazione alla loro dimensione. La loro dimensione è definita dicendo da quale colonna iniziano a quale colonna finiscono e da quale riga iniziano a quale riga finiscono. La sintassi breve è questa:<br><mark>grid-column:&nbsp;1&nbsp;/&nbsp;2;<br>grid-row:&nbsp;2&nbsp;/&nbsp;4;</mark><br><br>N.B. Singoli errori nella griglia possono portare a guastarla tutta.<br><br>Le stesse cose si possono fare con la direttiva <mark>grid-template-areas</mark>, ma è più chiaro il metodo qui sopra."],[["float"],"Il concetto di float è problematico, si tratta di un flusso, fuori dal flusso ordinario, ma con la possibilità per questi flussi di scorrere in parallelo.<br><br>Si può avviare un flusso a sinistra o a destra:<br><mark>float:&nbsp;left;<br>float:&nbsp;right;</mark><br><br>Si deve interrompere un flusso avviato con clear:<br><mark>clear:&nbsp;left;<br>clear:&nbsp;right;<br>clear:&nbsp;both;</mark><br><br>N.B. Si possono realizzare testi a colonne con questa tecnica, ma conviene flex.<br>"],[["flex","riga","colonna","spazio","direction"],"La direttiva flex viene data ad un box genitore ed anche le seguenti direttive sono per il genitore.<br><mark>display:&nbsp;flex;</mark><br><br>Il flusso di elementi è automaticamente orizzontale (riga) e non va a capo.<br><br>Orizzontale e che va a capo:<br><mark>flex-direction:&nbsp;row;<br>flex-wrap:&nbsp;wrap;</mark><br>Scorciatoia:<br><mark>flex-flow: row&nbsp;wrap;</mark><br><br>Verticale:<br><mark>flex-direction:&nbsp;column;</mark><br><br>Verticale con ordine invertito:<br><mark>flex-direction:&nbsp;column-reverse;</mark><br><br>Gli elementi orizzontalmente possono essere:<br>Centrati: <mark>justify-content:&nbsp;center;</mark><br>Messi a sinistra: <mark>justify-content:&nbsp;left;</mark><br>Messi&nbsp;a destra:&nbsp;<mark>justify-content:&nbsp;right;</mark><br>Giustificati con spazio tra loro: <mark>justify-content:&nbsp;space-between;</mark><br>Giustificati&nbsp;con&nbsp;spazio&nbsp;tra&nbsp;loro&nbsp;e&nbsp;il&nbsp;bordo: <mark>justify-content:&nbsp;space-evenly;</mark><br>Giustificati&nbsp;con&nbsp;spazio attorno loro: <mark>justify-content:&nbsp;space-around;</mark><br><br>Gli elementi verticalmente possono essere:<br>Posti in alto: <mark>align-items:&nbsp;flex-start;</mark><br>Posti al centro: <mark>align-items:&nbsp;center;</mark><br>Posti in basso: <mark>align-items:&nbsp;flex-end;</mark><br>Espansi dall'alto al basso: <mark>align-items:&nbsp;stretch;</mark><br><br>"],[["pseudo","elementi","html"],"Qui l'elenco ed il significato degli pseudo elementi HTML:<br><a href=\"https://www.w3schools.com/css/css_pseudo_elements.asp\" target=\"_blank\">https://www.w3schools.com/css/css_pseudo_elements.asp</a><br><br>::after (aggiunge un elemento dopo)<br>::before  (aggiunge un elemento prima)<br>::first-letter<br>::first-line<br>::selection<br><br>:active<br>:checked<br>:disabled<br>:empty<br>:enabled<br>:first-child<br>:first-of-type<br>:focus<br>:hover<br>:in-range<br>:invalid<br>:lang(language)<br>:last-child<br>:last-of-type<br>:link (non visitato)<br>:not(selector) (tutto tranne selector)<br>:nth-child(n)<br>:nth-last-child(n)<br>:nth-last-of-type(n)<br>:nth-of-type(n)<br>:only-of-type<br>:only-child<br>:optional (senza attributo required)<br>:out-of-range<br>:read-only<br>:read-write<br>:required<br>:root<br>:target<br>:valid (input con valore valido)<br>:visited<br><br>"],[["posizionamento","fisso","relativo","assoluto"],"Il posizionamento fisso è relativo al documento, si posiziona specificando distanze dai bordi:<br><mark>position:&nbsp;fixed;<br>top:&nbsp;0;<br>right:&nbsp;0;</mark><br><br>Se vogliamo sovrapporre elementi figli tra loro, servirà un elemento padre con:<br><mark>position:&nbsp;relative;</mark><br>ed entrambi gli elementi figli con:<br><mark>posizion:&nbsp;absolute;</mark><br><br>N.B. absolute senza un padre relative non funziona.<br>"]]}
}