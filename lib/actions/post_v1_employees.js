/**
 * Auto-generated action file for "Zenoti Open" API.
 *
 * Generated at: 2019-05-07T14:45:07.545Z
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
 * Endpoint Path: '/v1/employees'
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
    "Authorization"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "Authorization": "Authorization",
    "AccessCode": "AccessCode",
    "AccessEmployeeMobileApp": "AccessEmployeeMobileApp",
    "AccessManagerMobileApp": "AccessManagerMobileApp",
    "AllowApiAccess": "AllowApiAccess",
    "AllowOfflineAccess": "AllowOfflineAccess",
    "WaiveBiometricCheckin": "WaiveBiometricCheckin",
    "AccessInfo": "AccessInfo",
    "AdditionalField1": "AdditionalField1",
    "AdditionalField2": "AdditionalField2",
    "AddressLine1": "AddressLine1",
    "AddressLine2": "AddressLine2",
    "AnniversaryDate": "AnniversaryDate",
    "BirthDate": "BirthDate",
    "CenterId": "CenterId",
    "CityName": "CityName",
    "Code": "Code",
    "CountryId": "CountryId",
    "Password": "Password",
    "UserName": "UserName",
    "Credentials": "Credentials",
    "Email": "Email",
    "FirstName": "FirstName",
    "FullName": "FullName",
    "Gender": "Gender",
    "HomePhone": "HomePhone",
    "DisplayNumber": "DisplayNumber",
    "Number": "Number",
    "HomePhoneModel": "HomePhoneModel",
    "Id": "Id",
    "IsAvailable": "IsAvailable",
    "IsConsultant": "IsConsultant",
    "CompanyName": "CompanyName",
    "DesignationId": "DesignationId",
    "EligibleForCommissionBonus": "EligibleForCommissionBonus",
    "EndDate": "EndDate",
    "HourlyRate": "HourlyRate",
    "JobId": "JobId",
    "MandatoryBreakMinutesPerDay": "MandatoryBreakMinutesPerDay",
    "MaximumWorkHours": "MaximumWorkHours",
    "RequestTherapistBonus": "RequestTherapistBonus",
    "Salary": "Salary",
    "SpecialLeaveDays": "SpecialLeaveDays",
    "StartDate": "StartDate",
    "TargetRevenue": "TargetRevenue",
    "TenureStartDate": "TenureStartDate",
    "VacationDays": "VacationDays",
    "Job": "Job",
    "Keyword": "Keyword",
    "LastName": "LastName",
    "MiddleName": "MiddleName",
    "MobilePhoneModel": "MobilePhoneModel",
    "NickName": "NickName",
    "PhoneNumber": "PhoneNumber",
    "CultureId": "CultureId",
    "ReceiveDailyReports": "ReceiveDailyReports",
    "ReceiveMarketingEmails": "ReceiveMarketingEmails",
    "ReceiveMarketingTextMessages": "ReceiveMarketingTextMessages",
    "ReceiveRegisterClosureReports": "ReceiveRegisterClosureReports",
    "ReceiveTransactionalEmails": "ReceiveTransactionalEmails",
    "ReceiveTransactionalTextMessages": "ReceiveTransactionalTextMessages",
    "SearchTags": "SearchTags",
    "SendConfirmationForAppointments": "SendConfirmationForAppointments",
    "Preferences": "Preferences",
    "ScaledPrice": "ScaledPrice",
    "ScalingFactor": "ScalingFactor",
    "ServiceTime": "ServiceTime",
    "ShortName": "ShortName",
    "StateId": "StateId",
    "StateOther": "StateOther",
    "VanityImageUrl": "VanityImageUrl",
    "WorkPhone": "WorkPhone",
    "WorkPhoneModel": "WorkPhoneModel",
    "EmployeeDetail": "EmployeeDetail",
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
        pathName: '/v1/employees',
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