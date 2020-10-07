[![Netlify Status](https://api.netlify.com/api/v1/badges/39f4a3d2-46a1-4843-b45e-0fa650a693f7/deploy-status)](https://app.netlify.com/sites/muscle-track/deploys)

# muscle-track-mfe-capture-weight-loss-data

Micro frontend to capture data about weight loss. This is to be used with the main [container](https://github.com/michaelpmcmillan/muscle-track-mfe-container).

## Run in Development

```bash
yarn start:dev
```

## Notes

- Uses react-helmet to inject html headers, such as css cdn links. This keeps the micro-front-end self contained.
- Uses react-bootstrap and the bootstrap cdn.
- Uses formik to handle form data
- Uses yup to handle form validation
- Uses styled-components for easily packagable mfe css

## How was this app started?

```bash
npm install --global create-single-spa
npx create-single-spa
.
single-spa root config
yarn
y (typescript)
n (beta layouts)
michaelpmcmillan
```

## See

- https://hackernoon.com/building-react-forms-with-formik-yup-and-react-bootstrap-with-a-minimal-amount-of-pain-and-suffering-1sfk3xv8
- https://www.freakyjolly.com/react-forms-with-validation-example/
- https://github.com/jquense/yup#usage
