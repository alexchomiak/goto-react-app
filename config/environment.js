//environment constants
const ENV_VARS = {
    ENV_VARIABLE: "This is an environment variable! :)"
}

// ---------- prep data for injection
for (var key in ENV_VARS) {
    ENV_VARS[key] = JSON.stringify(ENV_VARS[key]) // stringify all values
}

module.exports = ENV_VARS
