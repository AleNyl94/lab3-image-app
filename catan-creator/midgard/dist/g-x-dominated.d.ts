import type { Point } from './geometry.js';
/**
 * Calculates geometric points for x-dominated hexagons.
 */
export declare class XDominatedHexagonGeometry {
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
    getHexagonPoints(center: Point, width: number): Point[];
}
//# sourceMappingURL=g-x-dominated.d.ts.map