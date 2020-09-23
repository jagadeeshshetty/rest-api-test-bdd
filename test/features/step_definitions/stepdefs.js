
const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const data = require('../../../data');
const API = require('../support/baseAPI');
const Base = require('../support/base');
const schema = require('../support/schema');

const api = new API();
const base = new Base();

Given('a valid {string} url', function (product) {
    switch (product) {
        case 'jsonplaceholder':
            base.setProduct(product);
            base.setBaseURL(data.jsonplaceholder.URL);
            return base.report(this, data.jsonplaceholder.URL);
        default:
            return new Error(`No valid url found for ${product} product.`);
    }
});

When('i request {string} endpoint', async function (endpoint) {
    base.setResponse(await api.get(`${base.getBaseURL()}/${endpoint}`));
    return base.report(this, `${base.getBaseURL()}/${endpoint}`);
});

When('i request {string} endpoint with {string} ID', async function (endpoint, id) {
    base.setPostsRequestID(id);
    base.setResponse(await api.get(`${base.getBaseURL()}/${endpoint}/${base.getPostsRequestID()}`));
    return base.report(this, `${base.getBaseURL()}/${endpoint}/${base.getPostsRequestID()}`);
});

Then('i should get {string} response status code', function (statusCode) {
    if (base.getResponse()['status'].toString() != '200') base.reportReqAndRes(this);
    return assert.equal(base.getResponse().status, statusCode);
});

Then('the {string} schema should be proper', async function (schemaName) {
    let result = await base.validateSchema(await base.getResponse().data, schema[base.getProduct()][schemaName]);
    if (result.errors.length > 0) {
        return assert.fail(`Schema Validation error:\nReason:\n${result.errors}`);
    } else {
        return assert(true);
    }
});

Then('the response should contain only one record', function () {
    let count = 0;
    for (const key in base.getResponse().data) {
        if (base.getResponse().data.hasOwnProperty(key)) {
            count++;
        }
    }
    return assert.equal(count, 4);
});

Then('the response ID should be identical to request ID', function () {
    return assert.equal(Number(base.getPostsRequestID()), base.getResponse().data.id);
});

When('i send POST request with {string} endpoint and {string} body', async function (endpoint, body) {
    switch (body) {
        case 'NEW_POST':
            body = JSON.stringify(data.jsonplaceholder.NEW_POST);
            break;
        default:
            break;
    }
    return base.setResponse(await api.post(`${base.getBaseURL()}/${endpoint}`, body));
});

Then('the response should contain valid ID', function () {
    assert.ok(base.getResponse().data.id > 0);
    return base.report(this, `Created/Updated ID: ${base.getResponse().data.id}`);
});

When('i update the {string} endpoint with {string} ID and {string} body', async function (endpoint, id, body) {
    base.setPutRequestID(id);
    body = JSON.stringify(data.jsonplaceholder.UPDATE_POST);
    base.setResponse(await api.put(`${base.getBaseURL()}/${endpoint}/${base.getPutRequestID()}`, body));
    return base.report(this, `${base.getBaseURL()}/${endpoint}/${base.getPutRequestID()}`);
});

When('i delete the {string} endpoint with {string} ID', async function (endpoint, id) {
    base.setPutRequestID(id);
    base.setResponse(await api.delete(`${base.getBaseURL()}/${endpoint}/${base.getPutRequestID()}`));
    return base.report(this, `${base.getBaseURL()}/${endpoint}/${base.getPutRequestID()}`);
});

When('the response body should be null', async function () {
    assert.ok(base.isEmpty(base.getResponse().data));
    return base.report(this, `Body:\n${JSON.stringify(base.getResponse().data)}`);
});
