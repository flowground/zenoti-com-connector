/**
 * Auto-generated action file for "Zenoti Open" API.
 *
 * Generated at: 2019-05-07T14:45:07.535Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / zenoti-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/v1/appointments/alternatives'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "actual_completed_time": "actual_completed_time",
    "actual_start_time": "actual_start_time",
    "alternative_room_id": "alternative_room_id",
    "alternative_therapist_id": "alternative_therapist_id",
    "appointment_group_id": "appointment_group_id",
    "appointment_id": "appointment_id",
    "appointment_progress": "appointment_progress",
    "appointment_segment_id": "appointment_segment_id",
    "appointment_source": "appointment_source",
    "available_rooms": "available_rooms",
    "available_therapists": "available_therapists",
    "category": "category",
    "checkin_time": "checkin_time",
    "employee_vanity_image_url": "employee_vanity_image_url",
    "end_date": "end_date",
    "form_id": "form_id",
    "first_name": "first_name",
    "gender": "gender",
    "id": "id",
    "indicator": "indicator",
    "last_name": "last_name",
    "country_id": "country_id",
    "displaynumber": "displaynumber",
    "number": "number",
    "phone": "phone",
    "guest": "guest",
    "invoice_id": "invoice_id",
    "locked": "locked",
    "notes": "notes",
    "CurrencyId": "CurrencyId",
    "Discount": "Discount",
    "Final": "Final",
    "Final1": "Final1",
    "RoundingCorrection": "RoundingCorrection",
    "SSG": "SSG",
    "Sales": "Sales",
    "Tax": "Tax",
    "Tip": "Tip",
    "price": "price",
    "name": "name",
    "service": "service",
    "service_custom_data_indicator": "service_custom_data_indicator",
    "start_date": "start_date",
    "status": "status",
    "sub_category": "sub_category",
    "therapist": "therapist",
    "therapist_preference_type": "therapist_preference_type",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['API_Key'] = {username: cfg.username, password: cfg.password};;

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/v1/appointments/alternatives',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}