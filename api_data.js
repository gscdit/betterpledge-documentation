define({ "api": [
  {
    "type": "post",
    "url": "/beneficiary",
    "title": "Add a new beneficiary",
    "version": "1.0.0",
    "name": "add_beneficiary",
    "group": "Beneficiary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>The first name of the Beneficiary.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>the last name of the Beneficiary.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of Beneficiary.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "phone_no",
            "description": "<p>phone number of Beneficiary</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Beneficiary"
  },
  {
    "type": "get",
    "url": "/beneficiaries",
    "title": "Display all beneficiaries",
    "version": "1.0.0",
    "name": "get_beneficiary",
    "group": "Beneficiary",
    "description": "<p>Display all beneficiaries</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The beneficiary's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The beneficiary's username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>The first name of the beneficiary.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>The last name of the beneficiary.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password_hash",
            "description": "<p>password_hash of the beneficiary</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "email",
            "description": "<p>email of beneficiary</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "phone_no",
            "description": "<p>phone_no of beneficiary</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Beneficiary"
  },
  {
    "type": "post",
    "url": "/donor",
    "title": "add a new donor",
    "version": "1.0.0",
    "name": "add_user",
    "group": "Donor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>The first name of the Donor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>the last name of the Donor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of Donor.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "phone_no",
            "description": "<p>phone number of Donor</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "message",
            "description": "<p>donor The new user id.</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Donor"
  },
  {
    "type": "get",
    "url": "/donors",
    "title": "Display all donors",
    "version": "1.0.0",
    "name": "get_user",
    "group": "Donor",
    "description": "<p>Display all donors</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The donors's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The donors's username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>The first name of the donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>The last name of the donor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password_hash",
            "description": "<p>password_hash of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "email",
            "description": "<p>email of donor</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "phone_no",
            "description": "<p>phone_no of donor</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Donor"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "get jwt token",
    "version": "1.0.0",
    "name": "Login",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>if user is 'donor' or 'beneficiary'</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "email",
            "description": "<p>email of user</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "password",
            "description": "<p>password of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "token",
            "description": "<p>jwt token</p>"
          }
        ]
      }
    },
    "filename": "./routes.py",
    "groupTitle": "Login"
  }
] });