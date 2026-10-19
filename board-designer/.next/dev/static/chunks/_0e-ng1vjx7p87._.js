(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "page",
    ()=>page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$imageUploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/imageUploader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$boardGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/boardGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$terraintypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/terraintypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$functions$2f$generateBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/functions/generateBoard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function page() {
    _s();
    const [uploadedImages, setUploadedImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [board, setBoard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
    const isImagesFull = Object.keys(uploadedImages).length === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$terraintypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TERRAIN_TYPES"].length;
    const handleGenerateBoard = ()=>{
        if (!isImagesFull) {
            const newBoard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$functions$2f$generateBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateBoard"])(uploadedImages);
            setBoard(newBoard);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Create your own game-board!"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "image-dropzones",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$terraintypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TERRAIN_TYPES"].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$imageUploader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageUploader"], {
                        label: `Upload a image for ${type}`,
                        onImageValid: (file, imageUrl, formattedImage)=>handleUploadedImages(type, file, imageUrl, formattedImage)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "generate-button-zone",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleGenerateBoard,
                        disabled: !isImagesFull,
                        className: "generate-button",
                        children: isImagesFull ? 'Generate board' : `Upload images (${Object.keys(uploadedImages).length}/6)`
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "game-board-container",
                        children: board && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$boardGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoardGrid"], {
                            tiles: board
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 61,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(page, "awHh0meHGn4Ff+uj68ei0mXoJTc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lab2-ts-module/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$generateThumbnails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/generateThumbnails.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$getImageDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/getImageDetails.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$greatestcommondivisor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/greatestcommondivisor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/scale.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scaleBatch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/scaleBatch.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scaletomaxweight$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/scaletomaxweight.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scaletoratio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/scaletoratio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$weight$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/weight.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lab2-ts-module/src/generateThumbnails.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateThumbnails",
    ()=>generateThumbnails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/scale.ts [app-client] (ecmascript)");
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
    const thumbnail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])({
        height: height,
        width: width,
        scaleFactor: newScaleFactor
    });
    return {
        height: thumbnail.height,
        width: thumbnail.width
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lab2-ts-module/src/getImageDetails.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getImageDetails",
    ()=>getImageDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$greatestcommondivisor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/greatestcommondivisor.ts [app-client] (ecmascript)");
;
function getImageDetails({ width, height, targetDpi }) {
    if (width <= 0 || height <= 0 || targetDpi <= 0) {
        throw new Error('Invalid dimensions or DPI');
    }
    const commonDivisor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$greatestcommondivisor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["greatestCommonDivisor"])(width, height);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lab2-ts-module/src/greatestcommondivisor.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lab2-ts-module/src/scale.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lab2-ts-module/src/scaleBatch.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scaleBatch",
    ()=>scaleBatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$weight$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/weight.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scaletomaxweight$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/scaletomaxweight.ts [app-client] (ecmascript)");
;
;
function scaleBatch({ targetWeight, images }) {
    if (images.length < 1 || !Array.isArray(images) || images == undefined) {
        throw new Error('No images found');
    }
    let totalMemory = 0;
    for (const image of images){
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$weight$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weight"])({
            height: image.height,
            width: image.width,
            bytesPerPixel: image.bytesPerPixel
        });
        totalMemory += result.megabytes;
    }
    const scaledImages = [];
    for (const image of images){
        const newImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scaletomaxweight$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleToMaxWeight"])({
            width: image.width,
            height: image.height,
            maxMegaBytes: targetWeight,
            bytesPerPixel: image.bytesPerPixel
        });
        scaledImages.push(newImage);
    }
    let scaledImagesMemory = 0;
    for (const image of scaledImages){
        const weighedScaledImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$weight$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weight"])({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lab2-ts-module/src/scaletomaxweight.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scaleToMaxWeight",
    ()=>scaleToMaxWeight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/scale.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$weight$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/weight.ts [app-client] (ecmascript)");
;
;
function scaleToMaxWeight({ width, height, maxMegaBytes, bytesPerPixel = 4 }) {
    if (width <= 0 || height <= 0 || maxMegaBytes <= 0) {
        throw new Error('Measurements must be positive');
    }
    const currentWeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$weight$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weight"])({
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
    const scaledImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])({
        width,
        height,
        scaleFactor: targetScaleFactor
    });
    const scaledImageWeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$weight$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weight"])({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lab2-ts-module/src/scaletoratio.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lab2-ts-module/src/weight.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/src/components/boardGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoardGrid",
    ()=>BoardGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'midgard-hex-grid'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hexagonTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hexagonTile.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function BoardGrid({ tiles }) {
    const grid = new HexGrid('x-dominated');
    const hexagons = grid.createGrid({
        hexDiameter: 80,
        skeletonWidth: 3,
        skeletonHeight: 3
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "board",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "hexagon-grid",
            children: hexagons.map((hex, index)=>{
                const tile = tiles[index];
                const points = hex.points.map((p)=>`${p.x},${p.y}`).join(' ');
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hexagonTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexagonTile"], {
                    index: index,
                    hexagon: hex,
                    imageSrc: tile?.imageUrl
                }, void 0, false, {
                    fileName: "[project]/src/components/boardGrid.tsx",
                    lineNumber: 27,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/boardGrid.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/boardGrid.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = BoardGrid;
var _c;
__turbopack_context__.k.register(_c, "BoardGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/hexagonTile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexagonTile",
    ()=>HexagonTile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function HexagonTile({ hexagon, imageSrc }) {
    const pointsString = hexagon.points.map((p)=>`${p.x}, ${p.y}`).join('');
    const clipId = `clip-${hexagon.coordinate.x}--${hexagon.coordinate.y}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        className: "hexagon-mask",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: clipId,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: pointsString,
                className: "tile"
            }, void 0, false, {
                fileName: "[project]/src/components/hexagonTile.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            imageSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                href: imageSrc,
                x: hexagon.center.x - 45,
                y: hexagon.center.y - 45,
                className: "tileImage"
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
_c = HexagonTile;
var _c;
__turbopack_context__.k.register(_c, "HexagonTile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/imageUploader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageUploader",
    ()=>ImageUploader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$functions$2f$getimagedimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/functions/getimagedimensions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$functions$2f$createImageUrl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/functions/createImageUrl.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lab2-ts-module/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scaletoratio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lab2-ts-module/src/scaletoratio.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ImageUploader({ label, onImageValid }) {
    _s();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
        const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$functions$2f$createImageUrl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createImageUrl"])(file);
        const { width, height } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$functions$2f$getimagedimensions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getImageDimension"])(imageUrl);
        const formattedImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lab2$2d$ts$2d$module$2f$src$2f$scaletoratio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleToRatio"])({
            height,
            width,
            aspectRatio: {
                width: 100,
                height: 100
            }
        });
        onImageValid(file, imageUrl, formattedImage);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-box",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "uploadTitle",
            children: [
                label,
                "Drop your image here",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "file",
                    accept: `${fileTypes}`,
                    onChange: handleFileChange,
                    className: "hidden"
                }, void 0, false, {
                    fileName: "[project]/src/components/imageUploader.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "errorMessage",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/imageUploader.tsx",
                    lineNumber: 57,
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
_s(ImageUploader, "39SUJx0P4eHjijJR4Qf4sC3cll8=");
_c = ImageUploader;
var _c;
__turbopack_context__.k.register(_c, "ImageUploader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/functions/createImageUrl.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/functions/generateBoard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateBoard",
    ()=>generateBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$functions$2f$shuffleTiles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/functions/shuffleTiles.tsx [app-client] (ecmascript)");
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
    const shuffledBoardTiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$functions$2f$shuffleTiles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shuffleTiles"])(boardTiles);
    return shuffledBoardTiles;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/functions/getimagedimensions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/functions/shuffleTiles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/types/terraintypes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_0e-ng1vjx7p87._.js.map