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
	},
	{
        title: 'Setup',
        collapsable: false,
        children: [
         "/setup/", "/setup/configuration", "/setup/re-core", "/setup/re-mote",
         "/setup/re-gent", "/setup/re-dock" , "/setup/re-pack"
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
