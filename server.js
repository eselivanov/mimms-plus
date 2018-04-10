var https = require('https');

var request = require('request');

var events = require('events');

var fetch = require('node-fetch');

var express = require('express');

var Promise = require('bluebird');

var rp = require('request-promise');

var path = require('path');



var app = express();

var port = process.env.port || 3000;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";  //for HTTPS access





var mimmsRouter = express.Router();

app.use('/mimms',mimmsRouter);







var name = '';

var practitioner_name = '';

var careplan_name = '';

var practitioner_data = '';

var careplan_practitioner_data = '';

var careplan_data = '';

var careplan_clinic_data = '';

var careplan_client_data = '';

var patient_data_oiid = '';

var patient_data_clientid = '';

var practitioner_info = '';



app.use(express.static(path.join(__dirname, '/dist')));

app.get('/*', function(req, res) {

        res.sendFile(path.join(__dirname + '/dist/index.html')); // load the single view file (angular will handle the page changes on the front-end)

    });





function Practitioner(){

    

        mimmsRouter.route('/Practitioner').post( (req, res) => {

            practitioner_name = req.headers.panorama_user;

            

            var practitioner_url = 'https://panmfp.panorama.dev.ehealthontario.ca:9049/phdp/fhir/Practitioner/_search?identifier='+practitioner_name;

            request.get({

                        headers:{'Authorization':'Bearer eyJhbGciOiJIUzUxMiIsInZlciI6IjEuMC4wIiwidHlwIjoiSldUIn0.eyJleHAiOjE1NTE4MTc5MDksInN1YiI6Ik1pbGEuTmlrdWxpbmFAb25laWQub24uY2EiLCJpc3MiOiJQSERQOlRva2VuIiwiYXVkIjoiUEhEUDptSU1NUyIsImp0aSI6IjUzYjM5NDBkLThhMjgtNGFlMS05NmRhLTEyZGUzZWRiNDViOSIsImlhdCI6MTUyMDI4MTkwOX0.iffoZHZTW0zf-hi-zi7JuDOP9Y8mumpIK0cylQ_3FRXINP6judaIIVFQl8t12WwHPnOyrsdK2wZaIoRCfImh8Q',

                                 'Accept':'application/json'

                                },

                        uri: practitioner_url

                        }, 

                        (err, test, body) => {

                            if(err)

                            {

                                return console.log(err);

                            }

        

                            careplan_practitioner_data = JSON.parse(body);

                            res.send(careplan_practitioner_data);

                            

                });

        });      

}



function CarePlan(){



        mimmsRouter.route('/CarePlan').post( (req,res) => {

            careplan_name = req.headers.panorama_user;

            

            var mimmsPractitionerUrl = 'http://127.0.0.1:3000/mimms/Practitioner'

            request.post({

                headers:{'panorama_user':careplan_name},

                uri: mimmsPractitionerUrl

                }, 

                (err, test, body) => {

                    if(err)

                    {

                        return console.log(err);

                    }



                    careplan_practitioner_data = JSON.parse(body);

                    var practitioner_org_id = careplan_practitioner_data.contained[0].identifier[0].value;



                    var careplanSearch_url = 'https://panmfp.panorama.dev.ehealthontario.ca:9049/phdp/fhir/CarePlan/_search?organization.identifier='+practitioner_org_id;

                    request.get({

                            headers:{'Authorization':'Bearer eyJhbGciOiJIUzUxMiIsInZlciI6IjEuMC4wIiwidHlwIjoiSldUIn0.eyJleHAiOjE1NTE4MTc5MDksInN1YiI6Ik1pbGEuTmlrdWxpbmFAb25laWQub24uY2EiLCJpc3MiOiJQSERQOlRva2VuIiwiYXVkIjoiUEhEUDptSU1NUyIsImp0aSI6IjUzYjM5NDBkLThhMjgtNGFlMS05NmRhLTEyZGUzZWRiNDViOSIsImlhdCI6MTUyMDI4MTkwOX0.iffoZHZTW0zf-hi-zi7JuDOP9Y8mumpIK0cylQ_3FRXINP6judaIIVFQl8t12WwHPnOyrsdK2wZaIoRCfImh8Q',

                                     'Accept':'application/json'

                                    },

                            uri: careplanSearch_url

                            }, 

                            (err, test, body) => {

                                if(err)

                                {

                                    return console.log(err);

                                }

            

                                careplan_clinic_data = JSON.parse(body);

                                res.send(careplan_clinic_data);  

                            }

                    );  

            });

        });

}



function ClientList(){



    mimmsRouter.route('/CarePlan/:clinic_id?').post( (req,res) => {



        var identifier = req.params.clinic_id;

        var careplanId_url = 'https://panmfp.panorama.dev.ehealthontario.ca:9049/phdp/fhir/CarePlan/'+identifier;

        request.get({

                headers:{'Authorization':'Bearer eyJhbGciOiJIUzUxMiIsInZlciI6IjEuMC4wIiwidHlwIjoiSldUIn0.eyJleHAiOjE1NTE4MTc5MDksInN1YiI6Ik1pbGEuTmlrdWxpbmFAb25laWQub24uY2EiLCJpc3MiOiJQSERQOlRva2VuIiwiYXVkIjoiUEhEUDptSU1NUyIsImp0aSI6IjUzYjM5NDBkLThhMjgtNGFlMS05NmRhLTEyZGUzZWRiNDViOSIsImlhdCI6MTUyMDI4MTkwOX0.iffoZHZTW0zf-hi-zi7JuDOP9Y8mumpIK0cylQ_3FRXINP6judaIIVFQl8t12WwHPnOyrsdK2wZaIoRCfImh8Q',

                         'Accept':'application/json'

                        },

                uri: careplanId_url

                }, 

                (err, test, body) => {

                    if(err)

                    {

                        return console.log(err);

                    }



                    careplan_client_data = JSON.parse(body);

                    res.send(careplan_client_data);  

                }

        );  

    });

}



function PatientOiid(){



    mimmsRouter.route('/Patient/oiid/:oiid?').post( (req,res) => {



        var oiid = req.params.oiid;

        var patient_url = `https://panmfp.panorama.dev.ehealthontario.ca:9049/phdp/fhir/Patient/download?identifier=${oiid}`;

        

        console.log(patient_url);

        request.get({

            headers:{'Authorization':'Bearer eyJhbGciOiJIUzUxMiIsInZlciI6IjEuMC4wIiwidHlwIjoiSldUIn0.eyJleHAiOjE1NTE4MTc5MDksInN1YiI6Ik1pbGEuTmlrdWxpbmFAb25laWQub24uY2EiLCJpc3MiOiJQSERQOlRva2VuIiwiYXVkIjoiUEhEUDptSU1NUyIsImp0aSI6IjUzYjM5NDBkLThhMjgtNGFlMS05NmRhLTEyZGUzZWRiNDViOSIsImlhdCI6MTUyMDI4MTkwOX0.iffoZHZTW0zf-hi-zi7JuDOP9Y8mumpIK0cylQ_3FRXINP6judaIIVFQl8t12WwHPnOyrsdK2wZaIoRCfImh8Q',

                     'Accept':'application/json'

                    },

            uri: patient_url

            }, 

            (err, test, body) => {

                if(err)

                {

                    return console.log(err);

                }



                patient_data_oiid = body;

                res.send(patient_data_oiid);  

            });

    });

}



function PatientClientid(){



    mimmsRouter.route('/Patient/clientid/:clientid?').post( (req,res) => {



        var clientid = req.params.clientid;

        var patient_url = 'https://panmfp.panorama.dev.ehealthontario.ca:9049/phdp/fhir/Patient/'+clientid;

        

        console.log(patient_url);

        request.get({

            headers:{'Authorization':'Bearer eyJhbGciOiJIUzUxMiIsInZlciI6IjEuMC4wIiwidHlwIjoiSldUIn0.eyJleHAiOjE1NTE4MTc5MDksInN1YiI6Ik1pbGEuTmlrdWxpbmFAb25laWQub24uY2EiLCJpc3MiOiJQSERQOlRva2VuIiwiYXVkIjoiUEhEUDptSU1NUyIsImp0aSI6IjUzYjM5NDBkLThhMjgtNGFlMS05NmRhLTEyZGUzZWRiNDViOSIsImlhdCI6MTUyMDI4MTkwOX0.iffoZHZTW0zf-hi-zi7JuDOP9Y8mumpIK0cylQ_3FRXINP6judaIIVFQl8t12WwHPnOyrsdK2wZaIoRCfImh8Q',

                     'Accept':'application/json'

                    },

            uri: patient_url

            }, 

            (err, test, body) => {

                if(err)

                {

                    return console.log(err);



                }



                patient_data_clientid = body;

                res.send(patient_data_clientid);  

            });

    });

}



Practitioner();

CarePlan();

ClientList();

PatientOiid();

PatientClientid();



app.listen(port, function(){

    console.log("Server started at port: "+port);

});

