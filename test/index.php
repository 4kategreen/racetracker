<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>racetracker tests</title>
  <link rel="stylesheet" href="qunit.css">
  <script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
  <script src="../../jquery.jqplot.min.js"></script>
	<script src="../../jqplot.dateAxisRenderer.min.js"></script>
	<script src="../../jqplot.cursor.min.js"></script>
	<script src="../../jqplot.highlighter.min.js"></script>
	<script src="../jquery.racetracker.js"></script>
	<script src="../../race_tracker.js"></script>
</head>
<body>
  <div id="qunit"></div>
  <div id="qunit-fixture">
  	<script>
  		$('#racetracker').racetracker();
  	</script>
  	<div id="racetracker"></div>
  </div>
  <script src="qunit.js"></script>
  <script src="tests.js"></script>
</body>
</html>