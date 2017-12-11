webpackJsonp([16],{"1kIR":function(e,t){e.exports=[{code:"WND",id:82,modelId:"6",name:"微农贷1.0",status:"0"}]},WFm3:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("1kIR"),a=o.n(n),s={name:"ProductConfig",data:function(){return{searchInfo:{list:[],form:{name:""}},addInfo:{isOpen:!1,form:{name:"",code:"",modelId:""}},changeInfo:{isOpen:!1,form:{}},statusInfo:{isOpen:!1,form:{}},rules:{name:[{required:!0,message:"名称不能为空",trigger:"change"}],code:[{required:!0,message:"产品码不能为空",trigger:"change"}],modelId:[{required:!0,message:"模型ID不能为空",trigger:"change"}]}}},methods:{getListAjax:function(){console.log("发送ajax查询数据或分页规则处理"),this.searchInfo.list=a.a},formatValue:function(e,t,o){return this.fomatLoopValue(o,[{text:"0",value:"启用"},{text:"1",value:"禁用"}])},sendAddAjax:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;"2"!==t.addInfo.form.type&&(t.addInfo.form.roleId=""),console.log("在此发送addInfo.form数据"),console.log(t.addInfo.form)})},resetAddInfo:function(){this.resetForm("formByAdd"),this.addInfo.isOpen=!1},openChange:function(e){var t=this;this.changeInfo.isOpen=!0,setTimeout(function(){t.$refs.formByChange.resetFields(),t.changeInfo.form={id:e.id,name:e.name,code:e.code,modelId:e.modelId}},100)},sendChangeAjax:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;"2"!==t.changeInfo.form.type&&(t.changeInfo.form.roleId=""),console.log("在此发送changeInfo.form数据"),console.log(t.changeInfo.form)})},resetChangeInfo:function(){this.$refs.formByChange.resetFields(),this.changeInfo.isOpen=!1},openStatus:function(e){this.statusInfo={isOpen:!0,form:e}},sendStatusAjax:function(){console.log("确认启用或禁用")}},mounted:function(){this.getListAjax()}},r=s,l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-main",[o("Breadcrumb"),e._v(" "),o("SearchWarp",[o("el-form",{ref:"searchInfo.form",attrs:{inline:!0,model:e.searchInfo.form}},[o("el-form-item",{attrs:{label:"产品名称"}},[o("el-input",{attrs:{type:"text",placeholder:"请输入产品名称"},model:{value:e.searchInfo.form.name,callback:function(t){e.$set(e.searchInfo.form,"name",t)},expression:"searchInfo.form.name"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"success"},on:{click:e.getListAjax}},[e._v("查询")]),e._v(" "),o("el-button",{attrs:{type:"danger"},on:{click:function(t){e.addInfo.isOpen=!0}}},[e._v("新增")])],1)],1)],1),e._v(" "),o("ContentWarp",[o("el-table",{attrs:{border:"",stripe:"",data:e.searchInfo.list,size:"small"}},[o("el-table-column",{attrs:{align:"center",label:"产品名称",prop:"name","min-width":"150"}}),e._v(" "),o("el-table-column",{attrs:{align:"center",label:"产品码",prop:"code","min-width":"100"}}),e._v(" "),o("el-table-column",{attrs:{align:"center",label:"模型ID",prop:"modelId","min-width":"100"}}),e._v(" "),o("el-table-column",{attrs:{align:"center",label:"状态",prop:"status",formatter:e.formatValue,"min-width":"60"}}),e._v(" "),o("el-table-column",{attrs:{align:"center",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit",plain:""},on:{click:function(o){e.openChange(t.row)}}},[e._v("修改")]),e._v(" "),o("el-button",{attrs:{size:"mini",type:0===t.row.status?"success":"danger",plain:""},on:{click:function(o){e.openStatus(t.row)}}},[e._v(e._s(0===t.row.status?"启用":"禁用"))])]}}])})],1)],1),e._v(" "),o("el-dialog",{attrs:{title:"新增产品",width:"600px",center:"",visible:e.addInfo.isOpen,"show-close":!1},on:{"update:visible":function(t){e.$set(e.addInfo,"isOpen",t)}}},[o("el-form",{ref:"formByAdd",attrs:{model:e.addInfo.form,rules:e.rules,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"产品名称",prop:"name"}},[o("el-input",{model:{value:e.addInfo.form.name,callback:function(t){e.$set(e.addInfo.form,"name",t)},expression:"addInfo.form.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"产品码",prop:"code"}},[o("el-input",{model:{value:e.addInfo.form.code,callback:function(t){e.$set(e.addInfo.form,"code",t)},expression:"addInfo.form.code"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"模型ID",prop:"modelId"}},[o("el-input",{model:{value:e.addInfo.form.modelId,callback:function(t){e.$set(e.addInfo.form,"modelId",t)},expression:"addInfo.form.modelId"}})],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sendAddAjax("formByAdd")}}},[e._v("新 增")]),e._v(" "),o("el-button",{on:{click:e.resetAddInfo}},[e._v("取 消")])],1)],1),e._v(" "),o("el-dialog",{attrs:{title:"修改产品",width:"600px",center:"",visible:e.changeInfo.isOpen,"show-close":!1},on:{"update:visible":function(t){e.$set(e.changeInfo,"isOpen",t)}}},[o("el-form",{ref:"formByChange",attrs:{model:e.changeInfo.form,rules:e.rules,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"产品名称",prop:"name"}},[o("el-input",{model:{value:e.changeInfo.form.name,callback:function(t){e.$set(e.changeInfo.form,"name",t)},expression:"changeInfo.form.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"产品码",prop:"code"}},[o("el-input",{attrs:{disabled:""},model:{value:e.changeInfo.form.code,callback:function(t){e.$set(e.changeInfo.form,"code",t)},expression:"changeInfo.form.code"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"模型ID",prop:"modelId"}},[o("el-input",{attrs:{disabled:""},model:{value:e.changeInfo.form.modelId,callback:function(t){e.$set(e.changeInfo.form,"modelId",t)},expression:"changeInfo.form.modelId"}})],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sendChangeAjax("formByChange")}}},[e._v("修 改")]),e._v(" "),o("el-button",{on:{click:e.resetChangeInfo}},[e._v("取 消")])],1)],1),e._v(" "),o("el-dialog",{attrs:{title:"1"===e.statusInfo.form.status?"启用":"禁用",width:"600px",center:"",visible:e.statusInfo.isOpen,"show-close":!1},on:{"update:visible":function(t){e.$set(e.statusInfo,"isOpen",t)}}},[o("p",{staticClass:"text-center"},[e._v("确定"+e._s("1"===e.statusInfo.form.status?"启用":"禁用")),o("span",{staticClass:"text-red"},[e._v(" "+e._s(e.statusInfo.form.name)+" ")]),e._v("吗？")]),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:e.sendStatusAjax}},[e._v("确 认")]),e._v(" "),o("el-button",{on:{click:function(t){e.statusInfo.isOpen=!1}}},[e._v("取 消")])],1)])],1)},i=[],f={render:l,staticRenderFns:i},d=f,c=o("/Xao"),m=c(r,d,!1,null,null,null);t.default=m.exports}});