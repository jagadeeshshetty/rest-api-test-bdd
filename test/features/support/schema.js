
const JSONSchemaDraft = "http://json-schema.org/draft-07/schema#";

let schema = {
    jsonplaceholder: {
        POSTS: {
            "$schema": JSONSchemaDraft,
            "$id": "https://jsonplaceholder.typicode.com/posts",
            "title": "Posts",
            "description": "A posts",
            "type": "array",
            "properties": {
                "userId": {
                    "description": "The unique identifier for a user",
                    "type": "integer",
                    "uniqueItems": false
                },
                "id": {
                    "description": "The unique identifier for a post",
                    "type": "integer",
                    "uniqueItems": true
                },
                "title": {
                    "description": "Title of the post",
                    "type": "string"
                },
                "body": {
                    "description": "Body of the post",
                    "type": "string"
                },
            },
            "required": ["userId", "id"]
        },
        POSTS_WITH_ID: {
            "$schema": JSONSchemaDraft,
            "$id": "https://jsonplaceholder.typicode.com/posts/id",
            "title": "Post with ID",
            "description": "Returns a post with ID",
            "type": "object",
            "properties": {
                "userId": {
                    "description": "The unique identifier for a user",
                    "type": "integer",
                    "uniqueItems": false
                },
                "id": {
                    "description": "The unique identifier for a post",
                    "type": "integer",
                    "uniqueItems": true
                },
                "title": {
                    "description": "Title of the post",
                    "type": "string"
                },
                "body": {
                    "description": "Body of the post",
                    "type": "string"
                },
            },
            "required": ["userId", "id"]
        },
        CREATE_NEW_POST: {
            "$schema": JSONSchemaDraft,
            "$id": "https://jsonplaceholder.typicode.com/posts",
            "title": "Create new post",
            "description": "Returns a created post with ID",
            "type": "object",
            "properties": {
                "id": {
                    "description": "The unique identifier for a post",
                    "type": "integer",
                    "uniqueItems": true
                },
            },
            "required": ["id"]
        },
        UPDATE_POST: {
            "$schema": JSONSchemaDraft,
            "$id": "https://jsonplaceholder.typicode.com/posts/id",
            "title": "Update the post",
            "description": "Returns the updated post ID",
            "type": "object",
            "properties": {
                "id": {
                    "description": "The unique identifier for a post",
                    "type": "integer",
                    "uniqueItems": true
                },
            },
            "required": ["id"]
        }
    }
}

module.exports = schema;
