import { createFileRoute } from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-adapter'
import { z } from 'zod'

const SearchSchema = z.object({
    hello: z.string().default('world'),
})

export const Route = createFileRoute('/')({
  validateSearch: zodValidator(SearchSchema),
  component: RouteComponent,
})

function RouteComponent() {
    const search = Route.useSearch() // any

    console.log(search) // { hello: 'world' }


  return <div>Hello "/"!</div>
}
