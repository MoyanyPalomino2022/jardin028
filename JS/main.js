/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});



/*SCROLL INDEX*/
sr.reveal('.section-tit',{delay: 600});
sr.reveal('.bloque__subt',{delay: 700}); 
sr.reveal('.bloque__img',{}); 
sr.reveal('.bloque__tex',{delay: 700});

/*SCROLL MISION, VISION Y UBICANOS*/
sr.reveal('.section-title-mision',{delay: 600}); 
sr.reveal('.section-title',{delay: 600}); 
sr.reveal('.bloque__text',{delay: 400}); 
sr.reveal('.section-title-ubicanos',{delay: 600}); 

/*SCROLL VALORES*/
sr.reveal('.section-title-v',{delay: 400}); 
sr.reveal('.tabla_v',{delay: 500});
sr.reveal('.contenedorvalores',{delay: 500});

/*SCROLL RESEÑA HISTÓRICA*/
sr.reveal('.section-titleh',{delay: 300}); 
sr.reveal('.historia__img',{delay: 500}); 
sr.reveal('.historia__text',{delay: 500}); 


/*SCROLL DE PERSONAL*/
sr.reveal('.section-title-p',{delay: 300});
sr.reveal('.tabla',{delay: 400});

/*SCROLL DE UBICANOS*/
sr.reveal('.correoIEN',{delay: 400});

/*SCROLL DE GALERIA*/
sr.reveal('.section-title-galeria',{delay: 400});
   
    /*GALERIA PROYECTOS*/
    sr.reveal('.contenedorgaleriaproyectos',{delay: 400});
    /*GALERIA PREMIOS*/
    sr.reveal('.galeriapremios',{delay: 400});
    /*GALERIA VIDEOS*/
    sr.reveal('.contenedordevideo',{delay: 400});
    /*GALERIA VISITAS*/
    sr.reveal('.titulo_galeria_visitas',{delay: 400}); 
/*SCROLL DE NOTICIAS*/
sr.reveal('.section-title-noticias',{delay: 400});
sr.reveal('.slider',{delay: 500});
sr.reveal('.carousel',{delay: 500});
sr.reveal('.about__subtitle_noticias',{delay: 600});
sr.reveal('.about__text_noticia',{delay: 500});
sr.reveal('.about-noticia__img img',{delay: 400});
