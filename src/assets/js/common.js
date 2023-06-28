import $ from 'jquery';

class CommonJS {
    
    setPageHeroHeight() {

        $('.page-hero.clip-path-ellipse .content').css('height', window.innerHeight * 1.2 + 'px')

    }
    
}

let commonJs = new CommonJS();

export default commonJs;