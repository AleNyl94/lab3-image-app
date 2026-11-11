import type { Coordinate } from './coordinate.js';
import type { Point } from './geometry.js';
import type { GridOrientation } from './orientation.js';
/**
 * Converts Midgard grid coordinates into geometric center positions.
 *
 * The calculated point represents the center of a hexagon
 * in a two-dimensional coordinate system such as SVG.
 */
export declare class CoordinatePositioner {
    #private;
    /**
     * Creates a new coordinate positioner.
     *
     * @param orientation - The orientation of the hex grid.
     */
    constructor(orientation: GridOrientation);
    /**
     * Calculates the center position of a Midgard coordinate.
     *
     * For an x-dominated grid, dimension represents the
     * complete width of one hexagon.
     *
     * For a y-dominated grid, dimension represents the
     * complete height of one hexagon.
     *
     * @param coordinate - The Midgard coordinate to position.
     * @param dimension - The width or height of one hexagon.
     * @returns The calculated center point.
     */
    getCenterPosition(coordinate: Coordinate, dimension: number): Point;
}
//# sourceMappingURL=coordinate-positioner.d.ts.map