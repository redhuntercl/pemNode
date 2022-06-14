# Use

Example using public and private keys rsa to encrypt or decrypt data.

Simulating a simple transactions executed from front to back using public key to encrypt and private for decrypt and vice versa

Install dependencies

crypto V1.0.1

```
npm install
```

go to keys folder and create private and public key

```
cd keys
openssl genrsa -out private_key.pem 4096
openssl rsa -pubout -in private_key.pem -out public_key.pem
```

then return to root path and execute an example with node or nodemon to execute livereload changes

```
node app
```

or

```
nodemon app
```

if you don't have nodemon installed, install in global dependencies (Mac/Linux requires sudo, Windows requires admin profile on terminal)

```
sudo npm install -g nodemon
```