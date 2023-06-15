# NextJs Image Uploader

## Description

This project was built to complete all the user stories listed or described by the challenge itself. Hence in this project, a user can:

- Drag and drop an image to upload it
- Choose to select an image from any folder
- See a loader when uploading
- Can see the uploaded image and copy it
- Choose to copy to the clipboard

### General

This application was built reflecting the MVC architecture and the main dependencies(all found in the package.json) of the application are organised as so:

- Front-end User Interface(UI): [Tailwindcss](https://tailwindcss.com)
- File Storage: Not available

Other important services & dependency libraries of the application include:

- [react-dropzone](https://www.npmjs.com/package/react-dropzone): Simple React hook to create a HTML5-compliant drag'n'drop zone for files.
- [react-toastify](https://www.npmjs.com/package/react-toastify): The React-Toastify package enables developers to add toast notifications to their applications and also can set notifications.
- [copy-to-clipboard](https://www.npmjs.com/package/copy-to-clipboard): A copy to clipboard function.
- [axios](https://axios-http.com/docs/intro): An http client to fetch urls and make api calls or requests to the [Cloudinary API](https://cloudinary.com/documentation/image_upload_api_reference).

## Getting started

1. Clone this repository:

```shell
git clone https://github.com/kevin-sg/nextjs-image-uploader.git
```

2. Next, you need to setup the `.env` file found in the root with the appropriate credentials from the following service providers:

```shell
NEXT_PUBLIC_CLOUDINARY_BASE_URL = https://api.cloudinary.com/v1_1/cloud_name/image/upload

NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET = cloud_preset

```

3. Install all the dependency packages found in the `package.json` file:

```shell
#  ./nextjs-image-uploader
pnpm install
```

3. To start the development server of the application:

```shell
pnpm dev
```

### Author:

[KevinSG](https://github.com/kevin-sg)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

###

![GitHub last commit](https://img.shields.io/github/last-commit/kevin-sg/nextjs-image-uploader) ![GitHub contributors](https://img.shields.io/github/contributors/kevin-sg/nextjs-image-uploader) ![GitHub issues](https://img.shields.io/github/issues/kevin-sg/nextjs-image-uploader) ![GitHub repo size](https://img.shields.io/github/repo-size/kevin-sg/nextjs-image-uploader)
