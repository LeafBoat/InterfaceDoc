package routers

import (
	"github.com/astaxie/beego"
	"github.com/qi/InterfaceDoc/controllers"
)

func init() {
	beego.Router("/interface",&controllers.InterfaceController{})
}
