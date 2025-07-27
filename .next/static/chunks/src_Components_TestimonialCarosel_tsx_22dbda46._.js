(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/Components/TestimonialCarosel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Testimonial)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$carousel$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Carousel$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/carousel/index.js [app-client] (ecmascript) <export default as Carousel>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const testimonials = [
    {
        place: 'UK',
        feedback: "As a busy restaurant owner, I need reliable suppliers who deliver premium quality. This service has exceeded my expectations! The jackfruit, coconuts, and fresh spices are exceptional, and their dedication to sustainable farming practices aligns perfectly with our restaurant's values. Their wholesale options have been a game-changer for my business.",
        name: "Cooper",
        image: 'https://i.pravatar.cc/150?img=1'
    },
    {
        place: 'London',
        feedback: "I've been ordering from this service for over 6 months now, and the quality of produce has been consistently excellent. The mangoes and rambutan are always perfectly ripe, and their organic vegetables taste just like what my grandmother used to grow. Delivery is always on time, and I love supporting local Sri Lankan farmers!",
        name: "Shizukz Admin",
        image: 'https://i.pravatar.cc/150?img=2'
    },
    {
        feedback: "Moving to Sri Lanka, I was worried about  has been my savior! Their English interface is easy to navigate, and the variety of fruits I'd never tried before—like wood apple and soursop—came with helpful preparation tips. The customer service team is incredibly responsive and friendly.",
        place: 'Ravi phillins',
        name: "John Doe",
        image: 'https://i.pravatar.cc/150?img=3'
    },
    {
        place: 'Bhiar Anropp',
        feedback: "As a busy restaurant owner, I need reliable suppliers who deliver premium quality. This service has exceeded my expectations! The jackfruit, coconuts, and fresh spices are exceptional, and their dedication to sustainable farming practices aligns perfectly with our restaurant's values. Their wholesale options have been a game-changer for my business.",
        name: "john Doe",
        image: 'https://i.pravatar.cc/150?img=3'
    }
];
function Testimonial() {
    _s();
    const [slidesToShow, setSlidesToShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonial.useEffect": ()=>{
            const updateSlides = {
                "Testimonial.useEffect.updateSlides": ()=>{
                    const width = window.innerWidth;
                    setSlidesToShow(width < 500 ? 1 : width > 500 && width < 1200 ? 2.5 : 3);
                }
            }["Testimonial.useEffect.updateSlides"];
            updateSlides(); // Call once on mount
            window.addEventListener('resize', updateSlides);
            return ({
                "Testimonial.useEffect": ()=>window.removeEventListener('resize', updateSlides)
            })["Testimonial.useEffect"];
        }
    }["Testimonial.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "testimonial-wrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "testimonial-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "testimonial-title",
                        children: "TESTIMONIALS"
                    }, void 0, false, {
                        fileName: "[project]/src/Components/TestimonialCarosel.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "testimonial-subtitle",
                        children: "What Our Customers Say"
                    }, void 0, false, {
                        fileName: "[project]/src/Components/TestimonialCarosel.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/Components/TestimonialCarosel.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$carousel$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Carousel$3e$__["Carousel"], {
                className: "carosal-inner",
                autoplay: true,
                dotPosition: "bottom",
                dots: false,
                slidesToShow: slidesToShow,
                children: testimonials.map((t, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "testimonial-warpper-new",
                        style: {
                            maxWidth: "33%",
                            backgroundColor: "red"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "testimonial-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "testimonial-image",
                                    src: t.image,
                                    alt: t.place
                                }, void 0, false, {
                                    fileName: "[project]/src/Components/TestimonialCarosel.tsx",
                                    lineNumber: 67,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "testimonial-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "testimonial-main-feedback",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "testimonial-feedback",
                                                children: t.feedback
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/TestimonialCarosel.tsx",
                                                lineNumber: 74,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/TestimonialCarosel.tsx",
                                            lineNumber: 73,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "testimonial-name",
                                                children: t.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/TestimonialCarosel.tsx",
                                                lineNumber: 77,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/TestimonialCarosel.tsx",
                                            lineNumber: 76,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "testimonial-location",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/locationtest.svg",
                                                        className: "location-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/Components/TestimonialCarosel.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 45
                                                    }, this),
                                                    t.place
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/Components/TestimonialCarosel.tsx",
                                                lineNumber: 80,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/TestimonialCarosel.tsx",
                                            lineNumber: 79,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/Components/TestimonialCarosel.tsx",
                                    lineNumber: 72,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Components/TestimonialCarosel.tsx",
                            lineNumber: 66,
                            columnNumber: 29
                        }, this)
                    }, index, false, {
                        fileName: "[project]/src/Components/TestimonialCarosel.tsx",
                        lineNumber: 65,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/Components/TestimonialCarosel.tsx",
                lineNumber: 57,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/Components/TestimonialCarosel.tsx",
        lineNumber: 51,
        columnNumber: 9
    }, this);
}
_s(Testimonial, "i89dn1T87T1LNZYiMohqEmgo1qA=");
_c = Testimonial;
var _c;
__turbopack_context__.k.register(_c, "Testimonial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/Components/TestimonialCarosel.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/Components/TestimonialCarosel.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_Components_TestimonialCarosel_tsx_22dbda46._.js.map