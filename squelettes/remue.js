/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* NOOB SLIDE pour pecha kucha par exemple */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

jQuery.noConflict();
// Code that uses other library's $ can follow here.
$ = jQuery;
function pechaKuchaSlide(secondsPerSlides) {
	setTimeout(function() {
		jQuery.noConflict();	
		//SAMPLE 4 (walk to item)
		var nS4 = new noobSlide({
			box: $('ns_box'),
			items: $$('#ns_box div'),
			size: 560,
			interval: (secondsPerSlides * 1000),
			autoPlay: false,
			addButtons: {
				play: $('ns_play')
			}
		});
	}, 1200);
}//pechaKuchaSlide

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/**  
  * POESCRIPT
  * Bibliothèque poétique
  */
  
// 29 01 2019
//    > forcer certains décalage dû à la nouvelle charte
//    > repasser en Arial 10px
function remue_2019_recharte(){
	setTimeout("remue_2019_recharte_timeout()", 1000);
}
function remue_2019_recharte_timeout() {
	$('#content').css                ('margin-top',   '120px');
	$('#content .titre').css         ('margin-top',   '-120px');
	$('.article_content .titre').css ('margin-top',   '-120px');
	$('.ariane').css                 ('margin-top',   '-50px');
	$('.article_content').css        ('font-size',    '12px');
	$('.article_content').css        ('font-family',   'Arial');
	
	$('.taille_texte').css('display', 'none');
	$('.tags').css('display', 'none');
	$('.date').css('display', 'none');
	$('.texte').css('min-height', '1200px');
}
//
// affiche immédiatement le calque div_id en fondu ms
function remue_affiche_direct(div_id, fondu) {
	if(fondu>0) {
		$(div_id).fadeIn({duration:fondu,queue:false});
	}
	else {
		$(div_id).show();
	}
}
// cache immédiatement le calque div_id en fondu ms
function remue_cache_direct(div_id, fondu) {
	if(fondu>0) {
		$(div_id).fadeOut({duration:fondu,queue:false});
	}
	else {
		$(div_id).hide();
	}
}
// Affiche le calque div_id après t ms avec un fade in de fondu ms
//(ou affichage direct si fondu==0)
function remue_affiche(div_id, t, fondu){	
	if(t>0) {
		var h= window.setTimeout("remue_affiche_direct('"+div_id+"', "+fondu+")", t);
	}
	else {
		remue_affiche_direct(div_id, fondu);
	}
}


// Cache le calque div_id après t ms avec un fade out de fondu ms 
//(ou cache direct si fondu==0)
function remue_cache(div_id, t, fondu){
	if(div_id==".auteur") {return;}// Hack charte 2019 pour pas avoir à tout se retaper
	if(t>0) {
		var h= window.setTimeout("remue_cache_direct('"+div_id+"', "+fondu+")", t);
	}
	else {
		remue_cache_direct(div_id, fondu);
	}

}
// Affiche le calque div_id t ms après l'objet clic_id ait été cliqué, avec un fondu 
function remue_affiche_clic(div_id, clic_id, t, fondu) {
	$(clic_id).click(function (){
		remue_affiche(div_id, t, fondu);
	});
}

// Cache le calque div_id t ms après l'objet clic_id ait été cliqué, avec un fondu 
function remue_cache_clic(div_id, clic_id, t, fondu) {
	$(clic_id).click(function (){
		remue_cache(div_id, t, fondu);
	});
}
// Lit: retourne le contenu html d'un div
function remue_lit(div_id) {
	return $(div_id).html();
}
// Ecrit direct
function remue_ecrit_direct(div_id, texte) {
	$(div_id).html(texte);
}
// Ecrit le texte dans le calque div_id après t ms
function remue_ecrit(div_id, texte, t) {
	var h= window.setTimeout("remue_ecrit_direct('"+div_id+"','" + texte + "');", t);
}


// écrit le texte dans le div_id mais à l'envers
// "Dita Kepler" deviendra -> "relpeK atiD"
function remue_miroir_direct(div_id, texte) {
	remue_miroir_r(div_id, texte, texte.length);
}
// après t ms
function remue_miroir(div_id, texte, t) {
	var h = window.setTimeout("remue_miroir_direct('"+div_id+"', '"+texte+"');", t);
}
// fonction récursive qui sert à écrire le miroir (index est donc d'abord la dernière lettre)
function remue_miroir_r(target, message, index) {
	$(target).append(message[index]);
	index--;
	if(index<0) { return; }
	remue_miroir_r(target, message, index);
}


// Déplacement immédiatement le calque divid (voir remue_deplace())
function remue_deplace_direct(div_id, valleft, valtop, duree) {
	if(valleft!="" && valtop!="") {
		$(div_id).animate({
			left:  valleft ,
			top:  valtop, queue: false
	    	}, duree, function() {
    	  	     // Animation complete.
		});
		return;
	}
	if(valleft!="") {
		$(div_id).animate({
			left: valleft, queue: false
	    	}, duree, function() {
    	  	     // Animation complete.
		});
		return;
	}
	$(div_id).animate({
		top: valtop, queue: false
	    }, duree, function() {
    	       // Animation complete.
	});
}
// Déplace le div div_id de valleft vers la gauche (peut-être négatif) valtop vers le bas 
// (peut-être négatif) après t ms et pendant duree ms
function remue_deplace(div_id, valleft, valtop, t, duree) {
	if(t>0) {
		var h= window.setTimeout("remue_deplace_direct('"+div_id+"', '"+ valleft + "', '"+ valtop + "', "+duree+")", t);	
	}else {
		remue_deplace_direct(div_id, valleft, valtop, duree);
	}
}

// Change la taille de police immédiatement (voir remue_change_taillepolice())
function remue_change_taillepolice_direct(div_id, taillecible, duree){
	$(div_id).animate({
			fontSize: taillecible, queue: false
	    }, duree, function() {
    	       // Animation complete.
	});

}
// Change la taille de police vers la taillecible après t ms pendant duree ms 
function remue_change_taillepolice(div_id, taillecible, t, duree){
	if(t>0) {
		var h= window.setTimeout("remue_change_taillepolice_direct('"+div_id+"', '"+ taillecible + "', '"+duree+"')", t);	
	}else {
		remue_change_taillepolice_direct(div_id, taillecible, duree);
	}

}

// Change l'épaisseur de police immédiatement (voir remue_change_epaisseurpolice())
function remue_change_epaisseurpolice_direct(div_id, taillecible, duree){
	$(div_id).animate({
			'font-weight': taillecible, queue: false
	    }, duree, function() {
    	       // Animation complete.
	});

}
// Change l'épaisseur de police vers la taillecible après t ms pendant duree ms 
function remue_change_epaisseurpolice(div_id, taillecible, t, duree){
	if(t>0) {
		var h= window.setTimeout("remue_change_epaisseurpolice_direct('"+div_id+"', '"+ taillecible + "', '"+duree+"')", t);	
	}else {
		remue_change_epaisseurpolice_direct(div_id, taillecible, duree);
	}
}

// Change la couleur d'un div immédiatement
function remue_change_couleur_texte_direct(div_id, couleur, duree) {
	/*duree= "fast";
	if(duree>1000) {
		duree = "slow";
	}*/
	$(div_id).animate({
			'color': couleur, queue: false
	    }, duree, function() {
    	       // Animation complete.
	});

}
// Change la couleur d'un div
// Change la couleur de fond d'un div immédiatement (si duree>1000ms ce sera "slow" sinon "fast")
function remue_change_couleur_texte(div_id, couleur, t, duree) {
	if(t>0) {
		var h= window.setTimeout("remue_change_couleur_texte_direct('"+div_id+"', '"+ couleur + "', '"+duree+"')", t);	
	}else {
		remue_change_couleur_texte_direct(div_id, couleur, duree);
	}
}

// Change la couleur de fond d'un div immédiatement 
function remue_change_couleur_fond_direct(div_id, couleur, duree) {
	/*duree= "fast";
	if(duree>1000) {
		duree = "slow";
	}*/
	$(div_id).animate({
			'background-color': couleur, queue: false
	    }, duree, function() {
    	       // Animation complete.
	});

}
// Change le background d'un div (si duree>1000ms ce sera "slow" sinon "fast")
function remue_change_couleur_fond(div_id, couleur, t, duree) {
	if(t>0) {
		var h= window.setTimeout("remue_change_couleur_fond_direct('"+div_id+"', '"+ couleur + "', '"+duree+"')", t);	
	}else {
		remue_change_couleur_fond_direct(div_id, couleur, duree);
	}
}
// Affiche le contenu du calque div_id avec le texte txt lettre par lettre, après t ms 
// avec un intervalle entre chaque lettre affichée de interval  ms
function remue_affiche_lettre_a_lettre(div_id, txt, t, interval) {
	if(t>0) {
		var h = window.setTimeout("remue_affiche_lettre_a_lettre_r('"+div_id+"', '"+txt+"', 0, "+interval+");", t); 
	}
	else {
		remue_affiche_lettre_a_lettre_r(div_id, txt, 0, interval); 	
	}
}
// fonction récursive d'affichage lettre à lettre, cf. remue_affiche_lettre_a_lettre
function remue_affiche_lettre_a_lettre_r (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout("remue_affiche_lettre_a_lettre_r('"+target+"', '"+message+"', "+index+", "+interval+");", interval);
  }
}


// Efface le contenu du calque div_id en lui positionnant le texte txt qui sera effacé lettre par lettre, après t ms 
// avec un intervalle entre chaque lettre effacée de interval  ms
function remue_efface_lettre_a_lettre(div_id, txt, t, interval) {
	if(t>0) {
		var h = window.setTimeout("remue_efface_lettre_a_lettre_r('"+div_id+"', '"+txt+"', "+txt.length+", "+interval+");", t); 
	}
	else {
		remue_efface_lettre_a_lettre_r(div_id, txt, txt.length, interval); 	
	}
}
// fonction récursive d'effacement lettre à lettre, cf. remue_efface_lettre_a_lettre
function remue_efface_lettre_a_lettre_r (target, message, index, interval) {   
  if (index > 0) {
    message = message.substring(0, message.length-1);
	index--;
    $(target).html(message);
    setTimeout("remue_efface_lettre_a_lettre_r('"+target+"', '"+message+"', "+index+", "+interval+");", interval);
  }
}

// fonction qui fait trembler un calque à partir de t ms pendant duree ms (duree ne peut être inférieur à 10)
// avec amplitude pixels, et vitesse ms (on peut indiquer 0)
function remue_tremble(div_id, t, duree, amplitude, vitesse ){
	if(duree<10){
		duree = 10;
	}
	// initialise le plugin rumble sur l'élt demandé
	$(div_id).jrumble({
		x: amplitude,
		y: amplitude,
		speed: vitesse,
		rotation: 1
	});
	if(t>0) {
		var h = window.setTimeout("$('"+div_id+"').trigger('startRumble');", t);
	} else {
		$(div_id).trigger('startRumble');	
	}
	var hstop = window.setTimeout("$('"+div_id+"').trigger('stopRumble');", t+duree);
}

// explose le div_id immédiatement cf. remue_explose()
function remue_explose_direct(div_id, morceaux, duree ){
	$(div_id).hide("explode", { pieces: morceaux }, duree);
}
// explose le div_id en plusieurs morceaux après t ms et pendant duree ms
function remue_explose(div_id, morceaux, t, duree ){
	if(t>0) {
		var h = window.setTimeout("remue_explose_direct('"+div_id+"', "+morceaux+", "+duree+");", t); 
	}
	else {
		remue_explose_direct(div_id, morceaux, duree); 	
	}
}
// tableau de lettres avec probabilités par lettres selon le nb de leurs occurences
var remue_alpha_low = "aaaaaaàâäbccddeeeeeeeeeeéèëêfghiiiïîjklllllmmmnnnnnoooôöppqrrrrrrssssssssttttttuüûùvvwxyz";
var remue_alpha_up =  "AAAAAAÀÂÄBCCDDEEEEEEEEEEÉÈËÊFGHIIIÏÎJKLLLLLMMMNNNNNOOOÔÖPPQRRRRRRSSSSSSSSTTTTTTUÜÛÙVVWXYZ";
// rempli un calque de lettres. 
// espaces == true alors on met un espace de temps en temps
// no_up == true alors on met pas de majuscules
function remue_rempli_alea_lettres(div_id, nb, espaces, no_up) {
     var tab = remue_alpha_low; 
     // si majuscules demandées, on en mettra mais 5x moins que des minuscules
     if(!no_up) { tab+=remue_alpha_low+remue_alpha_low+remue_alpha_low+remue_alpha_low+remue_alpha_up; }
     var tabn = tab.length;
     
     for(var i = 0; i < nb; i++){
	var il = Math.floor((Math.random()*tabn));
        if(espaces && il <= tabn/4) {
        	l =' ';	
	}
	else {
		l = tab.charAt(il);
	}
        $(div_id).append(l);
     }
}


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */




/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* GALLERIA */
/* nouvelle version 1.5.7 pour la nouvelle charte 2019 peut se passer de tous les boutons */
var gal_fs=false;
var gal_themeclassic = 'galleria/themes/classic/galleria.classic.min.js';
var gal_themefullscreen = 'galleria/themes/fullscreen/galleria.fullscreen.min.js';
var gal_aide_fs= 'Mode plein-écran. '+ 'Pour quitter le mode plein-écran: appuyez sur la touche Esc ou Echap';
var gal_aide_playpause = 'Diaporama automatique';
var gal_chargement = 'Chargement de la gallerie d\'image en cours';
function galleria_exists() {
	return $("#gallery").css('width')!=undefined;
}
// Initialise les variables et charge la galerie
function galleria_remueInit(pluginpath){
	if(galleria_exists()) {
		gal_themeclassic = pluginpath + gal_themeclassic;
		gal_themefullscreen = pluginpath + gal_themefullscreen;
		console.log("Remue Galleria classic theme : " + gal_themeclassic);
		console.log("Remue Galleria fullscreen theme : " + gal_themefullscreen);
		$("#aftergallery").append('<div id="galleria_loadinfo">'+gal_chargement+'</div>');
		$("#galleria_loadinfo").fadeOut(4000);
		// Charge après un délai pour laisser le + de tps possible au chargement des images
		window.setTimeout('galleria_load();', 3200);
	}
}
var redim_always = false;
function galleria_load(){
	$("#gallery").fadeIn(400);
    // Charge le thème classique, 540pixels de côté
	console.log("Remue Galleria try loading classic theme ("+gal_themeclassic+")");
    Galleria.loadTheme(gal_themeclassic);
    gal_fs = false; // indique que le plein écran n'est pas actif (switch on click)
	
	galeria_re_run();
	
	galleria_ajouteBoutons();
    galleria_mouseEvents();
    galleria_keyboardEvents();
	
}
function galeria_re_run() {
	
	var max_w = $('.texte').width();
	$('#gallery').css('width', max_w);
	max_w*=0.92;
	Galleria.run('#gallery', {
		width: max_w,
        height: 540,
        imageCrop: 'false',
		responsive: true,
		fullscreenDoubleTap: true
	});
}
// Ajoute les boutons de contrôle
function galleria_ajouteBoutons() {
   /* JSE 13/02/2019 : plein écran ne marche pas comme ça en 1.5.7  / à revoir */
   $("#aftergallery").append('<div style="clear:both;display:block;float:left;pointer:cursor"><img src="squelettes/img/galleria-fs-off.png" id="galleryimgfullscreen"" alt=""/></div>');
    $("#aftergallery").append('<div style="float:left;pointer:cursor"><img src="squelettes/img/play-off.png" id="galleryplay" alt="&gt;" /></div>');
    $("#aftergallery").append('<div style="float:left" id="galleryhelp">' + ""+ '</div>');
}

// Quitter le mode plein écran
function galleria_exitFullScreen() {
      location.reload(true);
}
// Play/Pause diaporama
function galleria_toggleSlideshow(gallery) {
    gallery.playToggle(3000);
    if($('#galleryplay').attr('alt')=='||') {
        $('#galleryplay').attr('src', 'squelettes/img/play-off.png');
        $('#galleryplay').attr('alt', '&gt');
    } else {
        $('#galleryplay').attr('src', 'squelettes/img/pause-off.png');
        $('#galleryplay').attr('alt', '||');
    }
}
// Initialise les évts clavier
function galleria_keyboardEvents() {

    // Gestion de la touche Esc : quitter le plein écran
    $(document).keyup(function(e) {
      if (e.keyCode == 27) {
          // bug : les ascenseurs disparaissent -> Galleria.loadTheme(themeclassic);
          // dc on refresh…
            // touche esc: quitter le plein écran
            if (gal_fs) {
                galleria_exitFullScreen();
            }
      }   // esc
    });
    $(document).keypress(function(e){
      if (e.keyCode == 102 || e.keyCode == 32) {
            // touche F ou ESPACE: lancer le diaporama
            galleria_toggleSlideshow(Galleria.get(0));
      }   // entrée
    });

}
// Initialise les évts souris
function galleria_mouseEvents(){
        // Rollover du plein écran
    $("#galleryimgfullscreen").mouseover(function() {
        $("#galleryhelp").html(gal_aide_fs);
        $("#galleryimgfullscreen").src = "squelettes/img/galleria-fs-on.png";
        $("#galleryimgfullscreen").css('cursor', 'pointer');
    });
    $("#galleryimgfullscreen").mouseleave(function() {
        $("#galleryimgfullscreen").src = "squelettes/img/galleria-fs-off.png";
        $("#galleryhelp").html("");
     });

    // Rollover du bouton play/pause selon contexte
    $("#galleryplay").mouseover(function() {
        if($('#galleryplay').attr('alt')=='||') {
            this.src = "squelettes/img/pause-on.png";
        } else {
            this.src = "squelettes/img/play-on.png";
        }
        $("#galleryhelp").html(gal_aide_playpause);
        //this.css('cursor', 'pointer');
    });
    $("#galleryplay").mouseleave(function() {
        if($('#galleryplay').attr('alt')=='||') {
            this.src = "squelettes/img/pause-off.png";
        } else {
            this.src = "squelettes/img/play-off.png";
        }
        $("#galleryhelp").html("");
    });

    // Clic sur Gallery play
    $('#galleryplay').click(function() {
        galleria_toggleSlideshow(Galleria.get(0)); // Lance le diaporama
    });

    // Clic sur Fullscreen -> charger le mode plein écran
		Galleria.ready(function() {
		  var gallery = this; // galleria is ready and the gallery is assigned
		  $('#galleryimgfullscreen').click(function() {
			gallery.toggleFullscreen(); // toggles the fullscreen
		  });
		});

    
}
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* TOOLS */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
// Détection navigateur
function getIeVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer')
    {
        var ua = navigator.userAgent;
        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat( RegExp.$1 );
    }
    return rv;
}
// On veut la 8 au moins
function checkIeVersion()
{
    var ver = getIeVersion();
    jQueryIeOk = true;
    if ( ver > -1 )
    {
        if ( ver < 7.0 )
            jQueryIeOk =false;
    }
    return jQueryIeOk;
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/******  SOMMAIRE (version avant 2019 à supprimer ******/
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
// Liste des secteurs qui apparaissent à droite ou à gauche
// et qui sont par conséquent "grisables"
// Chercher si l'aiguille est dans la botte de foin
function remue_isInArray(needle, haystack) {
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle) {
            return true;
        }
    }
}
// Retourne true si le secteur est possiblement à griser
function remue_estGrisable(numeroSecteur) {
    var secteursGrisables = new Array(198, 13, 3, 315, 8, 177);
    return remue_isInArray(numeroSecteur, secteursGrisables);
}
// Retourne le contenu HTML d'un élément
function remue_getInnerHtmlOfElementById(eltId) {
    try {
        return $("#"+eltId).html();
    }
    catch(e) {
        return document.getElementById(eltId).innerHTML;
    }
}
// Positionne le contenu HTML d'un élément
function remue_setInnerHtmlOfElementById(eltId, newInnerHtml) {
    try {
        return $("#"+eltId).html(newInnerHtml);
    }
    catch(e) {
        return document.getElementById(eltId).innerHTML = newInnerHtml;
    }
}

// Affiche à gauche ou à droite (nomSecteur) le secteur (numeroSecteur)
// et grise l'autre'
function remue_afficherSecteur(numeroSecteur, nomSecteur) {
    if(remue_estGrisable(numeroSecteur)) {
        // Mémorise le secteur affiché, à droite ou à gauche, s'il fait partie
        // des secteurs que l'on affiche
        eval("current" + nomSecteur + " = " +numeroSecteur);
        var contenu = "<div id='secteurOver'><div id='secteur_" + numeroSecteur + "'>" + remue_getInnerHtmlOfElementById("secteur_" + numeroSecteur) + "</div></div>";
        remue_setInnerHtmlOfElementById("articles" + nomSecteur, contenu);
        var autreSecteur = nomSecteur=="Droite" ? "Gauche" : "Droite";
        remue_griserSecteur(autreSecteur);
    }
}
// Réinit le sommaire
function remue_afficherSommairePrincipal() {
    // Affichage par défaut:
    var contenuDroite = remue_getInnerHtmlOfElementById("articlesDroiteCache");
    remue_setInnerHtmlOfElementById("articlesDroite", contenuDroite);
    var contenuGauche = remue_getInnerHtmlOfElementById("articlesGaucheCache");
    remue_setInnerHtmlOfElementById("articlesGauche", contenuGauche);
}
// Griser le secteur s'il est affiché dans nomSecteur
// c'est mettre le même contenu mais dans le div secteurOut
function remue_griserSecteur(nomSecteur) {
    try {
        var numeroSecteur = eval("current" + nomSecteur);
        if(numeroSecteur==0)
            return;
        // Si le numeroSecteur est affiché
        // afficher le même mais grisé
        // Sinon on ne fait rien
        var contenu = "<div id='secteurOut'><div id='secteur_" + numeroSecteur + "'>" +
        remue_getInnerHtmlOfElementById("secteur_" + numeroSecteur) +
        "</div></div>";
        remue_setInnerHtmlOfElementById("articles" + nomSecteur, contenu);
    }
    catch(e)
    {
    }
}
function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function remue_img_roll_over(currentimg, currentimgid, imgover){
    currentimg.src = imgover;
}

function remue_img_roll_out(currentimg,  currentimgid, imgout){
    currentimg.src = imgout;
}

/* * * * * * * * * *  FIN SOMMAIRE **/
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* gestion des notes  à repositionner JKI 
 */
function creeDecalage(element, taille) {
	element.before('<div class="decalage noPrint" style="padding-bottom:' + taille + 'px"></div>');
}
/* jse 21 02 2019
 * attention : ce code dépend de la zone dans laquelle #notes se retrouve  ! */
function verifieNotesDecalage(){
	// s'il y a des notes affichées par le #NOTE de Spip dans un article :
	$("#notes > *").each(function(){
		console.log("+décal " + this.id);
		// pr chaque note de class .spip_note on prend son offset vertical
		var note = $(this);
		var topNote = note.offset().top;
		var idLien = note.find(".spip_note").attr("href");
		var topTexte = $(idLien).offset().top;
		// on place un bloc blanc avant la note pr la placer si nécessaire :
		if(topNote < topTexte) {
			var v = topTexte - topNote;
			
			console.log("--appelle décalage pr #notes : " + v +"px");
			creeDecalage(note, v);
		}
	});
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// Appelé après chargmt complet page:
$(function() {
	// gestion des décalages à placer avant chaque note spip
    verifieNotesDecalage();
});
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
