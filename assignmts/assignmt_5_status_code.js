/*
What are Status Codes?

HTTP status codes are three-digit numbers returned by the server in the response. They tell the client whether the request was successful, redirected, or caused an error. Always set the correct status code — it is part of the API contract.

2xx — Success

200 OK: Standard success response. Used for successful GET, PUT, PATCH, and DELETE.
201 Created: Resource was successfully created. Use after a successful POST.
204 No Content: Success but no data to return. Common after a DELETE operation.
4xx — Client Errors

400 Bad Request: The request was malformed or missing required fields.
401 Unauthorized: Authentication is required but was not provided or is invalid.
403 Forbidden: Authenticated but not permitted to access the resource.
404 Not Found: The requested resource does not exist.
5xx — Server Errors

500 Internal Server Error: Something went wrong on the server. Generic catch-all for unhandled errors.

*/
