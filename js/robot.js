(function () {

    //创建root节点
    var div = document.createElement('div');
    div.className = "robot-root";

    div.innerHTML='<transition name="fade"><chat v-drag v-if="showChat" @close="close"></chat></transition><div class="chat-btn" @click="showChat=!showChat"><span :class="!showChat?\'iconfont icon-msg\':\'iconfont icon-x\'"></span></div>'
    document.body.appendChild(div);
    //<link href="css/css.css" type="text/css" rel="stylesheet" />
    //引入css
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'https://www.ridesharing.top/css/chat.css';
    document.head.appendChild(link);

    link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'https://at.alicdn.com/t/font_1430622_8wmvmxd3l3y.css';
    document.head.appendChild(link);

    //引入js
    var libs = ['vue', 'chat'];
    libs.forEach(item => {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.ridesharing.top/js/' + item + '.js';
        document.body.appendChild(script);
    });
})();