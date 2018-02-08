/* 
* @Author: Marte
* @Date:   2018-02-04 20:58:22
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 16:57:24
*/


requirejs.config({
        paths : {
            'jquery':'../lib/jquery-3.2.1',
            'banner':'../lib/jquery.lxCarousel/jquery.lxCarousel',
            'zoom':'../lib/jquery.gdsZoom/jquery.gdsZoom'
        },
        shim:{
            'banner':['jquery'],
            'zoom':['jquery']
        }
    
});


