/* 
* @Author: Marte
* @Date:   2018-02-04 20:58:22
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-04 21:22:27
*/


requirejs.config({
        paths : {
            'jquery':'../lib/jquery-3.2.1',
            'index':'index'
        },
        shim:{
            'index':['jquery']
        }
    
});


