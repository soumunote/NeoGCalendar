const crypto = require('crypto');

/**
 * パスワードのHash値を求める。パスワード検証時に必要な値 [salt(base64), ハッシュ長,
 * パスワードhash値(base64)\ をまとめた値を文字列として返す
 * @param {String} passwd ハッシュ化したいパスワード
 * @param {Number} hashLength 求めるハッシュ文字列の長さ(base64前の)
 * @returns {String} [salt(base64), ハッシュ長,パスワードハッシュ値(base64)].join()
 */
export function makeHashedPasswd(passwd, hashLength) {
  const saltBuf = crypto.randomBytes(16);
  const resultBuf = crypto.scryptSync(passwd, saltBuf, hashLength);
  return [
    saltBuf.toString('base64'),
    hashLength,
    resultBuf.toString('base64')
  ].join();
}

/**
 * パスワードと、事前作成済み hash 値にて検証を行う
 * @param {String} passwd 検証対象パスワード
 * @param {String} hash 以前に makeHashedPasswd()にて作成した hash 値
 * @returns {Boolean} パスワードが正しければ True
 */
export function verifyHashedPasswd(passwd, hash) {
  const parts = hash.split(',');
  const saltBuf = Buffer.from(parts[0], 'base64');
  const hashLength = parseInt(parts[1]); 
  const resultBase64 = parts[2];
  const valueToTestBase64 = crypto.scryptSync(passwd, saltBuf, hashLength).toString('base64');
  return resultBase64 === valueToTestBase64;
}
