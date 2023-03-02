export const svgService = { getSvg }

const Svgs = {
    archive: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M204.615 938q-32.565 0-54.59-21Q128 896 128 863.385V380.154q0-13.847 3.807-25.154 3.808-11.308 12.5-19.462l54.222-64.795q7.086-8.128 18.604-13.436Q228.652 252 241.385 252h477.23q12.733 0 24.252 4.538 11.518 4.538 18.868 14.209l54.53 64.813q7.351 8.132 11.543 19.44Q832 366.307 832 380.154v483.231Q832 896 809.975 917t-54.59 21h-550.77ZM210 358h540l-36-40H246l-36 40Zm-16 66v423.385q0 9.23 7.692 16.923Q209.385 872 218.615 872h522.77q9.23 0 16.923-7.692Q766 856.615 766 847.385V424H194Zm286 369.693 153.308-153.308L588 593.077l-75 75v-181h-66v181l-75-75-45.308 47.308L480 793.693ZM194 872h572-572Z"/></svg>`,
    check_box_fill: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="m424 736.308 277.846-277.846-46.308-46.308L424 643.692l-116-116L261.692 574 424 736.308ZM224.615 922q-38.34 0-64.478-26.137Q134 869.725 134 831.385v-510.77q0-38.34 26.137-64.478Q186.275 230 224.615 230h510.77q38.34 0 64.478 26.137Q826 282.275 826 320.615v510.77q0 38.34-26.137 64.478Q773.725 922 735.385 922h-510.77Zm0-66h510.77q9.23 0 16.923-7.692Q760 840.615 760 831.385v-510.77q0-9.23-7.692-16.923Q744.615 296 735.385 296h-510.77q-9.23 0-16.923 7.692Q200 311.385 200 320.615v510.77q0 9.23 7.692 16.923Q215.385 856 224.615 856ZM200 296v560-560Z"/></svg>`,
    check_box_outline: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M224.615 922q-38.34 0-64.478-26.137Q134 869.725 134 831.385v-510.77q0-38.34 26.137-64.478Q186.275 230 224.615 230h510.77q38.34 0 64.478 26.137Q826 282.275 826 320.615v510.77q0 38.34-26.137 64.478Q773.725 922 735.385 922h-510.77Zm0-66h510.77q9.23 0 16.923-7.692Q760 840.615 760 831.385v-510.77q0-9.23-7.692-16.923Q744.615 296 735.385 296h-510.77q-9.23 0-16.923 7.692Q200 311.385 200 320.615v510.77q0 9.23 7.692 16.923Q215.385 856 224.615 856Z"/></svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M252 852.308 205.692 804l227-228-227-230L252 297.692l229 230 227-230L754.308 346l-227 230 227 228L708 852.308l-227-230-229 230Z"/></svg>`,
    compose_edit: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M197.308 872h60.923L649 481.231l-60.923-60.923-390.769 390.769V872Zm573.308-419.538L616.615 296.923l47.308-47.308q21.231-21.231 48.192-20.731 26.962.5 47.193 21.731L818.693 311q20.23 20.231 19.461 47.461-.769 27.231-21 47.462l-46.538 46.539Zm-27.77 27L286.308 938H131.307V783l457.539-457.539 154 154.001Zm-124.692-29.077-30.077-30.077L649 481.231l-30.846-30.846Z"/></svg>`,
    delete: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M300.615 928q-38.846 0-64.731-25.884Q210 876.231 210 837.385V332h-40v-66h188v-38.77h246V266h188v66h-40v505.385q0 38.34-26.137 64.478Q699.725 928 661.385 928h-360.77ZM686 332H276v505.385q0 10.769 6.923 17.692T300.615 862h360.77q9.23 0 16.923-7.692Q686 846.615 686 837.385V332ZM371.307 781h66.001V413h-66.001v368Zm153.385 0h66.001V413h-66.001v368ZM276 332v530-530Z"/></svg>`,
    full_screen: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M127 929V623h66v194.461L721.461 289H527v-66h306v306h-66V334.539L238.539 863H433v66H127Z"/></svg>`,
    mark_as_read: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="m480 151.692 360.462 214.154q14.769 10.385 23.154 24.769Q872 405 872 424v417.385q0 38.34-26.137 64.478Q819.725 932 781.385 932h-602.77q-38.34 0-64.478-26.137Q88 879.725 88 841.385V424q0-19 8.384-33.385 8.385-14.384 23.154-24.769L480 151.692ZM480 608l320-190-320-190-320 190 320 190Zm0 76.308L154 489.846v351.539q0 10.769 6.923 17.692T178.615 866h602.77q10.769 0 17.692-6.923T806 841.385V489.846L480 684.308ZM480 866h326-652 326Z"/></svg>`,
    minimize: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M244 928v-66h474v66H244Z"/></svg>`,
    more: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M479.841 887.539q-22.341 0-38.091-15.91Q426 855.72 426 833.379t15.909-38.091q15.909-15.75 38.25-15.75t38.091 15.91Q534 811.357 534 833.698t-15.909 38.091q-15.91 15.75-38.25 15.75Zm0-257.539q-22.341 0-38.091-15.909T426 575.841q0-22.341 15.909-38.091t38.25-15.75q22.341 0 38.091 15.909t15.75 38.25q0 22.341-15.909 38.091-15.91 15.75-38.25 15.75Zm0-257.538q-22.341 0-38.091-15.91Q426 340.643 426 318.302t15.909-38.091q15.909-15.75 38.25-15.75t38.091 15.91Q534 296.28 534 318.621t-15.909 38.091q-15.91 15.75-38.25 15.75Z"/></svg>`,
    refresh: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M482.077 890q-129.25 0-220.625-91.339-91.375-91.34-91.375-220.539 0-129.199 91.375-222.661Q352.827 262 482.077 262q72.308 0 135.538 34.384 63.231 34.385 106.308 90.077V262h66v263.231H526.692v-66h168q-33.231-57.846-89.384-91.539Q549.154 334 482.077 334q-103 0-174.5 71t-71.5 173q0 103 71.5 174.5t174.5 71.5q78 0 141.5-44.5t88.5-119.5h68.462Q753.077 761.846 670.5 825.923T482.077 890Z"/></svg>`,
    star: `<svg class="star" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="m373 782 107-64 107 65-29-121 95-82-124-11-49-115-49 115-124 10 95 82-29 121ZM243.002 961.458l63.307-269.766L96.849 510.77l275.614-22.922L480 234.158l107.537 253.69L863.15 510.77 653.691 691.692l63.307 269.766L480 818.537 243.002 961.458ZM480 629Z"/></svg>`,
    sent: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M118.001 884.998V261.002L852.458 573 118.001 884.998ZM188 778l484-206-484-206v149.693L418.921 572 188 628.307V778Zm0 0V366v412Z"/></svg>`,
    inbox: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M206.309 947.999q-41.033 0-69.67-28.638-28.638-28.637-28.638-69.67V302.309q0-41.033 28.638-69.67 28.637-28.638 69.67-28.638h547.382q41.033 0 69.67 28.638 28.638 28.637 28.638 69.67v547.382q0 41.033-28.638 69.67-28.637 28.638-69.67 28.638H206.309Zm0-85.999h547.382q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847V740.307H646.461q-32.154 39-75.461 60.5-43.308 21.5-91 21.5t-91-21.5q-43.307-21.5-75.461-60.5H194v109.384q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462ZM482 736.309q41 0 76-22t56-60h152v-352q0-5.385-3.462-8.847-3.462-3.462-8.847-3.462H206.309q-5.385 0-8.847 3.462-3.462 3.462-3.462 8.847v352h154q21 38 57 60t77 22ZM206.309 862H194h572H206.309Z"/></svg>`,
    draft: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M248.309 987.999q-41.033 0-69.67-28.638-28.638-28.637-28.638-69.67V262.309q0-41.033 28.638-69.67 28.637-28.638 69.67-28.638h309.692l251.998 250.998v474.692q0 41.033-28.638 69.67-28.637 28.638-69.67 28.638H248.309Zm267.692-530V250H248.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v627.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h463.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V457.999H516.001ZM236 250v207.999V250v652V250Z"/></svg>`,
}

function getSvg(iconName) {
    return Svgs[iconName]
}




  