import { NeighbourCalculator } from './neighbours.js';
import { CoordinateRange } from './coordinate-range.js';
/**
 * Creates the complete coordinate area belonging
 * to a Midgard coordinate range.
 *
 * The range skeleton is always included.
 * When fill-around is active, neighbouring coordinates
 * around every skeleton coordinate are also included.
 */
export class CoordinateRangeFiller {
    #range;
    #neighbourCalculator;
    /**
     * Creates a new coordinate range filler.
     *
     * @param range - The coordinate range to fill.
     */
    constructor(range) {
        this.#range = range;
        this.#neighbourCalculator =
            new NeighbourCalculator(range.getOrientation());
    }
    /**
     * Returns the coordinates surrounding one skeleton coordinate.
     *
     * The surrounding coordinates use the orientation
     * of this coordinate range.
     *
     * @param coordinate - The skeleton coordinate.
     * @returns The six neighbouring coordinates.
     */
    #getCoordinatesAround(coordinate) {
        return this.#neighbourCalculator.getNeighbours(coordinate);
    }
    /**
     * Checks whether a coordinate already exists
     * in a list of coordinates.
     *
     * @param coordinates - The coordinates to search.
     * @param coordinate - The coordinate to look for.
     * @returns True if the coordinate already exists.
     */
    #containsCoordinate(coordinates, coordinate) {
        for (const existingCoordinate of coordinates) {
            if (existingCoordinate.x === coordinate.x &&
                existingCoordinate.y === coordinate.y) {
                return true;
            }
        }
        return false;
    }
    /**
     * Creates all coordinates belonging to this
     * Midgard coordinate range.
     *
     * The basic skeleton is always included. If the range should be
     * filled around, the neighbouring coordinates surrounding every
     * skeleton coordinate are also included.
     *
     * Duplicate coordinates are only included once.
     *
     * @param options - Options controlling how the range is created.
     * @returns All coordinates belonging to the range.
     */
    getCoordinateRange(options = {}) {
        const skeleton = this.#range.getSkeleton();
        if (!this.#range.shouldFillAround(options)) {
            return skeleton;
        }
        const coordinates = [...skeleton];
        for (const skeletonCoordinate of skeleton) {
            const surroundingCoordinates = this.#getCoordinatesAround(skeletonCoordinate);
            for (const surroundingCoordinate of surroundingCoordinates) {
                if (!this.#containsCoordinate(coordinates, surroundingCoordinate)) {
                    coordinates.push(surroundingCoordinate);
                }
            }
        }
        return coordinates;
    }
}
//# sourceMappingURL=coordinate-range-fill.js.map