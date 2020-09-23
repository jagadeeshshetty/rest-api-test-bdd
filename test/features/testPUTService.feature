
@testPUTService
Feature: PUT service
    Validate the PUT service endpoints.

    @putServiceUpdatePost
    Scenario: Validate the PUT response.
        Given a valid "jsonplaceholder" url
        When i update the "posts" endpoint with "1" ID and "UPDATE_POST" body
        Then i should get "200" response status code
        And the "UPDATE_POST" schema should be proper
        And the response should contain valid ID
