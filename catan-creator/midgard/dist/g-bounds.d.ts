import type { Point } from './geometry.js';
/**
 * Represents the outer bounds of geometric points.
 */
export type Bounds = {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    width: number;
    height: number;
};
/**
 * Calculates the outer bounds of geometric points.
 */
export declare class BoundsCalculator {
    /**
     * Calculates the outer bounds of geometric points.
     *
     * @param points - The points whose bounds should be calculated.
     * @returns The minimum and maximum positions and total dimensions.
     */
    getBounds(points: Point[]): Bounds;
}
//# sourceMappingURL=g-bounds.d.ts.map