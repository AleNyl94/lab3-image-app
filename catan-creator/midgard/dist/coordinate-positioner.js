/**
 * Converts Midgard grid coordinates into geometric center positions.
 *
 * The calculated point represents the center of a hexagon
 * in a two-dimensional coordinate system such as SVG.
 */
export class CoordinatePositioner {
    #orientation;
    /**
     * Creates a new coordinate positioner.
     *
     * @param orientation - The orientation of the hex grid.
     */
    constructor(orientation) {
        this.#orientation = orientation;
    }
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
    getCenterPosition(coordinate, dimension) {
        if (this.#orientation === 'x-dominated') {
            return this.#getXDominatedCenterPosition(coordinate, dimension);
        }
        return this.#getYDominatedCenterPosition(coordinate, dimension);
    }
    /**
     * Calculates the center position in an x-dominated grid.
     *
     * @param coordinate - The Midgard coordinate to position.
     * @param width - The complete width of one hexagon.
     * @returns The calculated center point.
     */
    #getXDominatedCenterPosition(coordinate, width) {
        const hexagonHeight = (width * 2) / Math.sqrt(3);
        const xStep = width / 2;
        const yStep = (hexagonHeight * 3) / 4;
        return {
            x: coordinate.x * xStep,
            y: coordinate.y * yStep
        };
    }
    /**
     * Calculates the center position in a y-dominated grid.
     *
     * @param coordinate - The Midgard coordinate to position.
     * @param height - The complete height of one hexagon.
     * @returns The calculated center point.
     */
    #getYDominatedCenterPosition(coordinate, height) {
        const hexagonWidth = (height * 2) / Math.sqrt(3);
        const xStep = (hexagonWidth * 3) / 4;
        const yStep = height / 2;
        return {
            x: coordinate.x * xStep,
            y: coordinate.y * yStep
        };
    }
}
//# sourceMappingURL=coordinate-positioner.js.map