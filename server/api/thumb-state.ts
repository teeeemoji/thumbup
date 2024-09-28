import { models } from "@/models"

export default defineEventHandler(async (event) => {
    let uuid = event.node.req.cookies!.uuid

    let state = await models.Thumbups.findOne({uuid})

    if (!state) {
        state = await models.Thumbups.create({uuid, times: 0})
    }

    return {
        data: state
    }
})