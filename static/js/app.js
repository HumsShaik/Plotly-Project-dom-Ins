console.log("app.js loaded");

// the code in these files is based on Dom's office hours

function InitDashboard(){
    console.log("InitDashboard()");

    // Populate the dropdown
    var selector = d3.select("#selDataset");


    // read data from samples.json and use this data to populate the dropdown
    d3.json("data/samples.json").then(data => {
		console.log(data);


        var sampleNames = data.names;

        sampleNames.forEach(sampleId => {
            selector.append("option")
               .text(sampleId)
               .property("value", sampleId);
        });


    });

    // Update the bargraph
    // Updadate the bubblechart
    // Update the demographic informaation


   





}

InitDashboard();

