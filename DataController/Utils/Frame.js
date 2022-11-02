import HotSpot from "./HotSpot.js";

class Frame {
    constructor(frameName, imageRef) {
        this.name = frameName;
        this.image = imageRef;
        this.hotSpotList = Array()
    }

    getFrameName() {
        return this.name;
    }

    getFrameImage() {
        return this.image;
    }

    verifyActionInHotSpots(mouseX, mouseY) {
        // Receive mouse position in x and y when mouse is pressed

        for ( let hotSpot in this.hotSpotList ){
            if ( hotSpot instanceof HotSpot ){
                if ( hotSpot.collide(mouseX, mouseY) ) {
                    return hotSpot.getNextFrame();
                }
            }
        }
    }

    createHotSpot(nextFrame, x, y, w, h) {
        const newHotSpot = new HotSpot(nextFrame, x, y, w, h);

        this.hotSpotList.push(newHotSpot);
    }

    removeHotSpot(indexToRemove) {
        if ( indexToRemove >= 0 && indexToRemove < this.hotSpotList.length) {
            this.hotSpotList.splice(indexToRemove, 1);
        }
    }

    getDataInJSON() { //Idea
        // Need be tested and testes with a backend controller
        // return curently frame to a parent controller

        const hotSpots = Array()

        for ( let hS of this.hotSpotList ){
            if ( hS instanceof HotSpot ){
                hotSpots.push(hS.getDataInJSON());
            }
        }

        const frameData = {
            "name" : this.name,
            "image" : this.image,
            "hotSpots" : hotSpots
        }

        return frameData;
    }
}


export default Frame;
// exports.Frame = Frame;