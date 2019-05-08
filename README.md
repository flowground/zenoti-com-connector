# ![LOGO](logo.png) Zenoti Open **flow**ground Connector

## Description

A generated **flow**ground connector for the Zenoti Open API (version 1.0.0).

Generated from: https://api.apis.guru/v2/specs/zenoti.com/1.0.0/swagger.json<br/>
Generated at: 2019-05-07T17:45:07+03:00

## API Description

Zenoti Open APIs now help you manage the powerful capabilities offered through a suite of Open APIs. 



## Authorization

Supported authorization schemes:
- OAuth2
- Basic Authentication

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Get details of package

> Returns details of a package

*Tags:* `Packages`

#### Input Parameters
* `centerId` - _required_ - DataType: UniqueIdentifier(GUID)

### x_restlet_packages__packageId_

#### Input Parameters
* `packageId` - _required_ - DataType: UniqueIdentifier(GUID)

### /v1/Catalog/Appointments/AvailableTimes

> Returns the open slots for the requested date and service at the requested center. <br/>
> Optionally, you can request a specific therapist to perform a service. In this case, the API returns the available slots for that therapist.<br/>
> <br/>
> To get the slots, one has to request the following:<br/>
> <br/>
> | Key | Type | Description |<br/>
> | -------- | -------- | -------- |<br/>
> |  RequiredSlotsCount | int| No of Slots you would like to request |<br/>
> |  CenterId `*` | GUID | Unique Identifier of a Center |<br/>
> |  CenterDate `*` | YYYY-MM-DDThh:mm:ssZ| Date of the availability you would like to check |<br/>
> |  SlotBookings `*` |Array of *`slotBooking`* object| Service id has to be passed inside SlotBookings object. Service Id is mandatory. Optionally, you can pass Therapist Id too. For more details, refer to *'SlotBooking'* object |<br/>
> <br/>
> <br/>
> Note: Fields marked with  `*` are Mandatory. <br/>
> <br/>
> Example Request:<br/>
> <br/>
> ```<br/>
> {<br/>
>  "CenterId":"3af2cf2e-9d36-45ca-84bc-eb7a7ee4be0e",<br/>
>  "CenterDate":"2017-10-25",<br/>
>  "SlotBookings":[<br/>
>  {<br/>
>    "Services":[{<br/>
>      "Service":{<br/>
>        "Id":"ac3589f0-f3a0-4772-b2c5-f6e1c81312db"<br/>
>      },<br/>
>       "RequestedTherapist": {<br/>
>                         "Id": "1a08e842-77c8-49b4-9d42-336c2dea4c0b"<br/>
>      	<br/>
>      }<br/>
>    }]<br/>
>  }]<br/>
> }<br/>
> ```

*Tags:* `Appointments - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Appointments_AvailableTimes

### /v1/Catalog/Appointments/ConfirmReservation

> Returns the confirmed reservation.<br/>
> <br/>
> Request body parameters:<br/>
> <br/>
> | Fields | Value type | Description |<br/>
> | -------- | -------- |  -------- |<br/>
> | ReservationNotes  | string     | Optional Notes at the time of confirmation<br/>
> | ApplyAutomaticMembership     | bool     | Set it to 'true' if you want to apply membership<br/>
> | CenterId `*`    | GUID     | Unique Identifier of the center<br/>
> | ReservationId  `*`   | GUID     | Unique Identifier of the Reservation from the ReserveSlots API Response<br/>
> | BookingSource   | Enum - `Store = 0,Mobile = 1,Web = 2 `    | Source of the API caller<br/>
> <br/>
> <br/>
> Note: Fields marked with `*` are mandatory.

*Tags:* `Appointments - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Appointments_ConfirmReservation

### /v1/Catalog/Appointments/ReserveSlots

> Reserves slots for the Appointment based on CenterId, CenterTime, GuestId, ServiceId and optionally, TherapistId.<br/>
> <br/>
> The following are the details of the request<br/>
> <br/>
> | key | Value type | Description |<br/>
> | -------- | -------- |  -------- |<br/>
> |CreateInvoice| boolean| Set this to 'true' if you want Invoice to be created |<br/>
> |  ForceApplyAutomaticMembership| boolean| Set this to 'true' if you want to apply membership of the user |<br/>
> |  CenterId `*` | GUID| Unique Identifier of the center |<br/>
> |  CenterTime `*` | YYYY-MM-DDThh:mm:ssZ| Your preferred time slot |<br/>
> |  ReservationNotes | string| Optional notes during the reservation |<br/>
> |  SlotBookings `*` |Array of *slotBooking* object| This must  contain ServiceId and GuestId. Refer to *slotBooking* for structure. You can optionally pass TherapistId<br/>
> <br/>
> Note: Fields marked with `*` are mandatory.<br/>
> <br/>
> Example Request : <br/>
> ```<br/>
> {<br/>
>   "CreateInvoice": true,<br/>
>   "ForceApplyAutomaticMembership": true,<br/>
>  "CenterId":"3af2cf2e-9d36-45ca-84bc-eb7a7ee4be0e",<br/>
>  "CenterTime": "2017-09-27T17:00:00",<br/>
>  "SlotBookings":[<br/>
>  {<br/>
>    "GuestId": "e08a1e29-29b5-4757-abd6-6ed0a09b9f94",<br/>
>    "Services":[{<br/>
>      "Service":{<br/>
>        "Id":"ac3589f0-f3a0-4772-b2c5-f6e1c81312db"<br/>
>      },<br/>
>      "RequestTherapistGender":3,<br/>
>      "RequestedTherapist": {<br/>
>                         "Id": "1a08e842-77c8-49b4-9d42-336c2dea4c0b"<br/>
>      	<br/>
>      }<br/>
>    }]<br/>
>  }]<br/>
> }<br/>
> ```

*Tags:* `Appointments - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Appointments_ReserveSlots

### /v1/Catalog/Appointments/{AppointmentGroupId}/Feedback

> Gets Feedback for a AppointmentgroupId.

*Tags:* `Appointments - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### /v1/Catalog/Appointments/{AppointmentGroupId}/Feedback

> Creates Feedback for a AppointmentgroupId.

*Tags:* `Appointments - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Appointments__AppointmentGroupId__Feedback

#### Input Parameters
* `AppointmentGroupId` - _required_

### /v1/Catalog/Appointments/{AppointmentId}/AddOnService

> Adds an Add on service To an Existing Appointment of the user.

*Tags:* `Appointments - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Appointments__AppointmentId__AddOnService

#### Input Parameters
* `AppointmentId` - _required_

### /v1/Catalog/Appointments/{AppointmentId}/Cancel

> Changes the appointment status to cancelled and also returns a boolean for "IsCancelChargesApplied" feild.<br/>
> <br/>
> Appointment status("Status" feild) of cancelled is -1.<br/>
> <br/>
> |status|enum|<br/>
> | -------- | -------- |<br/>
> | NoShow | -2|<br/>
> |Cancelled | -1|<br/>
> |New | 0|<br/>
> |Closed | 1|<br/>
> |Checkin | 2|<br/>
> |Confirm | 4|<br/>
> | Break | 10|<br/>
> |NotSpecified | 11|<br/>
> |Available | 20|

*Tags:* `Appointments - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Appointments__AppointmentId__Cancel

#### Input Parameters
* `AppointmentId` - _required_

### /v1/Catalog/Appointments/{AppointmentId}/CustomData/Html

> Gets the Html form for a particular AppointmentId

*Tags:* `Appointments - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Appointments__AppointmentId__CustomData_Html

#### Input Parameters
* `AppointmentId` - _required_

### /v1/Catalog/Appointments/{AppointmentId}/HtmlCustomData

> Gets the Html form data for a particular AppointmentId

*Tags:* `Appointments - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### /v1/Catalog/Appointments/{AppointmentId}/HtmlCustomData

> Creates a Html form data for a particular AppointmentId

*Tags:* `Appointments - Catalog`

#### Input Parameters
* `AppointmentId` - _required_

### x_restlet_v1_Catalog_Appointments__AppointmentId__HtmlCustomData

#### Input Parameters
* `AppointmentId` - _required_

### /v1/Catalog/Appointments/{ReservationId}/CancelReservation

> Cancels a Reservation.

*Tags:* `Appointments - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Appointments__ReservationId__CancelReservation

#### Input Parameters
* `ReservationId` - _required_

### /v1/Catalog/Centers

> Gets the list of centers in the organization. Optionally, you can pass one or more Service Ids to see the Service-Specific centers that are available.

*Tags:* `Centers - Catalog`

#### Input Parameters
* `ServiceIds` - _optional_ - List of Service Ids given separately. Each Service Id is a unique identifier
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Centers

### /v1/Catalog/Centers/Organization

> Gets List of all the Centers in the Organization

*Tags:* `Centers - Catalog`

#### Input Parameters
* `CatalogEnabled` - _optional_
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Centers_Organization

### /v1/Catalog/Guests/CheckUserName

> Check if the guest is already existing in the system based on UserName. UserName is mandatory

*Tags:* `Guests - Catalog`

#### Input Parameters
* `userName` - _optional_
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Guests_CheckUserName

### /v1/Catalog/Guests/ForgottenPassword

> Get password reset link

*Tags:* `Guests - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Guests_ForgottenPassword

### /v1/Catalog/Guests/{GuestId}/CreditCardsOnFile

> Gets the Credit Cards on File for guest<br/>
> <br/>
> Transaction Form<br/>
> <br/>
> | Enum | Value | <br/>
> | -------- | -------- | <br/>
> | Web     | 1     |<br/>
> | WebStore     | 2     |<br/>
> | CheckWeb     | 4     |<br/>
> | Mobile     | 8     |<br/>
> | MobilePOS     | 16     |

*Tags:* `Guests - Catalog`

#### Input Parameters
* `GuestId` - _required_
* `CenterId` - _required_
* `TransactionForm` - _optional_
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Guests_Guest__GuestId__CreditCardsOnFile

#### Input Parameters
* `GuestId` - _required_

### /v1/Catalog/Guests/Memberships/{UserMembershipId}

> Get balance details of a User MembershipId

*Tags:* `Guests - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Guests_Guests_Memberships__UserMembershipId_

#### Input Parameters
* `UserMembershipId` - _required_

### /v1/Catalog/Guests/{GuestId}

> Obtain profile details of a guest user.

*Tags:* `Guests - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Guests_Guests__GuestId_

#### Input Parameters
* `GuestId` - _required_

### /v1/Catalog/Guests/Logout

> Delete a token on logout

*Tags:* `Guests - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Guests_Logout

### /v1/Catalog/Guests/LoyaltyPrograms

> Gets the Loyalty Programs that the guest possesses. Additionally, it fetches the following details of Loyalty Programs:<br/>
> | Id | Name | Balance |<br/>
> | -------- | -------- | -------- |<br/>
> | 61acbc7a-a37e-43ea-8a94-b1bf0aa6518e     | lp test     | 1987     |

### x_restlet_v1_Catalog_Guests_LoyaltyPrograms

### /v1/Catalog/Guests/LoyaltyPrograms/Summary

> Returns the summary of loyalty points of a guest. It contains the following:<br/>
> <br/>
> 1. Balance<br/>
> 1. TierName<br/>
> 1. StartDate<br/>
> 1. EnrollmentStatus<br/>
> 1. LPTierMaintainSpent<br/>
> 1. SpentTillNow<br/>
> 1. DowngradeDate<br/>
> 1. DirectEnrollment<br/>
> 1. ByPassDowngrade<br/>
> 1. RecentEnrollDate<br/>
> 1. PointsToSpendToStayInSameTierByDowngradeDate

### x_restlet_v1_Catalog_Guests_LoyaltyPrograms_Summary

### /v1/Catalog/Guests/LoyaltyPrograms/{ProgramId}

> Additional details of a particular Loyalty Program of a Guest by Program Id are returned, transaction wise.<br/>
> <br/>
> * GuestId<br/>
> * InvoiceId<br/>
> * AppGroupId(AppointmentGroupId)<br/>
> * CenterName<br/>
> * ByPassDowngrade<br/>
> * PointsDate<br/>
> * RedemptionFrom<br/>
> * RedemptionTo<br/>
> * CreateDate<br/>
> * Loyalty Program Details - Id, Name, Earned, Redeemed, Available

#### Input Parameters
* `ProgramId` - _required_

### x_restlet_v1_Catalog_Guests_LoyaltyPrograms__ProgramId_

#### Input Parameters
* `ProgramId` - _required_

### /v1/Catalog/Guests/PastAppointments

> To get the list of past bookings for the logged in guest

*Tags:* `Guests - Catalog`

#### Input Parameters
* `Page` - _optional_
* `Size` - _optional_
* `Sorters` - _optional_
* `Filters` - _optional_
* `startDate` - _optional_
* `endDate` - _optional_
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Guests_PastAppointments

### /v1/Catalog/Guests/Register

> Creates a new guest user account by providing the mandatory fields. First name and Last name are mandatory. According to your organization settings, email/phone number is mandatory to maintain uniqueness of the guest. Along side, the recent verificationId has to be passed in the request. CenterId is mandatory.<br/>
> <br/>
> The request contains the following:<br/>
> <br/>
> <br/>
> <br/>
> | Field | Value Type | Description |<br/>
> | -------- | -------- | -------- |<br/>
> | VerificationId   `*` | GUID     | VerificationId you get from OTP API<br/>
> | CenterId  `*`   | GUID     | Unique Identifier. Guest should register at a center<br/>
> | Guest   `*`  | `Guest Model` object     | FirstName, LastName, Gender, Mobile Number, Email, Password<br/>
> <br/>
> Fields marked with `*` are mandatory.<br/>
> <br/>
> Exapmle request : <br/>
> <br/>
> ```<br/>
> {<br/>
>   "VerificationId": "string",<br/>
>   "CenterId": "string",<br/>
>   "Guest": {<br/>
>     "FirstName": "string",<br/>
>     "LastName": "string",<br/>
>     "Email": "string",<br/>
>     "MobileNumber": "string",<br/>
>     "MobilePhoneModel": {<br/>
>       "CountryId": 0,<br/>
>       "Number": "string",<br/>
>       "DisplayNumber": "string"<br/>
>     },<br/>
>     "Gender": 0,<br/>
>     "DateOfBirth": "2017-09-13T04:48:01.773Z",<br/>
>     "AnniversaryDate": "2017-09-13T04:48:01.773Z",<br/>
>     "Address1": "string",<br/>
>     "Address2": "string",<br/>
>     "City": "string",<br/>
>     "PostalCode": "string",<br/>
>     "State": {<br/>
>       "Id": 0,<br/>
>       "Code": "string",<br/>
>       "Name": "string",<br/>
>       "ShortName": "string"<br/>
>     },<br/>
>     "Country": {<br/>
>       "Id": 0,<br/>
>       "Code": "string",<br/>
>       "Name": "string",<br/>
>       "PhoneCode": 0,<br/>
>       "Nationality": "string"<br/>
>     },<br/>
>     "Nationality": {<br/>
>       "Id": 0,<br/>
>       "Code": "string",<br/>
>       "Name": "string",<br/>
>       "PhoneCode": 0,<br/>
>       "Nationality": "string"<br/>
>     },<br/>
>     "ReferralSource": {<br/>
>       "Id": "string",<br/>
>       "Name": "string"<br/>
>     },<br/>
>     "ReferredGuestId": "string",<br/>
>     "ReceiveTransactionalSms": true,<br/>
>     "ReceiveMarketingEmail": true,<br/>
>     "ReceiveTransactionalEmail": true,<br/>
>     "ReceiveMarketingSms": true,<br/>
>     "DOB_IncompleteYear": "string",<br/>
>     "Password": "string",<br/>
>     "UserName": "string",<br/>
>   }<br/>
> }<br/>
> ```

*Tags:* `Guests - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Guests_Register

### /v1/Catalog/Guests/SendOtp

> Create OTP for a guest account verification<br/>
> <br/>
> Example Request : <br/>
> <br/>
> ```<br/>
> {<br/>
>   "Email": "string",<br/>
>   "Phone": {<br/>
>     "CountryId": 0,<br/>
>     "Number": "string",<br/>
>     "DisplayNumber": "string"<br/>
>   },<br/>
>   "CenterId": "string"<br/>
> }<br/>
> ```

*Tags:* `Guests - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Guests_SendOtp

### /v1/Catalog/Guests/UpcommingAppointments

> To get the list of future bookings for the logged in guest

*Tags:* `Guests - Catalog`

#### Input Parameters
* `Page` - _optional_
* `Size` - _optional_
* `Sorters` - _optional_
* `Filters` - _optional_
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Guests_UpcomingAppointments

### /v1/Catalog/Guests/Update

> Creates a new guest user account by providing an email address or through a Facebook sign-up.

*Tags:* `Guests - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Guests_Update

### /v1/Catalog/Guests/VerifyOtp

> Verify a guest account based on the generated OTP<br/>
> <br/>
> Example Request : <br/>
> <br/>
> ```<br/>
> {<br/>
>   "VerificationId": "string",<br/>
>   "OTP": "string",<br/>
>   "CenterId": "string"<br/>
> }<br/>
> ```

*Tags:* `Guests - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Guests_VerifyOtp

### /v1/Catalog/Invoices/ApplyCampaign

> Apply a Promo or Campaign given a Campaign Code

*Tags:* `Invoices - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Invoices_ApplyCampaign

### /v1/Catalog/Invoices/{InvoiceId}

> Returns the requested invoice details. {InvoiceId} is a Unique Identifier and is mandatory.

*Tags:* `Invoices - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Invoices__InvoiceId_

#### Input Parameters
* `InvoiceId` - _required_

### /v1/Catalog/Organization

> Gets Details of the Organization

*Tags:* `Organization - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Organization

### /v1/Catalog/Organization/Label

> Gets Labels of the Organization

*Tags:* `Organization - Catalog`

#### Input Parameters
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Organization_Label

### /v1/Catalog/Services

> Gets the list of all the services available in a specific center.<br/>
> If a service category is requested along, the services in that category are returned.

*Tags:* `Services - Catalog`

#### Input Parameters
* `CenterId` - _required_ - Unique Identifier of the Selected Center
* `page` - _optional_ - Page number of the results
* `size` - _optional_ - Number of results in each page
* `defaultPage` - _optional_
* `defaultSize` - _optional_
* `Sorters` - _optional_
* `filters` - _optional_
* `CategoryId` - _optional_ - Unique Identifier of the Category
* `SearchString` - _optional_
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Services

### /v1/Catalog/Services/Categories

> Gets the list of service categories that are used for grouping services into different areas such as hair or skin.<br/>
> You can request categories under a particular center or a particular parent category

*Tags:* `Services - Catalog`

#### Input Parameters
* `CenterId` - _optional_ - Unique Identifier of the center
* `parentCategoryId` - _optional_ - Unqiue Identifier of Parent Category
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Services_Categories

### /v1/Catalog/Services/{ServiceId}

> Gets detailed information about a particular service. {ServiceId} is a Unique Identifer of a service.

*Tags:* `Services - Catalog`

#### Input Parameters
* `CenterId` - _required_ - Unique Identifier of the center
* `parentCategoryId` - _optional_ - Unique Identifier of the Category
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Services__ServiceId_

#### Input Parameters
* `ServiceId` - _required_

### /v1/Catalog/therapists

> Gets the available therapists for a specified time, service and center

*Tags:* `Employees - Catalog`

#### Input Parameters
* `CenterId` - _required_ - Center Id
* `searchString` - _required_ - string
* `page` - _optional_ - Page number of the results
* `size` - _optional_ - Number of results in each page
* `defaultPage` - _optional_
* `defaultSize` - _optional_
* `Sorters` - _optional_
* `filters` - _optional_
* `ServiceId` - _optional_ - GUID
* `forDate` - _optional_ - YYYY-MM-DD
* `Authorization` - _optional_ - Security token
* `Apikey` - _optional_ - Issued Api key issued from apigee portal

### x_restlet_v1_Catalog_Therapists

### Gets Collection details of a center.

> 

*Tags:* `Collections`

#### Input Parameters
* `StartDate` - _optional_
* `EndDate` - _optional_
* `ShowTaxBreakUp` - _optional_
* `Authorization` - _optional_ - Access Token
* `Content-Type` - _optional_ - Application/Json

### x_restlet_v1_Collections_Center__CenterId_

#### Input Parameters
* `CenterId` - _required_

### Gets Online Transaction details of a center.

> Below is the description of the enums used.<br/>
> <br/>
> TransactionType - enum<br/>
> <br/>
> | enum | value | <br/>
> | -------- | -------- | <br/>
> | All     | 0     | <br/>
> | Authorize     | 1     | <br/>
> | Refund     | 2     | <br/>
> | Reversal     | 3     | <br/>
> | Sale     | 4     | <br/>
> | Voided |  5  |<br/>
> <br/>
> TransactionStatus - enum<br/>
> <br/>
> | feild | value | <br/>
> | -------- | -------- |<br/>
> | All     | 0     | <br/>
> | CCCompleteNotYetSubmitted     | 1     | <br/>
> | Error     | 2     | <br/>
> | Failed     | 3     | <br/>
> | Originated     | 4     | <br/>
> | Pending     | 5     | <br/>
> | Queued     | 6     | <br/>
> | Returned     | 7     | <br/>
> | Settled     | 8     | <br/>
> | Success     | 9     | <br/>
> | Voided     | 10     | <br/>
> <br/>
> View - enum<br/>
> <br/>
> | feild | value | <br/>
> | -------- | -------- |<br/>
> | Default     | 1     | <br/>
> | Deposit     | 2     |

*Tags:* `Collections`

#### Input Parameters
* `StartDate` - _optional_
* `EndDate` - _optional_
* `TransctionType` - _optional_ - enum
* `TranctionStatus` - _optional_ - enum
* `CardLogo` - _optional_
* `View` - _optional_ - enum
* `Authorization` - _optional_ - Access Token
* `Content-Type` - _optional_ - Application/Json

### x_restlet_v1_Collections_OnlineTransactions__CenterId_

#### Input Parameters
* `CenterId` - _required_

### Gets Collection details of paymentgroups of a center

> 

*Tags:* `Collections`

#### Input Parameters
* `StartDate` - _optional_
* `EndDate` - _optional_
* `Page` - _optional_
* `Authorization` - _optional_ - Access Token
* `Content-Type` - _optional_ - Application/Json

### x_restlet_v1_Collections_PaymentGroups

### sets payment status.

> below is the example for request body<br/>
> <br/>
> ```<br/>
> {<br/>
>   "CenterId": "7f7ace7c-574a-4e7f-922a-388a9f59f2b5",<br/>
>   "data": [<br/>
>     {<br/>
>       "PaymentID": 1,<br/>
>       "Status": "sample string 2",<br/>
>       "Amount": 3.0<br/>
>     },<br/>
>     {<br/>
>       "PaymentID": 1,<br/>
>       "Status": "sample string 2",<br/>
>       "Amount": 3.0<br/>
>     }<br/>
>   ]<br/>
> }<br/>
> ```

*Tags:* `Collections`

#### Input Parameters
* `Authorization` - _optional_ - Access Token
* `Content-Type` - _optional_ - Application/Json

### x_restlet_v1_Collections_PaymentStatus

### Add an Invoice

> Add an Invoice. Add Services, Memberships, Packages, GiftCards through creating an invoice.<br/>
> <br/>
> Sample Request ( For Buying a membership):<br/>
> <br/>
> {<br/>
>   "Invoice": {<br/>
>     "InvoiceMemberships": [<br/>
>       {<br/>
>         "AppointmentMembership": {<br/>
>           "Membership": {<br/>
>             "VersionId": "2431EBCB-097B-48AD-BE20-DAB1E979C145"<br/>
>           },<br/>
>           "Employee": {<br/>
>             "Id": "6372bb51-e507-4431-b0cc-6be2143bb99a"<br/>
>           },<br/>
>           "Quantity": 1<br/>
>         }<br/>
>       }<br/>
>     ]<br/>
>   },<br/>
>   "CenterId": "9a895b3c-1994-42c0-bc61-efda4a6e2828",<br/>
>   "GuestId": "51c5d84b-a4db-4cd6-bb3e-0d410642da66",<br/>
>   "IsForced": true,<br/>
>   "Notes": "text"<br/>
> }

*Tags:* `Invoices`

#### Input Parameters
* `CenterId` - _optional_ - Unique Identifer
* `GuestId` - _optional_ - Unique Identifer
* `IsForced` - _optional_ - Invoice to be forced
* `Notes` - _optional_ - Any  notes to be required
* `Invoice` - _optional_ - Invoice model object

### x_restlet_v1_Invoices_Add

### Check out Invoice

> Check out Invoice<br/>
> <br/>
> Sample Request:<br/>
> <br/>
> {<br/>
>   "InvoiceId": "22b0d290-1284-4075-9439-9855bd18da27",<br/>
>   "AppointmentGroupId": "aa979551-8f99-4aad-a833-f53096485bac"<br/>
> }

*Tags:* `Invoices`

### x_restlet_v1_Invoices_Checkout

### Get Invoice Details via Invoice Id

*Tags:* `Invoices`

#### Input Parameters
* `InvoiceId` - _required_ - Unique Identifier

### x_restlet_v1_Invoices__InvoiceId_

#### Input Parameters
* `InvoiceId` - _required_ - Unique Identifier

### Gets Revenue details for a center.

> | ItemType | value |<br/>
> | -------- | -------- |<br/>
> | Service     | 0     | <br/>
> | Product     | 2     | <br/>
> | Membership     | 3     | <br/>
> | Package     | 4     | <br/>
> | Day Package     | 5     | <br/>
> | Pre-Paid/GiftCard     | 6     |

*Tags:* `Revenues`

#### Input Parameters
* `StartDate` - _optional_
* `EndDate` - _optional_
* `ItemType` - _optional_
* `MembershipType` - _optional_
* `IncludeExpiredPackageRevenue` - _optional_
* `ConsiderRefunds` - _optional_
* `Authorization` - _optional_ - Access Token
* `Content-Type` - _optional_ - Application/Json

### x_restlet_v1_Revenues_InvoiceItem__CenterId_

#### Input Parameters
* `CenterId` - _required_ - UniqueIdentifier

### Get a list of appointments

> API returns a list of appointments based on multiple criterias provided by the caller.

*Tags:* `Appointments`

#### Input Parameters
* `centerid` - _optional_ - Center id
* `startdate` - _required_ - Start date and time of the appointment
* `enddate` - _required_ - End date and time of the appointment
* `status` - _optional_ - Status of the appointment
    Possible values: -2, -1, 0, 1, 2, 4, 10, 11, 20.

### Creates a confirmed Appointment

> API is used to create a confirmed appointment. It is expected that following information is sent as the request body. <br/>
> <br/>
> ```<br/>
> {"CenterId":"adb0c9cd-5357-440d-8ee4-4557c6241271","ReservationId":"ab2549c1-aea3-476e-b16b-d856f4363b03"}<br/>
> ```<br/>
> <br/>
> Security:<br/>
> `API requires a security token of user with write permission on Appointments.`

*Tags:* `Appointments`

#### Input Parameters
* `ApiKey` - _optional_ - Issued API key
* `Authorization` - _optional_ - Security token

### Update the appointment

> API is used to update the existing appointment.

*Tags:* `Appointments`

### x_restlet_v1_appointments

### sets the appointment FeedBack

> 

*Tags:* `Appointments`

### x_restlet_v1_appointments_AddFeedback

### sets the appointment notes

> 

*Tags:* `Appointments`

### x_restlet_v1_appointments_AddNotes

### Gets the guests class registrations. This API should be invoked by an employee to see a guest's registrations

> 

*Tags:* `Appointments`

### To enroll/register a guest for a session by Admin

*Tags:* `Appointments`

### x_restlet_v1_appointments_Admin_Sessions

### To Confirm Reservation

> Example Request : <br/>
> ```<br/>
> {<br/>
>   "CenterId": "string",<br/>
>   "ReservationId": "string",<br/>
>   "BookingSource": 0,<br/>
>   "HostId": "string",<br/>
>   "SlotBookings": [<br/>
>     {<br/>
>       "GuestId": "string",<br/>
>       "AppointmentGroupId": "string",<br/>
>       "Services": [<br/>
>         {<br/>
>           "AppointmentId": "string",<br/>
>           "InvoiceItemId": "string",<br/>
>           "CartItemId": "string",<br/>
>           "AppointmentSegmentId": "string",<br/>
>           "PackageId": "string",<br/>
>           "Package": {<br/>
>             "Id": "string",<br/>
>             "Name": "string",<br/>
>             "Description": "string",<br/>
>             "Code": "string",<br/>
>             "Type": 1,<br/>
>             "Price": {<br/>
>               "CurrencyId": 0,<br/>
>               "Sales": 0,<br/>
>               "Tax": 0,<br/>
>               "Final": 0,<br/>
>               "Final1": 0,<br/>
>               "Discount": 0,<br/>
>               "Tip": 0,<br/>
>               "SSG": 0,<br/>
>               "RoundingCorrection": 0<br/>
>             },<br/>
>             "Services": [<br/>
>               {<br/>
>                 "Id": "string",<br/>
>                 "Name": "string",<br/>
>                 "Price": {<br/>
>                   "CurrencyId": 0,<br/>
>                   "Sales": 0,<br/>
>                   "Tax": 0,<br/>
>                   "Final": 0,<br/>
>                   "Final1": 0,<br/>
>                   "Discount": 0,<br/>
>                   "Tip": 0,<br/>
>                   "SSG": 0,<br/>
>                   "RoundingCorrection": 0<br/>
>                 },<br/>
>                 "Duration": 0,<br/>
>                 "CategoryId": "string",<br/>
>                 "IsAddOn": true,<br/>
>                 "HasAddOns": true,<br/>
>                 "AddOnToServiceId": "string",<br/>
>                 "CategoryName": "string",<br/>
>                 "AddOns": [<br/>
>                   {}<br/>
>                 ],<br/>
>                 "IsVariant": true,<br/>
>                 "HasVariant": true,<br/>
>                 "ParentServiceId": "string",<br/>
>                 "CartItemId": "string"<br/>
>               }<br/>
>             ],<br/>
>             "Items": [<br/>
>               {<br/>
>                 "Type": 1,<br/>
>                 "Id": "string",<br/>
>                 "Name": "string",<br/>
>                 "Quantity": 0,<br/>
>                 "Order": 0,<br/>
>                 "Service": {<br/>
>                   "Id": "string",<br/>
>                   "Name": "string",<br/>
>                   "Price": {<br/>
>                     "CurrencyId": 0,<br/>
>                     "Sales": 0,<br/>
>                     "Tax": 0,<br/>
>                     "Final": 0,<br/>
>                     "Final1": 0,<br/>
>                     "Discount": 0,<br/>
>                     "Tip": 0,<br/>
>                     "SSG": 0,<br/>
>                     "RoundingCorrection": 0<br/>
>                   },<br/>
>                   "Duration": 0,<br/>
>                   "CategoryId": "string",<br/>
>                   "IsAddOn": true,<br/>
>                   "HasAddOns": true,<br/>
>                   "AddOnToServiceId": "string",<br/>
>                   "CategoryName": "string",<br/>
>                   "AddOns": [<br/>
>                     {}<br/>
>                   ],<br/>
>                   "IsVariant": true,<br/>
>                   "HasVariant": true,<br/>
>                   "ParentServiceId": "string",<br/>
>                   "CartItemId": "string"<br/>
>                 }<br/>
>               }<br/>
>             ]<br/>
>           },<br/>
>           "Service": {<br/>
>             "Id": "string",<br/>
>             "Name": "string",<br/>
>             "Price": {<br/>
>               "CurrencyId": 0,<br/>
>               "Sales": 0,<br/>
>               "Tax": 0,<br/>
>               "Final": 0,<br/>
>               "Final1": 0,<br/>
>               "Discount": 0,<br/>
>               "Tip": 0,<br/>
>               "SSG": 0,<br/>
>               "RoundingCorrection": 0<br/>
>             },<br/>
>             "Duration": 0,<br/>
>             "CategoryId": "string",<br/>
>             "IsAddOn": true,<br/>
>             "HasAddOns": true,<br/>
>             "AddOnToServiceId": "string",<br/>
>             "CategoryName": "string",<br/>
>             "AddOns": [<br/>
>               {}<br/>
>             ],<br/>
>             "IsVariant": true,<br/>
>             "HasVariant": true,<br/>
>             "ParentServiceId": "string",<br/>
>             "CartItemId": "string"<br/>
>           },<br/>
>           "RequestedTherapistGender": 0,<br/>
>           "StartTime": "2017-09-04T04:51:31.647Z",<br/>
>           "EndTime": "2017-09-04T04:51:31.647Z",<br/>
>           "StartTimeInCenter": "2017-09-04T04:51:31.647Z",<br/>
>           "EndTimeInCenter": "2017-09-04T04:51:31.647Z",<br/>
>           "Room": {<br/>
>             "Id": "string",<br/>
>             "Name": "string"<br/>
>           },<br/>
>           "Lock": true,<br/>
>           "Equipment": {<br/>
>             "Id": "string",<br/>
>             "Name": "string"<br/>
>           },<br/>
>           "Status": 0,<br/>
>           "RequestedTherapist": {<br/>
>             "Id": "string",<br/>
>             "ShortName": "string",<br/>
>             "NickName": "string",<br/>
>             "FullName": "string",<br/>
>             "Email": "string",<br/>
>             "PhoneNumber": "string",<br/>
>             "MobilePhoneModel": {<br/>
>               "CountryId": 0,<br/>
>               "Number": "string",<br/>
>               "DisplayNumber": "string"<br/>
>             },<br/>
>             "Gender": 0,<br/>
>             "FirstName": "string",<br/>
>             "LastName": "string",<br/>
>             "IsAvailable": true,<br/>
>             "VanityImageUrl": "string",<br/>
>             "ScalingFactor": 0,<br/>
>             "ScaledPrice": 0,<br/>
>             "ServiceTime": 0,<br/>
>             "DisplayName": "string"<br/>
>           },<br/>
>           "Quantity": 0,<br/>
>           "Price": {<br/>
>             "CurrencyId": 0,<br/>
>             "Sales": 0,<br/>
>             "Tax": 0,<br/>
>             "Final": 0,<br/>
>             "Final1": 0,<br/>
>             "Discount": 0,<br/>
>             "Tip": 0,<br/>
>             "SSG": 0,<br/>
>             "RoundingCorrection": 0<br/>
>           },<br/>
>           "SCD": "string",<br/>
>           "ActualStartTime": "2017-09-04T04:51:31.647Z",<br/>
>           "CompletedTime": "2017-09-04T04:51:31.647Z",<br/>
>           "Progress": 0,<br/>
>           "ParentAppointmentId": "string",<br/>
>           "ServiceCustomData": {<br/>
>             "Permission": {<br/>
>               "CanView": true,<br/>
>               "CanEdit": true<br/>
>             }<br/>
>           },<br/>
>           "ItemActions": "string",<br/>
>           "EquivalenceFactor": 0,<br/>
>           "EquivalentName": "string",<br/>
>           "IsMembershipApplied": true,<br/>
>           "IsAddOn": true,<br/>
>           "AddonAppointmentId": "string",<br/>
>           "IsPackageApplied": true,<br/>
>           "IsDiscountApplied": true,<br/>
>           "CanModifyTherapist": true<br/>
>         }<br/>
>       ],<br/>
>       "TherapistId": "string",<br/>
>       "RoomId": "string",<br/>
>       "Quantity": 0,<br/>
>       "BookingNotes": "string",<br/>
>       "Price": {<br/>
>         "CurrencyId": 0,<br/>
>         "Sales": 0,<br/>
>         "Tax": 0,<br/>
>         "Final": 0,<br/>
>         "Final1": 0,<br/>
>         "Discount": 0,<br/>
>         "Tip": 0,<br/>
>         "SSG": 0,<br/>
>         "RoundingCorrection": 0<br/>
>       },<br/>
>       "VirtualGuest": {<br/>
>         "FirstName": "string",<br/>
>         "LastName": "string",<br/>
>         "Email": "string",<br/>
>         "Mobile": {<br/>
>           "CountryId": 0,<br/>
>           "Number": "string",<br/>
>           "DisplayNumber": "string"<br/>
>         },<br/>
>         "Gender": 0<br/>
>       },<br/>
>       "CartItemIds": [<br/>
>         "string"<br/>
>       ]<br/>
>     }<br/>
>   ]<br/>
> }<br/>
> ```

*Tags:* `Appointments`

### x_restlet_v1_appointments_ConfirmReservation

### sets the appointment Custom Data

> 

*Tags:* `Appointments`

### x_restlet_v1_appointments_CustomData

### Gets monthly dates with bool value if the appointments are present for each date

> 

*Tags:* `Appointments`

#### Input Parameters
* `Year` - _required_
* `Month` - _required_

### x_restlet_v1_appointments_Month__Year___Month_

#### Input Parameters
* `Year` - _required_
* `Month` - _required_

### To Update Appoitnment Group Details

> This API can be called to add an appointment. <br/>
> <br/>
> Parameters<br/>
> <br/>
> <br/>
> | Parameter  | Type | Description |<br/>
> | -------- | -------- | -------- |<br/>
> | AppointmentGroupId    | GUID     | Unique identifier for the appointment    ||<br/>
> | Comments    | String     | Comments for No Show    |<br/>
> <br/>
> Security:  Permissions required to call this API.

*Tags:* `Appointments`

### x_restlet_v1_appointments_add

### Update the appointment for the alternative

*Tags:* `Appointments`

### x_restlet_v1_appointments_alternatives

### Get list of available Appointments

> The API returns a list of available appointments. API expects that following information be passed in the Request body. <br/>
> <br/>
> ```<br/>
> {"CenterId":"adb0c9cd-5357-440d-8ee4-4557c6241271","CenterDate":"2017-05-08","SlotBookings":[{"Services":[{"Service":{"Id":"8b15f00d-0594-4975-8d27-c88a3c64bfab"}}]}]}<br/>
> ```<br/>
> <br/>
> <br/>
> Security:<br/>
> `API requires a security token for a user with read permission on Appointments.`

*Tags:* `Appointments`

#### Input Parameters
* `ApiKey` - _optional_ - Issued API key
* `Authorization` - _optional_ - Security token

### x_restlet_v1_appointments_availability

### To get Available Time slots for the services and therapists

> 

*Tags:* `Appointments`

### x_restlet_v1_appointments_availabletimes

### Gets guest details for bulk booking

> 

*Tags:* `Appointments`

### x_restlet_v1_appointments_bulkbookingGuestdetails

### to get bulk booking available time slots

> 

*Tags:* `Appointments`

### x_restlet_v1_appointments_bulkbookingavailabletimes

### to Confirm reservation for bulkbooking

> 

*Tags:* `Appointments`

### x_restlet_v1_appointments_bulkbookingconfirmreservation

### to reserve slots for bulkbooking

> 

*Tags:* `Appointments`

### x_restlet_v1_appointments_bulkbookingreserveslots

### Cancel an appointment

> This API can be  called to cancel an existing appointment. <br/>
> <br/>
> Parameters<br/>
> <br/>
> <br/>
> | Parameter  | Type | Description |<br/>
> | -------- | -------- | -------- |<br/>
> | AppointmentGroupId    | GUID     | Unique identifier for the appointment    |<br/>
> | ReasonId    | INT     |  Reason for cancellation of appointment    |<br/>
> | Comments    | String     | Comments for cancellation    |<br/>
> <br/>
> Security:  Permissions required to call this API.

*Tags:* `Appointments`

### x_restlet_v1_appointments_cancel

### To Mark No Show for an appointment

> This API can be  called to Mark No Show for an existing appointment. <br/>
> <br/>
> Parameters<br/>
> <br/>
> <br/>
> | Parameter  | Type | Description |<br/>
> | -------- | -------- | -------- |<br/>
> | AppointmentGroupId    | GUID     | Unique identifier for the appointment    ||<br/>
> | Comments    | String     | Comments for No Show    |<br/>
> <br/>
> Security:  Permissions required to call this API.

*Tags:* `Appointments`

### x_restlet_v1_appointments_noshow

### rebook an appointment

> This API can be  called to cancel an existing appointment. <br/>
> <br/>
> Parameters<br/>
> <br/>
> <br/>
> | Parameter  | Type | Description |<br/>
> | -------- | -------- | -------- |<br/>
> | AppointmentGroupId    | GUID     | Unique identifier for the appointment    |<br/>
> | ReasonId    | INT     |  Reason for cancellation of appointment    |<br/>
> | Comments    | String     | Comments for cancellation    |<br/>
> <br/>
> Security:  Permissions required to call this API.

*Tags:* `Appointments`

### x_restlet_v1_appointments_reebook

### To reserve slots

> 

*Tags:* `Appointments`

### x_restlet_v1_appointments_reserveslots

### sets the status of the Appointment

> Below are the respective statuses for the value of the status tag in the input.<br/>
> <br/>
> | status  | value  | <br/>
> | -------- | -------- | <br/>
> | New | 0 |<br/>
> | Checkin     | 2     |<br/>
> | Undo Checkin     | 0     |<br/>
> | Confirm     | 4     |

*Tags:* `Appointments`

#### Input Parameters
* `API Key` - _optional_ - issued key
* `Authorization` - _optional_ - security token

### x_restlet_v1_appointments_setstatus

### Create an Appointment Slot

> The API is used to reserve a temporary Appointment slot. API expects following information be sent in the Request body. <br/>
> <br/>
> ```<br/>
> {"CenterId":"adb0c9cd-5357-440d-8ee4-4557c6241271","CenterTime":"2017-05-05 12:00:00","SlotBookings":[{"GuestId":"2e24d650-d7b4-473e-9bf3-b835c882cf35","Services":[{"Service":{"Id":"8b15f00d-0594-4975-8d27-c88a3c64bfab"}}],"StartTime":"2017-05-05 12:00:00"}]}<br/>
> ```<br/>
> <br/>
> Security:<br/>
> `API requires a security token for user with write permission on  Appointments.`

*Tags:* `Appointments`

#### Input Parameters
* `ApiKey` - _optional_ - Issued API key
* `Authorization` - _optional_ - Security token

### x_restlet_v1_appointments_slots

### Update an appointment

> This API can be  called to cancel an existing appointment. <br/>
> <br/>
> Parameters<br/>
> <br/>
> <br/>
> | Parameter  | Type | Description |<br/>
> | -------- | -------- | -------- |<br/>
> | AppointmentGroupId    | GUID     | Unique identifier for the appointment    |<br/>
> | ReasonId    | INT     |  Reason for cancellation of appointment    |<br/>
> | Comments    | String     | Comments for cancellation    |<br/>
> <br/>
> Security:  Permissions required to call this API.

*Tags:* `Appointments`

### x_restlet_v1_appointments_update

### updates guest details for bulk booking

> 

*Tags:* `Appointments`

### x_restlet_v1_appointments_updatebulkbookingGuestdetails

### Uploads service custom data image for a given field. The file name should be of the format [field id].[extension] of image

> 

*Tags:* `Appointments`

#### Input Parameters
* `AppointmentId` - _optional_ - GUID

### x_restlet_v1_appointments__AppointmentFieldId__CustomDataFile

#### Input Parameters
* `AppointmentFieldId` - _required_

### Uploads service custom data image for a given field. The file name should be of the format [field id].[extension] of image

> 

*Tags:* `Appointments`

#### Input Parameters
* `AppointmentId` - _optional_ - GUID

### Uploads service custom data image for a given field. The file name should be of the format [field id].[extension] of image

*Tags:* `Appointments`

#### Input Parameters
* `AppointmentFieldValue` - _required_

### x_restlet_v1_appointments__AppointmentFieldValue__CustomDataImage

#### Input Parameters
* `AppointmentFieldValue` - _required_

### Uploads service custom data image for a given field. The file name should be of the format [field id].[extension] of image

*Tags:* `Appointments`

#### Input Parameters
* `AppointmentFieldValue` - _required_

### x_restlet_v1_appointments__AppointmentFieldValue__UploadCustomDataImage

#### Input Parameters
* `AppointmentFieldValue` - _required_

### Changes the progress of Appointment

> Below are the respective statuses for the value of the status tag in the input.<br/>
> <br/>
> | status  | value  | <br/>
> | New | 0 |<br/>
> | Checkin     | 1     |<br/>
> | Undo Checkin     | 2     |<br/>
> | Confirm     | 3     |

*Tags:* `Appointments`

#### Input Parameters
* `API Key` - _optional_ - issued key
* `Authorization` - _optional_ - security token

### x_restlet_v1_appointments__AppointmentGroupId__setprogress

#### Input Parameters
* `AppointmentGroupId` - _required_

### Gets the appointment's service custom data

> 

*Tags:* `Appointments`

#### Input Parameters
* `AppointmentId` - _required_

### x_restlet_v1_appointments__AppointmentId__CustomData

#### Input Parameters
* `AppointmentId` - _required_

### Gets the appointment's service custom data History

> 

*Tags:* `Appointments`

#### Input Parameters
* `AppointmentId` - _required_

### x_restlet_v1_appointments__AppointmentId__CustomData_History

#### Input Parameters
* `AppointmentId` - _required_

### Get the appointment's custom data image annotations

> 

*Tags:* `Appointments`

#### Input Parameters
* `AppointmentId` - _required_
* `AppointmentFieldId` - _required_

### x_restlet_v1_appointments__AppointmentId__CustomData__AppointmentFieldId__Annotations

#### Input Parameters
* `AppointmentId` - _required_
* `AppointmentFieldId` - _required_

### Sends Custom data mail to the guest

> 

*Tags:* `Appointments`

#### Input Parameters
* `AppointmentId` - _optional_ - GUID

### x_restlet_v1_appointments__AppointmentId__SendMail

#### Input Parameters
* `AppointmentId` - _required_

### Gets Details of an Appointment for the Appointment Group ID

> This API gets us an appointment group json object, which has the details of the appointment for the particular appointment group id.

*Tags:* `Appointments`

#### Input Parameters
* `API key` - _optional_ - Issued API key
* `Authorization` - _optional_ - Security Token

### x_restlet_v1_appointments__appointmentgroupid_

#### Input Parameters
* `appointmentgroupid` - _required_

### Gets invoice Details for a particular appointment group id

*Tags:* `Appointments`

#### Input Parameters
* `Authorization` - _optional_ - security token
* `API Key` - _optional_ - issued API key

### x_restlet_v1_appointments__appointmentgroupid__invoice

#### Input Parameters
* `appointmentgroupid` - _required_

### Get a list of Centers

> API returns a list of Centers that the user is authorized to view. <br/>
> <br/>
> Security:<br/>
> `API requires a security token for a user with read permission on Centers.`

*Tags:* `Centers`

#### Input Parameters
* `CatalogEnabled` - _optional_ - True  shows only catalog enabled values
* `ApiKey` - _optional_ - Issued API  key
* `Authorization` - _optional_ - Security token

### x_restlet_v1_centers

### Gets the details of a Center

> API returns the details of a specific center. <br/>
> <br/>
> Security:<br/>
> `API requires a security token for a user with read permission on Centers.`

*Tags:* `Centers`

#### Input Parameters
* `ApiKey` - _optional_ - Issued API key
* `Authorization` - _optional_ - Security token

### x_restlet_v1_centers__CenterId_

#### Input Parameters
* `CenterId` - _required_

### Creates an employee

> fields that need to be unique : Code , UserName , Email

*Tags:* `Employees`

#### Input Parameters
* `Authorization` - _optional_ - Token

### x_restlet_v1_employees

### For employee performance metrics

> For providing the performance data for the employee.

*Tags:* `Employees`

#### Input Parameters
* `start_date` - _optional_ - Start Date to show the Employee performance report.
* `end_date` - _optional_ - EndDate till which the performance is to be displayed
* `employee_id` - _optional_ - Employee Id to provide the performance report for.
* `job_id` - _optional_ - Job id to filter out the employees with that job
* `center_id` - _optional_ - Center Id to check for
* `Authorization` - _optional_ - To authorize the api from unwanted calls

### x_restlet_v1_employees_performance

### Get Sales report of employees

*Tags:* `Employees`

#### Input Parameters
* `start_date` - _required_ - StartDate for the sales report to be calculated
* `end_date` - _required_ - EndDate for the sales report to be calculated
* `employee_id` - _optional_ - Employee id to provide report for
* `job_id` - _optional_ - JobId is to fetch for the employees with that job id.
* `center_id` - _optional_ - Center Id to look for
* `Authorization` - _optional_ - To Authorize the api calls

### x_restlet_v1_employees_sales

### Get the payroll report of the employee

*Tags:* `Employees`

#### Input Parameters
* `start_date` - _optional_ - Start Date to get the payroll report for
* `end_date` - _optional_ - End Date to get the payroll report for

### x_restlet_v1_employees__employee_id__payroll

#### Input Parameters
* `employee_id` - _required_

### Get details of giftcard

> Get details of a giftcard. API accepts a giftcard_id to return the response. Giftcard_id refers to the unique identifier stored in Zenoti and is not the same as the giftcard number. <br/>
> <br/>
> `Security:  A user who has read access to giftcards object can call this API to get giftcard details. User role must also have API Access permission.`<br/>
> <br/>
> Note:  It is not secure to create a GET API that fetches giftcard details by passing giftcard number as either a path parameter or a query parameter, because this information may reside in browser history, and can be misused.  If we need an API that returns giftcard details by passing a giftcard number,  we will need to create a POST api that accepts giftcard number in the request body.

*Tags:* `Giftcards`

#### Input Parameters
* `giftcard_id` - _required_

### x_restlet_v1_giftcards__giftcard_id_

#### Input Parameters
* `giftcard_id` - _required_

### Get a list of Guests

> This API returns a list of Guest objects that match one or more of the parameters listed below. For instance, if there is a need to check if a Guest already exists in the system based on an email, this API can help. <br/>
> <br/>
> ```<br/>
> a. UserCode<br/>
> b. MobileNumber<br/>
> c. Email<br/>
> d. FirstName<br/>
> e. LastName<br/>
> ```<br/>
> 										<br/>
> In the response JSON, only the following fields have desired values, others are reserved for future use. <br/>
>                 <br/>
> ```<br/>
> a. Guest id - This is a GUID that refers to the guest. <br/>
> b. First name<br/>
> c. Last name<br/>
> d. Mobile phone model - DisplayNumber contains the full mobile number to use, other fields are reserved for future use.<br/>
> e. Gender<br/>
> f. Email<br/>
> ```<br/>
> 										<br/>
> Return values: <br/>
> ```<br/>
> a. If request.count value is  not provided, the API returns a maximum of 100 records. <br/>
> b. If the search string doesn't match any guest, it will return 200 OK, with no guests in the response JSON<br/>
> c. The results will be sorted on the basis of first name only<br/>
> ```<br/>
> <br/>
> Security:<br/>
> `API requires a security token of an admin user with read permission on Guests.`

*Tags:* `Guests`

#### Input Parameters
* `request.centerId` - _optional_ - CenterId in GUID format
* `request.searchValue` - _optional_ - Search string across five different fields
* `request.count` - _optional_ - Controls total number of records in results
* `request.page` - _optional_ - Specific page count to be returned
* `request.size` - _optional_ - Not used
* `request.sorters` - _optional_ - Fields on which results are sorted
* `request.filters` - _optional_ - Not used
* `ApiKey` - _optional_ - Issued API key
* `Authorization` - _optional_ - Security token

### Creates a new Guest

> First name and Last name are always mandatory. Depending on the settings on your system, more fields will be mandatory - check the Add Guest page on your site (Loyalty-Manage Guests). One or more of the following may be set as mandatory: <br/>
> ```<br/>
> a. Mobile number<br/>
> b. Email<br/>
> c. Birthday<br/>
> d. Address1<br/>
> e. City<br/>
> f. State<br/>
> g. Country<br/>
> h. Nationality<br/>
> i. Referral Source<br/>
> j. Gender<br/>
> ``` <br/>
>  Please note that the API user has to send one of the following values for Gender: <br/>
> <br/>
>  -1 - NotSpecified <br/>
> <br/>
>  0 - Female <br/>
> <br/>
>  1 - Male <br/>
> <br/>
>   Validate = true should be passed at all time so that input can be validated.<br/>
> <br/>
> Security:<br/>
> `API requires a security token of an admin user with write permission on Guest.`

*Tags:* `Guests`

#### Input Parameters
* `ApiKey` - _optional_ - Issues API key
* `Authorization` - _optional_ - Security Token

### x_restlet_v1_guests

### Get details of a Guest

> API can be used to obtain details of a particular Guest user by passing a GuestId. <br/>
> <br/>
> Security:<br/>
> `API requires security  token of an admin with read permission on Guest, or that of a user who has permission to read information for a particular Guest.`

*Tags:* `Guests`

#### Input Parameters
* `request.type` - _optional_ - User Type
    Possible values: 0, 1.
* `ApiKey` - _optional_ - Issued API key
* `Authorization` - _optional_ - Security token

### Update a Guest

> API is used to perform update on the details of a guest. One or more values from below list can be updated. <br/>
> <br/>
> | Parameter  | Data Type | Description |<br/>
> | -------- | -------- | -------- |<br/>
> | firstname    | string  |  First name of the guest   |<br/>
> | middlename    | string  |  Middle name of the guest   |<br/>
> | lastname    | string   |  Last name of the guest   |<br/>
> | email*    | string   |  Email address of the guest   |<br/>
> | password    | string   |  New password   |<br/>
> | mobilephonemodel  | object  |  Refer to phone object definition. |<br/>
> | homephonemodel  | object   |  Refer to phone object definition.  |<br/>
> | gender  | string   |  male, female, other  |<br/>
> | dateofbirth  | datetime   |  yyyy-mm-ddThh:mm:ss.SSSZ   |<br/>
> | anniversarydate  | datetime   |  yyyy-mm-ddThh:mm:ss.SSSZ   |<br/>
> | address1  | string   |  Address field |<br/>
> | address2  | string   |  Address field  |<br/>
> | city  |  string  |  City of the guest   |<br/>
> | postalcode  |  string  |  Zip code  |<br/>
> | state  |  object  |  Refer to state object definition in request body   |<br/>
> | country  |  object  | Refer to country object definition in request body   |<br/>
> | nationality  |  object  |  Refer to nationality object definition in  request body   |<br/>
> | referralsource  |  object  |  Refer to referralsource object definition in request body   |<br/>
> | referredguest_id  |  string  |   |<br/>
> | receivetransactionalemail  |  boolean  |   |<br/>
> | receivetransactionalsms  |  boolean  |   |<br/>
> | receivemarketingemail  |  boolean  |   |<br/>
> | receivemarketingsms  |  boolean  |   |<br/>
> | creationdate  |  datetime  |   |<br/>
> | updatedate  |  datetime  |   |<br/>
> | center_id  |  string  |   |<br/>
> | is_member  |  boolean  | Indicates if guest is a valid member.  |<br/>
> | dob_incompleteyear  |  string  |  Date of birth without year information.  |<br/>
> <br/>
> Security:  `Requires an authorization for read and write permission on the guest object. * Edit Email and Edit Mobile permission should be enabled for the user.`<br/>
> <br/>
> <br/>
> API Specific Errors:<br/>
> <br/>
> | Error Code | Error Message | Note |<br/>
> | -------- | -------- | -------- |<br/>
> | 503 | MissingInput | One or more required input is missing |<br/>
> | 414 | GuestNotFound | Guest is not found |<br/>
> | 441 | UserCodeAlreadyExists | Code already exists |<br/>
> | 442 | UserEmailAlreadyExists | Email address already exists |<br/>
> | 481 | GuestMandatoryFieldsMissing | Mandatory fields are missing |<br/>
> | 482 | MobileNumberNotInLengthRange | Mobile  Number is outside the length range |<br/>
> | 484 | CountryIsNotValid | Invalid code provided for the country |<br/>
> | 484 | NationalityIsNotValid | Invalid code provided for the nationality |<br/>
> | 484 | StateIsNotValid | Invalid code provided for the state |<br/>
> <br/>
> Sample code:<br/>
> <br/>
> ```<br/>
> {<br/>
>   "guest": {<br/>
>     "firstname": "TestGuest2SK",<br/>
>     "middlename": "Changed",<br/>
>     "lastname": "TestGuest1SK",<br/>
>     "email": "TestGuest1SrK@zenoti.com",<br/>
>     "mobilephonemodel": {<br/>
>       "countryid": 91,<br/>
>       "number": "9000498410"<br/>
>     },<br/>
>   "password":"changed1",<br/>
>    "ReferralSource":{<br/>
>      "Id":"3db2bb19-7430-4608-b34e-be44e64ac692"<br/>
>    }<br/>
>   }<br/>
> }<br/>
> ```

*Tags:* `Guests`

#### Input Parameters
* `apikey` - _optional_
* `authorization` - _optional_

### x_restlet_v1_guests__guest_id_

#### Input Parameters
* `guest_id` - _required_

### Get Guest Loyalty Points

*Tags:* `Guests`

#### Input Parameters
* `guest_id` - _required_

### x_restlet_v1_guests__guest_id__loyaltypoints

#### Input Parameters
* `guest_id` - _required_

### Get Guest Notes

> Returns notes associated with a guest<br/>
> <br/>
> NoteType - enum<br/>
> <br/>
> <br/>
> | enum | value |<br/>
> | -------- | -------- | <br/>
> | Generic     | 2     | <br/>
> |Checkin | 3   |<br/>
> | Booking     | 4     | <br/>
> | Payment     |8    | <br/>
> | Profile     | 10     | <br/>
> <br/>
> Security: `Requires read permission on guest and notes. Guest can view only her information.`

*Tags:* `Guests`

#### Input Parameters
* `guest_id` - _required_

### Create Guest Notes

> Create a note associated with the guest. <br/>
> <br/>
> NoteType - enum<br/>
> <br/>
> <br/>
> | enum | value |<br/>
> | -------- | -------- | <br/>
> | Generic     | 2     | <br/>
> |Checkin | 3   |<br/>
> | Booking     | 4     | <br/>
> | Payment     |8    | <br/>
> | Profile     | 10     | <br/>
> <br/>
> <br/>
> <br/>
> Security:`Write permission on notes object.`

*Tags:* `Guests`

#### Input Parameters
* `guest_id` - _required_

### x_restlet_v1_guests__guest_id__notes

#### Input Parameters
* `guest_id` - _required_

### Delete Guest Notes

> Delete a note associated with the guest. <br/>
> <br/>
> Security:`Write permission on notes object.`

*Tags:* `Guests`

#### Input Parameters
* `guest_id` - _required_
* `note_id` - _required_

### x_restlet_v1_guests__guest_id__notes__note_id_

#### Input Parameters
* `guest_id` - _required_
* `note_id` - _required_

### Get Guest Package Details

> Returns packages bought by a guest. <br/>
> <br/>
> Security:  `Required read permission on the guest and packages object. Guest user can only view her information.`

*Tags:* `Guests`

#### Input Parameters
* `CenterId` - _required_ - Unique Identifier
* `InvoiceId` - _optional_ - Unique Identifier

### x_restlet_v1_guests__guest_id__packages

#### Input Parameters
* `guest_id` - _required_

### Create an OTP

> API is used to create an OTP associated with a provided email address or phone number.  Below are the samples. The user has to pass either email or phone number (but not both) in the  request body. <br/>
> <br/>
> Case 1:  Generate OTP and send to email<br/>
> ```<br/>
> {<br/>
>   "CenterId": "3ECC3E05-8AAF-4792-BA0A-EC3D822FA6C5",<br/>
>   "Email": "danjohn@zenoti.com"<br/>
> }<br/>
> ```<br/>
> <br/>
> Case 2: Genetate OTP and send to phone number. <br/>
> ```<br/>
> {<br/>
>    "CenterId": "3ECC3E05-8AAF-4792-BA0A-EC3D822FA6C5",<br/>
>    "Phone": {<br/>
>     "CountryId": 91,<br/>
>     "Number": "3434443339",<br/>
>     "DisplayNumber": "3434443339"<br/>
>   }<br/>
> }<br/>
> ```

*Tags:* `Authentication`

#### Input Parameters
* `ApiKey` - _optional_ - Issued API key
* `Authorization` - _optional_ - Security token

### Verify an OTP

> API can be used to check if the provided OTP matches with the issued OTP to a given email address or phone number.  <br/>
> <br/>
> PUT method has been used for security reasons. Following request has to be sent in the body. <br/>
> <br/>
> ```<br/>
> {<br/>
>   "VerificationId": "4d0cf94f-be9a-43b1-9b7b-8aab57fbc7e2",<br/>
>   "OTP": "234954",<br/>
>   "CenterId": "3ECC3E05-8AAF-4792-BA0A-EC3D822FA6C5"<br/>
> }<br/>
> ```

*Tags:* `Authentication`

#### Input Parameters
* `ApiKey` - _optional_ - Issued API key
* `Authorization` - _optional_ - Security token

### x_restlet_v1_otp

### Get a list of Services

> API returns a list of services. Following filter options are supported. <br/>
> <br/>
> ```<br/>
> a. centerId - To return services in a particular center. <br/>
> b. categoryId - To return services in a specified category only. <br/>
> c. isCatalogEnabled - To return services that can be displayed in a webstore. <br/>
> d. tag - To return services which are tagged by<br/>
> ```<br/>
> <br/>
> Security:<br/>
> `Required read permisson on Services`

*Tags:* `Services`

#### Input Parameters
* `request.centerId` - _optional_ - Id of the center
* `request.categoryId` - _optional_ - Id of a category
* `request.pageNum` - _optional_ - Page number to be returned.
* `request.pageSize` - _optional_ - Size of the page.
* `CatalogEnabled` - _optional_ - True shows only catalog enabled values
* `Tag` - _optional_ - Tag name
* `ApiKey` - _optional_ - Issued API key
* `Authorization` - _optional_ - Security token

### x_restlet_v1_services

### Get list of Service Categories

> API returns a list of main categories for the services. The API exposes following two filters. <br/>
> <br/>
> ```<br/>
> a. centerId - To view the categories only for a particular center. <br/>
> b. parentCategoryId - To view child categories of a particular main category.<br/>
> ```<br/>
> <br/>
> <br/>
> <br/>
> Security:<br/>
> `Requires read permisson on Services.`

*Tags:* `Services`

#### Input Parameters
* `request.centerId` - _optional_ - Id of a particular Center
* `request.parentCategoryId` - _optional_ - Id of parent category
* `CatalogEnabled` - _optional_ - True shows only catalog enabled values
* `ApiKey` - _optional_ - Issued API key
* `Authorization` - _optional_ - Security token

### x_restlet_v1_services_categories

### Get details of a Service

*Tags:* `Services`

#### Input Parameters
* `ApiKey` - _optional_ - Issued API key
* `Authorization` - _optional_ - Security token

### x_restlet_v1_services__ServiceId_

#### Input Parameters
* `ServiceId` - _required_

### Create a Token

> This API is used to create a token for a valid user. The token can subsequenty be used as a Authorization token for other API calls. <br/>
> The request body should be a string in the below format. (grant_type should be passed as "password"). <br/>
> <br/>
> ```<br/>
> username={{username}}&password={{password}}&clientid={{clientid}}&grant_type={{grant_type}}<br/>
> ```<br/>
> <br/>
> Note:  OAuth2 token is not required to be passed in the header. Only API key is required.

*Tags:* `Authentication`

#### Input Parameters
* `ApiKey` - _optional_ - Issued API key

### x_restlet_v1_tokens

### To get Available Time slots for the services and therapists

> 

*Tags:* `Appointments`

### x_restlet_v2_0_appointments_availabletimes

### Get the custom fields of an organization

*Tags:* `Organizations`

#### Input Parameters
* `custom_field_type` - _optional_ - 1-Service , 2 - Guest , 3 - Opportunity
* `active` - _optional_ - 0 - all, 1- active, 2 - inactive

### x_restlet_v2_Organizations_Customfields

### Get List of appointments in a particular center between two dates with guest ,status and therapist filters as optional filters

> Status - Enum<br/>
> <br/>
> | Enum | Value |<br/>
> | -------- | -------- | <br/>
> | NoShow     | -2     | <br/>
> | Cancelled     | -1     | <br/>
> | New     | 0     | <br/>
> | Closed     | 1    |<br/>
> | Checkin     | 2     | <br/>
> | Confirm     | 4     | <br/>
> | Break     | 10    | <br/>
> | NotSpecified     | 11     | <br/>
> | Available     | 20     |

*Tags:* `Appointments`

#### Input Parameters
* `center_id` - _required_ - DataType: UniqueIdentifier(GUID)
* `start_date` - _required_ - DataType: DateTime(YYYY-MM-DD)
* `end_date` - _required_ - DataType: DateTime(YYYY-MM-DD)
* `status` - _optional_ - | Enum | Value |
| -------- | -------- | 
| NoShow     | -2     | 
| Cancelled     | -1     | 
| New     | 0     | 
| Closed     | 1    |
| Checkin     | 2     | 
| Confirm     | 4     | 
| Break     | 10    | 
| NotSpecified     | 11     | 
| Available     | 20     |
* `guest_id` - _optional_ - DataType: UniqueIdentifier(GUID)
* `therapist_id` - _optional_ - DataType: UniqueIdentifier(GUID)

### x_restlet_v2_appointments

### Get Guest Membership Details

> Returns membership information of a guest. <br/>
> <br/>
> Security: `Read permission on guest and memberships.  Guest can only view her information.`

*Tags:* `Guests`

#### Input Parameters
* `guestId` - _required_

### x_restlet_v2_guests__guestId__memberships

#### Input Parameters
* `guestId` - _required_

### Get Guest Custom Data

> Returns custom data of a guest. <br/>
> <br/>
> Security:`Write permission on the custom data.`

*Tags:* `Guests`

#### Input Parameters
* `guest_id` - _required_

### Create Guest Custom Data

*Tags:* `Guests`

#### Input Parameters
* `guest_id` - _required_

### x_restlet_v2_guests__guest_id__customdata

#### Input Parameters
* `guest_id` - _required_

### Gives list of Opportunities based on the filter

*Tags:* `Opportunities`

#### Input Parameters
* `view_id` - _required_ - view_id : center_id or organization_Id  for center view or organization view respectively)
Data Type :Unique Identifier(GUID)
* `page_num` - _required_ - range: starts from 1
* `records` - _required_ - number of records per page
* `keywords` - _optional_ - searches on opportunity_title,opportunity_description,first_name , last_name and opportunity no(when the passed string is a valid number)
* `owner` - _optional_ - GUID of the employee who is owning the opportunity
,Data Type :Unique Identifier(GUID)
* `type` - _optional_
* `status_id` - _optional_ - GUID of the status of the Opportunity,
Data Type :Unique Identifier(GUID)
* `priority_id` - _optional_ - GUID of the priority of the Opportunity,
Data Type :Unique Identifier(GUID)
* `guest_id` - _optional_ - GUID of the guest of the Opportunity,
Data Type :Unique Identifier(GUID)
* `creation_from_date` - _optional_ - start date for filter on date range of creation_date(date on which the opportunity is created) ,
Data Type : DateTime (yyyy-mm-dd)
* `creation_to_date` - _optional_ - end date for filter on date range of creation_date(date on which the opportunity is created) ,
Data Type : DateTime (yyyy-mm-dd)
* `followup_from_date` - _optional_ - start date for filter on date range of followup_date (Data Type : DateTime (yyyy-mm-dd))
* `followup_to_date` - _optional_ - end date for filter on date range of followup_date (Data Type : DateTime (yyyy-mm-dd))
* `disposition_id` - _optional_ - GUID of the required Opportunity Disposition based on which the opportunities are filtered, DataType: Unique Identifier(GUID)
* `Authorization` - _optional_ - access token
* `Content-Type` - _optional_ - application/json

### Create an Opportunity

> Example Request:<br/>
> ```<br/>
> {<br/>
> 	"center_id"  : "bcaf32ac-83a8-4988-8ebf-4a6d125835de",<br/>
> 	"opportunity_title" : "rda",<br/>
> 	"opportunity_description" : "hey its a good day",<br/>
> 	"opportunity_owner_id" : "ede781ef-7891-47b8-961e-a4729925431f",<br/>
> 	"guest_id" : "9dcd0709-74a8-48cd-9997-878e465f566d",<br/>
> 	"created_by_id" : "ede781ef-7891-47b8-961e-a4729925431f",<br/>
> 	"priority_type_id" : "E5196EC3-4E3C-4677-8AA2-B8E306F0FA5C",<br/>
> 	"status_id" : "5E61ACFD-CDE5-451E-B9BC-716B400453A4",<br/>
> 	"type" : "type",<br/>
> 	"followup_date" : "2016-12-15",<br/>
> 	"expected_close_date" : "2018-12-14",<br/>
> 	"listed_amount" : 1253,<br/>
> 	"offered_amount" : 1000,<br/>
> 	"optional_field_1" : "op1",<br/>
> 	"optional_field_2" : "op2",<br/>
> 	"optional_field_3" : "op3",<br/>
> 	"ticket_id" : "E5196EC3-1111-4677-8AA2-B8E306F0FA5C",<br/>
> 	"change_guest_center" : false,<br/>
> 	"disposition_id" : "5E61ACFD-CDE5-451E-B9BC-716B400453A4",<br/>
> 	 "custom_fields": {<br/>
> 		"ED727888-AE73-439E-AEF2-22E48A5AF3AF":"value1",<br/>
>     "0fb8a958-682e-4025-adef-0bac63359e05":"value2"<br/>
> 	},<br/>
> 	"lead_source" : {<br/>
> 	"id" : "0fb8a958-682e-4025-adef-0bac63359e05",<br/>
> 	"code" : "GH103"<br/>
> 	}<br/>
> }<br/>
> ```

*Tags:* `Opportunities`

#### Input Parameters
* `Authorization` - _required_ - access token
* `Content-Type` - _optional_ - application/json

### x_restlet_v2_opportunities

### Gives Meta Data of the Opportunities in the Organization.

> section : {<br/>
>                    All or -1 ,<br/>
>                    Priority or 1,<br/>
>                    Stage  or 2,<br/>
>                    Source or 3,<br/>
>                    Disposition or 4<br/>
>                 }<br/>
> <br/>
> Enum - active:{<br/>
>                            0 - All,<br/>
> 													 1 - Active,<br/>
> 													 2 - Inactive,<br/>
>                          }

*Tags:* `Opportunities`

#### Input Parameters
* `active` - _optional_ - for choosing between active,inactive and all for lead_sources and stages
* `source_code` - _optional_ - pass lead source code

### x_restlet_v2_opportunities_metadata__section_

#### Input Parameters
* `section` - _required_

### Deletes an Opportunity

*Tags:* `Opportunities`

#### Input Parameters
* `Authorization` - _optional_ - access token
* `Content-Type` - _optional_ - application/json

### Gets Details of an opportunity

*Tags:* `Opportunities`

#### Input Parameters
* `Authorization` - _required_ - access token
* `Content-Type` - _optional_ - application/json

### Edits Opportunity Details

> Example Request:<br/>
> <br/>
> ```<br/>
> {<br/>
> 	"center_id"  : "bcaf32ac-83a8-4988-8ebf-4a6d125835de",<br/>
> 	"opportunity_title" : "stafdfgcz5",<br/>
> 	"opportunity_description" : "hey its a good day",<br/>
> 	"opportunity_owner_id" : "ede781ef-7891-47b8-961e-a4729925431f",<br/>
> 	"guest_id" : "9dcd0709-74a8-48cd-9997-878e465f566d",<br/>
> 	"priority_type_id" : "E5196EC3-4E3C-4677-8AA2-B8E306F0FA5C",<br/>
> 	"stage_id" : "5E61ACFD-CDE5-451E-B9BC-716B400453A4",<br/>
> 	"type" : "package",<br/>
> 	"followup_date" : "2017-12-15",<br/>
> 	"expected_close_date" : "2018-12-14",<br/>
> 	"listed_amount" : 1253,<br/>
> 	"offered_amount" : 1000,<br/>
> 	"optional_field_1" : "op1",<br/>
> 	"optional_field_2" : "op2",<br/>
> 	"optional_field_3" : "op3",<br/>
> 	"change_guest_center" : false,<br/>
> 	"disposition_id" : "5E61ACFD-CDE5-451E-B9BC-716B400453A4",<br/>
>   "custom_fields": {<br/>
> 		"ED727888-AE73-439E-AEF2-22E48A5AF3AF":"value1",<br/>
>     "0fb8a958-682e-4025-adef-0bac63359e05":"value2"<br/>
> 	},<br/>
> 	"lead_source" : {<br/>
> 	"id" : "0fb8a958-682e-4025-adef-0bac63359e05",<br/>
> 	"code" : "GH103"<br/>
> 	}<br/>
> }<br/>
> ```

*Tags:* `Opportunities`

#### Input Parameters
* `Authorization` - _required_ - access token
* `Content-Type` - _optional_ - application/json

### x_restlet_v2_opportunities__OpportunityId_

#### Input Parameters
* `OpportunityId` - _required_ - Data Type: Unique Identifier(GUID)

### Gives list of Opportunity Notes

*Tags:* `Opportunities`

#### Input Parameters
* `Authorization` - _optional_ - access token
* `Content-Type` - _optional_ - application/json

### Create an Opportunity Notes

> Example Request:<br/>
> ```<br/>
> {<br/>
> 	"notes" : "height 6 feet",<br/>
> 	"updated_by_id" : "ede781ef-7891-47b8-961e-a4729925431f"<br/>
> }<br/>
> ```

*Tags:* `Opportunities`

#### Input Parameters
* `Authorization` - _required_ - access token
* `Content-Type` - _optional_ - application/json

### x_restlet_v2_opportunities__OpportunityId__notes

#### Input Parameters
* `OpportunityId` - _required_

### Get sales report of a center

*Tags:* `Sales`

#### Input Parameters
* `center_id` - _required_ - Unique Identifier
* `start_date` - _required_
* `end_date` - _required_
* `status` - _optional_ - 0 - open , 1 - closed , 2 - all
Default :- 0
* `item_type` - _optional_ - 0 - Service,
2- Product,
3-Membership,
4-Package,
6-Giftcard,
7-all
Default :- 0
* `Authorization` - _required_ - access token
* `Content-Type` - _optional_ - application/json

### x_restlet_v2_sales_salesreport

### Returns search results of a guest search

> search_value passed is used to search over below attributes<br/>
> <br/>
> | Guest Properties |<br/>
> | --- |<br/>
> | UserCode |<br/>
> | Username |<br/>
> | HomePhone |<br/>
> | WorkPhone |<br/>
> | FirstName  |<br/>
> | LastName |<br/>
> | MobilePhone |<br/>
> | Email |

*Tags:* `Guests`

#### Input Parameters
* `center_id` - _optional_ - DataType: Unique Identifier(GUID)
* `search_value` - _required_ - Cannot be Null or WhiteSpace
* `in_center` - _optional_ - searches across center for **false**. *center_id* should be passed,if this field is passed as **true**
* `include_employees` - _optional_ - searches for guest who are employees too. false if not employees are not needed
* `page_num` - _optional_ - page number needed. First page is 0. By default number of records overall is restricted to 25.
* `page_size` - _optional_ - page size needed. By default number of records overall is restricted to 25.

### x_restlet_v5_guests

## License

**flow**ground :- Telekom iPaaS / zenoti-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
