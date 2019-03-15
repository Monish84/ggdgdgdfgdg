Ext.application({
	
	name : 'Test',
	appFolder : 'app',   
	controllers:["MyController"],
	launch : function() {
		Ext.create('Ext.container.Viewport', {
			layout: 'anchor',
			padding:'20 20 20 20', 
			items: [{
				xtype: 'reg' 
					},
					
				] 
		}); 
	    }
	});