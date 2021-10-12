module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("./src/style/index.css")
    eleventyConfig.addWatchTarget("./src/style/index.css")
    eleventyConfig.addPassthroughCopy("./src/img")
    
    return{

        dir:{

            input: "src",
            output: "public"
        }
        
    }
}