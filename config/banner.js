/*
 * File: /config/banner.js
 * File Created: Wednesday, 23rd October 2019 10:24:47 pm
 * Author: Alex Chomiak
 *
 * Last Modified: Wednesday, 13th November 2019 7:26:15 pm
 * Modified By: Alex Chomiak 
 *
 * Author Github: https://github.com/alexchomiak
 */

const webpack = require('webpack')
const os = require('os')
module.exports = new webpack.BannerPlugin(
  [
    '----------------------------------------------------------------------------------------------',

    '          GGGGGGGGGGGGG                          tttt',
    '       GGG:::::::::::: G                       ttt::: t',
    '     GG::::::::::::::: G                       t::::: t',
    '    G::::: GGGGGGGG:::: G                       t::::: t',
    '   G::::: G       GGGGGG   ooooooooooo   ttttttt::::: ttttttt       ooooooooooo',
    '  G::::: G               oo::::::::::: oo t::::::::::::::::: t     oo::::::::::: oo',
    '  G::::: G              o::::::::::::::: ot::::::::::::::::: t    o::::::::::::::: o',
    '  G::::: G    GGGGGGGGGGo::::: ooooo::::: otttttt::::::: tttttt    o::::: ooooo::::: o',
    '  G::::: G    G:::::::: Go:::: o     o:::: o      t::::: t          o:::: o     o:::: o',
    '  G::::: G    GGGGG:::: Go:::: o     o:::: o      t::::: t          o:::: o     o:::: o',
    '  G::::: G        G:::: Go:::: o     o:::: o      t::::: t          o:::: o     o:::: o',
    '   G::::: G       G:::: Go:::: o     o:::: o      t::::: t    tttttto:::: o     o:::: o',
    '    G::::: GGGGGGGG:::: Go::::: ooooo::::: o      t:::::: tttt::::: to::::: ooooo::::: o',
    '     GG::::::::::::::: Go::::::::::::::: o      tt:::::::::::::: to::::::::::::::: o',
    '       GGG:::::: GGG::: G oo::::::::::: oo         tt::::::::::: tt oo::::::::::: oo',
    '          GGGGGG   GGGG   ooooooooooo             ttttttttttt     ooooooooooo   ',
    '----------------------------------------------------------------------------------------------',
    '',
    '                          GoTo React App Bundle File',
    `            Compiled on ${new Date().toLocaleString()}, on a ${os.type()} machine`,
    '',
    '**********************************************************************************************',
    `               React Application Built Using GoTo React App (c)${new Date().getFullYear()}`,
    '       GoTo React App is a boiler plate React Utility built by Alex Chomiak.',
    '       It beginner friendly and more robust than create-react-app,',
    '       the repo can be found at https://github.com/alexchomiak/goto-react-app.',
    '       A star on the repo would be appreciated! :)',
    '',
    '               A CLI is available for you to get started using it right away via npm!',
    '',
    '                   Just run the command:',
    '                   ****  npm install -g goto-react-app',
    '',
    '                   And to get started with a boiler plate project run:',
    '                   ****  goto-react-app <project-name>',
    '',
    '                   Happy coding! :)',
    '                   *** ( Full Guide is on the Repo ) ***',
    '',
    'Also for the wandering eye, follow me on github @ https://github.com/alexchomiak/',
    '**********************************************************************************************',
  ].join('\n')
)
