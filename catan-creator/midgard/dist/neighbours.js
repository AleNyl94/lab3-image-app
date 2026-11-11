/**
 * Calculates neighbouring coordinates in a Midgard hex grid.
 *
 * The orientation determines whether straight movement
 * between neighbouring coordinates is horizontal or vertical.
 */
export class NeighbourCalculator {
    #orientation;
    /**
     * Creates a new neighbour calculator.
     *
     * @param orientation - The orientation of the hex grid.
     */
    constructor(orientation) {
        this.#orientation = orientation;
    }
    /**
     * Returns the six neighbouring coordinates
     * in an x-dominated hex grid.
     *
     * Horizontal neighbours are two x-units away.
     * Diagonal neighbours are one x-unit and one y-unit away.
     *
     * @param coordinate - The coordinate whose neighbours should be found.
     * @returns The six neighbouring coordinates.
     */
    #getXDominatedNeighbours(coordinate) {
        const left = {
            x: coordinate.x - 2,
            y: coordinate.y
        };
        const right = {
            x: coordinate.x + 2,
            y: coordinate.y
        };
        const upperLeft = {
            x: coordinate.x - 1,
            y: coordinate.y - 1
        };
        const upperRight = {
            x: coordinate.x + 1,
            y: coordinate.y - 1
        };
        const lowerLeft = {
            x: coordinate.x - 1,
            y: coordinate.y + 1
        };
        const lowerRight = {
            x: coordinate.x + 1,
            y: coordinate.y + 1
        };
        return [
            left,
            right,
            upperLeft,
            upperRight,
            lowerLeft,
            lowerRight
        ];
    }
    /**
     * Returns the six neighbouring coordinates
     * in a y-dominated hex grid.
     *
     * Vertical neighbours are two y-units away.
     * Diagonal neighbours are one x-unit and one y-unit away.
     *
     * @param coordinate - The coordinate whose neighbours should be found.
     * @returns The six neighbouring coordinates.
     */
    #getYDominatedNeighbours(coordinate) {
        const upper = {
            x: coordinate.x,
            y: coordinate.y - 2
        };
        const lower = {
            x: coordinate.x,
            y: coordinate.y + 2
        };
        const upperLeft = {
            x: coordinate.x - 1,
            y: coordinate.y - 1
        };
        const upperRight = {
            x: coordinate.x + 1,
            y: coordinate.y - 1
        };
        const lowerLeft = {
            x: coordinate.x - 1,
            y: coordinate.y + 1
        };
        const lowerRight = {
            x: coordinate.x + 1,
            y: coordinate.y + 1
        };
        return [
            upper,
            lower,
            upperLeft,
            upperRight,
            lowerLeft,
            lowerRight
        ];
    }
    /**
     * Returns the six neighbouring coordinates
     * for this grid's orientation.
     *
     * @param coordinate - The coordinate whose neighbours should be found.
     * @returns The six neighbouring coordinates.
     */
    getNeighbours(coordinate) {
        if (this.#orientation === 'x-dominated') {
            return this.#getXDominatedNeighbours(coordinate);
        }
        return this.#getYDominatedNeighbours(coordinate);
    }
}
//# sourceMappingURL=neighbours.js.map