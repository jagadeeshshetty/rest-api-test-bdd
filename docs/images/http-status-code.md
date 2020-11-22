# HTTP Status Codes

HTTP defines following these standard status codes that can be used to convey the results of a client’s request.

The status codes are divided into the five categories.

| Status code            | Description                                                                                    |
| :--------------------- | :--------------------------------------------------------------------------------------------- |
| **1xx: Informational** | Communicates transfer protocol-level information.                                              |
| **2xx: Success**       | Indicates that the client’s request was accepted successfully.                                 |
| **3xx: Redirection**   | Indicates that the client must take some additional action in order to complete their request. |
| **4xx: Client Error**  | This category of error status codes points the finger at clients.                              |
| **5xx: Server Error**  | The server takes responsibility for these error status codes.                                  |

## 1xx: Informational

| Status code | Description         | 🤔                                                                                                                                                                                                                                                                                                                                                                |
| :---------- | :------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100         | Continue            | An interim response. Indicates the client that the initial part of the request has been received and has not yet been rejected by the server. The client SHOULD continue by sending the remainder of the request or, if the request has already been completed, ignore this response. The server MUST send a final response after the request has been completed. |
| 101         | Switching Protocol  | Sent in response to an Upgrade request header from the client, and indicates the protocol the server is switching to.                                                                                                                                                                                                                                             |
| 102         | Processing (WebDAV) | Indicates that the server has received and is processing the request, but no response is available yet.                                                                                                                                                                                                                                                           |
| 103         | Early Hints         | Primarily intended to be used with the Link header. It suggests the user agent start preloading the resources while the server prepares a final response.                                                                                                                                                                                                         |

## 2xx: Success

| Status code | Description                   | 🤔                                                                                                                                                                                                                                                         |
| :---------- | :---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200         | OK                            | Indicates that request has succeeded.                                                                                                                                                                                                                      |
| 201         | Created                       | Indicates that request has succeeded and a new resource has been created as a result.                                                                                                                                                                      |
| 202         | Accepted                      | Indicates that the request has been received but not completed yet.                                                                                                                                                                                        |
|             |                               | It is typically used in log running requests and batch processing.                                                                                                                                                                                         |
| 203         | Non-Authoritative Information | Indicates that the returned metainformation in the entity-header is not the definitive set as available from the origin server, but is gathered from a local or a third-party copy. The set presented MAY be a subset or superset of the original version. |
| 204         | No Content                    | The server has fulfilled the request but does not need to return a response body. The server may return the updated meta information.                                                                                                                      |
| 205         | Reset Content                 | Indicates the client to reset the document which sent this request.                                                                                                                                                                                        |
| 206         | Partial Content               | It is used when the Range header is sent from the client to request only part of a resource.                                                                                                                                                               |
| 207         | Multi-Status (WebDAV)         | An indicator to a client that multiple operations happened, and that the status for each operation can be found in the body of the response.                                                                                                               |
| 208         | Already Reported (WebDAV)     | Allows a client to tell the server that the same resource (with the same binding) was mentioned earlier. It never appears as a true HTTP response code in the status line, and only appears in bodies.                                                     |
| 226         | IM Used                       | The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.                                                                         |

## Reference

- [Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content](https://tools.ietf.org/html/rfc7231)
- [Restful API](https://restfulapi.net/http-status-codes/)
