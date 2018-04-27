/**
 * make css loader
 *
 * @param useCssModules
 * @param includeNodeModules
 * @param excludeNodeModules
 * @returns {{test: RegExp, use: *[]}}
 */
module.exports = (useCssModules = !1, includeNodeModules = !1, excludeNodeModules = !1) => {

    let loader = {
        test: /\.css$/,
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
                options: {
                    modules: useCssModules
                }
            }
        ]
    };
    includeNodeModules && (loader.include = /node_modules/);
    excludeNodeModules && (loader.exclude = /node_modules/);

    return loader;
};
