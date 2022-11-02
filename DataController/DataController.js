import Frame from './Utils/Frame.js';
import { writeFile } from 'fs';

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

            if ( indexToRemove == this.#mainFrameIndex ){
                this.#mainFrameIndex = -1 // reset index of main frame
            }

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

    // Save data methods -----------------------------------

    saveJSON(filename, gameName, authorName) {
        // store all data of frames in a json object and create a file 

        const framesToSave = Array()

        for ( let frame of this.#frames ) {
            if ( frame instanceof Frame ){
                const frameData = frame.getDataInJSON();
                framesToSave.push(frameData);
            }
        }

        const fileData = {
            "name" : String(gameName),
            "author" : String(authorName) || "",
            "mainScene" : this.#mainFrameIndex,
            "scenes": framesToSave
        }

        writeFile( filename + ".json", JSON.stringify(fileData, null, 2), (err) => {
            if ( err ) console.error(err)
        })
    }

}

export default DataController;
// exports.DataController = DataController;