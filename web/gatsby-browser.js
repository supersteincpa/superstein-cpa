import './src/styles/global.scss'

// export const shouldUpdateScroll = () => {
//   window.setTimeout(() => window.scrollTo(0, 0), 100)
//   return false
// }

// export const shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition,
// }) => {
//   console.log(location)
//   if (location.action === 'PUSH' && location?.hash?.length === 0) {
//     console.log('hoello')
//     window.setTimeout(
//       () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }),
//       600
//     )
//   }
//   return false
// }
