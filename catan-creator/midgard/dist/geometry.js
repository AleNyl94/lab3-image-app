import { BoundsCalculator } from './g-bounds.js';
import { XDominatedHexagonGeometry } from './g-x-dominated.js';
import { YDominatedHexagonGeometry } from './g-y-dominated.js';
/**
 * Calculates geometric values for hexagons
 * in a Midgard hex grid.
 *
 * The orientation determines whether the main dimension
 * of a hexagon represents its width or height.
 */
export class HexagonGeometry {
    #orientation;
    /**
     * Creates a new hexagon geometry calculator.
     *
     * @param orientation - The orientation of the hex grid.
     */
    constructor(orientation) {
        this.#orientation = orientation;
    }
    /**
     * Calculates the six corner points
     * of an x-dominated hexagon.
     *
     * The width represents the complete horizontal width
     * of the hexagon.
     *
     * @param center - The center point of the hexagon.
     * @param width - The complete width of the hexagon.
     * @returns The six corner points of the hexagon.
     */
    #getXDominatedHexagonPoints(center, width) {
        const geometry = new XDominatedHexagonGeometry();
        return geometry.getHexagonPoints(center, width);
    }
    /**
     * Calculates the six corner points
     * of a y-dominated hexagon.
     *
     * The height represents the complete vertical height
     * of the hexagon.
     *
     * @param center - The center point of the hexagon.
     * @param height - The complete height of the hexagon.
     * @returns The six corner points of the hexagon.
     */
    #getYDominatedHexagonPoints(center, height) {
        const geometry = new YDominatedHexagonGeometry();
        return geometry.getHexagonPoints(center, height);
    }
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
    getHexagonPoints(center, dimension) {
        if (this.#orientation === 'x-dominated') {
            return this.#getXDominatedHexagonPoints(center, dimension);
        }
        return this.#getYDominatedHexagonPoints(center, dimension);
    }
    /**
     * Calculates the outer bounds of geometric points.
     *
     * @param points - The points whose bounds should be calculated.
     * @returns The minimum and maximum positions and total dimensions.
     */
    getBounds(points) {
        const boundsCalculator = new BoundsCalculator();
        return boundsCalculator.getBounds(points);
    }
}
//# sourceMappingURL=geometry.js.map