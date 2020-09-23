
let validate = require('jsonschema').validate;
class Base {
    setBaseURL(url) {
        this.url = url;
    }

    getBaseURL() {
        return this.url;
    }

    setProduct(product) {
        this.product = product;
    }

    getProduct() {
        return this.product;
    }

    setPostsRequestID(postID) {
        this.postID = postID;
    }

    getPostsRequestID() {
        return this.postID;
    }

    setPutRequestID(putID) {
        this.putID = putID;
    }

    getPutRequestID() {
        return this.putID;
    }

    setResponse(res) {
        this.response = res;
    }

    getResponse() {
        return this.response;
    }

    async validateSchema(response, schema) {
        return validate(response, schema);
    }

    reportReqAndRes(_) {
        _.attach(`✨ REQUEST ✨\n`);
        _.attach(`Headers: ${JSON.stringify(this.getResponse()['headers'])}`);
        _.attach(`\n✨ RESPONSE ✨\n`);
        _.attach(`Status: ${this.getResponse()['status'].toString()} ${this.getResponse()['statusText'].toString()}`);
        _.attach(`Body: ${JSON.stringify(this.getResponse().data)}`);
    }

    report(_, detail) {
        _.attach(detail);
    }

    isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
};

module.exports = Base;
