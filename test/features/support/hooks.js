
// Import the Before function
const { Before, After, AfterAll } = require('cucumber')

var { setDefaultTimeout } = require('cucumber');

setDefaultTimeout(48 * 1000);

Before(function () {
})

After(function (scenaio) {
    // console.log(`[INFO][${(scenaio.result.duration) / 1000000}s][${scenaio.result.status}] ${scenaio.pickle.name}`);
});
