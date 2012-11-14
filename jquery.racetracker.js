(function($){
  var settings = {
    normalize: true, // normalize the values to one distance
    normalizeDistance: '3.1', // 1, 3.1, 6.2, 13.1, 26.2 (in miles for now)
    formula: true, // some other day i'll add more formulae
    distanceType: 'miles', // miles, km
    dataSource: 'form', // form, csv, json
    dataLocation: '.', // if it's form, blank, but otherwise location in tree?
    graphId: 'racetracker' //this.attr('id')
  };

  var data = [['20-Jun-2012',26.27],['30-Jun-2012',25.25],['14-Jul-2012',25.21]];

  var methods = {
    init: function(options) { 
      if (options) { 
        $.extend(settings, options);
      }
    },
    uploadData: function( ) {
      // get data source

      // get data
      var precheckData = '';

      // validate
      this.validateData();

      // save to data 
      precheckData.each(function() {
        data.push(this);
      });
    },
    validateData: function( ) { 
      // GOOD
    },
    graph: function() { 
      $.jqplot(settings.graphId,[data], {
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
    list: function() {

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