import { createClient } from '@sanity/client'
import imageUrlBuilder  from '@sanity/image-url'

const client = createClient({
     projectId: '0zfdjhoz',
     dataset: 'production',
     useCdn: true,
     apiVersion: '2023-12-02'
})

const builder = imageUrlBuilder(client)

export default client
export const urlFor = (source) => builder.image(source);