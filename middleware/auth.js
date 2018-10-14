export default function (context) {

  context.userAgent = context.isServer ? context.req.headers['user-agent'] : navigator.userAgent
  if (context.isClient) {
    console.log('中间件1')
  }
}
