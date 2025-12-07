import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2024-03-01","projectId":"9x7itotf","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
