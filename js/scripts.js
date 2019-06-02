// Bakerloo status
$.getJSON ('https://api.tfl.gov.uk/Line/bakerloo/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statusbakerloo = value.lineStatuses[0].statusSeverityDescription;
  console.log(statusbakerloo);

  $('.statusbakerloo').text(statusbakerloo);

  if (statuswaterloo != "Good Service") {
    $('.statuswaterloo').css('color', 'red')
  }
    });
});

// Central status
$.getJSON ('https://api.tfl.gov.uk/Line/central/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statuscentral = value.lineStatuses[0].statusSeverityDescription;
  console.log(statuscentral);

  $('.statuscentral').text(statuscentral);

  if (statuscentral != "Good Service") {
    $('.statuscentral').css('color', 'red')
  }
    });
});

// Circle status
$.getJSON ('https://api.tfl.gov.uk/Line/circle/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statuscircle = value.lineStatuses[0].statusSeverityDescription;
  console.log(statuscircle);

  $('.statuscircle').text(statuscircle);

  if (statuscircle != "Good Service") {
    $('.statuscircle').css('color', 'red')
  }
    });
});

// District status
$.getJSON ('https://api.tfl.gov.uk/Line/district/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statusdistrict = value.lineStatuses[0].statusSeverityDescription;
  console.log(statusdistrict);

  $('.statusdistrict').text(statusdistrict);

  if (statusdistrict != "Good Service") {
    $('.statusdistrict').css('color', 'red')
  }
    });
});

// Hammersmith status
$.getJSON ('https://api.tfl.gov.uk/Line/hammersmith-city/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statushammersmith = value.lineStatuses[0].statusSeverityDescription;
  console.log(statushammersmith);

  $('.statushammersmith').text(statushammersmith);

  if (statushammersmith != "Good Service") {
    $('.statushammersmith').css('color', 'red')
  }
    });
});

// Jubilee status
$.getJSON ('https://api.tfl.gov.uk/Line/jubilee/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statusjubilee = value.lineStatuses[0].statusSeverityDescription;
  console.log(statusjubilee);

  $('.statusjubilee').text(statusjubilee);

  if (statusjubilee != "Good Service") {
    $('.statusjubilee').css('color', 'red')
  }
    });
});

// Metropolitan status
$.getJSON ('https://api.tfl.gov.uk/Line/metropolitan/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statusmetropolitan = value.lineStatuses[0].statusSeverityDescription;
  console.log(statusmetropolitan);

  $('.statusmetropolitan').text(statusmetropolitan);

  if (statusmetropolitan != "Good Service") {
    $('.statusmetropolitan').css('color', 'red')
  }
    });
});

// Northern status
$.getJSON ('https://api.tfl.gov.uk/Line/northern/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statusnorthern = value.lineStatuses[0].statusSeverityDescription;
  console.log(statusnorthern);

  $('.statusnorthern').text(statusnorthern);

  if (statusnorthern != "Good Service") {
    $('.statusnorthern').css('color', 'red')
  }
    });
});

// Overground status
$.getJSON ('https://api.tfl.gov.uk/Line/london-overground/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statusoverground = value.lineStatuses[0].statusSeverityDescription;
  console.log(statusoverground);

  $('.statusoverground').text(statusoverground);

  if (statusoverground != "Good Service") {
    $('.statusoverground').css('color', 'red')
  }
    });
});

// Piccadilly status
$.getJSON ('https://api.tfl.gov.uk/Line/piccadilly/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statuspiccadilly = value.lineStatuses[0].statusSeverityDescription;
  console.log(statuspiccadilly);

  $('.statuspiccadilly').text(statuspiccadilly);

  if (statuspiccadilly != "Good Service") {
    $('.statuspiccadilly').css('color', 'red')
  }
    });
});

// Victoria status
$.getJSON ('https://api.tfl.gov.uk/Line/victoria/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statusvictoria = value.lineStatuses[0].statusSeverityDescription;
  console.log(statusvictoria);

  $('.statusvictoria').text(statusvictoria);

  if (statusvictoria != "Good Service") {
    $('.statusvictoria').css('color', 'red')
  }
    });
});

// Waterloo & City status
$.getJSON ('https://api.tfl.gov.uk/Line/waterloo-city/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statuswaterloo = value.lineStatuses[0].statusSeverityDescription;
  console.log(statuswaterloo);

  $('.statuswaterloo').text(statuswaterloo);

  if (statuswaterloo != "Good Service") {
    $('.statuswaterloo').css('color', 'red')
  }

    });
});

// DLR status
$.getJSON ('https://api.tfl.gov.uk/Line/dlr/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statusdlr = value.lineStatuses[0].statusSeverityDescription;
  console.log(statusdlr);

  $('.statusdlr').text(statusdlr);

  if (statusdlr != "Good Service") {
    $('.statusdlr').css('color', 'red')
  }
    });
});

// Tfl Rail status
$.getJSON ('https://api.tfl.gov.uk/Line/tfl-rail/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statusrail = value.lineStatuses[0].statusSeverityDescription;
  console.log(statusrail);

  $('.statusrail').text(statusrail);

  if (statusrail != "Good Service") {
    $('.statusrail').css('color', 'red')
  }
    });
});

// Tram status
$.getJSON ('https://api.tfl.gov.uk/Line/tram/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660', function(data) { console.log(data);

$.each(data, function (index, value) {
  console.log(value);

  var statustram = value.lineStatuses[0].statusSeverityDescription;
  console.log(statustram);

  $('.statustram').text(statustram);

  if (statustram != "Good Service") {
    $('.statustram').css('color', 'red')
  }
    });
});
