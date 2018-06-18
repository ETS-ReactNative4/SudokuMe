This project was developed using React-Native

## How to Build
* Install Node.js
```
https://nodejs.org/en/download/
```
* Make sure of having react-native-cli installed globally:
    - `sudo npm install -g react-native-cli`
* Navigate to the directory
* Install modules:
    - `npm install`
* Install Expo app on your phone. You can also use a simulator if you want.

Google Play:
```
https://play.google.com/store/apps/details?id=host.exp.exponent
```
App Store:
```
https://itunes.apple.com/app/apple-store/id982107779
```
* Start the application:
    - `npm start`

* Press 'Q' on terminal to see more options


## Troubleshooting

### Networking

If you're unable to load the app on your phone due to a network timeout or a refused connection, a good first step is to verify that your phone and computer are on the same network and that they can reach each other. The App needs access to ports 19000 and 19001 so ensure that your network and firewall settings allow access from your device to your computer on both of these ports.

Try opening a web browser on your phone and opening the URL that the packager script prints, replacing `exp://` with `http://`. So, for example, if underneath the QR code in your terminal you see:

```
exp://192.168.0.1:19000
```

Try opening Safari or Chrome on your phone and loading

```
http://192.168.0.1:19000
```

and

```
http://192.168.0.1:19001
```

If this works, but you're still unable to load your app by scanning the QR code, please open an issue on the [Create React Native App repository](https://github.com/react-community/create-react-native-app) with details about these steps and any other error messages you may have received.

If you're not able to load the `http` URL in your phone's web browser, try using the tethering/mobile hotspot feature on your phone (beware of data usage, though), connecting your computer to that WiFi network, and restarting the packager. If you are using a VPN you may need to disable it.
