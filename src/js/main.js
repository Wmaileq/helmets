function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.value.indexOf('nav_active') === -1 ? nav.classList.value = 'nav nav_active' : nav.classList.value = 'nav';
}

function scrollToElement(element) {
    let position;
    if (typeof element === 'number') {
        position = element;
    } else {
        switch (element) {
            default:
                position = document.getElementById(element).getBoundingClientRect().top - document.body.getBoundingClientRect().top - 80;
                break;
        }
    }
    window.scrollTo({top: position, behavior: 'smooth'})
}

function nextStep(step){
    if (step === 2) {
        document.getElementById('step-1').classList.value = 'custom__opt-wrapper passed';
        document.getElementById('step-2').classList.value = 'custom__opt-wrapper active';
    }
    if (step === 3) {
        document.getElementById('step-2').classList.value = 'custom__opt-wrapper passed';
        document.getElementById('step-3').classList.value = 'custom__opt-wrapper active';
        document.getElementById('final-step').classList.value = 'custom__mobile-style active'
    }
}

const constructor = {
    helmetM: document.getElementById('helmet-m'),
    helmetG: document.getElementById('helmet-g'),
    helmetW: document.getElementById('helmet-w'),
    visor1: document.getElementById('visor-1'),
    visor2: document.getElementById('visor-2'),
    visor3: document.getElementById('visor-3'),
    visor4: document.getElementById('visor-4'),
    visor5: document.getElementById('visor-5'),
    visor6: document.getElementById('visor-6'),
    holder1: document.getElementById('holder-1'),
    holder2: document.getElementById('holder-2'),
    holder3: document.getElementById('holder-3'),
    holder4: document.getElementById('holder-4'),
    holder5: document.getElementById('holder-5'),
    holder6: document.getElementById('holder-6'),
    holder7: document.getElementById('holder-7'),
    helmetChosen: 'helmetM',
    visorChosen: 'visor2',
    holderChosen: 'holder7',
    playStartingAnimation : function() {
        this.helmetG.classList += ' visible animation-start';
        setTimeout(() => this.visor5.classList += ' visible visor-1 animation-start', 700);
        setTimeout(() => this.visor2.classList += ' visible visor-2 animation-start', 1000);
        setTimeout(() => this.visor4.classList += ' visible visor-3 animation-start', 1300);
        setTimeout(() => this.visor3.classList += ' visible visor-4 animation-start', 1600);
        setTimeout(() => this.visor6.classList += ' visible visor-5 animation-start', 1900);
        setTimeout(() => this.visor1.classList += ' visible visor-6 animation-start', 2200);
        setTimeout(() => this.holder1.classList += ' visible holder-1 animation-start', 700);
        setTimeout(() => this.holder2.classList += ' visible holder-2 animation-start', 1060);
        setTimeout(() => this.holder3.classList += ' visible holder-3 animation-start', 1420);
        setTimeout(() => this.holder4.classList += ' visible holder-4 animation-start', 1780);
        setTimeout(() => this.holder6.classList += ' visible holder-5 animation-start', 2140);
    },
    resetAll: function(changeable) {
        document.querySelectorAll('.visible').forEach(function(item){
            if (
                ((changeable === 'visor' || changeable === 'holder') && item.classList.value.indexOf('const__helmet') !== -1 ) ||
                (changeable === 'visor' && constructor.holderChosen && item.classList.value.indexOf('const__holder') !== -1) ||
                (changeable === 'holder' && constructor.visorChosen && item.classList.value.indexOf('const__visor') !== -1)
            ) {} else {
                item.classList.remove('visible');
            }
        });
        document.querySelectorAll('.chosen').forEach(function(item){
            if (
                ((changeable === 'visor' || changeable === 'holder') && item.id.indexOf('option-helmet') !== -1 ) ||
                (changeable === 'visor' && constructor.holderChosen && item.id.indexOf('option-holder') !== -1) ||
                (changeable === 'holder' && constructor.visorChosen && item.id.indexOf('option-visor') !== -1)
            ) {} else {
                item.classList.remove('chosen');
            }
        });
        setTimeout(function(){
            document.querySelectorAll('.animation-start').forEach(function(item){item.classList.remove('animation-start')});
        },700);
        if (changeable === 'helmet'){
            document.querySelectorAll('.helmet-chosen').forEach(function(item){item.classList.remove('helmet-chosen')});
        }
        if (changeable === 'visor') {
            document.querySelectorAll('.visor-chosen').forEach(function(item){item.classList.remove('visor-chosen')});
        }
        if (changeable === 'holder') {
            document.querySelectorAll('.holder-chosen').forEach(function(item){item.classList.remove('holder-chosen')});
        }
    },
    chooseHelmet: function(helmet) {
        this.resetAll('helmet');
        document.getElementById('option-helmet-' + helmet.slice(-1).toLowerCase()).classList += ' chosen';
        document.getElementById('chosen-helmet').innerText = document.getElementById('option-helmet-' + helmet.slice(-1).toLowerCase()).querySelector('.custom__opt-name').innerText;
        this[helmet].classList += ' visible helmet-chosen';
        this.helmetChosen = helmet;
    },
    chooseVisor: function(visor) {
        this.resetAll('visor');
        document.getElementById('option-visor-' + visor).classList += ' chosen';
        document.getElementById('chosen-visor').innerText = document.getElementById('option-visor-' + visor).querySelector('.custom__opt-name').innerText;
        this['visor' + visor].classList += ' visible visor-chosen';
        this.visorChosen = 'visor' + visor;
    },
    chooseHolder: function(holder) {
        this.resetAll('holder');
        document.getElementById('option-holder-' + holder.slice(-1)).classList += ' chosen';
        document.getElementById('chosen-holder').innerText = document.getElementById('option-holder-' + holder.slice(-1)).querySelector('.custom__opt-name').innerText;
        this[holder].classList += ' visible holder-chosen';
        this.holderChosen = holder;
    }
};
document.getElementById('option-helmet-g').addEventListener('click', constructor.chooseHelmet.bind(constructor, 'helmetG'));
document.getElementById('option-helmet-m').addEventListener('click', constructor.chooseHelmet.bind(constructor, 'helmetM'));
document.getElementById('option-helmet-w').addEventListener('click', constructor.chooseHelmet.bind(constructor, 'helmetW'));
document.getElementById('option-visor-1').addEventListener('click', constructor.chooseVisor.bind(constructor, '1'));
document.getElementById('option-visor-2').addEventListener('click', constructor.chooseVisor.bind(constructor, '2'));
document.getElementById('option-visor-3').addEventListener('click', constructor.chooseVisor.bind(constructor, '3'));
document.getElementById('option-visor-4').addEventListener('click', constructor.chooseVisor.bind(constructor, '4'));
document.getElementById('option-visor-5').addEventListener('click', constructor.chooseVisor.bind(constructor, '5'));
document.getElementById('option-visor-6').addEventListener('click', constructor.chooseVisor.bind(constructor, '6'));
document.getElementById('option-holder-1').addEventListener('click', constructor.chooseHolder.bind(constructor, 'holder1'));
document.getElementById('option-holder-2').addEventListener('click', constructor.chooseHolder.bind(constructor, 'holder2'));
document.getElementById('option-holder-3').addEventListener('click', constructor.chooseHolder.bind(constructor, 'holder3'));
document.getElementById('option-holder-4').addEventListener('click', constructor.chooseHolder.bind(constructor, 'holder4'));
document.getElementById('option-holder-5').addEventListener('click', constructor.chooseHolder.bind(constructor, 'holder5'));
document.getElementById('option-holder-6').addEventListener('click', constructor.chooseHolder.bind(constructor, 'holder6'));
document.getElementById('option-holder-7').addEventListener('click', constructor.chooseHolder.bind(constructor, 'holder7'));

let last_known_scroll_position = 0;
let ticking = false;
let constructorAnimationPlayed = false;
let scrollArrowVisible = false;
let evolutionHelmetAnimationPlayed = false;
let noiseAnimationPlayed = false;
let sizesAnimationPlayed = false;
let scratchAnimationPlayed = false;
let absorptionAnimationPlayed = false;
let specsAnimationPlayed = false;
let visitAnimationPlayed = false;

function doSomething(scroll_pos) {
    if (!scrollArrowVisible && scroll_pos > 100) {
        document.getElementById('arrowToTop').classList.value += ' visibleArr';
        document.getElementById('arrowToTop').classList.remove('invisible');
        scrollArrowVisible = true;
    } else if (scrollArrowVisible && scroll_pos<= 100) {
        document.getElementById('arrowToTop').classList.remove('visibleArr');
        document.getElementById('arrowToTop').classList.value += ' invisible';
        scrollArrowVisible = false
    }
    if (!constructorAnimationPlayed && scroll_pos > document.getElementById('customization').getBoundingClientRect().top - document.body.getBoundingClientRect().top - 230) {
        constructor.playStartingAnimation();
        constructorAnimationPlayed = true;
    }
    if (!evolutionHelmetAnimationPlayed && scroll_pos > document.getElementById('evolution').getBoundingClientRect().top - document.body.getBoundingClientRect().top - 300) {
        document.getElementById('evolutionHelmet').classList.value += ' slideInRightBottom';
        document.getElementById('evolutionFour').classList.value += ' zoomIn';
        evolutionHelmetAnimationPlayed = true
    }
    if (!noiseAnimationPlayed && scroll_pos > document.getElementById('noiseContainer').getBoundingClientRect().top - document.body.getBoundingClientRect().top + 50) {
        document.getElementById('noiseHelmet').classList.value += ' animated';
        document.getElementById('noiseText').classList.value += ' animated';
        noiseAnimationPlayed = true
    }
    if (!sizesAnimationPlayed && scroll_pos > document.getElementById('sizesWrapper').getBoundingClientRect().top - document.body.getBoundingClientRect().top - 350) {
        document.getElementById('sizesButtons').classList.value += ' animated';
        document.getElementById('sizesHelmet').classList.value += ' animated';
        sizesAnimationPlayed = true
    }
    if (!scratchAnimationPlayed && scroll_pos > document.getElementById('specsWrapper').getBoundingClientRect().top - document.body.getBoundingClientRect().top - 180) {
        document.getElementById('specsHelmet').classList.value += ' animated';
        scratchAnimationPlayed = true
    }
    if (!absorptionAnimationPlayed && scroll_pos > document.getElementById('protectionWrapper').getBoundingClientRect().top - document.body.getBoundingClientRect().top - 180) {
        document.getElementById('protectionHelmet').classList.value += ' animated';
        absorptionAnimationPlayed = true
    }
    if (!specsAnimationPlayed && scroll_pos > document.getElementById('specs').getBoundingClientRect().top - document.body.getBoundingClientRect().top + 400) {
        document.getElementById('questionHelmet').classList.value += ' animated';
        specsAnimationPlayed = true
    }
    if (!visitAnimationPlayed && scroll_pos > document.getElementById('visit').getBoundingClientRect().top - document.body.getBoundingClientRect().top - 300) {
        document.getElementById('visitHelmet1').classList.value += ' animated';
        document.getElementById('visitHelmet2').classList.value += ' animated';
        document.getElementById('visitHelmet3').classList.value += ' animated';
        document.getElementById('visitHelmet4').classList.value += ' animated';
        visitAnimationPlayed = true
    }
}

window.addEventListener('scroll', function() {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function() {
            doSomething(last_known_scroll_position);
            ticking = false;
        });
        ticking = true;
    }
});

function modalShow(){
    document.getElementById('modal').classList.value += ' active';
    let helmet = constructor[constructor.helmetChosen].cloneNode();
    helmet.classList='modal__helmet';
    let visor = constructor[constructor.visorChosen].cloneNode();
    visor.classList='modal__visor';
    let holder = constructor[constructor.holderChosen].cloneNode();
    holder.classList='modal__holder';
    let wrapper = document.getElementById('modalHelmet');
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }
    wrapper.append(helmet)
    wrapper.append(visor)
    wrapper.append(holder)
}

function modalClose(){
    document.getElementById('modal').classList.remove('active');
}