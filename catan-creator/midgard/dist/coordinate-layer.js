/**
 * Handles sorting and layering of Midgard coordinates
 * for rendering.
 */
export class CoordinateLayer {
    #coordinates;
    /**
     * Creates a new coordinate layer.
     *
     * A copy of the coordinates is stored so that the original
     * array is not changed.
     *
     * @param coordinates - The coordinates to sort and layer.
     */
    constructor(coordinates) {
        this.#coordinates = [...coordinates];
    }
    /**
     * Sorts the coordinates by y first and x second.
     *
     * Coordinates with the lowest y value come first.
     * Coordinates on the same y row are ordered from
     * the lowest x value to the highest x value.
     *
     * @returns A new array containing the sorted coordinates.
     */
    #sortCoordinates() {
        const sortedCoordinates = [...this.#coordinates];
        sortedCoordinates.sort((firstCoordinate, secondCoordinate) => {
            if (firstCoordinate.y !== secondCoordinate.y) {
                return firstCoordinate.y - secondCoordinate.y;
            }
            return firstCoordinate.x - secondCoordinate.x;
        });
        return sortedCoordinates;
    }
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
    getLayeredCoordinates() {
        const sortedCoordinates = this.#sortCoordinates();
        const layeredCoordinates = [];
        let previousY;
        let zIndex = 0;
        for (const coordinate of sortedCoordinates) {
            if (coordinate.y !== previousY) {
                zIndex += 100;
                previousY = coordinate.y;
            }
            layeredCoordinates.push({
                x: coordinate.x,
                y: coordinate.y,
                zIndex
            });
        }
        return layeredCoordinates;
    }
}
//# sourceMappingURL=coordinate-layer.js.map