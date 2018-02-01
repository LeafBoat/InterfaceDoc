package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context"
)

func init() {
	beego.InsertFilter("/interface",beego.BeforeStatic,FilterNoCache)
}
var FilterNoCache = func(ctx *context.Context) {
	ctx.Output.Header("Cache-Control", "no-cache, no-store, must-revalidate")
	ctx.Output.Header("Pragma", "no-cache")
	ctx.Output.Header("Expires","0")
}