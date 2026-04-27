export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0818',
        'bg-elevated': '#13101f',
        card: 'rgba(255,255,255,0.04)',
        border: 'rgba(255,255,255,0.08)',
        'border-strong': 'rgba(255,255,255,0.12)',
        purple: '#7c3aed',
        'purple-light': '#a855f7',
        'purple-glow': 'rgba(124,58,237,0.4)',
        text: '#ffffff',
        'text-soft': 'rgba(255,255,255,0.7)',
        'text-muted': 'rgba(255,255,255,0.5)',
        'text-dim': 'rgba(255,255,255,0.3)',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
        'purple-glow-radial': 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
      },
      boxShadow: {
        'purple-glow': '0 0 60px rgba(124,58,237,0.3)',
        'purple-glow-lg': '0 0 120px rgba(124,58,237,0.4)',
        card: '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
