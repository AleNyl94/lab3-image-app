import type { Coordinate } from './coordinate.js';
/**
 * Represents a Midgard coordinate with a z-index for rendering.
 *
 * The z-index is based on the coordinate's y row.
 * The row with the lowest y value starts at 100,
 * and each following row increases by 100.
 */
export type LayeredCoordinate = {
    x: number;
    y: number;
    zIndex: number;
};
/**
 * Handles sorting and layering of Midgard coordinates
 * for rendering.
 */
export declare class CoordinateLayer {
    #private;
    /**
     * Creates a new coordinate layer.
     *
     * A copy of the coordinates is stored so that the original
     * array is not changed.
     *
     * @param coordinates - The coordinates to sort and layer.
     */
    constructor(coordinates: Coordinate[]);
    /**
     * Creates layered coordinates for rendering a Midgard hex grid.
     *
     * Coordinates are ordered by y first and x second.
     * The first y row receives z-index 100.
     * Each following y row increases the z-index by 100.
     *
     * All coordinates on the same y row receive the same z-index.
     *
     * @returns Sorted coordinates with their calculated z-index.
     */
    getLayeredCoordinates(): LayeredCoordinate[];
}
//# sourceMappingURL=coordinate-layer.d.ts.map