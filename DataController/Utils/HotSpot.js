class HotSpot {
    constructor( nextFrame, x, y, w, h) {
        // nextFrame must be a string 
        // x, y, w and h are positive integers
        
        // 'link' for next frame
        this.nextFrame = nextFrame;

        // collide properties
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    getNextFrame() {
        return this.nextFrame;
    }

    collide( mouseX , mouseY ) {
        const colX = ( mouseX > this.x && mouseX < (this.x + this.w) );
        const colY = ( mouseY > this.y && mouseY < (this.y + this.h) );

        return ( colX && colY );
    }
}

// exports.HotSpot = HotSpot;
export default HotSpot;