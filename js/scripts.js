$.getJSON ('https://api.tfl.gov.uk/Line/Mode/tube%2Cdlr%2Coverground%2Ctflrail/Status?detail=false&app_id=2f02d1e2&app_key=d5546d678eb40a02b7828e0959089660',
  function(data) {

    const badServices = data.filter(dataItem => dataItem.lineStatuses[0].statusSeverityDescription !== 'Good Service');

    const listContent = badServices
      .map(service => {
        const serviceName = service.name.toLowerCase().replace(" ", "-");
        return `<div class="tube-layout"><span class="${serviceName}"></span><h2 class="tube-title">${service.name}</h2><h3 class="status-color">${service.lineStatuses[0].statusSeverityDescription}</h3></div>`
      });

    $(".list").html(listContent);
})
