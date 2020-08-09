// .vuepress/config.js
module.exports = {
  base :"/re-docs/",
  themeConfig: {
    nav: [ ],
    sidebarDepth : 2,
    displayAllHeaders: true,
    sidebar:[
      {
	 title: 'Basics',
	 collapsable:false,
   	 children  : ["/"]
	}, {
	title: 'Quickstart',
        collapsable: false,
        children: [
         "/quickstart/"
        ]
	}, {
        title: 'Configuration',
        collapsable: false,
        children: [
         "/configuration/", "/configuration/common", "/configuration/re-core", "/configuration/re-mote",
         "/configuration/re-gent", "/configuration/re-dock" , "/configuration/re-pack"
        ]
      }, {
        title: 'Usage',
        collapsable: false,
        children: [
         "/usage/"
        ]
      }, {
        title: 'Architecture',
        collapsable: false,
        children: [
         "/architecture/"
        ]
      }
    ]
  }
}
