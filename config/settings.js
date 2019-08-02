const path = require("path")
module.exports = {
    //build settings
    bundleName: "bundle",
    bundleDirectory: "build",
    //library settings
    libraryDirectory: "lib",
    libraryFileName: "library",
    libraryName: "Libary",
    includeReactInBundle: false,
    includeReduxInBundle: false,
    apiProxyUrl: "https://localhost:4000",
    // Resolution paths, add paths here to avoid relative path hell for imports!
    resolvePaths: {
        alias: {
            "@utils": path.resolve(__dirname, "../src/utils")
        }
    }
}
