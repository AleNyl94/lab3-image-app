import type { Coordinate } from './coordinate.js';
import type { CoordinateRangeOptions } from './coordinate-range.js';
import { CoordinateRange } from './coordinate-range.js';
/**
 * Creates the complete coordinate area belonging
 * to a Midgard coordinate range.
 *
 * The range skeleton is always included.
 * When fill-around is active, neighbouring coordinates
 * around every skeleton coordinate are also included.
 */
export declare class CoordinateRangeFiller {
    #private;
    /**
     * Creates a new coordinate range filler.
     *
     * @param range - The coordinate range to fill.
     */
    constructor(range: CoordinateRange);
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
    getCoordinateRange(options?: CoordinateRangeOptions): Coordinate[];
}
//# sourceMappingURL=coordinate-range-fill.d.ts.map