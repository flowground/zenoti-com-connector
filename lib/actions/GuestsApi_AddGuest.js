/**
 * Auto-generated action file for "Zenoti Open" API.
 *
 * Generated at: 2019-05-07T14:45:07.554Z
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
 * Operation: 'GuestsApi_AddGuest'
 * Endpoint Path: '/v1/guests'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "ApiKey",
    "Authorization"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "ApiKey": "ApiKey",
    "Authorization": "Authorization",
    "AllowDuplicateEmail": "AllowDuplicateEmail",
    "CenterId": "CenterId",
    "Address1": "Address1",
    "Address2": "Address2",
    "AnniversaryDate": "AnniversaryDate",
    "CenterCode": "CenterCode",
    "CenterName": "CenterName",
    "City": "City",
    "Code": "Code",
    "Id": "Id",
    "Name": "Name",
    "Nationality": "Nationality",
    "PhoneCode": "PhoneCode",
    "Country": "Country",
    "CreationDate": "CreationDate",
    "DOB_IncompleteYear": "DOB_IncompleteYear",
    "DateOfBirth": "DateOfBirth",
    "Email": "Email",
    "FirstName": "FirstName",
    "Gender": "Gender",
    "GuestIndicator": "GuestIndicator",
    "HomePhone": "HomePhone",
    "CountryId": "CountryId",
    "DisplayNumber": "DisplayNumber",
    "Number": "Number",
    "HomePhoneModel": "HomePhoneModel",
    "IsMember": "IsMember",
    "LastName": "LastName",
    "LastUpdated": "LastUpdated",
    "MergeIntoCode": "MergeIntoCode",
    "MergeIntoGuestId": "MergeIntoGuestId",
    "MiddleName": "MiddleName",
    "MobileNumber": "MobileNumber",
    "MobilePhoneModel": "MobilePhoneModel",
    "PostalCode": "PostalCode",
    "ReceiveMarketingEmail": "ReceiveMarketingEmail",
    "ReceiveMarketingSms": "ReceiveMarketingSms",
    "ReceiveTransactionalEmail": "ReceiveTransactionalEmail",
    "ReceiveTransactionalSms": "ReceiveTransactionalSms",
    "ReferralSource": "ReferralSource",
    "ReferredGuestId": "ReferredGuestId",
    "ShortName": "ShortName",
    "State": "State",
    "Guest": "Guest",
    "Validate": "Validate",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = cfg.body_content_type;

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
        operationId: 'GuestsApi_AddGuest',
        pathName: '/v1/guests',
        method: 'post',
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