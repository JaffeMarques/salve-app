import { Layout } from "systems/Core/components/Layout";
import { gql, QueryResult, useQuery } from "@apollo/client";
import { css } from "@emotion/react";
import tw from "twin.macro";
import { Spinner } from "@chakra-ui/spinner";
import { Event } from 'strapi-types';

const EVENTS_QUERY = gql`
  query EventsQuery {
    events {
      id
      title
    }
  }
`;

type QueryResult = {
  events: Event[]
}

export default function Home() {
  const { loading, data } = useQuery<QueryResult>(EVENTS_QUERY)

  return (
    <Layout title="Events App">
      {loading ? <div css={styles.root}><Spinner /></div> : (
        <div css={styles.root}>
          {data?.events.map((event) => <div key={event.id}>{event.title}</div>)}
        </div>
      )}
      
    </Layout>
  )
}

const styles = {
  root: () => css`
    ${tw`flex flex-col items-center justify-center width[100vw] height[100vh]`}
  `
}



