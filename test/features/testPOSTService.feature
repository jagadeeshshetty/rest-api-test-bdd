
@testPOSTService
Feature: POST service
    Validate the POST service endpoints.

    @postServiceWithStringBody
    Scenario: Validate the POST response.
        Given a valid "jsonplaceholder" url
        When i send POST request with "posts" endpoint and "NEW_POST" body
        Then i should get "201" response status code
        And the "CREATE_NEW_POST" schema should be proper
        And the response should contain valid ID
