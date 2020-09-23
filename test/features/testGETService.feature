
@testGETService
Feature: GET service
    Validate the GET service endpoints.

    @getServicePosts
    Scenario: Validate the GET Posts response.
        Given a valid "jsonplaceholder" url
        When i request "posts" endpoint
        Then i should get "200" response status code
        And the "POSTS" schema should be proper

    @getServicePostsWithID
    Scenario: Validate the GET Posts response with ID.
        Given a valid "jsonplaceholder" url
        When i request "posts" endpoint with "1" ID
        Then i should get "200" response status code
        And the "POSTS_WITH_ID" schema should be proper
        And the response ID should be identical to request ID
        And the response should contain only one record

    @getServicePostsInvalid
    Scenario: Validate the GET Posts response with invalid post.
        Given a valid "jsonplaceholder" url
        When i request "invalidposts" endpoint
        Then i should get "404" response status code
