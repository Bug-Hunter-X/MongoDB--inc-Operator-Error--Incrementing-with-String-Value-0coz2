```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne( { "_id": ObjectId("653217654321") }, { $inc: { "counter": 1 } } );
```