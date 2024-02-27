(function(){"use strict";var t={7982:function(t,e,r){var s=r(6848),o=function(){var t=this,e=t._self._c;return e("div",[e("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit()},click:function(e){return t.closeAllSelectors()}}},[t._m(0),e("div",{staticClass:"form__inputWrapper"},[e("input",{staticClass:"input",class:{form_inputError:t.$v.surname.$dirty&&!t.$v.surname.required},attrs:{type:"text",placeholder:"Фамилия"},domProps:{value:t.surname},on:{input:function(e){return t.setSurname(e.target.value)}}}),e("span",{staticClass:"form_decor"},[t._v("*")]),t.$v.surname.$dirty&&!t.$v.surname.required?e("div",{class:{form_error:t.$v.surname.$dirty&&!t.$v.surname.required}},[t._v("Поле должно быть заполненным")]):t._e()]),e("div",{staticClass:"form__inputWrapper"},[e("input",{staticClass:"input",class:{form_inputError:t.$v.name.$dirty&&!t.$v.name.required},attrs:{type:"text",placeholder:"Имя"},domProps:{value:t.name},on:{input:function(e){return t.setName(e.target.value)}}}),e("span",{staticClass:"form_decor"},[t._v("*")]),t.$v.name.$dirty&&!t.$v.name.required?e("div",{class:{form_error:t.$v.name.$dirty&&!t.$v.name.required}},[t._v("Поле должно быть заполненным")]):t._e()]),e("div",{staticClass:"form__inputWrapper"},[e("input",{staticClass:"input",attrs:{type:"text",placeholder:"Отчество"},domProps:{value:t.patronymic},on:{input:function(e){return t.setPatronymic(e.target.value)}}})]),e("div",{staticClass:"form__inputWrapper"},[e("input",{staticClass:"input",class:{form_inputError:t.$v.dateOfBirth.$dirty&&!t.$v.dateOfBirth.required||!t.$v.dateOfBirth.correctDateOfBirth},attrs:{type:"text",maxlength:"10",placeholder:"Дата рождения: дд.мм.гггг"},domProps:{value:t.dateOfBirth},on:{input:function(e){return t.setDateOfBirth(e.target.value)}}}),e("span",{staticClass:"form_decor"},[t._v("*")]),t.$v.dateOfBirth.$dirty&&!t.$v.dateOfBirth.required?e("div",{class:{form_error:t.$v.dateOfBirth.$dirty&&!t.$v.dateOfBirth.required}},[t._v("Поле должно быть заполненным")]):t.$v.dateOfBirth.correctDateOfBirth?t._e():e("div",{class:{form_error:!t.$v.dateOfBirth.correctDateOfBirth}},[t._v("Поле должно быть формата дд.мм.гггг")]),t.isLettersInDateOfBirth?e("div",{class:{form_error:t.isLettersInDateOfBirth}},[t._v("Поле не должно содержать букв")]):t._e()]),e("div",{staticClass:"form__inputWrapper"},[e("input",{staticClass:"input",class:{form_inputError:t.$v.tel.$dirty&&!t.$v.tel.required||!t.$v.tel.correctTel},attrs:{type:"text",maxlength:"16",placeholder:"Телефон: 7(555)-55-55-555"},domProps:{value:t.tel},on:{input:function(e){return t.setTel(e.target.value)}}}),e("span",{staticClass:"form_decor"},[t._v("*")]),t.$v.tel.$dirty&&!t.$v.tel.required?e("div",{class:{form_error:t.$v.tel.$dirty&&!t.$v.tel.required}},[t._v("Поле должно быть заполненным")]):t.$v.tel.correctTel?t._e():e("div",{class:{form_error:!t.$v.tel.correctTel}},[t._v("Поле должно быть формата 7(555)-55-55-555")]),t.isLettersInTel?e("div",{class:{form_error:t.isLettersInTel}},[t._v("Поле не должно содержать букв")]):t._e()]),e("div",{staticClass:"form_radioInputs"},[e("span",[t._v("Пол:")]),e("div",[e("label",{staticStyle:{cursor:"pointer"},attrs:{for:"male"}},[t._v("Мужской")]),e("input",{staticStyle:{"margin-left":"5px",cursor:"pointer"},attrs:{value:"male",id:"male",name:"sex",type:"radio"},on:{change:function(e){return t.setSex(e.target.value)}}})]),e("div",[e("label",{staticStyle:{cursor:"pointer"},attrs:{for:"female"}},[t._v("Женский")]),e("input",{staticStyle:{"margin-left":"5px",cursor:"pointer"},attrs:{value:"female",id:"female",name:"sex",type:"radio"},on:{change:function(e){return t.setSex(e.target.value)}}})])]),e("div",{staticClass:"form_selectorGoups"},[t.$v.clientGroup.required?e("button",{staticClass:"form_chosenCurrentSelector",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.isClientGroupSelector=!t.isClientGroupSelector}}},[t._l(t.clientGroup,(function(r){return e("button",{key:r,staticClass:"form_chosenCurrentSelectorItem",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.removeChosenClient(r)}}},[t._v(" "+t._s(r)+" "),e("span",{staticClass:"form_chosenCurrentSelectorArrowLeft",class:{"form_chosenCurrentSelectorArrowLeft-rotate":t.isClientGroupSelector}}),e("span",{staticClass:"form_chosenCurrentSelectorArrowRight",class:{"form_chosenCurrentSelectorArrowRight-rotate":t.isClientGroupSelector}})])})),e("span",{staticClass:"form_decor"},[t._v("*")])],2):e("button",{staticClass:"form_chosenCurrentSelector",class:{"form_chosenCurrentSelector-error":!t.$v.clientGroup.required&&t.$v.clientGroup.$dirty||!t.$v.clientGroup.required&&t.isFirstClientOpenGroupSelector},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.openClientsSelector()}}},[t._v(" Группа клиентов "),e("span",{staticClass:"form_chosenCurrentSelectorArrowLeft",class:{"form_chosenCurrentSelectorArrowLeft-rotate":t.isClientGroupSelector}}),e("span",{staticClass:"form_chosenCurrentSelectorArrowRight",class:{"form_chosenCurrentSelectorArrowRight-rotate":t.isClientGroupSelector}}),e("span",{staticClass:"form_decor"},[t._v("*")])]),t.isClientGroupSelector?e("div",{staticClass:"form_currentSelector",on:{click:function(t){t.stopPropagation()}}},t._l(t.clientGroupSelector,(function(r){return e("button",{key:r,staticClass:"form_currentSelectorItem",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addClient(r)}}},[t._v(" "+t._s(r)+" ")])})),0):t._e(),!t.$v.clientGroup.required&&t.$v.clientGroup.$dirty||!t.$v.clientGroup.required&&t.isFirstClientOpenGroupSelector?e("div",{class:{form_error:!t.$v.clientGroup.required&&t.$v.clientGroup.$dirty||!t.$v.clientGroup.required&&t.isFirstClientOpenGroupSelector}},[t._v("Поле должно быть заполненным")]):t._e()]),e("div",{staticClass:"form_selectorGoups"},[0==t.doctor.length?e("button",{staticClass:"form_chosenCurrentSelector",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.openDoctorsSelector()}}},[t._v(" Лечащий врач "),e("span",{staticClass:"form_chosenCurrentSelectorArrowLeft",class:{"form_chosenCurrentSelectorArrowLeft-rotate":t.isDoctorGroupSelector}}),e("span",{staticClass:"form_chosenCurrentSelectorArrowRight",class:{"form_chosenCurrentSelectorArrowRight-rotate":t.isDoctorGroupSelector}})]):e("button",{staticClass:"form_chosenCurrentSelector",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.isDoctorGroupSelector=!t.isDoctorGroupSelector}}},[e("div",{staticClass:"form_chosenCurrentSelectorItem form_chosenCurrentSelectorItem-noHover"},[t._v(" "+t._s(t.doctor)+" "),e("span",{staticClass:"form_chosenCurrentSelectorArrowLeft",class:{"form_chosenCurrentSelectorArrowLeft-rotate":t.isDoctorGroupSelector}}),e("span",{staticClass:"form_chosenCurrentSelectorArrowRight",class:{"form_chosenCurrentSelectorArrowRight-rotate":t.isDoctorGroupSelector}})])]),t.isDoctorGroupSelector?e("div",{staticClass:"form_currentSelector",on:{click:function(t){t.stopPropagation()}}},t._l(t.doctorGroupSelector,(function(r){return e("button",{key:r,staticClass:"form_currentSelectorItem",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addDoctor(r)}}},[t._v(" "+t._s(r)+" ")])})),0):t._e()]),e("div",{staticClass:"form_checkbox"},[e("label",{staticStyle:{cursor:"pointer"},attrs:{for:"SMS"}},[t._v("Не отправлять СМС")]),e("input",{staticStyle:{cursor:"pointer"},attrs:{type:"checkbox",id:"SMS"},domProps:{value:t.sendSMS},on:{change:function(e){return t.setSms()}}})]),e("h3",{staticClass:"form_sectionTitle"},[t._v("Адрес")]),e("div",{staticClass:"form__inputWrapper"},[e("input",{staticClass:"input",attrs:{type:"number",placeholder:"Индекс"},domProps:{value:t.index},on:{input:function(e){return t.setIndex(e.target.value)}}})]),e("div",{staticClass:"form__inputWrapper"},[e("input",{staticClass:"input",attrs:{type:"text",placeholder:"Страна"},domProps:{value:t.country},on:{input:function(e){return t.setCountry(e.target.value)}}})]),e("div",{staticClass:"form__inputWrapper"},[e("input",{staticClass:"input",attrs:{type:"text",placeholder:"Область"},domProps:{value:t.region},on:{input:function(e){return t.setRegion(e.target.value)}}})]),e("div",{staticClass:"form__inputWrapper"},[e("input",{staticClass:"input",class:{form_inputError:t.$v.city.$dirty&&!t.$v.city.required},attrs:{type:"text",placeholder:"Город"},domProps:{value:t.city},on:{input:function(e){return t.setCity(e.target.value)}}}),e("span",{staticClass:"form_decor"},[t._v("*")]),t.$v.city.$dirty&&!t.$v.city.required?e("div",{class:{form_error:t.$v.city.$dirty&&!t.$v.city.required}},[t._v("Поле должно быть заполненным")]):t._e()]),e("div",{staticClass:"form__inputWrapper"},[e("input",{staticClass:"input",attrs:{type:"text",placeholder:"Улица"},domProps:{value:t.street},on:{input:function(e){return t.setStreet(e.target.value)}}})]),e("div",{staticClass:"form__inputWrapper form_lastInput"},[e("input",{staticClass:"input",attrs:{type:"text",placeholder:"Дом"},domProps:{value:t.house},on:{input:function(e){return t.setHouse(e.target.value)}}})]),e("h3",{staticClass:"form_sectionTitle"},[t._v("Паспорт")]),e("div",{staticClass:"form_selectorGoups"},[t.$v.document.required?e("button",{staticClass:"form_chosenCurrentSelector",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.isDocumentGroupSelector=!t.isDocumentGroupSelector}}},[e("div",{staticClass:"form_chosenCurrentSelectorItem form_chosenCurrentSelectorItem-noHover"},[t._v(" "+t._s(t.document)+" "),e("span",{staticClass:"form_chosenCurrentSelectorArrowLeft",class:{"form_chosenCurrentSelectorArrowLeft-rotate":t.isDocumentGroupSelector}}),e("span",{staticClass:"form_chosenCurrentSelectorArrowRight",class:{"form_chosenCurrentSelectorArrowRight-rotate":t.isDocumentGroupSelector}})]),e("span",{staticClass:"form_decor"},[t._v("*")])]):e("button",{staticClass:"form_chosenCurrentSelector",class:{"form_chosenCurrentSelector-error":!t.$v.document.required&&t.isFirstDocumentOpenGroupSelector||!t.$v.document.required&&t.$v.document.$dirty},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.openDocumentsSelector()}}},[t._v(" Тип документа "),e("span",{staticClass:"form_chosenCurrentSelectorArrowLeft",class:{"form_chosenCurrentSelectorArrowLeft-rotate":t.isDocumentGroupSelector}}),e("span",{staticClass:"form_chosenCurrentSelectorArrowRight",class:{"form_chosenCurrentSelectorArrowRight-rotate":t.isDocumentGroupSelector}}),e("span",{staticClass:"form_decor"},[t._v("*")])]),t.isDocumentGroupSelector?e("div",{staticClass:"form_currentSelector",on:{click:function(t){t.stopPropagation()}}},t._l(t.documentGroupSelector,(function(r){return e("button",{key:r,staticClass:"form_currentSelectorItem",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addDocument(r)}}},[t._v(" "+t._s(r)+" ")])})),0):t._e(),!t.$v.document.required&&t.isFirstDocumentOpenGroupSelector||!t.$v.document.required&&t.$v.document.$dirty?e("div",{class:{form_error:!t.$v.document.required&&t.isFirstDocumentOpenGroupSelector||!t.$v.document.required&&t.$v.document.$dirty}},[t._v("Поле должно быть заполненным")]):t._e()]),e("div",{staticClass:"form__inputWrapper"},[e("input",{staticClass:"input",attrs:{type:"number",placeholder:"Серия"},domProps:{value:t.passportSeries},on:{input:function(e){return t.setPassportSeries(e.target.value)}}})]),e("div",{staticClass:"form__inputWrapper"},[e("input",{staticClass:"input",attrs:{type:"number",placeholder:"Номер"},domProps:{value:t.passportNumber},on:{input:function(e){return t.setPassportNumber(e.target.value)}}})]),e("div",{staticClass:"form__inputWrapper"},[e("input",{staticClass:"input",attrs:{type:"text",placeholder:"Кем выдан"},domProps:{value:t.issuedBy},on:{input:function(e){return t.setIssuedBy(e.target.value)}}})]),e("div",{staticClass:"form__inputWrapper form_lastInput",staticStyle:{"margin-bottom":"30px"}},[e("input",{staticClass:"input",class:{form_inputError:t.$v.dateOfIssue.$dirty&&!t.$v.dateOfIssue.required||!t.$v.dateOfIssue.correctDateOfIssue},attrs:{type:"text",placeholder:"Дата выдачи: дд.мм.гггг",maxlength:"10"},domProps:{value:t.dateOfIssue},on:{input:function(e){return t.setDateOfIssue(e.target.value)}}}),e("span",{staticClass:"form_decor"},[t._v("*")]),t.$v.dateOfIssue.$dirty&&!t.$v.dateOfIssue.required?e("div",{class:{form_error:t.$v.dateOfIssue.$dirty&&!t.$v.dateOfIssue.required}},[t._v("Поле должно быть заполненным")]):t.$v.dateOfIssue.correctDateOfIssue?t._e():e("div",{class:{form_error:!t.$v.dateOfIssue.correctDateOfIssue}},[t._v("Поле должно быть формата дд.мм.гггг")]),t.isLettersInDateOfIssue?e("div",{class:{form_error:t.isLettersInDateOfIssue}},[t._v("Поле не должно содержать букв")]):t._e()]),e("button",{staticClass:"form_submitBtn"},[t._v("Создать")]),t.successfulCreated?e("div",{staticStyle:{"font-size":"20px","font-weight":"bold","text-align":"center",color:"#14a61a"}},[t._v("Клиент успешно создан!")]):t._e()])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"form_required"},[e("span",{staticStyle:{color:"red"}},[t._v("*")]),t._v(" Поле обязательное для заполнения.")])}],n=(r(4114),r(6049));const a=n._$.regex("correctTel",/7+\(\d{3}\)-\d{2}-\d{2}-\d{3}/),c=n._$.regex("correctDateOfBirth",/\d{2}.\d{2}.\d{4}/),u=n._$.regex("correctDateOfIssue",/\d{2}.\d{2}.\d{4}/);var l={name:"App",data(){return{surname:"",name:"",patronymic:"",dateOfBirth:"",isLettersInDateOfBirth:!1,formattedDateOfBirth:"",tel:"",isLettersInTel:!1,formattedTel:"",sex:"",clientGroup:[],clientGroupSelector:["VIP","Проблемные","ОМС"],isClientGroupSelector:!1,isFirstClientOpenGroupSelector:!1,doctor:"",doctorGroupSelector:["Иванов","Захаров","Чернышева"],isDoctorGroupSelector:!1,isFirstDoctorOpenGroupSelector:!1,sendSMS:!0,index:"",country:"",region:"",city:"",street:"",house:"",document:"",documentGroupSelector:["Паспорт","Свидетельство о рождении","Вод. удостоверение"],isDocumentGroupSelector:!1,isFirstDocumentOpenGroupSelector:!1,passportSeries:"",passportNumber:"",issuedBy:"",dateOfIssue:"",isLettersInDateOfIssue:!1,formattedDateOfIssue:"",successfulCreated:!1}},validations:{surname:{required:n.mw},name:{required:n.mw},dateOfBirth:{required:n.mw,correctDateOfBirth:c},tel:{required:n.mw,correctTel:a},clientGroup:{required:n.mw},city:{required:n.mw},document:{required:n.mw},dateOfIssue:{required:n.mw,correctDateOfIssue:u}},methods:{setSurname(t){this.surname=t.trim(),this.$v.surname.$touch()},setName(t){this.name=t.trim(),this.$v.name.$touch()},setPatronymic(t){this.patronymic=t.trim()},setDateOfBirth(t){this.dateOfBirth=t.trim();const e=/\./gi,r=t.replace(e,"");return Number(r)?this.isLettersInDateOfBirth=!1:this.isLettersInDateOfBirth=!0,0==this.dateOfBirth.length&&(this.isLettersInDateOfBirth=!1),this.$v.dateOfBirth.$touch(),this.formattedDateOfBirth.length>t.length?(this.dateOfBirth=t,void(this.formattedDateOfBirth=t)):1==t.length?(this.formattedDateOfBirth=t,void(this.dateOfBirth=this.formattedDateOfBirth)):3==t.length||6==t.length?(this.formattedDateOfBirth+=`.${t[t.length-1]}`,void(this.dateOfBirth=this.formattedDateOfBirth)):t.length>1?(this.formattedDateOfBirth+=t[t.length-1],void(this.dateOfBirth=this.formattedDateOfBirth)):void 0},setTel(t){this.tel=t;const e=/\-/gi,r=t.replace(e,"");return Number(r.replace("(","").replace(")",""))?this.isLettersInTel=!1:this.isLettersInTel=!0,0==this.tel.length&&(this.isLettersInTel=!1),this.$v.tel.$touch(),this.formattedTel.length>t.length?(this.tel=t,void(this.formattedTel=t)):1==t.length?(this.formattedTel=`7(${t}`,void(this.tel=this.formattedTel)):6==t.length?(this.formattedTel+=`)-${t[t.length-1]}`,void(this.tel=this.formattedTel)):10==t.length||13==t.length?(this.formattedTel+=`-${t[t.length-1]}`,void(this.tel=this.formattedTel)):t.length>1?(this.formattedTel+=t[t.length-1],void(this.tel=this.formattedTel)):void 0},setSex(t){this.sex=t},removeChosenClient(t){this.clientGroup=this.clientGroup.filter((e=>e!==t))},addClient(t){this.clientGroup.includes(t)||this.clientGroup.push(t)},openClientsSelector(){this.isClientGroupSelector=!this.isClientGroupSelector,this.isFirstClientOpenGroupSelector=!0},openDoctorsSelector(){this.isDoctorGroupSelector=!this.isDoctorGroupSelector,this.isFirstDoctorOpenGroupSelector=!0},addDoctor(t){this.doctor=t},closeAllSelectors(){this.isClientGroupSelector=!1,this.isDoctorGroupSelector=!1,this.isDocumentGroupSelector=!1},setSms(){this.sendSMS=!this.sendSMS},setIndex(t){this.index=t.trim()},setCountry(t){this.country=t.trim()},setRegion(t){this.region=t.trim()},setCity(t){this.city=t.trim(),this.$v.city.$touch()},setStreet(t){this.street=t.trim()},setHouse(t){this.house=t.trim()},openDocumentsSelector(){this.isDocumentGroupSelector=!this.isDocumentGroupSelector,this.isFirstDocumentOpenGroupSelector=!0},addDocument(t){this.document=t},setPassportSeries(t){this.passportSeries=t.trim()},setPassportNumber(t){this.passportNumber=t.trim()},setIssuedBy(t){this.issuedBy=t.trim()},setDateOfIssue(t){this.dateOfIssue=t.trim();const e=/\./gi,r=t.replace(e,"");return Number(r)?this.isLettersInDateOfIssue=!1:this.isLettersInDateOfIssue=!0,0==this.dateOfIssue.length&&(this.isLettersInDateOfIssue=!1),this.$v.dateOfIssue.$touch(),this.formattedDateOfIssue.length>t.length?(this.dateOfIssue=t,void(this.formattedDateOfIssue=t)):1==t.length?(this.formattedDateOfIssue=t,void(this.dateOfIssue=this.formattedDateOfIssue)):3==t.length||6==t.length?(this.formattedDateOfIssue+=`.${t[t.length-1]}`,void(this.dateOfIssue=this.formattedDateOfIssue)):t.length>1?(this.formattedDateOfIssue+=t[t.length-1],void(this.dateOfIssue=this.formattedDateOfIssue)):void 0},handleSubmit(){this.$v.$invalid?(this.$v.$touch(),this.successfulCreated=!1):this.successfulCreated=!0}}},p=l,f=r(1656),d=(0,f.A)(p,o,i,!1,null,null,null),m=d.exports,h=r(6529);s.Ay.config.productionTip=!1,s.Ay.use(h.AT),s.Ay.config.devtools=!0,new s.Ay({render:t=>t(m)}).$mount("#app")}},e={};function r(s){var o=e[s];if(void 0!==o)return o.exports;var i=e[s]={exports:{}};return t[s].call(i.exports,i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,s,o,i){if(!s){var n=1/0;for(l=0;l<t.length;l++){s=t[l][0],o=t[l][1],i=t[l][2];for(var a=!0,c=0;c<s.length;c++)(!1&i||n>=i)&&Object.keys(r.O).every((function(t){return r.O[t](s[c])}))?s.splice(c--,1):(a=!1,i<n&&(n=i));if(a){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[s,o,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};r.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,i,n=s[0],a=s[1],c=s[2],u=0;if(n.some((function(e){return 0!==t[e]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var l=c(r)}for(e&&e(s);u<n.length;u++)i=n[u],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(l)},s=self["webpackChunkform_for_medods"]=self["webpackChunkform_for_medods"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=r.O(void 0,[504],(function(){return r(7982)}));s=r.O(s)})();
//# sourceMappingURL=app.36803931.js.map