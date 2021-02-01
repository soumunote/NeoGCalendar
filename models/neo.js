const axios = require('axios');

const authorizeNeo = async (username, passwd) => {
  const url = 'http://192.168.200.28/scripts/dneo/dneor.exe/certify/';
  const params = new URLSearchParams();
  params.append('cmd', 'certify');
  params.append('UserID', username);
  params.append('_word', passwd);
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  };

  let loginOk = false;
  try {
    res = await axios.post(url, params, config);
    loginOk = (res.data.status === 'ok');
  }
  catch(err) {
  }
  return loginOk;
};

module.exports = {
  authorizeNeo: authorizeNeo
};
