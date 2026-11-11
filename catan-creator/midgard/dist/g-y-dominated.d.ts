import type { Point } from './geometry.js';
/**
 * Calculates geometric points for y-dominated hexagons.
 */
export declare class YDominatedHexagonGeometry {
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
    getHexagonPoints(center: Point, height: number): Point[];
}
//# sourceMappingURL=g-y-dominated.d.ts.map