(function(win, doc){
    'use strict';
    
    const $faqLi = document.querySelectorAll('[data-js="faq-li"]');
    const $faqP = document.querySelectorAll('[data-js="faq-p"]');
    const $faqImg = document.querySelectorAll('[data-js="faq-img"]');

    $faqLi.forEach((item, index) => {
        item.addEventListener('click', function() {
            $faqP[index].classList.toggle('none');
            if($faqP[index].classList.contains('none')){
                $faqImg[index].setAttribute('src','/assets/images/icon-plus.svg');
                $faqImg[index].setAttribute('alt','icon-plus');
            } else {
                $faqImg[index].setAttribute('src','/assets/images/icon-minus.svg');
                $faqImg[index].setAttribute('alt','icon-minus');
            }
        }, false);
    })
    
})(window, document);