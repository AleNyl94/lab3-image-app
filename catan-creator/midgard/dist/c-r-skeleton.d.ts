import type { Coordinate } from './coordinate.js';
/**
 * Creates the skeleton coordinates for a Midgard coordinate range.
 *
 * The upper-left skeleton coordinate is always (2, 2).
 * Skeleton coordinates use steps of two in both directions.
 */
export declare class CoordinateRangeSkeleton {
    /**
     * Creates a rectangular skeleton of coordinates.
     *
     * @param width - The number of skeleton coordinates horizontally.
     * @param height - The number of skeleton coordinates vertically.
     * @returns The coordinates that form the skeleton.
     */
    create(width: number, height: number): Coordinate[];
}
//# sourceMappingURL=c-r-skeleton.d.ts.map