module.exports = {

    publicPath: process.env.NODE_ENV === 'production'
        ? '/demo/mqtt-marker'
        : '/',
    
    pages: {

        index: {
            
            entry: 'src/main.js',
            
            template: 'public/index.html',
            
            filename: 'index.html',
            
            title: 'MQTT Marker',
            
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    }
}