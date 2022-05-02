import GlobalStyles from '../src/styles/global';

const withGlobalStyles = (Story) => {
  return (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
}

export default withGlobalStyles;
