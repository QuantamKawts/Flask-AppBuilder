Search.setIndex({envversion:46,filenames:["actions","advanced","api","config","customizing","diagrams","fabmanager","generic_datasource","i18n","index","installation","intro","multipledbs","quickcharts","quickfiles","quickhowto","quickhowto_mongo","quickminimal","relations","security","templates","user_registration","versionmigration","versions","views"],objects:{"flask.ext":{appbuilder:[9,0,0,"-"]},"flask.ext.appbuilder":{actions:[2,0,0,"-"],base:[2,0,0,"-"],baseviews:[24,0,0,"-"],filemanager:[2,0,0,"-"],views:[2,0,0,"-"]},"flask.ext.appbuilder.actions":{action:[2,3,1,""]},"flask.ext.appbuilder.base":{AppBuilder:[2,4,1,""]},"flask.ext.appbuilder.base.AppBuilder":{"__init__":[2,2,1,""],add_link:[2,2,1,""],add_separator:[2,2,1,""],add_view:[2,2,1,""],add_view_no_menu:[2,2,1,""],app_icon:[2,1,1,""],app_name:[2,1,1,""],app_theme:[2,1,1,""],get_app:[2,1,1,""],get_session:[2,1,1,""],init_app:[2,2,1,""],security_cleanup:[2,2,1,""],version:[2,1,1,""]},"flask.ext.appbuilder.baseviews":{BaseCRUDView:[15,4,1,""],BaseModelView:[2,4,1,""],BaseView:[2,4,1,""],expose:[24,3,1,""]},"flask.ext.appbuilder.baseviews.BaseCRUDView":{add_columns:[15,1,1,""],add_fieldsets:[2,1,1,""],add_form:[2,1,1,""],add_form_extra_fields:[2,1,1,""],add_form_query_cascade:[2,1,1,""],add_form_query_rel_fields:[2,1,1,""],add_template:[2,1,1,""],add_title:[2,1,1,""],add_widget:[2,1,1,""],description_columns:[2,1,1,""],edit_columns:[15,1,1,""],edit_fieldsets:[2,1,1,""],edit_form:[2,1,1,""],edit_form_extra_fields:[2,1,1,""],edit_form_query_cascade:[2,1,1,""],edit_form_query_rel_fields:[2,1,1,""],edit_template:[2,1,1,""],edit_title:[2,1,1,""],edit_widget:[2,1,1,""],get_uninit_inner_views:[2,2,1,""],list_columns:[15,1,1,""],list_template:[2,1,1,""],list_title:[2,1,1,""],list_widget:[2,1,1,""],order_columns:[2,1,1,""],page_size:[2,1,1,""],post_add:[2,2,1,""],post_delete:[2,2,1,""],post_update:[2,2,1,""],pre_add:[2,2,1,""],pre_delete:[2,2,1,""],pre_update:[2,2,1,""],related_views:[2,1,1,""],show_columns:[15,1,1,""],show_fieldsets:[2,1,1,""],show_template:[2,1,1,""],show_title:[2,1,1,""],show_widget:[2,1,1,""],validators_columns:[2,1,1,""]},"flask.ext.appbuilder.baseviews.BaseModelView":{base_filters:[2,1,1,""],base_order:[2,1,1,""],datamodel:[2,1,1,""],label_columns:[2,1,1,""],search_columns:[2,1,1,""],search_form:[2,1,1,""],search_widget:[2,1,1,""]},"flask.ext.appbuilder.baseviews.BaseView":{base_permissions:[2,1,1,""],create_blueprint:[2,2,1,""],default_view:[2,1,1,""],extra_args:[2,1,1,""],get_init_inner_views:[2,2,1,""],get_redirect:[2,2,1,""],get_uninit_inner_views:[2,2,1,""],render_template:[2,2,1,""],route_base:[2,1,1,""],static_folder:[2,1,1,""],template_folder:[2,1,1,""],update_redirect:[2,2,1,""]},"flask.ext.appbuilder.charts":{views:[2,0,0,"-"]},"flask.ext.appbuilder.charts.views":{BaseChartView:[2,4,1,""],ChartView:[2,4,1,""],DirectByChartView:[2,4,1,""],DirectChartView:[2,4,1,""],GroupByChartView:[2,4,1,""],TimeChartView:[2,4,1,""]},"flask.ext.appbuilder.charts.views.BaseChartView":{chart_3d:[2,1,1,""],chart_template:[2,1,1,""],chart_title:[2,1,1,""],chart_type:[2,1,1,""],chart_widget:[2,1,1,""],group_by_label:[2,1,1,""],group_bys:[2,1,1,""],search_widget:[2,1,1,""],width:[2,1,1,""]},"flask.ext.appbuilder.charts.views.GroupByChartView":{ProcessClass:[2,1,1,""],definitions:[2,1,1,""],get_group_by_class:[2,2,1,""]},"flask.ext.appbuilder.filemanager":{get_file_original_name:[2,3,1,""]},"flask.ext.appbuilder.models":{generic:[2,0,0,"-"],group:[2,0,0,"-"],mixins:[2,0,0,"-"]},"flask.ext.appbuilder.models.generic":{GenericColumn:[2,4,1,""],GenericModel:[2,4,1,""],GenericSession:[2,4,1,""]},"flask.ext.appbuilder.models.generic.GenericSession":{all:[2,2,1,""],clear:[2,2,1,""],delete_all:[2,2,1,""],get:[2,2,1,""],query:[2,2,1,""]},"flask.ext.appbuilder.models.group":{aggregate_avg:[2,3,1,""],aggregate_count:[2,3,1,""],aggregate_sum:[2,3,1,""]},"flask.ext.appbuilder.models.mixins":{AuditMixin:[2,4,1,""],BaseMixin:[2,4,1,""],FileColumn:[2,4,1,""],ImageColumn:[2,4,1,""]},"flask.ext.appbuilder.models.mixins.FileColumn":{impl:[2,1,1,""]},"flask.ext.appbuilder.models.mixins.ImageColumn":{impl:[2,1,1,""]},"flask.ext.appbuilder.security":{decorators:[24,0,0,"-"],manager:[2,0,0,"-"]},"flask.ext.appbuilder.security.decorators":{has_access:[24,3,1,""],permission_name:[2,3,1,""]},"flask.ext.appbuilder.security.manager":{BaseSecurityManager:[2,4,1,""]},"flask.ext.appbuilder.security.manager.BaseSecurityManager":{add_permission:[2,2,1,""],add_permission_role:[2,2,1,""],add_permission_view_menu:[2,2,1,""],add_permissions_menu:[2,2,1,""],add_permissions_view:[2,2,1,""],add_user:[2,2,1,""],add_view_menu:[2,2,1,""],auth_user_db:[2,2,1,""],auth_user_ldap:[2,2,1,""],auth_user_oid:[2,2,1,""],auth_user_remote_user:[2,2,1,""],auth_view:[2,1,1,""],authdbview:[2,1,1,""],authldapview:[2,1,1,""],authoauthview:[2,1,1,""],authoidview:[2,1,1,""],authremoteuserview:[2,1,1,""],count_users:[2,2,1,""],create_db:[2,2,1,""],del_permission:[2,2,1,""],del_permission_role:[2,2,1,""],del_view_menu:[2,2,1,""],find_permission:[2,2,1,""],find_permission_view_menu:[2,2,1,""],find_permissions_view_menu:[2,2,1,""],find_user:[2,2,1,""],find_view_menu:[2,2,1,""],get_all_users:[2,2,1,""],get_user_by_id:[2,2,1,""],has_access:[2,2,1,""],is_item_public:[2,2,1,""],lm:[2,1,1,""],oauth:[2,1,1,""],oauth_handler:[2,1,1,""],oauth_remotes:[2,1,1,""],oid:[2,1,1,""],registeruser_view:[2,1,1,""],registeruserdbview:[2,1,1,""],registeruseroidview:[2,1,1,""],reset_password:[2,2,1,""],resetmypasswordview:[2,1,1,""],resetpasswordview:[2,1,1,""],security_cleanup:[2,2,1,""],update_user:[2,2,1,""],update_user_auth_stat:[2,2,1,""],user_view:[2,1,1,""],userdbmodelview:[2,1,1,""],userldapmodelview:[2,1,1,""],useroauthmodelview:[2,1,1,""],useroidmodelview:[2,1,1,""],userremoteusermodelview:[2,1,1,""]},"flask.ext.appbuilder.security.sqla":{registerviews:[2,0,0,"-"]},"flask.ext.appbuilder.security.sqla.registerviews":{BaseRegisterUser:[2,4,1,""]},"flask.ext.appbuilder.security.sqla.registerviews.BaseRegisterUser":{activation:[2,2,1,""],activation_template:[2,1,1,""],add_registration:[2,2,1,""],email_subject:[2,1,1,""],email_template:[2,1,1,""],send_email:[2,2,1,""]},"flask.ext.appbuilder.views":{CompactCRUDMixin:[2,4,1,""],IndexView:[2,4,1,""],MasterDetailView:[2,4,1,""],ModelView:[2,4,1,""],MultipleView:[2,4,1,""],PublicFormView:[2,4,1,""],SimpleFormView:[2,4,1,""]},"flask.ext.appbuilder.views.MasterDetailView":{master_div_width:[2,1,1,""]},"flask.ext.appbuilder.views.ModelView":{action:[2,2,1,""],action_post:[2,2,1,""]},"flask.ext.appbuilder.views.MultipleView":{list_template:[2,1,1,""],views:[2,1,1,""]},"flask.ext.appbuilder.views.PublicFormView":{default_view:[2,1,1,""],edit_widget:[2,1,1,""],form:[2,1,1,""],form_columns:[2,1,1,""],form_fieldsets:[2,1,1,""],form_get:[2,2,1,""],form_post:[2,2,1,""],form_title:[2,1,1,""]},"flask.ext.appbuilder.views.SimpleFormView":{default_view:[2,1,1,""],edit_widget:[2,1,1,""],form:[2,1,1,""],form_columns:[2,1,1,""],form_fieldsets:[2,1,1,""],form_get:[2,2,1,""],form_post:[2,2,1,""],form_title:[2,1,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","class","Python class"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:method","3":"py:function","4":"py:class"},terms:{"__bind_key__":12,"__call__":1,"__class__":20,"__file__":17,"__init__":[2,6,15,16,19,20,22],"__name__":[2,3,16,17,19,20,22],"__repr__":[13,15,16,18],"__str__":16,"__unicode__":16,"_add_object":7,"_flt_":[15,23],"_flt_0_name":15,"_oc_":15,"_od_":15,"_page_":15,"_permission_nam":2,"_psize_":15,"_sep_":[2,14],"_thumb":14,"abstract":[5,15],"boolean":23,"break":[10,22,23],"case":[1,13,14,15,19,23],"catch":23,"class":[],"default":[],"final":[4,7,8,13,18,19,20],"float":[13,23],"function":[],"import":[0,1,2,3,4,6,7,8,13,14,15,16,17,18,19,20,21,22,23,24],"int":[2,7,15,23],"new":[],"null":[1,2,23],"public":[2,3,5,11,15,16,17,19,21,23,24],"return":[0,1,2,7,13,14,15,16,18,19,23,24],"short":7,"static":[1,2,20,23],"super":[1,7,20],"switch":6,"true":[1,2,3,7,12,13,14,15,16,17,18,19,21,22],"try":[6,7,10,15,21,23],"var":[3,8,11,19,23],"while":10,ab_us:22,abl:6,about:[5,15],abov:[4,20],absent:2,abspath:17,accept:[2,15,23],access:[2,5,10,15,19,21,23,24],accord:21,accordion:[15,20,23],accordion_tag:20,account:[2,3,21],acess:2,action_post:2,activ:[2,10,19,21,23],activation_hash:2,activation_templ:[2,21],actual:[4,10,23],adapt:23,add:[],add_column:[1,2,15,18,19,23],add_contact:20,add_fieldset:[2,15],add_form:[1,2,20,23],add_form_extra_field:[1,2,23],add_form_query_cascad:2,add_form_query_rel_field:[1,2,23],add_link:[2,4,23,24],add_permiss:2,add_permission_rol:2,add_permission_view_menu:2,add_permissions_menu:2,add_permissions_view:2,add_registr:2,add_separ:[2,4,18,19],add_templ:[2,20],add_titl:2,add_us:[2,23],add_view:[2,4,8,13,15,16,18,19,22,24],add_view_menu:2,add_view_no_menu:[2,4,18,24],add_widget:2,addformwtf:1,addit:[1,6,13,14,19],addition:[10,13,15,24],address:[2,3,15,16,18],adher:11,adit:2,adition:14,admin:[],administr:1,advis:[3,4,10,15,17,19],affect:23,after:[],again:[15,21],against:[2,19],aggreg:[2,13,19,23],aggregate_avg:[2,13],aggregate_count:[2,13],aggregate_sum:[2,13],aim:5,ajax:15,algorithm:24,alia:2,all:[0,1,2,3,4,5,6,7,8,10,11,13,15,16,17,18,19,20,21,22,23,24],alloc:18,allow:[1,2,3,7,15,21,23,24],allwai:[1,6,23],almost:[4,20],alreadi:[3,4,6,7,8,13,15,18,22],also:[1,2,3,4,6,13,15,16,19,23,24],alt:14,alter:[19,21,22],altern:[2,7,11,15],although:[15,22],alwai:[2,4,19,23,24],angularj:15,ani:[1,2,4,6,7,10,11,15,19,22,23,24],anoth:[8,15],anyth:[2,17],apach:19,api:[],api_url:15,app:[],app_icon:[2,3,23],app_nam:[2,3],app_them:[2,3,4],appbuild:[],appli:[1,2,7,13,19,20],applic:[],approach:[15,19],approv:23,apt:10,area:4,areachart:[4,13],arg:[2,15],aris:15,as_declar:23,as_unicod:24,asc:[1,2,15],ask:6,assign:[2,3,19,23],assoc_benefits_employe:18,associ:[2,4,10,11,18,19,23,24],assum:[2,4,6,18,23],attach:24,attr:23,attribut:[2,22,23],audit:[],auditmixin:[2,15,19,23],auth:[2,19,21,23],auth_db:6,auth_ldap_allow_self_sign:3,auth_ldap_bind_field:[],auth_ldap_email_field:3,auth_ldap_firstname_field:3,auth_ldap_lastname_field:3,auth_ldap_search:3,auth_ldap_serv:3,auth_ldap_uid_field:3,auth_role_admin:[3,23],auth_role_publ:[3,23],auth_typ:[3,21,23],auth_user_db:2,auth_user_ldap:2,auth_user_oid:2,auth_user_registr:[3,21,23],auth_user_registration_rol:[3,21],auth_user_remote_us:2,auth_view:2,authdb:2,authdbview:2,authent:[],authldapview:2,authoauthview:2,authoidview:[2,23],author:19,authremoteuserview:2,auto:[9,23],autom:4,automat:[],avail:[1,4,10,15,18],averag:[2,13,23],avoid:2,awesom:[2,11,15,23],babel:[3,4,6,8,10,11,13,22,23,24],babel_default_fold:10,babel_default_local:[3,10],babelpkg:[8,10,23,24],back:[2,5,23,24],backend:[2,5,15,19,22],backref:[18,19],backup:22,backward:10,bar:20,barchart:13,base_filt:[1,2,13,23],base_ord:[1,2,23],base_permiss:[1,2,7],base_templ:[2,20,23,24],baseapp:[22,23],basedir:[12,17,22],basefilt:[2,22,23],basefilterconvert:22,basefilterrel:23,baseinterfac:[5,23],baseiterfac:23,baselayout:[2,20,23],basemixin:[2,23],basic:[2,5,15,17,19,21],batteri:11,becaus:[6,8,10,12,13,18,20,23,24],been:10,befor:[2,13,15,20,22],begin:[18,23],begin_d:18,behav:[2,21],behaviour:[],behind:2,belong:[10,18,21],benefit:18,benefit_id:18,benefits_employe:18,benefitview:18,better:[4,9,10,23],bettwen:23,between:[15,18],big:[11,20],bin:[10,22],bind:[3,12,23],birth:[4,13,19],birthdai:[2,4,13,15,16],bit:16,bla:4,blank:[],block:[1,4,20,23,24],blueprint:[2,5,24],bodi:[20,23],boilerpl:10,bold:6,booleanfield:2,boostrap:23,bootstrap:[2,3,4,11,20,23],bootswatch:[4,11],bootwatch:[3,23],born:13,both:16,box:15,brand:23,brazil:[8,23],bring:15,broken:23,bs3textfieldrowidget:1,bs3textfieldwidget:[1,24],build:[3,11,18,24],builder:10,built:9,builtin:[8,11,15,23],button:[13,23],bypass:2,calcul:13,calendar:[13,23],call:[0,2,7,14,20,23,24],callabl:23,can:[0,1,2,4,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],can_add:[1,2,15],can_delet:[1,15],can_edit:[1,2,15],can_list:[1,2,7,15],can_show:[1,2,7,15],can_upd:15,cascad:[],cast:23,categori:[2,4,8,13,15,16,18,19,23,24],category_icon:[2,8,15,16,24],category_label:[2,4,8,23],caus:23,cell:23,certain:[4,5],certif:3,cfg:8,chanc:10,chang:[],changeabl:22,changed_bi:19,changed_by_fk:[22,23],changed_on:[19,22,23],chapter:[1,15,16,18,24],charact:23,chart_3d:[2,13],chart_templ:2,chart_titl:[2,4,13],chart_typ:[2,4,13],chart_widget:2,chartwidget:2,charview:15,check:[2,18,19],checkit:6,checkout:[10,15],child:[2,4,13,17],childmodel:2,chines:[8,23],choic:[15,23],choos:[3,4,10,13],chosen:15,classifi:15,classmethod:23,clean:19,cleanup:[],clear:2,click:6,close:15,cmd:7,code:[0,4,8,10,13,15,16,17,18,19,20,22,23],cog:24,col1:13,col2:13,col3:13,col:[2,13,19,23],col_nam:[1,2],col_typ:2,collaps:23,collect:[2,4,5],colleg:13,college_perc:[2,13],collis:2,colnam:[2,13],column:[],column_nam:2,columnchart:[2,13],com:[2,4,6,7,12,13,14,15,21,22,24],combo:1,come:[4,23],comment:[],common:[2,22],compact:23,compani:18,compil:[6,8],complet:[2,4,5,15,21,23],complex:[4,7,18],complianc:23,compon:20,compos:13,concaten:[2,13,14],concept:24,cond:3,conf_password:19,config:[],confirm:[1,2,10,23],conflict:10,connect:[3,6,11,12,15],constraint:[1,23],constructor:[2,24],consum:22,contact:[],contact_group:[13,15,16],contact_group_id:15,contactchartview:[13,19],contactgroup:[1,8,15,16],contactmodelview:[0,1,2,4,8,13,15,16,19,20],contacto:8,contacttimechartview:[4,13,19],contain:[2,4,15,21],content:[],contribut:[],control:[2,15],contruct:2,convers:23,convert:23,cooki:[17,23,24],correct:[16,22,23],correctli:[21,23],correspond:[8,19,22],could:[4,15,23],count:[2,13,15,19,23],count_us:2,countri:[2,3,8,13],country_id:13,countrydirectchartview:[2,13],countrygroupbychartview:[2,13],countrystat:[2,13],cours:[4,7,13,15,18,19],cpu:22,crash:23,creat:[],create_al:[15,18],create_blueprint:2,create_db:[2,22,23],created_bi:[1,2,19],created_by_fk:[22,23],created_on:[19,22,23],creation:[1,2,19,23],criteria:13,critic:20,crud:[2,5,9,11,15,16,23],csrf_enabl:17,css:[],current:[2,6,15,23,24],cursor:23,custom:[],customis:2,danger:15,dashboard:13,data:[],databas:[],datamodel:[0,1,2,4,5,7,8,13,14,15,16,18,19,20,22,23],datarequir:[23,24],datasourc:7,date:[1,13,15,18,19,23],datepick:11,datetim:[13,18,22,23],datetimefield:[16,23],datetimepick:11,db2:11,dbmongo:[2,16],ddl:22,debian:10,debug:[16,17],declar:[15,17,20,22,23],decor:[],def:[0,1,2,7,13,14,15,16,18,19,24],default_view:[2,4,24],defaultview:23,definit:[2,4,11,13,14,15,16,18,23],del_permiss:2,del_permission_rol:2,del_view_menu:2,delet:[],delete_al:[0,2,7,19],deliv:11,demo:[9,13,15],deni:23,depart:[1,18],department_id:18,department_queri:1,departmentview:18,depend:[2,10],deriv:24,desc:[1,2,15],describ:[17,18],descript:[1,2,3,11,15,20,24],description_column:2,design:6,detail:[1,2,4,6,9,11,13,15,16,17,18,19,23,24],detailt:2,detailview:2,dev:[6,23],develop:[4,6,9,10,11,15,17,20,22,24],dict:[2,8,23],dictionari:[1,2,3,13,15],did:18,difer:2,differ:[2,4,10,13,14,15,16,18,19,21,23],direct:[],direct_column:[2,13],directchart:23,directli:[11,22],directori:[3,6,8,15,19,20,22,23,24],dirnam:17,disabl:0,disk:4,disktyp:4,displai:[2,4,8,13,14,15,20,23],distribut:10,div:4,divid:23,divis:23,django:[2,11,15],doanload:19,doc:[7,22,23],document:[13,16,24],doe:[2,23],domain:[12,23],don:[2,11,22],done:[4,10,18,20,23],dot:[15,23],doubl:23,doubt:7,download:[6,10,15,19],dpgaspar:[4,7,13,14,15,22,24],draw:[2,13],drive:7,drop:22,dropdown:[11,23],dry:11,duplic:23,dure:4,dynam:23,dynamicform:24,each:[1,2,5,6,7,11,14,15,18,19,20,22,23,24],earlier:[19,23],earphon:[8,22],eas:20,easi:[10,11,15,20,21,23,24],easier:14,easiest:21,easili:[0,4,10,11,19,20,21,22],easy_instal:10,edit:[],edit_cascad:[4,23],edit_column:[1,2,15,18,19,23],edit_contact:20,edit_fieldset:[2,15],edit_form:[1,2,20,23],edit_form_extra_field:[1,2,23],edit_form_query_cascad:2,edit_form_query_rel_field:[2,22,23],edit_templ:[2,4,20],edit_titl:2,edit_widget:2,educ:13,effici:2,els:[0,13,14],email:[0,2,3,10,19,21,23],email_subject:[2,21],email_templ:[2,21],embed:14,employe:[1,18,19],employee_id:18,employee_numb:[1,18],employeehistori:18,employeehistoryview:18,employeeview:[1,18],empti:[2,15,20,23],enabl:[2,3,15,21,23,24],encod:[8,23],encount:11,encourag:22,encrypt:19,end:[18,20],end_dat:18,endblock:[4,20,24],endcal:20,endpoint:[2,15,18,23],engin:[2,6,10,22],english:[8,10],enough:15,ensur:21,entir:[2,20],entri:[1,2,18,24],enumer:15,env:10,envelop:[2,4,8,13,15,16],enviro:23,environ:[3,10,11,19],equal:[15,23],equalto:1,error:[11,15,23,24],error_messag:21,essenti:5,etc:[0,2,10,11,15,18,19,20,22,23,24],even:[1,4,9,10,14,15,16,22],everi:[17,23],everyon:19,everyth:[2,4,7,11,13,15,16,18,19],evolut:13,exactli:[15,16,19],exampl:[],examplemodel:1,exampleview:1,exc:15,excel:[6,10,14,15,21],except:[7,17,23],exclud:[19,23],execut:[2,8,10,18],exist:[2,3,4,15,18,19,22,23],exit:6,expand:[2,15,16,19],experi:[1,13,24],explain:19,explan:[5,15],expos:[],exposur:15,exsit:2,ext:[],extend:[],extens:[10,15,17,23],externalserv:12,extra_arg:[1,2,23],extra_class:1,extra_field:2,extract:[4,6,8],fab:[10,20],fabmanag:[6,8,10,22],fabtest10:21,face:10,factori:[2,23],fail:[19,23],fail_login_count:[19,22,23],fals:[0,2,3,4,12,13,14,15,16,18,19,20,22],familiar:15,fast:15,favorit:3,featur:[0,2,7,9,10,22,23],feel:[20,22,24],femal:15,fetch:[21,23],few:[4,15],fewer:15,field1:24,field2:[1,24],field:[1,2,3,11,13,15,16,18,19,21,22,23,24],field_str:22,fieldset:[2,15,23],fieldwidget:[1,23,24],figur:15,file:[],file_nam:2,filecolumn:[2,23],filenam:[2,14,20],filesystem:14,fill:[21,23],filterclass:[1,2],filtercontain:22,filterequ:[2,22,23],filterequalfunct:[1,2,22,23],filternotequ:23,filterrel:[22,23],filterstartswith:[1,2,22],find:[2,8,13,15,24],find_permiss:2,find_permission_view_menu:2,find_permissions_view_menu:2,find_us:2,find_view_menu:2,findal:7,finish:[21,22],first:[1,3,4,6,7,8,10,12,13,15,18,19,20,21,23,24],first_app:10,first_nam:[2,19,21,22],fiscal_numb:18,flag:[3,8,10,23],flash:[20,23,24],flask:[],flask_appbuild:[1,2,4,16,19,22,24],flask_babelpkg:19,flask_mongoengin:[2,16],flexibl:[1,23],flow:11,folder:[2,3,4,15,16,18,22,24],follow:[0,2,3,4,6,8,10,12,13,15,19,20,21,22,24],folow:[4,15],font:[2,11,15,23],fontawesom:[15,20,23],forc:23,foreign:23,foreignkei:[13,15,18,19],fork:[8,10],form_column:[2,24],form_fieldset:2,form_get:[2,24],form_post:[2,23,24],form_titl:[2,21,24],format:[2,7,13],formatt:[2,13,23],former:22,formwidget:2,found:10,four:19,frame:13,framework:[1,2,4,5,7,8,9,10,11,12,13,15,16,18,19,20,22,23,24],from:[],from_object:[2,3,16,19,22],full_nam:[1,18],fun:16,func:[2,13],funcnam:[2,13],function_id:18,functionview:18,further:11,futur:[2,15,23],garbag:19,genapp:8,gender:[1,15,16],generalview:[22,23],generalxpto_permiss:2,genericcolumn:[2,7],genericinterfac:[5,7],genericmodel:[2,7,23],genericsess:[2,7],german:[8,23],get:[2,7,10,15,20,21,23,24],get_all_us:2,get_app:2,get_file_orginal_nam:23,get_file_original_nam:2,get_group_by_class:2,get_init_inner_view:2,get_model_rel:23,get_order_columns_list:23,get_redirect:[0,2,19],get_related_model:23,get_sess:2,get_uninit_inner_view:2,get_url:14,get_url_thumbnail:14,get_us:[1,2],get_user_by_id:2,get_valu:23,getlogg:16,gettext:1,git:4,github:[4,6,7,13,14,15,17,22,24],given:[4,19],givennam:3,global:[2,14,21],gmail:[19,21],goal:[5,11],goe:[11,20],gold:13,good:10,goodby:24,goodi:11,googl:[2,4,5,9,11,13,21,23],gradual:15,grammar:[2,13],grant:11,granular:[2,19,24],greater:23,grid:2,gridf:14,group:[],group_bi:2,group_by_column:[4,13,23],group_by_label:[2,13],groupbyprocessdata:2,groupgeneralview:22,groupmasterview:[4,15],groupmodelview:[0,1,2,8,15,16,19],grow:10,grupo:8,guarante:19,guess:20,guest:[9,13,15],gui:15,guid:23,hack:[22,23],hand:23,handi:21,handl:[0,1,2,11,23],handler:2,happen:4,hardcod:23,has_access:[2,19,23,24],hash:[2,19,21,22,23],hash_db_password:22,hashed_password:23,have:[1,2,3,4,6,7,10,13,14,15,18,19,20,22,23,24],haven:22,head_css:20,head_j:[20,23],head_meta:20,header:[23,24],heart:7,height:[3,13],hello:24,help:[4,6,11,20],helper:23,her:[18,21],here:[0,4,15,20],higher:[13,23],highli:[10,11],him:21,himself:3,histor:13,histori:[2,18,23,24],hold:[2,3,7,13,15,19,21],home:23,hope:[15,22],hopefulli:2,host:17,how:[],href:[2,4,14,23,24],html5shiv:23,html:[1,2,4,8,14,15,18,20,21,23,24],htpp:15,http:[2,4,7,10,13,14,15,22,24],human:[18,21],icon:[2,3,4,8,11,13,15,16,18,23,24],ideal:20,identifi:[2,6,13],imag:[],imagecolumn:[2,14,23],imagemanag:14,imagin:7,img:14,img_siz:[3,14,23],img_upload_fold:[3,14,23],img_upload_url:[3,23],immedi:10,impl:2,implement:[0,2,4,5,7,13,14,15,19,21,24],impli:15,implicit:23,impos:5,imposs:23,includ:[],inclus:23,incompat:10,independ:[15,23],index:[],index_templ:4,indirect:3,individu:1,infer:23,info:[1,2,6,15,16,19,23,24],inform:[0,15,21],inherit:[2,4,13,15,16,19,21,22,23,24],init:[8,16,17,23],init_app:[2,22,23],initi:[],inject:[2,14,15,23],inlin:[4,23],inner:2,insert:[2,10,11,15,20,21,23,24],insid:24,inspect:[2,15,19],instal:[],instanc:[2,6,12,23],instanti:[2,22],instead:[13,19,20,22,23,24],instruct:22,intanti:2,intead:23,integ:[2,12,13,14,15,18,19,22,23],integr:[11,15,18,24],intend:[7,11],interest:[13,15],interfac:[0,5,13,14,15,16,18,22,23],intern:[4,22,23],internation:[4,10],internet:6,intranet:19,introduc:20,invok:[2,22,23],is_item_publ:2,isinst:0,isol:10,issu:[6,7,9,15,22,23],item:[0,2,13,19,23,24],iter:23,itself:[2,7,10,23],januari:13,javascript:[],jinja2:[1,2,4,8,11,20,23],john:24,join:[12,17,22,23],jqueri:[20,23],jsapi:23,json:[2,5,15,23],juici:24,jumbotron:4,just:[0,1,2,4,7,10,13,15,16,17,19,20,21,22,24],keep:[11,22,24],kei:[],kept:[19,22],kerbero:19,kind:[4,13,16,18,24],know:[7,22],kwarg:[1,2,15],label:[2,4,8,11,13,15,23,24],label_column:[2,4,8,13,14,15,16],languag:[3,8,10,11,23],larg:[3,8,22],last:[3,10,16,19,23],last_login:[19,22,23],last_nam:[2,19,21],later:[14,21],latest:23,layer:[5,15],layout:4,lazy_gettext:[2,4,8,13,19,21,24],lc_messag:8,ldap:[],ldapserv:3,leaf:5,learn:15,least:[2,7,10],leav:2,left:[2,3,4,23],len:13,length:23,less:[22,23],let:[4,8,10,13,15,16,18,21,24],level:15,lib:[20,23],librari:[],like:[0,1,2,3,4,7,10,13,14,15,18,19,20,22,23,24],limit:[2,10,23],linechart:[2,13],link:[2,4,14,21,23,24],linux:[7,10],list:[],list_block:23,list_column:[1,2,4,7,14,15,16,18,19,23],list_contact:20,list_item:23,list_list:20,list_search:20,list_templ:[2,20],list_thumbnail:23,list_titl:2,list_widget:[2,4,14],lista:8,listblock:[4,23],listfield:16,listitem:[4,23],listthumbnail:[4,14],listwidget:[2,4],live:[9,13,15],local:12,localhost:[10,12,15,24],locat:[2,15],log:[1,4,16,23],logic:[18,23],login:[2,9,10,13,15,17,19,21,22,23],login_count:[19,22,23],login_view:22,loginmanag:[2,22,23],logout:23,longer:[2,23],look:[1,2,3,4,6,8,13,14,15,16,17,18,19,20,21,24],lookup:11,lost:22,lot:[9,10],lower:[11,19,23],mac:10,made:[4,8,15,16],mai:[7,15,24],mail:[3,21],mail_default_send:21,mail_password:21,mail_serv:21,mail_use_tl:21,mail_usernam:21,main:[11,20,22],make:[1,2,8,13,18,20,21],male:15,manag:[],mandatori:[2,3,24],mani:[],manufactur:2,manufacture_id:2,map:[3,24],markup:14,mass:0,massiv:0,master:[2,4,7,11,13,14,15,22,23,24],master_div_width:2,masterdetail:23,mastert:2,masterview:2,match:[1,3,19],max:23,max_length:16,mayb:10,mean:[8,15],mechan:23,medium:3,memori:22,menu:[],menu_access:2,merg:23,messag:[1,6,8,15,20,21,23,24],meta:20,metaclass:23,metadata:18,metho:[],method1:24,method2:24,method3:24,method:[],microsoft:19,migrat:[],migrate_db_0:22,mimic:7,min:23,mind:11,minim:[],miss:[15,23],mix:[2,4,19],modal:23,model1:[12,22],model2:12,model3:12,model:[],model_cl:2,modelview:[],modelview_nam:15,modelview_url:15,modeview:0,modif:[2,19],modifi:[19,22],modul:[2,22,23],moment:21,mongodb:[],mongodb_set:3,mongoengin:[2,3,5,6,10,11,14,15,16],mongoengineinterfac:[5,16],mongoimag:14,month:[2,13,23],month_nam:13,month_year:13,monthli:13,more:[1,4,5,8,9,10,13,18,22,23,24],most:[13,15,17,18,24],mostli:2,mous:23,move:[22,23],msgid:8,msgstr:8,mssql:[11,22],much:[2,7,9,24],muldelet:[0,19],multi:11,multipl:[],multiple_view:2,multipleview:[],multipleviewsexp:[2,15],must:[1,2,3,4,7,10,13,15,16,22,23,24],my_col_to_be_ord:1,my_column_nam:2,my_extra_arg:1,my_field1:1,my_field2:1,my_index:4,my_project:20,my_show_templ:1,my_sql1:12,my_sql2:12,my_widget_list:4,myaction:0,mybas:20,myform:24,myformview:24,mygenericmodel:2,myindexview:4,myinlinet:4,myinlineview:4,mymethod:19,mymodel:[1,2,22],mymodelview1:4,mymodelview2:4,mymodelview3:4,mymodelview:[2,4,19],myothermodelview:[2,4],myotherrelatedview:2,myotherview:22,myregisteruserdbview:[2,21],mysecuritymanag:[2,19,21],mysql:[11,12,22],mytabl:[1,2],myuser:19,myuserdbmodelview:19,myuserdbview:19,myview:[1,2,4,22,24],myviewt:4,mywidgetlist:4,name:[1,2,3,4,6,8,10,12,13,14,15,16,18,19,20,22,23,24],nane:15,narrow:23,navbar:[4,20,23],navig:[2,18,20,24],necess:7,necessari:[0,6,19,21,23],need:[2,3,6,10,11,17,18,19,20,23,24],next:[],nginx:19,nice:[2,18],nome:8,non:[2,15,19,23],none:[2,15,23],normal:[2,7,10,11,14,15,16],nose:23,notat:[15,23],note:[2,21],notic:[2,4,13,14,15,16,17,22,24],now:[6,10,12,13,15,16,18,19,22,23,24],nullabl:[2,12,13,14,15,18,19,22,23],number:[4,13,15,24],numer:23,oauth:2,oauth_handl:2,oauth_remot:2,obj:2,object:[2,3,6,13,15,22],oblig:[7,15,22],occur:[18,19],often:10,oid:[2,22,23],oid_ask_for:23,oid_ask_for_opt:23,old:19,ommit:2,onc:10,onli:[1,2,3,4,5,6,10,11,15,16,19,20,23,24],onto:22,open:[3,4,7,10,15,16,18,19,22],openid:[],oper:[15,24],optim:[14,23],option:[0,2,4,6,10,13,15,17,19,21,23],oracl:[11,22,23],order_column:[2,4,15,23],org:10,origin:[2,14,20],orm:[15,18,19],orphan:19,other:[2,4,10,13,23,24],our:[4,7,13,15,16,18,19],out:[7,15,21],output:[2,7,23],outsid:23,over:[2,20],overflow:23,overhead:19,overrid:[1,2,4,7,14,15,16,17,19,20,21,23,24],overridden:[1,2,4,20,23,24],overriden:2,own:[0,1,2,4,6,7,8,11,13,14,15,19,20,21,23,24],packag:[6,8,10,11,15,21,23],page:[2,4,5,9,11,15,18,20,21,23,24],page_s:[2,15,23],pagin:23,painlessli:[11,19],panel:[20,23],panel_begin:20,panel_end:20,param1:24,param:[2,24],paramet:[0,2,3,13,15,16,19,20,21,23,24],parent:[2,24],part:[2,19,20,24],partial:[11,15,20,23],particular:[0,13,18],partit:11,pass:[1,2,4,6,16,19,20,22,24],password:[],passwordformail:21,path:[2,3,4,12,17,20,22],pattern:2,peopl:3,per:[13,23],percentag:13,perform:[2,23],perm_view:2,permiss:[],permission_nam:[2,19,23],permission_view_menu:2,permissionview:2,permissionviewmenu:2,permit:23,person:[2,14,15,16,19,22],personal_celphon:[15,16],personal_phon:[2,15,16],personchartview:22,persongeneralview:22,personmodelview:14,pgsql:22,phone:[2,4],photo:14,photo_img:14,photo_img_thumbnail:14,pictur:23,pid:7,pie:13,piechart:[2,13],pil:10,pillow:10,place:[3,4,22],plan:[8,10],pleas:[15,22],plu:[2,4],point:[2,21,24],poor:13,poor_perc:13,popen:7,popul:[2,13],port:17,portugues:[8,23],possibl:[1,2,6,8,10,11,19,21,23,24],post:[2,15,18,22,23,24],post_add:2,post_delet:2,post_upd:2,postgresql:23,pot:8,power:[0,23,24],ppid:7,practic:21,pre:[2,18,23,24],pre_add:2,pre_delet:2,pre_upd:2,preced:13,prepar:0,present:[2,4,11,13,15,16,21,23,24],preserv:[19,23],pretifi:2,pretti:[2,13,15,23],prettifi:23,pretty_month_year:13,prevent:[19,23],previou:[2,15,16,19,23,24],primari:[15,23],primary_kei:[2,7,12,13,14,15,18,19,22],primit:[15,16],principl:[11,24],prior:[7,8,13,24],privat:[11,15,21],probabl:[10,15],problem:[10,11,23],procedur:22,process:[2,13,21,24],processclass:2,produc:13,product:[2,20],project:[4,8,9,10,11,15,19,22,24],project_nam:[4,24],projectfil:[2,4],projectmodelview:19,propag:3,proper:23,properti:[],propos:9,protect:[19,24],provid:[2,11,13,21,23,24],provider_nam:2,psmodel:7,pssession:7,psview:7,pull:23,purpos:2,put:15,py3:[10,23],pybabel:8,python3:23,python:[],quantiti:4,queri:[1,2,5,7,15,17,19,23],query_factori:1,queryselectfield:[1,23],queryselectmultiplefield:23,question:[15,23],quick:[],quickchart:13,quickfil:[4,14],quickhowto2:[7,12],quickhowto:[12,13,15],quickimag:14,quit:10,radic:15,rais:23,rapid:9,raw:22,readabl:23,readi:[4,6,10,13],readlin:7,readonli:[1,2,18],realli:[0,7,19],reason:15,rebuild:23,recaptcha:21,recaptcha_private_kei:21,recaptcha_public_kei:21,receiv:[15,21,23],record:[0,2,7,11,15,18,19,20,21,23,24],redirect:[0,2,19,23,24],reduc:23,refer:[],referencefield:16,reflect:5,regard:7,regexp:7,regist:[],register_mail:[2,21],register_us:2,registerus:[2,21],registeruser_view:2,registeruserdbview:[2,21],registeruseroidview:2,registerview:[2,21],registr:[],rel:[2,3,4,20,23,24],relat:[],related_view:[0,2,4,8,13,15,16,18,20,22,23],relationship:[2,13,15,18,19,22,23],relative_view:23,releas:15,reload:23,rememb:[1,2,4,13,15,16,18,20,23],remenb:23,remote_app:2,remote_us:[2,3,11,19,23],remov:[0,1,2,15,16,19,22,23,24],remv:23,render:[2,4,5,8,15,20,22,23,24],render_field:23,render_templ:[2,24],reorg:23,repeat:[10,11],replac:[20,23],repo:6,report:[9,23],repres:[7,24],represent:15,request:[2,23],requir:[],reset:[],reset_password:2,resetmypasswordview:2,resetpasswordview:2,resid:12,resiz:[3,14,23],resolv:23,resourc:[18,22],respect:[2,7,13],respond:23,respons:[2,5,14,19,23,24],rest:[],restcrudview:5,restrict:2,restruct:23,restructur:23,result:[14,15],retro:22,revers:[4,19,23],review:[23,24],rework:[19,23],right:4,rocket:[0,19],role:[],role_id:22,root:[6,8,12,15,23],round:14,rout:[2,24],route_bas:[2,23,24],row:[2,15,20],rtype:2,rule:[1,20],run:[6,8,10,17,18,19,22,23,24],russian:[8,23],safe:23,sai:[13,20],same:[2,4,5,13,15,16,18,19,20,23,24],save:[2,14,23],scaffold:11,schema:[15,16,22],scope:20,scratch:[19,20],screen:21,script:[20,22,23],search:[1,2,3,5,9,15,20,23],search_column:[2,4,7,13,23],search_field:15,search_filt:15,search_form:2,search_widget:[2,23],searchwidget:2,sec:19,sec_model:19,sec_view:19,secondari:18,secret_kei:17,section:20,security_cleanup:[2,19,23],security_manager_class:[2,16,19,23],securitymanag:[2,16,19,21,22,23],see:[7,10,15,16,18,20,23,24],select2:[11,18,20,22,23],select2widget:1,select:[1,2,4,15,23],self:[0,1,2,3,7,11,13,14,15,16,18,19,21,22,23,24],send:[0,2,21,23,24],send_email:2,sent:[2,21],separ:[2,4,8,23],sequenc:[19,23],sequenti:2,seri:[2,13,23],serial:4,seriou:10,serv:[15,20],server:[3,4,6,10,14,17,19,21,23],serverdisktyp:4,serverdisktypemodelview:4,servermodelview:4,sess:7,session:[1,2,4,7,10,16,17,19,20,22,23,24],set:[1,2,3,4,11,15,21],set_index_view:23,set_link_filt:23,setlevel:16,setup:[],seven:8,sever:15,share:[18,20],she:[18,21],ship:11,should:[0,2,4,7,15,16,19,22],show:[],show_cascad:[4,18,23],show_column:[2,14,15,18],show_fieldset:[2,15,16,19],show_form:[20,23],show_templ:[1,2,4,18],show_titl:2,show_widget:2,showblockwidget:23,shown:[2,3,18,19,20,21,23],showwidget:2,side:[3,4,23],sign:3,similar:21,simpl:[],simplebychartview:[],simpler:1,simpleview1:24,simpleview2:24,simpli:10,simplifi:[19,23],sinc:[6,10,15,19,23,24],singl:[0,2,7,19],site:[2,11,19,24],size:[2,3,14,15,23],skeleton:[],skip:24,slightli:18,small:[20,22],smtp:21,solv:[1,10],some:[2,8,11,13,14,15,18,19,21,22],some_col:2,someon:15,someth:[0,19,20,24],sometim:[2,24],somevalu:1,space:15,spacelab:4,spanish:[8,23],special:[0,1,3,4,5,15,18,19,23],specif:[2,19,20],sql:23,sqla:[0,2,7,12,13,14,15,17,18,19,22,23],sqlaintefac:22,sqlainterdac:19,sqlainterfac:[0,1,5,8,13,14,15,18,22,23],sqlalchemi:[2,3,5,6,7,10,11,12,14,15,16,17,18,19,22,23],sqlalchemy_bind:12,sqlalchemy_database_uri:[3,12,17],sqlamodel:[1,2,4,13,19,20,22,23],sqlinterfac:23,sqlite:[11,12,17,22,23],sqllite:[3,16],src:[14,20],stamp:2,start:[1,10,19,21,23],stat1:13,stat2:13,stat:[2,13],stat_col_1:2,stat_col_2:2,stat_col_3:2,stat_dat:[2,13],state:22,static_fold:2,static_url_path:2,statist:[2,13],statschartview:[2,13],still:[1,7,10,11,15,16],stime:7,store:[2,3,4],str:[2,7,13,14],straightforward:10,street:15,strftime:18,strict:15,string:[2,3,8,12,13,14,15,18,19,22,24],stringfield:[16,23,24],stringio:23,structur:[1,2,5,6,15,20],student:13,studi:19,style:[2,3,4,11,15,19,23],sub:23,subclass:[2,5,7,15,23],subject:[2,15,21],submenu:[2,4,23],submit:[2,21,24],subset:7,succesfulli:21,success:[2,15,19,21],sudo:10,suit:23,sum:[2,13],summari:[2,5,15,16],support:[],suppos:13,sure:21,surpress:23,syntax:15,system:[7,10],tab:[4,15,18,23],tabl:[],tag:[16,18,23],tail:24,tail_j:20,take:[1,3,4,6,8,13,14,15,16,17,18,19,21,24],task:6,tell:[0,4,8,16,18,19,20,21,24],temp:23,template_fold:2,test:[2,10,22,23,24],text:[2,4,6,8,18,20,23,24],textfield:[1,23],than:[11,23],thei:[2,7,13,14,15,18,20,23,24],them:[0,2,3,4,8,12,13,14,15,18,19,20,22,24],theme:[],themselv:21,thi:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],thing:[13,22],this_form_get:[2,24],thisismyscretkei:17,thumbnail:[11,14,23],thumbnail_s:[2,14],time:[2,4,7,10,11,13,16,18,19,21,23,24],timestamp:11,titl:[2,13,20,21,23,24],tmp:22,todai:18,togeth:13,toggl:23,too:10,tool:10,top:[2,4,9,20,23],total:[13,15,19],track:18,translat:[],treatment:15,tree:[],trigger:15,tty:7,tupl:[2,3,13,23],two:[2,8,10,13,14,15,16,17,18,19,20,24],type:[],typo:23,ubuntu:10,uid:[3,7],uncondition:2,under:[23,24],underli:15,unemploy:[2,13],unemployed_perc:[2,13],unicod:23,uniqu:[1,2,5,12,13,14,15,16,18,19,23],unless:22,unlik:10,unmappedinstanceerror:15,unnecessari:23,unus:[2,6,23],unwant:19,updat:[0,2,6,15,16,18,19,23,24],update_redirect:[0,2,19,24],update_us:2,update_user_auth_stat:2,upload:[3,11,23],upload_fold:[3,23],upon:19,url:[],url_for:[2,14,15,20,23],urllib:23,usag:6,user:[],user_model:19,user_show_fieldset:19,user_view:2,userdbmodelview:[2,19,22],userid:2,userinfo:23,userldapmodelview:[2,19],usernam:[2,3,10,19,21,23],useroauthmodelview:2,useroidmodelview:[2,19],userremoteusermodelview:2,utf:8,utilview:[5,23],uuid:[2,14,23],uwsgi:23,valid:[1,2,11,15,23,24],validators_column:[1,2],valu:[1,2,4,8,11,13,15,23],varchar:22,varieti:11,variou:[3,5,11,15,23],venv:10,veri:[1,4,15,16,20,21,22,24],verifi:19,version:[],versu:13,vertic:[11,23],via:[11,19,23],video:10,view_menu:2,view_menu_nam:2,view_nam:2,viewmenu:2,virtual:[10,23],virtualenv:10,visual:13,wai:[1,2,3,4,10,12,15,16,18,19,20,21,22,23],want:[0,1,2,4,8,13,15,18,19,20,24],warn:[2,23],web:[3,6,10,11,15,19,23],welcom:[9,13,15],well:[15,17,24],were:[2,7,13,22,23],wget:22,what:[1,4,10,15,19],whatev:[4,7,19,20],when:[2,3,4,7,10,14,15,18,19,20,21,23,24],where:[2,4,6,12,13,15,19,20,21,22],wherev:7,which:12,who:19,whose:8,why:22,wide:20,widget:[],width:[2,3,13],without:[2,4,10,15,18,20,23],won:24,work:[7,8,10,15,22,23,24],would:18,write:6,wrong:23,wrote:23,wtf:[2,21,23,24],wtform:[2,5,10,15,23,24],www:[2,4],x_col2:2,x_col_1:2,xcol:23,xpto2:2,xpto:2,yahoo:19,year:[2,13,23],yet:[2,10,15],yetothermodelview:2,you:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],your_css_fil:20,your_js_fil:20,your_project:20,your_root_project_path:4,yourappemail:21,yourself:[11,22],youtub:10,zero:[10,23],zip:6},titles:["Actions","Advanced Configuration","API Reference","Base Configuration","Customizing","Diagrams","Command Line Manager","Generic Data Sources","i18n Translations","Flask-AppBuilder","Installation","Introduction","Multiple Databases","Chart Views","Model Views with Files and Images","Model Views (Quick How to)","Model Views on MongoDB","Quick Minimal Application","Model Relations","Security","Templates","User Registration","Version Migration","Versions","Base Views"],titleterms:{"class":5,"default":[1,4],"function":[2,20],"new":6,action:[0,2],add:20,admin:6,advanc:1,after:6,aggr:2,api:[2,15],app:6,appbuild:[2,9],applic:[6,15,17],argument:1,audit:19,authent:[19,21],automat:19,base:[1,3,15,19,24],basechartview:2,basecrudview:2,basemodelview:2,baseregisterus:2,basesecuritymanag:2,baseview:[2,24],behaviour:4,beta:2,bug:[9,23],cascad:20,chang:4,chart:[2,13],chartview:2,cleanup:19,column:2,command:[6,7],compactcrudmixin:2,compat:10,config:3,configur:[1,3,8,21],construct:4,contact:15,content:9,contribut:9,creat:6,css:20,custom:[4,19],data:[2,5,7,13],databas:[6,12,21],decor:2,defin:[0,13,14,15,16],delet:15,deprec:[2,13],diagram:5,direct:13,directbychartview:2,directchartview:2,edit:20,erd:5,exampl:7,expos:15,ext:2,extend:19,extra:[1,2,15,18],file:14,filemanag:2,filter:1,fix:[9,23],flask:[2,9],footer:4,form:1,from:22,gener:[2,7],group:[2,13],groupbychartview:2,how:[8,15,17],i18n:8,imag:14,improv:23,includ:11,index:4,indexview:2,indic:9,initi:[8,10,16],instal:10,introduct:[8,11],javascript:20,kei:3,ldap:21,librari:20,line:6,list:20,manag:6,mani:18,masterdetailview:2,menu:4,method:15,migrat:22,minim:17,mixin:2,model:[2,5,14,15,16,18,19],modelview:2,mongodb:16,multipl:12,multipleview:2,next:14,openid:21,order:1,password:6,permiss:19,pip:10,properti:18,publicformview:2,python:10,quick:[8,15,17],read:15,refer:2,regist:[13,15,16],registr:21,relat:18,requir:10,reset:6,rest:15,role:19,secur:[1,2,5,19],setup:17,show:20,simpl:15,simpleformview:[2,24],skeleton:15,sourc:[2,7],step:14,support:19,tabl:9,templat:[1,4,20],theme:4,timechartview:2,translat:8,tree:5,type:19,upgrad:6,url:15,user:[6,19,21],version:[22,23],view:[0,2,4,5,13,14,15,16,24],widget:4,your:[0,6,13,14,15,16,19]}})