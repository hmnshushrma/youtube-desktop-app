const { app, BrowserWindow, Tray, dialog, ipcMain } = require('electron')
const path = require('path')
const urls = ['https://music.youtube.com/']
const error = 'No Internet Connetion'
const content = 'check your internet connection'
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
    icon: path.join(__dirname, 'assets/icons/png/64x64.png')
  })
  win.loadURL(urls[0])
  // win.loadURL(url.format({
  //     pathname: path.join(__dirname,"index.html"),
  //     protocol: 'file',
  //     slashes: true
  // }));

  win.once('ready-to-show', () => {
    win.show()
  })

  // console.log(ipcMain)
  // dialog.showErrorBox(error, content)

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)
