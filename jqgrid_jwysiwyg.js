var curinputid = '';

var jqgridwysiwyg = $.jgrid.extend({

        editRowJWSG : function(inputId, wp){
                curinputid = inputId;

                wp = $.extend({
			controls : "bold,italic,|,undo,redo,image",
                        autoSave:true,
                        debug:false, 
                        resizeOptions: true,
                        autoSave: true,
                        iFrameClass: 'width: 400px; height: 490px;'
                    });
                //get current value             
                var conthtml = $("#"+curinputid).val();

                
                $("#"+curinputid).wysiwyg({
                    controls: wp.controls,
                    autoSave:wp.autoSave,
                    debug:wp.debug, 
                    resizeOptions: wp.resizeOptions,
                    autoSave: wp.autoSave,
                    iFrameClass: wp.iFrameClass,
                    initialContent: conthtml
                });
                
                    
	},
        destroyJWSG : function (){
            $("#"+curinputid).wysiwyg('destroy');
        }
    });