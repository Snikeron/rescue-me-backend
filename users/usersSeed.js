const User = require('./User')
// https://passwordhashing.com/BCrypt
const users = [
    {
        email: 'test2@mail.com',
        password: '$2b$10$4DJMl5LLmUjGoPSdaLWtzejTQOvsyqmqqZ8l35bvBbQsE1fZsLyBS'

    }
]

User.create(users)
    .then(() => {
        console.info(`Seeded users`)
    })
    .catch((err) => console.error(err))