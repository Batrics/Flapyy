import { createAppKit } from '@reown/appkit/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { AppKitButtons } from '../../components/AppKitButtons'
import { WagmiTests } from '../../components/Wagmi/WagmiTests'
import { ThemeStore } from '../../utils/StoreUtil'
import { ConstantsUtil } from '../../utils/ConstantsUtil'
import { WagmiModalInfo } from '../../components/Wagmi/WagmiModalInfo'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { externalTestConnector } from '../../utils/ConnectorUtil'
import { mainnet } from '@reown/appkit/networks'

const queryClient = new QueryClient()

const connectors = [externalTestConnector()]
const networks = ConstantsUtil.EvmNetworks

const wagmiAdapter = new WagmiAdapter({
  ssr: true,
  networks,
  projectId: ConstantsUtil.ProjectId,
  connectors
})

const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks,
  featuredWalletIds: ['fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa'],
  defaultNetwork: mainnet,
  projectId: ConstantsUtil.ProjectId,
  features: {
    analytics: true
  },
  termsConditionsUrl: 'https://reown.com/terms-of-service',
  privacyPolicyUrl: 'https://reown.com/privacy-policy'
})

ThemeStore.setModal(modal)

export default function Wagmi() {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <AppKitButtons />
        <WagmiModalInfo />
        <WagmiTests />
      </QueryClientProvider>
    </WagmiProvider>
  )
}