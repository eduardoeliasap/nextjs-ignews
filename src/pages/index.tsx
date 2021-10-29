import Head from 'next/head';
import Image from 'next/image'

import styles from './home.module.scss';

import { SubscribeButton } from '../components/SubscribeButton';
import { GetServerSideProps, GetStaticProps } from 'next';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: Number;
  }
}

// interface HomeStaticProps {
//   name: string;
// }

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Inicio | ig.news</title>
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero} >
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publication <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image src="/images/avatar.svg" alt="Girl coding" height="0" width="0" />
      </main>      
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async() => {
  const price = await stripe.prices.retrieve('price_1JmPMCAD5r0SEMtmGvk9K1iy', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product
    }
  }
}

// export const getStaticProps: GetStaticProps = async() => {
//   const name = 'Eduardo';

//   return {
//     props: {
//       name,
//     },
//     revalidate: 60 * 60 * 24 // 24 horas
//   }
// }
