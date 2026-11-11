import { CoordinateRangeSkeleton } from './c-r-skeleton.js';
import { CoordinateRangeValidator } from './c-r-validation.js';
import { CoordinateRangeFillAround } from './c-r-fill-around.js';
/**
 * Represents a rectangular skeleton of a Midgard hex grid area.
 *
 * Every skeleton starts at Midgard coordinate (2, 2).
 * The dimensions and orientation cannot change after construction.
 */
export class CoordinateRange {
    #width;
    #height;
    #orientation;
    /**
     * Creates a new Midgard coordinate range.
     *
     * Invalid dimensions are rejected before the object is created.
     *
     * @param config - The values describing the coordinate range.
     * @throws RangeError If width or height is not a positive integer.
     */
    constructor(config) {
        const validator = new CoordinateRangeValidator();
        if (!validator.isValid(config.width, config.height)) {
            throw new RangeError('Coordinate range width and height must be positive integers.');
        }
        this.#width = config.width;
        this.#height = config.height;
        this.#orientation = config.orientation;
    }
    /**
     * Returns the orientation of this coordinate range.
     *
     * The orientation is fixed during construction.
     *
     * @returns The coordinate range orientation.
     */
    getOrientation() {
        return this.#orientation;
    }
    /**
     * Checks whether this coordinate range has valid dimensions.
     *
     * The constructor guarantees valid dimensions.
     * This method is retained for compatibility.
     *
     * @returns True for every successfully constructed range.
     */
    isValid() {
        const validator = new CoordinateRangeValidator();
        return validator.isValid(this.#width, this.#height);
    }
    /**
     * Creates the skeleton coordinates for this range.
     *
     * The upper-left skeleton coordinate is always (2, 2).
     * Skeleton coordinates use steps of two in both directions.
     *
     * @returns The coordinates that form the skeleton.
     */
    getSkeleton() {
        const skeleton = new CoordinateRangeSkeleton();
        return skeleton.create(this.#width, this.#height);
    }
    /**
     * Determines whether this range should be filled
     * around its skeleton.
     *
     * A 1 by 1 skeleton can choose whether to use fillAround.
     * Any larger skeleton is always filled around automatically.
     *
     * @param options - Options for creating the coordinate range.
     * @returns True if this range should be filled around.
     */
    shouldFillAround(options = {}) {
        const fillAround = new CoordinateRangeFillAround();
        return fillAround.shouldFillAround(this.#width, this.#height, options.fillAround);
    }
}
//# sourceMappingURL=coordinate-range.js.map