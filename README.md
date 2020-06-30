# Minimalist Profile

A simple and minimalist profile template

## Support

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| 14+ | 38+ | 49+ | 10.2+ | 36+

## Preview

![Desktop](./screenshots/desktop.png)

![Mobile](./screenshots/mobile.png)

[Live preview](https://minimalist-profile.netlify.com/)

### How to use

- Fork the repository to your GitHub
- Edit [**profile.json**](https://github.com/vmarcosp/minimalist-profile/blob/master/src/profile.json) and insert your infos

`profile.json`
```json
{
  "pageTitle": "<Your page title, e.g Eric Bachmann | Investor>",
  "name": "",
  "themeColor": "<Main color for the theme, e.g #fffff>",
  "location": "",
  "biography": "",
  "socialLinks": [
    {
      "name": "",
      "icon": "",
      "link": ""
    },
  ]
}
```
- This project uses `Font-Awesome`, to see more social icons [click here](https://fontawesome.com/v4.7.0/)



### Requirements

- Node v8+

### Development

```sh
yarn dev 
# or
npm run dev
```

### Build

```sh
yarn build
# or
npm run build
```

## Design
This template is based in [Aerea UI kit](https://www.behance.net/gallery/36601943/AEREA-FREE-UI-KIT), created by [Juan Luis Valle](http://juanluisvalle.com/)

## License
<a href="http://www.wtfpl.net/"><img
       src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png"
       width="80" height="15" alt="WTFPL" /></a>  (Do What the Fuck You Want to Public License)
