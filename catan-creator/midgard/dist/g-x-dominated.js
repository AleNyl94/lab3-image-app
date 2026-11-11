/**
 * Calculates geometric points for x-dominated hexagons.
 */
export class XDominatedHexagonGeometry {
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
    getHexagonPoints(center, width) {
        const halfWidth = width / 2;
        const radius = width / Math.sqrt(3);
        const halfRadius = radius / 2;
        const top = {
            x: center.x,
            y: center.y - radius
        };
        const upperRight = {
            x: center.x + halfWidth,
            y: center.y - halfRadius
        };
        const lowerRight = {
            x: center.x + halfWidth,
            y: center.y + halfRadius
        };
        const bottom = {
            x: center.x,
            y: center.y + radius
        };
        const lowerLeft = {
            x: center.x - halfWidth,
            y: center.y + halfRadius
        };
        const upperLeft = {
            x: center.x - halfWidth,
            y: center.y - halfRadius
        };
        return [
            top,
            upperRight,
            lowerRight,
            bottom,
            lowerLeft,
            upperLeft
        ];
    }
}
//# sourceMappingURL=g-x-dominated.js.map