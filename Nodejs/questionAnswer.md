. What is Node.js?
Answer

Node.js is an open-source JavaScript runtime built on Google's V8 JavaScript Engine.

It allows developers to run JavaScript outside the browser.

Traditionally:

JavaScript → Browser Only

With Node.js:

JavaScript → Browser + Server

*******************************************************

Why Node.js Was Created

Before Node.js:
PHP
Java
.NET
Python
were commonly used for backend development.

These technologies often relied on blocking I/O models.
Node.js introduced:
Event Driven Architecture
Non Blocking I/O
High Concurrency

*******************************************************


Q, How Node.js Works Internally?
A. Node.js uses a single-threaded event loop architecture. Heavy I/O operations are delegated to libuv's thread pool or the operating system. Once completed, callbacks are pushed to the queue and executed when the call stack becomes available.


*******************************************************
Q. What is the Event Loop?
A. The Event Loop is responsible for managing asynchronous operations.

*******************************************************

Q. What is Non-Blocking I/O?
A. Node.js does not wait for an operation to complete before moving to the next line.
Non-blocking I/O allows Node.js to continue executing code while waiting for external operations such as file reads or database queries. This improves concurrency and throughput.

*******************************************************

Q. What is the difference between process.nextTick() and setImmediate()?
A. process.nextTick() executes before the event loop continues, whereas setImmediate() executes during the Check phase. process.nextTick() has higher priority.


*******************************************************
Q. Can recursive process.nextTick() calls starve the event loop?
A. Recursive process.nextTick() calls can starve the event loop because Node always prioritizes the nextTick queue before moving to other phases.


*******************************************************

Q. What are Promises?
A. A Promise represents a future result of an asynchronous operation.
Promises help manage asynchronous operations by representing eventual completion or failure of a task.


*******************************************************

Q. What is the role of Async and Await?
A. Async/Await is syntactic sugar built on top of Promises that allows asynchronous code to be written in a synchronous style.


*******************************************************

Q. Error Handling in Async/Await
A. Always use
Centralized Error Middleware
instead of handling errors everywhere.
example 

try {
  const user = await User.findById(id);
} catch (error) {
  next(error);
}

*******************************************************


Q. What are the types of Middleware in Node.js/Express?
A. Types of Middleware:

1.Application Middleware is use for access every single request
2.Router Middleware is used for router specific middleware
3.Error Middleware is used for error handling
4.Authentication Middleware is used for authentication

*******************************************************
