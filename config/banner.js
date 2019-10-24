const webpack = require("webpack")
const os = require("os")
module.exports = new webpack.BannerPlugin(
    [
        "----------------------------------------------------------------------------------------------",

        "          GGGGGGGGGGGGG                          tttt",
        "       GGG:::::::::::: G                       ttt::: t",
        "     GG::::::::::::::: G                       t::::: t",
        "    G::::: GGGGGGGG:::: G                       t::::: t",
        "   G::::: G       GGGGGG   ooooooooooo   ttttttt::::: ttttttt       ooooooooooo",
        "  G::::: G               oo::::::::::: oo t::::::::::::::::: t     oo::::::::::: oo",
        "  G::::: G              o::::::::::::::: ot::::::::::::::::: t    o::::::::::::::: o",
        "  G::::: G    GGGGGGGGGGo::::: ooooo::::: otttttt::::::: tttttt    o::::: ooooo::::: o",
        "  G::::: G    G:::::::: Go:::: o     o:::: o      t::::: t          o:::: o     o:::: o",
        "  G::::: G    GGGGG:::: Go:::: o     o:::: o      t::::: t          o:::: o     o:::: o",
        "  G::::: G        G:::: Go:::: o     o:::: o      t::::: t          o:::: o     o:::: o",
        "   G::::: G       G:::: Go:::: o     o:::: o      t::::: t    tttttto:::: o     o:::: o",
        "    G::::: GGGGGGGG:::: Go::::: ooooo::::: o      t:::::: tttt::::: to::::: ooooo::::: o",
        "     GG::::::::::::::: Go::::::::::::::: o      tt:::::::::::::: to::::::::::::::: o",
        "       GGG:::::: GGG::: G oo::::::::::: oo         tt::::::::::: tt oo::::::::::: oo",
        "          GGGGGG   GGGG   ooooooooooo             ttttttttttt     ooooooooooo   ",
        "----------------------------------------------------------------------------------------------",
        "",
        "                          GoTo React App Bundle File",
        `            Compiled on ${new Date().toLocaleString()}, on a ${os.type()} machine`,
        "",
        "**********************************************************************************************",
        "React Application Built Using GoTo React App 2019",
        "GoTo React App is a boiler plate React Utility built by Alex Chomiak.",
        "It beginner friendly and more robust than create-react-app,",
        "the repo can be found at https://github.com/alexchomiak/goto-react-app.",
        "A star on the repo would be appreciated! :)",
        "",
        "Also for the wandering eye, follow me on github @ https://github.com/alexchomiak/",
        "**********************************************************************************************"
    ].join("\n")
)
