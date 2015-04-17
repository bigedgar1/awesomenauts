game.SpendExp = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('exp-screen')), -10); // TODo
                
                me.input.bindKey(me.input.key.F1, "F1");
                me.input.bindKey(me.input.key.F2, "F2");
                me.input.bindKey(me.input.key.F3, "F3");
                me.input.bindKey(me.input.key.F4, "F4");
                me.input.bindKey(me.input.key.F5, "F1");
                
                me.game.world.addChild(new (me.Renderable.extend({
                    init: function(){
                        this._super(me.Renderable, 'init', [10, 10, 300, 50]);
                        this.font = new me.font("Arial", 46,  "white");
                    },
                    
                    draw: function(renderer){
                       this.font.draw(renderer.getContext(), "PRESS F1-F4 TO BUY, F5 TO SKIP", this.pos.x, this.pos.y);  
                       this.font.draw(renderer.getContext(), "CURRENT EXP: " + game.data.exp.toString(), this.pos.x + 100, this.pos.y + 50);  
                       this.font.draw(renderer.getContext(), "F1: INCREASE PRODUCTION CURRENT LEVEL: " + game.data.epx1.toString() + "COAST:" + ((game.data.exp1 + 1) * 10), this.pos.x, this.pos.y + 100);  
                       this.font.draw(renderer.getContext(), "F2: ADD STARTING GOLD", this.pos.x, this.pos.y + 150);  
                       this.font.draw(renderer.getContext(), "F3: INCRASE ATTACK DAMAGE: ", this.pos.x, this.pos.y + 200);
                       this.font.draw(renderer.getContext(), "F4: INCRASE STARTING HEALTH", this.pos.x, this.pos.y + 250);  
                    }
                    
                })));
                
                this.hanler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge){
                    if(action === "F1"){
                        
                    }else if(action === "F2"){
                        
                    }else if(action === "F3"){
                        
                    }else if(action === "F4"){
                        
                    }else if(actiin === "F5"){
                        me.state.change(me.state.PLAY);
                    }
                });
        },
        
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
             me.input.unbindKey(me.input.key.F1, "F1");
             me.input.unbindKey(me.input.key.F2, "F2");
             me.input.unbindKey(me.input.key.F3, "F3");
             me.input.unbindKey(me.input.key.F4, "F4");
             me.input.unbindKey(me.input.key.F5, "F5");
             me.event.unsubscribe(this.hanler);
              

	}
});
