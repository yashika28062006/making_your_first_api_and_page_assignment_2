const express = require("express");
const app = express();

const PORT = 3000;

// Define HTTP status code descriptions
const statusCodes = {
    200: "OK: The request has succeeded.",
    201: "Created: The request has been fulfilled, and a new resource is created.",
    204: "No Content: The request succeeded, but there is no content to send.",
    400: "Bad Request: The server cannot process the request due to client error.",
    401: "Unauthorized: Authentication is required.",
    403: "Forbidden: You do not have permission to access this resource.",
    404: "Not Found: The requested resource could not be found.",
    405: "Method Not Allowed: The HTTP method used is not supported for this resource.",
    429: "Too Many Requests: You have exceeded the allowed request limit.",
    500: "Internal Server Error: The server encountered an unexpected condition.",
    502: "Bad Gateway: The server received an invalid response from the upstream server.",
    503: "Service Unavailable: The server is temporarily unable to handle the request.",
    504: "Gateway Timeout: The server did not receive a timely response."
};

// Implement the GET /status-info endpoint
app.get("/status-info", (req, res) => {
    const code = parseInt(req.query.code);

    if (!code || !statusCodes[code]) {
        return res.status(400).json({
            status: 400,
            message: "Invalid or missing status code. Please provide a valid HTTP status code."
        });
    }

    res.json({
        status: code,
        message: statusCodes[code]
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(Status Code API is running on http://localhost:${PORT});
});

