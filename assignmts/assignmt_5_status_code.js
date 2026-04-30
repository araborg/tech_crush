/*
Questions: 
Assignment Topic: Analysis of HTTP Status Codes

Select two status codes from each of the five HTTP status 
code categories (1xx, 2xx, 3xx, 4xx, and 5xx), making a total 
of ten status codes. For each selected status code, provide 
a detailed explanation that includes its meaning, typical use 
cases, and how it is applied in real-world web development 
scenarios.

For example, you may choose status codes such as 200 (OK) and 
201 (Created) from the 2xx success category.

Your discussion should demonstrate a clear understanding of how
these status codes facilitate communication between clients and 
servers in web applications.

1xx - The 1xx status codes are Informational responses in the 
Hypertext Transfer Protocol (HTTP). They indicate that a request 
has been received and the server is continuing the process.

101 Switching Protocols: 
The server agrees to the client's request to switch to a different 
protocol (e.g., from HTTP to WebSockets).
The Scenario: A user opens a live chat app or a real-time stock 
ticker.

103 Early Hints: 
Allows the browser to start preloading resources (like CSS or JavaScript) 
while the server is still preparing the main response. 
The Scenario: A complex dashboard that takes 500ms to generate because 
it has to query several databases.


2xx — Success
200 OK: Standard success response. 
Used for successful GET, PUT, PATCH, and DELETE.
The Scenario: A user navigates to their profile page or searches for a 
product.

201 Created: Resource was successfully created. Use after a successful 
POST.
The Scenario: A new user signs up or a customer places a new order.


3xx -
301 & 308 Permanent Moves:
These codes tell browsers and search engines that a page has a new 
permanent home. 
The Scenario: You migrate your blog from blog.example.com to 
example.com, or you move your site from HTTP to HTTPS.

303 "Post-Redirect-Get" Pattern:
This is a standard design pattern used to prevent users from 
accidentally resubmitting forms. 
The Scenario: A customer clicks "Buy Now" on an e-commerce site.

4xx — Client Errors
400 Bad Request: 
The request was malformed or missing required fields.
The Scenario: A user submits a registration form but leaves out a 
required "Email" field, or sends an invalid JSON object to an API.

401 Unauthorized: 
Authentication is required but was not provided or is invalid.
Scenario: A user tries to view their "Settings" page without logging 
in. The server sends a 401, usually triggering the frontend to show 
a login modal


5xx — Server Errors
500 Internal Server Error: 
Something went wrong on the server. Generic catch-all for unhandled 
errors.
The Scenario: A bug in your code, like trying to access a property 
of null or a database query failing because of a syntax error.

1xx, 2xx, 3xx, 4xx, and 5xx
*/
