import type { H3Event } from "h3";
import initSocket from "~utils/socket";

const router = createRouter()

router.get('/socket', defineEventHandler((event: H3Event)=>initSocket(event)))

export default useBase('/api', router.handler)
