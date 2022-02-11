const db = connect("mongodb://localhost:27017/cards")

db.messages.drop()

db.messages.insertMany([
  {to: "Ron", "body":}
])
