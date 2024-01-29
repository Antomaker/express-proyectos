db.createUser(
  {
    user: "myuser",
    pwd: "example", // or cleartext password
    roles: [
      { role: "readWrite", db: "mydb" }
    ]
  }
)
