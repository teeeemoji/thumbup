import { models } from "@/models"

export default defineEventHandler(async (event) => {
    let uuid = event.node.req.cookies!.uuid

    const query: any = getQuery(event)

    let state = await models.Thumbups.findOne({ where: { uuid } })

    if (!state) {
        state = await models.Thumbups.create({ uuid, times: 0 })
    }

    if (query?.times > state.times) {
        state.set({
            times: query.times
        })
        await state.save()
    } else {
        await state.increment(['times'])
    }


    await state.reload()

    return {
        data: state
    }
})