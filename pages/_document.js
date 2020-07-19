import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../styletron";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <StyletronProvider value={styletron}>
                <App {...props} />
                <script
                  type="text/javascript"
                  src="https://assets.calendly.com/assets/external/widget.js"
                ></script>
                <script src="https://squareup.com/appointments/buyer/widget/ouxfjo8dfqenei/8G9CPASP3E2Q4.js"></script>
              </StyletronProvider>
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
