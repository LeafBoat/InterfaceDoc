/**
 * Created by Administrator on 2018/2/2.
 */
$(function () {
    //Demo
    layui.use(['tree', 'layer'], function () {
        var layer = layui.layer, $ = layui.jquery;

        layui.tree({
            elem: '#demo1' //指定元素
            , target: '_blank' //是否新选项卡打开（比如节点返回href才有效）
            , click: function (item) { //点击节点回调
                if (item.level === 3){
                    //todo 展示url内容
                }
                layer.msg('当前节名称：' + item.name + '<br>全部参数：' + JSON.stringify(item));
                console.log(item);
            }
            , nodes: [ //节点
                {
                    name: '接口'
                    , id: 1
                    , level: 1
                    , alias: 'changyong'
                }, {
                    name: '数据字典'
                    , id: 2
                    , spread: true
                    , level: 1
                }
            ]
        });

    });
});