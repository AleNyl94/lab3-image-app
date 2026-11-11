import type { Coordinate } from './coordinate.js';
import type { GridOrientation } from './orientation.js';
/**
 * Calculates neighbouring coordinates in a Midgard hex grid.
 *
 * The orientation determines whether straight movement
 * between neighbouring coordinates is horizontal or vertical.
 */
export declare class NeighbourCalculator {
    #private;
    /**
     * Creates a new neighbour calculator.
     *
     * @param orientation - The orientation of the hex grid.
     */
    constructor(orientation: GridOrientation);
    /**
     * Returns the six neighbouring coordinates
     * for this grid's orientation.
     *
     * @param coordinate - The coordinate whose neighbours should be found.
     * @returns The six neighbouring coordinates.
     */
    getNeighbours(coordinate: Coordinate): Coordinate[];
}
//# sourceMappingURL=neighbours.d.ts.map