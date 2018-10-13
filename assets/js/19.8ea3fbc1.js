(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{194:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting","aria-hidden":"true"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("If you make changes directly to the Laratrust tables and when you run your code the changes are not reflected, please clear your application cache using::")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("php artisan cache:clear\n")])])]),a("p",[t._v("Remember that Laratrust uses cache in the roles and permissions checks.")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("If you want to use the "),a("code",[t._v("Authorizable")]),t._v(" trait you have to do:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{attrs:{class:"token package"}},[t._v("Authorizable")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Authorizable"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("can insteadof LaratrustUserTrait"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    LaratrustUserTrait"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("can "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" laratrustCan"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("And then replace all the uses of "),a("code",[t._v("can")]),t._v(" with "),a("code",[t._v("hasPermission")]),t._v(" or "),a("code",[t._v("isAbleTo")]),t._v(".")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("If you use the "),a("code",[t._v("Laratrust::can")]),t._v(" facade method you don't have to change this method because it calls the "),a("code",[t._v("hasPermission")]),t._v(" method.")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("If you encounter an error when doing the migration that looks like::")]),t._v(" "),a("div",{staticClass:"language-log extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SQLSTATE[HY000]: General error: 1005 Can't create table 'laravelbootstrapstarter.#sql-42c_f8' (errno: 150)\n    (SQL: alter table `role_user` add constraint role_user_user_id_foreign foreign key (`user_id`)\n    references `users` (`id`)) (Bindings: array ())\n")])])]),a("p",[t._v("Then it is likely that the "),a("code",[t._v("id")]),t._v(" column in your user table does not match the "),a("code",[t._v("user_id")]),t._v(" column in "),a("code",[t._v("role_user")]),t._v(".\nMake sure both are "),a("code",[t._v("INT(10)")]),t._v(".")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("When trying to use the LaratrustUserTrait methods, you encounter the error which looks like::")]),t._v(" "),a("pre",[a("code",[t._v("Class name must be a valid object or a string\n")])]),t._v(" "),a("p",[t._v("Then probably you do not have published Laratrust assets or something went wrong when you did it.\nFirst of all check that you have the "),a("code",[t._v("laratrust.php")]),t._v(" file in your "),a("code",[t._v("app/config")]),t._v(" directory.\nIf you don't, then try "),a("code",[t._v("php artisan vendor:publish")]),t._v(" and, if it does not appear, manually copy the "),a("code",[t._v("/vendor/santigarcor/laratrust/src/config/config.php")]),t._v(" file in your config directory and rename it "),a("code",[t._v("laratrust.php")]),t._v(".")]),t._v(" "),a("hr")])}],!1,null,null,null);r.options.__file="troubleshooting.md";e.default=r.exports}}]);