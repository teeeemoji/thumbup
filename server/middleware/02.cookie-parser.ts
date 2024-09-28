import { H3Event } from 'h3';
import cookieParser from 'cookie-parser';

const middleware = cookieParser()

export default defineEventHandler(async (event: H3Event) => {
    await new Promise((resolve) => {
        middleware(event.node.req, event.node.res, resolve);
    })
})


// export default eventHandler(async (event: H3Event) => {
//     // 使用中间件解析 cookies

//     // 设置 Cookie
//     event.node.res.setHeader('Set-Cookie', 'myCookie=myValue; Max-Age=3600');

//     // 获取 Cookie
//     const cookies = event.node.req.headers.cookie;
//     // 解析 cookies 字符串获取特定的 Cookie 值
//     const token = cookies?.split('; ').find((pair) => pair.startsWith('token='))?.split('=')[1];

//     return { message: 'Cookie handled' };
// });