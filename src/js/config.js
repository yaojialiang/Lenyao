/* 
* @Author: Marte
* @Date:   2018-02-04 20:58:22
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-07 09:18:51
*/


requirejs.config({
        paths : {
            'jquery':'../lib/jquery-3.2.1',
            'banner':'../lib/jquery.lxCarousel/jquery.lxCarousel'
        },
        shim:{
            'banner':['jquery'],
        }
    
});


