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
    // Resolution paths, add paths here to avoid relative path hell!
    resolvePaths: {
        alias: {
            "@utils": path.resolve(__dirname, "../src/utils")
        }
    }
}
