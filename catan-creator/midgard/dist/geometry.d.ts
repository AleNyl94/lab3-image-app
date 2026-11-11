import type { GridOrientation } from './orientation.js';
import type { Bounds } from './g-bounds.js';
export type { Bounds } from './g-bounds.js';
/**
 * Represents a two-dimensional point used for geometric calculations.
 *
 * The x and y values can for example represent a position
 * in an SVG coordinate system.
 */
export type Point = {
    x: number;
    y: number;
};
/**
 * Calculates geometric values for hexagons
 * in a Midgard hex grid.
 *
 * The orientation determines whether the main dimension
 * of a hexagon represents its width or height.
 */
export declare class HexagonGeometry {
    #private;
    /**
     * Creates a new hexagon geometry calculator.
     *
     * @param orientation - The orientation of the hex grid.
     */
    constructor(orientation: GridOrientation);
    /**
     * Calculates the six corner points of a hexagon
     * using this geometry's grid orientation.
     *
     * For an x-dominated grid, dimension represents the width.
     * For a y-dominated grid, dimension represents the height.
     *
     * @param center - The center point of the hexagon.
     * @param dimension - The width or height, depending on orientation.
     * @returns The six corner points of the hexagon.
     */
    getHexagonPoints(center: Point, dimension: number): Point[];
    /**
     * Calculates the outer bounds of geometric points.
     *
     * @param points - The points whose bounds should be calculated.
     * @returns The minimum and maximum positions and total dimensions.
     */
    getBounds(points: Point[]): Bounds;
}
//# sourceMappingURL=geometry.d.ts.map