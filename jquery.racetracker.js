(function($){
  var settings = {
    normalize: true, // normalize the values to one distance
    normalizeDistance: '3.1', // 1, 3.1, 6.2, 13.1, 26.2 (in miles for now)
    formula: true, // some other day i'll add more formulae
    distanceType: 'miles', // miles, km
    dataSource: 'form', // form, csv, json
    formMap: {
      name: 'name',
      date: 'date',
      hours: 'hours',
      minutes: 'minutes',
      seconds: 'seconds',
      distance: 'distance' 
    }, // false if it's not form, or array
    dataFile: '.', // if it's form, blank, but otherwise location in tree?
  };

  var data = [];

  var methods = {
    init: function(options) { 
      return this.each(function(){
        if (options) { 
          $.extend(settings, options);
        }         
        var $this = $(this),
           data = $this.data('racetracker'),
           racetracker = $('<div />', {
             text : $this.attr('title')
           });

        // If the plugin hasn't been initialized yet
        if (!data) {
         $(this).data('racetracker', {
             target : $this,
             racetracker : racetracker
         });

         settings.id = $this.attr('id');
        }
      });
    },
    uploadData: function( ) {
      // get data
      var precheckData = '';

      // get data source
      switch(settings.dataSource) {
        case 'csv':
          var file = settings.dataFile;
          break;
        case 'json':
          var file = settings.dataFile;
          break;
        case 'form':
        default:
          formatFormData();
          break;
      }

      // validate
      //validateData();

      // save to data 
    },
    validateData: function( ) { 

    },
    formatFormData: function() {
      $('.race').each(function() {
        var time = $(this).find('.hours').val() + ':' +
                   $(this).find('.minutes').val() + ':' + 
                   $(this).find('.seconds').val();
        var race = [
          $(this).find('.date').val(),
          time,
          $(this).find('.name').val()
        ];
        data.push(race);
        console.log('format '+data);
      });
    },
    
    graph: function() {
      try {
        formatFormData();
      } catch(e) {
        console.log(e);
      }
      console.log('graph'+data);
      return false;
      $.jqplot(settings.id,[data], {
        seriesDefaults: { 
          pointLabels:{ show:true, location:'s', ypadding:3 }
        },
        axes: {
          xaxis: {
            label: 'Race Dates',
            renderer: $.jqplot.DateAxisRenderer,
            numberTicks: 4,
            tickOptions: {
              formatString:'%b&nbsp;%#d',
            }
          }
        },
        highlighter: {
          show: true,
          sizeAdjust: 7.5
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