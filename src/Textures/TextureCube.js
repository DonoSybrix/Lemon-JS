import ContextResource from '../ContextResource';
import Image from '../Image';

/**
 * A texture cube to use with Sky-boxes
 *
 * @category Textures
 * @extends {ContextResource}
 */
class TextureCube extends ContextResource {
    /**
     * Constructor
     *
     * @param {Array.<string>} paths An array with the image's path for the right cube's face,
     * Paths must be provided in the given order: up, down, left, right, back, front
     */
    constructor(paths = []) {
        super();

        /**
         * Images (one per face)
         *
         * @type {Array.<Image>}
         * @private
         */
        this.images = [];

        if (paths.length) {
            this.loadFromFiles(paths);
        }
    }

    /**
     * Load images from the given paths
     *
     * @param {Array.<string>} paths An array with the image's path for the right cube's face,
     * Paths must be provided in the given order: up, down, left, right, back, front
     */
    loadFromFiles(paths) {
        for (const i in paths) {
            const image = new Image();
            image.loadFromFile(paths[i]);
            this.images[i] = image;
        }
    }

    /**
     * Get images
     *
     * @return {Array.<Image>} An array with images instances
     */
    getImages() {
        return this.images;
    }

    /**
     * Check if texture cube is ready to be use
     *
     * @return {boolean} True if everything is ready
     */
    isReady() {
        if (this.images.length === 0) {
            return false;
        }

        for (let i = 0; i < this.images.length; i += 1) {
            if (!this.images[i].isReady()) {
                return false;
            }
        }

        return true;
    }
}

/**
 * Faces
 *
 * @enum {number}
 */
TextureCube.Face = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
    Back: 4,
    Front: 5,
};

export default TextureCube;
