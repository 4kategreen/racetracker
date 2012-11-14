(function( $ ){
  var settings = {
    normalize = true, // normalize the values to one distance
    normalizeDistance = '3.1' // 1, 3.1, 6.2, 13.1, 26.2 (in miles for now)
    formula = true, // some other day i'll add more formulae
    distanceType = 'miles', // miles, km
  };

  var methods = {
    init: function(options) { 
      
    },
    uploadData: function( ) {
      // IS
    },
    validateData: function( ) { 
      // GOOD
    },
    graph: function(content) { 
      // !!! 
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