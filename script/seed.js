'use strict';

const {config, DynamoDB} = require('aws-sdk');

config.update({
  accessKeyId:     'AKIAJWM4TIH5SZEBUQLQ', // This is dummy!
  secretAccessKey: 'yjrUBGSaEC/4cd5Dp6DD3dw2M1dKNIcO45WKovXL', // This is dummy!
  region:          'us-west-2',
});
config.dynamodb = { endpoint: 'http://localhost:4569' };
const dynamodb = new DynamoDB();

const params = {
  TableName : 'Products',
  KeySchema: [
    {AttributeName: 'id', KeyType: 'HASH'},
    {AttributeName: 'name', KeyType: 'RANGE'},
  ],
  AttributeDefinitions: [
    {AttributeName: 'id', AttributeType: 'N'},
    {AttributeName: 'name', AttributeType: 'S'},
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  }
};
dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Created table: ${JSON.stringify(data, undefined, 2)}`);
});
