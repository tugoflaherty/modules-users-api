// Imports ---------------------------------------
import express from 'express';
import cors from 'cors';
import modulesRouter from './routers/modules-router.js';
import usersRouter from './routers/users-router.js';

// Configure express app -------------------------
const app = express();

// Configure middleware --------------------------
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors({origin: '*'}));
app.use(express.json());

// Configure routes ------------------------------
app.use('/api/modules', modulesRouter);
app.use('/api/users', usersRouter);
app.get('/api', (req, res) => {
    return res.status(200).json({
        "Message": "List of available endpoints",
        "AvailableEndpoints": [
            {
                "Entity": "Modules",
                "Endpoint": "/api/modules",
                "Example": "https://moduleusersapi.tugoflaherty.com/api/modules",
                "ObjectFormat": {
                    "ModuleID": "INTEGER",
                    "ModuleName": "STRING",
                    "ModuleCode": "STRING",
                    "ModuleLevel": "INTEGER",
                    "ModuleYearID": "INTEGER",
                    "ModuleLeaderID": "INTEGER",
                    "ModuleImageURL": "STRING (URL)",
                    "ModuleYearName": "STRING",
                    "ModuleLeaderName": "STRING"
                },
                "Services": {
                    "GET": [
                        {
                            "EndpointUsage": "/",
                            "Description": "Returns all modules",
                            "Example": "https://moduleusersapi.tugoflaherty.com/api/modules"
                        },
                        {
                            "EndpointUsage": "/{id}",
                            "Description": "Returns the specific module identified by the id provided",
                            "Example": "https://moduleusersapi.tugoflaherty.com/api/modules/1"
                        }
                    ],
                    "POST": {
                        "EndpointUsage": "/",
                        "Description": "Insert a new module record",
                        "Example": "https://moduleusersapi.tugoflaherty.com/api/modules"
                    },
                    "PUT": {
                        "EndpointUsage": "/{id}",
                        "Description": "Update the specific module record identified by the id provided",
                        "Example": "https://moduleusersapi.tugoflaherty.com/api/modules/1"
                    },
                    "DELETE": {
                        "EndpointUsage": "/{id}",
                        "Description": "Delete the specific module record identified by the id provided",
                        "Example": "https://moduleusersapi.tugoflaherty.com/api/modules/1"
                    }
                }
            },
            {
                "Entity": "Users",
                "Endpoint": "/api/users",
                "Example": "https://moduleusersapi.tugoflaherty.com/api/users",
                "ObjectFormat": {
                    "UserID": "INTEGER",
                    "UserFirstname": "STRING",
                    "UserLastname": "STRING",
                    "UserEmail": "STRING",
                    "UserPassword": "STRING",
                    "UserRegistered": "BOOLEAN",
                    "UserYearID": "INTEGER",
                    "UserUsertypeID": "INTEGER",
                    "UserLevel": "INTEGER",
                    "UserImageURL": "STRING (URL)",
                    "UserYearName": "STRING",
                    "UserUsertypeName": "STRING"
                },
                "Services": {
                    "GET": [
                        {
                            "EndpointUsage": "/",
                            "Description": "Returns all users",
                            "Example": "https://moduleusersapi.tugoflaherty.com/api/users"
                        },
                        {
                            "EndpointUsage": "/{id}",
                            "Description": "Returns the specific user identified by the id provided",
                            "Example": "https://moduleusersapi.tugoflaherty.com/api/users/1"
                        }
                    ],
                    "POST": {
                        "EndpointUsage": "/",
                        "Description": "Insert a new user record",
                        "Example": "https://moduleusersapi.tugoflaherty.com/api/users"
                    },
                    "PUT": {
                        "EndpointUsage": "/{id}",
                        "Description": "Update the specific user record identified by the id provided",
                        "Example": "https://moduleusersapi.tugoflaherty.com/api/users/1"
                    },
                    "DELETE": {
                        "EndpointUsage": "/{id}",
                        "Description": "Delete the specific user record identified by the id provided",
                        "Example": "https://moduleusersapi.tugoflaherty.com/api/users/1"
                    }
                }
            }
        ]
    })
})

// Start server ----------------------------------
const PORT = process.env.PORT || 5010;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));