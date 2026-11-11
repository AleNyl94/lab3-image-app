import type { Coordinate } from './coordinate.js';
import type { GridOrientation } from './orientation.js';
/**
 * Describes the values needed to create a Midgard coordinate range.
 *
 * Width and height describe the number of skeleton hexagons.
 * Every Midgard coordinate range starts internally at coordinate (2, 2).
 */
export type CoordinateRangeConfig = {
    width: number;
    height: number;
    orientation: GridOrientation;
};
/**
 * Options used when creating a Midgard coordinate range.
 *
 * fillAround is only a meaningful choice for a 1 by 1 skeleton.
 * Larger skeletons are always filled around automatically.
 */
export type CoordinateRangeOptions = {
    fillAround?: boolean;
};
/**
 * Represents a rectangular skeleton of a Midgard hex grid area.
 *
 * Every skeleton starts at Midgard coordinate (2, 2).
 * The dimensions and orientation cannot change after construction.
 */
export declare class CoordinateRange {
    #private;
    /**
     * Creates a new Midgard coordinate range.
     *
     * Invalid dimensions are rejected before the object is created.
     *
     * @param config - The values describing the coordinate range.
     * @throws RangeError If width or height is not a positive integer.
     */
    constructor(config: CoordinateRangeConfig);
    /**
     * Returns the orientation of this coordinate range.
     *
     * The orientation is fixed during construction.
     *
     * @returns The coordinate range orientation.
     */
    getOrientation(): GridOrientation;
    /**
     * Checks whether this coordinate range has valid dimensions.
     *
     * The constructor guarantees valid dimensions.
     * This method is retained for compatibility.
     *
     * @returns True for every successfully constructed range.
     */
    isValid(): boolean;
    /**
     * Creates the skeleton coordinates for this range.
     *
     * The upper-left skeleton coordinate is always (2, 2).
     * Skeleton coordinates use steps of two in both directions.
     *
     * @returns The coordinates that form the skeleton.
     */
    getSkeleton(): Coordinate[];
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
    shouldFillAround(options?: CoordinateRangeOptions): boolean;
}
//# sourceMappingURL=coordinate-range.d.ts.map