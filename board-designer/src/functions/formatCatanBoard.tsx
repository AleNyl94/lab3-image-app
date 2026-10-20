/**
 * Formats the shuffled tiles into the Catan-board format, in rows of 3,4,5,4,3.
 * 
 * @param rawHexagons - Hexagon tiles that are shuffled, drawn and have images mounted.
 * @returns formattedHexagons - Tiles in order so it represents an classic Catan-board.
 */
export function formatCatanBoard(rawHexagons: any[]) {
 const rowsMap = new Map<number, any[]>()
  rawHexagons.forEach((hex: any) => {
    const y = hex.coordinate.y
    if (!rowsMap.has(y)) {
      rowsMap.set(y, [])
    }
    rowsMap.get(y)!.push(hex)
  })

  for (const [y, hexs] of rowsMap.entries()) {
    hexs.sort((a, b) => a.coordinate.x - b.coordinate.x)
  }

  const sortedRows = Array.from(rowsMap.entries())
    .sort(([yA], [yB]) => yA - yB)
    .map(([_, hexs]) => hexs)

  const targetPattern = [3, 4, 5, 4, 3]
  let catanRows: any[][] = []

  for (let i = 0; i <= sortedRows.length - targetPattern.length; i++) {
    const slice = sortedRows.slice(i, i + targetPattern.length)
    const matches = slice.every((row, idx) => row.length === targetPattern[idx])
    if (matches) {
      catanRows = slice
      break
    }
  }

  const formattedHexagons = catanRows.length > 0 ? catanRows.flat() : rawHexagons.slice(0, 19)
  return formattedHexagons
}