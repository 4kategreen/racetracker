(function( $ ){
  var settings = {
    normalize = true, // normalize the values to one distance
    normalizeDistance = '3.1' // 1, 3.1, 6.2, 13.1, 26.2 (in miles for now)
    formula = true, // some other day i'll add more formulae
    distanceType = 'miles', // miles, km
    dataSource = 'form', // form, csv, json
    dataLocation = '.', // if it's form, blank, but otherwise location in tree?
    graphId = 'graph'
  };

  var data = [];

  var methods = {
    init: function(options) { 
      
    },
    uploadData: function( ) {
      // get data source

      // get data
      var precheckData = '';

      // validate
      this.validateData();

      // save to data 
      precheckData.each(function() {
        data.push(this.);
      });
    },
    validateData: function( ) { 
      // GOOD
    },
    graph: function(content) { 
      $.jqplot(graphId,[data], {
        axes: {
          xaxis: {
            label: 'Race Dates',
            renderer: $.jqplot.DateAxisRenderer,
            numberTicks: 4,
            tickOptions: {
              formatString:'%b&nbsp;%#d',
            }
          }
        }
      })
    },
    list: function(content) {

    },
    clear: function() {

    }
  };

  $.fn.racetracker = function(method) {

    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.racetracker' );
    }    
  
  };

})(jQuery);