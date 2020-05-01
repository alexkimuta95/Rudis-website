$(document).ready(function (){
  jQuery('#ourSkillsDiv').one('inview', function (event, visible) {
    if (visible == true) {
      //Enjoy !
      var opts = {
        angle: -0.3, // The span of the gauge arc
        lineWidth: 0.2, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
          length: 0.4, // // Relative to gauge radius
          strokeWidth: 0.038, // The thickness
          color: '#000000' // Fill color
        },
        limitMax: true,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#6320EE',    // just experiment with them
        strokeColor: '#E0E0E0',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,   // High resolution support
        staticZones: [
          {strokeStyle: "#6320EE", min: 0, max: 100}, // Red from 100 to 130
       ]
      };

      var opts1 = {
        angle: -0.4, // The span of the gauge arc
        lineWidth: 0.2, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
          length: 0.4, // // Relative to gauge radius
          strokeWidth: 0.038, // The thickness
          color: '#000000' // Fill color
        },
        limitMax: true,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#6320EE',    // just experiment with them
        strokeColor: '#E0E0E0',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,   // High resolution support
        staticZones: [
          {strokeStyle: "#6320EE", min: 0, max: 100}, // Red from 100 to 130
          {strokeStyle: "#FFDD00", min: 101, max: 120} // Yellow
       ]
      };

      

      var guage = new Gauge(document.getElementById("gauge"));
      guage.setOptions(opts);
      guage.setTextField(document.getElementById("guage-value"));
      guage.maxValue = 100;
      guage.animationSpeed = 350;  
      guage.set(96);

      var guage1 = new Gauge(document.getElementById("gauge1"));
      guage1.setOptions(opts);
      guage1.setTextField(document.getElementById("gauge-value1"));
      guage1.maxValue = 100;
      guage1.animationSpeed = 350;  
      guage1.set(86);

      var guage2 = new Gauge(document.getElementById("gauge2"));
      guage2.setOptions(opts);
     guage2.setTextField(document.getElementById("gauge-value2"));
      guage2.animationSpeed = 350;  
      guage2.maxValue = 100;
      guage2.set(78);

      var guage3 = new Gauge(document.getElementById("gauge3"));
      guage3.setOptions(opts);
      guage3.setTextField(document.getElementById("gauge-value3"));
      guage3.animationSpeed = 350;  
      guage3.maxValue = 100;
      guage3.set(60);

      var guage4 = new Gauge(document.getElementById("common-sense"));
      guage4.setOptions(opts1);
      guage4.setTextField(document.getElementById("common-sense-value"));
    
      guage4.maxValue = 110;
      guage4.animationSpeed = 350;  
      guage4.set(110);
    }
});
  
})