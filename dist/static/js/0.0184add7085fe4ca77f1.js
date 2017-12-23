webpackJsonp([0],{CUTj:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={companyCode:"0001",companyName:"浙江金爱农网络科技有限公司",debtPolicyStepBoList:[{debtPolicyStepStaffBoList:[{id:101,policyStepId:2,staffId:684,staffName:"尹佳倩"}],id:2,policyId:2,stepName:"收息前手"},{debtPolicyStepStaffBoList:[{id:105,policyStepId:3,staffId:695,staffName:"张财银"},{id:106,policyStepId:3,staffId:696,staffName:"吴顺"}],id:3,policyId:2,stepName:"电催前手"},{debtPolicyStepStaffBoList:[{id:120,policyStepId:4,staffId:684,staffName:"尹佳倩"},{id:121,policyStepId:4,staffId:685,staffName:"王露颖"}],id:4,policyId:2,stepName:"电催中手"},{debtPolicyStepStaffBoList:[{id:124,policyStepId:5,staffId:708,staffName:"邹继攀"}],id:5,policyId:2,stepName:"上门催收"},{debtPolicyStepStaffBoList:[{id:130,policyStepId:6,staffId:717,staffName:"朱梦莎"}],id:6,policyId:2,stepName:"法务"}],id:2,name:"浙江微农贷催收策略",productCode:"WND",productName:"微农贷"},i={data:function(){return{title:"",isLock:!1,form:{},strategyRoleList:[],addInfo:{isOpen:!1,form:{stepName:"",debtPolicyStepStaffBoList:[]}},rules:{name:[{required:!0,message:"角色名称不能为空",trigger:"change"}],debtPolicyStepStaffBoList:[{type:"array",required:!0,message:"员工不能为空",trigger:"change"}]}}},watch:{"$route.path":"checkRoute"},methods:{checkRoute:function(){this.resetDefaultForm(),void 0===this.$route.params.id?(this.title="新增",this.isLock=!1):(this.title="修改",this.isLock=!0,this.form={id:a,name:a.name,companyCode:a.companyCode,productCode:a.productCode,stepStaffJSON:a.debtPolicyStepBoList})},resetDefaultForm:function(){this.form={companyCode:"",productCode:"",name:"",stepStaffJSON:[]}},formatValue:function(e,t,o){if("debtPolicyStepStaffBoList"===t.property){var a=[];return o.forEach(function(e){a.push(e.staffName)}),a.join("，")}},submitForm:function(e){console.log("整页保存提交")},sendAddAjax:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;console.log("在此发送addInfo.form数据"),console.log(t.addInfo.form)})},resetAddInfo:function(){this.resetForm("formByAdd"),this.addInfo.isOpen=!1}},created:function(){this.checkRoute()}},l=i,r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-main",[o("Breadcrumb",[o("el-breadcrumb-item",[e._v(e._s(e.title))])],1),e._v(" "),o("ContentWarp",[o("el-form",{ref:"form",staticClass:"content-form-warp",attrs:{rules:e.rules,model:e.form,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"所属公司"}},[o("SelectCompany",{attrs:{disabled:e.isLock},model:{value:e.form.companyCode,callback:function(t){e.$set(e.form,"companyCode",t)},expression:"form.companyCode"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"所属产品"}},[o("SelectProduct",{attrs:{disabled:e.isLock},model:{value:e.form.productCode,callback:function(t){e.$set(e.form,"productCode",t)},expression:"form.productCode"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"策略名称"}},[o("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"策略角色"}},[o("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(t){e.addInfo.isOpen=!0}}},[e._v("新增")]),e._v(" "),o("el-table",{attrs:{border:"",stripe:"",data:e.form.stepStaffJSON,size:"small"}},[o("el-table-column",{attrs:{align:"center",label:"角色名称",prop:"stepName"}}),e._v(" "),o("el-table-column",{attrs:{align:"center",label:"员工姓名",prop:"debtPolicyStepStaffBoList",formatter:e.formatValue}}),e._v(" "),o("el-table-column",{attrs:{align:"center",label:"操作",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit",plain:""},on:{click:function(o){e.openChange(t.row)}}},[e._v("修改")]),e._v(" "),o("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(o){e.openDelete(t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("保存")])],1)],1)],1),e._v(" "),o("el-dialog",{attrs:{title:"新增策略角色",width:"600px",center:"",visible:e.addInfo.isOpen,"show-close":!1},on:{"update:visible":function(t){e.$set(e.addInfo,"isOpen",t)}}},[o("el-form",{ref:"formByAdd",attrs:{model:e.addInfo.form,rules:e.rules,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[o("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.addInfo.form.name,callback:function(t){e.$set(e.addInfo.form,"name",t)},expression:"addInfo.form.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"选择员工",prop:"debtPolicyStepStaffBoList"}},[o("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.addInfo.form.debtPolicyStepStaffBoList,callback:function(t){e.$set(e.addInfo.form,"debtPolicyStepStaffBoList",t)},expression:"addInfo.form.debtPolicyStepStaffBoList"}},[o("el-option",{attrs:{label:"王露颖",value:"685"}}),e._v(" "),o("el-option",{attrs:{label:"邹继攀",value:"708"}})],1)],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sendAddAjax("formByAdd")}}},[e._v("新 增")]),e._v(" "),o("el-button",{on:{click:e.resetAddInfo}},[e._v("取 消")])],1)],1)],1)},s=[],n={render:r,staticRenderFns:s},f=n,d=o("/Xao"),c=d(l,f,!1,null,null,null);t.default=c.exports}});