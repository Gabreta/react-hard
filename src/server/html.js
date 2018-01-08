export default function html(options) {
  const {
    app = 'main',
    title = 'Gabriel',
    stylesheet = '/css/style.css',
    markup
  } = options;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${title}</title>
        <link rel="stylesheet" href="${stylesheet}" />
      </head>
      <body>
        <div id="root"></div>
        <script src="/app/${app}.bundle.js"></script>
      </body>
    </html>
  `;
}
