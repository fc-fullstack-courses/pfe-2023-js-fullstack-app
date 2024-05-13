const request = require('supertest');
const mongoose = require('mongoose');
const yup = require('yup');
const app = require('../app')();
const dbConfig = require('../configs/mongo.json');

// beforeAll - приймає коллбек який запускаєжться 1 раз перед запуском усіх тестів
beforeAll(async () => {
  // з'єднуємося з нашою БД
  // тут можна додати якысь дані до БД

  await mongoose.connect(dbConfig.CONNECTION_STRING);
});

// beforeAll - приймає коллбек який запускаєжться 1 раз після запуску усіх тестів
afterAll(async () => {
  await mongoose.disconnect();
});

const LOGIN_RESPONSE_SCHEMA = yup.object({
  data: yup.object({
    user: yup.object().required(),
    tokenPair: yup
      .object({
        accessToken: yup.string().required(),
        refreshToken: yup.string().required(),
      })
      .required(),
  }),
});

describe('Тестуємо функціонал логіну на сервері', () => {
  test('спроба залогінитися користувачу з коректними даними має бути успішною (201 код)', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ email: 'test@mail.com', password: 'admin' });

    expect(response.statusCode).toBe(201);

    // expect(LOGIN_RESPONSE_SCHEMA.isValidSync(response.body)).toBeTruthy();

    expect(LOGIN_RESPONSE_SCHEMA.isValidSync(response.body)).toBe(true);
  });

  test('спроба залогінитися користувачу без даних має провалитися', async () => {
    const response = await request(app).post('/auth/login').send({});

    expect(response.statusCode).toBe(400);

    // expect(LOGIN_RESPONSE_SCHEMA.isValidSync(response.body)).toBeTruthy();

    // expect(LOGIN_RESPONSE_SCHEMA.isValidSync(response.body)).toBe(true);
  });
});
