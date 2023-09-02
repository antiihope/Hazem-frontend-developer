import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import setCookie from 'set-cookie-parser';
import jwt from 'jsonwebtoken';
import axios from 'axios';

const testingAuth = {
  // testing auth credentials
  username: 'brainstorm',
  password: 'brainstormforce',
};

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const verifyToken = (headers) => {
  const cookies = setCookie.parse(headers.cookie, {
    decodeValues: true,
  });
  const token = cookies.find((cookie) => cookie.name === 'token')?.value;

  if (!token) {
    return false;
  } else {
    return jwt.verify(token, 'brainstorm', (err) => {
      if (err) {
        console.log('nope');
        return false;
      } else {
        return true;
      }
    });
  }
};

app.get('/api/isAuthenticated', async (req, res) => {
  const auth = verifyToken(req.headers);
  res.json({
    isAuthenticated: auth,
  });
});

app.get('/api/login', (req, res) => {
  const { username, password } = req.query;
  if (username === testingAuth.username && password === testingAuth.password) {
    const token = jwt.sign(
      {
        username,
      },
      'brainstorm',
      {
        expiresIn: '2d',
      }
    );
    res.setHeader('cache-control', 'no-cache');
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    });
    res.json({
      isAuthenticated: true,
    });
  } else {
    res.json({
      isAuthenticated: false,
    });
  }
});

app.get('/api/capsules', (req, res) => {
  const { status, original_launch, type } = req.query;
  const params = {};
  if (status) params.status = status;
  if (original_launch) params.original_launch = original_launch;
  if (type) params.type = type;

  // verify token first
  if (verifyToken(req.headers)) {
    axios
      .get('https://api.spacexdata.com/v3/capsules', {
        params,
      })
      .then((response) => {
        res.json(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    res.json({
      isAuthenticated: false,
    });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
export const handler = app;
