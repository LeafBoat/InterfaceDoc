package controllers

import (
	"fmt"
	"strconv"
)

type InterfaceController struct {
	BaseController
}

func (controller *InterfaceController) Get() {
	controller.TplName = "interface/interface.html"
}

func (controller *InterfaceController)Post() {
	controller.TplName = "interface/interface.html"
	err := controller.Ctx.Request.ParseForm()
	if err != nil {
		panic(err)
	}
	values := controller.Ctx.Request.Form
	i := 0
	for {
		fmt.Println(strconv.Itoa(i)+"-------------------------------")
		//"path_table_key_0=阿道夫噶&path_table_value_0=&path_table_Descript_0="
		pathKey := values.Get("path_table_key_" + strconv.Itoa(i))
		pathValue := values.Get("path_table_value_" + strconv.Itoa(i))
		pathDescription := values.Get("path_table_description_" + strconv.Itoa(i))
		fmt.Println(pathKey, pathValue, pathDescription,"+++++++++++++++")
		if (pathKey == ""&&pathValue == ""&&pathDescription == "") {
			break
		}
		i++
	}
}
