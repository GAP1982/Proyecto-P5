const mongoose = require ("mongoose")
const regex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/

const UserSchema = new mongoose.Schema (
    {
        name: {
          type: String,
          required: true,
          validate: {
              validator: function(v) {
                  return (v.length >= 2);
                },
                message: 'Name and lastName must have at least two letters'
          },
        },
        LastName: {
            type: String,
            required: true,
            validate: {
                validator: function(v) {
                    return (v.length >= 2);
                  },
                  message: 'Name and lastName must have at least two letters'
             },
          },
        email: {
            type: String,
            required: true,
            validate: {
                validator: function(v) {
                    return regex.test(v);
                },
                message: 'You must enter a valid email'
            },
        },
        password: {
            type: String,
            required: true,
        },
        favorites: [{"title": String}]
    },
    {
      timestamps: true,
    }
);

module.exports = mongoose.model("User", UserSchema);
