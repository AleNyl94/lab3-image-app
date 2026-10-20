(()=>{"use strict";module.exports = [
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$imageUploader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/imageUploader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$boardGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/boardGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$terraintypes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/terraintypes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$functions$2f$generateBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/functions/generateBoard.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Page() {
    const [uploadedImages, setUploadedImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [board, setBoard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleUploadedImages = (type, file, imageUrl, formattedImage)=>{
        setUploadedImages((prevImages)=>({
                ...prevImages,
                [type]: {
                    file,
                    imageUrl,
                    formattedImage
                }
            }));
    };
    const isImagesFull = Object.keys(uploadedImages).length === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$terraintypes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TERRAIN_TYPES"].length;
    const handleGenerateBoard = ()=>{
        console.log("Generera-knappen trycktes!");
        if (isImagesFull) {
            const newBoard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$functions$2f$generateBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateBoard"])(uploadedImages);
            setBoard(newBoard);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "content",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Create your own game-board!"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "image-dropzones",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$terraintypes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TERRAIN_TYPES"].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$imageUploader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageUploader"], {
                        label: `Upload a image for resource: ${type}`,
                        onImageValid: (file, imageUrl, formattedImage)=>handleUploadedImages(type, file, imageUrl, formattedImage)
                    }, type, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "generate-button-zone",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleGenerateBoard,
                    disabled: !isImagesFull,
                    className: "generate-button",
                    children: isImagesFull ? 'Generate board' : `Upload images (${Object.keys(uploadedImages).length}/6)`
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            board && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$boardGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoardGrid"], {
                tiles: board
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 63,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/lab2-ts-module/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$generateThumbnails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/generateThumbnails.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$getImageDetails$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/getImageDetails.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scaleBatch$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/scaleBatch.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scaletomaxweight$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/scaletomaxweight.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
}),
"[project]/lab2-ts-module/src/generateThumbnails.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateThumbnails",
    ()=>generateThumbnails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/scale.ts [app-ssr] (ecmascript)");
;
function generateThumbnails({ height, width, size }) {
    if (height <= 0 || width <= 0) {
        throw new Error('Dimensions must be positive');
    }
    let aspectWidth = 0;
    switch(size){
        case 'small':
            aspectWidth = 150;
            break;
        case 'medium':
            aspectWidth = 300;
            break;
        case 'large':
            aspectWidth = 600;
            break;
        default:
            throw new Error('Size not allowed');
    }
    const newScaleFactor = aspectWidth / width;
    const thumbnail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scale"])({
        height: height,
        width: width,
        scaleFactor: newScaleFactor
    });
    return {
        height: thumbnail.height,
        width: thumbnail.width
    };
}
}),
"[project]/lab2-ts-module/src/getImageDetails.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getImageDetails",
    ()=>getImageDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$greatestcommondivisor$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/greatestcommondivisor.ts [app-ssr] (ecmascript)");
;
function getImageDetails({ width, height, targetDpi }) {
    if (width <= 0 || height <= 0 || targetDpi <= 0) {
        throw new Error('Invalid dimensions or DPI');
    }
    const commonDivisor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$greatestcommondivisor$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["greatestCommonDivisor"])(width, height);
    const formatCheckWidth = width / commonDivisor;
    const formatCheckHeight = height / commonDivisor;
    const ratioString = `${formatCheckWidth}:${formatCheckHeight}`;
    const aspectDecimal = Number((width / height).toFixed(2));
    const highDpi = width >= 1920;
    const heightInCm = Number((height / targetDpi * 2.54).toFixed(2));
    const widthInCm = Number((width / targetDpi * 2.54).toFixed(2));
    return {
        aspectRatio: {
            ratio: ratioString,
            decimal: aspectDecimal
        },
        highDpi,
        printSizeCm: {
            height: heightInCm,
            width: widthInCm
        }
    };
}
}),
"[project]/lab2-ts-module/src/greatestcommondivisor.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Function to find the greatest common divisor between two numbers.
 *
 * @param a - The first number.
 * @param b - The second number.
 * @returns The greatest common divisor between the two.
 */ __turbopack_context__.s([
    "greatestCommonDivisor",
    ()=>greatestCommonDivisor
]);
function greatestCommonDivisor(a, b) {
    if (a < 0 || b < 0) {
        throw new Error('Numbers must be positive');
    }
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));
    if (b === 0) {
        return a;
    } else {
        return greatestCommonDivisor(b, a % b);
    }
}
}),
"[project]/lab2-ts-module/src/scale.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scale",
    ()=>scale
]);
function scale({ height, width, scaleFactor = 0.25 }) {
    // If statements to prevent illegal types and values as input to the function.
    if (typeof height !== 'number' || Number.isNaN(height) || height <= 0) {
        throw new Error('Height must be a positive number');
    }
    if (typeof width !== 'number' || Number.isNaN(width) || width <= 0) {
        throw new Error('Width must be a positive number');
    }
    if (typeof scaleFactor !== 'number' || Number.isNaN(scaleFactor) || scaleFactor <= 0 || scaleFactor > 1) {
        throw new Error('The scale factor must be a decimal between 0 and/equal to 1');
    }
    const newHeight = Math.floor(height * scaleFactor);
    const newWidth = Math.floor(width * scaleFactor);
    return {
        height: newHeight,
        width: newWidth,
        scaleFactor: Number(scaleFactor.toFixed(4))
    };
}
}),
"[project]/lab2-ts-module/src/scaleBatch.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scaleBatch",
    ()=>scaleBatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$weight$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/weight.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scaletomaxweight$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/scaletomaxweight.ts [app-ssr] (ecmascript)");
;
;
function scaleBatch({ targetWeight, images }) {
    if (images.length < 1 || !Array.isArray(images) || images == undefined) {
        throw new Error('No images found');
    }
    let totalMemory = 0;
    for (const image of images){
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$weight$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weight"])({
            height: image.height,
            width: image.width,
            bytesPerPixel: image.bytesPerPixel
        });
        totalMemory += result.megabytes;
    }
    const scaledImages = [];
    for (const image of images){
        const newImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scaletomaxweight$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scaleToMaxWeight"])({
            width: image.width,
            height: image.height,
            maxMegaBytes: targetWeight,
            bytesPerPixel: image.bytesPerPixel
        });
        scaledImages.push(newImage);
    }
    let scaledImagesMemory = 0;
    for (const image of scaledImages){
        const weighedScaledImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$weight$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weight"])({
            height: image.height,
            width: image.width
        });
        scaledImagesMemory += weighedScaledImages.megabytes;
    }
    const savedMemory = totalMemory - scaledImagesMemory;
    return {
        images: scaledImages,
        savedMemory: savedMemory
    };
}
}),
"[project]/lab2-ts-module/src/scaletomaxweight.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scaleToMaxWeight",
    ()=>scaleToMaxWeight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/scale.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$weight$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/weight.ts [app-ssr] (ecmascript)");
;
;
function scaleToMaxWeight({ width, height, maxMegaBytes, bytesPerPixel = 4 }) {
    if (width <= 0 || height <= 0 || maxMegaBytes <= 0) {
        throw new Error('Measurements must be positive');
    }
    const currentWeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$weight$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weight"])({
        height,
        width,
        bytesPerPixel
    });
    if (currentWeight.megabytes <= maxMegaBytes) {
        return {
            width,
            height,
            scaleFactor: 1.0,
            megaBytes: currentWeight.megabytes
        };
    }
    const currentWeightMegaBytes = currentWeight.megabytes;
    const relation = maxMegaBytes / currentWeightMegaBytes;
    const targetScaleFactor = Math.sqrt(relation);
    const scaledImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scale"])({
        width,
        height,
        scaleFactor: targetScaleFactor
    });
    const scaledImageWeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$weight$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["weight"])({
        height: scaledImage.height,
        width: scaledImage.width,
        bytesPerPixel: 4
    });
    return {
        height: scaledImage.height,
        width: scaledImage.width,
        megaBytes: scaledImageWeight.megabytes,
        scaleFactor: scaledImage.scaleFactor
    };
}
}),
"[project]/lab2-ts-module/src/scaletoratio.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scaleToRatio",
    ()=>scaleToRatio
]);
function scaleToRatio({ height, width, aspectRatio: { height: ratioHeight, width: ratioWidth } }) {
    if (width <= 0 || height <= 0 || ratioHeight <= 0 || ratioWidth <= 0) {
        throw new Error('Measurements must be positive');
    }
    const currentRatio = height / width;
    const targetRatio = ratioWidth / ratioHeight;
    // Bilden är för hög
    if (currentRatio < targetRatio) {
        const newHeight = Math.floor(width / targetRatio);
        return {
            height: newHeight,
            width,
            aspectRatio: Number(targetRatio.toFixed(2))
        };
    }
    // Bilden är för smal
    if (targetRatio < currentRatio) {
        const newWidth = Math.floor(height * targetRatio);
        return {
            height,
            width: newWidth,
            aspectRatio: Number(targetRatio.toFixed(2))
        };
    }
    // Ration är identiska
    return {
        height,
        width,
        aspectRatio: Number(targetRatio.toFixed(2))
    };
}
}),
"[project]/lab2-ts-module/src/weight.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "weight",
    ()=>weight
]);
function weight({ height, width, bytesPerPixel = 4 }) {
    if (height <= 0 || width <= 0 || bytesPerPixel <= 0) {
        throw new Error('All parameters must be positive');
    }
    const bytesResult = height * width * bytesPerPixel;
    const kilobytesResult = bytesResult / 1024;
    const megabytesResult = kilobytesResult / 1024;
    return {
        bytes: bytesResult,
        kilobytes: Number(kilobytesResult.toFixed(2)),
        megabytes: Number(megabytesResult.toFixed(2))
    };
}
}),
"[project]/midgard/dist/c-r-fill-around.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Determines whether a Midgard coordinate range
 * should be filled around its skeleton.
 */ __turbopack_context__.s([
    "CoordinateRangeFillAround",
    ()=>CoordinateRangeFillAround
]);
class CoordinateRangeFillAround {
    /**
     * Determines whether surrounding coordinates should be added.
     *
     * A 1 by 1 skeleton can choose whether to use fillAround.
     * Any larger skeleton is always filled around automatically.
     *
     * @param width - The width of the coordinate range.
     * @param height - The height of the coordinate range.
     * @param fillAround - Whether a 1 by 1 range should be filled around.
     * @returns True if the range should be filled around.
     */ shouldFillAround(width, height, fillAround = false) {
        const isSingleCoordinate = width === 1 && height === 1;
        if (!isSingleCoordinate) {
            return true;
        }
        if (fillAround) {
            return true;
        }
        return false;
    }
}
}),
"[project]/midgard/dist/c-r-skeleton.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates the skeleton coordinates for a Midgard coordinate range.
 *
 * The upper-left skeleton coordinate is always (2, 2).
 * Skeleton coordinates use steps of two in both directions.
 */ __turbopack_context__.s([
    "CoordinateRangeSkeleton",
    ()=>CoordinateRangeSkeleton
]);
class CoordinateRangeSkeleton {
    /**
     * Creates a rectangular skeleton of coordinates.
     *
     * @param width - The number of skeleton coordinates horizontally.
     * @param height - The number of skeleton coordinates vertically.
     * @returns The coordinates that form the skeleton.
     */ create(width, height) {
        const coordinates = [];
        const startX = 2;
        const startY = 2;
        for(let yIndex = 0; yIndex < height; yIndex++){
            const y = startY + yIndex * 2;
            for(let xIndex = 0; xIndex < width; xIndex++){
                const x = startX + xIndex * 2;
                coordinates.push({
                    x,
                    y
                });
            }
        }
        return coordinates;
    }
}
}),
"[project]/midgard/dist/c-r-validation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Validates the dimensions of a Midgard coordinate range.
 */ __turbopack_context__.s([
    "CoordinateRangeValidator",
    ()=>CoordinateRangeValidator
]);
class CoordinateRangeValidator {
    /**
     * Checks whether width and height are valid range dimensions.
     *
     * Both dimensions must be positive integers.
     *
     * @param width - The width of the coordinate range.
     * @param height - The height of the coordinate range.
     * @returns True if both dimensions are valid.
     */ isValid(width, height) {
        if (!Number.isInteger(width)) {
            return false;
        }
        if (!Number.isInteger(height)) {
            return false;
        }
        if (width < 1) {
            return false;
        }
        if (height < 1) {
            return false;
        }
        return true;
    }
}
}),
"[project]/midgard/dist/coordinate-layer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Handles sorting and layering of Midgard coordinates
 * for rendering.
 */ __turbopack_context__.s([
    "CoordinateLayer",
    ()=>CoordinateLayer
]);
class CoordinateLayer {
    coordinates;
    /**
     * Creates a new coordinate layer.
     *
     * A copy of the coordinates is stored so that the original
     * array is not changed.
     *
     * @param coordinates - The coordinates to sort and layer.
     */ constructor(coordinates){
        this.coordinates = [
            ...coordinates
        ];
    }
    /**
     * Sorts the coordinates by y first and x second.
     *
     * Coordinates with the lowest y value come first.
     * Coordinates on the same y row are ordered from
     * the lowest x value to the highest x value.
     *
     * @returns A new array containing the sorted coordinates.
     */ sortCoordinates() {
        const sortedCoordinates = [
            ...this.coordinates
        ];
        sortedCoordinates.sort((firstCoordinate, secondCoordinate)=>{
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
     */ getLayeredCoordinates() {
        const sortedCoordinates = this.sortCoordinates();
        const layeredCoordinates = [];
        let previousY;
        let zIndex = 0;
        for (const coordinate of sortedCoordinates){
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
}),
"[project]/midgard/dist/coordinate-positioner.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Converts Midgard grid coordinates into geometric center positions.
 *
 * The calculated point represents the center of a hexagon
 * in a two-dimensional coordinate system such as SVG.
 */ __turbopack_context__.s([
    "CoordinatePositioner",
    ()=>CoordinatePositioner
]);
class CoordinatePositioner {
    orientation;
    /**
     * Creates a new coordinate positioner.
     *
     * @param orientation - The orientation of the hex grid.
     */ constructor(orientation){
        this.orientation = orientation;
    }
    /**
     * Calculates the center position of a Midgard coordinate.
     *
     * For an x-dominated grid, dimension represents the
     * complete width of one hexagon.
     *
     * For a y-dominated grid, dimension represents the
     * complete height of one hexagon.
     *
     * @param coordinate - The Midgard coordinate to position.
     * @param dimension - The width or height of one hexagon.
     * @returns The calculated center point.
     */ getCenterPosition(coordinate, dimension) {
        if (this.orientation === 'x-dominated') {
            return this.getXDominatedCenterPosition(coordinate, dimension);
        }
        return this.getYDominatedCenterPosition(coordinate, dimension);
    }
    /**
     * Calculates the center position in an x-dominated grid.
     *
     * @param coordinate - The Midgard coordinate to position.
     * @param width - The complete width of one hexagon.
     * @returns The calculated center point.
     */ getXDominatedCenterPosition(coordinate, width) {
        const hexagonHeight = width * 2 / Math.sqrt(3);
        const xStep = width / 2;
        const yStep = hexagonHeight * 3 / 4;
        return {
            x: coordinate.x * xStep,
            y: coordinate.y * yStep
        };
    }
    /**
     * Calculates the center position in a y-dominated grid.
     *
     * @param coordinate - The Midgard coordinate to position.
     * @param height - The complete height of one hexagon.
     * @returns The calculated center point.
     */ getYDominatedCenterPosition(coordinate, height) {
        const hexagonWidth = height * 2 / Math.sqrt(3);
        const xStep = hexagonWidth * 3 / 4;
        const yStep = height / 2;
        return {
            x: coordinate.x * xStep,
            y: coordinate.y * yStep
        };
    }
}
}),
"[project]/midgard/dist/coordinate-range-fill.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoordinateRangeFiller",
    ()=>CoordinateRangeFiller
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$neighbours$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/neighbours.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$coordinate$2d$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/coordinate-range.js [app-ssr] (ecmascript)");
;
;
class CoordinateRangeFiller {
    range;
    /**
     * Creates a new coordinate range filler.
     *
     * @param range - The coordinate range to fill.
     */ constructor(range){
        this.range = range;
    }
    /**
     * Returns the coordinates surrounding one skeleton coordinate.
     *
     * The surrounding coordinates use the orientation
     * of this coordinate range.
     *
     * @param coordinate - The skeleton coordinate.
     * @returns The six neighbouring coordinates.
     */ getCoordinatesAround(coordinate) {
        const neighbourCalculator = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$neighbours$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NeighbourCalculator"](this.range.orientation);
        return neighbourCalculator.getNeighbours(coordinate);
    }
    /**
     * Checks whether a coordinate already exists
     * in a list of coordinates.
     *
     * @param coordinates - The coordinates to search.
     * @param coordinate - The coordinate to look for.
     * @returns True if the coordinate already exists.
     */ containsCoordinate(coordinates, coordinate) {
        for (const existingCoordinate of coordinates){
            if (existingCoordinate.x === coordinate.x && existingCoordinate.y === coordinate.y) {
                return true;
            }
        }
        return false;
    }
    /**
     * Creates all coordinates belonging to this
     * Midgard coordinate range.
     *
     * The basic skeleton is always included. If the range should be
     * filled around, the neighbouring coordinates surrounding every
     * skeleton coordinate are also included.
     *
     * Duplicate coordinates are only included once.
     *
     * @param options - Options controlling how the range is created.
     * @returns All coordinates belonging to the range.
     */ getCoordinateRange(options = {}) {
        const skeleton = this.range.getSkeleton();
        if (!this.range.shouldFillAround(options)) {
            return skeleton;
        }
        const coordinates = [
            ...skeleton
        ];
        for (const skeletonCoordinate of skeleton){
            const surroundingCoordinates = this.getCoordinatesAround(skeletonCoordinate);
            for (const surroundingCoordinate of surroundingCoordinates){
                if (!this.containsCoordinate(coordinates, surroundingCoordinate)) {
                    coordinates.push(surroundingCoordinate);
                }
            }
        }
        return coordinates;
    }
}
}),
"[project]/midgard/dist/coordinate-range.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoordinateRange",
    ()=>CoordinateRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$c$2d$r$2d$skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/c-r-skeleton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$c$2d$r$2d$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/c-r-validation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$c$2d$r$2d$fill$2d$around$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/c-r-fill-around.js [app-ssr] (ecmascript)");
;
;
;
class CoordinateRange {
    width;
    height;
    orientation;
    /**
     * Creates a new Midgard coordinate range.
     *
     * @param config - The values describing the coordinate range.
     */ constructor(config){
        this.width = config.width;
        this.height = config.height;
        this.orientation = config.orientation;
    }
    /**
     * Checks whether this coordinate range has valid dimensions.
     *
     * Width and height describe numbers of skeleton hexagons.
     * Both values must therefore be positive integers.
     *
     * @returns True if this coordinate range is valid.
     */ isValid() {
        const validator = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$c$2d$r$2d$validation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoordinateRangeValidator"]();
        return validator.isValid(this.width, this.height);
    }
    /**
     * Creates the skeleton coordinates for this range.
     *
     * The upper-left skeleton coordinate is always (2, 2).
     * Skeleton coordinates use steps of two in both directions.
     *
     * @returns The coordinates that form the skeleton.
     */ getSkeleton() {
        const skeleton = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$c$2d$r$2d$skeleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoordinateRangeSkeleton"]();
        return skeleton.create(this.width, this.height);
    }
    /**
     * Determines whether this range should be filled
     * around its skeleton.
     *
     * A 1 by 1 skeleton can choose whether to use fillAround.
     * Any larger skeleton is always filled around automatically.
     *
     * @param options - Options for creating the coordinate range.
     * @returns True if this range should be filled around.
     */ shouldFillAround(options = {}) {
        const fillAround = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$c$2d$r$2d$fill$2d$around$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoordinateRangeFillAround"]();
        return fillAround.shouldFillAround(this.width, this.height, options.fillAround);
    }
}
}),
"[project]/midgard/dist/coordinate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Validates coordinates in the Midgard hex grid system.
 */ __turbopack_context__.s([
    "CoordinateValidator",
    ()=>CoordinateValidator
]);
class CoordinateValidator {
    /**
     * Checks whether a coordinate is valid in the Midgard hex grid system.
     *
     * Both x and y must be non-negative integers.
     * A coordinate is valid when x and y have the same parity:
     * both are even or both are odd.
     *
     * For example, (10, 10), (11, 11), and (0, 2) are valid,
     * while (10, 11), (-1, -1), and (10.5, 10.5) are invalid.
     *
     * @param coordinate - The coordinate to validate.
     * @returns `true` if the coordinate is valid; otherwise `false`.
     */ isValidCoordinate(coordinate) {
        if (!Number.isInteger(coordinate.x) || !Number.isInteger(coordinate.y)) {
            return false;
        }
        if (coordinate.x < 0 || coordinate.y < 0) {
            return false;
        }
        const xIsEven = coordinate.x % 2 === 0;
        const yIsEven = coordinate.y % 2 === 0;
        const xIsOdd = coordinate.x % 2 !== 0;
        const yIsOdd = coordinate.y % 2 !== 0;
        if (xIsEven && yIsEven) {
            return true;
        }
        if (xIsOdd && yIsOdd) {
            return true;
        }
        return false;
    }
}
}),
"[project]/midgard/dist/g-bounds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Calculates the outer bounds of geometric points.
 */ __turbopack_context__.s([
    "BoundsCalculator",
    ()=>BoundsCalculator
]);
class BoundsCalculator {
    /**
     * Calculates the outer bounds of geometric points.
     *
     * @param points - The points whose bounds should be calculated.
     * @returns The minimum and maximum positions and total dimensions.
     */ getBounds(points) {
        const firstPoint = points[0];
        if (firstPoint === undefined) {
            return {
                minX: 0,
                minY: 0,
                maxX: 0,
                maxY: 0,
                width: 0,
                height: 0
            };
        }
        let minX = firstPoint.x;
        let minY = firstPoint.y;
        let maxX = firstPoint.x;
        let maxY = firstPoint.y;
        for (const point of points){
            if (point.x < minX) {
                minX = point.x;
            }
            if (point.y < minY) {
                minY = point.y;
            }
            if (point.x > maxX) {
                maxX = point.x;
            }
            if (point.y > maxY) {
                maxY = point.y;
            }
        }
        return {
            minX,
            minY,
            maxX,
            maxY,
            width: maxX - minX,
            height: maxY - minY
        };
    }
}
}),
"[project]/midgard/dist/g-x-dominated.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Calculates geometric points for x-dominated hexagons.
 */ __turbopack_context__.s([
    "XDominatedHexagonGeometry",
    ()=>XDominatedHexagonGeometry
]);
class XDominatedHexagonGeometry {
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
     */ getHexagonPoints(center, width) {
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
}),
"[project]/midgard/dist/g-y-dominated.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Calculates geometric points for y-dominated hexagons.
 */ __turbopack_context__.s([
    "YDominatedHexagonGeometry",
    ()=>YDominatedHexagonGeometry
]);
class YDominatedHexagonGeometry {
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
     */ getHexagonPoints(center, height) {
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
}),
"[project]/midgard/dist/geometry.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexagonGeometry",
    ()=>HexagonGeometry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$g$2d$bounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/g-bounds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$g$2d$x$2d$dominated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/g-x-dominated.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$g$2d$y$2d$dominated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/g-y-dominated.js [app-ssr] (ecmascript)");
;
;
;
class HexagonGeometry {
    orientation;
    /**
     * Creates a new hexagon geometry calculator.
     *
     * @param orientation - The orientation of the hex grid.
     */ constructor(orientation){
        this.orientation = orientation;
    }
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
     */ getXDominatedHexagonPoints(center, width) {
        const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$g$2d$x$2d$dominated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XDominatedHexagonGeometry"]();
        return geometry.getHexagonPoints(center, width);
    }
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
     */ getYDominatedHexagonPoints(center, height) {
        const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$g$2d$y$2d$dominated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YDominatedHexagonGeometry"]();
        return geometry.getHexagonPoints(center, height);
    }
    /**
     * Calculates the six corner points of a hexagon
     * using this geometry's grid orientation.
     *
     * For an x-dominated grid, dimension represents the width.
     * For a y-dominated grid, dimension represents the height.
     *
     * @param center - The center point of the hexagon.
     * @param dimension - The width or height, depending on orientation.
     * @returns The six corner points of the hexagon.
     */ getHexagonPoints(center, dimension) {
        if (this.orientation === 'x-dominated') {
            return this.getXDominatedHexagonPoints(center, dimension);
        }
        return this.getYDominatedHexagonPoints(center, dimension);
    }
    /**
     * Calculates the outer bounds of geometric points.
     *
     * @param points - The points whose bounds should be calculated.
     * @returns The minimum and maximum positions and total dimensions.
     */ getBounds(points) {
        const boundsCalculator = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$g$2d$bounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoundsCalculator"]();
        return boundsCalculator.getBounds(points);
    }
}
}),
"[project]/midgard/dist/h-g-bounds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexGridBoundsCalculator",
    ()=>HexGridBoundsCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$geometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/geometry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$coordinate$2d$positioner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/coordinate-positioner.js [app-ssr] (ecmascript)");
;
;
class HexGridBoundsCalculator {
    orientation;
    /**
     * Creates a new grid bounds calculator.
     *
     * @param orientation - The orientation of the hex grid.
     */ constructor(orientation){
        this.orientation = orientation;
    }
    /**
     * Calculates the outer geometric bounds of hexagons
     * represented by Midgard coordinates.
     *
     * @param coordinates - The coordinates whose bounds should be calculated.
     * @param size - The width or height of one hexagon.
     * @returns The outer bounds of all hexagons.
     */ getGridBounds(coordinates, size) {
        const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$geometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexagonGeometry"](this.orientation);
        const positioner = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$coordinate$2d$positioner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoordinatePositioner"](this.orientation);
        const points = [];
        for (const coordinate of coordinates){
            const center = positioner.getCenterPosition(coordinate, size);
            const hexagonPoints = geometry.getHexagonPoints(center, size);
            points.push(...hexagonPoints);
        }
        return geometry.getBounds(points);
    }
}
}),
"[project]/midgard/dist/h-g-hexagon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexGridHexagonCreator",
    ()=>HexGridHexagonCreator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$coordinate$2d$positioner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/coordinate-positioner.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$geometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/geometry.js [app-ssr] (ecmascript)");
;
;
class HexGridHexagonCreator {
    orientation;
    /**
     * Creates a new hexagon creator.
     *
     * @param orientation - The orientation of the hex grid.
     */ constructor(orientation){
        this.orientation = orientation;
    }
    /**
     * Creates the geometry for one Midgard coordinate.
     *
     * @param coordinate - The coordinate of the hexagon.
     * @param hexDiameter - The geometric size of the hexagon.
     * @returns One complete hexagon prepared for rendering.
     */ createHexagon(coordinate, hexDiameter) {
        const positioner = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$coordinate$2d$positioner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoordinatePositioner"](this.orientation);
        const center = positioner.getCenterPosition(coordinate, hexDiameter);
        const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$geometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexagonGeometry"](this.orientation);
        const points = geometry.getHexagonPoints(center, hexDiameter);
        return {
            coordinate,
            center,
            points
        };
    }
}
}),
"[project]/midgard/dist/hex-grid.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexGrid",
    ()=>HexGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$coordinate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/coordinate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$neighbours$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/neighbours.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$geometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/geometry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$coordinate$2d$positioner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/coordinate-positioner.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$coordinate$2d$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/coordinate-range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$coordinate$2d$range$2d$fill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/coordinate-range-fill.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$coordinate$2d$layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/coordinate-layer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$h$2d$g$2d$bounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/h-g-bounds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$h$2d$g$2d$hexagon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/h-g-hexagon.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
class HexGrid {
    orientation;
    /**
     * Creates a new Midgard hex grid.
     *
     * @param orientation - The orientation of the hex grid.
     */ constructor(orientation){
        this.orientation = orientation;
    }
    /**
     * Creates one single hexagon without any surrounding fill.
     *
     * @param options - The geometric size of the hexagon.
     * @returns One complete hexagon prepared for rendering.
     */ createSingleHexagon(options) {
        const coordinates = this.getCoordinateRange({
            width: 1,
            height: 1
        }, {
            fillAround: false
        });
        const coordinate = coordinates[0];
        if (coordinate === undefined) {
            throw new Error('Could not create the single hexagon coordinate.');
        }
        const hexagonCreator = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$h$2d$g$2d$hexagon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexGridHexagonCreator"](this.orientation);
        return hexagonCreator.createHexagon(coordinate, options.hexDiameter);
    }
    /**
     * Creates a complete Midgard grid around a skeleton.
     *
     * Surrounding coordinates are always filled automatically.
     * The returned hexagons are sorted for rendering and include
     * calculated z-index values.
     *
     * @param options - The hexagon size and skeleton dimensions.
     * @returns All layered hexagons belonging to the complete grid.
     */ createGrid(options) {
        const coordinates = this.getLayeredCoordinateRange({
            width: options.skeletonWidth,
            height: options.skeletonHeight
        }, {
            fillAround: true
        });
        const hexagonCreator = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$h$2d$g$2d$hexagon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexGridHexagonCreator"](this.orientation);
        return coordinates.map((coordinate)=>{
            const hexagon = hexagonCreator.createHexagon(coordinate, options.hexDiameter);
            return {
                ...hexagon,
                zIndex: coordinate.zIndex
            };
        });
    }
    /**
     * Returns the six neighbouring coordinates of a coordinate
     * using this grid's orientation.
     *
     * @param coordinate - The coordinate whose neighbours should be found.
     * @returns The six neighbouring coordinates.
     */ getNeighbours(coordinate) {
        const neighbourCalculator = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$neighbours$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NeighbourCalculator"](this.orientation);
        return neighbourCalculator.getNeighbours(coordinate);
    }
    /**
     * Checks whether a coordinate is valid in the Midgard hex grid system.
     *
     * @param coordinate - The coordinate to validate.
     * @returns `true` if the coordinate is valid; otherwise `false`.
     */ isValidCoordinate(coordinate) {
        const validator = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$coordinate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoordinateValidator"]();
        return validator.isValidCoordinate(coordinate);
    }
    /**
     * Calculates the center position of a Midgard coordinate
     * using this grid's orientation.
     *
     * For an x-dominated grid, size represents the
     * complete width of one hexagon.
     *
     * For a y-dominated grid, size represents the
     * complete height of one hexagon.
     *
     * @param coordinate - The Midgard coordinate to position.
     * @param size - The width or height of one hexagon.
     * @returns The calculated center point.
     */ getCenterPosition(coordinate, size) {
        const positioner = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$coordinate$2d$positioner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoordinatePositioner"](this.orientation);
        return positioner.getCenterPosition(coordinate, size);
    }
    /**
     * Calculates the six corner points of a hexagon
     * using this grid's orientation.
     *
     * @param center - The center point of the hexagon.
     * @param size - The dimension used to calculate the hexagon.
     * @returns The six corner points of the hexagon.
     */ getHexagonPoints(center, size) {
        const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$geometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexagonGeometry"](this.orientation);
        return geometry.getHexagonPoints(center, size);
    }
    /**
     * Calculates the outer geometric bounds of hexagons
     * represented by Midgard coordinates.
     *
     * Each coordinate is first converted to a center position.
     * The six corner points of every hexagon are then calculated,
     * and the outermost values are used to determine the bounds.
     *
     * @param coordinates - The coordinates whose bounds should be calculated.
     * @param size - The width or height of one hexagon.
     * @returns The outer bounds of all hexagons.
     */ getGridBounds(coordinates, size) {
        const boundsCalculator = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$h$2d$g$2d$bounds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexGridBoundsCalculator"](this.orientation);
        return boundsCalculator.getGridBounds(coordinates, size);
    }
    /**
     * Creates all coordinates belonging to a coordinate range
     * using this grid's orientation.
     *
     * @param range - The range skeleton to create.
     * @param options - Options controlling how the range is created.
     * @returns All coordinates belonging to the range.
     */ getCoordinateRange(range, options = {}) {
        const coordinateRange = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$coordinate$2d$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoordinateRange"]({
            ...range,
            orientation: this.orientation
        });
        const coordinateRangeFiller = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$coordinate$2d$range$2d$fill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoordinateRangeFiller"](coordinateRange);
        return coordinateRangeFiller.getCoordinateRange(options);
    }
    /**
     * Creates a coordinate range prepared for rendering.
     *
     * The coordinates are sorted by y and then x.
     * The first y row receives z-index 100 and each
     * following row increases the z-index by 100.
     *
     * @param range - The range skeleton to create.
     * @param options - Options controlling how the range is created.
     * @returns The sorted coordinates with calculated z-index values.
     */ getLayeredCoordinateRange(range, options = {}) {
        const coordinates = this.getCoordinateRange(range, options);
        const coordinateLayer = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$coordinate$2d$layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoordinateLayer"](coordinates);
        return coordinateLayer.getLayeredCoordinates();
    }
}
}),
"[project]/midgard/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MIDGARD_HEX_GRID_VERSION",
    ()=>MIDGARD_HEX_GRID_VERSION
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$geometry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/geometry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$coordinate$2d$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/coordinate-range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$coordinate$2d$range$2d$fill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/coordinate-range-fill.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$hex$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/hex-grid.js [app-ssr] (ecmascript)");
const MIDGARD_HEX_GRID_VERSION = '1.0.0';
;
;
;
;
;
;
;
;
}),
"[project]/midgard/dist/neighbours.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Calculates neighbouring coordinates in a Midgard hex grid.
 *
 * The orientation determines whether straight movement
 * between neighbouring coordinates is horizontal or vertical.
 */ __turbopack_context__.s([
    "NeighbourCalculator",
    ()=>NeighbourCalculator
]);
class NeighbourCalculator {
    orientation;
    /**
     * Creates a new neighbour calculator.
     *
     * @param orientation - The orientation of the hex grid.
     */ constructor(orientation){
        this.orientation = orientation;
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
     */ getXDominatedNeighbours(coordinate) {
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
     */ getYDominatedNeighbours(coordinate) {
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
     */ getNeighbours(coordinate) {
        if (this.orientation === 'x-dominated') {
            return this.getXDominatedNeighbours(coordinate);
        }
        return this.getYDominatedNeighbours(coordinate);
    }
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
"[project]/src/components/boardGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoardGrid",
    ()=>BoardGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/midgard/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$hex$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/midgard/dist/hex-grid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hexagonTile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hexagonTile.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function BoardGrid({ tiles }) {
    const grid = new __TURBOPACK__imported__module__$5b$project$5d2f$midgard$2f$dist$2f$hex$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexGrid"]('x-dominated');
    const hexagons = grid.createGrid({
        hexDiameter: 120,
        skeletonWidth: 3,
        skeletonHeight: 3
    });
    const rowsMap = new Map();
    rawHexagons.forEach((hex)=>{
        const y = hex.coordinate.y;
        if (!rowsMap.has(y)) {
            rowsMap.set(y, []);
        }
        rowsMap.get(y).push(hex);
    });
    for (const [y, hexs] of rowsMap.entries()){
        hexs.sort((a, b)=>a.coordinate.x - b.coordinate.x);
    }
    const sortedRows = Array.from(rowsMap.entries()).sort(([yA], [yB])=>yA - yB).map(([_, hexs])=>hexs);
    const targetPattern = [
        3,
        4,
        5,
        4,
        3
    ];
    let catanRows = [];
    for(let i = 0; i <= sortedRows.length - targetPattern.length; i++){
        const slice = sortedRows.slice(i, i + targetPattern.length);
        const matches = slice.every((row, idx)=>row.length === targetPattern[idx]);
        if (matches) {
            catanRows = slice;
            break;
        }
    }
    const formattedHexagons = catanRows.length > 0 ? catanRows.flat() : rawHexagons.slice(0, 19);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "board",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "hexagon-grid",
            viewBox: "-100 -10 700 600",
            children: formattedHexagons.map((hex, index)=>{
                const tile = tiles[index];
                if (!hex || !hex.points) return null;
                const points = hex.points.map((p)=>`${p.x},${p.y}`).join(' ');
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hexagonTile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexagonTile"], {
                    index: index,
                    hexagon: hex,
                    tile: tile,
                    imageSrc: tile?.imageUrl
                }, index, false, {
                    fileName: "[project]/src/components/boardGrid.tsx",
                    lineNumber: 59,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/boardGrid.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/boardGrid.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/hexagonTile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexagonTile",
    ()=>HexagonTile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function HexagonTile({ hexagon, imageSrc }) {
    const pointsString = hexagon.points.map((p)=>`${p.x}, ${p.y}`).join(' ');
    const clipId = `clip-${hexagon.coordinate.x}--${hexagon.coordinate.y}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        className: "hexagon-mask",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: clipId,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: pointsString
                    }, void 0, false, {
                        fileName: "[project]/src/components/hexagonTile.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/hexagonTile.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/hexagonTile.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: pointsString,
                className: "tile"
            }, void 0, false, {
                fileName: "[project]/src/components/hexagonTile.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            imageSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                href: imageSrc,
                x: hexagon.center.x - 80,
                y: hexagon.center.y - 80,
                width: "160",
                height: "160",
                clipPath: `url(#${clipId})`,
                preserveAspectRatio: "xMidYMid slice",
                className: "tile-image"
            }, void 0, false, {
                fileName: "[project]/src/components/hexagonTile.tsx",
                lineNumber: 26,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/hexagonTile.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/imageUploader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageUploader",
    ()=>ImageUploader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$functions$2f$getimagedimensions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/functions/getimagedimensions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$functions$2f$createImageUrl$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/functions/createImageUrl.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lab2-ts-module/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scaletoratio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/scaletoratio.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ImageUploader({ label, onImageValid }) {
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileTypes = [
        'image/jpeg',
        'image/png',
        'image/webp'
    ];
    const handleFileChange = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        if (!fileTypes.includes(file.type)) {
            setError('Invalid format, please use JPEG, PNG or WebP');
            return;
        }
        setError(null);
        const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$functions$2f$createImageUrl$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createImageUrl"])(file);
        const { width, height } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$functions$2f$getimagedimensions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getImageDimension"])(imageUrl);
        const formattedImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scaletoratio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scaleToRatio"])({
            height,
            width,
            aspectRatio: {
                width: 160,
                height: 160
            }
        });
        onImageValid(file, imageUrl, formattedImage);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-box",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "uploadTitle",
            children: [
                label,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "file",
                    accept: `${fileTypes}`,
                    onChange: handleFileChange,
                    className: "hidden"
                }, void 0, false, {
                    fileName: "[project]/src/components/imageUploader.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "errorMessage",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/imageUploader.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/imageUploader.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/imageUploader.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/functions/createImageUrl.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Function to turn the uploaded image into a URL for the app to handle.
 */ __turbopack_context__.s([
    "createImageUrl",
    ()=>createImageUrl
]);
function createImageUrl(file) {
    const imageFile = URL.createObjectURL(file);
    return imageFile;
}
}),
"[project]/src/functions/generateBoard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateBoard",
    ()=>generateBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$functions$2f$shuffleTiles$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/functions/shuffleTiles.tsx [app-ssr] (ecmascript)");
;
function generateBoard(uploadedImages) {
    const tileTemplates = [
        'forest',
        'forest',
        'forest',
        'forest',
        'pasture',
        'pasture',
        'pasture',
        'pasture',
        'fields',
        'fields',
        'fields',
        'fields',
        'hills',
        'hills',
        'hills',
        'mountains',
        'mountains',
        'mountains',
        'desert'
    ];
    const boardTiles = [];
    for(let i = 0; i < tileTemplates.length; i++){
        const type = tileTemplates[i];
        const imageUrl = uploadedImages[type]?.imageUrl;
        boardTiles.push({
            id: i,
            type: type,
            imageUrl: imageUrl
        });
    }
    const shuffledBoardTiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$functions$2f$shuffleTiles$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shuffleTiles"])(boardTiles);
    return shuffledBoardTiles;
}
}),
"[project]/src/functions/getimagedimensions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getImageDimension",
    ()=>getImageDimension
]);
function getImageDimension(url) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>{
            resolve({
                width: img.naturalWidth,
                height: img.naturalHeight
            });
        };
        img.onerror = (err)=>reject(err);
        img.src = url;
    });
}
}),
"[project]/src/functions/shuffleTiles.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shuffleTiles",
    ()=>shuffleTiles
]);
function shuffleTiles(array) {
    const shuffledBoardTiles = [
        ...array
    ];
    for(let i = shuffledBoardTiles.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const tile = shuffledBoardTiles[i];
        shuffledBoardTiles[i] = shuffledBoardTiles[j];
        shuffledBoardTiles[j] = tile;
    }
    return shuffledBoardTiles;
}
}),
"[project]/src/types/terraintypes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TERRAIN_TYPES",
    ()=>TERRAIN_TYPES
]);
const TERRAIN_TYPES = [
    'forest',
    'hills',
    'pasture',
    'fields',
    'mountains',
    'desert'
];
}),
];})()

//# sourceMappingURL=_1n-op9ilomaaf._.js.map