
basic.optimization = {
    splitChunks: {
        cacheGroups: {
            vendor: {
                chunks: 'all',
                name: 'draftjs',
                test: /draft-js|react-dom/, //直接写module名
            }
        }
    }
}
