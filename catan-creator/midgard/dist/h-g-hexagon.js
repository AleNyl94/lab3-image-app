import { CoordinatePositioner } from './coordinate-positioner.js';
import { HexagonGeometry } from './geometry.js';
/**
 * Creates complete hexagons from Midgard coordinates.
 *
 * The injected positioner and geometry determine how
 * the center position and hexagon points are calculated.
 */
export class HexGridHexagonCreator {
    #positioner;
    #geometry;
    /**
     * Creates a new hexagon creator using existing
     * geometric helper objects.
     *
     * @param positioner - Calculates hexagon center positions.
     * @param geometry - Calculates hexagon corner points.
     */
    constructor(positioner, geometry) {
        this.#positioner = positioner;
        this.#geometry = geometry;
    }
    /**
     * Validates the geometric size of a hexagon.
     *
     * The diameter must be a positive, finite number.
     * Decimal values are allowed.
     *
     * @param hexDiameter - The geometric size to validate.
     * @throws RangeError If the diameter is not positive and finite.
     */
    static validateHexDiameter(hexDiameter) {
        if (!Number.isFinite(hexDiameter) ||
            hexDiameter <= 0) {
            throw new RangeError('Hexagon diameter must be a positive, finite number.');
        }
    }
    /**
     * Creates the geometry for one Midgard coordinate.
     *
     * @param coordinate - The coordinate of the hexagon.
     * @param hexDiameter - The geometric size of the hexagon.
     * @returns One complete hexagon prepared for rendering.
     * @throws RangeError If the diameter is not positive and finite.
     */
    createHexagon(coordinate, hexDiameter) {
        HexGridHexagonCreator.validateHexDiameter(hexDiameter);
        const center = this.#positioner.getCenterPosition(coordinate, hexDiameter);
        const points = this.#geometry.getHexagonPoints(center, hexDiameter);
        return {
            coordinate: {
                x: coordinate.x,
                y: coordinate.y
            },
            center,
            points
        };
    }
}
//# sourceMappingURL=h-g-hexagon.js.map