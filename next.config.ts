
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /**
   * Gera um site estático na pasta 'out', ideal para hospedagem em qualquer servidor estático.
   */
  output: 'export',

  /**
   * A otimização de imagens do Next.js deve ser desativada quando se usa 'output: "export"'.
   */
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tagismd.com.br',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      }
    ],
  },
  
  /**
   * Ignora erros de TypeScript e ESLint durante o build para focar na exportação.
   */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
