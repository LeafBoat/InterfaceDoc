/**
 * Created by Administrator on 2018/2/2.
 */
function createTR(title, position) {
    var td1 = $('<td/>').append($('<input/>').attr("name", "key_" + title + "_" + position));
    var td2 = $('<td/>').append($('<input/>').attr("name", "value_" + title + "_" + position));
    var td3 = $('<td/>').append($('<input/>').attr("name", "description_" + title + "_" + position));
    return $('<tr/>').append(td1).append(td2).append(td3)
}
/*

 <div>
 <h4 class="table_title" id="h4_path">Path</h4>
 <button type="button" id="button_path" class="action_add">添加Path</button>
 </div>
 <table class="table table-bordered">

 <tbody id="tbody_path">
 </tbody>
 </table>
 </div>
 */
function createFormGroup(title) {
    var form_group = $('<div class="form-group"></div>');
    var title_div = $("<div/>")
        .append($('<h4 class="title" id="h4_' + title + '">' + title + '</h4>'))
        .append($('<button type="button" id="button_' + title + '" class="button_add">添加' + title + '</button>'));

    form_group.append(title_div);

    var table = $('<table class="table table-bordered"></table>')
        .append($('<thead><tr><th>Key</th><th>Value</th><th>Description</th></tr></thead>'))
        .append($('<tbody id="tbody_' + title + '">'));
    form_group.append(table);
    return form_group
}