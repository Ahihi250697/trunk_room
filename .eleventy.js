module.exports = function(eleventyConfig){
    eleventyConfig.setUseGitIgnore(false);
    return {
        dir: {
            input: 'source/11ty',
            output: 'source/site',
            includes: 'includes',
            layouts: "layouts",
            data: 'data'
        }
    }
        
}