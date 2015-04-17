game.PlayerBaseEntity = me.Entity.extend({
    init : function(x, y, settings){
         this._super(me.Entity, 'init', [x, y, {
            image: "tower",
            width: 100,
            height: 100,
            spritewidth: "100",
            spriteheight: "100",
            getShape: function(){
                return (new me.Rect(0, 0, 100, 100)).toPolygon();
            }
        }]);
        this.broken = false;
        this.health = game.data.playerBaseHealth;
        this.alwaysupdate = true;
        this.type = "PlayerBaseEntity";
        
        this.renderable.addAnimation("idle", [0]);
        this.renderable.addAnimation("broken", [1]);
        this.renderable.setCurrentAnimation("idle");
    },
    
    update: function(delta){
        if(this.health<=0){
           this.broken = false;
           game.data.win = false;
           this.renderable.setCurrentAnimation("broken");
       } 
        this.body.update(delta);
        
        this._super(me.Entity, "update", [delta]);
        return true;
 
      },
 
   collideHandler: function(response){
       if(response.b.type==='EnemyBaseEntity'){
           var ydif = this.pos.y - response.b.pos.y;
           var xdif = this.pos.x -response.b.pos.x;
           
           console.log("xdif " + xdif + " ydif " + ydif);
           
             if(ydif<-40 && xdif< 70 && xdif>-35){
                 this.body.falling = false;
                 this.body.vel.y = -1;
             }
           
             else if(xdif>-35 && this.facing==='right' && (xdif<0) && ydif>-50){
             this.body.vel.x =0;
             this.pos.x = this.pos.x -1;
              }else if(xdif<70 && this.facing==='left'){
                this.body.vel.x = 0;
                this.pos.x = this.pos.x +1;
             }
        }
    }
   
});
