const extend = require('../lib/extend');

module.exports = [
    {
        zigbeeModel: ['ZB-CL01'],
        model: 'ZN323128_01',
        vendor: 'KURVIA',
        description: '[Tuya Zigbee 3.0 GU10 5W RGBCW](https://pl.aliexpress.com/item/1005003423312571.html)',
        meta: {enhancedHue: false},
        extend: extend.light_onoff_brightness_colortemp_color({disableColorTempStartup: true, colorTempRange: [250, 454]}),
    },
];
