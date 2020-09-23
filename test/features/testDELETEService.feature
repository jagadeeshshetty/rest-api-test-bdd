
@testDELETEService
Feature: DELETE service
    Validate the DELETE service endpoints.

    @deletePostWithID @debug
    Scenario: Validate the DELETE response.
        Given a valid "jsonplaceholder" url
        When i delete the "posts" endpoint with "1" ID
        Then i should get "200" response status code
        Then the response body should be null
