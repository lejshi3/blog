// .eleventy.js
export default function(eleventyConfig) {
  // Watch CSS files for changes
  eleventyConfig.setBrowserSyncConfig({
	  files: './_site/css/**/*.css'
	});  
  
  // Add date filter
  eleventyConfig.addFilter("formatDateTime", function(date) {
    const dt = new Date(date);
    console.log(date)
    const year = dt.getFullYear();
    const month = String(dt.getMonth() + 1).padStart(2, '0');
    const day = String(dt.getDate()).padStart(2, '0');
    const hours = String(dt.getHours()).padStart(2, '0');
    const minutes = String(dt.getMinutes()).padStart(2, '0');
    
    return `${year}.${month}.${day} @ ${hours}:${minutes}`;
  });

  // Copy img directory
  eleventyConfig.addPassthroughCopy({ "content/img": "img" });

  // Ignore directories
  eleventyConfig.ignores.add("dist/**");
  eleventyConfig.ignores.add("src/**");

  return {
    dir: {
      input: "_content",    
      output: "_site",
      layouts: "../_layouts"
    },
    permalinkBypassOutputDir: true,
    permalink: "{{ page.filePathStem }}.html"
  };
};