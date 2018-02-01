$(function() {
	var childrenlength = $(".dropdown-menu")[0].children.length;
	//给请求方式的列表添加点击事件，根据不同的请求方式展示不同的表单
	for(var i = 0; i < childrenlength; i++) {
		var $li = $(".dropdown-menu")[0].children[i];
		$li.onclick = function() {
			if($("#method")[0].value === this.innerHTML)
				return
			$("#method")[0].value = this.innerHTML;
			var formchildren = $("form")[0].children
			while(formchildren.length > 3) {
				$("form")[0].removeChild($("#submit").prev)
			}
			if(this.innerHTML.toLowerCase() === "get") {
				$("#action_addheader")[0].onclick = function() {
					addRow("header_table")
				}
				createGetForm()
			} else if(this.innerHTML.toLowerCase() === "post") {

			}
		}
	}

	function createGetForm() {
		var div = createFormGroup("path_table", "Path", "action_addPath", addRow)
		$("#submit").before(div);
	}

	function addRow(tableid) {
    		var tbody = document.getElementById(tableid).getElementsByTagName("tbody")[0]
    		var tr = document.createElement("tr")
    		tr.appendChild(createtd(tableid+"_key"+"_"+tbody.children.length))
    		tr.appendChild(createtd(tableid+"_value"+"_"+tbody.children.length))
    		tr.appendChild(createtd(tableid+"_description"+"_"+tbody.children.length))
    		tbody.appendChild(tr)
    }

	function createtd(input_name) {
		//<td><input class="td t_key"/></td>
		var td = document.createElement("td")
		var input = document.createElement("input")
		input.setAttribute("class", "td t_key")
		input.setAttribute("name",input_name)
		td.appendChild(input)
		return td
	}
	/**
	 *
	 * @param {Object} tableId		tableid
	 * @param {Object} tableTitle	table标题
	 * @param {Object} id_action	点击按钮的id
	 * @param {Object} func			点击事件，添加行
	 */
	function createFormGroup(tableId, tableTitle, id_action, func) {
		var form_group = document.createElement("div");
		form_group.setAttribute("class", "form-group");
		var form_group_child1 = document.createElement("div");
		var h4 = document.createElement("h4");
		h4.setAttribute("class", "table_type");
		h4.innerText = tableTitle;
		form_group_child1.appendChild(h4);
		var action_addpath = document.createElement("button");
		action_addpath.setAttribute("class", "action_add");
		action_addpath.setAttribute("id", id_action);
		action_addpath.setAttribute("type", "button");
		action_addpath.innerHTML = "添加" + tableTitle;
		action_addpath.onclick = function() {
			func(tableId);
		}
		form_group_child1.appendChild(action_addpath)
		form_group.appendChild(form_group_child1)

		var form_group_child2 = createTable(tableId)
		form_group.appendChild(form_group_child2)
		return form_group
	}

	function createTable(id) {
		var table = document.createElement("table")
		table.setAttribute("class", "table table-bordered");
		table.setAttribute("id", id);

		var thead = document.createElement("thead")
		var tr = document.createElement("tr")
		var th1 = document.createElement("th")
		th1.innerHTML = "Key"
		var th2 = document.createElement("th")
		th2.innerHTML = "Value"
		var th3 = document.createElement("th")
		th3.innerHTML = "Description"
		tr.appendChild(th1)
		tr.appendChild(th2)
		tr.appendChild(th3)
		thead.appendChild(tr)
		table.appendChild(thead)

		var tbody = document.createElement("tbody")
		table.appendChild(tbody)
		return table
	}

	$("form").submit(function(e) {
		e.preventDefault();
		var $form = $(this);
		var data =  $($form).serialize()
		//序列化获得表单数据，结果为：user_id=12&user_name=John&user_age=20

        var submitData=decodeURIComponent(data,true);
        //submitData是解码后的表单数据，结果同上
		$.ajax({
			type: "POST",
			url: "/interface",
			data:submitData ,
			cache: false, //false是不缓存，true为缓存
			async: true, //true为异步，false为同步
			beforeSend: function() {
				//请求前
			},
			success: function(result) {
				//请求成功时
			},
			complete: function() {
				//请求结束时
			},
			error: function() {
				//请求失败时
			}
		});
	});

})