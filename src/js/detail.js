/* 
* @Author: Marte
* @Date:   2018-02-05 19:25:23
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-06 13:54:41
*/

require(['config'],function(){
    // 建议：有返回值的写前面
    require(['jquery'],function($){
        // 哪个文件调用它他的基础路径就是谁，这里是index.html调用它，所以他的基础路径是index.html所在目录
        $('header').load('header');
        $('footer').load('footer');
        $('#floatmenu').load('floatmenu');
        $('#sortnav').load('nav');
    })

});