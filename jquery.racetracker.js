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
    graph: function() {
      try {
        // uploadData(settings);
        data = formatFormData($('tr.race'));
      } catch(e) {
        console.log(e);
      }
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
              formatString: '%b %#d, %y',
            },
          yaxis: {
            label: 'Results'
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
      $.error( 'Method ' +  method + ' does not exist in racetracker' );
    }    
  
  };

})(jQuery);

function uploadData(settings) {
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
      $rows = $('.race');
      formatFormData();
      break;
  }

  // validate
  //validateData();

  // save to data 
}

function validateData() { 

}

function formatFormData($form) {
  var data = [];
  $form.each(function() {
    var hours = $(this).find('.hours').val();
    var minutes = $(this).find('.minutes').val();
    var seconds = $(this).find('.seconds').val();

    minutes += hours * 60;
    seconds = (seconds*100)/60;

    var time = minutes+'.'+seconds;
    alert(time);
    var race = [
      $(this).find('.date').val(),
      time,
      $(this).find('.name').val()
    ];
    data.push(race);
  });

  return data;
}