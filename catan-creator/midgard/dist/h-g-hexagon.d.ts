import type { Coordinate } from './coordinate.js';
import type { Point } from './geometry.js';
import { CoordinatePositioner } from './coordinate-positioner.js';
import { HexagonGeometry } from './geometry.js';
/**
 * Represents one complete hexagon created from
 * a Midgard coordinate.
 */
export type CreatedHexagon = {
    coordinate: Coordinate;
    center: Point;
    points: Point[];
};
/**
 * Creates complete hexagons from Midgard coordinates.
 *
 * The injected positioner and geometry determine how
 * the center position and hexagon points are calculated.
 */
export declare class HexGridHexagonCreator {
    #private;
    /**
     * Creates a new hexagon creator using existing
     * geometric helper objects.
     *
     * @param positioner - Calculates hexagon center positions.
     * @param geometry - Calculates hexagon corner points.
     */
    constructor(positioner: CoordinatePositioner, geometry: HexagonGeometry);
    /**
     * Validates the geometric size of a hexagon.
     *
     * The diameter must be a positive, finite number.
     * Decimal values are allowed.
     *
     * @param hexDiameter - The geometric size to validate.
     * @throws RangeError If the diameter is not positive and finite.
     */
    static validateHexDiameter(hexDiameter: number): void;
    /**
     * Creates the geometry for one Midgard coordinate.
     *
     * @param coordinate - The coordinate of the hexagon.
     * @param hexDiameter - The geometric size of the hexagon.
     * @returns One complete hexagon prepared for rendering.
     * @throws RangeError If the diameter is not positive and finite.
     */
    createHexagon(coordinate: Coordinate, hexDiameter: number): CreatedHexagon;
}
//# sourceMappingURL=h-g-hexagon.d.ts.map