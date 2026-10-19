(()=>{"use strict";module.exports = [
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "page",
    ()=>page
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
function page() {
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
        if (!isImagesFull) {
            const newBoard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$functions$2f$generateBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateBoard"])(uploadedImages);
            setBoard(newBoard);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Create your own game-board!"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "image-dropzones",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$terraintypes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TERRAIN_TYPES"].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$imageUploader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageUploader"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "generate-button-zone",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleGenerateBoard,
                        disabled: !isImagesFull,
                        className: "generate-button",
                        children: isImagesFull ? 'Generate board' : `Upload images (${Object.keys(uploadedImages).length}/6)`
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "game-board-container",
                        children: board && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$boardGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoardGrid"], {
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
(()=>{
    const e = new Error("Cannot find module 'midgard-hex-grid'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hexagonTile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hexagonTile.tsx [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "board",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "hexagon-grid",
            children: hexagons.map((hex, index)=>{
                const tile = tiles[index];
                const points = hex.points.map((p)=>`${p.x},${p.y}`).join(' ');
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hexagonTile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HexagonTile"], {
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
    const pointsString = hexagon.points.map((p)=>`${p.x}, ${p.y}`).join('');
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
                width: 100,
                height: 100
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
                "Drop your image here",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "file",
                    accept: `${fileTypes}`,
                    onChange: handleFileChange,
                    className: "hidden"
                }, void 0, false, {
                    fileName: "[project]/src/components/imageUploader.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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

//# sourceMappingURL=_1pmt0ddvmyqci._.js.map