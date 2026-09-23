/* Template8 decorative helper only. No API/login/admin/business logic changes. */
(function(){
  'use strict';
  function boot(){
    var hero=document.getElementById('home');
    var content=hero&&hero.querySelector('.hero-content');
    if(!hero||!content)return;

    if(!content.querySelector('.template8-hero-cta')){
      var cta=document.createElement('a');
      cta.className='template8-hero-cta';
      cta.href='#learningSourceBox';
      cta.textContent='READ MORE';
      content.appendChild(cta);
    }

    if(!hero.querySelector('.template8-score-badge')){
      var badge=document.createElement('div');
      badge.className='template8-score-badge';
      badge.setAttribute('aria-hidden','true');
      badge.innerHTML='LEARNING<br>360';
      hero.appendChild(badge);
    }

    if(!document.querySelector('.template8-headline-strip')){
      var strip=document.createElement('div');
      strip.className='template8-headline-strip';
      strip.setAttribute('aria-hidden','true');
      strip.innerHTML='<div class="template8-headline-strip-inner"><b>★ TOP HIGHLIGHTS</b><span>LEARNING PLATFORM 360</span><span>ONLINE LEARNING</span><span>ACTIVITIES</span><span>KNOWLEDGE</span><span>COMMUNITY</span></div>';
      hero.insertAdjacentElement('afterend',strip);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
