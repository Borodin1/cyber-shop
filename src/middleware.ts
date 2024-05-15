import { NextRequest, NextResponse } from "next/server";
import { PAGES_DASHBOARD } from "./configs/pages";



export default async function middleware(req: NextRequest, res: NextResponse) {
    const { url, cookies } = req
    const refreshToken = 'refreshToken'
    const authPage = url.includes('/auth')
    if(cookies.get(refreshToken)?.value && authPage) {
        return NextResponse.redirect(new URL(PAGES_DASHBOARD.HOME, url))
    }
    if(!cookies.get(refreshToken)?.value && authPage) {
        return NextResponse.next()
    }
}
export const config = {
    matcher: ['/auth/:path*']
}