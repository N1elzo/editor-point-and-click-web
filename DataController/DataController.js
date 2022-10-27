import Frame from './Frame.js';

class DataController {
    // Base class for manager objects in app

    // Frames data -----------------------------------------
    #frames = Array()
    #mainFrameIndex = -1; // -1 caso não esteja definido

    // -----------------------------------------------------

    constructor() {} // empty constructor


    // Frames manipultaion methods -------------------------
    
    get frames(){
        return this.#frames;
    }

    addFrame( frameName, frameImg ){
        if ( frameName != "" && frameImg != "" ){
            // create a new frame with name and img
            const newFrame = new Frame(frameName, frameImg);
            this.#frames.push(newFrame);
        }
    }

    removeFrame( indexToRemove ) {
        if ( indexToRemove >= 0 && indexToRemove < this.#frames.length) {
            const removedFrame = this.#frames.splice(indexToRemove, 1);

            return removedFrame || null;
        }

        return null;
    }

    setMainFrame( mainFrame ) {
        if ( !Number.isInteger(mainFrame) ) return null;

        if ( mainFrame >= 0 && mainFrame < this.#frames.length ){
            this.#mainFrameIndex = mainFrame;
        }
    }

    getMainFrame() {
        return this.#mainFrameIndex;
    }

    // -----------------------------------------------------

}

export default DataController;
// exports.DataController = DataController;