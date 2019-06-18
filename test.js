const { app, BrowserWindow, Tray } = require('electron')
let appIcon = new Tray('./assets/icons/mac/icon.jpg')

const createWindow = () => {
  win = new BrowserWindow({
    center: true,
    width: 800,
    height: 600,
    resizable: true,
    webPreferences: {
      nodeIntegration: false,
      show: false
    },
    icon: './assets/icons/mac/icon.jpg'
  })
  // win.loadURL(urls[0])
  // win.loadURL(url.format({
  //     pathname: path.join(__dirname,"index.html"),
  //     protocol: 'file',
  //     slashes: true
  // }));
  win.once('ready-to-show', () => {
    win.show()
  })
  const appIcon = new Tray('./assets/icons/mac/icon.jpg')
  console.log(appIcon)
  win.on('closed', () => {
    win = null
  })
}
app.on('ready', createWindow)
