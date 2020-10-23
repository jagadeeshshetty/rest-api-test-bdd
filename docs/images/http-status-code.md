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

| Status code | Description        | 🤔                                                                                                                                                                                                                                                                                                                                                                |
| :---------- | :----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100         | Continue           | An interim response. Indicates the client that the initial part of the request has been received and has not yet been rejected by the server. The client SHOULD continue by sending the remainder of the request or, if the request has already been completed, ignore this response. The server MUST send a final response after the request has been completed. |
| 101         | Switching Protocol | Sent in response to an Upgrade request header from the client, and indicates the protocol the server is switching to.                                                                                                                                                                                                                                             |

## 2xx: Success

| Status code | Description | 🤔                                    |
| :---------- | :---------- | ------------------------------------- |
| 200         | OK          | Indicates that request has succeeded. |

## Reference

- [Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content](https://tools.ietf.org/html/rfc7231)
- [Restful API](https://restfulapi.net/http-status-codes/)
