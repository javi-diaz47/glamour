import gsap from 'gsap';
import { Power2 } from 'gsap';
import { Power4 } from 'gsap';

export const loaderAnimation =  
    (loaderClassName) => {

    const { CSSRulePlugin } =  require('gsap/CSSRulePlugin');
    gsap.registerPlugin(CSSRulePlugin);

    const bg = CSSRulePlugin.getRule(`.${loaderClassName}:before`)
    const overlay = CSSRulePlugin.getRule(`.${loaderClassName}:after`)
    const title = `.${loaderClassName} h2`;

    const tl = gsap.timeline();

    
    tl.to(overlay, {
        right: '0%',
        ease: Power2,
        duration: 2,
    }).to('.letter', {
        color: '#BD8051',
        stagger: .2,
        y: 20,
        duration: 1
    }, 0).to(overlay, {
        height: '100%',
        duration: 1,
    }).to(title, {
        visibility: 'hidden',
        duration: 0
    }).to(bg, {
        visibility: 'hidden',
        duration: 0
    }).to(title, {
        visibility: 'hidden',
        duration: 0,
    }).to(overlay, {
        height: '0%',
        ease: Power4,
        duration: 1,
        delay: .1
    });

}
