import { v4 as uuidV4 } from 'uuid'
import { models } from "@/models"

export default defineEventHandler((event) => {
    let uuid = event.node.req.cookies!.uuid
    if (!uuid) {
        uuid = uuidV4()
        event.node.req.cookies!.uuid = uuid
        event.node.res.setHeader('Set-Cookie', `uuid=${uuid}; Max-Age=${365 * 24 * 60 * 60}; HttpOnly; Secure`)
        models.Users.create({ uuid })
    }
})