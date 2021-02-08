import Link from 'next/link'
import Layout from '../components/Layout'
import { Button } from '@material-ui/core'

import TweetModal from '@/components/tweet-modal/TweetModal'

type Props = {};

const IndexPage = ({ }: Props) => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <TweetModal />
    </Layout>
  )
}

export default IndexPage