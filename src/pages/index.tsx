import Home from 'templates/Home'

type Props = {
  heading: string
}

export default function Index(props: Props) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: {
      heading: 'olá'
    }
  }
}

// export function getServerSideProps() {
//   return {
//     props: {
//       heading: 'olá com ssr'
//     }
//   }
// }

/*
Atenção:
- Os métodos getStaticProps/getServerSideProps só funcionam dentro de pages.

getStaticProps => gerar estático em build time
getServerSideProps => gerar via ssr a cada request
getInitialProps => gerar via ssr a cada request
*/
