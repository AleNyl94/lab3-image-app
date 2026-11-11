/**
 * Calculates geometric points for y-dominated hexagons.
 */
export class YDominatedHexagonGeometry {
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
    getHexagonPoints(center, height) {
        const halfHeight = height / 2;
        const radius = height / Math.sqrt(3);
        const halfRadius = radius / 2;
        const upperLeft = {
            x: center.x - halfRadius,
            y: center.y - halfHeight
        };
        const upperRight = {
            x: center.x + halfRadius,
            y: center.y - halfHeight
        };
        const right = {
            x: center.x + radius,
            y: center.y
        };
        const lowerRight = {
            x: center.x + halfRadius,
            y: center.y + halfHeight
        };
        const lowerLeft = {
            x: center.x - halfRadius,
            y: center.y + halfHeight
        };
        const left = {
            x: center.x - radius,
            y: center.y
        };
        return [
            upperLeft,
            upperRight,
            right,
            lowerRight,
            lowerLeft,
            left
        ];
    }
}
//# sourceMappingURL=g-y-dominated.js.map