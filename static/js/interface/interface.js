$(function () {
    var childrenlength = $(".dropdown-menu")[0].children.length;
    //遍历请求方式，添加点击事件
    for (var i = 0; i < childrenlength; i++) {
        //获取请求方式的下来框节点
        var $li = $(".dropdown-menu")[0].children[i];
        $li.onclick = function () {
            if ($("#method")[0].value === this.innerHTML)
                return;
            $("#method")[0].value = this.innerHTML;
            var formchildren = $("form")[0].children
            while (formchildren.length > 3) {
                $("form")[0].removeChild($("#submit").prev)
            }
            if (this.innerHTML.toLowerCase() === "get") {
                $("#submit").before(createFormGroup("path"));
                $("#submit").before(createFormGroup("param"));
                $("#button_path").click(function () {
                    $('#tbody_path').append(createTR("path", $('#tbody_path').children.length));
                });
                $("#button_param").click(function () {
                    $('#tbody_param').append(createTR("param", $('#tbody_param').children.length));
                });
            } else if (this.innerHTML.toLowerCase() === "post") {

            }
        }
    }

    $("form").submit(function (e) {
        e.preventDefault();
        var $form = $(this);
        var data = $($form).serialize()
        //序列化获得表单数据，结果为：user_id=12&user_name=John&user_age=20

        var submitData = decodeURIComponent(data, true);
        //submitData是解码后的表单数据，结果同上
        $.ajax({
            type: "POST",
            url: "/interface",
            data: submitData,
            cache: false, //false是不缓存，true为缓存
            async: true, //true为异步，false为同步
            beforeSend: function () {
                //请求前
            },
            success: function (result) {
                //请求成功时
            },
            complete: function () {
                //请求结束时
            },
            error: function () {
                //请求失败时
            }
        });
    });

})