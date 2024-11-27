(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__32cbad._.js", {

"[project]/node_modules/next/dist/compiled/react-refresh/cjs/react-refresh-runtime.development.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/compiled/react-refresh/cjs/react-refresh-runtime.development.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/compiled/react-refresh/cjs/react-refresh-runtime.development.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/compiled/react-refresh/runtime.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/compiled/react-refresh/runtime.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/compiled/react-refresh/runtime.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/compiled/@next/react-refresh-utils/dist/internal/helpers.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
/**
 * MIT License
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
// This file is copied from the Metro JavaScript bundler, with minor tweaks for
// webpack 4 compatibility.
//
// https://github.com/facebook/metro/blob/d6b9685c730d0d63577db40f41369157f28dfa3a/packages/metro/src/lib/polyfills/require.js
const runtime_1 = __importDefault(__turbopack_require__("[project]/node_modules/next/dist/compiled/react-refresh/runtime.js [client] (ecmascript)"));
function isSafeExport(key) {
    return key === '__esModule' || key === '__N_SSG' || key === '__N_SSP' || // TODO: remove this key from page config instead of allow listing it
    key === 'config';
}
function registerExportsForReactRefresh(moduleExports, moduleID) {
    runtime_1.default.register(moduleExports, moduleID + ' %exports%');
    if (moduleExports == null || typeof moduleExports !== 'object') {
        // Exit if we can't iterate over exports.
        // (This is important for legacy environments.)
        return;
    }
    for(var key in moduleExports){
        if (isSafeExport(key)) {
            continue;
        }
        try {
            var exportValue = moduleExports[key];
        } catch (_a) {
            continue;
        }
        var typeID = moduleID + ' %exports% ' + key;
        runtime_1.default.register(exportValue, typeID);
    }
}
function getRefreshBoundarySignature(moduleExports) {
    var signature = [];
    signature.push(runtime_1.default.getFamilyByType(moduleExports));
    if (moduleExports == null || typeof moduleExports !== 'object') {
        // Exit if we can't iterate over exports.
        // (This is important for legacy environments.)
        return signature;
    }
    for(var key in moduleExports){
        if (isSafeExport(key)) {
            continue;
        }
        try {
            var exportValue = moduleExports[key];
        } catch (_a) {
            continue;
        }
        signature.push(key);
        signature.push(runtime_1.default.getFamilyByType(exportValue));
    }
    return signature;
}
function isReactRefreshBoundary(moduleExports) {
    if (runtime_1.default.isLikelyComponentType(moduleExports)) {
        return true;
    }
    if (moduleExports == null || typeof moduleExports !== 'object') {
        // Exit if we can't iterate over exports.
        return false;
    }
    var hasExports = false;
    var areAllExportsComponents = true;
    for(var key in moduleExports){
        hasExports = true;
        if (isSafeExport(key)) {
            continue;
        }
        try {
            var exportValue = moduleExports[key];
        } catch (_a) {
            // This might fail due to circular dependencies
            return false;
        }
        if (!runtime_1.default.isLikelyComponentType(exportValue)) {
            areAllExportsComponents = false;
        }
    }
    return hasExports && areAllExportsComponents;
}
function shouldInvalidateReactRefreshBoundary(prevSignature, nextSignature) {
    if (prevSignature.length !== nextSignature.length) {
        return true;
    }
    for(var i = 0; i < nextSignature.length; i++){
        if (prevSignature[i] !== nextSignature[i]) {
            return true;
        }
    }
    return false;
}
var isUpdateScheduled = false;
// This function aggregates updates from multiple modules into a single React Refresh call.
function scheduleUpdate() {
    if (isUpdateScheduled) {
        return;
    }
    isUpdateScheduled = true;
    function canApplyUpdate(status) {
        return status === 'idle';
    }
    function applyUpdate() {
        isUpdateScheduled = false;
        try {
            runtime_1.default.performReactRefresh();
        } catch (err) {
            console.warn('Warning: Failed to re-render. We will retry on the next Fast Refresh event.\n' + err);
        }
    }
    if (canApplyUpdate(module.hot.status())) {
        // Apply update on the next tick.
        Promise.resolve().then(()=>{
            applyUpdate();
        });
        return;
    }
    const statusHandler = (status)=>{
        if (canApplyUpdate(status)) {
            module.hot.removeStatusHandler(statusHandler);
            applyUpdate();
        }
    };
    // Apply update once the HMR runtime's status is idle.
    module.hot.addStatusHandler(statusHandler);
}
// Needs to be compatible with IE11
exports.default = {
    registerExportsForReactRefresh: registerExportsForReactRefresh,
    isReactRefreshBoundary: isReactRefreshBoundary,
    shouldInvalidateReactRefreshBoundary: shouldInvalidateReactRefreshBoundary,
    getRefreshBoundarySignature: getRefreshBoundarySignature,
    scheduleUpdate: scheduleUpdate
}; //# sourceMappingURL=helpers.js.map
}}),
"[project]/node_modules/next/dist/compiled/@next/react-refresh-utils/dist/runtime.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const runtime_1 = __importDefault(__turbopack_require__("[project]/node_modules/next/dist/compiled/react-refresh/runtime.js [client] (ecmascript)"));
const helpers_1 = __importDefault(__turbopack_require__("[project]/node_modules/next/dist/compiled/@next/react-refresh-utils/dist/internal/helpers.js [client] (ecmascript)"));
// Hook into ReactDOM initialization
runtime_1.default.injectIntoGlobalHook(self);
// Register global helpers
self.$RefreshHelpers$ = helpers_1.default;
// Register a helper for module execution interception
self.$RefreshInterceptModuleExecution$ = function(webpackModuleId) {
    var prevRefreshReg = self.$RefreshReg$;
    var prevRefreshSig = self.$RefreshSig$;
    self.$RefreshReg$ = function(type, id) {
        runtime_1.default.register(type, webpackModuleId + ' ' + id);
    };
    self.$RefreshSig$ = runtime_1.default.createSignatureFunctionForTransform;
    // Modeled after `useEffect` cleanup pattern:
    // https://react.dev/learn/synchronizing-with-effects#step-3-add-cleanup-if-needed
    return function() {
        self.$RefreshReg$ = prevRefreshReg;
        self.$RefreshSig$ = prevRefreshSig;
    };
}; //# sourceMappingURL=runtime.js.map
}}),
"[project]/node_modules/react/cjs/react.development.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/react/cjs/react.development.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/react/cjs/react.development.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/react/index.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/react/index.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/react/index.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/react/cjs/react-jsx-runtime.development.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/react/cjs/react-jsx-runtime.development.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/react/cjs/react-jsx-runtime.development.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/react/jsx-runtime.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/react/jsx-runtime.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/react/jsx-runtime.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/scheduler/cjs/scheduler.development.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/scheduler/cjs/scheduler.development.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/scheduler/cjs/scheduler.development.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/scheduler/index.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/scheduler/index.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/scheduler/index.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/react-dom/cjs/react-dom.development.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/react-dom/cjs/react-dom.development.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/react-dom/cjs/react-dom.development.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/react-dom/index.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/react-dom/index.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/react-dom/index.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/react-dom/cjs/react-dom-client.development.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/react-dom/cjs/react-dom-client.development.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/react-dom/cjs/react-dom-client.development.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/react-dom/client.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/react-dom/client.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/react-dom/client.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/shared/lib/mitt.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return mitt;
    }
});
function mitt() {
    const all = Object.create(null);
    return {
        on (type, handler) {
            (all[type] || (all[type] = [])).push(handler);
        },
        off (type, handler) {
            if (all[type]) {
                all[type].splice(all[type].indexOf(handler) >>> 0, 1);
            }
        },
        emit (type) {
            for(var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                evts[_key - 1] = arguments[_key];
            }
            (all[type] || []).slice().map((handler)=>{
                handler(...evts);
            });
        }
    };
} //# sourceMappingURL=mitt.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/handle-smooth-scroll.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
/**
 * Run function with `scroll-behavior: auto` applied to `<html/>`.
 * This css change will be reverted after the function finishes.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleSmoothScroll", {
    enumerable: true,
    get: function() {
        return handleSmoothScroll;
    }
});
function handleSmoothScroll(fn, options) {
    if (options === void 0) options = {};
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    const htmlElement = document.documentElement;
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
} //# sourceMappingURL=handle-smooth-scroll.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureLeadingSlash", {
    enumerable: true,
    get: function() {
        return ensureLeadingSlash;
    }
});
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/segment.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEFAULT_SEGMENT_KEY: null,
    PAGE_SEGMENT_KEY: null,
    addSearchParamsIfPageSegment: null,
    isGroupSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    }
});
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__'; //# sourceMappingURL=segment.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/app-paths.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    normalizeAppPath: null,
    normalizeRscURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    normalizeAppPath: function() {
        return normalizeAppPath;
    },
    normalizeRscURL: function() {
        return normalizeRscURL;
    }
});
const _ensureleadingslash = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [client] (ecmascript)");
const _segment = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/segment.js [client] (ecmascript)");
function normalizeAppPath(route) {
    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split('/').reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, _segment.isGroupSegment)(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ''));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
} //# sourceMappingURL=app-paths.js.map
}}),
"[project]/node_modules/next/dist/server/lib/interception-routes.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    INTERCEPTION_ROUTE_MARKERS: null,
    extractInterceptionRouteInformation: null,
    isInterceptionRouteAppPath: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
    },
    extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
    },
    isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
    }
});
const _apppaths = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/app-paths.js [client] (ecmascript)");
const INTERCEPTION_ROUTE_MARKERS = [
    '(..)(..)',
    '(.)',
    '(..)',
    '(...)'
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split('/').find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute, marker, interceptedRoute;
    for (const segment of path.split('/')){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
    }
    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case '(.)':
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === '/') {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
            }
            break;
        case '(..)':
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === '/') {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`);
            }
            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
            break;
        case '(...)':
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = '/' + interceptedRoute;
            break;
        case '(..)(..)':
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split('/');
            if (splitInterceptingRoute.length <= 2) {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`);
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
            break;
        default:
            throw new Error('Invariant: unexpected marker');
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isDynamicRoute", {
    enumerable: true,
    get: function() {
        return isDynamicRoute;
    }
});
const _interceptionroutes = __turbopack_require__("[project]/node_modules/next/dist/server/lib/interception-routes.js [client] (ecmascript)");
// Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(route)) {
        route = (0, _interceptionroutes.extractInterceptionRouteInformation)(route).interceptedRoute;
    }
    return TEST_ROUTE.test(route);
} //# sourceMappingURL=is-dynamic.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    searchParams.forEach((value, key)=>{
        if (typeof query[key] === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(query[key])) {
            query[key].push(value);
        } else {
            query[key] = [
                query[key],
                value
            ];
        }
    });
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(urlQuery) {
    const result = new URLSearchParams();
    Object.entries(urlQuery).forEach((param)=>{
        let [key, value] = param;
        if (Array.isArray(value)) {
            value.forEach((item)=>result.append(key, stringifyUrlQueryParam(item)));
        } else {
            result.set(key, stringifyUrlQueryParam(value));
        }
    });
    return result;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    searchParamsList.forEach((searchParams)=>{
        Array.from(searchParams.keys()).forEach((key)=>target.delete(key));
        searchParams.forEach((value, key)=>target.append(key, value));
    });
    return target;
} //# sourceMappingURL=querystring.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/runtime-config.external.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    setConfig: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    setConfig: function() {
        return setConfig;
    }
});
let runtimeConfig;
const _default = ()=>{
    return runtimeConfig;
};
function setConfig(configValue) {
    runtimeConfig = configValue;
} //# sourceMappingURL=runtime-config.external.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/utils.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/utils.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/utils.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/client/portal/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/portal/index.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/set-attributes-from-props.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setAttributesFromProps", {
    enumerable: true,
    get: function() {
        return setAttributesFromProps;
    }
});
const DOMAttributeNames = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv',
    noModule: 'noModule'
};
const ignoreProps = [
    'onLoad',
    'onReady',
    'dangerouslySetInnerHTML',
    'children',
    'onError',
    'strategy',
    'stylesheets'
];
function isBooleanScriptAttribute(attr) {
    return [
        'async',
        'defer',
        'noModule'
    ].includes(attr);
}
function setAttributesFromProps(el, props) {
    for (const [p, value] of Object.entries(props)){
        if (!props.hasOwnProperty(p)) continue;
        if (ignoreProps.includes(p)) continue;
        // we don't render undefined props to the DOM
        if (value === undefined) {
            continue;
        }
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr)) {
            el[attr] = !!value;
        } else {
            el.setAttribute(attr, String(value));
        }
        // Remove falsy non-zero boolean attributes so they are correctly interpreted
        // (e.g. if we set them to false, this coerces to the string "false", which the browser interprets as true)
        if (value === false || el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr) && (!value || value === 'false')) {
            // Call setAttribute before, as we need to set and unset the attribute to override force async:
            // https://html.spec.whatwg.org/multipage/scripting.html#script-force-async
            el.setAttribute(attr, '');
            el.removeAttribute(attr);
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=set-attributes-from-props.js.map
}}),
"[project]/node_modules/next/dist/client/head-manager.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/client/head-manager.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/client/head-manager.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/route-matcher.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getRouteMatcher", {
    enumerable: true,
    get: function() {
        return getRouteMatcher;
    }
});
const _utils = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/utils.js [client] (ecmascript)");
function getRouteMatcher(param) {
    let { re, groups } = param;
    return (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) {
            return false;
        }
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch (_) {
                throw new _utils.DecodeError('failed to decode param');
            }
        };
        const params = {};
        Object.keys(groups).forEach((slugName)=>{
            const g = groups[slugName];
            const m = routeMatch[g.pos];
            if (m !== undefined) {
                params[slugName] = ~m.indexOf('/') ? m.split('/').map((entry)=>decode(entry)) : g.repeat ? [
                    decode(m)
                ] : decode(m);
            }
        });
        return params;
    };
} //# sourceMappingURL=route-matcher.js.map
}}),
"[project]/node_modules/next/dist/lib/constants.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_SUFFIX: null,
    APP_DIR_ALIAS: null,
    CACHE_ONE_YEAR: null,
    DOT_NEXT_ALIAS: null,
    ESLINT_DEFAULT_DIRS: null,
    GSP_NO_RETURNED_VALUE: null,
    GSSP_COMPONENT_MEMBER_ERROR: null,
    GSSP_NO_RETURNED_VALUE: null,
    INFINITE_CACHE: null,
    INSTRUMENTATION_HOOK_FILENAME: null,
    MATCHED_PATH_HEADER: null,
    MIDDLEWARE_FILENAME: null,
    MIDDLEWARE_LOCATION_REGEXP: null,
    NEXT_BODY_SUFFIX: null,
    NEXT_CACHE_IMPLICIT_TAG_ID: null,
    NEXT_CACHE_REVALIDATED_TAGS_HEADER: null,
    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: null,
    NEXT_CACHE_SOFT_TAGS_HEADER: null,
    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: null,
    NEXT_CACHE_TAGS_HEADER: null,
    NEXT_CACHE_TAG_MAX_ITEMS: null,
    NEXT_CACHE_TAG_MAX_LENGTH: null,
    NEXT_DATA_SUFFIX: null,
    NEXT_INTERCEPTION_MARKER_PREFIX: null,
    NEXT_META_SUFFIX: null,
    NEXT_QUERY_PARAM_PREFIX: null,
    NEXT_RESUME_HEADER: null,
    NON_STANDARD_NODE_ENV: null,
    PAGES_DIR_ALIAS: null,
    PRERENDER_REVALIDATE_HEADER: null,
    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: null,
    PUBLIC_DIR_MIDDLEWARE_CONFLICT: null,
    ROOT_DIR_ALIAS: null,
    RSC_ACTION_CLIENT_WRAPPER_ALIAS: null,
    RSC_ACTION_ENCRYPTION_ALIAS: null,
    RSC_ACTION_PROXY_ALIAS: null,
    RSC_ACTION_VALIDATE_ALIAS: null,
    RSC_CACHE_WRAPPER_ALIAS: null,
    RSC_MOD_REF_PROXY_ALIAS: null,
    RSC_PREFETCH_SUFFIX: null,
    RSC_SEGMENTS_DIR_SUFFIX: null,
    RSC_SEGMENT_SUFFIX: null,
    RSC_SUFFIX: null,
    SERVER_PROPS_EXPORT_ERROR: null,
    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: null,
    SERVER_PROPS_SSG_CONFLICT: null,
    SERVER_RUNTIME: null,
    SSG_FALLBACK_EXPORT_ERROR: null,
    SSG_GET_INITIAL_PROPS_CONFLICT: null,
    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: null,
    UNSTABLE_REVALIDATE_RENAME_ERROR: null,
    WEBPACK_LAYERS: null,
    WEBPACK_RESOURCE_QUERIES: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_SUFFIX: function() {
        return ACTION_SUFFIX;
    },
    APP_DIR_ALIAS: function() {
        return APP_DIR_ALIAS;
    },
    CACHE_ONE_YEAR: function() {
        return CACHE_ONE_YEAR;
    },
    DOT_NEXT_ALIAS: function() {
        return DOT_NEXT_ALIAS;
    },
    ESLINT_DEFAULT_DIRS: function() {
        return ESLINT_DEFAULT_DIRS;
    },
    GSP_NO_RETURNED_VALUE: function() {
        return GSP_NO_RETURNED_VALUE;
    },
    GSSP_COMPONENT_MEMBER_ERROR: function() {
        return GSSP_COMPONENT_MEMBER_ERROR;
    },
    GSSP_NO_RETURNED_VALUE: function() {
        return GSSP_NO_RETURNED_VALUE;
    },
    INFINITE_CACHE: function() {
        return INFINITE_CACHE;
    },
    INSTRUMENTATION_HOOK_FILENAME: function() {
        return INSTRUMENTATION_HOOK_FILENAME;
    },
    MATCHED_PATH_HEADER: function() {
        return MATCHED_PATH_HEADER;
    },
    MIDDLEWARE_FILENAME: function() {
        return MIDDLEWARE_FILENAME;
    },
    MIDDLEWARE_LOCATION_REGEXP: function() {
        return MIDDLEWARE_LOCATION_REGEXP;
    },
    NEXT_BODY_SUFFIX: function() {
        return NEXT_BODY_SUFFIX;
    },
    NEXT_CACHE_IMPLICIT_TAG_ID: function() {
        return NEXT_CACHE_IMPLICIT_TAG_ID;
    },
    NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
        return NEXT_CACHE_REVALIDATED_TAGS_HEADER;
    },
    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
        return NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER;
    },
    NEXT_CACHE_SOFT_TAGS_HEADER: function() {
        return NEXT_CACHE_SOFT_TAGS_HEADER;
    },
    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_SOFT_TAG_MAX_LENGTH;
    },
    NEXT_CACHE_TAGS_HEADER: function() {
        return NEXT_CACHE_TAGS_HEADER;
    },
    NEXT_CACHE_TAG_MAX_ITEMS: function() {
        return NEXT_CACHE_TAG_MAX_ITEMS;
    },
    NEXT_CACHE_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_TAG_MAX_LENGTH;
    },
    NEXT_DATA_SUFFIX: function() {
        return NEXT_DATA_SUFFIX;
    },
    NEXT_INTERCEPTION_MARKER_PREFIX: function() {
        return NEXT_INTERCEPTION_MARKER_PREFIX;
    },
    NEXT_META_SUFFIX: function() {
        return NEXT_META_SUFFIX;
    },
    NEXT_QUERY_PARAM_PREFIX: function() {
        return NEXT_QUERY_PARAM_PREFIX;
    },
    NEXT_RESUME_HEADER: function() {
        return NEXT_RESUME_HEADER;
    },
    NON_STANDARD_NODE_ENV: function() {
        return NON_STANDARD_NODE_ENV;
    },
    PAGES_DIR_ALIAS: function() {
        return PAGES_DIR_ALIAS;
    },
    PRERENDER_REVALIDATE_HEADER: function() {
        return PRERENDER_REVALIDATE_HEADER;
    },
    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
    },
    PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
    },
    ROOT_DIR_ALIAS: function() {
        return ROOT_DIR_ALIAS;
    },
    RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
    },
    RSC_ACTION_ENCRYPTION_ALIAS: function() {
        return RSC_ACTION_ENCRYPTION_ALIAS;
    },
    RSC_ACTION_PROXY_ALIAS: function() {
        return RSC_ACTION_PROXY_ALIAS;
    },
    RSC_ACTION_VALIDATE_ALIAS: function() {
        return RSC_ACTION_VALIDATE_ALIAS;
    },
    RSC_CACHE_WRAPPER_ALIAS: function() {
        return RSC_CACHE_WRAPPER_ALIAS;
    },
    RSC_MOD_REF_PROXY_ALIAS: function() {
        return RSC_MOD_REF_PROXY_ALIAS;
    },
    RSC_PREFETCH_SUFFIX: function() {
        return RSC_PREFETCH_SUFFIX;
    },
    RSC_SEGMENTS_DIR_SUFFIX: function() {
        return RSC_SEGMENTS_DIR_SUFFIX;
    },
    RSC_SEGMENT_SUFFIX: function() {
        return RSC_SEGMENT_SUFFIX;
    },
    RSC_SUFFIX: function() {
        return RSC_SUFFIX;
    },
    SERVER_PROPS_EXPORT_ERROR: function() {
        return SERVER_PROPS_EXPORT_ERROR;
    },
    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
    },
    SERVER_PROPS_SSG_CONFLICT: function() {
        return SERVER_PROPS_SSG_CONFLICT;
    },
    SERVER_RUNTIME: function() {
        return SERVER_RUNTIME;
    },
    SSG_FALLBACK_EXPORT_ERROR: function() {
        return SSG_FALLBACK_EXPORT_ERROR;
    },
    SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return SSG_GET_INITIAL_PROPS_CONFLICT;
    },
    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
    },
    UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return UNSTABLE_REVALIDATE_RENAME_ERROR;
    },
    WEBPACK_LAYERS: function() {
        return WEBPACK_LAYERS;
    },
    WEBPACK_RESOURCE_QUERIES: function() {
        return WEBPACK_RESOURCE_QUERIES;
    }
});
const NEXT_QUERY_PARAM_PREFIX = 'nxtP';
const NEXT_INTERCEPTION_MARKER_PREFIX = 'nxtI';
const MATCHED_PATH_HEADER = 'x-matched-path';
const PRERENDER_REVALIDATE_HEADER = 'x-prerender-revalidate';
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = 'x-prerender-revalidate-if-generated';
const RSC_PREFETCH_SUFFIX = '.prefetch.rsc';
const RSC_SEGMENTS_DIR_SUFFIX = '.segments';
const RSC_SEGMENT_SUFFIX = '.segment.rsc';
const RSC_SUFFIX = '.rsc';
const ACTION_SUFFIX = '.action';
const NEXT_DATA_SUFFIX = '.json';
const NEXT_META_SUFFIX = '.meta';
const NEXT_BODY_SUFFIX = '.body';
const NEXT_CACHE_TAGS_HEADER = 'x-next-cache-tags';
const NEXT_CACHE_SOFT_TAGS_HEADER = 'x-next-cache-soft-tags';
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = 'x-next-revalidated-tags';
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = 'x-next-revalidate-tag-token';
const NEXT_RESUME_HEADER = 'next-resume';
const NEXT_CACHE_TAG_MAX_ITEMS = 64;
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = '_N_T_';
const CACHE_ONE_YEAR = 31536000;
const INFINITE_CACHE = 0xfffffffe;
const MIDDLEWARE_FILENAME = 'middleware';
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = 'instrumentation';
const PAGES_DIR_ALIAS = 'private-next-pages';
const DOT_NEXT_ALIAS = 'private-dot-next';
const ROOT_DIR_ALIAS = 'private-next-root-dir';
const APP_DIR_ALIAS = 'private-next-app-dir';
const RSC_MOD_REF_PROXY_ALIAS = 'private-next-rsc-mod-ref-proxy';
const RSC_ACTION_VALIDATE_ALIAS = 'private-next-rsc-action-validate';
const RSC_ACTION_PROXY_ALIAS = 'private-next-rsc-server-reference';
const RSC_CACHE_WRAPPER_ALIAS = 'private-next-rsc-cache-wrapper';
const RSC_ACTION_ENCRYPTION_ALIAS = 'private-next-rsc-action-encryption';
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = 'private-next-rsc-action-client-wrapper';
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = 'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?';
const GSSP_NO_RETURNED_VALUE = 'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?';
const UNSTABLE_REVALIDATE_RENAME_ERROR = 'The `unstable_revalidate` property is available for general use.\n' + 'Please use `revalidate` instead.';
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    'app',
    'pages',
    'components',
    'lib',
    'src'
];
const SERVER_RUNTIME = {
    edge: 'edge',
    experimentalEdge: 'experimental-edge',
    nodejs: 'nodejs'
};
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: 'shared',
    /**
   * The layer for server-only runtime and picking up `react-server` export conditions.
   * Including app router RSC pages and app router custom routes and metadata routes.
   */ reactServerComponents: 'rsc',
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: 'ssr',
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: 'action-browser',
    /**
   * The layer for the API routes.
   */ api: 'api',
    /**
   * The layer for the middleware code.
   */ middleware: 'middleware',
    /**
   * The layer for the instrumentation hooks.
   */ instrument: 'instrument',
    /**
   * The layer for assets on the edge.
   */ edgeAsset: 'edge-asset',
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: 'app-pages-browser'
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        builtinReact: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
            // pages api
            WEBPACK_LAYERS_NAMES.api
        ],
        clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument
        ],
        appPages: [
            // app router pages and layouts
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: '__next_edge_ssr_entry__',
    metadata: '__next_metadata__',
    metadataRoute: '__next_metadata_route__',
    metadataImageMeta: '__next_metadata_image_meta__'
}; //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/escape-regexp.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
// regexp is based on https://github.com/sindresorhus/escape-string-regexp
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "escapeStringRegexp", {
    enumerable: true,
    get: function() {
        return escapeStringRegexp;
    }
});
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, '\\$&');
    }
    return str;
} //# sourceMappingURL=escape-regexp.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeTrailingSlash", {
    enumerable: true,
    get: function() {
        return removeTrailingSlash;
    }
});
function removeTrailingSlash(route) {
    return route.replace(/\/$/, '') || '/';
} //# sourceMappingURL=remove-trailing-slash.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/route-regex.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getNamedMiddlewareRegex: null,
    getNamedRouteRegex: null,
    getRouteRegex: null,
    parseParameter: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getNamedMiddlewareRegex: function() {
        return getNamedMiddlewareRegex;
    },
    getNamedRouteRegex: function() {
        return getNamedRouteRegex;
    },
    getRouteRegex: function() {
        return getRouteRegex;
    },
    parseParameter: function() {
        return parseParameter;
    }
});
const _constants = __turbopack_require__("[project]/node_modules/next/dist/lib/constants.js [client] (ecmascript)");
const _interceptionroutes = __turbopack_require__("[project]/node_modules/next/dist/server/lib/interception-routes.js [client] (ecmascript)");
const _escaperegexp = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/escape-regexp.js [client] (ecmascript)");
const _removetrailingslash = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [client] (ecmascript)");
/**
 * Regular expression pattern used to match route parameters.
 * Matches both single parameters and parameter groups.
 * Examples:
 *   - `[[...slug]]` matches parameter group with key 'slug', repeat: true, optional: true
 *   - `[...slug]` matches parameter group with key 'slug', repeat: true, optional: false
 *   - `[[foo]]` matches parameter with key 'foo', repeat: false, optional: true
 *   - `[bar]` matches parameter with key 'bar', repeat: false, optional: false
 */ const PARAMETER_PATTERN = /\[((?:\[.*\])|.+)\]/;
function parseParameter(param) {
    const match = param.match(PARAMETER_PATTERN);
    if (!match) {
        return parseMatchedParameter(param);
    }
    return parseMatchedParameter(match[1]);
}
/**
 * Parses a matched parameter from the PARAMETER_PATTERN regex to a data structure that can be used
 * to generate the parametrized route.
 * Examples:
 *   - `[...slug]` -> `{ key: 'slug', repeat: true, optional: true }`
 *   - `...slug` -> `{ key: 'slug', repeat: true, optional: false }`
 *   - `[foo]` -> `{ key: 'foo', repeat: false, optional: true }`
 *   - `bar` -> `{ key: 'bar', repeat: false, optional: false }`
 * @param param - The matched parameter to parse.
 * @returns The parsed parameter as a data structure.
 */ function parseMatchedParameter(param) {
    const optional = param.startsWith('[') && param.endsWith(']');
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith('...');
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
}
function getParametrizedRoute(route) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split('/');
    const groups = {};
    let groupIndex = 1;
    return {
        parameterizedRoute: segments.map((segment)=>{
            const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
            const paramMatches = segment.match(PARAMETER_PATTERN) // Check for parameters
            ;
            if (markerMatch && paramMatches) {
                const { key, optional, repeat } = parseMatchedParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return "/" + (0, _escaperegexp.escapeStringRegexp)(markerMatch) + "([^/]+?)";
            } else if (paramMatches) {
                const { key, repeat, optional } = parseMatchedParameter(paramMatches[1]);
                groups[key] = {
                    pos: groupIndex++,
                    repeat,
                    optional
                };
                return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(''),
        groups
    };
}
function getRouteRegex(normalizedRoute) {
    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute);
    return {
        re: new RegExp("^" + parameterizedRoute + "(?:/)?$"),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let i = 0;
    return ()=>{
        let routeKey = '';
        let j = ++i;
        while(j > 0){
            routeKey += String.fromCharCode(97 + (j - 1) % 26);
            j = Math.floor((j - 1) / 26);
        }
        return routeKey;
    };
}
function getSafeKeyFromSegment(param) {
    let { interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix } = param;
    const { key, optional, repeat } = parseMatchedParameter(segment);
    // replace any non-word characters since they can break
    // the named regex
    let cleanedKey = key.replace(/\W/g, '');
    if (keyPrefix) {
        cleanedKey = "" + keyPrefix + cleanedKey;
    }
    let invalidKey = false;
    // check if the key is still invalid and fallback to using a known
    // safe key
    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
    }
    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
    }
    if (invalidKey) {
        cleanedKey = getSafeRouteKey();
    }
    if (keyPrefix) {
        routeKeys[cleanedKey] = "" + keyPrefix + key;
    } else {
        routeKeys[cleanedKey] = key;
    }
    // if the segment has an interception marker, make sure that's part of the regex pattern
    // this is to ensure that the route with the interception marker doesn't incorrectly match
    // the non-intercepted route (ie /app/(.)[username] should not match /app/[username])
    const interceptionPrefix = interceptionMarker ? (0, _escaperegexp.escapeStringRegexp)(interceptionMarker) : '';
    return repeat ? optional ? "(?:/" + interceptionPrefix + "(?<" + cleanedKey + ">.+?))?" : "/" + interceptionPrefix + "(?<" + cleanedKey + ">.+?)" : "/" + interceptionPrefix + "(?<" + cleanedKey + ">[^/]+?)";
}
function getNamedParametrizedRoute(route, prefixRouteKeys) {
    const segments = (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split('/');
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    return {
        namedParameterizedRoute: segments.map((segment)=>{
            const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m));
            const paramMatches = segment.match(/\[((?:\[.*\])|.+)\]/) // Check for parameters
            ;
            if (hasInterceptionMarker && paramMatches) {
                const [usedMarker] = segment.split(paramMatches[0]);
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    interceptionMarker: usedMarker,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? _constants.NEXT_INTERCEPTION_MARKER_PREFIX : undefined
                });
            } else if (paramMatches) {
                return getSafeKeyFromSegment({
                    getSafeRouteKey,
                    segment: paramMatches[1],
                    routeKeys,
                    keyPrefix: prefixRouteKeys ? _constants.NEXT_QUERY_PARAM_PREFIX : undefined
                });
            } else {
                return "/" + (0, _escaperegexp.escapeStringRegexp)(segment);
            }
        }).join(''),
        routeKeys
    };
}
function getNamedRouteRegex(normalizedRoute, prefixRouteKey) {
    const result = getNamedParametrizedRoute(normalizedRoute, prefixRouteKey);
    return {
        ...getRouteRegex(normalizedRoute),
        namedRegex: "^" + result.namedParameterizedRoute + "(?:/)?$",
        routeKeys: result.routeKeys
    };
}
function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute);
    const { catchAll = true } = options;
    if (parameterizedRoute === '/') {
        let catchAllRegex = catchAll ? '.*' : '';
        return {
            namedRegex: "^/" + catchAllRegex + "$"
        };
    }
    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false);
    let catchAllGroupedRegex = catchAll ? '(?:(/.*)?)' : '';
    return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
    };
} //# sourceMappingURL=route-regex.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/interpolate-as.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "interpolateAs", {
    enumerable: true,
    get: function() {
        return interpolateAs;
    }
});
const _routematcher = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/route-matcher.js [client] (ecmascript)");
const _routeregex = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/route-regex.js [client] (ecmascript)");
function interpolateAs(route, asPathname, query) {
    let interpolatedRoute = '';
    const dynamicRegex = (0, _routeregex.getRouteRegex)(route);
    const dynamicGroups = dynamicRegex.groups;
    const dynamicMatches = (asPathname !== route ? (0, _routematcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
    // TODO: should this take priority; also need to change in the router.
    query;
    interpolatedRoute = route;
    const params = Object.keys(dynamicGroups);
    if (!params.every((param)=>{
        let value = dynamicMatches[param] || '';
        const { repeat, optional } = dynamicGroups[param];
        // support single-level catch-all
        // TODO: more robust handling for user-error (passing `/`)
        let replaced = "[" + (repeat ? '...' : '') + param + "]";
        if (optional) {
            replaced = (!value ? '/' : '') + "[" + replaced + "]";
        }
        if (repeat && !Array.isArray(value)) value = [
            value
        ];
        return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
        (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(// path delimiter escaped since they are being inserted
        // into the URL and we expect URL encoded segments
        // when parsing dynamic route params
        (segment)=>encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
    })) {
        interpolatedRoute = '' // did not satisfy all requirements
        ;
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
    }
    return {
        params,
        result: interpolatedRoute
    };
} //# sourceMappingURL=interpolate-as.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/get-asset-path-from-route.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
// Translates a logical route into its pages asset path (relative from a common prefix)
// "asset path" being its javascript file, data file, prerendered html,...
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return getAssetPathFromRoute;
    }
});
function getAssetPathFromRoute(route, ext) {
    if (ext === void 0) ext = '';
    const path = route === '/' ? '/index' : /^\/index(\/|$)/.test(route) ? "/index" + route : route;
    return path + ext;
} //# sourceMappingURL=get-asset-path-from-route.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseRelativeUrl", {
    enumerable: true,
    get: function() {
        return parseRelativeUrl;
    }
});
const _utils = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/utils.js [client] (ecmascript)");
const _querystring = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [client] (ecmascript)");
function parseRelativeUrl(url, base, parseQuery) {
    if (parseQuery === void 0) parseQuery = true;
    const globalBase = new URL(typeof window === 'undefined' ? 'http://n' : (0, _utils.getLocationOrigin)());
    const resolvedBase = base ? new URL(base, globalBase) : url.startsWith('.') ? new URL(typeof window === 'undefined' ? 'http://n' : window.location.href) : globalBase;
    const { pathname, searchParams, search, hash, href, origin } = new URL(url, resolvedBase);
    if (origin !== globalBase.origin) {
        throw new Error("invariant: invalid relative URL, router received " + url);
    }
    return {
        pathname,
        query: parseQuery ? (0, _querystring.searchParamsToUrlQuery)(searchParams) : undefined,
        search,
        hash,
        href: href.slice(origin.length)
    };
} //# sourceMappingURL=parse-relative-url.js.map
}}),
"[project]/node_modules/next/dist/client/trusted-types.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
/**
 * Stores the Trusted Types Policy. Starts as undefined and can be set to null
 * if Trusted Types is not supported in the browser.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "__unsafeCreateTrustedScriptURL", {
    enumerable: true,
    get: function() {
        return __unsafeCreateTrustedScriptURL;
    }
});
let policy;
/**
 * Getter for the Trusted Types Policy. If it is undefined, it is instantiated
 * here or set to null if Trusted Types is not supported in the browser.
 */ function getPolicy() {
    if (typeof policy === 'undefined' && typeof window !== 'undefined') {
        var _window_trustedTypes;
        policy = ((_window_trustedTypes = window.trustedTypes) == null ? void 0 : _window_trustedTypes.createPolicy('nextjs', {
            createHTML: (input)=>input,
            createScript: (input)=>input,
            createScriptURL: (input)=>input
        })) || null;
    }
    return policy;
}
function __unsafeCreateTrustedScriptURL(url) {
    var _getPolicy;
    return ((_getPolicy = getPolicy()) == null ? void 0 : _getPolicy.createScriptURL(url)) || url;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=trusted-types.js.map
}}),
"[project]/node_modules/next/dist/client/request-idle-callback.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cancelIdleCallback: null,
    requestIdleCallback: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    },
    requestIdleCallback: function() {
        return requestIdleCallback;
    }
});
const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
} //# sourceMappingURL=encode-uri-path.js.map
}}),
"[project]/node_modules/next/dist/client/route-loader.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/client/route-loader.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/client/route-loader.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/shared/lib/modern-browserslist-target.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
// Note: This file is JS because it's used by the taskfile-swc.js file, which is JS.
// Keep file changes in sync with the corresponding `.d.ts` files.
/**
 * These are the browser versions that support all of the following:
 * static import: https://caniuse.com/es6-module
 * dynamic import: https://caniuse.com/es6-module-dynamic-import
 * import.meta: https://caniuse.com/mdn-javascript_operators_import_meta
 */ "use strict";
const MODERN_BROWSERSLIST_TARGET = [
    'chrome 64',
    'edge 79',
    'firefox 67',
    'opera 51',
    'safari 12'
];
module.exports = MODERN_BROWSERSLIST_TARGET; //# sourceMappingURL=modern-browserslist-target.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/constants.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    APP_BUILD_MANIFEST: null,
    APP_CLIENT_INTERNALS: null,
    APP_PATHS_MANIFEST: null,
    APP_PATH_ROUTES_MANIFEST: null,
    BARREL_OPTIMIZATION_PREFIX: null,
    BLOCKED_PAGES: null,
    BUILD_ID_FILE: null,
    BUILD_MANIFEST: null,
    CLIENT_PUBLIC_FILES_PATH: null,
    CLIENT_REFERENCE_MANIFEST: null,
    CLIENT_STATIC_FILES_PATH: null,
    CLIENT_STATIC_FILES_RUNTIME_AMP: null,
    CLIENT_STATIC_FILES_RUNTIME_MAIN: null,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: null,
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: null,
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: null,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: null,
    CLIENT_STATIC_FILES_RUNTIME_WEBPACK: null,
    COMPILER_INDEXES: null,
    COMPILER_NAMES: null,
    CONFIG_FILES: null,
    DEFAULT_RUNTIME_WEBPACK: null,
    DEFAULT_SANS_SERIF_FONT: null,
    DEFAULT_SERIF_FONT: null,
    DEV_CLIENT_MIDDLEWARE_MANIFEST: null,
    DEV_CLIENT_PAGES_MANIFEST: null,
    EDGE_RUNTIME_WEBPACK: null,
    EDGE_UNSUPPORTED_NODE_APIS: null,
    EXPORT_DETAIL: null,
    EXPORT_MARKER: null,
    FUNCTIONS_CONFIG_MANIFEST: null,
    IMAGES_MANIFEST: null,
    INTERCEPTION_ROUTE_REWRITE_MANIFEST: null,
    MIDDLEWARE_BUILD_MANIFEST: null,
    MIDDLEWARE_MANIFEST: null,
    MIDDLEWARE_REACT_LOADABLE_MANIFEST: null,
    MODERN_BROWSERSLIST_TARGET: null,
    NEXT_BUILTIN_DOCUMENT: null,
    NEXT_FONT_MANIFEST: null,
    PAGES_MANIFEST: null,
    PHASE_DEVELOPMENT_SERVER: null,
    PHASE_EXPORT: null,
    PHASE_INFO: null,
    PHASE_PRODUCTION_BUILD: null,
    PHASE_PRODUCTION_SERVER: null,
    PHASE_TEST: null,
    PRERENDER_MANIFEST: null,
    REACT_LOADABLE_MANIFEST: null,
    ROUTES_MANIFEST: null,
    RSC_MODULE_TYPES: null,
    SERVER_DIRECTORY: null,
    SERVER_FILES_MANIFEST: null,
    SERVER_PROPS_ID: null,
    SERVER_REFERENCE_MANIFEST: null,
    STATIC_PROPS_ID: null,
    STATIC_STATUS_PAGES: null,
    STRING_LITERAL_DROP_BUNDLE: null,
    SUBRESOURCE_INTEGRITY_MANIFEST: null,
    SYSTEM_ENTRYPOINTS: null,
    TRACE_OUTPUT_VERSION: null,
    TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST: null,
    TURBO_TRACE_DEFAULT_MEMORY_LIMIT: null,
    UNDERSCORE_NOT_FOUND_ROUTE: null,
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: null,
    WEBPACK_STATS: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    APP_BUILD_MANIFEST: function() {
        return APP_BUILD_MANIFEST;
    },
    APP_CLIENT_INTERNALS: function() {
        return APP_CLIENT_INTERNALS;
    },
    APP_PATHS_MANIFEST: function() {
        return APP_PATHS_MANIFEST;
    },
    APP_PATH_ROUTES_MANIFEST: function() {
        return APP_PATH_ROUTES_MANIFEST;
    },
    BARREL_OPTIMIZATION_PREFIX: function() {
        return BARREL_OPTIMIZATION_PREFIX;
    },
    BLOCKED_PAGES: function() {
        return BLOCKED_PAGES;
    },
    BUILD_ID_FILE: function() {
        return BUILD_ID_FILE;
    },
    BUILD_MANIFEST: function() {
        return BUILD_MANIFEST;
    },
    CLIENT_PUBLIC_FILES_PATH: function() {
        return CLIENT_PUBLIC_FILES_PATH;
    },
    CLIENT_REFERENCE_MANIFEST: function() {
        return CLIENT_REFERENCE_MANIFEST;
    },
    CLIENT_STATIC_FILES_PATH: function() {
        return CLIENT_STATIC_FILES_PATH;
    },
    CLIENT_STATIC_FILES_RUNTIME_AMP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_AMP;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN_APP;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL;
    },
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: function() {
        return CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH;
    },
    CLIENT_STATIC_FILES_RUNTIME_WEBPACK: function() {
        return CLIENT_STATIC_FILES_RUNTIME_WEBPACK;
    },
    COMPILER_INDEXES: function() {
        return COMPILER_INDEXES;
    },
    COMPILER_NAMES: function() {
        return COMPILER_NAMES;
    },
    CONFIG_FILES: function() {
        return CONFIG_FILES;
    },
    DEFAULT_RUNTIME_WEBPACK: function() {
        return DEFAULT_RUNTIME_WEBPACK;
    },
    DEFAULT_SANS_SERIF_FONT: function() {
        return DEFAULT_SANS_SERIF_FONT;
    },
    DEFAULT_SERIF_FONT: function() {
        return DEFAULT_SERIF_FONT;
    },
    DEV_CLIENT_MIDDLEWARE_MANIFEST: function() {
        return DEV_CLIENT_MIDDLEWARE_MANIFEST;
    },
    DEV_CLIENT_PAGES_MANIFEST: function() {
        return DEV_CLIENT_PAGES_MANIFEST;
    },
    EDGE_RUNTIME_WEBPACK: function() {
        return EDGE_RUNTIME_WEBPACK;
    },
    EDGE_UNSUPPORTED_NODE_APIS: function() {
        return EDGE_UNSUPPORTED_NODE_APIS;
    },
    EXPORT_DETAIL: function() {
        return EXPORT_DETAIL;
    },
    EXPORT_MARKER: function() {
        return EXPORT_MARKER;
    },
    FUNCTIONS_CONFIG_MANIFEST: function() {
        return FUNCTIONS_CONFIG_MANIFEST;
    },
    IMAGES_MANIFEST: function() {
        return IMAGES_MANIFEST;
    },
    INTERCEPTION_ROUTE_REWRITE_MANIFEST: function() {
        return INTERCEPTION_ROUTE_REWRITE_MANIFEST;
    },
    MIDDLEWARE_BUILD_MANIFEST: function() {
        return MIDDLEWARE_BUILD_MANIFEST;
    },
    MIDDLEWARE_MANIFEST: function() {
        return MIDDLEWARE_MANIFEST;
    },
    MIDDLEWARE_REACT_LOADABLE_MANIFEST: function() {
        return MIDDLEWARE_REACT_LOADABLE_MANIFEST;
    },
    MODERN_BROWSERSLIST_TARGET: function() {
        return _modernbrowserslisttarget.default;
    },
    NEXT_BUILTIN_DOCUMENT: function() {
        return NEXT_BUILTIN_DOCUMENT;
    },
    NEXT_FONT_MANIFEST: function() {
        return NEXT_FONT_MANIFEST;
    },
    PAGES_MANIFEST: function() {
        return PAGES_MANIFEST;
    },
    PHASE_DEVELOPMENT_SERVER: function() {
        return PHASE_DEVELOPMENT_SERVER;
    },
    PHASE_EXPORT: function() {
        return PHASE_EXPORT;
    },
    PHASE_INFO: function() {
        return PHASE_INFO;
    },
    PHASE_PRODUCTION_BUILD: function() {
        return PHASE_PRODUCTION_BUILD;
    },
    PHASE_PRODUCTION_SERVER: function() {
        return PHASE_PRODUCTION_SERVER;
    },
    PHASE_TEST: function() {
        return PHASE_TEST;
    },
    PRERENDER_MANIFEST: function() {
        return PRERENDER_MANIFEST;
    },
    REACT_LOADABLE_MANIFEST: function() {
        return REACT_LOADABLE_MANIFEST;
    },
    ROUTES_MANIFEST: function() {
        return ROUTES_MANIFEST;
    },
    RSC_MODULE_TYPES: function() {
        return RSC_MODULE_TYPES;
    },
    SERVER_DIRECTORY: function() {
        return SERVER_DIRECTORY;
    },
    SERVER_FILES_MANIFEST: function() {
        return SERVER_FILES_MANIFEST;
    },
    SERVER_PROPS_ID: function() {
        return SERVER_PROPS_ID;
    },
    SERVER_REFERENCE_MANIFEST: function() {
        return SERVER_REFERENCE_MANIFEST;
    },
    STATIC_PROPS_ID: function() {
        return STATIC_PROPS_ID;
    },
    STATIC_STATUS_PAGES: function() {
        return STATIC_STATUS_PAGES;
    },
    STRING_LITERAL_DROP_BUNDLE: function() {
        return STRING_LITERAL_DROP_BUNDLE;
    },
    SUBRESOURCE_INTEGRITY_MANIFEST: function() {
        return SUBRESOURCE_INTEGRITY_MANIFEST;
    },
    SYSTEM_ENTRYPOINTS: function() {
        return SYSTEM_ENTRYPOINTS;
    },
    TRACE_OUTPUT_VERSION: function() {
        return TRACE_OUTPUT_VERSION;
    },
    TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST: function() {
        return TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST;
    },
    TURBO_TRACE_DEFAULT_MEMORY_LIMIT: function() {
        return TURBO_TRACE_DEFAULT_MEMORY_LIMIT;
    },
    UNDERSCORE_NOT_FOUND_ROUTE: function() {
        return UNDERSCORE_NOT_FOUND_ROUTE;
    },
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function() {
        return UNDERSCORE_NOT_FOUND_ROUTE_ENTRY;
    },
    WEBPACK_STATS: function() {
        return WEBPACK_STATS;
    }
});
const _interop_require_default = (()=>{
    const e = new Error("Cannot find module '@swc/helpers/_/_interop_require_default'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _modernbrowserslisttarget = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/shared/lib/modern-browserslist-target.js [client] (ecmascript)"));
const COMPILER_NAMES = {
    client: 'client',
    server: 'server',
    edgeServer: 'edge-server'
};
const COMPILER_INDEXES = {
    [COMPILER_NAMES.client]: 0,
    [COMPILER_NAMES.server]: 1,
    [COMPILER_NAMES.edgeServer]: 2
};
const UNDERSCORE_NOT_FOUND_ROUTE = '/_not-found';
const UNDERSCORE_NOT_FOUND_ROUTE_ENTRY = "" + UNDERSCORE_NOT_FOUND_ROUTE + "/page";
const PHASE_EXPORT = 'phase-export';
const PHASE_PRODUCTION_BUILD = 'phase-production-build';
const PHASE_PRODUCTION_SERVER = 'phase-production-server';
const PHASE_DEVELOPMENT_SERVER = 'phase-development-server';
const PHASE_TEST = 'phase-test';
const PHASE_INFO = 'phase-info';
const PAGES_MANIFEST = 'pages-manifest.json';
const WEBPACK_STATS = 'webpack-stats.json';
const APP_PATHS_MANIFEST = 'app-paths-manifest.json';
const APP_PATH_ROUTES_MANIFEST = 'app-path-routes-manifest.json';
const BUILD_MANIFEST = 'build-manifest.json';
const APP_BUILD_MANIFEST = 'app-build-manifest.json';
const FUNCTIONS_CONFIG_MANIFEST = 'functions-config-manifest.json';
const SUBRESOURCE_INTEGRITY_MANIFEST = 'subresource-integrity-manifest';
const NEXT_FONT_MANIFEST = 'next-font-manifest';
const EXPORT_MARKER = 'export-marker.json';
const EXPORT_DETAIL = 'export-detail.json';
const PRERENDER_MANIFEST = 'prerender-manifest.json';
const ROUTES_MANIFEST = 'routes-manifest.json';
const IMAGES_MANIFEST = 'images-manifest.json';
const SERVER_FILES_MANIFEST = 'required-server-files.json';
const DEV_CLIENT_PAGES_MANIFEST = '_devPagesManifest.json';
const MIDDLEWARE_MANIFEST = 'middleware-manifest.json';
const TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST = '_clientMiddlewareManifest.json';
const DEV_CLIENT_MIDDLEWARE_MANIFEST = '_devMiddlewareManifest.json';
const REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json';
const SERVER_DIRECTORY = 'server';
const CONFIG_FILES = [
    'next.config.js',
    'next.config.mjs',
    'next.config.ts'
];
const BUILD_ID_FILE = 'BUILD_ID';
const BLOCKED_PAGES = [
    '/_document',
    '/_app',
    '/_error'
];
const CLIENT_PUBLIC_FILES_PATH = 'public';
const CLIENT_STATIC_FILES_PATH = 'static';
const STRING_LITERAL_DROP_BUNDLE = '__NEXT_DROP_CLIENT_FILE__';
const NEXT_BUILTIN_DOCUMENT = '__NEXT_BUILTIN_DOCUMENT__';
const BARREL_OPTIMIZATION_PREFIX = '__barrel_optimize__';
const CLIENT_REFERENCE_MANIFEST = 'client-reference-manifest';
const SERVER_REFERENCE_MANIFEST = 'server-reference-manifest';
const MIDDLEWARE_BUILD_MANIFEST = 'middleware-build-manifest';
const MIDDLEWARE_REACT_LOADABLE_MANIFEST = 'middleware-react-loadable-manifest';
const INTERCEPTION_ROUTE_REWRITE_MANIFEST = 'interception-route-rewrite-manifest';
const CLIENT_STATIC_FILES_RUNTIME_MAIN = "main";
const CLIENT_STATIC_FILES_RUNTIME_MAIN_APP = "" + CLIENT_STATIC_FILES_RUNTIME_MAIN + "-app";
const APP_CLIENT_INTERNALS = 'app-pages-internals';
const CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = "react-refresh";
const CLIENT_STATIC_FILES_RUNTIME_AMP = "amp";
const CLIENT_STATIC_FILES_RUNTIME_WEBPACK = "webpack";
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = 'polyfills';
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL = Symbol(CLIENT_STATIC_FILES_RUNTIME_POLYFILLS);
const DEFAULT_RUNTIME_WEBPACK = 'webpack-runtime';
const EDGE_RUNTIME_WEBPACK = 'edge-runtime-webpack';
const STATIC_PROPS_ID = '__N_SSG';
const SERVER_PROPS_ID = '__N_SSP';
const DEFAULT_SERIF_FONT = {
    name: 'Times New Roman',
    xAvgCharWidth: 821,
    azAvgWidth: 854.3953488372093,
    unitsPerEm: 2048
};
const DEFAULT_SANS_SERIF_FONT = {
    name: 'Arial',
    xAvgCharWidth: 904,
    azAvgWidth: 934.5116279069767,
    unitsPerEm: 2048
};
const STATIC_STATUS_PAGES = [
    '/500'
];
const TRACE_OUTPUT_VERSION = 1;
const TURBO_TRACE_DEFAULT_MEMORY_LIMIT = 6000;
const RSC_MODULE_TYPES = {
    client: 'client',
    server: 'server'
};
const EDGE_UNSUPPORTED_NODE_APIS = [
    'clearImmediate',
    'setImmediate',
    'BroadcastChannel',
    'ByteLengthQueuingStrategy',
    'CompressionStream',
    'CountQueuingStrategy',
    'DecompressionStream',
    'DomException',
    'MessageChannel',
    'MessageEvent',
    'MessagePort',
    'ReadableByteStreamController',
    'ReadableStreamBYOBRequest',
    'ReadableStreamDefaultController',
    'TransformStreamDefaultController',
    'WritableStreamDefaultController'
];
const SYSTEM_ENTRYPOINTS = new Set([
    CLIENT_STATIC_FILES_RUNTIME_MAIN,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH,
    CLIENT_STATIC_FILES_RUNTIME_AMP,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP
]);
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/next/dist/client/page-loader.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/client/page-loader.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/client/page-loader.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/shared/lib/bloom-filter.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/bloom-filter.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/bloom-filter.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/compiled/react-is/cjs/react-is.development.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/compiled/react-is/cjs/react-is.development.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/compiled/react-is/cjs/react-is.development.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/compiled/react-is/index.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/compiled/react-is/index.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/compiled/react-is/index.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/client/script.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    handleClientScriptLoad: null,
    initScriptLoader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    handleClientScriptLoad: function() {
        return handleClientScriptLoad;
    },
    initScriptLoader: function() {
        return initScriptLoader;
    }
});
const _interop_require_default = (()=>{
    const e = new Error("Cannot find module '@swc/helpers/_/_interop_require_default'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _interop_require_wildcard = (()=>{
    const e = new Error("Cannot find module '@swc/helpers/_/_interop_require_wildcard'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _jsxruntime = __turbopack_require__("[project]/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/react-dom/index.js [client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/react/index.js [client] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [client] (ecmascript)");
const _setattributesfromprops = __turbopack_require__("[project]/node_modules/next/dist/client/set-attributes-from-props.js [client] (ecmascript)");
const _requestidlecallback = __turbopack_require__("[project]/node_modules/next/dist/client/request-idle-callback.js [client] (ecmascript)");
const ScriptCache = new Map();
const LoadCache = new Set();
const insertStylesheets = (stylesheets)=>{
    // Case 1: Styles for afterInteractive/lazyOnload with appDir injected via handleClientScriptLoad
    //
    // Using ReactDOM.preinit to feature detect appDir and inject styles
    // Stylesheets might have already been loaded if initialized with Script component
    // Re-inject styles here to handle scripts loaded via handleClientScriptLoad
    // ReactDOM.preinit handles dedup and ensures the styles are loaded only once
    if (_reactdom.default.preinit) {
        stylesheets.forEach((stylesheet)=>{
            _reactdom.default.preinit(stylesheet, {
                as: 'style'
            });
        });
        return;
    }
    // Case 2: Styles for afterInteractive/lazyOnload with pages injected via handleClientScriptLoad
    //
    // We use this function to load styles when appdir is not detected
    // TODO: Use React float APIs to load styles once available for pages dir
    if (typeof window !== 'undefined') {
        let head = document.head;
        stylesheets.forEach((stylesheet)=>{
            let link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.href = stylesheet;
            head.appendChild(link);
        });
    }
};
const loadScript = (props)=>{
    const { src, id, onLoad = ()=>{}, onReady = null, dangerouslySetInnerHTML, children = '', strategy = 'afterInteractive', onError, stylesheets } = props;
    const cacheKey = id || src;
    // Script has already loaded
    if (cacheKey && LoadCache.has(cacheKey)) {
        return;
    }
    // Contents of this script are already loading/loaded
    if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
        ScriptCache.get(src).then(onLoad, onError);
        return;
    }
    /** Execute after the script first loaded */ const afterLoad = ()=>{
        // Run onReady for the first time after load event
        if (onReady) {
            onReady();
        }
        // add cacheKey to LoadCache when load successfully
        LoadCache.add(cacheKey);
    };
    const el = document.createElement('script');
    const loadPromise = new Promise((resolve, reject)=>{
        el.addEventListener('load', function(e) {
            resolve();
            if (onLoad) {
                onLoad.call(this, e);
            }
            afterLoad();
        });
        el.addEventListener('error', function(e) {
            reject(e);
        });
    }).catch(function(e) {
        if (onError) {
            onError(e);
        }
    });
    if (dangerouslySetInnerHTML) {
        // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
        el.innerHTML = dangerouslySetInnerHTML.__html || '';
        afterLoad();
    } else if (children) {
        el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        afterLoad();
    } else if (src) {
        el.src = src;
        // do not add cacheKey into LoadCache for remote script here
        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
        ScriptCache.set(src, loadPromise);
    }
    (0, _setattributesfromprops.setAttributesFromProps)(el, props);
    if (strategy === 'worker') {
        el.setAttribute('type', 'text/partytown');
    }
    el.setAttribute('data-nscript', strategy);
    // Load styles associated with this script
    if (stylesheets) {
        insertStylesheets(stylesheets);
    }
    document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
    const { strategy = 'afterInteractive' } = props;
    if (strategy === 'lazyOnload') {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    } else {
        loadScript(props);
    }
}
function loadLazyScript(props) {
    if (document.readyState === 'complete') {
        (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
    } else {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    }
}
function addBeforeInteractiveToCache() {
    const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
    ];
    scripts.forEach((script)=>{
        const cacheKey = script.id || script.getAttribute('src');
        LoadCache.add(cacheKey);
    });
}
function initScriptLoader(scriptLoaderItems) {
    scriptLoaderItems.forEach(handleClientScriptLoad);
    addBeforeInteractiveToCache();
}
/**
 * Load a third-party scripts in an optimized way.
 *
 * Read more: [Next.js Docs: `next/script`](https://nextjs.org/docs/app/api-reference/components/script)
 */ function Script(props) {
    const { id, src = '', onLoad = ()=>{}, onReady = null, strategy = 'afterInteractive', onError, stylesheets, ...restProps } = props;
    // Context is available only during SSR
    const { updateScripts, scripts, getIsSsr, appDir, nonce } = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    /**
   * - First mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
   *      Once the script is loaded, the onLoad and onReady will be called by then
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   *
   * - Second mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
   *      onReady is called, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. The script is already loaded, loadScript bails out
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   */ const hasOnReadyEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        const cacheKey = id || src;
        if (!hasOnReadyEffectCalled.current) {
            // Run onReady if script has loaded before but component is re-mounted
            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
                onReady();
            }
            hasOnReadyEffectCalled.current = true;
        }
    }, [
        onReady,
        id,
        src
    ]);
    const hasLoadScriptEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        if (!hasLoadScriptEffectCalled.current) {
            if (strategy === 'afterInteractive') {
                loadScript(props);
            } else if (strategy === 'lazyOnload') {
                loadLazyScript(props);
            }
            hasLoadScriptEffectCalled.current = true;
        }
    }, [
        props,
        strategy
    ]);
    if (strategy === 'beforeInteractive' || strategy === 'worker') {
        if (updateScripts) {
            scripts[strategy] = (scripts[strategy] || []).concat([
                {
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError,
                    ...restProps
                }
            ]);
            updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
            // Script has already loaded during SSR
            LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
            loadScript(props);
        }
    }
    // For the app directory, we need React Float to preload these scripts.
    if (appDir) {
        // Injecting stylesheets here handles beforeInteractive and worker scripts correctly
        // For other strategies injecting here ensures correct stylesheet order
        // ReactDOM.preinit handles loading the styles in the correct order,
        // also ensures the stylesheet is loaded only once and in a consistent manner
        //
        // Case 1: Styles for beforeInteractive/worker with appDir - handled here
        // Case 2: Styles for beforeInteractive/worker with pages dir - Not handled yet
        // Case 3: Styles for afterInteractive/lazyOnload with appDir - handled here
        // Case 4: Styles for afterInteractive/lazyOnload with pages dir - handled in insertStylesheets function
        if (stylesheets) {
            stylesheets.forEach((styleSrc)=>{
                _reactdom.default.preinit(styleSrc, {
                    as: 'style'
                });
            });
        }
        // Before interactive scripts need to be loaded by Next.js' runtime instead
        // of native <script> tags, because they no longer have `defer`.
        if (strategy === 'beforeInteractive') {
            if (!src) {
                // For inlined scripts, we put the content in `children`.
                if (restProps.dangerouslySetInnerHTML) {
                    // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
                    restProps.children = restProps.dangerouslySetInnerHTML.__html;
                    delete restProps.dangerouslySetInnerHTML;
                }
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([
                            0,
                            {
                                ...restProps,
                                id
                            }
                        ]) + ")"
                    }
                });
            } else {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([
                            src,
                            {
                                ...restProps,
                                id
                            }
                        ]) + ")"
                    }
                });
            }
        } else if (strategy === 'afterInteractive') {
            if (src) {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
            }
        }
    }
    return null;
}
Object.defineProperty(Script, '__nextScript', {
    value: true
});
const _default = Script;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=script.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/is-plain-object.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getObjectClassLabel: null,
    isPlainObject: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getObjectClassLabel: function() {
        return getObjectClassLabel;
    },
    isPlainObject: function() {
        return isPlainObject;
    }
});
function getObjectClassLabel(value) {
    return Object.prototype.toString.call(value);
}
function isPlainObject(value) {
    if (getObjectClassLabel(value) !== '[object Object]') {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    /**
   * this used to be previously:
   *
   * `return prototype === null || prototype === Object.prototype`
   *
   * but Edge Runtime expose Object from vm, being that kind of type-checking wrongly fail.
   *
   * It was changed to the current implementation since it's resilient to serialization.
   */ return prototype === null || prototype.hasOwnProperty('isPrototypeOf');
} //# sourceMappingURL=is-plain-object.js.map
}}),
"[project]/node_modules/next/dist/lib/is-error.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/lib/is-error.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/lib/is-error.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/sorted-routes.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getSortedRouteObjects: null,
    getSortedRoutes: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getSortedRouteObjects: function() {
        return getSortedRouteObjects;
    },
    getSortedRoutes: function() {
        return getSortedRoutes;
    }
});
class UrlNode {
    insert(urlPath) {
        this._insert(urlPath.split('/').filter(Boolean), [], false);
    }
    smoosh() {
        return this._smoosh();
    }
    _smoosh(prefix) {
        if (prefix === void 0) prefix = '/';
        const childrenPaths = [
            ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf('[]'), 1);
        }
        if (this.restSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf('[...]'), 1);
        }
        if (this.optionalRestSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf('[[...]]'), 1);
        }
        const routes = childrenPaths.map((c)=>this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr)=>[
                ...prev,
                ...curr
            ], []);
        if (this.slugName !== null) {
            routes.push(...this.children.get('[]')._smoosh(prefix + "[" + this.slugName + "]/"));
        }
        if (!this.placeholder) {
            const r = prefix === '/' ? '/' : prefix.slice(0, -1);
            if (this.optionalRestSlugName != null) {
                throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").');
            }
            routes.unshift(r);
        }
        if (this.restSlugName !== null) {
            routes.push(...this.children.get('[...]')._smoosh(prefix + "[..." + this.restSlugName + "]/"));
        }
        if (this.optionalRestSlugName !== null) {
            routes.push(...this.children.get('[[...]]')._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
        }
        return routes;
    }
    _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
            this.placeholder = false;
            return;
        }
        if (isCatchAll) {
            throw new Error("Catch-all must be the last part of the URL.");
        }
        // The next segment in the urlPaths list
        let nextSegment = urlPaths[0];
        // Check if the segment matches `[something]`
        if (nextSegment.startsWith('[') && nextSegment.endsWith(']')) {
            // Strip `[` and `]`, leaving only `something`
            let segmentName = nextSegment.slice(1, -1);
            let isOptional = false;
            if (segmentName.startsWith('[') && segmentName.endsWith(']')) {
                // Strip optional `[` and `]`, leaving only `something`
                segmentName = segmentName.slice(1, -1);
                isOptional = true;
            }
            if (segmentName.startsWith('…')) {
                throw new Error("Detected a three-dot character ('…') at ('" + segmentName + "'). Did you mean ('...')?");
            }
            if (segmentName.startsWith('...')) {
                // Strip `...`, leaving only `something`
                segmentName = segmentName.substring(3);
                isCatchAll = true;
            }
            if (segmentName.startsWith('[') || segmentName.endsWith(']')) {
                throw new Error("Segment names may not start or end with extra brackets ('" + segmentName + "').");
            }
            if (segmentName.startsWith('.')) {
                throw new Error("Segment names may not start with erroneous periods ('" + segmentName + "').");
            }
            function handleSlug(previousSlug, nextSlug) {
                if (previousSlug !== null) {
                    // If the specific segment already has a slug but the slug is not `something`
                    // This prevents collisions like:
                    // pages/[post]/index.js
                    // pages/[id]/index.js
                    // Because currently multiple dynamic params on the same segment level are not supported
                    if (previousSlug !== nextSlug) {
                        // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
                        throw new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "').");
                    }
                }
                slugNames.forEach((slug)=>{
                    if (slug === nextSlug) {
                        throw new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path');
                    }
                    if (slug.replace(/\W/g, '') === nextSegment.replace(/\W/g, '')) {
                        throw new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path');
                    }
                });
                slugNames.push(nextSlug);
            }
            if (isCatchAll) {
                if (isOptional) {
                    if (this.restSlugName != null) {
                        throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).');
                    }
                    handleSlug(this.optionalRestSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.optionalRestSlugName = segmentName;
                    // nextSegment is overwritten to [[...]] so that it can later be sorted specifically
                    nextSegment = '[[...]]';
                } else {
                    if (this.optionalRestSlugName != null) {
                        throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").');
                    }
                    handleSlug(this.restSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.restSlugName = segmentName;
                    // nextSegment is overwritten to [...] so that it can later be sorted specifically
                    nextSegment = '[...]';
                }
            } else {
                if (isOptional) {
                    throw new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").');
                }
                handleSlug(this.slugName, segmentName);
                // slugName is kept as it can only be one particular slugName
                this.slugName = segmentName;
                // nextSegment is overwritten to [] so that it can later be sorted specifically
                nextSegment = '[]';
            }
        }
        // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode
        if (!this.children.has(nextSegment)) {
            this.children.set(nextSegment, new UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
    }
    constructor(){
        this.placeholder = true;
        this.children = new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
    }
}
function getSortedRoutes(normalizedPages) {
    // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
    // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
    // Only 1 dynamic segment per nesting level
    // So in the case that is test/integration/dynamic-routing it'll be this:
    // pages/[post]/comments.js
    // pages/blog/[post]/comment/[id].js
    // Both are fine because `pages/[post]` and `pages/blog` are on the same level
    // So in this case `UrlNode` created here has `this.slugName === 'post'`
    // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
    // Instead what has to be passed through is the upwards path's dynamic names
    const root = new UrlNode();
    // Here the `root` gets injected multiple paths, and insert will break them up into sublevels
    normalizedPages.forEach((pagePath)=>root.insert(pagePath));
    // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority
    return root.smoosh();
}
function getSortedRouteObjects(objects, getter) {
    // We're assuming here that all the pathnames are unique, that way we can
    // sort the list and use the index as the key.
    const indexes = {};
    const pathnames = [];
    for(let i = 0; i < objects.length; i++){
        const pathname = getter(objects[i]);
        indexes[pathname] = i;
        pathnames[i] = pathname;
    }
    // Sort the pathnames.
    const sorted = getSortedRoutes(pathnames);
    // Map the sorted pathnames back to the original objects using the new sorted
    // index.
    return sorted.map((pathname)=>objects[indexes[pathname]]);
} //# sourceMappingURL=sorted-routes.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getSortedRouteObjects: null,
    getSortedRoutes: null,
    isDynamicRoute: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getSortedRouteObjects: function() {
        return _sortedroutes.getSortedRouteObjects;
    },
    getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
    },
    isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
    }
});
const _sortedroutes = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/sorted-routes.js [client] (ecmascript)");
const _isdynamic = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js [client] (ecmascript)"); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
/**
 * For a given page path, this function ensures that there is no backslash
 * escaping slashes in the path. Example:
 *  - `foo\/bar\/baz` -> `foo/bar/baz`
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizePathSep", {
    enumerable: true,
    get: function() {
        return normalizePathSep;
    }
});
function normalizePathSep(path) {
    return path.replace(/\\/g, '/');
} //# sourceMappingURL=normalize-path-sep.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/page-path/denormalize-page-path.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "denormalizePagePath", {
    enumerable: true,
    get: function() {
        return denormalizePagePath;
    }
});
const _utils = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/index.js [client] (ecmascript)");
const _normalizepathsep = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js [client] (ecmascript)");
function denormalizePagePath(page) {
    let _page = (0, _normalizepathsep.normalizePathSep)(page);
    return _page.startsWith('/index/') && !(0, _utils.isDynamicRoute)(_page) ? _page.slice(6) : _page !== '/index' ? _page : '/';
} //# sourceMappingURL=denormalize-page-path.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizeLocalePath", {
    enumerable: true,
    get: function() {
        return normalizeLocalePath;
    }
});
function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split('/');
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join('/') || '/';
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map
}}),
"[project]/node_modules/next/dist/compiled/path-to-regexp/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var e = {};
    (()=>{
        var r = e;
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        function lexer(e) {
            var r = [];
            var n = 0;
            while(n < e.length){
                var t = e[n];
                if (t === "*" || t === "+" || t === "?") {
                    r.push({
                        type: "MODIFIER",
                        index: n,
                        value: e[n++]
                    });
                    continue;
                }
                if (t === "\\") {
                    r.push({
                        type: "ESCAPED_CHAR",
                        index: n++,
                        value: e[n++]
                    });
                    continue;
                }
                if (t === "{") {
                    r.push({
                        type: "OPEN",
                        index: n,
                        value: e[n++]
                    });
                    continue;
                }
                if (t === "}") {
                    r.push({
                        type: "CLOSE",
                        index: n,
                        value: e[n++]
                    });
                    continue;
                }
                if (t === ":") {
                    var i = "";
                    var a = n + 1;
                    while(a < e.length){
                        var o = e.charCodeAt(a);
                        if (o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o === 95) {
                            i += e[a++];
                            continue;
                        }
                        break;
                    }
                    if (!i) throw new TypeError("Missing parameter name at " + n);
                    r.push({
                        type: "NAME",
                        index: n,
                        value: i
                    });
                    n = a;
                    continue;
                }
                if (t === "(") {
                    var f = 1;
                    var u = "";
                    var a = n + 1;
                    if (e[a] === "?") {
                        throw new TypeError('Pattern cannot start with "?" at ' + a);
                    }
                    while(a < e.length){
                        if (e[a] === "\\") {
                            u += e[a++] + e[a++];
                            continue;
                        }
                        if (e[a] === ")") {
                            f--;
                            if (f === 0) {
                                a++;
                                break;
                            }
                        } else if (e[a] === "(") {
                            f++;
                            if (e[a + 1] !== "?") {
                                throw new TypeError("Capturing groups are not allowed at " + a);
                            }
                        }
                        u += e[a++];
                    }
                    if (f) throw new TypeError("Unbalanced pattern at " + n);
                    if (!u) throw new TypeError("Missing pattern at " + n);
                    r.push({
                        type: "PATTERN",
                        index: n,
                        value: u
                    });
                    n = a;
                    continue;
                }
                r.push({
                    type: "CHAR",
                    index: n,
                    value: e[n++]
                });
            }
            r.push({
                type: "END",
                index: n,
                value: ""
            });
            return r;
        }
        function parse(e, r) {
            if (r === void 0) {
                r = {};
            }
            var n = lexer(e);
            var t = r.prefixes, i = t === void 0 ? "./" : t;
            var a = "[^" + escapeString(r.delimiter || "/#?") + "]+?";
            var o = [];
            var f = 0;
            var u = 0;
            var p = "";
            var tryConsume = function(e) {
                if (u < n.length && n[u].type === e) return n[u++].value;
            };
            var mustConsume = function(e) {
                var r = tryConsume(e);
                if (r !== undefined) return r;
                var t = n[u], i = t.type, a = t.index;
                throw new TypeError("Unexpected " + i + " at " + a + ", expected " + e);
            };
            var consumeText = function() {
                var e = "";
                var r;
                while(r = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")){
                    e += r;
                }
                return e;
            };
            while(u < n.length){
                var v = tryConsume("CHAR");
                var c = tryConsume("NAME");
                var s = tryConsume("PATTERN");
                if (c || s) {
                    var d = v || "";
                    if (i.indexOf(d) === -1) {
                        p += d;
                        d = "";
                    }
                    if (p) {
                        o.push(p);
                        p = "";
                    }
                    o.push({
                        name: c || f++,
                        prefix: d,
                        suffix: "",
                        pattern: s || a,
                        modifier: tryConsume("MODIFIER") || ""
                    });
                    continue;
                }
                var g = v || tryConsume("ESCAPED_CHAR");
                if (g) {
                    p += g;
                    continue;
                }
                if (p) {
                    o.push(p);
                    p = "";
                }
                var x = tryConsume("OPEN");
                if (x) {
                    var d = consumeText();
                    var l = tryConsume("NAME") || "";
                    var h = tryConsume("PATTERN") || "";
                    var m = consumeText();
                    mustConsume("CLOSE");
                    o.push({
                        name: l || (h ? f++ : ""),
                        pattern: l && !h ? a : h,
                        prefix: d,
                        suffix: m,
                        modifier: tryConsume("MODIFIER") || ""
                    });
                    continue;
                }
                mustConsume("END");
            }
            return o;
        }
        r.parse = parse;
        function compile(e, r) {
            return tokensToFunction(parse(e, r), r);
        }
        r.compile = compile;
        function tokensToFunction(e, r) {
            if (r === void 0) {
                r = {};
            }
            var n = flags(r);
            var t = r.encode, i = t === void 0 ? function(e) {
                return e;
            } : t, a = r.validate, o = a === void 0 ? true : a;
            var f = e.map(function(e) {
                if (typeof e === "object") {
                    return new RegExp("^(?:" + e.pattern + ")$", n);
                }
            });
            return function(r) {
                var n = "";
                for(var t = 0; t < e.length; t++){
                    var a = e[t];
                    if (typeof a === "string") {
                        n += a;
                        continue;
                    }
                    var u = r ? r[a.name] : undefined;
                    var p = a.modifier === "?" || a.modifier === "*";
                    var v = a.modifier === "*" || a.modifier === "+";
                    if (Array.isArray(u)) {
                        if (!v) {
                            throw new TypeError('Expected "' + a.name + '" to not repeat, but got an array');
                        }
                        if (u.length === 0) {
                            if (p) continue;
                            throw new TypeError('Expected "' + a.name + '" to not be empty');
                        }
                        for(var c = 0; c < u.length; c++){
                            var s = i(u[c], a);
                            if (o && !f[t].test(s)) {
                                throw new TypeError('Expected all "' + a.name + '" to match "' + a.pattern + '", but got "' + s + '"');
                            }
                            n += a.prefix + s + a.suffix;
                        }
                        continue;
                    }
                    if (typeof u === "string" || typeof u === "number") {
                        var s = i(String(u), a);
                        if (o && !f[t].test(s)) {
                            throw new TypeError('Expected "' + a.name + '" to match "' + a.pattern + '", but got "' + s + '"');
                        }
                        n += a.prefix + s + a.suffix;
                        continue;
                    }
                    if (p) continue;
                    var d = v ? "an array" : "a string";
                    throw new TypeError('Expected "' + a.name + '" to be ' + d);
                }
                return n;
            };
        }
        r.tokensToFunction = tokensToFunction;
        function match(e, r) {
            var n = [];
            var t = pathToRegexp(e, n, r);
            return regexpToFunction(t, n, r);
        }
        r.match = match;
        function regexpToFunction(e, r, n) {
            if (n === void 0) {
                n = {};
            }
            var t = n.decode, i = t === void 0 ? function(e) {
                return e;
            } : t;
            return function(n) {
                var t = e.exec(n);
                if (!t) return false;
                var a = t[0], o = t.index;
                var f = Object.create(null);
                var _loop_1 = function(e) {
                    if (t[e] === undefined) return "continue";
                    var n = r[e - 1];
                    if (n.modifier === "*" || n.modifier === "+") {
                        f[n.name] = t[e].split(n.prefix + n.suffix).map(function(e) {
                            return i(e, n);
                        });
                    } else {
                        f[n.name] = i(t[e], n);
                    }
                };
                for(var u = 1; u < t.length; u++){
                    _loop_1(u);
                }
                return {
                    path: a,
                    index: o,
                    params: f
                };
            };
        }
        r.regexpToFunction = regexpToFunction;
        function escapeString(e) {
            return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
        }
        function flags(e) {
            return e && e.sensitive ? "" : "i";
        }
        function regexpToRegexp(e, r) {
            if (!r) return e;
            var n = e.source.match(/\((?!\?)/g);
            if (n) {
                for(var t = 0; t < n.length; t++){
                    r.push({
                        name: t,
                        prefix: "",
                        suffix: "",
                        modifier: "",
                        pattern: ""
                    });
                }
            }
            return e;
        }
        function arrayToRegexp(e, r, n) {
            var t = e.map(function(e) {
                return pathToRegexp(e, r, n).source;
            });
            return new RegExp("(?:" + t.join("|") + ")", flags(n));
        }
        function stringToRegexp(e, r, n) {
            return tokensToRegexp(parse(e, n), r, n);
        }
        function tokensToRegexp(e, r, n) {
            if (n === void 0) {
                n = {};
            }
            var t = n.strict, i = t === void 0 ? false : t, a = n.start, o = a === void 0 ? true : a, f = n.end, u = f === void 0 ? true : f, p = n.encode, v = p === void 0 ? function(e) {
                return e;
            } : p;
            var c = "[" + escapeString(n.endsWith || "") + "]|$";
            var s = "[" + escapeString(n.delimiter || "/#?") + "]";
            var d = o ? "^" : "";
            for(var g = 0, x = e; g < x.length; g++){
                var l = x[g];
                if (typeof l === "string") {
                    d += escapeString(v(l));
                } else {
                    var h = escapeString(v(l.prefix));
                    var m = escapeString(v(l.suffix));
                    if (l.pattern) {
                        if (r) r.push(l);
                        if (h || m) {
                            if (l.modifier === "+" || l.modifier === "*") {
                                var E = l.modifier === "*" ? "?" : "";
                                d += "(?:" + h + "((?:" + l.pattern + ")(?:" + m + h + "(?:" + l.pattern + "))*)" + m + ")" + E;
                            } else {
                                d += "(?:" + h + "(" + l.pattern + ")" + m + ")" + l.modifier;
                            }
                        } else {
                            d += "(" + l.pattern + ")" + l.modifier;
                        }
                    } else {
                        d += "(?:" + h + m + ")" + l.modifier;
                    }
                }
            }
            if (u) {
                if (!i) d += s + "?";
                d += !n.endsWith ? "$" : "(?=" + c + ")";
            } else {
                var T = e[e.length - 1];
                var y = typeof T === "string" ? s.indexOf(T[T.length - 1]) > -1 : T === undefined;
                if (!i) {
                    d += "(?:" + s + "(?=" + c + "))?";
                }
                if (!y) {
                    d += "(?=" + s + "|" + c + ")";
                }
            }
            return new RegExp(d, flags(n));
        }
        r.tokensToRegexp = tokensToRegexp;
        function pathToRegexp(e, r, n) {
            if (e instanceof RegExp) return regexpToRegexp(e, r);
            if (Array.isArray(e)) return arrayToRegexp(e, r, n);
            return stringToRegexp(e, r, n);
        }
        r.pathToRegexp = pathToRegexp;
    })();
    module.exports = e;
})();
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/path-match.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getPathMatch", {
    enumerable: true,
    get: function() {
        return getPathMatch;
    }
});
const _pathtoregexp = __turbopack_require__("[project]/node_modules/next/dist/compiled/path-to-regexp/index.js [client] (ecmascript)");
function getPathMatch(path, options) {
    const keys = [];
    const regexp = (0, _pathtoregexp.pathToRegexp)(path, keys, {
        delimiter: '/',
        sensitive: typeof (options == null ? void 0 : options.sensitive) === 'boolean' ? options.sensitive : false,
        strict: options == null ? void 0 : options.strict
    });
    const matcher = (0, _pathtoregexp.regexpToFunction)((options == null ? void 0 : options.regexModifier) ? new RegExp(options.regexModifier(regexp.source), regexp.flags) : regexp, keys);
    /**
   * A matcher function that will check if a given pathname matches the path
   * given in the builder function. When the path does not match it will return
   * `false` but if it does it will return an object with the matched params
   * merged with the params provided in the second argument.
   */ return (pathname, params)=>{
        // If no pathname is provided it's not a match.
        if (typeof pathname !== 'string') return false;
        const match = matcher(pathname);
        // If the path did not match `false` will be returned.
        if (!match) return false;
        /**
     * If unnamed params are not allowed they must be removed from
     * the matched parameters. path-to-regexp uses "string" for named and
     * "number" for unnamed parameters.
     */ if (options == null ? void 0 : options.removeUnnamedParams) {
            for (const key of keys){
                if (typeof key.name === 'number') {
                    delete match.params[key.name];
                }
            }
        }
        return {
            ...params,
            ...match.params
        };
    };
} //# sourceMappingURL=path-match.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/parse-url.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseUrl", {
    enumerable: true,
    get: function() {
        return parseUrl;
    }
});
const _querystring = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [client] (ecmascript)");
const _parserelativeurl = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js [client] (ecmascript)");
function parseUrl(url) {
    if (url.startsWith('/')) {
        return (0, _parserelativeurl.parseRelativeUrl)(url);
    }
    const parsedURL = new URL(url);
    return {
        hash: parsedURL.hash,
        hostname: parsedURL.hostname,
        href: parsedURL.href,
        pathname: parsedURL.pathname,
        port: parsedURL.port,
        protocol: parsedURL.protocol,
        query: (0, _querystring.searchParamsToUrlQuery)(parsedURL.searchParams),
        search: parsedURL.search
    };
} //# sourceMappingURL=parse-url.js.map
}}),
"[project]/node_modules/next/dist/client/components/app-router-headers.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/app-router-headers.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/compiled/cookie/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();
}}),
"[project]/node_modules/next/dist/server/api-utils/get-cookie-parser.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getCookieParser", {
    enumerable: true,
    get: function() {
        return getCookieParser;
    }
});
function getCookieParser(headers) {
    return function parseCookie() {
        const { cookie } = headers;
        if (!cookie) {
            return {};
        }
        const { parse: parseCookieFn } = __turbopack_require__("[project]/node_modules/next/dist/compiled/cookie/index.js [client] (ecmascript)");
        return parseCookieFn(Array.isArray(cookie) ? cookie.join('; ') : cookie);
    };
} //# sourceMappingURL=get-cookie-parser.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/prepare-destination.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    compileNonPath: null,
    matchHas: null,
    prepareDestination: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    compileNonPath: function() {
        return compileNonPath;
    },
    matchHas: function() {
        return matchHas;
    },
    prepareDestination: function() {
        return prepareDestination;
    }
});
const _pathtoregexp = __turbopack_require__("[project]/node_modules/next/dist/compiled/path-to-regexp/index.js [client] (ecmascript)");
const _escaperegexp = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/escape-regexp.js [client] (ecmascript)");
const _parseurl = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/parse-url.js [client] (ecmascript)");
const _interceptionroutes = __turbopack_require__("[project]/node_modules/next/dist/server/lib/interception-routes.js [client] (ecmascript)");
const _approuterheaders = (()=>{
    const e = new Error("Cannot find module '../../../../client/components/app-router-headers'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _getcookieparser = __turbopack_require__("[project]/node_modules/next/dist/server/api-utils/get-cookie-parser.js [client] (ecmascript)");
/**
 * Ensure only a-zA-Z are used for param names for proper interpolating
 * with path-to-regexp
 */ function getSafeParamName(paramName) {
    let newParamName = '';
    for(let i = 0; i < paramName.length; i++){
        const charCode = paramName.charCodeAt(i);
        if (charCode > 64 && charCode < 91 || // A-Z
        charCode > 96 && charCode < 123 // a-z
        ) {
            newParamName += paramName[i];
        }
    }
    return newParamName;
}
function escapeSegment(str, segmentName) {
    return str.replace(new RegExp(":" + (0, _escaperegexp.escapeStringRegexp)(segmentName), 'g'), "__ESC_COLON_" + segmentName);
}
function unescapeSegments(str) {
    return str.replace(/__ESC_COLON_/gi, ':');
}
function matchHas(req, query, has, missing) {
    if (has === void 0) has = [];
    if (missing === void 0) missing = [];
    const params = {};
    const hasMatch = (hasItem)=>{
        let value;
        let key = hasItem.key;
        switch(hasItem.type){
            case 'header':
                {
                    key = key.toLowerCase();
                    value = req.headers[key];
                    break;
                }
            case 'cookie':
                {
                    if ('cookies' in req) {
                        value = req.cookies[hasItem.key];
                    } else {
                        const cookies = (0, _getcookieparser.getCookieParser)(req.headers)();
                        value = cookies[hasItem.key];
                    }
                    break;
                }
            case 'query':
                {
                    value = query[key];
                    break;
                }
            case 'host':
                {
                    const { host } = (req == null ? void 0 : req.headers) || {};
                    // remove port from host if present
                    const hostname = host == null ? void 0 : host.split(':', 1)[0].toLowerCase();
                    value = hostname;
                    break;
                }
            default:
                {
                    break;
                }
        }
        if (!hasItem.value && value) {
            params[getSafeParamName(key)] = value;
            return true;
        } else if (value) {
            const matcher = new RegExp("^" + hasItem.value + "$");
            const matches = Array.isArray(value) ? value.slice(-1)[0].match(matcher) : value.match(matcher);
            if (matches) {
                if (Array.isArray(matches)) {
                    if (matches.groups) {
                        Object.keys(matches.groups).forEach((groupKey)=>{
                            params[groupKey] = matches.groups[groupKey];
                        });
                    } else if (hasItem.type === 'host' && matches[0]) {
                        params.host = matches[0];
                    }
                }
                return true;
            }
        }
        return false;
    };
    const allMatch = has.every((item)=>hasMatch(item)) && !missing.some((item)=>hasMatch(item));
    if (allMatch) {
        return params;
    }
    return false;
}
function compileNonPath(value, params) {
    if (!value.includes(':')) {
        return value;
    }
    for (const key of Object.keys(params)){
        if (value.includes(":" + key)) {
            value = value.replace(new RegExp(":" + key + "\\*", 'g'), ":" + key + "--ESCAPED_PARAM_ASTERISKS").replace(new RegExp(":" + key + "\\?", 'g'), ":" + key + "--ESCAPED_PARAM_QUESTION").replace(new RegExp(":" + key + "\\+", 'g'), ":" + key + "--ESCAPED_PARAM_PLUS").replace(new RegExp(":" + key + "(?!\\w)", 'g'), "--ESCAPED_PARAM_COLON" + key);
        }
    }
    value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*');
    // the value needs to start with a forward-slash to be compiled
    // correctly
    return (0, _pathtoregexp.compile)("/" + value, {
        validate: false
    })(params).slice(1);
}
function prepareDestination(args) {
    const query = Object.assign({}, args.query);
    delete query.__nextLocale;
    delete query.__nextDefaultLocale;
    delete query.__nextDataReq;
    delete query.__nextInferredLocaleFromDefault;
    delete query[_approuterheaders.NEXT_RSC_UNION_QUERY];
    let escapedDestination = args.destination;
    for (const param of Object.keys({
        ...args.params,
        ...query
    })){
        escapedDestination = param ? escapeSegment(escapedDestination, param) : escapedDestination;
    }
    const parsedDestination = (0, _parseurl.parseUrl)(escapedDestination);
    const destQuery = parsedDestination.query;
    const destPath = unescapeSegments("" + parsedDestination.pathname + (parsedDestination.hash || ''));
    const destHostname = unescapeSegments(parsedDestination.hostname || '');
    const destPathParamKeys = [];
    const destHostnameParamKeys = [];
    (0, _pathtoregexp.pathToRegexp)(destPath, destPathParamKeys);
    (0, _pathtoregexp.pathToRegexp)(destHostname, destHostnameParamKeys);
    const destParams = [];
    destPathParamKeys.forEach((key)=>destParams.push(key.name));
    destHostnameParamKeys.forEach((key)=>destParams.push(key.name));
    const destPathCompiler = (0, _pathtoregexp.compile)(destPath, // have already validated before we got to this point and validating
    // breaks compiling destinations with named pattern params from the source
    // e.g. /something:hello(.*) -> /another/:hello is broken with validation
    // since compile validation is meant for reversing and not for inserting
    // params from a separate path-regex into another
    {
        validate: false
    });
    const destHostnameCompiler = (0, _pathtoregexp.compile)(destHostname, {
        validate: false
    });
    // update any params in query values
    for (const [key, strOrArray] of Object.entries(destQuery)){
        // the value needs to start with a forward-slash to be compiled
        // correctly
        if (Array.isArray(strOrArray)) {
            destQuery[key] = strOrArray.map((value)=>compileNonPath(unescapeSegments(value), args.params));
        } else if (typeof strOrArray === 'string') {
            destQuery[key] = compileNonPath(unescapeSegments(strOrArray), args.params);
        }
    }
    // add path params to query if it's not a redirect and not
    // already defined in destination query or path
    let paramKeys = Object.keys(args.params).filter((name)=>name !== 'nextInternalLocale');
    if (args.appendParamsToQuery && !paramKeys.some((key)=>destParams.includes(key))) {
        for (const key of paramKeys){
            if (!(key in destQuery)) {
                destQuery[key] = args.params[key];
            }
        }
    }
    let newUrl;
    // The compiler also that the interception route marker is an unnamed param, hence '0',
    // so we need to add it to the params object.
    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(destPath)) {
        for (const segment of destPath.split('/')){
            const marker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
            if (marker) {
                if (marker === '(..)(..)') {
                    args.params['0'] = '(..)';
                    args.params['1'] = '(..)';
                } else {
                    args.params['0'] = marker;
                }
                break;
            }
        }
    }
    try {
        newUrl = destPathCompiler(args.params);
        const [pathname, hash] = newUrl.split('#', 2);
        parsedDestination.hostname = destHostnameCompiler(args.params);
        parsedDestination.pathname = pathname;
        parsedDestination.hash = "" + (hash ? '#' : '') + (hash || '');
        delete parsedDestination.search;
    } catch (err) {
        if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
            throw new Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");
        }
        throw err;
    }
    // Query merge order lowest priority to highest
    // 1. initial URL query values
    // 2. path segment values
    // 3. destination specified query values
    parsedDestination.query = {
        ...query,
        ...parsedDestination.query
    };
    return {
        newUrl,
        destQuery,
        parsedDestination
    };
} //# sourceMappingURL=prepare-destination.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/parse-path.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parsePath", {
    enumerable: true,
    get: function() {
        return parsePath;
    }
});
function parsePath(path) {
    const hashIndex = path.indexOf('#');
    const queryIndex = path.indexOf('?');
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : '',
            hash: hashIndex > -1 ? path.slice(hashIndex) : ''
        };
    }
    return {
        pathname: path,
        query: '',
        hash: ''
    };
} //# sourceMappingURL=parse-path.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "pathHasPrefix", {
    enumerable: true,
    get: function() {
        return pathHasPrefix;
    }
});
const _parsepath = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/parse-path.js [client] (ecmascript)");
function pathHasPrefix(path, prefix) {
    if (typeof path !== 'string') {
        return false;
    }
    const { pathname } = (0, _parsepath.parsePath)(path);
    return pathname === prefix || pathname.startsWith(prefix + '/');
} //# sourceMappingURL=path-has-prefix.js.map
}}),
"[project]/node_modules/next/dist/client/has-base-path.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/client/has-base-path.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/client/has-base-path.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/client/remove-base-path.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/client/remove-base-path.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/client/remove-base-path.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/resolve-rewrites.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/router/utils/resolve-rewrites.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/router/utils/resolve-rewrites.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/client/detect-domain-locale.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/client/detect-domain-locale.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/client/detect-domain-locale.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/client/remove-locale.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/client/remove-locale.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/client/remove-locale.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/omit.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "omit", {
    enumerable: true,
    get: function() {
        return omit;
    }
});
function omit(object, keys) {
    const omitted = {};
    Object.keys(object).forEach((key)=>{
        if (!keys.includes(key)) {
            omitted[key] = object[key];
        }
    });
    return omitted;
} //# sourceMappingURL=omit.js.map
}}),
"[project]/node_modules/next/dist/client/normalize-trailing-slash.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/client/normalize-trailing-slash.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/client/normalize-trailing-slash.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/utils.js [client] (ecmascript)");
const _hasbasepath = __turbopack_require__("[project]/node_modules/next/dist/client/has-base-path.js [client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}}),
"[project]/node_modules/next/dist/client/resolve-href.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "resolveHref", {
    enumerable: true,
    get: function() {
        return resolveHref;
    }
});
const _querystring = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [client] (ecmascript)");
const _formaturl = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [client] (ecmascript)");
const _omit = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/omit.js [client] (ecmascript)");
const _utils = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/utils.js [client] (ecmascript)");
const _normalizetrailingslash = __turbopack_require__("[project]/node_modules/next/dist/client/normalize-trailing-slash.js [client] (ecmascript)");
const _islocalurl = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [client] (ecmascript)");
const _utils1 = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/index.js [client] (ecmascript)");
const _interpolateas = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/interpolate-as.js [client] (ecmascript)");
function resolveHref(router, href, resolveAs) {
    // we use a dummy base url for relative urls
    let base;
    let urlAsString = typeof href === 'string' ? href : (0, _formaturl.formatWithValidation)(href);
    // repeated slashes and backslashes in the URL are considered
    // invalid and will never match a Next.js page/file
    const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
    const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
    const urlParts = urlAsStringNoProto.split('?', 1);
    if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + urlAsString + "' passed to next/router in page: '" + router.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        const normalizedUrl = (0, _utils.normalizeRepeatedSlashes)(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
    }
    // Return because it cannot be routed by the Next.js router
    if (!(0, _islocalurl.isLocalURL)(urlAsString)) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
    try {
        base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
    } catch (_) {
        // fallback to / for invalid asPath values e.g. //
        base = new URL('/', 'http://n');
    }
    try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname);
        let interpolatedAs = '';
        if ((0, _utils1.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
            const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
            const { result, params } = (0, _interpolateas.interpolateAs)(finalUrl.pathname, finalUrl.pathname, query);
            if (result) {
                interpolatedAs = (0, _formaturl.formatWithValidation)({
                    pathname: result,
                    hash: finalUrl.hash,
                    query: (0, _omit.omit)(query, params)
                });
            }
        }
        // if the origin didn't change, it means we received a relative href
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
            resolvedHref,
            interpolatedAs || resolvedHref
        ] : resolvedHref;
    } catch (_) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=resolve-href.js.map
}}),
"[project]/node_modules/next/dist/lib/is-api-route.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isAPIRoute", {
    enumerable: true,
    get: function() {
        return isAPIRoute;
    }
});
function isAPIRoute(value) {
    return value === '/api' || Boolean(value == null ? void 0 : value.startsWith('/api/'));
} //# sourceMappingURL=is-api-route.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removePathPrefix", {
    enumerable: true,
    get: function() {
        return removePathPrefix;
    }
});
const _pathhasprefix = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [client] (ecmascript)");
function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!(0, _pathhasprefix.pathHasPrefix)(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith('/')) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getNextPathnameInfo", {
    enumerable: true,
    get: function() {
        return getNextPathnameInfo;
    }
});
const _normalizelocalepath = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js [client] (ecmascript)");
const _removepathprefix = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js [client] (ecmascript)");
const _pathhasprefix = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [client] (ecmascript)");
function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname,
        trailingSlash: pathname !== '/' ? pathname.endsWith('/') : trailingSlash
    };
    if (basePath && (0, _pathhasprefix.pathHasPrefix)(info.pathname, basePath)) {
        info.pathname = (0, _removepathprefix.removePathPrefix)(info.pathname, basePath);
        info.basePath = basePath;
    }
    let pathnameNoDataPrefix = info.pathname;
    if (info.pathname.startsWith('/_next/data/') && info.pathname.endsWith('.json')) {
        const paths = info.pathname.replace(/^\/_next\/data\//, '').replace(/\.json$/, '').split('/');
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== 'index' ? "/" + paths.slice(1).join('/') : '/';
        // update pathname with normalized if enabled although
        // we use normalized to populate locale info still
        if (options.parseData === true) {
            info.pathname = pathnameNoDataPrefix;
        }
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : (0, _normalizelocalepath.normalizeLocalePath)(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
        if (!result.detectedLocale && info.buildId) {
            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : (0, _normalizelocalepath.normalizeLocalePath)(pathnameNoDataPrefix, i18n.locales);
            if (result.detectedLocale) {
                info.locale = result.detectedLocale;
            }
        }
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addPathPrefix", {
    enumerable: true,
    get: function() {
        return addPathPrefix;
    }
});
const _parsepath = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/parse-path.js [client] (ecmascript)");
function addPathPrefix(path, prefix) {
    if (!path.startsWith('/') || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addPathSuffix", {
    enumerable: true,
    get: function() {
        return addPathSuffix;
    }
});
const _parsepath = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/parse-path.js [client] (ecmascript)");
function addPathSuffix(path, suffix) {
    if (!path.startsWith('/') || !suffix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/add-locale.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addLocale", {
    enumerable: true,
    get: function() {
        return addLocale;
    }
});
const _addpathprefix = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [client] (ecmascript)");
const _pathhasprefix = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [client] (ecmascript)");
function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if ((0, _pathhasprefix.pathHasPrefix)(lower, '/api')) return path;
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "formatNextPathnameInfo", {
    enumerable: true,
    get: function() {
        return formatNextPathnameInfo;
    }
});
const _removetrailingslash = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [client] (ecmascript)");
const _addpathprefix = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [client] (ecmascript)");
const _addpathsuffix = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js [client] (ecmascript)");
const _addlocale = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/add-locale.js [client] (ecmascript)");
function formatNextPathnameInfo(info) {
    let pathname = (0, _addlocale.addLocale)(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = (0, _removetrailingslash.removeTrailingSlash)(pathname);
    }
    if (info.buildId) {
        pathname = (0, _addpathsuffix.addPathSuffix)((0, _addpathprefix.addPathPrefix)(pathname, "/_next/data/" + info.buildId), info.pathname === '/' ? 'index.json' : '.json');
    }
    pathname = (0, _addpathprefix.addPathPrefix)(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith('/') ? (0, _addpathsuffix.addPathSuffix)(pathname, '/') : pathname : (0, _removetrailingslash.removeTrailingSlash)(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/compare-states.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "compareRouterStates", {
    enumerable: true,
    get: function() {
        return compareRouterStates;
    }
});
function compareRouterStates(a, b) {
    const stateKeys = Object.keys(a);
    if (stateKeys.length !== Object.keys(b).length) return false;
    for(let i = stateKeys.length; i--;){
        const key = stateKeys[i];
        if (key === 'query') {
            const queryKeys = Object.keys(a.query);
            if (queryKeys.length !== Object.keys(b.query).length) {
                return false;
            }
            for(let j = queryKeys.length; j--;){
                const queryKey = queryKeys[j];
                if (!b.query.hasOwnProperty(queryKey) || a.query[queryKey] !== b.query[queryKey]) {
                    return false;
                }
            }
        } else if (!b.hasOwnProperty(key) || a[key] !== b[key]) {
            return false;
        }
    }
    return true;
} //# sourceMappingURL=compare-states.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-bot.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isBot", {
    enumerable: true,
    get: function() {
        return isBot;
    }
});
const BOT_UA_RE = /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i;
function isBot(userAgent) {
    return BOT_UA_RE.test(userAgent);
} //# sourceMappingURL=is-bot.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/router.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/router/router.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/router/router.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/client/with-router.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/client/with-router.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/client/with-router.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/client/router.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
/* global window */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Router: null,
    createRouter: null,
    default: null,
    makePublicRouterInstance: null,
    useRouter: null,
    withRouter: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Router: function() {
        return _router.default;
    },
    createRouter: function() {
        return createRouter;
    },
    // Export the singletonRouter and this is the public API.
    default: function() {
        return _default;
    },
    makePublicRouterInstance: function() {
        return makePublicRouterInstance;
    },
    useRouter: function() {
        return useRouter;
    },
    withRouter: function() {
        return _withrouter.default;
    }
});
const _interop_require_default = (()=>{
    const e = new Error("Cannot find module '@swc/helpers/_/_interop_require_default'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/react/index.js [client] (ecmascript)"));
const _router = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/router.js [client] (ecmascript)"));
const _routercontextsharedruntime = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [client] (ecmascript)");
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/lib/is-error.js [client] (ecmascript)"));
const _withrouter = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/client/with-router.js [client] (ecmascript)"));
const singletonRouter = {
    router: null,
    readyCallbacks: [],
    ready (callback) {
        if (this.router) return callback();
        if (typeof window !== 'undefined') {
            this.readyCallbacks.push(callback);
        }
    }
};
// Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = [
    'pathname',
    'route',
    'query',
    'asPath',
    'components',
    'isFallback',
    'basePath',
    'locale',
    'locales',
    'defaultLocale',
    'isReady',
    'isPreview',
    'isLocaleDomain',
    'domainLocales'
];
const routerEvents = [
    'routeChangeStart',
    'beforeHistoryChange',
    'routeChangeComplete',
    'routeChangeError',
    'hashChangeStart',
    'hashChangeComplete'
];
const coreMethodFields = [
    'push',
    'replace',
    'reload',
    'back',
    'prefetch',
    'beforePopState'
];
// Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
    get () {
        return _router.default.events;
    }
});
function getRouter() {
    if (!singletonRouter.router) {
        const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
        throw new Error(message);
    }
    return singletonRouter.router;
}
urlPropertyFields.forEach((field)=>{
    // Here we need to use Object.defineProperty because we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    Object.defineProperty(singletonRouter, field, {
        get () {
            const router = getRouter();
            return router[field];
        }
    });
});
coreMethodFields.forEach((field)=>{
    singletonRouter[field] = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        const router = getRouter();
        return router[field](...args);
    };
});
routerEvents.forEach((event)=>{
    singletonRouter.ready(()=>{
        _router.default.events.on(event, function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
            const _singletonRouter = singletonRouter;
            if (_singletonRouter[eventField]) {
                try {
                    _singletonRouter[eventField](...args);
                } catch (err) {
                    console.error("Error when running the Router event: " + eventField);
                    console.error((0, _iserror.default)(err) ? err.message + "\n" + err.stack : err + '');
                }
            }
        });
    });
});
const _default = singletonRouter;
function useRouter() {
    const router = _react.default.useContext(_routercontextsharedruntime.RouterContext);
    if (!router) {
        throw new Error('NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted');
    }
    return router;
}
function createRouter() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    singletonRouter.router = new _router.default(...args);
    singletonRouter.readyCallbacks.forEach((cb)=>cb());
    singletonRouter.readyCallbacks = [];
    return singletonRouter.router;
}
function makePublicRouterInstance(router) {
    const scopedRouter = router;
    const instance = {};
    for (const property of urlPropertyFields){
        if (typeof scopedRouter[property] === 'object') {
            instance[property] = Object.assign(Array.isArray(scopedRouter[property]) ? [] : {}, scopedRouter[property]) // makes sure query is not stateful
            ;
            continue;
        }
        instance[property] = scopedRouter[property];
    }
    // Events is a static property on the router, the router doesn't have to be initialized to use it
    instance.events = _router.default.events;
    coreMethodFields.forEach((field)=>{
        instance[field] = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return scopedRouter[field](...args);
        };
    });
    return instance;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router.js.map
}}),
"[project]/node_modules/next/dist/client/route-announcer.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RouteAnnouncer: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RouteAnnouncer: function() {
        return RouteAnnouncer;
    },
    default: function() {
        return _default;
    }
});
const _interop_require_default = (()=>{
    const e = new Error("Cannot find module '@swc/helpers/_/_interop_require_default'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _jsxruntime = __turbopack_require__("[project]/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/react/index.js [client] (ecmascript)"));
const _router = __turbopack_require__("[project]/node_modules/next/dist/client/router.js [client] (ecmascript)");
const nextjsRouteAnnouncerStyles = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 0,
    width: '1px',
    // https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
    whiteSpace: 'nowrap',
    wordWrap: 'normal'
};
const RouteAnnouncer = ()=>{
    const { asPath } = (0, _router.useRouter)();
    const [routeAnnouncement, setRouteAnnouncement] = _react.default.useState('');
    // Only announce the path change, but not for the first load because screen
    // reader will do that automatically.
    const previouslyLoadedPath = _react.default.useRef(asPath);
    // Every time the path changes, announce the new page’s title following this
    // priority: first the document title (from head), otherwise the first h1, or
    // if none of these exist, then the pathname from the URL. This methodology is
    // inspired by Marcy Sutton’s accessible client routing user testing. More
    // information can be found here:
    // https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/
    _react.default.useEffect({
        "RouteAnnouncer.useEffect": ()=>{
            // If the path hasn't change, we do nothing.
            if (previouslyLoadedPath.current === asPath) return;
            previouslyLoadedPath.current = asPath;
            if (document.title) {
                setRouteAnnouncement(document.title);
            } else {
                const pageHeader = document.querySelector('h1');
                var _pageHeader_innerText;
                const content = (_pageHeader_innerText = pageHeader == null ? void 0 : pageHeader.innerText) != null ? _pageHeader_innerText : pageHeader == null ? void 0 : pageHeader.textContent;
                setRouteAnnouncement(content || asPath);
            }
        }
    }["RouteAnnouncer.useEffect"], [
        asPath
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
        "aria-live": "assertive" // Make the announcement immediately.
        ,
        id: "__next-route-announcer__",
        role: "alert",
        style: nextjsRouteAnnouncerStyles,
        children: routeAnnouncement
    });
};
const _default = RouteAnnouncer;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=route-announcer.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/image-config.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VALID_LOADERS: null,
    imageConfigDefault: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    'default',
    'imgix',
    'cloudinary',
    'akamai',
    'custom'
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: '/_next/image',
    loader: 'default',
    loaderFile: '',
    domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: [
        'image/webp'
    ],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
    contentDispositionType: 'attachment',
    localPatterns: undefined,
    remotePatterns: [],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/as-path-to-search-params.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
// Convert router.asPath to a URLSearchParams object
// example: /dynamic/[slug]?foo=bar -> { foo: 'bar' }
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "asPathToSearchParams", {
    enumerable: true,
    get: function() {
        return asPathToSearchParams;
    }
});
function asPathToSearchParams(asPath) {
    return new URL(asPath, 'http://n').searchParams;
} //# sourceMappingURL=as-path-to-search-params.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/adapters.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    PathnameContextProviderAdapter: null,
    adaptForAppRouterInstance: null,
    adaptForPathParams: null,
    adaptForSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PathnameContextProviderAdapter: function() {
        return PathnameContextProviderAdapter;
    },
    adaptForAppRouterInstance: function() {
        return adaptForAppRouterInstance;
    },
    adaptForPathParams: function() {
        return adaptForPathParams;
    },
    adaptForSearchParams: function() {
        return adaptForSearchParams;
    }
});
const _interop_require_wildcard = (()=>{
    const e = new Error("Cannot find module '@swc/helpers/_/_interop_require_wildcard'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _jsxruntime = __turbopack_require__("[project]/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/react/index.js [client] (ecmascript)"));
const _hooksclientcontextsharedruntime = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [client] (ecmascript)");
const _utils = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/index.js [client] (ecmascript)");
const _aspathtosearchparams = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/as-path-to-search-params.js [client] (ecmascript)");
const _routeregex = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/router/utils/route-regex.js [client] (ecmascript)");
function adaptForAppRouterInstance(pagesRouter) {
    return {
        back () {
            pagesRouter.back();
        },
        forward () {
            pagesRouter.forward();
        },
        refresh () {
            pagesRouter.reload();
        },
        hmrRefresh () {},
        push (href, param) {
            let { scroll } = param === void 0 ? {} : param;
            void pagesRouter.push(href, undefined, {
                scroll
            });
        },
        replace (href, param) {
            let { scroll } = param === void 0 ? {} : param;
            void pagesRouter.replace(href, undefined, {
                scroll
            });
        },
        prefetch (href) {
            void pagesRouter.prefetch(href);
        }
    };
}
function adaptForSearchParams(router) {
    if (!router.isReady || !router.query) {
        return new URLSearchParams();
    }
    return (0, _aspathtosearchparams.asPathToSearchParams)(router.asPath);
}
function adaptForPathParams(router) {
    if (!router.isReady || !router.query) {
        return null;
    }
    const pathParams = {};
    const routeRegex = (0, _routeregex.getRouteRegex)(router.pathname);
    const keys = Object.keys(routeRegex.groups);
    for (const key of keys){
        pathParams[key] = router.query[key];
    }
    return pathParams;
}
function PathnameContextProviderAdapter(param) {
    let { children, router, ...props } = param;
    const ref = (0, _react.useRef)(props.isAutoExport);
    const value = (0, _react.useMemo)(()=>{
        // isAutoExport is only ever `true` on the first render from the server,
        // so reset it to `false` after we read it for the first time as `true`. If
        // we don't use the value, then we don't need it.
        const isAutoExport = ref.current;
        if (isAutoExport) {
            ref.current = false;
        }
        // When the route is a dynamic route, we need to do more processing to
        // determine if we need to stop showing the pathname.
        if ((0, _utils.isDynamicRoute)(router.pathname)) {
            // When the router is rendering the fallback page, it can't possibly know
            // the path, so return `null` here. Read more about fallback pages over
            // at:
            // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-pages
            if (router.isFallback) {
                return null;
            }
            // When `isAutoExport` is true, meaning this is a page page has been
            // automatically statically optimized, and the router is not ready, then
            // we can't know the pathname yet. Read more about automatic static
            // optimization at:
            // https://nextjs.org/docs/advanced-features/automatic-static-optimization
            if (isAutoExport && !router.isReady) {
                return null;
            }
        }
        // The `router.asPath` contains the pathname seen by the browser (including
        // any query strings), so it should have that stripped. Read more about the
        // `asPath` option over at:
        // https://nextjs.org/docs/api-reference/next/router#router-object
        let url;
        try {
            url = new URL(router.asPath, 'http://f');
        } catch (_) {
            // fallback to / for invalid asPath values e.g. //
            return '/';
        }
        return url.pathname;
    }, [
        router.asPath,
        router.isFallback,
        router.isReady,
        router.pathname
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.PathnameContext.Provider, {
        value: value,
        children: children
    });
} //# sourceMappingURL=adapters.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
// This has to be a shared module which is shared between client component error boundary and dynamic component
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super("Bail out to client-side rendering: " + reason);
        this.reason = reason;
        this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map
}}),
"[project]/node_modules/next/dist/client/react-client-callbacks/report-global-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/react-client-callbacks/report-global-error.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stitched-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stitched-error.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/react-client-callbacks/shared.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/client/react-client-callbacks/shared.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/client/react-client-callbacks/shared.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/client/tracing/tracer.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_default = (()=>{
    const e = new Error("Cannot find module '@swc/helpers/_/_interop_require_default'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _mitt = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/shared/lib/mitt.js [client] (ecmascript)"));
class Span {
    end(endTime) {
        if (this.state.state === 'ended') {
            throw new Error('Span has already ended');
        }
        this.state = {
            state: 'ended',
            endTime: endTime != null ? endTime : Date.now()
        };
        this.onSpanEnd(this);
    }
    constructor(name, options, onSpanEnd){
        this.name = name;
        var _options_attributes;
        this.attributes = (_options_attributes = options.attributes) != null ? _options_attributes : {};
        var _options_startTime;
        this.startTime = (_options_startTime = options.startTime) != null ? _options_startTime : Date.now();
        this.onSpanEnd = onSpanEnd;
        this.state = {
            state: 'inprogress'
        };
    }
}
class Tracer {
    startSpan(name, options) {
        return new Span(name, options, this.handleSpanEnd);
    }
    onSpanEnd(cb) {
        this._emitter.on('spanend', cb);
        return ()=>{
            this._emitter.off('spanend', cb);
        };
    }
    constructor(){
        this._emitter = (0, _mitt.default)();
        this.handleSpanEnd = (span)=>{
            this._emitter.emit('spanend', span);
        };
    }
}
const _default = new Tracer();
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=tracer.js.map
}}),
"[project]/node_modules/next/dist/server/dev/hot-reloader-types.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HMR_ACTIONS_SENT_TO_BROWSER", {
    enumerable: true,
    get: function() {
        return HMR_ACTIONS_SENT_TO_BROWSER;
    }
});
var HMR_ACTIONS_SENT_TO_BROWSER;
(function(HMR_ACTIONS_SENT_TO_BROWSER) {
    HMR_ACTIONS_SENT_TO_BROWSER["ADDED_PAGE"] = "addedPage";
    HMR_ACTIONS_SENT_TO_BROWSER["REMOVED_PAGE"] = "removedPage";
    HMR_ACTIONS_SENT_TO_BROWSER["RELOAD_PAGE"] = "reloadPage";
    HMR_ACTIONS_SENT_TO_BROWSER["SERVER_COMPONENT_CHANGES"] = "serverComponentChanges";
    HMR_ACTIONS_SENT_TO_BROWSER["MIDDLEWARE_CHANGES"] = "middlewareChanges";
    HMR_ACTIONS_SENT_TO_BROWSER["CLIENT_CHANGES"] = "clientChanges";
    HMR_ACTIONS_SENT_TO_BROWSER["SERVER_ONLY_CHANGES"] = "serverOnlyChanges";
    HMR_ACTIONS_SENT_TO_BROWSER["SYNC"] = "sync";
    HMR_ACTIONS_SENT_TO_BROWSER["BUILT"] = "built";
    HMR_ACTIONS_SENT_TO_BROWSER["BUILDING"] = "building";
    HMR_ACTIONS_SENT_TO_BROWSER["DEV_PAGES_MANIFEST_UPDATE"] = "devPagesManifestUpdate";
    HMR_ACTIONS_SENT_TO_BROWSER["TURBOPACK_MESSAGE"] = "turbopack-message";
    HMR_ACTIONS_SENT_TO_BROWSER["SERVER_ERROR"] = "serverError";
    HMR_ACTIONS_SENT_TO_BROWSER["TURBOPACK_CONNECTED"] = "turbopack-connected";
    HMR_ACTIONS_SENT_TO_BROWSER["APP_ISR_MANIFEST"] = "appIsrManifest";
})(HMR_ACTIONS_SENT_TO_BROWSER || (HMR_ACTIONS_SENT_TO_BROWSER = {})); //# sourceMappingURL=hot-reloader-types.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/normalized-asset-prefix.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizedAssetPrefix", {
    enumerable: true,
    get: function() {
        return normalizedAssetPrefix;
    }
});
function normalizedAssetPrefix(assetPrefix) {
    // remove all leading slashes and trailing slashes
    const escapedAssetPrefix = (assetPrefix == null ? void 0 : assetPrefix.replace(/^\/+|\/+$/g, '')) || false;
    // if an assetPrefix was '/', we return empty string
    // because it could be an unnecessary trailing slash
    if (!escapedAssetPrefix) {
        return '';
    }
    if (URL.canParse(escapedAssetPrefix)) {
        const url = new URL(escapedAssetPrefix).toString();
        return url.endsWith('/') ? url.slice(0, -1) : url;
    }
    // assuming assetPrefix here is a pathname-style,
    // restore the leading slash
    return "/" + escapedAssetPrefix;
} //# sourceMappingURL=normalized-asset-prefix.js.map
}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/get-socket-url.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/get-socket-url.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/pages/websocket.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/pages/websocket.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/tracing/report-to-socket.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return reportToSocket;
    }
});
const _websocket = (()=>{
    const e = new Error("Cannot find module '../components/react-dev-overlay/pages/websocket'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function reportToSocket(span) {
    if (span.state.state !== 'ended') {
        throw new Error('Expected span to be ended');
    }
    (0, _websocket.sendMessage)(JSON.stringify({
        event: 'span-end',
        startTime: span.startTime,
        endTime: span.state.endTime,
        spanName: span.name,
        attributes: span.attributes
    }));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=report-to-socket.js.map
}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/pages/bus.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/pages/bus.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/compiled/stacktrace-parser/stack-trace-parser.cjs.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var e = {};
    (()=>{
        var r = e;
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = "<unknown>";
        function parse(e) {
            var r = e.split("\n");
            return r.reduce(function(e, r) {
                var n = parseChrome(r) || parseWinjs(r) || parseGecko(r) || parseNode(r) || parseJSC(r);
                if (n) {
                    e.push(n);
                }
                return e;
            }, []);
        }
        var a = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
        var l = /\((\S*)(?::(\d+))(?::(\d+))\)/;
        function parseChrome(e) {
            var r = a.exec(e);
            if (!r) {
                return null;
            }
            var u = r[2] && r[2].indexOf("native") === 0;
            var t = r[2] && r[2].indexOf("eval") === 0;
            var i = l.exec(r[2]);
            if (t && i != null) {
                r[2] = i[1];
                r[3] = i[2];
                r[4] = i[3];
            }
            return {
                file: !u ? r[2] : null,
                methodName: r[1] || n,
                arguments: u ? [
                    r[2]
                ] : [],
                lineNumber: r[3] ? +r[3] : null,
                column: r[4] ? +r[4] : null
            };
        }
        var u = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
        function parseWinjs(e) {
            var r = u.exec(e);
            if (!r) {
                return null;
            }
            return {
                file: r[2],
                methodName: r[1] || n,
                arguments: [],
                lineNumber: +r[3],
                column: r[4] ? +r[4] : null
            };
        }
        var t = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
        var i = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
        function parseGecko(e) {
            var r = t.exec(e);
            if (!r) {
                return null;
            }
            var a = r[3] && r[3].indexOf(" > eval") > -1;
            var l = i.exec(r[3]);
            if (a && l != null) {
                r[3] = l[1];
                r[4] = l[2];
                r[5] = null;
            }
            return {
                file: r[3],
                methodName: r[1] || n,
                arguments: r[2] ? r[2].split(",") : [],
                lineNumber: r[4] ? +r[4] : null,
                column: r[5] ? +r[5] : null
            };
        }
        var s = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
        function parseJSC(e) {
            var r = s.exec(e);
            if (!r) {
                return null;
            }
            return {
                file: r[3],
                methodName: r[1] || n,
                arguments: [],
                lineNumber: +r[4],
                column: r[5] ? +r[5] : null
            };
        }
        var o = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
        function parseNode(e) {
            var r = o.exec(e);
            if (!r) {
                return null;
            }
            return {
                file: r[2],
                methodName: r[1] || n,
                arguments: [],
                lineNumber: +r[3],
                column: r[4] ? +r[4] : null
            };
        }
        r.parse = parse;
    })();
    module.exports = e;
})();
}}),
"[project]/node_modules/next/dist/client/components/is-hydration-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/is-hydration-error.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parse-stack.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parse-stack.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parse-stack.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parse-component-stack.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parse-component-stack.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/shared.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/attach-hydration-error-state.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/attach-hydration-error-state.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/webpack-module-path.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/webpack-module-path.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stack-frame.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stack-frame.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stack-frame.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/shared/lib/error-source.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    decorateServerError: null,
    getErrorSource: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    decorateServerError: function() {
        return decorateServerError;
    },
    getErrorSource: function() {
        return getErrorSource;
    }
});
const symbolError = Symbol.for('NextjsError');
function getErrorSource(error) {
    return error[symbolError] || null;
}
function decorateServerError(error, type) {
    Object.defineProperty(error, symbolError, {
        writable: false,
        enumerable: false,
        configurable: false,
        value: type
    });
} //# sourceMappingURL=error-source.js.map
}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/get-error-by-type.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/get-error-by-type.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/node-stack-frames.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/node-stack-frames.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/ShadowPortal.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/ShadowPortal.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/hooks/use-on-click-outside.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/hooks/use-on-click-outside.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/Dialog.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/Dialog.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogBody.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogBody.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogContent.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogContent.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogHeader.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogHeader.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/styles.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/compiled/platform/platform.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
(()=>{
    var e = {
        541: function(e, i, t) {
            e = t.nmd(e);
            /*!
 * Platform.js v1.3.6
 * Copyright 2014-2020 Benjamin Tan
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license
 */ (function() {
                "use strict";
                var t = {
                    function: true,
                    object: true
                };
                var r = t[typeof window] && window || this;
                var a = r;
                var n = t[typeof i] && i;
                var o = t["object"] && e && !e.nodeType && e;
                var l = n && o && typeof global == "object" && global;
                if (l && (l.global === l || l.window === l || l.self === l)) {
                    r = l;
                }
                var s = Math.pow(2, 53) - 1;
                var f = /\bOpera/;
                var b = this;
                var c = Object.prototype;
                var p = c.hasOwnProperty;
                var u = c.toString;
                function capitalize(e) {
                    e = String(e);
                    return e.charAt(0).toUpperCase() + e.slice(1);
                }
                function cleanupOS(e, i, t) {
                    var r = {
                        "10.0": "10",
                        6.4: "10 Technical Preview",
                        6.3: "8.1",
                        6.2: "8",
                        6.1: "Server 2008 R2 / 7",
                        "6.0": "Server 2008 / Vista",
                        5.2: "Server 2003 / XP 64-bit",
                        5.1: "XP",
                        5.01: "2000 SP1",
                        "5.0": "2000",
                        "4.0": "NT",
                        "4.90": "ME"
                    };
                    if (i && t && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (r = r[/[\d.]+$/.exec(e)])) {
                        e = "Windows " + r;
                    }
                    e = String(e);
                    if (i && t) {
                        e = e.replace(RegExp(i, "i"), t);
                    }
                    e = format(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]);
                    return e;
                }
                function each(e, i) {
                    var t = -1, r = e ? e.length : 0;
                    if (typeof r == "number" && r > -1 && r <= s) {
                        while(++t < r){
                            i(e[t], t, e);
                        }
                    } else {
                        forOwn(e, i);
                    }
                }
                function format(e) {
                    e = trim(e);
                    return /^(?:webOS|i(?:OS|P))/.test(e) ? e : capitalize(e);
                }
                function forOwn(e, i) {
                    for(var t in e){
                        if (p.call(e, t)) {
                            i(e[t], t, e);
                        }
                    }
                }
                function getClassOf(e) {
                    return e == null ? capitalize(e) : u.call(e).slice(8, -1);
                }
                function isHostType(e, i) {
                    var t = e != null ? typeof e[i] : "number";
                    return !/^(?:boolean|number|string|undefined)$/.test(t) && (t == "object" ? !!e[i] : true);
                }
                function qualify(e) {
                    return String(e).replace(/([ -])(?!$)/g, "$1?");
                }
                function reduce(e, i) {
                    var t = null;
                    each(e, function(r, a) {
                        t = i(t, r, a, e);
                    });
                    return t;
                }
                function trim(e) {
                    return String(e).replace(/^ +| +$/g, "");
                }
                function parse(e) {
                    var i = r;
                    var t = e && typeof e == "object" && getClassOf(e) != "String";
                    if (t) {
                        i = e;
                        e = null;
                    }
                    var n = i.navigator || {};
                    var o = n.userAgent || "";
                    e || (e = o);
                    var l = t || b == a;
                    var s = t ? !!n.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(u.toString());
                    var c = "Object", p = t ? c : "ScriptBridgingProxyObject", d = t ? c : "Environment", S = t && i.java ? "JavaPackage" : getClassOf(i.java), x = t ? c : "RuntimeObject";
                    var m = /\bJava/.test(S) && i.java;
                    var g = m && getClassOf(i.environment) == d;
                    var h = m ? "a" : "α";
                    var v = m ? "b" : "β";
                    var O = i.document || {};
                    var y = i.operamini || i.opera;
                    var w = f.test(w = t && y ? y["[[Class]]"] : getClassOf(y)) ? w : y = null;
                    var M;
                    var E = e;
                    var P = [];
                    var C = null;
                    var k = e == o;
                    var B = k && y && typeof y.version == "function" && y.version();
                    var W;
                    var _ = getLayout([
                        {
                            label: "EdgeHTML",
                            pattern: "Edge"
                        },
                        "Trident",
                        {
                            label: "WebKit",
                            pattern: "AppleWebKit"
                        },
                        "iCab",
                        "Presto",
                        "NetFront",
                        "Tasman",
                        "KHTML",
                        "Gecko"
                    ]);
                    var R = getName([
                        "Adobe AIR",
                        "Arora",
                        "Avant Browser",
                        "Breach",
                        "Camino",
                        "Electron",
                        "Epiphany",
                        "Fennec",
                        "Flock",
                        "Galeon",
                        "GreenBrowser",
                        "iCab",
                        "Iceweasel",
                        "K-Meleon",
                        "Konqueror",
                        "Lunascape",
                        "Maxthon",
                        {
                            label: "Microsoft Edge",
                            pattern: "(?:Edge|Edg|EdgA|EdgiOS)"
                        },
                        "Midori",
                        "Nook Browser",
                        "PaleMoon",
                        "PhantomJS",
                        "Raven",
                        "Rekonq",
                        "RockMelt",
                        {
                            label: "Samsung Internet",
                            pattern: "SamsungBrowser"
                        },
                        "SeaMonkey",
                        {
                            label: "Silk",
                            pattern: "(?:Cloud9|Silk-Accelerated)"
                        },
                        "Sleipnir",
                        "SlimBrowser",
                        {
                            label: "SRWare Iron",
                            pattern: "Iron"
                        },
                        "Sunrise",
                        "Swiftfox",
                        "Vivaldi",
                        "Waterfox",
                        "WebPositive",
                        {
                            label: "Yandex Browser",
                            pattern: "YaBrowser"
                        },
                        {
                            label: "UC Browser",
                            pattern: "UCBrowser"
                        },
                        "Opera Mini",
                        {
                            label: "Opera Mini",
                            pattern: "OPiOS"
                        },
                        "Opera",
                        {
                            label: "Opera",
                            pattern: "OPR"
                        },
                        "Chromium",
                        "Chrome",
                        {
                            label: "Chrome",
                            pattern: "(?:HeadlessChrome)"
                        },
                        {
                            label: "Chrome Mobile",
                            pattern: "(?:CriOS|CrMo)"
                        },
                        {
                            label: "Firefox",
                            pattern: "(?:Firefox|Minefield)"
                        },
                        {
                            label: "Firefox for iOS",
                            pattern: "FxiOS"
                        },
                        {
                            label: "IE",
                            pattern: "IEMobile"
                        },
                        {
                            label: "IE",
                            pattern: "MSIE"
                        },
                        "Safari"
                    ]);
                    var A = getProduct([
                        {
                            label: "BlackBerry",
                            pattern: "BB10"
                        },
                        "BlackBerry",
                        {
                            label: "Galaxy S",
                            pattern: "GT-I9000"
                        },
                        {
                            label: "Galaxy S2",
                            pattern: "GT-I9100"
                        },
                        {
                            label: "Galaxy S3",
                            pattern: "GT-I9300"
                        },
                        {
                            label: "Galaxy S4",
                            pattern: "GT-I9500"
                        },
                        {
                            label: "Galaxy S5",
                            pattern: "SM-G900"
                        },
                        {
                            label: "Galaxy S6",
                            pattern: "SM-G920"
                        },
                        {
                            label: "Galaxy S6 Edge",
                            pattern: "SM-G925"
                        },
                        {
                            label: "Galaxy S7",
                            pattern: "SM-G930"
                        },
                        {
                            label: "Galaxy S7 Edge",
                            pattern: "SM-G935"
                        },
                        "Google TV",
                        "Lumia",
                        "iPad",
                        "iPod",
                        "iPhone",
                        "Kindle",
                        {
                            label: "Kindle Fire",
                            pattern: "(?:Cloud9|Silk-Accelerated)"
                        },
                        "Nexus",
                        "Nook",
                        "PlayBook",
                        "PlayStation Vita",
                        "PlayStation",
                        "TouchPad",
                        "Transformer",
                        {
                            label: "Wii U",
                            pattern: "WiiU"
                        },
                        "Wii",
                        "Xbox One",
                        {
                            label: "Xbox 360",
                            pattern: "Xbox"
                        },
                        "Xoom"
                    ]);
                    var I = getManufacturer({
                        Apple: {
                            iPad: 1,
                            iPhone: 1,
                            iPod: 1
                        },
                        Alcatel: {},
                        Archos: {},
                        Amazon: {
                            Kindle: 1,
                            "Kindle Fire": 1
                        },
                        Asus: {
                            Transformer: 1
                        },
                        "Barnes & Noble": {
                            Nook: 1
                        },
                        BlackBerry: {
                            PlayBook: 1
                        },
                        Google: {
                            "Google TV": 1,
                            Nexus: 1
                        },
                        HP: {
                            TouchPad: 1
                        },
                        HTC: {},
                        Huawei: {},
                        Lenovo: {},
                        LG: {},
                        Microsoft: {
                            Xbox: 1,
                            "Xbox One": 1
                        },
                        Motorola: {
                            Xoom: 1
                        },
                        Nintendo: {
                            "Wii U": 1,
                            Wii: 1
                        },
                        Nokia: {
                            Lumia: 1
                        },
                        Oppo: {},
                        Samsung: {
                            "Galaxy S": 1,
                            "Galaxy S2": 1,
                            "Galaxy S3": 1,
                            "Galaxy S4": 1
                        },
                        Sony: {
                            PlayStation: 1,
                            "PlayStation Vita": 1
                        },
                        Xiaomi: {
                            Mi: 1,
                            Redmi: 1
                        }
                    });
                    var T = getOS([
                        "Windows Phone",
                        "KaiOS",
                        "Android",
                        "CentOS",
                        {
                            label: "Chrome OS",
                            pattern: "CrOS"
                        },
                        "Debian",
                        {
                            label: "DragonFly BSD",
                            pattern: "DragonFly"
                        },
                        "Fedora",
                        "FreeBSD",
                        "Gentoo",
                        "Haiku",
                        "Kubuntu",
                        "Linux Mint",
                        "OpenBSD",
                        "Red Hat",
                        "SuSE",
                        "Ubuntu",
                        "Xubuntu",
                        "Cygwin",
                        "Symbian OS",
                        "hpwOS",
                        "webOS ",
                        "webOS",
                        "Tablet OS",
                        "Tizen",
                        "Linux",
                        "Mac OS X",
                        "Macintosh",
                        "Mac",
                        "Windows 98;",
                        "Windows "
                    ]);
                    function getLayout(i) {
                        return reduce(i, function(i, t) {
                            return i || RegExp("\\b" + (t.pattern || qualify(t)) + "\\b", "i").exec(e) && (t.label || t);
                        });
                    }
                    function getManufacturer(i) {
                        return reduce(i, function(i, t, r) {
                            return i || (t[A] || t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(A)] || RegExp("\\b" + qualify(r) + "(?:\\b|\\w*\\d)", "i").exec(e)) && r;
                        });
                    }
                    function getName(i) {
                        return reduce(i, function(i, t) {
                            return i || RegExp("\\b" + (t.pattern || qualify(t)) + "\\b", "i").exec(e) && (t.label || t);
                        });
                    }
                    function getOS(i) {
                        return reduce(i, function(i, t) {
                            var r = t.pattern || qualify(t);
                            if (!i && (i = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e))) {
                                i = cleanupOS(i, r, t.label || t);
                            }
                            return i;
                        });
                    }
                    function getProduct(i) {
                        return reduce(i, function(i, t) {
                            var r = t.pattern || qualify(t);
                            if (!i && (i = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(e) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(e) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e))) {
                                if ((i = String(t.label && !RegExp(r, "i").test(t.label) ? t.label : i).split("/"))[1] && !/[\d.]+/.test(i[0])) {
                                    i[0] += " " + i[1];
                                }
                                t = t.label || t;
                                i = format(i[0].replace(RegExp(r, "i"), t).replace(RegExp("; *(?:" + t + "[_-])?", "i"), " ").replace(RegExp("(" + t + ")[-_.]?(\\w)", "i"), "$1 $2"));
                            }
                            return i;
                        });
                    }
                    function getVersion(i) {
                        return reduce(i, function(i, t) {
                            return i || (RegExp(t + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] || null;
                        });
                    }
                    function toStringPlatform() {
                        return this.description || "";
                    }
                    _ && (_ = [
                        _
                    ]);
                    if (/\bAndroid\b/.test(T) && !A && (M = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(e))) {
                        A = trim(M[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null;
                    }
                    if (I && !A) {
                        A = getProduct([
                            I
                        ]);
                    } else if (I && A) {
                        A = A.replace(RegExp("^(" + qualify(I) + ")[-_.\\s]", "i"), I + " ").replace(RegExp("^(" + qualify(I) + ")[-_.]?(\\w)", "i"), I + " $2");
                    }
                    if (M = /\bGoogle TV\b/.exec(A)) {
                        A = M[0];
                    }
                    if (/\bSimulator\b/i.test(e)) {
                        A = (A ? A + " " : "") + "Simulator";
                    }
                    if (R == "Opera Mini" && /\bOPiOS\b/.test(e)) {
                        P.push("running in Turbo/Uncompressed mode");
                    }
                    if (R == "IE" && /\blike iPhone OS\b/.test(e)) {
                        M = parse(e.replace(/like iPhone OS/, ""));
                        I = M.manufacturer;
                        A = M.product;
                    } else if (/^iP/.test(A)) {
                        R || (R = "Safari");
                        T = "iOS" + ((M = / OS ([\d_]+)/i.exec(e)) ? " " + M[1].replace(/_/g, ".") : "");
                    } else if (R == "Konqueror" && /^Linux\b/i.test(T)) {
                        T = "Kubuntu";
                    } else if (I && I != "Google" && (/Chrome/.test(R) && !/\bMobile Safari\b/i.test(e) || /\bVita\b/.test(A)) || /\bAndroid\b/.test(T) && /^Chrome/.test(R) && /\bVersion\//i.test(e)) {
                        R = "Android Browser";
                        T = /\bAndroid\b/.test(T) ? T : "Android";
                    } else if (R == "Silk") {
                        if (!/\bMobi/i.test(e)) {
                            T = "Android";
                            P.unshift("desktop mode");
                        }
                        if (/Accelerated *= *true/i.test(e)) {
                            P.unshift("accelerated");
                        }
                    } else if (R == "UC Browser" && /\bUCWEB\b/.test(e)) {
                        P.push("speed mode");
                    } else if (R == "PaleMoon" && (M = /\bFirefox\/([\d.]+)\b/.exec(e))) {
                        P.push("identifying as Firefox " + M[1]);
                    } else if (R == "Firefox" && (M = /\b(Mobile|Tablet|TV)\b/i.exec(e))) {
                        T || (T = "Firefox OS");
                        A || (A = M[1]);
                    } else if (!R || (M = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(R))) {
                        if (R && !A && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(M + "/") + 8))) {
                            R = null;
                        }
                        if ((M = A || I || T) && (A || I || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(T))) {
                            R = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(T) ? T : M) + " Browser";
                        }
                    } else if (R == "Electron" && (M = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1])) {
                        P.push("Chromium " + M);
                    }
                    if (!B) {
                        B = getVersion([
                            "(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)",
                            "Version",
                            qualify(R),
                            "(?:Firefox|Minefield|NetFront)"
                        ]);
                    }
                    if (M = _ == "iCab" && parseFloat(B) > 3 && "WebKit" || /\bOpera\b/.test(R) && (/\bOPR\b/.test(e) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(_) && "WebKit" || !_ && /\bMSIE\b/i.test(e) && (T == "Mac OS" ? "Tasman" : "Trident") || _ == "WebKit" && /\bPlayStation\b(?! Vita\b)/i.test(R) && "NetFront") {
                        _ = [
                            M
                        ];
                    }
                    if (R == "IE" && (M = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1])) {
                        R += " Mobile";
                        T = "Windows Phone " + (/\+$/.test(M) ? M : M + ".x");
                        P.unshift("desktop mode");
                    } else if (/\bWPDesktop\b/i.test(e)) {
                        R = "IE Mobile";
                        T = "Windows Phone 8.x";
                        P.unshift("desktop mode");
                        B || (B = (/\brv:([\d.]+)/.exec(e) || 0)[1]);
                    } else if (R != "IE" && _ == "Trident" && (M = /\brv:([\d.]+)/.exec(e))) {
                        if (R) {
                            P.push("identifying as " + R + (B ? " " + B : ""));
                        }
                        R = "IE";
                        B = M[1];
                    }
                    if (k) {
                        if (isHostType(i, "global")) {
                            if (m) {
                                M = m.lang.System;
                                E = M.getProperty("os.arch");
                                T = T || M.getProperty("os.name") + " " + M.getProperty("os.version");
                            }
                            if (g) {
                                try {
                                    B = i.require("ringo/engine").version.join(".");
                                    R = "RingoJS";
                                } catch (e) {
                                    if ((M = i.system) && M.global.system == i.system) {
                                        R = "Narwhal";
                                        T || (T = M[0].os || null);
                                    }
                                }
                                if (!R) {
                                    R = "Rhino";
                                }
                            } else if (typeof i.process == "object" && !i.process.browser && (M = i.process)) {
                                if (typeof M.versions == "object") {
                                    if (typeof M.versions.electron == "string") {
                                        P.push("Node " + M.versions.node);
                                        R = "Electron";
                                        B = M.versions.electron;
                                    } else if (typeof M.versions.nw == "string") {
                                        P.push("Chromium " + B, "Node " + M.versions.node);
                                        R = "NW.js";
                                        B = M.versions.nw;
                                    }
                                }
                                if (!R) {
                                    R = "Node.js";
                                    E = M.arch;
                                    T = M.platform;
                                    B = /[\d.]+/.exec(M.version);
                                    B = B ? B[0] : null;
                                }
                            }
                        } else if (getClassOf(M = i.runtime) == p) {
                            R = "Adobe AIR";
                            T = M.flash.system.Capabilities.os;
                        } else if (getClassOf(M = i.phantom) == x) {
                            R = "PhantomJS";
                            B = (M = M.version || null) && M.major + "." + M.minor + "." + M.patch;
                        } else if (typeof O.documentMode == "number" && (M = /\bTrident\/(\d+)/i.exec(e))) {
                            B = [
                                B,
                                O.documentMode
                            ];
                            if ((M = +M[1] + 4) != B[1]) {
                                P.push("IE " + B[1] + " mode");
                                _ && (_[1] = "");
                                B[1] = M;
                            }
                            B = R == "IE" ? String(B[1].toFixed(1)) : B[0];
                        } else if (typeof O.documentMode == "number" && /^(?:Chrome|Firefox)\b/.test(R)) {
                            P.push("masking as " + R + " " + B);
                            R = "IE";
                            B = "11.0";
                            _ = [
                                "Trident"
                            ];
                            T = "Windows";
                        }
                        T = T && format(T);
                    }
                    if (B && (M = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(B) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (k && n.appMinorVersion)) || /\bMinefield\b/i.test(e) && "a")) {
                        C = /b/i.test(M) ? "beta" : "alpha";
                        B = B.replace(RegExp(M + "\\+?$"), "") + (C == "beta" ? v : h) + (/\d+\+?/.exec(M) || "");
                    }
                    if (R == "Fennec" || R == "Firefox" && /\b(?:Android|Firefox OS|KaiOS)\b/.test(T)) {
                        R = "Firefox Mobile";
                    } else if (R == "Maxthon" && B) {
                        B = B.replace(/\.[\d.]+/, ".x");
                    } else if (/\bXbox\b/i.test(A)) {
                        if (A == "Xbox 360") {
                            T = null;
                        }
                        if (A == "Xbox 360" && /\bIEMobile\b/.test(e)) {
                            P.unshift("mobile mode");
                        }
                    } else if ((/^(?:Chrome|IE|Opera)$/.test(R) || R && !A && !/Browser|Mobi/.test(R)) && (T == "Windows CE" || /Mobi/i.test(e))) {
                        R += " Mobile";
                    } else if (R == "IE" && k) {
                        try {
                            if (i.external === null) {
                                P.unshift("platform preview");
                            }
                        } catch (e) {
                            P.unshift("embedded");
                        }
                    } else if ((/\bBlackBerry\b/.test(A) || /\bBB10\b/.test(e)) && (M = (RegExp(A.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || B)) {
                        M = [
                            M,
                            /BB10/.test(e)
                        ];
                        T = (M[1] ? (A = null, I = "BlackBerry") : "Device Software") + " " + M[0];
                        B = null;
                    } else if (this != forOwn && A != "Wii" && (k && y || /Opera/.test(R) && /\b(?:MSIE|Firefox)\b/i.test(e) || R == "Firefox" && /\bOS X (?:\d+\.){2,}/.test(T) || R == "IE" && (T && !/^Win/.test(T) && B > 5.5 || /\bWindows XP\b/.test(T) && B > 8 || B == 8 && !/\bTrident\b/.test(e))) && !f.test(M = parse.call(forOwn, e.replace(f, "") + ";")) && M.name) {
                        M = "ing as " + M.name + ((M = M.version) ? " " + M : "");
                        if (f.test(R)) {
                            if (/\bIE\b/.test(M) && T == "Mac OS") {
                                T = null;
                            }
                            M = "identify" + M;
                        } else {
                            M = "mask" + M;
                            if (w) {
                                R = format(w.replace(/([a-z])([A-Z])/g, "$1 $2"));
                            } else {
                                R = "Opera";
                            }
                            if (/\bIE\b/.test(M)) {
                                T = null;
                            }
                            if (!k) {
                                B = null;
                            }
                        }
                        _ = [
                            "Presto"
                        ];
                        P.push(M);
                    }
                    if (M = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) {
                        M = [
                            parseFloat(M.replace(/\.(\d)$/, ".0$1")),
                            M
                        ];
                        if (R == "Safari" && M[1].slice(-1) == "+") {
                            R = "WebKit Nightly";
                            C = "alpha";
                            B = M[1].slice(0, -1);
                        } else if (B == M[1] || B == (M[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) {
                            B = null;
                        }
                        M[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(e) || 0)[1];
                        if (M[0] == 537.36 && M[2] == 537.36 && parseFloat(M[1]) >= 28 && _ == "WebKit") {
                            _ = [
                                "Blink"
                            ];
                        }
                        if (!k || !s && !M[1]) {
                            _ && (_[1] = "like Safari");
                            M = (M = M[0], M < 400 ? 1 : M < 500 ? 2 : M < 526 ? 3 : M < 533 ? 4 : M < 534 ? "4+" : M < 535 ? 5 : M < 537 ? 6 : M < 538 ? 7 : M < 601 ? 8 : M < 602 ? 9 : M < 604 ? 10 : M < 606 ? 11 : M < 608 ? 12 : "12");
                        } else {
                            _ && (_[1] = "like Chrome");
                            M = M[1] || (M = M[0], M < 530 ? 1 : M < 532 ? 2 : M < 532.05 ? 3 : M < 533 ? 4 : M < 534.03 ? 5 : M < 534.07 ? 6 : M < 534.1 ? 7 : M < 534.13 ? 8 : M < 534.16 ? 9 : M < 534.24 ? 10 : M < 534.3 ? 11 : M < 535.01 ? 12 : M < 535.02 ? "13+" : M < 535.07 ? 15 : M < 535.11 ? 16 : M < 535.19 ? 17 : M < 536.05 ? 18 : M < 536.1 ? 19 : M < 537.01 ? 20 : M < 537.11 ? "21+" : M < 537.13 ? 23 : M < 537.18 ? 24 : M < 537.24 ? 25 : M < 537.36 ? 26 : _ != "Blink" ? "27" : "28");
                        }
                        _ && (_[1] += " " + (M += typeof M == "number" ? ".x" : /[.+]/.test(M) ? "" : "+"));
                        if (R == "Safari" && (!B || parseInt(B) > 45)) {
                            B = M;
                        } else if (R == "Chrome" && /\bHeadlessChrome/i.test(e)) {
                            P.unshift("headless");
                        }
                    }
                    if (R == "Opera" && (M = /\bzbov|zvav$/.exec(T))) {
                        R += " ";
                        P.unshift("desktop mode");
                        if (M == "zvav") {
                            R += "Mini";
                            B = null;
                        } else {
                            R += "Mobile";
                        }
                        T = T.replace(RegExp(" *" + M + "$"), "");
                    } else if (R == "Safari" && /\bChrome\b/.exec(_ && _[1])) {
                        P.unshift("desktop mode");
                        R = "Chrome Mobile";
                        B = null;
                        if (/\bOS X\b/.test(T)) {
                            I = "Apple";
                            T = "iOS 4.3+";
                        } else {
                            T = null;
                        }
                    } else if (/\bSRWare Iron\b/.test(R) && !B) {
                        B = getVersion("Chrome");
                    }
                    if (B && B.indexOf(M = /[\d.]+$/.exec(T)) == 0 && e.indexOf("/" + M + "-") > -1) {
                        T = trim(T.replace(M, ""));
                    }
                    if (T && T.indexOf(R) != -1 && !RegExp(R + " OS").test(T)) {
                        T = T.replace(RegExp(" *" + qualify(R) + " *"), "");
                    }
                    if (_ && !/\b(?:Avant|Nook)\b/.test(R) && (/Browser|Lunascape|Maxthon/.test(R) || R != "Safari" && /^iOS/.test(T) && /\bSafari\b/.test(_[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(R) && _[1])) {
                        (M = _[_.length - 1]) && P.push(M);
                    }
                    if (P.length) {
                        P = [
                            "(" + P.join("; ") + ")"
                        ];
                    }
                    if (I && A && A.indexOf(I) < 0) {
                        P.push("on " + I);
                    }
                    if (A) {
                        P.push((/^on /.test(P[P.length - 1]) ? "" : "on ") + A);
                    }
                    if (T) {
                        M = / ([\d.+]+)$/.exec(T);
                        W = M && T.charAt(T.length - M[0].length - 1) == "/";
                        T = {
                            architecture: 32,
                            family: M && !W ? T.replace(M[0], "") : T,
                            version: M ? M[1] : null,
                            toString: function() {
                                var e = this.version;
                                return this.family + (e && !W ? " " + e : "") + (this.architecture == 64 ? " 64-bit" : "");
                            }
                        };
                    }
                    if ((M = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(E)) && !/\bi686\b/i.test(E)) {
                        if (T) {
                            T.architecture = 64;
                            T.family = T.family.replace(RegExp(" *" + M), "");
                        }
                        if (R && (/\bWOW64\b/i.test(e) || k && /\w(?:86|32)$/.test(n.cpuClass || n.platform) && !/\bWin64; x64\b/i.test(e))) {
                            P.unshift("32-bit");
                        }
                    } else if (T && /^OS X/.test(T.family) && R == "Chrome" && parseFloat(B) >= 39) {
                        T.architecture = 64;
                    }
                    e || (e = null);
                    var F = {};
                    F.description = e;
                    F.layout = _ && _[0];
                    F.manufacturer = I;
                    F.name = R;
                    F.prerelease = C;
                    F.product = A;
                    F.ua = e;
                    F.version = R && B;
                    F.os = T || {
                        architecture: null,
                        family: null,
                        version: null,
                        toString: function() {
                            return "null";
                        }
                    };
                    F.parse = parse;
                    F.toString = toStringPlatform;
                    if (F.version) {
                        P.unshift(B);
                    }
                    if (F.name) {
                        P.unshift(R);
                    }
                    if (T && R && !(T == String(T).split(" ")[0] && (T == R.split(" ")[0] || A))) {
                        P.push(A ? "(" + T + ")" : "on " + T);
                    }
                    if (P.length) {
                        F.description = P.join(" ");
                    }
                    return F;
                }
                var d = parse();
                if (n && o) {
                    forOwn(d, function(e, i) {
                        n[i] = e;
                    });
                } else {
                    r.platform = d;
                }
            }).call(this);
        }
    };
    var i = {};
    function __nccwpck_require__(t) {
        var r = i[t];
        if (r !== undefined) {
            return r.exports;
        }
        var a = i[t] = {
            id: t,
            loaded: false,
            exports: {}
        };
        var n = true;
        try {
            e[t].call(a.exports, a, a.exports, __nccwpck_require__);
            n = false;
        } finally{
            if (n) delete i[t];
        }
        a.loaded = true;
        return a.exports;
    }
    (()=>{
        __nccwpck_require__.nmd = (e)=>{
            e.paths = [];
            if (!e.children) e.children = [];
            return e;
        };
    })();
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var t = __nccwpck_require__(541);
    module.exports = t;
})();
}}),
"[project]/node_modules/next/dist/compiled/css.escape/css.escape.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
(()=>{
    var e = {
        553: function(e) {
            (function(r, t) {
                if ("TURBOPACK compile-time truthy", 1) {
                    e.exports = t(r);
                } else {}
            })(typeof global != "undefined" ? global : this, function(e) {
                if (e.CSS && e.CSS.escape) {
                    return e.CSS.escape;
                }
                var cssEscape = function(e) {
                    if (arguments.length == 0) {
                        throw new TypeError("`CSS.escape` requires an argument.");
                    }
                    var r = String(e);
                    var t = r.length;
                    var n = -1;
                    var a;
                    var i = "";
                    var u = r.charCodeAt(0);
                    while(++n < t){
                        a = r.charCodeAt(n);
                        if (a == 0) {
                            i += "�";
                            continue;
                        }
                        if (a >= 1 && a <= 31 || a == 127 || n == 0 && a >= 48 && a <= 57 || n == 1 && a >= 48 && a <= 57 && u == 45) {
                            i += "\\" + a.toString(16) + " ";
                            continue;
                        }
                        if (n == 0 && t == 1 && a == 45) {
                            i += "\\" + r.charAt(n);
                            continue;
                        }
                        if (a >= 128 || a == 45 || a == 95 || a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122) {
                            i += r.charAt(n);
                            continue;
                        }
                        i += "\\" + r.charAt(n);
                    }
                    return i;
                };
                if (!e.CSS) {
                    e.CSS = {};
                }
                e.CSS.escape = cssEscape;
                return cssEscape;
            });
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var n = r[t];
        if (n !== undefined) {
            return n.exports;
        }
        var a = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t].call(a.exports, a, a.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var t = __nccwpck_require__(553);
    module.exports = t;
})();
}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/maintain--tab-focus.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/maintain--tab-focus.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/body-locker.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/body-locker.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/Overlay.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/Overlay.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/index.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/compiled/anser/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
(()=>{
    "use strict";
    var e = {
        211: (e)=>{
            var r = function() {
                function defineProperties(e, r) {
                    for(var n = 0; n < r.length; n++){
                        var s = r[n];
                        s.enumerable = s.enumerable || false;
                        s.configurable = true;
                        if ("value" in s) s.writable = true;
                        Object.defineProperty(e, s.key, s);
                    }
                }
                return function(e, r, n) {
                    if (r) defineProperties(e.prototype, r);
                    if (n) defineProperties(e, n);
                    return e;
                };
            }();
            function _classCallCheck(e, r) {
                if (!(e instanceof r)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            var n = [
                [
                    {
                        color: "0, 0, 0",
                        class: "ansi-black"
                    },
                    {
                        color: "187, 0, 0",
                        class: "ansi-red"
                    },
                    {
                        color: "0, 187, 0",
                        class: "ansi-green"
                    },
                    {
                        color: "187, 187, 0",
                        class: "ansi-yellow"
                    },
                    {
                        color: "0, 0, 187",
                        class: "ansi-blue"
                    },
                    {
                        color: "187, 0, 187",
                        class: "ansi-magenta"
                    },
                    {
                        color: "0, 187, 187",
                        class: "ansi-cyan"
                    },
                    {
                        color: "255,255,255",
                        class: "ansi-white"
                    }
                ],
                [
                    {
                        color: "85, 85, 85",
                        class: "ansi-bright-black"
                    },
                    {
                        color: "255, 85, 85",
                        class: "ansi-bright-red"
                    },
                    {
                        color: "0, 255, 0",
                        class: "ansi-bright-green"
                    },
                    {
                        color: "255, 255, 85",
                        class: "ansi-bright-yellow"
                    },
                    {
                        color: "85, 85, 255",
                        class: "ansi-bright-blue"
                    },
                    {
                        color: "255, 85, 255",
                        class: "ansi-bright-magenta"
                    },
                    {
                        color: "85, 255, 255",
                        class: "ansi-bright-cyan"
                    },
                    {
                        color: "255, 255, 255",
                        class: "ansi-bright-white"
                    }
                ]
            ];
            var s = function() {
                r(Anser, null, [
                    {
                        key: "escapeForHtml",
                        value: function escapeForHtml(e) {
                            return (new Anser).escapeForHtml(e);
                        }
                    },
                    {
                        key: "linkify",
                        value: function linkify(e) {
                            return (new Anser).linkify(e);
                        }
                    },
                    {
                        key: "ansiToHtml",
                        value: function ansiToHtml(e, r) {
                            return (new Anser).ansiToHtml(e, r);
                        }
                    },
                    {
                        key: "ansiToJson",
                        value: function ansiToJson(e, r) {
                            return (new Anser).ansiToJson(e, r);
                        }
                    },
                    {
                        key: "ansiToText",
                        value: function ansiToText(e) {
                            return (new Anser).ansiToText(e);
                        }
                    }
                ]);
                function Anser() {
                    _classCallCheck(this, Anser);
                    this.fg = this.bg = this.fg_truecolor = this.bg_truecolor = null;
                    this.bright = 0;
                }
                r(Anser, [
                    {
                        key: "setupPalette",
                        value: function setupPalette() {
                            this.PALETTE_COLORS = [];
                            for(var e = 0; e < 2; ++e){
                                for(var r = 0; r < 8; ++r){
                                    this.PALETTE_COLORS.push(n[e][r].color);
                                }
                            }
                            var s = [
                                0,
                                95,
                                135,
                                175,
                                215,
                                255
                            ];
                            var i = function format(e, r, n) {
                                return s[e] + ", " + s[r] + ", " + s[n];
                            };
                            var t = void 0, o = void 0, a = void 0;
                            for(var l = 0; l < 6; ++l){
                                for(var c = 0; c < 6; ++c){
                                    for(var u = 0; u < 6; ++u){
                                        this.PALETTE_COLORS.push(i(l, c, u));
                                    }
                                }
                            }
                            var f = 8;
                            for(var h = 0; h < 24; ++h, f += 10){
                                this.PALETTE_COLORS.push(i(f, f, f));
                            }
                        }
                    },
                    {
                        key: "escapeForHtml",
                        value: function escapeForHtml(e) {
                            return e.replace(/[&<>]/gm, function(e) {
                                return e == "&" ? "&amp;" : e == "<" ? "&lt;" : e == ">" ? "&gt;" : "";
                            });
                        }
                    },
                    {
                        key: "linkify",
                        value: function linkify(e) {
                            return e.replace(/(https?:\/\/[^\s]+)/gm, function(e) {
                                return '<a href="' + e + '">' + e + "</a>";
                            });
                        }
                    },
                    {
                        key: "ansiToHtml",
                        value: function ansiToHtml(e, r) {
                            return this.process(e, r, true);
                        }
                    },
                    {
                        key: "ansiToJson",
                        value: function ansiToJson(e, r) {
                            r = r || {};
                            r.json = true;
                            r.clearLine = false;
                            return this.process(e, r, true);
                        }
                    },
                    {
                        key: "ansiToText",
                        value: function ansiToText(e) {
                            return this.process(e, {}, false);
                        }
                    },
                    {
                        key: "process",
                        value: function process(e, r, n) {
                            var s = this;
                            var i = this;
                            var t = e.split(/\033\[/);
                            var o = t.shift();
                            if (r === undefined || r === null) {
                                r = {};
                            }
                            r.clearLine = /\r/.test(e);
                            var a = t.map(function(e) {
                                return s.processChunk(e, r, n);
                            });
                            if (r && r.json) {
                                var l = i.processChunkJson("");
                                l.content = o;
                                l.clearLine = r.clearLine;
                                a.unshift(l);
                                if (r.remove_empty) {
                                    a = a.filter(function(e) {
                                        return !e.isEmpty();
                                    });
                                }
                                return a;
                            } else {
                                a.unshift(o);
                            }
                            return a.join("");
                        }
                    },
                    {
                        key: "processChunkJson",
                        value: function processChunkJson(e, r, s) {
                            r = typeof r == "undefined" ? {} : r;
                            var i = r.use_classes = typeof r.use_classes != "undefined" && r.use_classes;
                            var t = r.key = i ? "class" : "color";
                            var o = {
                                content: e,
                                fg: null,
                                bg: null,
                                fg_truecolor: null,
                                bg_truecolor: null,
                                clearLine: r.clearLine,
                                decoration: null,
                                was_processed: false,
                                isEmpty: function isEmpty() {
                                    return !o.content;
                                }
                            };
                            var a = e.match(/^([!\x3c-\x3f]*)([\d;]*)([\x20-\x2c]*[\x40-\x7e])([\s\S]*)/m);
                            if (!a) return o;
                            var l = o.content = a[4];
                            var c = a[2].split(";");
                            if (a[1] !== "" || a[3] !== "m") {
                                return o;
                            }
                            if (!s) {
                                return o;
                            }
                            var u = this;
                            u.decoration = null;
                            while(c.length > 0){
                                var f = c.shift();
                                var h = parseInt(f);
                                if (isNaN(h) || h === 0) {
                                    u.fg = u.bg = u.decoration = null;
                                } else if (h === 1) {
                                    u.decoration = "bold";
                                } else if (h === 2) {
                                    u.decoration = "dim";
                                } else if (h == 3) {
                                    u.decoration = "italic";
                                } else if (h == 4) {
                                    u.decoration = "underline";
                                } else if (h == 5) {
                                    u.decoration = "blink";
                                } else if (h === 7) {
                                    u.decoration = "reverse";
                                } else if (h === 8) {
                                    u.decoration = "hidden";
                                } else if (h === 9) {
                                    u.decoration = "strikethrough";
                                } else if (h == 39) {
                                    u.fg = null;
                                } else if (h == 49) {
                                    u.bg = null;
                                } else if (h >= 30 && h < 38) {
                                    u.fg = n[0][h % 10][t];
                                } else if (h >= 90 && h < 98) {
                                    u.fg = n[1][h % 10][t];
                                } else if (h >= 40 && h < 48) {
                                    u.bg = n[0][h % 10][t];
                                } else if (h >= 100 && h < 108) {
                                    u.bg = n[1][h % 10][t];
                                } else if (h === 38 || h === 48) {
                                    var p = h === 38;
                                    if (c.length >= 1) {
                                        var g = c.shift();
                                        if (g === "5" && c.length >= 1) {
                                            var v = parseInt(c.shift());
                                            if (v >= 0 && v <= 255) {
                                                if (!i) {
                                                    if (!this.PALETTE_COLORS) {
                                                        u.setupPalette();
                                                    }
                                                    if (p) {
                                                        u.fg = this.PALETTE_COLORS[v];
                                                    } else {
                                                        u.bg = this.PALETTE_COLORS[v];
                                                    }
                                                } else {
                                                    var d = v >= 16 ? "ansi-palette-" + v : n[v > 7 ? 1 : 0][v % 8]["class"];
                                                    if (p) {
                                                        u.fg = d;
                                                    } else {
                                                        u.bg = d;
                                                    }
                                                }
                                            }
                                        } else if (g === "2" && c.length >= 3) {
                                            var _ = parseInt(c.shift());
                                            var b = parseInt(c.shift());
                                            var y = parseInt(c.shift());
                                            if (_ >= 0 && _ <= 255 && b >= 0 && b <= 255 && y >= 0 && y <= 255) {
                                                var k = _ + ", " + b + ", " + y;
                                                if (!i) {
                                                    if (p) {
                                                        u.fg = k;
                                                    } else {
                                                        u.bg = k;
                                                    }
                                                } else {
                                                    if (p) {
                                                        u.fg = "ansi-truecolor";
                                                        u.fg_truecolor = k;
                                                    } else {
                                                        u.bg = "ansi-truecolor";
                                                        u.bg_truecolor = k;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (u.fg === null && u.bg === null && u.decoration === null) {
                                return o;
                            } else {
                                var T = [];
                                var m = [];
                                var w = {};
                                o.fg = u.fg;
                                o.bg = u.bg;
                                o.fg_truecolor = u.fg_truecolor;
                                o.bg_truecolor = u.bg_truecolor;
                                o.decoration = u.decoration;
                                o.was_processed = true;
                                return o;
                            }
                        }
                    },
                    {
                        key: "processChunk",
                        value: function processChunk(e, r, n) {
                            var s = this;
                            var i = this;
                            r = r || {};
                            var t = this.processChunkJson(e, r, n);
                            if (r.json) {
                                return t;
                            }
                            if (t.isEmpty()) {
                                return "";
                            }
                            if (!t.was_processed) {
                                return t.content;
                            }
                            var o = r.use_classes;
                            var a = [];
                            var l = [];
                            var c = {};
                            var u = function render_data(e) {
                                var r = [];
                                var n = void 0;
                                for(n in e){
                                    if (e.hasOwnProperty(n)) {
                                        r.push("data-" + n + '="' + s.escapeForHtml(e[n]) + '"');
                                    }
                                }
                                return r.length > 0 ? " " + r.join(" ") : "";
                            };
                            if (t.fg) {
                                if (o) {
                                    l.push(t.fg + "-fg");
                                    if (t.fg_truecolor !== null) {
                                        c["ansi-truecolor-fg"] = t.fg_truecolor;
                                        t.fg_truecolor = null;
                                    }
                                } else {
                                    a.push("color:rgb(" + t.fg + ")");
                                }
                            }
                            if (t.bg) {
                                if (o) {
                                    l.push(t.bg + "-bg");
                                    if (t.bg_truecolor !== null) {
                                        c["ansi-truecolor-bg"] = t.bg_truecolor;
                                        t.bg_truecolor = null;
                                    }
                                } else {
                                    a.push("background-color:rgb(" + t.bg + ")");
                                }
                            }
                            if (t.decoration) {
                                if (o) {
                                    l.push("ansi-" + t.decoration);
                                } else if (t.decoration === "bold") {
                                    a.push("font-weight:bold");
                                } else if (t.decoration === "dim") {
                                    a.push("opacity:0.5");
                                } else if (t.decoration === "italic") {
                                    a.push("font-style:italic");
                                } else if (t.decoration === "reverse") {
                                    a.push("filter:invert(100%)");
                                } else if (t.decoration === "hidden") {
                                    a.push("visibility:hidden");
                                } else if (t.decoration === "strikethrough") {
                                    a.push("text-decoration:line-through");
                                } else {
                                    a.push("text-decoration:" + t.decoration);
                                }
                            }
                            if (o) {
                                return '<span class="' + l.join(" ") + '"' + u(c) + ">" + t.content + "</span>";
                            } else {
                                return '<span style="' + a.join(";") + '"' + u(c) + ">" + t.content + "</span>";
                            }
                        }
                    }
                ]);
                return Anser;
            }();
            e.exports = s;
        }
    };
    var r = {};
    function __nccwpck_require__(n) {
        var s = r[n];
        if (s !== undefined) {
            return s.exports;
        }
        var i = r[n] = {
            exports: {}
        };
        var t = true;
        try {
            e[n](i, i.exports, __nccwpck_require__);
            t = false;
        } finally{
            if (t) delete r[n];
        }
        return i.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var n = __nccwpck_require__(211);
    module.exports = n;
})();
}}),
"[project]/node_modules/next/dist/shared/lib/magic-identifier.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    MAGIC_IDENTIFIER_REGEX: null,
    decodeMagicIdentifier: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MAGIC_IDENTIFIER_REGEX: function() {
        return MAGIC_IDENTIFIER_REGEX;
    },
    decodeMagicIdentifier: function() {
        return decodeMagicIdentifier;
    }
});
function decodeHex(hexStr) {
    if (hexStr.trim() === '') {
        throw new Error("can't decode empty hex");
    }
    const num = parseInt(hexStr, 16);
    if (isNaN(num)) {
        throw new Error("invalid hex: `" + hexStr + "`");
    }
    return String.fromCodePoint(num);
}
var Mode;
const DECODE_REGEX = /^__TURBOPACK__([a-zA-Z0-9_$]+)__$/;
function decodeMagicIdentifier(identifier) {
    const matches = identifier.match(DECODE_REGEX);
    if (!matches) {
        return identifier;
    }
    const inner = matches[1];
    let output = '';
    let mode = 0;
    let buffer = '';
    for(let i = 0; i < inner.length; i++){
        const char = inner[i];
        if (mode === 0) {
            if (char === '_') {
                mode = 1;
            } else if (char === '$') {
                mode = 2;
            } else {
                output += char;
            }
        } else if (mode === 1) {
            if (char === '_') {
                output += ' ';
                mode = 0;
            } else if (char === '$') {
                output += '_';
                mode = 2;
            } else {
                output += char;
                mode = 0;
            }
        } else if (mode === 2) {
            if (buffer.length === 2) {
                output += decodeHex(buffer);
                buffer = '';
            }
            if (char === '_') {
                if (buffer !== '') {
                    throw new Error("invalid hex: `" + buffer + "`");
                }
                mode = 3;
            } else if (char === '$') {
                if (buffer !== '') {
                    throw new Error("invalid hex: `" + buffer + "`");
                }
                mode = 0;
            } else {
                buffer += char;
            }
        } else if (mode === 3) {
            if (char === '_') {
                throw new Error("invalid hex: `" + (buffer + char) + "`");
            } else if (char === '$') {
                output += decodeHex(buffer);
                buffer = '';
                mode = 0;
            } else {
                buffer += char;
            }
        }
    }
    return output;
}
const MAGIC_IDENTIFIER_REGEX = /__TURBOPACK__[a-zA-Z0-9_$]+__/g; //# sourceMappingURL=magic-identifier.js.map
}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/hot-linked-text/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/hot-linked-text/index.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-open-in-editor.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-open-in-editor.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-open-in-editor.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/EditorLink.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/EditorLink.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/Terminal.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/Terminal.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/index.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/styles.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/VersionStalenessInfo.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/VersionStalenessInfo.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/VersionStalenessInfo.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/index.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/BuildError.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/BuildError.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/LeftRightDialogHeader.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/LeftRightDialogHeader.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/styles.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/index.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/styles.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/Toast.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/Toast.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/index.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/index.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/group-stack-frames-by-framework.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/group-stack-frames-by-framework.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/CallStackFrame.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/CallStackFrame.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/CollapseIcon.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/CollapseIcon.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/FrameworkIcon.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/FrameworkIcon.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/GroupedStackFrames.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/GroupedStackFrames.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/index.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/component-stack-pseudo-html.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/component-stack-pseudo-html.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/copy-button/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/copy-button/index.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/nodejs-inspector.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/nodejs-inspector.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/console-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/console-error.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/Errors.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/container/Errors.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/Base.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/Base.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/styles.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/styles.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/styles.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/ComponentStyles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/ComponentStyles.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/CssReset.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/CssReset.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/pages/client.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/client/components/react-dev-overlay/pages/client.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/client/components/react-dev-overlay/pages/client.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/client/index.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/client/index.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/client/index.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/compiled/strip-ansi/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
(()=>{
    "use strict";
    var e = {
        511: (e)=>{
            e.exports = ({ onlyFirst: e = false } = {})=>{
                const r = [
                    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
                    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
                ].join("|");
                return new RegExp(r, e ? undefined : "g");
            };
        },
        532: (e, r, _)=>{
            const t = _(511);
            e.exports = (e)=>typeof e === "string" ? e.replace(t(), "") : e;
        }
    };
    var r = {};
    function __nccwpck_require__(_) {
        var t = r[_];
        if (t !== undefined) {
            return t.exports;
        }
        var a = r[_] = {
            exports: {}
        };
        var n = true;
        try {
            e[_](a, a.exports, __nccwpck_require__);
            n = false;
        } finally{
            if (n) delete r[_];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var _ = __nccwpck_require__(532);
    module.exports = _;
})();
}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/format-webpack-messages.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/format-webpack-messages.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/server/dev/extract-modules-from-turbopack-message.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "extractModulesFromTurbopackMessage", {
    enumerable: true,
    get: function() {
        return extractModulesFromTurbopackMessage;
    }
});
function extractModulesFromTurbopackMessage(data) {
    const updatedModules = new Set();
    const updates = Array.isArray(data) ? data : [
        data
    ];
    for (const update of updates){
        // TODO this won't capture changes to CSS since they don't result in a "merged" update
        if (update.type !== 'partial' || update.instruction.type !== 'ChunkListUpdate' || update.instruction.merged === undefined) {
            continue;
        }
        for (const mergedUpdate of update.instruction.merged){
            for (const name of Object.keys(mergedUpdate.entries)){
                const res = /(.*)\s+\[.*/.exec(name);
                if (res === null) {
                    console.error('[Turbopack HMR] Expected module to match pattern: ' + name);
                    continue;
                }
                updatedModules.add(res[1]);
            }
        }
    }
    return [
        ...updatedModules
    ];
} //# sourceMappingURL=extract-modules-from-turbopack-message.js.map
}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/runtime-error-handler.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/runtime-error-handler.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/components/react-dev-overlay/pages/hot-reloader-client.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/client/components/react-dev-overlay/pages/hot-reloader-client.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/client/components/react-dev-overlay/pages/hot-reloader-client.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/client/dev/hot-middleware-client.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/dev/hot-middleware-client.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/dev/on-demand-entries-client.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/dev/on-demand-entries-client.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/dev/dev-build-watcher.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/dev/dev-build-watcher.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/dev/fouc.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/dev/fouc.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/client/page-bootstrap.js [client] (ecmascript)": (() => {{

throw new Error("An error occurred while generating the chunk item [project]/node_modules/next/dist/client/page-bootstrap.js [client] (ecmascript)\n\nCaused by:\n- the chunking context (unknown) does not support external modules (request: node:process)\n\nDebug info:\n- An error occurred while generating the chunk item [project]/node_modules/next/dist/client/page-bootstrap.js [client] (ecmascript)\n- Execution of *EcmascriptChunkItemContent::module_factory failed\n- Execution of *EcmascriptChunkItemContent::new failed\n- Execution of EcmascriptModuleContent::new failed\n- Execution of <EsmAssetReference as CodeGenerateable>::code_generation failed\n- the chunking context (unknown) does not support external modules (request: node:process)");

}}),
"[project]/node_modules/next/dist/client/next-dev-turbopack.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/dist/client/next-dev-turbopack.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/node_modules/next/dist/pages/_app.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return App;
    }
});
const _interop_require_default = (()=>{
    const e = new Error("Cannot find module '@swc/helpers/_/_interop_require_default'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _jsxruntime = __turbopack_require__("[project]/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/react/index.js [client] (ecmascript)"));
const _utils = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/utils.js [client] (ecmascript)");
/**
 * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
 * This allows for keeping state between navigation, custom error handling, injecting additional data.
 */ async function appGetInitialProps(param) {
    let { Component, ctx } = param;
    const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
        pageProps
    };
}
class App extends _react.default.Component {
    render() {
        const { Component, pageProps } = this.props;
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            ...pageProps
        });
    }
}
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=_app.js.map
}}),
"[project]/node_modules/next/app.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/node_modules/next/app.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/node_modules/next/app.js [client] (ecmascript)\" } [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
const PAGE_PATH = "/_app";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_require__("[project]/node_modules/next/app.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__32cbad._.js.map